"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import RadarChart from "@/components/RadarChart";
import BarSkor from "@/components/BarSkor";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import {
  HEXACO_INFO,
  HEXACO_ITEMS,
  HEXACO_LABEL,
  HEXACO_URUTAN,
  type HexacoDim,
} from "@/data/tes/hexaco";

function Hasil({ skor }: { skor: SkorDimensi }) {
  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · HEXACO</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
          Enam sisi <span className="text-aurora">karaktermu.</span>
        </h1>
      </div>

      <div className="glass glass-hairline mt-10 grid items-center gap-8 p-7 md:grid-cols-[1fr_1.2fr] md:p-10">
        <div className="flex justify-center">
          <RadarChart
            nilai={HEXACO_URUTAN.map((d) => skor.persen[d])}
            label={HEXACO_URUTAN.map((d) => HEXACO_LABEL[d])}
          />
        </div>
        <div className="space-y-4">
          {HEXACO_URUTAN.map((d) => (
            <BarSkor
              key={d}
              label={`${HEXACO_LABEL[d]} — ${HEXACO_INFO[d].nama.split(" (")[0]}`}
              nilaiTeks={`${Math.round(skor.persen[d])}%`}
              persen={skor.persen[d]}
            />
          ))}
        </div>
      </div>

      {/* Sorotan Honesty-Humility */}
      <div className="glass glass-hairline mt-6 border-mint/25 p-7 md:p-8">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="kicker !text-[10px]">Pembeda Utama HEXACO</p>
            <h2 className="font-display mt-1.5 text-2xl font-extrabold tracking-tight">
              Kejujuran-Kerendahan Hati: {Math.round(skor.persen.H)}%
            </h2>
          </div>
          <span className="font-display text-3xl font-extrabold text-mint">
            H
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-2">
          Dimensi inilah yang membuat HEXACO melengkapi Big Five.{" "}
          {HEXACO_INFO.H.insight}{" "}
          {skor.persen.H >= 56
            ? `Skormu tinggi — kamu cenderung ${HEXACO_INFO.H.tinggi}.`
            : skor.persen.H <= 45
              ? `Skormu di sisi rendah — kecenderungan ${HEXACO_INFO.H.rendah}. Ini undangan untuk sadar diri, bukan vonis.`
              : `Skormu seimbang — kamu bisa tegas mengejar keuntungan tanpa kehilangan integritas.`}
        </p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {HEXACO_URUTAN.filter((d) => d !== "H").map((d) => {
          const info = HEXACO_INFO[d];
          const p = skor.persen[d];
          const arah = p >= 56 ? info.tinggi : p <= 45 ? info.rendah : null;
          return (
            <div key={d} className="glass h-full p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg font-bold">
                  {HEXACO_LABEL[d]}
                </h3>
                <span className="text-sm font-bold text-ink-2">
                  {Math.round(p)}%
                </span>
              </div>
              <p className="mt-1 text-xs text-ink-3">{info.deskripsi}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">
                {arah
                  ? `Kecenderunganmu: ${arah}.`
                  : "Kamu berada di tengah spektrum — luwes mengambil kedua sisi sesuai situasi."}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
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

export default function TesHexaco() {
  return (
    <HalamanTes
      sistemId="hexaco"
      tier="scientific"
      judul={
        <>
          Tes <span className="text-aurora">HEXACO</span>
        </>
      }
      deskripsi="Model enam dimensi yang menyempurnakan Big Five dengan satu faktor krusial: Kejujuran-Kerendahan Hati. 24 pernyataan, skala 1–5, sekitar 4 menit."
      bullets={[
        "6 dimensi × 4 item, termasuk faktor etika yang tak ada di Big Five",
        "Sebagian pernyataan dibalik untuk menjaga kejujuran jawaban",
        "Menambah kedalaman Profil Terpadumu",
      ]}
      mode="likert"
      items={HEXACO_ITEMS}
      hitung={(jawaban) => skorLikert(HEXACO_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
