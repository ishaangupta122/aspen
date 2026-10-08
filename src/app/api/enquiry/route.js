import { validateEnquiry } from "@/lib/validateEnquiry";

export const runtime = "nodejs";

// Where enquiries are delivered. Override with ENQUIRY_TO in the environment.
const DEFAULT_TO = "ishaang2209@gmail.com";

const MAX = { type: 80, name: 120, phone: 40, email: 160, message: 5000 };
const hits = new Map(); // naive per-IP rate limit (per server instance)

const json = (body, status = 200) => Response.json(body, { status });

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Honeypot: bots fill the hidden field. Pretend success.
  if (data.website) return json({ ok: true });

  const values = {};
  for (const key of Object.keys(MAX)) {
    values[key] = typeof data[key] === "string" ? data[key].trim().slice(0, MAX[key]) : "";
  }
  if (Object.keys(validateEnquiry(values)).length) return json({ error: "Please check the form and try again." }, 400);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return json({ error: "Too many enquiries. Please try again later." }, 429);

  // FormSubmit (https://formsubmit.co) emails the enquiry to ENQUIRY_TO. No account or password needed;
  // the first submission sends a one-time activation email to that inbox. The "email" field becomes the
  // Reply-To, so hitting Reply in your inbox answers the visitor directly.
  const to = process.env.ENQUIRY_TO || DEFAULT_TO;
  const base = process.env.FORMSUBMIT_BASE || "https://formsubmit.co/ajax";

  try {
    const res = await fetch(`${base}/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `[Website] ${values.type} from ${values.name}`,
        _template: "table",
        _captcha: "false",
        "Enquiry type": values.type,
        name: values.name,
        phone: values.phone,
        email: values.email,
        message: values.message,
      }),
    });
    const result = await res.json().catch(() => ({}));
    if (!res.ok || result.success === "false" || result.success === false) throw new Error(result.message || `status ${res.status}`);
    return json({ ok: true });
  } catch (err) {
    console.error("[enquiry] send failed:", err?.message);
    return json({ error: "Could not send your enquiry right now." }, 502);
  }
}
