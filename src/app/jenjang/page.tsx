"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { JENJANG } from "@/data/jenjang";

export default function PetaJenjang() {
  const [aktif, setAktif] = useState(JENJANG[3].id); // default: SMA/SMK (fase krusial)
  const j = JENJANG.find((x) => x.id === aktif)!;

  return (
    <section className="mx-auto max-w-5xl px-5 pb-20 pt-32 md:px-8">
      <Reveal className="text-center">
        <p className="kicker mb-4">Peta Jenjang Kehidupan</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          Menemanimu di <span className="text-aurora">setiap fase hidup.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-2">
          Dari TK memilih bakat, SMP memilih peminatan, SMA memetakan jurusan
          kuliah, hingga membangun keluarga — tiap fase punya keputusan penting.
          Djiva memandu tiap tahap dengan pemetaan & tes yang tepat.
        </p>
      </Reveal>

      {/* Timeline selector */}
      <Reveal delay={100}>
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {JENJANG.map((x) => (
            <button
              key={x.id}
              onClick={() => setAktif(x.id)}
              className={`rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ease-out ${
                aktif === x.id
                  ? "border-violet/60 bg-violet/15 text-ink shadow-[0_0_24px_rgba(139,92,246,0.25)]"
                  : "border-white/10 bg-white/4 text-ink-2 hover:border-white/25"
              }`}
            >
              <span className="mr-1.5" aria-hidden>{x.emoji}</span>
              {x.label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Detail fase */}
      <div key={j.id} className="fade-in-up mt-8">
        <div className="glass glass-hairline p-7 md:p-10">
          <div className="flex items-center gap-4">
            <span className="text-4xl" aria-hidden>{j.emoji}</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-3">
                {j.label} · {j.usia}
              </p>
              <h2 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                {j.judul}
              </h2>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-2">{j.fokus}</p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-white/4 p-5">
              <p className="kicker !text-[10px] mb-3">Cara Memetakan</p>
              <ul className="space-y-2 text-sm text-ink-2">
                {j.caraMemetakan.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-cyan">◆</span> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/4 p-5">
              <p className="kicker !text-[10px] mb-3">Solusi & Tips Praktis</p>
              <ul className="space-y-2 text-sm text-ink-2">
                {j.solusi.map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <span className="mt-0.5 text-mint">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-strong glass-hairline mt-5 p-6">
            <p className="kicker !text-[10px] mb-2">Keputusan Kunci · {j.keputusanKunci.judul}</p>
            <p className="text-sm leading-relaxed text-ink-2">{j.keputusanKunci.isi}</p>
          </div>

          <div className="mt-6">
            <p className="kicker !text-[10px] mb-3">Tes & Fitur yang Membantu Fase Ini</p>
            <div className="flex flex-wrap gap-3">
              {j.tesTerkait.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="rounded-2xl border border-violet/30 bg-violet/10 px-4 py-2 text-sm font-semibold text-aurora transition-colors hover:bg-violet/20"
                >
                  {t.nama} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Reveal>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink-3">
          Panduan ini bersifat edukatif untuk menemani pengambilan keputusan —
          bukan aturan baku atau diagnosis. Tiap anak & orang unik; padukan
          dengan diskusi keluarga, guru BK, dan bila perlu konselor profesional.
        </p>
      </Reveal>

      <Reveal>
        <div className="glass-strong glass-hairline mt-8 p-8 text-center md:p-12">
          <h2 className="font-display text-balance text-2xl font-extrabold tracking-tight md:text-3xl">
            Mulai dari fasemu sekarang.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink-2">
            Ikuti tes yang relevan, lalu semua hasil disatukan di Profil
            Terpadumu.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link href="/tes" className="btn-primary">
              Lihat Semua Tes
              <span aria-hidden>→</span>
            </Link>
            <Link href="/profil" className="btn-ghost">
              Profil Terpadu
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
