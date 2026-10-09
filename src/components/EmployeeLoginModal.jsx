"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ExternalLink,
  Globe,
  Mail,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";

// Update these links if the CBO login addresses change.
const CBO = {
  web: "https://cboerp.com",
  android:
    "https://play.google.com/store/apps/details?id=com.cbo.moibile_reporting_new",
  ios: "https://apps.apple.com/us/app/id1562996802",
};

export default function EmployeeLoginModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="p-6 inset-0 fixed z-[1000] grid [place-items:center] [background:rgba(7,25,47,0.7)] [backdrop-filter:none] [animation:pt-fade_var(--dur)_ease_both] max-[560px]:p-3"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="overflow-hidden rounded-[var(--radius-lg)] border-0 border-none border-current w-full max-w-[640px] max-h-[min(92vh,760px)] [background:var(--c-paper)] text-[color:var(--c-ink)] font-body [box-shadow:var(--shadow-3)] flex flex-col [animation:pt-pop_var(--dur)_ease_both]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="el-title">
        <div className="py-6 flex-none rounded-none flex items-center justify-between pr-6 pl-9 [background:var(--c-navy)] text-white max-[560px]:pl-[22px] max-[560px]:py-[18px] max-[560px]:pr-4">
          <div className="gap-4 flex items-center">
            <span className="flex-none rounded-[var(--radius-md)] [place-items:center] text-[color:var(--c-blue)] font-extrabold text-[20px] leading-[normal] font-heading flex w-[52px] [background:var(--c-white)] h-[52px] items-center justify-center">
              <img className="block w-[34px] h-[34px] object-contain" src="/images/logo-mark.png" alt="" width="34" height="34" />
            </span>
            <span>
              <strong className="block font-semibold text-[17px] leading-[normal] font-heading tracking-[0]">Aspen Pharmaceuticals</strong>
              <em className="block mt-1 not-italic text-[13px] tracking-[0.14em] uppercase text-[#a4c4c1]">Staff portal</em>
            </span>
          </div>
          <button type="button" className="rounded-[var(--radius-sm)] border border-solid border-white/30 grid [place-items:center] w-9 h-9 [background:transparent] text-white cursor-pointer [transition:background_var(--dur-fast)] hover:[background:rgba(255,255,255,0.14)] focus-visible:rounded-[max(var(--ring-r,0px),3px)]" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="px-9 pt-10 pb-8 max-[560px]:px-[22px] max-[560px]:pt-7 max-[560px]:pb-6">
          <h2 className="mx-0 mt-0 mb-3 font-semibold text-[28px] leading-[1.2] font-heading text-[color:var(--c-ink)] [word-spacing:0.06em] !tracking-[var(--heading-tracking)] max-[560px]:text-[24px]" id="el-title">Employee Login</h2>
          <p className="mx-0 mt-0 mb-7 text-[color:var(--c-muted)] text-[16px] leading-[1.65]">
            Sign in through <strong className="text-[color:var(--c-ink)] font-semibold">CBO ERP</strong> on the web, or use the{" "}
            <strong className="text-[color:var(--c-ink)] font-semibold">CBO SFA</strong> mobile app.
          </p>

          <a
            className="px-[22px] py-5 gap-3.5 rounded-[var(--radius-md)] border border-solid border-navy flex items-center [transition:background_var(--dur-fast)_ease,border-color_var(--dur-fast)_ease,color_var(--dur-fast)_ease] [background:var(--c-navy)] text-white hover:border-[color:var(--c-blue-dark)] hover:[transform:none] hover:[box-shadow:none] hover:[background:var(--c-blue-dark)] focus-visible:rounded-[max(var(--ring-r,0px),3px)]"
            href={CBO.web}
            target="_blank"
            rel="noopener noreferrer">
            <span className="flex-none rounded-[var(--radius-md)] grid [place-items:center] w-11 h-11 [background:rgba(255,255,255,0.12)]">
              <Globe size={20} />
            </span>
            <span className="flex-1 min-w-0">
              <strong className="block font-semibold text-[16px] leading-[normal] font-heading tracking-[0]">CBO ERP Web Login</strong>
              <em className="block mt-[3px] not-italic text-[13.5px] opacity-[0.75]">Open in your browser</em>
            </span>
            <ExternalLink className="flex-none opacity-[0.55]" size={18} />
          </a>

          <div className="gap-3 grid grid-cols-[1fr] mt-3">
            <a
              className="px-[18px] py-4 gap-3.5 rounded-[var(--radius-md)] border border-solid border-[color:var(--c-line)] flex items-center [transition:background_var(--dur-fast)_ease,border-color_var(--dur-fast)_ease,color_var(--dur-fast)_ease] [background:var(--c-paper)] text-[color:var(--c-ink)] hover:border-navy hover:[background:var(--c-surface)] hover:[transform:none] hover:[box-shadow:none] focus-visible:rounded-[max(var(--ring-r,0px),3px)]"
              href={CBO.android}
              target="_blank"
              rel="noopener noreferrer">
              <span className="flex-none rounded-[var(--radius-md)] grid [place-items:center] w-10 h-10 [background:var(--c-surface-tint)] text-navy">
                <Smartphone size={18} />
              </span>
              <span className="flex-1 min-w-0">
                <strong className="block font-semibold text-[15px] leading-[normal] font-heading tracking-[0]">Android</strong>
                <em className="block mt-[3px] not-italic text-[13.5px] opacity-[0.75]">Google Play</em>
              </span>
              <ExternalLink className="flex-none opacity-[0.55]" size={16} />
            </a>
            <a
              className="px-[18px] py-4 gap-3.5 rounded-[var(--radius-md)] border border-solid border-[color:var(--c-line)] flex items-center [transition:background_var(--dur-fast)_ease,border-color_var(--dur-fast)_ease,color_var(--dur-fast)_ease] [background:var(--c-paper)] text-[color:var(--c-ink)] hover:border-navy hover:[background:var(--c-surface)] hover:[transform:none] hover:[box-shadow:none] focus-visible:rounded-[max(var(--ring-r,0px),3px)]"
              href={CBO.ios}
              target="_blank"
              rel="noopener noreferrer">
              <span className="flex-none rounded-[var(--radius-md)] grid [place-items:center] w-10 h-10 [background:var(--c-surface-tint)] text-navy">
                <Smartphone size={18} />
              </span>
              <span className="flex-1 min-w-0">
                <strong className="block font-semibold text-[15px] leading-[normal] font-heading tracking-[0]">iPhone</strong>
                <em className="block mt-[3px] not-italic text-[13.5px] opacity-[0.75]">App Store</em>
              </span>
              <ExternalLink className="flex-none opacity-[0.55]" size={16} />
            </a>
          </div>
        </div>

        <div className="px-8 gap-3.5 flex-none rounded-none border-t [border-top-style:solid] border-t-[color:var(--c-line-soft)] grid pt-6 pb-7 [background:var(--c-surface)] max-[560px]:px-[22px] max-[560px]:pt-5 max-[560px]:pb-6">
          <p className="m-0 gap-2.5 flex items-start text-[color:var(--c-muted)] text-[13px] leading-[1.6]">
            <ShieldCheck className="flex-none mt-0.5 text-[color:var(--c-teal)]" size={16} />{" "}
            <span>
              Use the login ID and password issued to you by Aspen. CBO is
              provided by CBO ERP Ltd.
            </span>
          </p>
          <p className="m-0 gap-2.5 flex items-start text-[color:var(--c-muted)] text-[13px] leading-[1.6]">
            <Mail className="flex-none mt-0.5 text-[color:var(--c-teal)]" size={16} />{" "}
            <span>
              Access issues? Contact HR at{" "}
              <a className="text-[color:var(--c-blue-dark)] font-semibold" href="mailto:aspeninfo03@gmail.com">aspeninfo03@gmail.com</a>
            </span>
          </p>
        </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
