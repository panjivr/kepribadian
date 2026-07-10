"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import BarSkor from "@/components/BarSkor";
import PenjelasanMetode from "@/components/PenjelasanMetode";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import { GRIT_INFO, GRIT_ITEMS, GRIT_TIPS, GRIT_URUTAN, bandGrit, type GritDim } from "@/data/tes/grit";
import { GRIT_DOK } from "@/data/dok/grit";

function Hasil({ skor }: { skor: SkorDimensi }) {
  const p = skor.persen as Record<GritDim, number>;
  const total = Math.round((p.konsistensi + p.ketekunan) / 2);
  const band = bandGrit(total);

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Grit (Ketabahan)</p>
        <h1 className="font-display text-6xl font-extrabold tracking-tight md:text-7xl" style={{ color: band.warna }}>
          {total}
          <span className="text-2xl text-ink-3">/100</span>
        </h1>
        <p className="font-display mt-1 text-lg font-bold">{band.label}</p>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-2">{band.narasi}</p>
      </div>

      <div className="glass glass-hairline mt-10 space-y-5 p-7 md:p-10">
        {GRIT_URUTAN.map((d) => (
          <div key={d}>
            <BarSkor label={GRIT_INFO[d].nama} nilaiTeks={`${Math.round(p[d])}%`} persen={p[d]} />
            <p className="mt-1 text-xs leading-relaxed text-ink-3">{GRIT_INFO[d].deskripsi}</p>
          </div>
        ))}
      </div>

      <div className="glass glass-hairline mt-6 border-mint/20 p-6">
        <p className="kicker !text-[10px]">Cara Menumbuhkan Ketabahan</p>
        <ul className="mt-3 space-y-2 text-sm text-ink-2">
          {GRIT_TIPS.map((t) => (
            <li key={t} className="flex items-start gap-2.5">
              <span className="mt-0.5 text-mint">✓</span> {t}
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-ink-3">
        Ketabahan paling bermakna saat diarahkan pada tujuan yang tepat — bukan
        alat menyalahkan diri. Ia bisa ditumbuhkan, bukan bakat tetap.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/profil" className="btn-primary">Buka Profil Terpadumu<span aria-hidden>→</span></Link>
        <Link href="/tes" className="btn-ghost">Semua Tes</Link>
      </div>

      <PenjelasanMetode nama="Grit (Ketabahan)" data={GRIT_DOK} />
    </div>
  );
}

export default function TesGrit() {
  return (
    <HalamanTes
      sistemId="grit"
      tier="scientific"
      judul={<>Grit — <span className="text-aurora">Ketabahan</span></>}
      deskripsi="Seberapa gigih & konsisten kamu mengejar tujuan jangka panjang? Grit menggabungkan konsistensi minat & ketekunan usaha — sering lebih meramalkan keberhasilan daripada bakat. 12 pernyataan, skala 1–5."
      bullets={[
        "2 komponen: konsistensi minat & ketekunan usaha",
        "Skor ketabahan + cara menumbuhkannya",
        "Tiap pernyataan ada contoh agar tak salah tafsir",
      ]}
      catatan="Konsep Angela Duckworth. Ketabahan bisa dilatih — ini refleksi, bukan vonis."
      mode="likert"
      items={GRIT_ITEMS}
      hitung={(jawaban) => skorLikert(GRIT_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
