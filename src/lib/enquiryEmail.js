import { SITE_NAME, SITE_URL } from "./site";
import { LOGO_CID } from "./emailLogo";

// Email-safe, table-based layout with inline styles (works in Gmail, Outlook, Apple Mail, mobile clients).
const NAVY = "#0b2545";
const INK = "#1f2937";
const MUTED = "#6b7280";
const RULE = "#e3e8ef";
const PAPER = "#f4f6f9";
const FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

export function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const oneLine = (value = "") => String(value).replace(/[\r\n]+/g, " ").trim();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

export function enquirySubject({ type, name }) {
  return oneLine(`[Website] ${type} from ${name}`);
}

function row(label, valueHtml, last = false) {
  return `
    <tr>
      <td class="stack" style="padding:14px 0;${last ? "" : `border-bottom:1px solid ${RULE};`}width:140px;vertical-align:top;font:600 11px/1.4 ${FONT};letter-spacing:.08em;text-transform:uppercase;color:${MUTED};">${label}</td>
      <td class="stack" style="padding:14px 0;${last ? "" : `border-bottom:1px solid ${RULE};`}vertical-align:top;font:400 15px/1.5 ${FONT};color:${INK};">${valueHtml}</td>
    </tr>`;
}

export function buildEnquiryHtml(values, meta = {}) {
  const { type, name, phone, email, message } = values;
  const received = formatDate(meta.receivedAt || new Date());
  const first = name.split(" ")[0];
  // Plain address in the mailto (an encoded "@" leaves the To field empty in some mail apps).
  const mailto = escapeHtml(
    `mailto:${oneLine(email)}?subject=${encodeURIComponent(`Re: ${oneLine(type)}`)}`,
  );
  const tel = phone.replace(/[^\d+]/g, "");
  const body = escapeHtml(message).replace(/\r?\n/g, "<br>");
  const site = SITE_URL.replace(/^https?:\/\//, "");
  // Inline (CID) logo: attached by the server action, so it shows without any hosting.
  const logoSrc = meta.logoSrc || `cid:${LOGO_CID}`;
  const link = `color:${NAVY};text-decoration:underline;`;

  const cell = (title, valueHtml) => `
        <td class="col" width="50%" valign="top" style="padding:0 0 18px;">
          <div style="font:600 11px/1.4 ${FONT};letter-spacing:.08em;text-transform:uppercase;color:${MUTED};">${title}</div>
          <div style="margin-top:3px;font:400 15px/1.45 ${FONT};color:${INK};word-break:break-word;">${valueHtml}</div>
        </td>`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>New enquiry from ${escapeHtml(name)}</title>
<style>
  @media only screen and (max-width:620px){
    .wrap{width:100%!important}
    .pad{padding-left:22px!important;padding-right:22px!important}
    .col{display:block!important;width:100%!important;box-sizing:border-box}
    .btn{display:block!important;text-align:center!important}
  }
</style>
</head>
<body style="margin:0;padding:0;background:${PAPER};-webkit-text-size-adjust:100%;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">${escapeHtml(
    oneLine(message).slice(0, 90),
  )}${"&#847;&zwnj;&nbsp;".repeat(120)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PAPER};">
  <tr><td align="center" style="padding:24px 12px;">

    <table role="presentation" class="wrap" width="560" cellpadding="0" cellspacing="0" border="0" style="width:560px;max-width:560px;background:#ffffff;border:1px solid ${RULE};border-radius:6px;">

      <tr><td class="pad" style="padding:24px 32px 20px;border-bottom:1px solid ${RULE};">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
          <td valign="middle"><img src="${logoSrc}" width="32" height="32" alt="" style="display:block;width:32px;height:32px;border:0;"></td>
          <td valign="middle" style="padding-left:10px;font:600 15px/1.3 ${FONT};color:${NAVY};">${escapeHtml(SITE_NAME)}</td>
        </tr></table>
      </td></tr>

      <tr><td class="pad" style="padding:26px 32px 4px;">
        <div style="font:600 11px/1.4 ${FONT};letter-spacing:.08em;text-transform:uppercase;color:${MUTED};">${escapeHtml(type)}</div>
        <h1 style="margin:6px 0 4px;font:600 20px/1.3 ${FONT};color:${NAVY};">New enquiry from ${escapeHtml(name)}</h1>
        <div style="font:400 13px/1.5 ${FONT};color:${MUTED};">${escapeHtml(received)} IST</div>
      </td></tr>

      <tr><td class="pad" style="padding:22px 32px 4px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
          ${cell("Email", `<a href="mailto:${escapeHtml(oneLine(email))}" style="${link}">${escapeHtml(email)}</a>`)}
          ${cell("Phone", `<a href="tel:${escapeHtml(tel)}" style="${link}">${escapeHtml(phone)}</a>`)}
        </tr></table>
      </td></tr>

      <tr><td class="pad" style="padding:0 32px;">
        <div style="font:600 11px/1.4 ${FONT};letter-spacing:.08em;text-transform:uppercase;color:${MUTED};">Message</div>
        <div style="margin-top:8px;border-left:2px solid ${NAVY};padding:2px 0 2px 16px;font:400 15px/1.65 ${FONT};color:${INK};word-break:break-word;">${body}</div>
      </td></tr>

      <tr><td class="pad" style="padding:28px 32px 30px;">
        <a class="btn" href="${mailto}" style="display:inline-block;background:${NAVY};color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:5px;font:600 14px/1 ${FONT};">Reply to ${escapeHtml(first)}</a>
      </td></tr>

      <tr><td class="pad" style="border-top:1px solid ${RULE};padding:16px 32px;font:400 12px/1.6 ${FONT};color:${MUTED};">
        Sent from the contact form at <a href="${SITE_URL}/contact" style="color:${MUTED};text-decoration:underline;">${escapeHtml(site)}/contact</a>
      </td></tr>
    </table>

  </td></tr>
</table>
</body>
</html>`;
}

export function buildEnquiryText(values, meta = {}) {
  const { type, name, phone, email, message } = values;
  return [
    `New website enquiry — ${type}`,
    `Received: ${formatDate(meta.receivedAt || new Date())} (IST)`,
    "",
    `Name:  ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Type:  ${type}`,
    "",
    "Message:",
    message,
    "",
    `Reply to this email to respond to ${email} directly.`,
  ].join("\n");
}
