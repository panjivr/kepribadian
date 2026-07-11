"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import BarSkor from "@/components/BarSkor";
import PenjelasanMetode from "@/components/PenjelasanMetode";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import { DARK_INFO, DARK_ITEMS, DARK_TIPS, DARK_URUTAN, bandDark, type DarkDim } from "@/data/tes/darktriad";
import { DARK_DOK } from "@/data/dok/darktriad";

function Hasil({ skor }: { skor: SkorDimensi }) {
  const p = skor.persen as Record<DarkDim, number>;
  const urut = skor.urut as { dim: DarkDim; persen: number }[];
  const dominan = urut[0].dim;

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Sisi Gelap (Dark Triad)</p>
        <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: DARK_INFO[dominan].warna }}>
          {DARK_INFO[dominan].nama}
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-2">
          Sifat yang paling menonjol pada dirimu. Ingat: ini kesadaran diri,
          <strong className="text-ink"> bukan vonis</strong> — dan bukan diagnosis.
        </p>
      </div>

      <div className="glass glass-hairline mt-10 space-y-5 p-7 md:p-10">
        {DARK_URUTAN.map((d) => {
          const band = bandDark(p[d]);
          return (
            <div key={d}>
              <BarSkor
                label={`${DARK_INFO[d].nama} — ${band.label}`}
                nilaiTeks={`${Math.round(p[d])}%`}
                persen={p[d]}
                aktif={d === dominan}
              />
              <p className="mt-1 text-xs leading-relaxed text-ink-3">{DARK_INFO[d].deskripsi}</p>
              <p className="mt-1 text-xs leading-relaxed text-mint/90">{DARK_INFO[d].sehat}</p>
            </div>
          );
        })}
      </div>

      <div className="glass glass-hairline mt-6 border-amber/20 p-6">
        <p className="kicker !text-[10px]">Cara Mengelolanya dengan Sehat</p>
        <ul className="mt-3 space-y-2 text-sm text-ink-2">
          {DARK_TIPS.map((t) => (
            <li key={t} className="flex items-start gap-2.5">
              <span className="mt-0.5 text-amber">→</span> {t}
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-ink-3">
        Ini asesmen subklinis untuk refleksi, bukan diagnosis gangguan
        kepribadian. Semua orang punya sisi ini dalam kadar berbeda — yang
        menentukan adalah cara kita mengelolanya.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/profil" className="btn-primary">Buka Profil Terpadumu<span aria-hidden>→</span></Link>
        <Link href="/tumbuh" className="btn-ghost">Rekomendasi Bertumbuh</Link>
      </div>

      <PenjelasanMetode nama="Sisi Gelap (Dark Triad)" data={DARK_DOK} />
    </div>
  );
}

export default function TesSisiGelap() {
  return (
    <HalamanTes
      sistemId="dark_triad"
      tier="scientific"
      judul={<>Sisi Gelap — <span className="text-aurora">Dark Triad</span></>}
      deskripsi="Tiga sifat 'gelap namun normal': Machiavellianism (siasat), Narsisme (kemegahan diri), & Psikopati (dinginnya rasa). Skor tinggi bukan vonis 'jahat' — ini cermin untuk kesadaran diri. 18 pernyataan, skala 1–5."
      bullets={[
        "3 sifat: siasat, kemegahan diri, dinginnya rasa",
        "Tiap sifat punya sisi sehat yang bisa disalurkan",
        "Tiap pernyataan ada contoh agar tak salah tafsir",
      ]}
      catatan="Asesmen subklinis untuk refleksi — BUKAN diagnosis. Jawab sejujurnya sesuai dirimu yang sebenarnya."
      mode="likert"
      items={DARK_ITEMS}
      hitung={(jawaban) => skorLikert(DARK_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
