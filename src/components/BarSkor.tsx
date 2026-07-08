/** Bar skor bergradien — dipakai di semua tampilan hasil tes. */
export default function BarSkor({
  label,
  nilaiTeks,
  persen,
  aktif = true,
}: {
  label: React.ReactNode;
  nilaiTeks?: string;
  persen: number;
  aktif?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className={aktif ? "font-semibold text-ink" : "text-ink-2"}>
          {label}
        </span>
        {nilaiTeks && (
          <span className="shrink-0 font-semibold text-ink-2">{nilaiTeks}</span>
        )}
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/8">
        <div
          className="bar-anim h-full rounded-full"
          style={{
            width: `${Math.max(Math.min(persen, 100), 2)}%`,
            background: aktif
              ? "linear-gradient(90deg, #67e8f9, #3b82f6, #8b5cf6)"
              : "rgba(255,255,255,0.22)",
          }}
        />
      </div>
    </div>
  );
}
