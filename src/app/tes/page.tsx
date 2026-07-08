"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";
import { SEMUA_SISTEM, type SistemInfo } from "@/data/sistem-list";
import {
  bacaBigFive,
  bacaHasilSistem,
  bacaMbti,
  bacaProfil,
  type SistemId,
} from "@/lib/storage";

function sudahSelesai(cek: SistemInfo["cek"]): boolean {
  if (!cek) return false;
  if (cek === "bigfive") return !!bacaBigFive();
  if (cek === "mbti") return bacaMbti()?.sumber === "tes";
  return !!bacaHasilSistem(cek as SistemId);
}

const KELOMPOK: { tier: SistemInfo["tier"]; judul: string; sub: string }[] = [
  { tier: "scientific", judul: "Berbasis Sains", sub: "Asesmen dengan dukungan riset psikometri terkuat" },
  { tier: "semi_scientific", judul: "Populer & Semi-Ilmiah", sub: "Kerangka populer; sebagian riset, sebagian diperdebatkan" },
  { tier: "cultural_spiritual", judul: "Budaya & Refleksi", sub: "Warisan tradisi untuk bahan perenungan" },
  { tier: "pseudoscience", judul: "Hiburan", sub: "Wawasan historis, dinikmati sebagai permainan" },
];

function KartuTes({ s, selesai }: { s: SistemInfo; selesai: boolean }) {
  const isi = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-[15px] font-bold tracking-tight">
          {s.nama}
        </h3>
        <TierBadge tier={s.tier} />
      </div>
      <p className="mt-2 text-[13px] leading-relaxed text-ink-3">{s.ringkas}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-[11px] font-medium text-ink-3">{s.durasi ?? ""}</span>
        {selesai ? (
          <span className="rounded-full border border-mint/30 bg-mint/10 px-2 py-0.5 text-[10px] font-semibold text-mint">
            ✓ Selesai
          </span>
        ) : s.jenis === "soon" ? (
          <span className="text-[11px] font-semibold text-ink-3">○ Segera hadir</span>
        ) : s.jenis === "instan" ? (
          <span className="text-[11px] font-semibold text-ink-3">di Cetak Biru</span>
        ) : (
          <span className="text-[11px] font-semibold text-aurora">Mulai →</span>
        )}
      </div>
    </>
  );

  if (!s.route) {
    return <div className="glass h-full p-5 opacity-60">{isi}</div>;
  }
  return (
    <Link
      href={s.route}
      className="glass block h-full p-5 transition-transform duration-300 ease-out hover:scale-[1.02] hover:!border-white/25"
    >
      {isi}
    </Link>
  );
}

export default function DaftarTes() {
  const [status, setStatus] = useState<Record<string, boolean>>({});
  const [punyaProfil, setPunyaProfil] = useState(false);

  useEffect(() => {
    const s: Record<string, boolean> = {};
    for (const sistem of SEMUA_SISTEM) {
      if (sistem.cek) s[sistem.nama] = sudahSelesai(sistem.cek);
    }
    setStatus(s);
    setPunyaProfil(!!bacaProfil());
  }, []);

  const jumlahTes = SEMUA_SISTEM.filter((s) => s.cek).length;
  const jumlahSelesai = Object.values(status).filter(Boolean).length;

  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-32 md:px-8">
      <Reveal className="text-center">
        <p className="kicker mb-4">Laboratorium Diri</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          Semua <span className="text-aurora">lensa dirimu.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-2">
          {jumlahSelesai > 0 ? (
            <>
              <strong className="text-ink">
                {jumlahSelesai}/{jumlahTes}
              </strong>{" "}
              tes selesai. Setiap tes menambah ketajaman Profil Terpadumu.
            </>
          ) : (
            <>Setiap tes menambah ketajaman Profil Terpadumu.</>
          )}
          {!punyaProfil && (
            <>
              {" "}
              Belum mengisi data lahir?{" "}
              <Link href="/mulai" className="text-aurora underline underline-offset-4">
                Mulai dari sana
              </Link>
              .
            </>
          )}
        </p>
      </Reveal>

      {/* Sorotan: mulai dari Big Five */}
      <Reveal delay={80}>
        <div className="glass-strong glass-hairline mt-12 flex flex-col items-start justify-between gap-4 p-7 md:flex-row md:items-center md:p-9">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="font-display text-xl font-extrabold tracking-tight">
                Mulai dari Big Five
              </h2>
              <TierBadge tier="scientific" />
            </div>
            <p className="mt-2 max-w-xl text-sm text-ink-2">
              Fondasi ilmiah yang membuka Profil Terpadu dan memberi prediksi
              awal untuk banyak tes lain. Kalau bingung mulai dari mana, mulai di
              sini.
            </p>
          </div>
          <Link href="/tes/big-five" className="btn-primary shrink-0">
            {status["Big Five (OCEAN)"] ? "Lihat / Ulangi" : "Mulai Big Five"}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>

      {KELOMPOK.map((k) => {
        const daftar = SEMUA_SISTEM.filter(
          (s) => s.tier === k.tier && s.jenis !== "instan"
        );
        if (daftar.length === 0) return null;
        return (
          <div key={k.tier} className="mt-14">
            <Reveal>
              <h2 className="font-display text-2xl font-extrabold tracking-tight">
                {k.judul}
              </h2>
              <p className="mt-1 text-sm text-ink-3">{k.sub}</p>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {daftar.map((s, i) => (
                <Reveal key={s.nama} delay={(i % 3) * 70}>
                  <KartuTes s={s} selesai={!!status[s.nama]} />
                </Reveal>
              ))}
            </div>
          </div>
        );
      })}

      {/* Sistem instan (dari data lahir) */}
      <div className="mt-14">
        <Reveal>
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            Cetak Biru Kelahiran
          </h2>
          <p className="mt-1 text-sm text-ink-3">
            Sembilan sistem yang dihitung instan dari tanggal & jam lahirmu —
            semuanya muncul di satu halaman.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <Link
            href="/hasil"
            className="glass mt-6 flex flex-wrap items-center justify-between gap-4 p-6 transition-transform duration-300 hover:scale-[1.01] hover:!border-white/25"
          >
            <div className="flex flex-wrap gap-1.5">
              {SEMUA_SISTEM.filter((s) => s.jenis === "instan").map((s) => (
                <span
                  key={s.nama}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2"
                >
                  {s.nama}
                </span>
              ))}
            </div>
            <span className="text-sm font-semibold text-aurora">
              Buka Cetak Biru →
            </span>
          </Link>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className="glass-strong glass-hairline p-8 text-center md:p-12">
          <h2 className="font-display text-balance text-2xl font-extrabold tracking-tight md:text-3xl">
            Sudah cukup tes? <span className="text-aurora">Lihat sintesisnya.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink-2">
            Profil Terpadu menggabungkan semua hasilmu jadi satu narasi utuh —
            makin banyak tes, makin tajam.
          </p>
          <Link href="/profil" className="btn-primary mt-7">
            Buka Profil Terpadu
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
