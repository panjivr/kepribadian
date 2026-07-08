"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import TierBadge from "@/components/TierBadge";
import { bacaBigFive, bacaMbti, bacaProfil } from "@/lib/storage";

export default function DaftarTes() {
  const [status, setStatus] = useState({
    profil: false,
    bigfive: false,
    mbti: false,
  });

  useEffect(() => {
    setStatus({
      profil: !!bacaProfil(),
      bigfive: !!bacaBigFive(),
      mbti: !!(bacaMbti()?.sumber === "tes"),
    });
  }, []);

  const tesUtama = [
    {
      href: "/tes/big-five",
      nama: "Big Five (OCEAN)",
      tier: "scientific" as const,
      durasi: "±7 menit · 50 pernyataan",
      isi: "Fondasi ilmiah profilmu. Lima dimensi kepribadian paling tervalidasi dalam psikologi modern — wajib sebelum Profil Terpadu.",
      selesai: status.bigfive,
      utama: true,
    },
    {
      href: "/tes/tipe-16",
      nama: "16 Tipe Kepribadian",
      tier: "semi_scientific" as const,
      durasi: "±4 menit · 28 pilihan",
      isi: "Temukan kode empat hurufmu beserta fungsi kognitif, gaya relasi, dan arah pertumbuhan. Menimpa prediksi otomatis dari Big Five.",
      selesai: status.mbti,
      utama: false,
    },
  ];

  return (
    <section className="mx-auto max-w-4xl px-5 pb-20 pt-32 md:px-8">
      <Reveal className="text-center">
        <p className="kicker mb-4">Laboratorium Diri</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          Pilih <span className="text-aurora">lensa berikutnya.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-2">
          Setiap tes menambah ketajaman Profil Terpadumu.
          {!status.profil && (
            <>
              {" "}
              Belum mengisi data lahir?{" "}
              <Link href="/mulai" className="text-aurora underline underline-offset-4">
                Mulai dari sana
              </Link>{" "}
              untuk hasil instan.
            </>
          )}
        </p>
      </Reveal>

      <div className="mt-12 space-y-6">
        {tesUtama.map((t, i) => (
          <Reveal key={t.href} delay={i * 110}>
            <Tilt className="glass glass-hairline p-7 md:p-9" max={5}>
              <div className="tilt-layer flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-2xl font-extrabold tracking-tight">
                      {t.nama}
                    </h2>
                    <TierBadge tier={t.tier} />
                    {t.selesai && (
                      <span className="rounded-full border border-mint/30 bg-mint/10 px-2.5 py-0.5 text-[11px] font-semibold text-mint">
                        ✓ Selesai
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs font-medium text-ink-3">{t.durasi}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">{t.isi}</p>
                </div>
                <Link
                  href={t.href}
                  className={`${t.utama ? "btn-primary" : "btn-ghost"} shrink-0`}
                >
                  {t.selesai ? "Lihat / Ulangi" : "Mulai Tes"}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="glass mt-6 p-6 text-center text-sm text-ink-3">
          DISC, Enneagram, VIA Strengths, HEXACO, Multiple Intelligence, dan
          20+ sistem lain sedang disiapkan — indikasi awalnya sudah bisa kamu
          lihat di{" "}
          <Link href="/profil" className="text-aurora underline underline-offset-4">
            Profil Terpadu
          </Link>{" "}
          setelah Big Five selesai.
        </div>
      </Reveal>
    </section>
  );
}
