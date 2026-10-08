"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { contact, enquiryTypes } from "@/data/contact";
import { validateEnquiry } from "@/lib/validateEnquiry";

const empty = {
  type: enquiryTypes[0],
  name: "",
  phone: "",
  email: "",
  message: "",
};

export default function EnquiryForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failure, setFailure] = useState("");

  const set = (key) => (event) => {
    setValues((v) => ({ ...v, [key]: event.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;
    const found = validateEnquiry(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setSending(true);
    setFailure("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website: event.currentTarget.elements.website.value,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setSent(true);
    } catch {
      setFailure(
        `We couldn’t send your enquiry. Please try again, or email us at ${contact.email}.`,
      );
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="ct-form ct-sent" role="status">
        <CheckCircle2 size={44} strokeWidth={1.6} />
        <h2>Thank you, {values.name.split(" ")[0]}.</h2>
        <p>
          Your {values.type.toLowerCase()} has been noted. Our team will reply
          to {values.email} within one or two working days.
        </p>
        <button
          type="button"
          className="ct-again"
          onClick={() => {
            setValues(empty);
            setSent(false);
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const field = (key, label, props) => (
    <div className={`ct-field ${errors[key] ? "has-error" : ""}`}>
      <label htmlFor={`ct-${key}`}>
        {label} <i>*</i>
      </label>
      {props.as === "textarea" ? (
        <textarea
          id={`ct-${key}`}
          rows={5}
          value={values[key]}
          onChange={set(key)}
          placeholder={props.placeholder}
        />
      ) : (
        <input
          id={`ct-${key}`}
          type={props.type}
          value={values[key]}
          onChange={set(key)}
          placeholder={props.placeholder}
          autoComplete={props.auto}
        />
      )}
      {errors[key] && <span className="ct-error">{errors[key]}</span>}
    </div>
  );

  return (
    <form className="ct-form" onSubmit={onSubmit} noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          opacity: 0,
        }}
      />

      <div className="ct-field">
        <label htmlFor="ct-type">
          Enquiry type <i>*</i>
        </label>
        <div className="ct-select">
          <select id="ct-type" value={values.type} onChange={set("type")}>
            {enquiryTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <ChevronDown size={18} />
        </div>
      </div>

      {field("name", "Full name", {
        type: "text",
        placeholder: "Enter your name",
        auto: "name",
      })}
      <div className="ct-row">
        {field("phone", "Phone number", {
          type: "tel",
          placeholder: "Enter your phone number",
          auto: "tel",
        })}
        {field("email", "Email address", {
          type: "email",
          placeholder: "Enter your email",
          auto: "email",
        })}
      </div>
      {field("message", "Message", {
        as: "textarea",
        placeholder: "Tell us about your requirement",
      })}

      {failure && (
        <span className="ct-error" role="alert">
          {failure}
        </span>
      )}
      <button
        className="button button-primary ct-submit"
        type="submit"
        disabled={sending}
      >
        {sending ? "Sending…" : "Submit enquiry"} <ArrowRight size={17} />
      </button>
      <p className="ct-privacy">
        We use your details only to respond to your enquiry. See our{" "}
        <Link href="/privacy">privacy policy</Link>.
      </p>
    </form>
  );
}
