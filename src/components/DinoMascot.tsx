/**
 * Maskot dinosaurus lucu — SVG original, menggantikan maskot sebelumnya.
 * Menari (bob), melambaikan tangan mungil, & berkedip. Ada 3 varian warna.
 * Animasi mati otomatis saat prefers-reduced-motion (lihat globals.css).
 */
const VARIAN = [
  { badan: "#6dc36d", perut: "#c7ecbf", garis: "#2f7d43", duri: "#3f9c57" }, // hijau
  { badan: "#6db3e5", perut: "#c9e6f8", garis: "#2f6ea0", duri: "#4a92cf" }, // biru
  { badan: "#f0a860", perut: "#f8dcb6", garis: "#c47a2c", duri: "#e0913f" }, // oranye
];

export default function DinoMascot({
  className = "",
  size = 96,
  varian = 0,
}: {
  className?: string;
  size?: number;
  varian?: number;
}) {
  const c = VARIAN[((varian % VARIAN.length) + VARIAN.length) % VARIAN.length];
  return (
    <div className={`minion-bob inline-block ${className}`} style={{ width: size }} aria-hidden>
      <svg viewBox="0 0 120 120" className="h-auto w-full select-none" role="img" aria-label="Maskot dinosaurus">
        {/* ekor */}
        <path d="M86 84 q26 2 28 -18 q-14 6 -22 12 z" fill={c.badan} stroke={c.garis} strokeWidth="2" strokeLinejoin="round" />

        {/* kaki */}
        <rect x="44" y="92" width="13" height="18" rx="6" fill={c.badan} stroke={c.garis} strokeWidth="2" />
        <rect x="66" y="92" width="13" height="18" rx="6" fill={c.badan} stroke={c.garis} strokeWidth="2" />

        {/* duri punggung */}
        <path d="M40 40 l7 -12 l7 12 z" fill={c.duri} />
        <path d="M54 34 l7 -13 l7 13 z" fill={c.duri} />
        <path d="M68 38 l6 -11 l6 11 z" fill={c.duri} />

        {/* badan gemuk */}
        <ellipse cx="60" cy="66" rx="34" ry="32" fill={c.badan} stroke={c.garis} strokeWidth="2.5" />
        {/* perut terang */}
        <ellipse cx="58" cy="74" rx="20" ry="20" fill={c.perut} />

        {/* lengan mungil melambai */}
        <g className="minion-wave" style={{ transformBox: "fill-box", transformOrigin: "90% 90%" }}>
          <path d="M30 60 q-12 -2 -14 -14" stroke={c.badan} strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M30 60 q-12 -2 -14 -14" stroke={c.garis} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.15" />
        </g>

        {/* mata besar (berkedip) */}
        <g className="minion-blink" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <circle cx="54" cy="52" r="12" fill="#ffffff" stroke={c.garis} strokeWidth="1.5" />
          <circle cx="57" cy="53" r="5.5" fill="#243b2a" />
          <circle cx="59" cy="51" r="1.8" fill="#ffffff" />
        </g>

        {/* lubang hidung & senyum */}
        <circle cx="41" cy="58" r="1.6" fill={c.garis} />
        <path d="M40 66 q9 7 18 2" stroke={c.garis} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}
