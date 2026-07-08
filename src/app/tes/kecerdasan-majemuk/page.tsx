"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import RadarChart from "@/components/RadarChart";
import BarSkor from "@/components/BarSkor";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import { MI_INFO, MI_ITEMS, MI_URUTAN, type MiDim } from "@/data/tes/kecerdasan";

function Hasil({ skor }: { skor: SkorDimensi }) {
  const urut = skor.urut as { dim: MiDim; raw: number; persen: number }[];
  const top3 = urut.slice(0, 3);

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Kecerdasan Majemuk</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
          Peta <span className="text-aurora">delapan kecerdasanmu.</span>
        </h1>
      </div>

      <div className="glass glass-hairline mt-10 grid items-center gap-8 p-7 md:grid-cols-[1fr_1.2fr] md:p-10">
        <div className="flex justify-center">
          <RadarChart
            nilai={MI_URUTAN.map((d) => skor.persen[d])}
            label={MI_URUTAN.map((d) => MI_INFO[d].labelPendek)}
          />
        </div>
        <div className="space-y-3.5">
          {urut.map((u, i) => (
            <BarSkor
              key={u.dim}
              label={MI_INFO[u.dim].nama}
              nilaiTeks={`${Math.round(u.persen)}%`}
              persen={u.persen}
              aktif={i < 3}
            />
          ))}
        </div>
      </div>

      <p className="kicker mt-10 text-center">Top 3 Kecerdasanmu</p>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {top3.map((u, i) => {
          const info = MI_INFO[u.dim];
          return (
            <div key={u.dim} className="glass glass-hairline p-6">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-3xl font-extrabold text-aurora">
                  {i + 1}
                </span>
                <span className="text-sm font-bold text-ink-2">
                  {Math.round(u.persen)}%
                </span>
              </div>
              <h3 className="font-display mt-1 text-lg font-bold">{info.nama}</h3>
              <p className="mt-1 text-xs text-ink-3">{info.desk}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">
                <strong className="text-ink">Cara belajar efektif:</strong>{" "}
                {info.caraBelajar}.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {info.karier.map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-ink-3">
        Teori Kecerdasan Majemuk Gardner sangat populer di dunia pendidikan,
        namun validitas psikometriknya masih diperdebatkan. Baca hasil ini
        sebagai peta preferensi & bakat, bukan batas kemampuanmu.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/profil" className="btn-primary">
          Buka Profil Terpadumu
          <span aria-hidden>→</span>
        </Link>
        <Link href="/tes" className="btn-ghost">
          Semua Tes
        </Link>
      </div>
    </div>
  );
}

export default function TesKecerdasan() {
  return (
    <HalamanTes
      sistemId="mi"
      tier="semi_scientific"
      judul={
        <>
          Kecerdasan <span className="text-aurora">Majemuk</span>
        </>
      }
      deskripsi="Delapan jenis kecerdasan Howard Gardner — dari linguistik hingga naturalis. Temukan tiga kekuatan terbesarmu. 24 pernyataan, skala 1–5."
      bullets={[
        "Radar 8 kecerdasan sekaligus",
        "Rekomendasi cara belajar per kekuatan",
        "Menyokong seksi Cara Belajar di Profil Terpadu",
      ]}
      mode="likert"
      items={MI_ITEMS}
      hitung={(jawaban) => skorLikert(MI_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
