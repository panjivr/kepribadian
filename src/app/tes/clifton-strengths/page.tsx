"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";
import {
  CLIFTON_THEMES,
  DOMAIN_INFO,
  DOMAIN_URUTAN,
  type CliftonTheme,
} from "@/data/tes/clifton";
import { bacaHasilSistem, simpanHasilSistem } from "@/lib/storage";

const MAKS = 5;

const THEME_BY_ID: Record<string, CliftonTheme> = Object.fromEntries(
  CLIFTON_THEMES.map((t) => [t.id, t])
);

export default function TesCliftonStrengths() {
  const [top, setTop] = useState<string[]>([]);

  useEffect(() => {
    const t = bacaHasilSistem<{ top: string[] }>("clifton");
    if (t?.skor?.top) setTop(t.skor.top.filter((id) => THEME_BY_ID[id]));
  }, []);

  const toggle = (id: string) => {
    const sudahPilih = top.includes(id);
    let next: string[];
    if (sudahPilih) {
      next = top.filter((x) => x !== id);
    } else {
      if (top.length >= MAKS) return;
      next = [...top, id];
    }
    setTop(next);
    simpanHasilSistem("clifton", { top: next });
  };

  const domainCounts = DOMAIN_URUTAN.map((domain) => ({
    domain,
    info: DOMAIN_INFO[domain],
    jumlah: top.filter((id) => THEME_BY_ID[id]?.domain === domain).length,
  }));

  return (
    <section className="mx-auto max-w-3xl px-5 pb-20 pt-32 md:px-8">
      <Reveal className="text-center">
        <div className="mb-4 flex justify-center">
          <TierBadge tier="scientific" />
        </div>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          <span className="text-aurora">CliftonStrengths®</span> — Referensi
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink-2">
          Sudah punya laporan resmi CliftonStrengths / StrengthsFinder-mu?
          Masukkan Top 5 tema hasilmu di sini untuk melihat sebaran 4 domain
          dan ringkasan singkatnya — tanpa perlu mengambil tesnya lagi.
        </p>
        <p className="mx-auto mt-4 max-w-xl rounded-2xl border border-amber/20 bg-amber/8 px-5 py-4 text-left text-xs leading-relaxed text-ink-2">
          <strong className="text-amber">Catatan penting:</strong>{" "}
          CliftonStrengths® adalah asesmen berbayar & berhak cipta milik
          Gallup, Inc. Kami tidak menjual, mereplikasi, atau menampilkan 177
          pernyataan maupun teks deskripsi resmi mereka di sini. Untuk
          mengambil tes aslinya, kunjungi{" "}
          <a
            href="https://www.gallup.com/cliftonstrengths"
            target="_blank"
            rel="noopener noreferrer"
            className="text-aurora underline underline-offset-4"
          >
            gallup.com/cliftonstrengths
          </a>
          . Halaman ini hanya membantumu mencatat & memahami tema yang sudah
          kamu miliki — Djiva tidak menyelenggarakan tesnya. Belum punya
          hasilnya dan ingin mengerjakan asesmen kekuatan{" "}
          <strong className="text-ink">gratis sekarang juga</strong>? Coba{" "}
          <Link
            href="/tes/peta-bakat"
            className="text-aurora underline underline-offset-4"
          >
            Peta Bakat Djiva
          </Link>{" "}
          (alternatif original & bebas) atau{" "}
          <Link
            href="/tes/kekuatan-karakter"
            className="text-aurora underline underline-offset-4"
          >
            tes VIA Kekuatan Karakter
          </Link>
          .
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="glass glass-hairline mt-10 p-7">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold">
              Pilih Top 5 tema teratasmu
            </p>
            <span className="shrink-0 text-xs text-ink-3">
              {top.length}/{MAKS} dipilih
            </span>
          </div>
          <p className="mt-1 text-xs text-ink-3">
            Urutan klik = peringkat. Klik lagi tema yang sama untuk
            membatalkannya.
          </p>

          <div className="mt-5 space-y-6">
            {DOMAIN_URUTAN.map((domain) => {
              const info = DOMAIN_INFO[domain];
              const temaDomain = CLIFTON_THEMES.filter(
                (t) => t.domain === domain
              );
              return (
                <div key={domain}>
                  <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink-3">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: info.warna }}
                    />
                    {info.nama}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {temaDomain.map((t) => {
                      const rank = top.indexOf(t.id);
                      const dipilih = rank !== -1;
                      const terkunci = !dipilih && top.length >= MAKS;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => toggle(t.id)}
                          disabled={terkunci}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                            dipilih
                              ? "text-ink"
                              : terkunci
                                ? "cursor-not-allowed border-white/8 bg-white/3 text-ink-3/50"
                                : "border-white/12 bg-white/4 text-ink-2 hover:border-white/25"
                          }`}
                          style={
                            dipilih
                              ? {
                                  borderColor: info.warna,
                                  background: `${info.warna}22`,
                                }
                              : undefined
                          }
                        >
                          {dipilih && (
                            <span className="font-display mr-1 font-bold">
                              {rank + 1}.
                            </span>
                          )}
                          {t.nama}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>

      {top.length >= 1 && (
        <div className="fade-in-up mt-8 space-y-6">
          <div className="space-y-4">
            {top.map((id, i) => {
              const tema = THEME_BY_ID[id];
              if (!tema) return null;
              const info = DOMAIN_INFO[tema.domain];
              return (
                <div
                  key={id}
                  className="glass glass-hairline p-6"
                  style={{ borderColor: `${info.warna}55` }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-extrabold text-white"
                      style={{ background: info.warna }}
                    >
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-lg font-bold">
                          {tema.nama}
                        </h3>
                        <button
                          type="button"
                          onClick={() => toggle(id)}
                          className="shrink-0 text-xs text-ink-3 underline underline-offset-4 hover:text-ink-2"
                        >
                          hapus
                        </button>
                      </div>
                      <p className="text-xs text-ink-3">
                        Domain {info.nama}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-2">
                        {tema.desk}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="glass mt-6 p-6">
            <p className="kicker !text-[10px]">Domain Dominan</p>
            <div className="mt-4 space-y-3">
              {domainCounts.map(({ domain, info, jumlah }) => (
                <div key={domain}>
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-ink-2">
                      <span
                        className="mr-2 inline-block h-2.5 w-2.5 rounded-full align-middle"
                        style={{ background: info.warna }}
                      />
                      {info.nama}
                    </span>
                    <span className="shrink-0 font-semibold text-ink-2">
                      {jumlah}/{top.length}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${top.length ? (jumlah / top.length) * 100 : 0}%`,
                        background: info.warna,
                        opacity: jumlah ? 1 : 0.35,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-ink-3">
              Domain dengan tema terbanyak biasanya paling mudah kamu andalkan
              secara alami sehari-hari — cocok jadi acuan saat memilih peran
              atau proyek berikutnya.
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
    </section>
  );
}
