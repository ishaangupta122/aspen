import { Resend } from "resend";
import { LOGO_BASE64, LOGO_CID } from "../src/lib/emailLogo";
import { validateEnquiry } from "../src/lib/validateEnquiry";
import {
  buildEnquiryHtml,
  buildEnquiryText,
  enquirySubject,
  oneLine,
} from "../src/lib/enquiryEmail";

// Pages are static files served by Cloudflare assets; this Worker only handles POST /api/enquiry.
const MAX = { type: 80, name: 120, phone: 40, email: 160, message: 5000 };
const hits = new Map(); // naive per-IP limit, per Worker instance

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const json = (body, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });

async function submitEnquiry(data, ip, env) {
  if (data.website) return { ok: true };

  const values = {};
  for (const key of Object.keys(MAX)) {
    values[key] = typeof data[key] === "string" ? data[key].trim().slice(0, MAX[key]) : "";
  }
  const errors = validateEnquiry(values);
  if (Object.keys(errors).length)
    return { ok: false, error: "Please check the form and try again.", errors };

  if (rateLimited(ip)) return { ok: false, error: "Too many enquiries. Please try again later." };

  if (!env.RESEND_API_KEY || !env.ENQUIRY_TO) {
    console.error("[enquiry] Missing RESEND_API_KEY or ENQUIRY_TO.");
    return { ok: false, error: "Could not send your enquiry right now." };
  }

  try {
    const resend = new Resend(env.RESEND_API_KEY);
    const receivedAt = new Date();
    const { error } = await resend.emails.send({
      from: env.RESEND_FROM || "Aspen Website <onboarding@resend.dev>",
      to: env.ENQUIRY_TO.split(",").map((s) => s.trim()).filter(Boolean),
      replyTo: oneLine(values.email),
      subject: enquirySubject(values),
      html: buildEnquiryHtml(values, { receivedAt }),
      text: buildEnquiryText(values, { receivedAt }),
      attachments: [
        { filename: "aspen-logo.png", content: LOGO_BASE64, contentType: "image/png", contentId: LOGO_CID },
      ],
    });
    if (error) throw new Error(error.message || "Resend error");
    return { ok: true };
  } catch (err) {
    console.error("[enquiry] send failed:", err?.message);
    return { ok: false, error: "Could not send your enquiry right now." };
  }
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname !== "/api/enquiry") return env.ASSETS.fetch(request);
    if (request.method !== "POST") return json({ ok: false, error: "Method not allowed" }, 405);

    // Same-origin only. Localhost is allowed so `next dev` (port 3000) can proxy here during development.
    const origin = request.headers.get("Origin");
    if (origin) {
      const { hostname } = new URL(origin);
      const local = hostname === "localhost" || hostname === "127.0.0.1";
      if (!local && origin !== new URL(request.url).origin) return json({ ok: false, error: "Forbidden" }, 403);
    }

    let data;
    try {
      data = await request.json();
    } catch {
      return json({ ok: false, error: "Invalid request" }, 400);
    }
    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    return json(await submitEnquiry(data && typeof data === "object" ? data : {}, ip, env));
  },
};
