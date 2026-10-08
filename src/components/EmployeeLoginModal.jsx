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
      className="el-overlay"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="el-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="el-title">
        <div className="el-top">
          <div className="el-brand">
            <span className="el-logo">
              <img src="/logo-mark.png" alt="" width="34" height="34" />
            </span>
            <span>
              <strong>Aspen Pharmaceuticals</strong>
              <em>Staff portal</em>
            </span>
          </div>
          <button type="button" className="el-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="el-scroll">
        <div className="el-body">
          <h2 id="el-title">Employee Login</h2>
          <p className="el-lead">
            Sign in through <strong>CBO ERP</strong> on the web, or use the{" "}
            <strong>CBO SFA</strong> mobile app.
          </p>

          <a
            className="el-main"
            href={CBO.web}
            target="_blank"
            rel="noopener noreferrer">
            <span className="el-ico">
              <Globe size={20} />
            </span>
            <span className="el-txt">
              <strong>CBO ERP Web Login</strong>
              <em>Open in your browser</em>
            </span>
            <ExternalLink className="el-ext" size={18} />
          </a>

          <div className="el-apps">
            <a
              className="el-app"
              href={CBO.android}
              target="_blank"
              rel="noopener noreferrer">
              <span className="el-ico">
                <Smartphone size={18} />
              </span>
              <span className="el-txt">
                <strong>Android</strong>
                <em>Google Play</em>
              </span>
              <ExternalLink className="el-ext" size={16} />
            </a>
            <a
              className="el-app"
              href={CBO.ios}
              target="_blank"
              rel="noopener noreferrer">
              <span className="el-ico">
                <Smartphone size={18} />
              </span>
              <span className="el-txt">
                <strong>iPhone</strong>
                <em>App Store</em>
              </span>
              <ExternalLink className="el-ext" size={16} />
            </a>
          </div>
        </div>

        <div className="el-foot">
          <p>
            <ShieldCheck size={16} />{" "}
            <span>
              Use the login ID and password issued to you by Aspen. CBO is
              provided by CBO ERP Ltd.
            </span>
          </p>
          <p>
            <Mail size={16} />{" "}
            <span>
              Access issues? Contact HR at{" "}
              <a href="mailto:aspeninfo03@gmail.com">aspeninfo03@gmail.com</a>
            </span>
          </p>
        </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
