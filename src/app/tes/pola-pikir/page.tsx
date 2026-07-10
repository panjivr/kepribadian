"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import PenjelasanMetode from "@/components/PenjelasanMetode";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import { MINDSET_ITEMS, MINDSET_TIPS, bandMindset, type MindsetDim } from "@/data/tes/mindset";
import { MINDSET_DOK } from "@/data/dok/mindset";

function Hasil({ skor }: { skor: SkorDimensi }) {
  const p = skor.persen as Record<MindsetDim, number>;
  const total = Math.round(p.growth);
  const band = bandMindset(total);

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Pola Pikir</p>
        <h1 className="font-display text-6xl font-extrabold tracking-tight md:text-7xl" style={{ color: band.warna }}>
          {total}
          <span className="text-2xl text-ink-3">/100</span>
        </h1>
        <p className="font-display mt-1 text-lg font-bold">{band.label}</p>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-2">{band.narasi}</p>
      </div>

      <div className="glass glass-hairline mt-10 p-7 md:p-10">
        <div className="flex items-center justify-between text-xs text-ink-3">
          <span>Pola Pikir Tetap</span>
          <span>Pola Pikir Berkembang</span>
        </div>
        <div className="relative mt-2 h-3 rounded-full bg-white/10">
          <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${total}%`, background: band.warna }} />
          <div
            className="absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/80 shadow"
            style={{ left: `${total}%`, background: band.warna }}
          />
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-2">
          Skala ini menempatkanmu antara dua kutub keyakinan tentang kemampuan.
          Bukan label permanen — pola pikir bisa digeser dengan latihan sadar.
        </p>
      </div>

      <div className="glass glass-hairline mt-6 border-mint/20 p-6">
        <p className="kicker !text-[10px]">Cara Menumbuhkan Pola Pikir Berkembang</p>
        <ul className="mt-3 space-y-2 text-sm text-ink-2">
          {MINDSET_TIPS.map((t) => (
            <li key={t} className="flex items-start gap-2.5">
              <span className="mt-0.5 text-mint">✓</span> {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/profil" className="btn-primary">Buka Profil Terpadumu<span aria-hidden>→</span></Link>
        <Link href="/tes" className="btn-ghost">Semua Tes</Link>
      </div>

      <PenjelasanMetode nama="Pola Pikir Berkembang" data={MINDSET_DOK} />
    </div>
  );
}

export default function TesPolaPikir() {
  return (
    <HalamanTes
      sistemId="growth_mindset"
      tier="scientific"
      judul={<>Pola Pikir <span className="text-aurora">Berkembang</span></>}
      deskripsi="Apakah kamu yakin kemampuan bisa tumbuh (growth mindset) atau merasa bawaan yang sulit diubah (fixed mindset)? Keyakinan ini membentuk caramu menghadapi tantangan, usaha, kritik, & kegagalan. 12 pernyataan, skala 1–5."
      bullets={[
        "Konsep Carol Dweck: growth vs fixed mindset",
        "Skor pola pikir + cara menumbuhkannya",
        "Tiap pernyataan ada contoh agar tak salah tafsir",
      ]}
      catatan="Pola pikir bisa berbeda antar bidang & bisa diubah. Ini refleksi, bukan vonis."
      mode="likert"
      items={MINDSET_ITEMS}
      hitung={(jawaban) => skorLikert(MINDSET_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
