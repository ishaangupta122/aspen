import { enquiryTypes } from "@/data/contact";

export function validateEnquiry(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!/^[+\d][\d\s-]{7,}$/.test(v.phone.trim())) e.phone = "Enter a valid phone number.";
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (v.message.trim().length < 10) e.message = "Please add a few more details.";
  if (!enquiryTypes.includes(v.type)) e.type = "Please choose an enquiry type.";
  return e;
}
