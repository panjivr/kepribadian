/** Radar pentagon SVG untuk lima dimensi OCEAN. */
export default function RadarChart({
  nilai,
  label,
  size = 340,
}: {
  nilai: number[]; // 0–100, searah jarum jam dari atas
  label: string[];
  size?: number;
}) {
  const c = size / 2;
  const R = size * 0.36;
  const n = nilai.length;
  const pad = 62; // ruang ekstra kiri-kanan agar label tidak terpotong

  const titik = (persen: number, i: number) => {
    const sudut = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = (R * persen) / 100;
    return [c + r * Math.cos(sudut), c + r * Math.sin(sudut)] as const;
  };

  const poly = (persen: number) =>
    Array.from({ length: n }, (_, i) => titik(persen, i).join(",")).join(" ");

  const data = nilai.map((v, i) => titik(Math.max(v, 3), i).join(",")).join(" ");

  return (
    <svg
      viewBox={`${-pad} 0 ${size + pad * 2} ${size}`}
      className="h-auto w-full max-w-[420px]"
      role="img"
      aria-label={`Radar lima dimensi: ${label
        .map((l, i) => `${l} ${Math.round(nilai[i])}%`)
        .join(", ")}`}
    >
      <defs>
        <linearGradient id="radarIsi" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.38" />
        </linearGradient>
        <linearGradient id="radarGaris" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      {[25, 50, 75, 100].map((p) => (
        <polygon
          key={p}
          points={poly(p)}
          fill="none"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: n }, (_, i) => {
        const [x, y] = titik(100, i);
        return (
          <line
            key={i}
            x1={c}
            y1={c}
            x2={x}
            y2={y}
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="1"
          />
        );
      })}

      <polygon
        points={data}
        fill="url(#radarIsi)"
        stroke="url(#radarGaris)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {nilai.map((v, i) => {
        const [x, y] = titik(Math.max(v, 3), i);
        return <circle key={i} cx={x} cy={y} r="3.5" fill="#a5b4fc" />;
      })}

      {label.map((l, i) => {
        const [x, y] = titik(122, i);
        return (
          <text
            key={l}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="rgba(244,244,246,0.8)"
            fontSize="12.5"
            fontWeight="600"
          >
            {l}
          </text>
        );
      })}
    </svg>
  );
}
