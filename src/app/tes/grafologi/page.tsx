"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";

interface Aspek {
  id: string;
  pertanyaan: string;
  opsi: { label: string; makna: string }[];
}

const ASPEK: Aspek[] = [
  {
    id: "ukuran",
    pertanyaan: "Ukuran tulisanmu cenderung…",
    opsi: [
      { label: "Besar", makna: "ekspresif dan senang diperhatikan" },
      { label: "Kecil", makna: "fokus, teliti, dan cenderung introvert" },
      { label: "Sedang", makna: "adaptif dan seimbang" },
    ],
  },
  {
    id: "kemiringan",
    pertanyaan: "Kemiringan hurufmu…",
    opsi: [
      { label: "Miring ke kanan", makna: "ekspresif secara emosional, berorientasi pada orang" },
      { label: "Miring ke kiri", makna: "menahan diri, protektif terhadap perasaan" },
      { label: "Tegak", makna: "logis dan mengutamakan kontrol diri" },
    ],
  },
  {
    id: "tekanan",
    pertanyaan: "Tekanan penamu saat menulis…",
    opsi: [
      { label: "Kuat/tebal", makna: "energi dan komitmen yang tinggi" },
      { label: "Ringan/tipis", makna: "sensitif dan hemat energi" },
    ],
  },
  {
    id: "spasi",
    pertanyaan: "Jarak antar katamu…",
    opsi: [
      { label: "Lebar", makna: "butuh ruang dan kebebasan pribadi" },
      { label: "Rapat", makna: "hangat, tidak suka kesendirian" },
    ],
  },
];

export default function TesGrafologi() {
  const [jawab, setJawab] = useState<Record<string, number>>({});
  const selesai = Object.keys(jawab).length === ASPEK.length;

  return (
    <section className="mx-auto max-w-3xl px-5 pb-20 pt-32 md:px-8">
      <Reveal className="text-center">
        <div className="mb-4 flex justify-center">
          <TierBadge tier="pseudoscience" />
        </div>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          <span className="text-aurora">Grafologi</span> — Just for Fun
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink-2">
          Amati tulisan tanganmu sendiri, lalu jawab beberapa pertanyaan untuk
          membaca interpretasi tradisionalnya.
        </p>
        <p className="mx-auto mt-4 max-w-md rounded-2xl border border-amber/20 bg-amber/8 px-4 py-3 text-xs leading-relaxed text-ink-2">
          <strong className="text-amber">Murni hiburan.</strong> Riset
          menunjukkan grafologi tidak lebih akurat daripada tebakan acak untuk
          menilai kepribadian. Jangan pernah gunakan untuk keputusan seleksi
          kerja.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 space-y-6">
          {ASPEK.map((a) => (
            <div key={a.id} className="glass p-6">
              <p className="font-display mb-3 font-bold">{a.pertanyaan}</p>
              <div className="flex flex-wrap gap-2">
                {a.opsi.map((o, i) => (
                  <button
                    key={o.label}
                    onClick={() => setJawab((j) => ({ ...j, [a.id]: i }))}
                    className={`rounded-xl border px-4 py-2 text-sm transition-all ${
                      jawab[a.id] === i
                        ? "border-violet bg-violet/15 text-ink"
                        : "border-white/12 bg-white/4 text-ink-2 hover:border-white/25"
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {selesai && (
        <div className="glass glass-hairline fade-in-up mt-8 p-7 md:p-9">
          <p className="kicker !text-[10px]">Interpretasi Tradisional</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">
            Menurut tradisi grafologi, tulisan tanganmu menunjukkan seseorang yang{" "}
            {ASPEK.map((a) => a.opsi[jawab[a.id]].makna).join("; ")}.
          </p>
          <p className="mt-4 text-xs italic text-ink-3">
            Nikmati sebagai cermin ringan — bukan potret ilmiah dirimu.
          </p>
        </div>
      )}

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <Link href="/profil" className="btn-primary">
          Buka Profil Terpadumu
          <span aria-hidden>→</span>
        </Link>
        <Link href="/tes" className="btn-ghost">
          Semua Tes
        </Link>
      </div>
    </section>
  );
}
