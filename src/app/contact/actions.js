"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { LOGO_BASE64, LOGO_CID } from "@/lib/emailLogo";
import { validateEnquiry } from "@/lib/validateEnquiry";
import {
  buildEnquiryHtml,
  buildEnquiryText,
  enquirySubject,
  oneLine,
} from "@/lib/enquiryEmail";

const MAX = { type: 80, name: 120, phone: 40, email: 160, message: 5000 };
const hits = new Map(); // naive per-IP limit, per server instance

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

/** Validates the enquiry on the server and emails it via Resend. Env: RESEND_API_KEY, ENQUIRY_TO, RESEND_FROM. The visitor is set as replyTo. */
export async function submitEnquiry(input) {
  const data = input && typeof input === "object" ? input : {};

  // Honeypot: bots fill the hidden field, so pretend success.
  if (data.website) return { ok: true };

  const values = {};
  for (const key of Object.keys(MAX)) {
    values[key] =
      typeof data[key] === "string" ? data[key].trim().slice(0, MAX[key]) : "";
  }
  const errors = validateEnquiry(values);
  if (Object.keys(errors).length)
    return { ok: false, error: "Please check the form and try again.", errors };

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(ip))
    return { ok: false, error: "Too many enquiries. Please try again later." };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO;
  const from = process.env.RESEND_FROM || "Aspen Website <onboarding@resend.dev>";
  const missing = [
    !apiKey && "RESEND_API_KEY",
    !to && "ENQUIRY_TO",
  ].filter(Boolean);
  if (missing.length) {
    console.error(
      `[enquiry] Missing ${missing.join(" and ")}. Add it to .env.local (project root, next to package.json) and restart the dev server.`,
    );
    return {
      ok: false,
      error:
        process.env.NODE_ENV === "development"
          ? `Server setup incomplete: ${missing.join(" and ")} not found. Check .env.local and restart npm run dev.`
          : "Could not send your enquiry right now.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const receivedAt = new Date();
    const { error } = await resend.emails.send({
      from,
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      replyTo: oneLine(values.email),
      subject: enquirySubject(values),
      html: buildEnquiryHtml(values, { receivedAt }),
      text: buildEnquiryText(values, { receivedAt }),
      attachments: [
        {
          filename: "aspen-logo.png",
          content: LOGO_BASE64,
          contentType: "image/png",
          contentId: LOGO_CID,
        },
      ],
    });
    if (error) throw new Error(error.message || "Resend error");
    return { ok: true };
  } catch (err) {
    console.error("[enquiry] send failed:", err?.message);
    return {
      ok: false,
      error:
        process.env.NODE_ENV === "development"
          ? `Resend error: ${err?.message}`
          : "Could not send your enquiry right now.",
    };
  }
}
