// Flat, theme-coloured illustrations used as card imagery. Swap any of them for a real
// photo by setting an `image` URL on the item in src/data/catalogue.js.

const C = { navy: "#0a1a30", blue: "#15539c", sky: "#5f9fd6", teal: "#1e7e75", mint: "#6fd1c4", pale: "#e1ecf0", white: "#ffffff", coral: "#e0707a", amber: "#e8b45f" };

export const backgrounds = {
  tablets: ["#dbe9f6", "#f1f7fb"],
  capsules: ["#d9efea", "#f0f8f6"],
  injectables: ["#dfe8f5", "#f3f6fb"],
  liquids: ["#e3eef2", "#f4f9fa"],
  topicals: ["#e6f0ee", "#f6faf9"],
  wellness: ["#dcefe6", "#f1f9f4"],
  all: ["#dbe9f6", "#e6f3f0"],
  psychiatry: ["#d9e4f3", "#eef3fa"],
  rheumatology: ["#e1ecf0", "#f4f8fa"],
  cardio: ["#e8e4f0", "#f7f5fb"],
  gi: ["#e3efe9", "#f5faf7"],
};

const Shadow = ({ cx = 120, cy = 152, rx = 70 }) => <ellipse cx={cx} cy={cy} rx={rx} ry="8" fill={C.navy} opacity="0.1" />;

const art = {
  tablets: () => (
    <>
      <Shadow />
      <circle cx="92" cy="96" r="38" fill={C.white} stroke={C.pale} strokeWidth="2" />
      <path d="M62 96h60" stroke={C.pale} strokeWidth="4" strokeLinecap="round" />
      <path d="M76 70a34 34 0 0 1 24-6" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" opacity=".9" />
      <circle cx="152" cy="80" r="27" fill={C.mint} />
      <path d="M134 80h36" stroke={C.teal} strokeWidth="3" strokeLinecap="round" opacity=".6" />
      <circle cx="148" cy="130" r="22" fill={C.blue} />
      <path d="M132 124a18 18 0 0 1 14-9" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".5" />
    </>
  ),
  capsules: () => (
    <>
      <Shadow />
      <g transform="rotate(-32 110 90)">
        <path d="M70 70h40v40H70a20 20 0 0 1 0-40z" fill={C.blue} />
        <path d="M110 70h40a20 20 0 0 1 0 40h-40z" fill={C.white} stroke={C.pale} strokeWidth="2" />
        <rect x="76" y="76" width="30" height="6" rx="3" fill="#fff" opacity=".35" />
      </g>
      <g transform="rotate(38 150 118)">
        <path d="M128 106h22v24h-22a12 12 0 0 1 0-24z" fill={C.teal} />
        <path d="M150 106h22a12 12 0 0 1 0 24h-22z" fill={C.white} stroke={C.pale} strokeWidth="2" />
      </g>
    </>
  ),
  injectables: () => (
    <>
      <Shadow />
      <rect x="62" y="52" width="46" height="94" rx="10" fill={C.white} stroke={C.pale} strokeWidth="2" />
      <rect x="62" y="82" width="46" height="64" rx="8" fill={C.sky} opacity=".65" />
      <rect x="68" y="36" width="34" height="20" rx="5" fill={C.teal} />
      <rect x="74" y="98" width="22" height="26" rx="3" fill="#fff" opacity=".9" />
      <g transform="rotate(-38 150 100)">
        <rect x="108" y="90" width="64" height="20" rx="4" fill={C.white} stroke={C.pale} strokeWidth="2" />
        <rect x="108" y="90" width="30" height="20" rx="4" fill={C.mint} opacity=".6" />
        <rect x="170" y="86" width="6" height="28" rx="2" fill={C.blue} />
        <rect x="176" y="97" width="22" height="6" rx="3" fill={C.blue} />
        <path d="M108 100H84" stroke={C.navy} strokeWidth="3" strokeLinecap="round" />
      </g>
    </>
  ),
  liquids: () => (
    <>
      <Shadow />
      <rect x="86" y="62" width="68" height="88" rx="12" fill={C.sky} opacity=".55" stroke={C.white} strokeWidth="2" />
      <rect x="86" y="92" width="68" height="58" rx="10" fill={C.blue} opacity=".75" />
      <rect x="104" y="42" width="32" height="24" rx="4" fill={C.white} stroke={C.pale} strokeWidth="2" />
      <rect x="100" y="32" width="40" height="14" rx="4" fill={C.teal} />
      <rect x="94" y="96" width="52" height="38" rx="5" fill="#fff" />
      <path d="M102 108h36M102 118h24" stroke={C.pale} strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="184" cy="132" rx="16" ry="9" fill={C.white} stroke={C.pale} strokeWidth="2" />
      <ellipse cx="184" cy="130" rx="12" ry="5" fill={C.sky} opacity=".7" />
    </>
  ),
  topicals: () => (
    <>
      <Shadow />
      <g transform="rotate(-24 120 96)">
        <rect x="62" y="76" width="96" height="42" rx="8" fill={C.white} stroke={C.pale} strokeWidth="2" />
        <rect x="62" y="90" width="96" height="14" fill={C.teal} opacity=".85" />
        <rect x="156" y="80" width="16" height="34" rx="2" fill={C.mint} />
        <path d="M160 84v26M164 84v26M168 84v26" stroke={C.teal} strokeWidth="1.5" opacity=".6" />
        <rect x="42" y="82" width="22" height="30" rx="5" fill={C.blue} />
      </g>
      <circle cx="170" cy="138" r="14" fill={C.white} stroke={C.pale} strokeWidth="2" />
      <circle cx="184" cy="132" r="9" fill={C.white} stroke={C.pale} strokeWidth="2" />
    </>
  ),
  wellness: () => (
    <>
      <Shadow />
      <path d="M92 146C52 126 46 80 84 52c32 24 40 66 8 94z" fill={C.teal} />
      <path d="M92 146C80 112 82 86 84 52" stroke="#fff" strokeWidth="2" opacity=".5" fill="none" />
      <path d="M142 146c-34-12-42-48-14-74 28 20 38 52 14 74z" fill={C.mint} />
      <rect x="150" y="84" width="44" height="62" rx="9" fill={C.white} stroke={C.pale} strokeWidth="2" />
      <rect x="156" y="72" width="32" height="16" rx="4" fill={C.blue} />
      <rect x="157" y="100" width="30" height="28" rx="4" fill={C.pale} />
      <path d="M166 114h12M172 108v12" stroke={C.teal} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  all: () => (
    <>
      <Shadow />
      <g transform="rotate(-30 84 100)">
        <path d="M54 84h30v32H54a16 16 0 0 1 0-32z" fill={C.blue} />
        <path d="M84 84h30a16 16 0 0 1 0 32H84z" fill={C.white} stroke={C.pale} strokeWidth="2" />
      </g>
      <circle cx="158" cy="76" r="28" fill={C.white} stroke={C.pale} strokeWidth="2" />
      <path d="M138 76h40" stroke={C.pale} strokeWidth="4" strokeLinecap="round" />
      <rect x="132" y="112" width="48" height="36" rx="9" fill={C.teal} />
      <path d="M156 120v20M146 130h20" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
    </>
  ),
  psychiatry: () => (
    <>
      <Shadow rx="56" />
      <path d="M78 98C64 82 76 56 100 54c6-14 34-14 40 0 24 2 36 28 20 44 6 16-10 32-30 26-8 12-32 12-40-2-18 2-24-14-12-24z" fill={C.sky} opacity=".75" />
      <path d="M120 56v70M96 74c12 6 12 18 2 26M144 74c-12 6-12 18-2 26M90 108c12-4 18 2 22 10M150 108c-12-4-18 2-22 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="96" cy="74" r="4" fill={C.navy} /><circle cx="144" cy="74" r="4" fill={C.navy} /><circle cx="120" cy="56" r="4" fill={C.navy} />
    </>
  ),
  rheumatology: () => (
    <>
      <Shadow rx="50" />
      <path d="M104 28l14 64" stroke="#9db4c4" strokeWidth="30" strokeLinecap="round" />
      <path d="M104 28l14 64" stroke="#fff" strokeWidth="24" strokeLinecap="round" />
      <path d="M122 102l-12 50" stroke="#9db4c4" strokeWidth="28" strokeLinecap="round" />
      <path d="M122 102l-12 50" stroke="#fff" strokeWidth="22" strokeLinecap="round" />
      <circle cx="120" cy="97" r="34" fill={C.amber} opacity=".4" />
      <circle cx="120" cy="97" r="20" fill={C.coral} opacity=".55" />
      <path d="M156 72a40 40 0 0 1 8 26M166 58a54 54 0 0 1 12 40" stroke={C.coral} strokeWidth="4" strokeLinecap="round" fill="none" />
    </>
  ),
  cardio: () => (
    <>
      <Shadow rx="52" />
      <path d="M120 144C66 108 58 70 86 54c16-8 30 0 34 12 4-12 18-20 34-12 28 16 20 54-34 90z" fill={C.coral} />
      <path d="M92 66c-8 4-12 12-10 22" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" opacity=".5" />
      <path d="M40 104h42l12-22 20 44 16-30 10 8h40" stroke={C.navy} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  ),
  gi: () => (
    <>
      <Shadow rx="54" />
      <path d="M96 40c26-8 48 8 44 34-4 26-30 36-48 24-8-6-6-18 6-20-8-10-8-30-2-38z" fill={C.coral} opacity=".85" />
      <path d="M108 112c-22 10-14 30 10 28 28-2 42 12 26 22" stroke={C.mint} strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M108 112c-22 10-14 30 10 28 28-2 42 12 26 22" stroke={C.teal} strokeWidth="4" strokeLinecap="round" fill="none" opacity=".5" />
    </>
  ),
};

export default function Illustration({ name, image, alt = "" }) {
  const [a, b] = backgrounds[name] || backgrounds.all;
  const Art = art[name] || art.all;
  return (
    <div className="pr-art" style={{ background: `linear-gradient(145deg, ${a}, ${b})` }}>
      {image ? (
        <img src={image} alt={alt} loading="lazy" />
      ) : (
        <svg viewBox="0 0 240 180" role="img" aria-label={alt} preserveAspectRatio="xMidYMid meet">
          <Art />
        </svg>
      )}
    </div>
  );
}
