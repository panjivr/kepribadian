"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import RadarChart from "@/components/RadarChart";
import BarSkor from "@/components/BarSkor";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import {
  MORAL_INFO,
  MORAL_INSIGHT,
  MORAL_ITEMS,
  MORAL_URUTAN,
  type MoralDim,
} from "@/data/tes/moral";

function Hasil({ skor }: { skor: SkorDimensi }) {
  const p = skor.persen as Record<MoralDim, number>;
  const individualizing = (p.care + p.fairness) / 2;
  const binding = (p.loyalty + p.authority + p.sanctity) / 2;
  const insight =
    individualizing - binding >= 10
      ? MORAL_INSIGHT.individualizing
      : binding - individualizing >= 10
        ? MORAL_INSIGHT.binding
        : MORAL_INSIGHT.seimbang;

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Kompas Moral</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
          Fondasi <span className="text-aurora">nilai-nilaimu.</span>
        </h1>
      </div>

      <div className="glass glass-hairline mt-10 grid items-center gap-8 p-7 md:grid-cols-[1fr_1.2fr] md:p-10">
        <div className="flex justify-center">
          <RadarChart
            nilai={MORAL_URUTAN.map((d) => p[d])}
            label={MORAL_URUTAN.map((d) => MORAL_INFO[d].labelPendek)}
          />
        </div>
        <div className="space-y-3.5">
          {MORAL_URUTAN.map((d) => (
            <BarSkor
              key={d}
              label={MORAL_INFO[d].nama}
              nilaiTeks={`${Math.round(p[d])}%`}
              persen={p[d]}
            />
          ))}
        </div>
      </div>

      <div className="glass glass-hairline mt-6 border-violet/20 p-7">
        <p className="kicker !text-[10px]">Pola Moralmu</p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
            <p className="text-xs uppercase tracking-widest text-ink-3">
              Individualizing (Kepedulian + Keadilan)
            </p>
            <p className="font-display mt-1 text-2xl font-extrabold">
              {Math.round(individualizing)}%
            </p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
            <p className="text-xs uppercase tracking-widest text-ink-3">
              Binding (Loyalitas + Otoritas + Kesucian)
            </p>
            <p className="font-display mt-1 text-2xl font-extrabold">
              {Math.round(binding)}%
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-ink-2">{insight}</p>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-ink-3">
        Teori Moral Foundations (Jonathan Haidt) bagus untuk menyadari{" "}
        <em>mengapa</em> kamu bisa berbeda nilai dengan orang lain — ini alat
        pemahaman, bukan alat menghakimi siapa yang benar.
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

export default function TesKompasMoral() {
  return (
    <HalamanTes
      sistemId="mft"
      tier="scientific"
      judul={
        <>
          Kompas <span className="text-aurora">Moral</span>
        </>
      }
      deskripsi="Enam fondasi yang mendasari intuisi benar-salahmu. Nilai seberapa relevan tiap pertimbangan ini saat kamu menilai sebuah tindakan. 18 pernyataan, skala 1–5."
      bullets={[
        "6 fondasi moral universal",
        "Melihat pola individualizing vs binding-mu",
        "Alat empati, bukan penghakiman",
      ]}
      ujungSkala={["Tidak relevan bagiku", "Sangat relevan"]}
      mode="likert"
      items={MORAL_ITEMS}
      hitung={(jawaban) => skorLikert(MORAL_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
