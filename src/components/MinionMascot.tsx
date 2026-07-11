/**
 * Maskot kuning bergoggle ala "minion" — dibuat original dengan SVG (bukan
 * karakter berhak cipta). Menari (bob), melambaikan tangan, dan berkedip.
 * Animasi dimatikan otomatis saat prefers-reduced-motion (lihat globals.css).
 */
export default function MinionMascot({
  className = "",
  size = 96,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={`minion-bob inline-block ${className}`} style={{ width: size }} aria-hidden>
      <svg viewBox="0 0 120 165" className="h-auto w-full select-none" role="img" aria-label="Maskot kuning">
        {/* kaki */}
        <rect x="44" y="140" width="12" height="20" rx="5" fill="#3a4a6b" />
        <rect x="64" y="140" width="12" height="20" rx="5" fill="#3a4a6b" />
        <ellipse cx="48" cy="160" rx="10" ry="5" fill="#1f2430" />
        <ellipse cx="72" cy="160" rx="10" ry="5" fill="#1f2430" />

        {/* badan kuning */}
        <rect x="24" y="26" width="72" height="118" rx="34" fill="#ffd93b" stroke="#e0b100" strokeWidth="2" />

        {/* rambut */}
        <path d="M52 27 q3 -9 6 0" stroke="#1f2430" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M60 26 q3 -10 6 0" stroke="#1f2430" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M68 27 q3 -9 6 0" stroke="#1f2430" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* overall biru */}
        <path
          d="M24 104 q0 0 0 6 v0 a34 34 0 0 0 72 0 v-6 z"
          fill="#3b6fb5"
        />
        <path d="M24 110 v20 a34 34 0 0 0 72 0 v-20 z" fill="#3b6fb5" />
        <rect x="49" y="112" width="22" height="18" rx="3" fill="#4d82c9" stroke="#2f5a94" strokeWidth="1.5" />
        {/* tali overall */}
        <path d="M42 104 L38 70" stroke="#3b6fb5" strokeWidth="5" strokeLinecap="round" />
        <path d="M78 104 L82 70" stroke="#3b6fb5" strokeWidth="5" strokeLinecap="round" />

        {/* strap goggle */}
        <rect x="22" y="54" width="76" height="9" fill="#6b7280" />

        {/* goggle + mata (berkedip) */}
        <circle cx="60" cy="59" r="21" fill="#9ca3af" stroke="#4b5563" strokeWidth="3" />
        <g className="minion-blink" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <circle cx="60" cy="59" r="14" fill="#ffffff" />
          <circle cx="62" cy="59" r="6.5" fill="#7a4a2b" />
          <circle cx="63.5" cy="57.5" r="2" fill="#ffffff" />
        </g>

        {/* mulut senyum */}
        <path d="M50 88 q10 10 20 0" stroke="#5a3d24" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* lengan kanan (diam) */}
        <path d="M96 92 q12 6 8 22" stroke="#ffd93b" strokeWidth="9" fill="none" strokeLinecap="round" />
        <circle cx="104" cy="115" r="6" fill="#1f2430" />

        {/* lengan kiri (melambai) */}
        <g className="minion-wave" style={{ transformBox: "fill-box", transformOrigin: "90% 90%" }}>
          <path d="M24 90 q-14 -4 -16 -20" stroke="#ffd93b" strokeWidth="9" fill="none" strokeLinecap="round" />
          <circle cx="8" cy="68" r="6" fill="#1f2430" />
        </g>
      </svg>
    </div>
  );
}
