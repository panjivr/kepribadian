"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";
import {
  GOLDARAH_INFO,
  type GolDarah,
} from "@/data/tes/golonganDarah";
import { bacaHasilSistem, simpanHasilSistem } from "@/lib/storage";

const PILIHAN: GolDarah[] = ["A", "B", "O", "AB"];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2">
      {children}
    </span>
  );
}

export default function TesGolonganDarah() {
  const [pilih, setPilih] = useState<GolDarah | null>(null);

  useEffect(() => {
    const t = bacaHasilSistem<{ gol: GolDarah }>("blood_type");
    if (t?.skor?.gol) setPilih(t.skor.gol);
  }, []);

  const setGol = (g: GolDarah) => {
    setPilih(g);
    simpanHasilSistem("blood_type", { gol: g });
  };

  const info = pilih ? GOLDARAH_INFO[pilih] : null;

  return (
    <section className="mx-auto max-w-3xl px-5 pb-20 pt-32 md:px-8">
      <Reveal className="text-center">
        <div className="mb-4 flex justify-center">
          <TierBadge tier="pseudoscience" />
        </div>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          Kepribadian <span className="text-aurora">Golongan Darah</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink-2">
          Sangat populer di Jepang & Korea sebagai obrolan ringan. Pilih golongan
          darahmu untuk membaca profil tradisionalnya.
        </p>
        <p className="mx-auto mt-4 max-w-md rounded-2xl border border-amber/20 bg-amber/8 px-4 py-3 text-xs leading-relaxed text-ink-2">
          <strong className="text-amber">Murni hiburan.</strong> Tidak ada bukti
          ilmiah yang menghubungkan golongan darah dengan kepribadian. Nikmati
          sebagai permainan budaya, bukan penilaian diri.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 grid grid-cols-4 gap-3">
          {PILIHAN.map((g) => (
            <button
              key={g}
              onClick={() => setGol(g)}
              className={`font-display rounded-2xl border-2 py-6 text-2xl font-extrabold transition-all duration-300 ease-out ${
                pilih === g
                  ? "border-violet bg-violet/20 text-ink shadow-[0_0_28px_rgba(139,92,246,0.35)]"
                  : "border-white/12 bg-white/4 text-ink-2 hover:border-white/25"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </Reveal>

      {info && pilih && (
        <div className="fade-in-up mt-8">
          <div className="glass glass-hairline p-7 md:p-9">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              Golongan <span className="text-aurora">{pilih}</span>
            </h2>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {info.stereotip.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink-2">
              <p>
                <strong className="text-ink">Di tempat kerja:</strong> {info.kerja}.
              </p>
              <p>
                <strong className="text-ink">Dalam cinta:</strong> {info.cinta}.
              </p>
              <p>
                <strong className="text-ink">Konon cocok dengan:</strong> {info.cocok}.
              </p>
              <p>
                <strong className="text-ink">Sisi yang diwaspadai:</strong> {info.negatif}.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
