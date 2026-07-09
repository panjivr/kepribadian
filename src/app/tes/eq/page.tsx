"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import RadarChart from "@/components/RadarChart";
import BarSkor from "@/components/BarSkor";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import { EQ_INFO, EQ_ITEMS, EQ_URUTAN, type EqDim } from "@/data/tes/eq";

function bandEq(persen: number): { label: string; warna: string } {
  if (persen >= 80) return { label: "Sangat Baik", warna: "#30d158" };
  if (persen >= 65) return { label: "Baik", warna: "#67e8f9" };
  if (persen >= 45) return { label: "Sedang", warna: "#818cf8" };
  return { label: "Sedang Berkembang", warna: "#ff9f0a" };
}

function Hasil({ skor }: { skor: SkorDimensi }) {
  const p = skor.persen as Record<EqDim, number>;
  const overall = Math.round(
    EQ_URUTAN.reduce((a, d) => a + p[d], 0) / EQ_URUTAN.length
  );
  const band = bandEq(overall);
  const urut = [...EQ_URUTAN].sort((a, b) => p[b] - p[a]);
  const terkuat = urut[0];
  const terlemah = urut[urut.length - 1];

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Kecerdasan Emosional (EQ)</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
          Skor EQ-mu:{" "}
          <span className="text-aurora">{overall}</span>
          <span className="text-2xl text-ink-3">/100</span>
        </h1>
        <p className="mt-2 text-sm font-semibold" style={{ color: band.warna }}>
          {band.label}
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-2">
          EQ, tidak seperti IQ, terus bisa dilatih sepanjang hidup. Angka ini
          adalah potret saat ini — titik awal, bukan batas.
        </p>
      </div>

      <div className="glass glass-hairline mt-10 grid items-center gap-8 p-7 md:grid-cols-[1fr_1.2fr] md:p-10">
        <div className="flex justify-center">
          <RadarChart
            nilai={EQ_URUTAN.map((d) => p[d])}
            label={EQ_URUTAN.map((d) => EQ_INFO[d].labelPendek)}
          />
        </div>
        <div className="space-y-4">
          {EQ_URUTAN.map((d) => (
            <BarSkor
              key={d}
              label={EQ_INFO[d].labelPendek}
              nilaiTeks={`${Math.round(p[d])}%`}
              persen={p[d]}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {EQ_URUTAN.map((d) => {
          const info = EQ_INFO[d];
          const nilai = p[d];
          const arah = nilai >= 60 ? info.tinggi : info.rendah;
          return (
            <div key={d} className="glass h-full p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-base font-bold">{info.nama}</h3>
                <span className="shrink-0 text-sm font-bold text-ink-2">
                  {Math.round(nilai)}%
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink-3">
                {info.deskripsi}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-2">{arah}</p>
            </div>
          );
        })}
      </div>

      {/* Edukasi: mengapa & cara meningkatkan domain terlemah */}
      <div className="glass glass-hairline mt-6 border-violet/20 p-7">
        <p className="kicker !text-[10px]">Langkah Praktis Untukmu</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-2">
          Kekuatan emosionalmu ada di{" "}
          <strong className="text-mint">{EQ_INFO[terkuat].labelPendek}</strong> —
          manfaatkan itu. Area dengan ruang tumbuh terbesar adalah{" "}
          <strong className="text-amber">{EQ_INFO[terlemah].labelPendek}</strong>.
          Tiga kebiasaan kecil untuk menguatkannya:
        </p>
        <ul className="mt-3 space-y-2">
          {EQ_INFO[terlemah].tingkatkan.map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-sm text-ink-2">
              <span className="mt-0.5 text-aurora">→</span> {t}
            </li>
          ))}
        </ul>
      </div>

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

export default function TesEq() {
  return (
    <HalamanTes
      sistemId="eq"
      tier="semi_scientific"
      judul={
        <>
          Tes <span className="text-aurora">EQ</span> — Kecerdasan Emosional
        </>
      }
      deskripsi="Mengukur lima domain kecerdasan emosional menurut model Daniel Goleman: kesadaran diri, regulasi diri, motivasi, empati, dan keterampilan sosial. 25 pernyataan, skala 1–5."
      bullets={[
        "Tiap pernyataan dilengkapi analogi agar tak salah tafsir",
        "Beberapa pernyataan sengaja dibalik untuk menjaga kejujuran jawaban",
        "EQ bisa dilatih — hasil dilengkapi langkah praktis",
      ]}
      catatan="Ini asesmen laporan-diri (self-report) untuk refleksi & pengembangan, bukan tes EQ berbasis kemampuan (ability) seperti MSCEIT. Jawab sejujurnya sesuai dirimu yang sebenarnya, bukan yang ideal."
      mode="likert"
      items={EQ_ITEMS}
      hitung={(jawaban) => skorLikert(EQ_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
