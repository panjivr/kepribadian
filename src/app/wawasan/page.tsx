"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { WAWASAN, WAWASAN_KATEGORI, type KategoriWawasan, type Wawasan } from "@/data/wawasan";

function KartuWawasan({ w }: { w: Wawasan }) {
  return (
    <details className="group glass glass-hairline overflow-hidden p-6 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer list-none items-start gap-3">
        <span className="text-2xl leading-none" aria-hidden>
          {w.ikon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2">
            <h3 className="font-display text-base font-extrabold tracking-tight md:text-lg">{w.judul}</h3>
          </span>
          <span className="mt-0.5 block text-[11px] uppercase tracking-widest text-ink-3">{w.kategori}</span>
          <span className="mt-2 block text-sm leading-relaxed text-ink-2">{w.ringkas}</span>
        </span>
        <span className="mt-1 shrink-0 text-ink-3 transition-transform group-open:rotate-180" aria-hidden>
          ⌄
        </span>
      </summary>

      <div className="mt-4 space-y-4 border-t border-white/8 pt-4 text-sm leading-relaxed">
        <div>
          <p className="kicker !text-[10px] mb-1.5">📖 Ceritanya</p>
          <p className="text-ink-2">{w.cerita}</p>
        </div>
        <div className="rounded-2xl border border-violet/20 bg-violet/[0.06] p-4">
          <p className="kicker !text-[10px] mb-1.5">💡 Analoginya</p>
          <p className="text-ink-2">{w.analogi}</p>
        </div>
        <div>
          <p className="kicker !text-[10px] mb-2">🎯 Terapkan di Hidupmu</p>
          <ul className="space-y-1.5">
            {w.penerapan.map((p) => (
              <li key={p} className="flex items-start gap-2 text-ink-2">
                <span className="mt-0.5 text-mint">✓</span> {p}
              </li>
            ))}
          </ul>
        </div>
        {w.sumber && <p className="text-xs text-ink-3">Sumber: {w.sumber}</p>}
      </div>
    </details>
  );
}

export default function HalamanWawasan() {
  const [cari, setCari] = useState("");
  const [kat, setKat] = useState<KategoriWawasan | "semua">("semua");

  const hasil = useMemo(() => {
    const q = cari.trim().toLowerCase();
    return WAWASAN.filter((w) => {
      const cocokKat = kat === "semua" || w.kategori === kat;
      const cocokCari =
        !q ||
        w.judul.toLowerCase().includes(q) ||
        w.ringkas.toLowerCase().includes(q) ||
        w.cerita.toLowerCase().includes(q);
      return cocokKat && cocokCari;
    });
  }, [cari, kat]);

  // Hanya tampilkan kategori yang benar-benar punya isi (tak ada chip "0 konsep").
  const { kategoriTampil, jumlah } = useMemo(() => {
    const jumlah: Record<string, number> = {};
    for (const w of WAWASAN) jumlah[w.kategori] = (jumlah[w.kategori] ?? 0) + 1;
    const kategoriTampil = WAWASAN_KATEGORI.filter((k) => (jumlah[k] ?? 0) > 0);
    return { kategoriTampil, jumlah };
  }, []);

  return (
    <section className="mx-auto max-w-4xl px-5 pb-24 pt-32 md:px-8">
      <div className="text-center">
        <p className="kicker mb-4">Wawasan · Teori untuk Hidup</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          Teori & konsep yang <span className="text-aurora">mengubah cara berpikir.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-2 md:text-base">
          Kumpulan teori ilmiah, bias kognitif, & prinsip hidup — dari Paradox of
          Choice sampai Dunning-Kruger — lengkap dengan cerita & analogi agar
          mudah dipahami. Bekal menjadi manusia yang lebih utuh & jernih.
        </p>
      </div>

      <div className="sticky top-16 z-10 mt-10 -mx-2 rounded-2xl bg-night/70 px-2 py-3 backdrop-blur-md">
        <input
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          placeholder="Cari teori… (mis. dopamine, bias, pilihan)"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-ink outline-none focus:border-violet/50"
        />
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          <button
            onClick={() => setKat("semua")}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              kat === "semua" ? "border-violet/50 bg-violet/15 text-ink" : "border-white/10 bg-white/5 text-ink-3 hover:text-ink-2"
            }`}
          >
            Semua · {WAWASAN.length}
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

      <p className="mt-5 text-xs text-ink-3">{hasil.length} konsep</p>
      <div className="mt-3 space-y-3">
        {hasil.map((w) => (
          <KartuWawasan key={w.id} w={w} />
        ))}
        {hasil.length === 0 && (
          <p className="py-10 text-center text-sm text-ink-3">Tak ada yang cocok. Coba kata kunci lain.</p>
        )}
      </div>

      <div className="mt-12 text-center">
        <Link href="/tumbuh" className="btn-ghost text-sm">
          Lanjut ke Buku & Channel untuk Bertumbuh →
        </Link>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink-3">
        Ringkasan edukatif untuk memantik rasa ingin tahu — bukan nasihat medis,
        hukum, atau finansial. Selalu telusuri sumber aslinya untuk mendalami.
      </p>
    </section>
  );
}
