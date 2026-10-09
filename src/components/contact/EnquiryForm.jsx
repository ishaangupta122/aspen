"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { contact, enquiryTypes } from "@/data/contact";
import { validateEnquiry } from "@/lib/validateEnquiry";
import { submitEnquiry } from "@/app/contact/actions";

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

  // Lets other parts of the page (e.g. the careers "Apply" link) pre-select a type.
  useEffect(() => {
    const pick = (event) => {
      const type = event.detail;
      if (enquiryTypes.includes(type)) setValues((v) => ({ ...v, type }));
    };
    window.addEventListener("aspen-enquiry-type", pick);
    return () => window.removeEventListener("aspen-enquiry-type", pick);
  }, []);

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
      const res = await submitEnquiry({
        ...values,
        website: event.currentTarget.elements.website.value,
      });
      if (!res?.ok) {
        if (res?.errors) setErrors(res.errors);
        throw new Error(res?.error || "send failed");
      }
      setSent(true);
    } catch (err) {
      setFailure(
        `${err?.message && err.message !== "send failed" ? err.message + " " : ""}We couldn’t send your enquiry. Please try again, or email us at ${contact.email}.`,
      );
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="px-0 gap-4 rounded-[var(--radius-lg)] pt-5 pb-1.5 grid flex-col items-start" role="status">
        <CheckCircle2 className="text-[color:var(--rf-teal)] mb-3.5" size={44} strokeWidth={1.6} />
        <h2 className="mx-0 mt-0 mb-[22px] font-semibold text-[22px] leading-[1.3] font-body tracking-[-0.01em] [word-spacing:0.06em] text-navy">Thank you, {values.name.split(" ")[0]}.</h2>
        <p className="mx-0 mt-2.5 mb-6 text-[#4a5b6c] text-[14px] leading-[1.6] font-normal font-body">
          Your {values.type.toLowerCase()} has been noted. Our team will reply
          to {values.email} within one or two working days.
        </p>
        <button
          type="button"
          className="px-6 py-[13px] rounded-[var(--radius-md)] border border-solid border-[#c9d3d2] [background:var(--c-white)] font-semibold text-[14px] leading-[normal] font-heading cursor-pointer hover:[background:var(--c-surface-tint)] focus-visible:rounded-[max(var(--ring-r,0px),3px)]"
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

  const field = (key, label, props) => {
    const errId = `ct-${key}-error`;
    const common = {
      id: `ct-${key}`,
      name: key,
      value: values[key],
      onChange: set(key),
      placeholder: props.placeholder,
      required: true,
      "aria-required": true,
      "aria-invalid": errors[key] ? true : undefined,
      "aria-describedby": errors[key] ? errId : undefined,
    };
    return (
      <div className={`mb-0 ct-field ${errors[key] ? " has-error" : ""}`}>
        <label className="block mb-[7px] text-navy font-semibold text-[13.5px] leading-[1.4] font-body" htmlFor={`ct-${key}`}>
          {label} <i className="text-red not-italic [&[aria-hidden]]:text-red [&[aria-hidden]]:not-italic" aria-hidden="true">*</i>
        </label>
        {props.as === "textarea" ? (
          <textarea className="px-[15px] py-3 rounded-[4px] border border-solid border-[#c3cfdc] w-full [background:#fff] text-navy font-normal text-[15.5px] leading-normal font-body [transition:border-color_var(--dur-fast)_ease,box-shadow_var(--dur-fast)_ease] [resize:vertical] min-h-[120px] placeholder:text-[#8fa0a8] hover:[&&&&]:border-navy focus:[&&&&&]:border-navy focus:[&&&&]:[box-shadow:0_0_0_3px_rgba(11,35,66,.22)] focus:outline-[length:0] focus:[outline-style:none] focus:outline-current [.ct-field.has-error_&]:border-[#b3261e] [.ct-field.has-error_&]:[box-shadow:0_0_0_4px_rgba(192,57,43,0.08)] [&:user-invalid]:[&&&]:border-[#b3261e] [&:user-invalid]:[&&&]:[box-shadow:0_0_0_3px_rgba(179,38,30,0.1)] focus-visible:[&&]:outline-[length:0] focus-visible:[&&]:[outline-style:none] focus-visible:[&&]:outline-current" {...common} rows={5} minLength={10} />
        ) : (
          <input className="px-[15px] py-3 rounded-[4px] border border-solid border-[#c3cfdc] w-full [background:#fff] text-navy font-normal text-[15.5px] leading-normal font-body [transition:border-color_var(--dur-fast)_ease,box-shadow_var(--dur-fast)_ease] min-h-[48px] placeholder:text-[#8fa0a8] hover:[&&&&]:border-navy focus:[&&&&&]:border-navy focus:[&&&&]:[box-shadow:0_0_0_3px_rgba(11,35,66,.22)] focus:outline-[length:0] focus:[outline-style:none] focus:outline-current [.ct-field.has-error_&]:border-[#b3261e] [.ct-field.has-error_&]:[box-shadow:0_0_0_4px_rgba(192,57,43,0.08)] [&:user-invalid]:[&&&]:border-[#b3261e] [&:user-invalid]:[&&&]:[box-shadow:0_0_0_3px_rgba(179,38,30,0.1)] focus-visible:[&&]:outline-[length:0] focus-visible:[&&]:[outline-style:none] focus-visible:[&&]:outline-current"
            {...common}
            type={props.type}
            autoComplete={props.auto}
            inputMode={props.inputMode}
            pattern={props.pattern}
            title={props.title}
          />
        )}
        {errors[key] && (
          <span className="block mt-2 text-[#a32019] text-[13px] font-medium" id={errId} role="alert">
            {errors[key]}
          </span>
        )}
      </div>
    );
  };

  return (
    <form className="p-0 gap-4 rounded-[var(--radius-lg)] grid" name="enquiry" onSubmit={onSubmit}>
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

      <div className="gap-[18px] grid grid-cols-[repeat(2,minmax(0,1fr))] max-[560px]:grid-cols-[1fr]">
        <div className="ct-field mb-0">
          <label className="block mb-[7px] text-navy font-semibold text-[13.5px] leading-[1.4] font-body" htmlFor="ct-type">
            Enquiry type <i className="text-red not-italic [&[aria-hidden]]:text-red [&[aria-hidden]]:not-italic" aria-hidden="true">*</i>
          </label>
          <div className="relative">
            <select className="py-3 rounded-[4px] border border-solid border-[#c3cfdc] w-full pr-11 pl-[15px] [background:#fff] text-navy font-normal text-[15.5px] leading-normal font-body [transition:border-color_var(--dur-fast)_ease,box-shadow_var(--dur-fast)_ease] [appearance:none] cursor-pointer min-h-[48px] hover:border-navy focus:[&&]:border-navy focus:[box-shadow:0_0_0_3px_rgba(11,35,66,.22)] focus:outline-[length:0] focus:[outline-style:none] focus:outline-current focus-visible:[&&]:outline-[length:0] focus-visible:[&&]:[outline-style:none] focus-visible:[&&]:outline-current"
              id="ct-type"
              name="type"
              required
              value={values.type}
              onChange={set("type")}>
              {enquiryTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-[15px] top-1/2 [transform:translateY(-50%)] pointer-events-none text-navy" size={18} />
          </div>
        </div>
        {field("name", "Full name", {
          type: "text",
          placeholder: "Your name",
          auto: "name",
        })}
      </div>
      <div className="gap-[18px] grid grid-cols-[repeat(2,minmax(0,1fr))] max-[560px]:grid-cols-[1fr]">
        {field("phone", "Phone number", {
          type: "tel",
          placeholder: "+91 98765 43210",
          auto: "tel",
          inputMode: "tel",
          pattern: "[+\\d][\\d\\s\\-]{7,}",
          title: "Enter a valid phone number, e.g. +91 98765 43210",
        })}
        {field("email", "Email address", {
          type: "email",
          placeholder: "you@example.com",
          auto: "email",
        })}
      </div>
      {field("message", "Message", {
        as: "textarea",
        placeholder: "Tell us how we can help",
      })}

      {failure && (
        <span className="block mt-2 text-[#a32019] text-[13px] font-medium" role="alert">
          {failure}
        </span>
      )}
      <div className="gap-3.5 flex flex-wrap items-stretch flex-col mt-0">
        <button
          className="button px-[26px] py-0 gap-2.5 border-0 border-none inline-flex items-center min-h-[48px] [font:var(--btn-font)] [transition:background_var(--dur-fast)_ease,border-color_var(--dur-fast)_ease,color_var(--dur-fast)_ease,box-shadow_var(--dur-fast)_ease] [background:var(--c-navy)] text-white w-full justify-center mt-1.5 cursor-pointer font-semibold tracking-[0.005em] min-w-[190px] [&&&]:rounded-[4px] [&&&]:border-navy hover:border-[color:var(--c-blue-dark)] hover:[transform:none] hover:[box-shadow:none] hover:[&&&]:[background:var(--c-navy-soft,#123760)] disabled:opacity-[0.65] disabled:[cursor:progress] [&:hover:not(:disabled)]:[background:var(--c-navy-soft,#123760)] [&:hover:not(:disabled)]:[&&]:border-[color:var(--c-blue-dark)] focus-visible:rounded-[max(var(--ring-r,0px),3px)]"
          type="submit"
          disabled={sending}
        >
          {sending ? "Sending…" : "Submit enquiry"}
          {!sending && <ArrowRight className="[transition:transform_var(--dur-fast)] opacity-[0.9] [.button:hover_&]:[transform:none]" size={17} />}
        </button>
      </div>
    </form>
  );
}
