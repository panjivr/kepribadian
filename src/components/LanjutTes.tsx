import Link from "next/link";
import { langkahBerikutnya, posisiTes } from "@/data/rantai-tes";

/**
 * Blok wizard berkelanjutan di akhir tes: progress perjalanan + tombol
 * "lanjut ke tes berikutnya". Dirancang tampil di atas footer (Profil/Semua
 * Tes) yang sudah ada di tiap halaman hasil. `current` = id rantai.
 */
export default function LanjutTes({ current }: { current: string }) {
  const next = langkahBerikutnya(current);
  const pos = posisiTes(current);

  return (
    <div className="no-print mx-auto mt-10 max-w-md">
      {pos && (
        <>
          <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-ink-3">
            <span>
              Perjalanan tes · {pos.indeks} dari {pos.total}
            </span>
            <span>{Math.round((pos.indeks / pos.total) * 100)}%</span>
          </div>
          <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-white/8">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${(pos.indeks / pos.total) * 100}%`,
                background: "linear-gradient(90deg, #67e8f9, #3b82f6, #8b5cf6)",
              }}
            />
          </div>
        </>
      )}
      <div className="flex justify-center">
        {next ? (
          <Link href={next.href} className="btn-primary">
            Lanjut: {next.nama}
            <span aria-hidden>→</span>
          </Link>
        ) : (
          <Link href="/profil" className="btn-primary">
            Selesai — Buka Profil Terpadumu
            <span aria-hidden>→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
