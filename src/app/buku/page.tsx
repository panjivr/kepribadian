"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BUKU, KATEGORI_BUKU, type KategoriBuku, type RingkasanBuku } from "@/data/buku";

function KartuBuku({ b }: { b: RingkasanBuku }) {
  return (
    <details className="group glass glass-hairline overflow-hidden p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-start gap-4">
        <span className="text-3xl leading-none" aria-hidden>
          {b.ikon}
        </span>
        <span className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-extrabold tracking-tight md:text-xl">{b.judul}</h3>
          <span className="mt-0.5 block text-xs text-ink-3">
            {b.penulis}
            {b.tahun ? ` · ${b.tahun}` : ""} · {b.kategori}
          </span>
          <span className="mt-2 block text-sm leading-relaxed text-ink-2">{b.ringkas}</span>
        </span>
        <span className="mt-1 shrink-0 text-ink-3 transition-transform group-open:rotate-180" aria-hidden>
          ⌄
        </span>
      </summary>

      <div className="mt-5 space-y-5 border-t border-white/8 pt-5">
        <p className="text-sm leading-relaxed text-ink-2">{b.tentang}</p>

        <div className="space-y-4">
          <p className="kicker !text-[10px]">Poin-Poin Penting</p>
          {b.poin.map((p, i) => (
            <div key={p.judul} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <p className="font-display text-sm font-bold text-ink">
                <span className="mr-1.5 text-aurora">{i + 1}.</span>
                {p.judul}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{p.isi}</p>
              <p className="mt-2 border-l-2 border-violet/40 pl-3 text-xs leading-relaxed text-ink-3">
                <span className="font-semibold text-violet">Analogi:</span> {p.analogi}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-mint/20 bg-mint/[0.06] p-4">
          <p className="kicker !text-[10px]">✦ Inti Sari</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{b.takeaway}</p>
        </div>
      </div>
    </details>
  );
}

export default function HalamanBuku() {
  const [cari, setCari] = useState("");
  const [kat, setKat] = useState<KategoriBuku | "semua">("semua");

  const hasil = useMemo(() => {
    const q = cari.trim().toLowerCase();
    return BUKU.filter((b) => {
      const cocokKat = kat === "semua" || b.kategori === kat;
      const cocokCari =
        !q ||
        b.judul.toLowerCase().includes(q) ||
        b.penulis.toLowerCase().includes(q) ||
        b.ringkas.toLowerCase().includes(q) ||
        b.tentang.toLowerCase().includes(q);
      return cocokKat && cocokCari;
    });
  }, [cari, kat]);

  const { kategoriTampil, jumlah } = useMemo(() => {
    const jumlah: Record<string, number> = {};
    for (const b of BUKU) jumlah[b.kategori] = (jumlah[b.kategori] ?? 0) + 1;
    const kategoriTampil = KATEGORI_BUKU.filter((k) => (jumlah[k] ?? 0) > 0);
    return { kategoriTampil, jumlah };
  }, []);

  return (
    <section className="mx-auto max-w-4xl px-5 pb-24 pt-32 md:px-8">
      <div className="text-center">
        <p className="kicker mb-4">Wawasan · Ringkasan Buku</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          Inti sari buku-buku <span className="text-aurora">terbaik dunia.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-2 md:text-base">
          Ringkasan mendalam buku-buku penting — poin-poin kunci tiap buku
          lengkap dengan penjelasan & analogi cerita, agar kamu menyerap intinya
          tanpa harus membaca ratusan halaman lebih dulu.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/wawasan" className="btn-ghost text-sm">
            ← Kembali ke Wawasan
          </Link>
          <Link href="/tumbuh" className="btn-ghost text-sm">
            Rekomendasi Buku & Channel
          </Link>
        </div>
      </div>

      <div className="sticky top-16 z-10 mt-10 -mx-2 rounded-2xl bg-night/70 px-2 py-3 backdrop-blur-md">
        <input
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          placeholder="Cari buku… (mis. atomic, uang, stoic)"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-ink outline-none focus:border-violet/50"
        />
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          <button
            onClick={() => setKat("semua")}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              kat === "semua" ? "border-violet/50 bg-violet/15 text-ink" : "border-white/10 bg-white/5 text-ink-3 hover:text-ink-2"
            }`}
          >
            Semua · {BUKU.length}
          </button>
          {kategoriTampil.map((k) => (
            <button
              key={k}
              onClick={() => setKat(k)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                kat === k ? "border-violet/50 bg-violet/15 text-ink" : "border-white/10 bg-white/5 text-ink-3 hover:text-ink-2"
              }`}
            >
              {k} · {jumlah[k]}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 text-xs text-ink-3">{hasil.length} buku</p>
      <div className="mt-3 space-y-3">
        {hasil.map((b) => (
          <KartuBuku key={b.id} b={b} />
        ))}
        {hasil.length === 0 && (
          <p className="py-10 text-center text-sm text-ink-3">Tak ada yang cocok. Coba kata kunci lain.</p>
        )}
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-ink-3">
        Ringkasan edukatif untuk memantik minat baca — bukan pengganti bukunya.
        Dukung penulis dengan membaca karya aslinya. Untuk buku motivasi/esoterik,
        beberapa klaim disajikan dengan catatan agar tetap kritis.
      </p>
    </section>
  );
}
