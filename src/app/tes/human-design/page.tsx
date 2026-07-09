"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";
import PenjelasanMetode from "@/components/PenjelasanMetode";
import { HUMAN_DESIGN_DOK } from "@/data/dok/human-design";
import {
  HD_AUTHORITY,
  HD_INFO,
  HD_URUTAN,
  type HdTipe,
} from "@/data/tes/humanDesign";
import { bacaHasilSistem, simpanHasilSistem } from "@/lib/storage";

export default function TesHumanDesign() {
  const [tipe, setTipe] = useState<HdTipe | null>(null);

  useEffect(() => {
    const t = bacaHasilSistem<{ tipe: HdTipe }>("human_design");
    if (t?.skor?.tipe) setTipe(t.skor.tipe);
  }, []);

  const pilih = (t: HdTipe) => {
    setTipe(t);
    simpanHasilSistem("human_design", { tipe: t });
  };

  const info = tipe ? HD_INFO[tipe] : null;

  return (
    <section className="mx-auto max-w-3xl px-5 pb-20 pt-32 md:px-8">
      <Reveal className="text-center">
        <div className="mb-4 flex justify-center">
          <TierBadge tier="cultural_spiritual" />
        </div>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          <span className="text-aurora">Human Design</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink-2">
          Menghitung bagan Human Design lengkap butuh jam & kota lahir yang
          akurat plus posisi planet. Jika kamu sudah tahu tipemu dari bagan lain,
          pilih di sini untuk membaca ringkasannya.
        </p>
        <p className="mx-auto mt-4 max-w-md rounded-2xl border border-violet/20 bg-violet/8 px-4 py-3 text-xs leading-relaxed text-ink-2">
          Sistem sintesis esoterik (astrologi + I Ching + Kabbalah + cakra),
          tanpa dasar ilmiah — sajian untuk refleksi.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {HD_URUTAN.map((t) => (
            <button
              key={t}
              onClick={() => pilih(t)}
              className={`rounded-2xl border-2 p-4 text-left transition-all ${
                tipe === t
                  ? "border-violet bg-violet/15 text-ink"
                  : "border-white/12 bg-white/4 text-ink-2 hover:border-white/25"
              }`}
            >
              <span className="font-display font-bold">{t}</span>
              <span className="block text-xs text-ink-3">
                {HD_INFO[t].populasi} populasi
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      {info && tipe && (
        <div className="fade-in-up mt-8">
          <div className="glass glass-hairline p-7 md:p-9">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              {tipe}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-2">
              {info.deskripsi}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["Strategi", info.strategi],
                ["Aura", info.aura],
                ["Tanda kamu selaras", info.tandaBenar],
                ["Tanda kamu melenceng", info.tandaSalah],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-white/8 bg-white/4 p-4">
                  <p className="text-xs uppercase tracking-widest text-ink-3">{k}</p>
                  <p className="mt-1 text-sm font-medium text-ink-2">{v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass mt-6 p-6">
            <p className="kicker !text-[10px]">Otoritas Keputusan (7 jenis)</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-3">
              Human Design juga mengenal “authority” — cara terbaik tubuhmu
              mengambil keputusan: {HD_AUTHORITY.join(" · ")}. Untuk mengetahui
              milikmu, dibutuhkan bagan lengkap dari jam & lokasi lahir.
            </p>
          </div>
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

      <PenjelasanMetode nama="Human Design" data={HUMAN_DESIGN_DOK} />
    </section>
  );
}
