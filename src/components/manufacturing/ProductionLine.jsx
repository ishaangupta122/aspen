"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { process } from "@/data/manufacturing";

const tabletDelays = [0, 0.9, 1.8, 2.7];

export default function ProductionLine() {
  const [paused, setPaused] = useState(false);
  return (
    <section className="rf rf-section mf-process" id="process">
      <div className="rf-container">
        <div className="rf-heading rf-reveal">
          <span className="rf-eyebrow">{process.eyebrow}</span>
          <h2>{process.title}</h2>
        </div>
        <div className="rf-reveal">
        <div className={`mf-line ${paused ? "is-paused" : ""}`}>
          <svg viewBox="0 0 960 330" role="img" aria-label="Animated illustration of a tablet production line: compression, coating, blister packing and cartoning">
            {/* stations */}
            {[0, 1, 2, 3].map((i) => (
              <line key={i} x1={120 + i * 240} y1="250" x2={120 + i * 240} y2="300" className="mf-support" />
            ))}
            {[1, 2, 3].map((i) => (
              <line key={i} x1={i * 240} y1="10" x2={i * 240} y2="300" className="mf-divider" />
            ))}

            {/* 1 compression: hopper */}
            <g>
              <polygon points="60,40 180,40 138,120 102,120" className="mf-hopper" />
              <rect x="64" y="40" width="112" height="22" rx="4" className="mf-hopper-band" />
              <rect x="112" y="120" width="16" height="30" className="mf-hopper" />
              {[0, 1, 2].map((i) => (
                <circle key={i} cx={120} cy="150" r="5" className="mf-anim mf-drop" style={{ animationDelay: `${i * 0.5}s` }} />
              ))}
            </g>

            {/* 2 coating: drum */}
            <g>
              <circle cx="360" cy="110" r="52" className="mf-drum" />
              <g className="mf-anim mf-spin">
                {[0, 60, 120].map((deg) => (
                  <line key={deg} x1="360" y1="62" x2="360" y2="158" transform={`rotate(${deg} 360 110)`} className="mf-spoke" />
                ))}
                {[[340, 90], [382, 98], [352, 132], [376, 128]].map(([x, y]) => (
                  <circle key={`${x}${y}`} cx={x} cy={y} r="3" className="mf-spark" />
                ))}
              </g>
            </g>

            {/* 3 blister packing: press */}
            <g>
              <rect x="520" y="26" width="80" height="34" rx="6" className="mf-press-top" />
              <line x1="548" y1="60" x2="548" y2="220" className="mf-rod" />
              <line x1="572" y1="60" x2="572" y2="220" className="mf-rod" />
              <rect x="526" y="100" width="68" height="22" rx="4" className="mf-anim mf-plunger" />
            </g>

            {/* 4 cartoning: boxes */}
            <g>
              <rect x="728" y="86" width="56" height="26" rx="4" className="mf-box" />
              <rect x="752" y="66" width="56" height="26" rx="4" className="mf-box" />
              <rect x="776" y="46" width="56" height="26" rx="4" className="mf-box mf-anim mf-box-drop" />
            </g>

            {/* belt */}
            <rect x="20" y="246" width="920" height="10" rx="5" className="mf-belt" />
            <line x1="30" y1="251" x2="930" y2="251" className="mf-anim mf-belt-dots" />

            {/* moving product */}
            {tabletDelays.map((d, i) => (
              <rect key={`a${i}`} x="70" y="238" width="22" height="10" rx="5" className="mf-anim mf-tab mf-tab-a" style={{ animationDelay: `${-d}s` }} />
            ))}
            {tabletDelays.map((d, i) => (
              <rect key={`b${i}`} x="310" y="238" width="22" height="10" rx="5" className="mf-anim mf-tab mf-tab-b" style={{ animationDelay: `${-d}s` }} />
            ))}
            {[0, 1].map((i) => (
              <g key={`c${i}`} className="mf-anim mf-pack" style={{ animationDelay: `${-i * 1.8}s` }}>
                <rect x="540" y="232" width="36" height="16" rx="3" className="mf-blister" />
                <circle cx="550" cy="240" r="3" className="mf-blister-dot" />
                <circle cx="558" cy="240" r="3" className="mf-blister-dot" />
                <circle cx="566" cy="240" r="3" className="mf-blister-dot" />
              </g>
            ))}
            {[0, 1].map((i) => (
              <rect key={`d${i}`} x="770" y="228" width="30" height="20" rx="3" className="mf-anim mf-carton" style={{ animationDelay: `${-i * 1.8}s` }} />
            ))}

            {/* labels */}
            {process.stages.map((label, i) => (
              <text key={label} x={120 + i * 240} y="322" textAnchor="middle" className="mf-label">
                {label.toUpperCase()}
              </text>
            ))}
          </svg>
          <div className="mf-line-foot">
            <span>{process.caption}</span>
            <button type="button" onClick={() => setPaused((v) => !v)} aria-pressed={paused}>
              {paused ? <Play size={14} /> : <Pause size={14} />}
              {paused ? "Play" : "Pause"}
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
