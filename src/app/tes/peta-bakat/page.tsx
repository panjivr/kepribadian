"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import PenjelasanMetode from "@/components/PenjelasanMetode";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import {
  BAKAT_DOMAIN,
  BAKAT_DOMAIN_URUTAN,
  BAKAT_ITEMS,
  TEMA_INFO,
  type BakatDomain,
} from "@/data/tes/peta-bakat";
import { PETA_BAKAT_DOK } from "@/data/dok/peta-bakat";

const TOP_N = 7;

function Hasil({ skor }: { skor: SkorDimensi }) {
  const urut = skor.urut;
  const top = urut.slice(0, TOP_N);
  const bawah = urut.slice(-3).reverse();

  // sebaran domain dari Bakat Utama
  const domainHitung = BAKAT_DOMAIN_URUTAN.map((d) => ({
    domain: d,
    info: BAKAT_DOMAIN[d],
    jumlah: top.filter((u) => TEMA_INFO[u.dim]?.domain === d).length,
  }));
  const domainDominan = [...domainHitung].sort((a, b) => b.jumlah - a.jumlah)[0];

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Peta Bakat Djiva</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
          Tujuh <span className="text-aurora">bakat utamamu.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm text-ink-2">
          Inilah pola yang paling alami dan kuat darimu. Domain yang paling
          menonjol:{" "}
          <strong className="text-ink">{domainDominan.info.nama}</strong> —{" "}
          {domainDominan.info.julukan}.
        </p>
      </div>

      {/* Bakat Utama */}
      <div className="mt-10 space-y-4">
        {top.map((u, i) => {
          const t = TEMA_INFO[u.dim];
          if (!t) return null;
          const info = BAKAT_DOMAIN[t.domain];
          return (
            <div
              key={u.dim}
              className="glass glass-hairline p-6"
              style={{ borderColor: `${info.warna}44` }}
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
                    <h3 className="font-display text-lg font-bold">{t.nama}</h3>
                    <span className="shrink-0 text-xs text-ink-3">
                      {Math.round(u.persen)}% · Domain {info.nama}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                    {t.deskripsi}
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <p className="rounded-xl border border-mint/20 bg-mint/8 px-3 py-2 text-xs leading-relaxed text-ink-2">
                      <strong className="text-mint">Cara memakainya:</strong>{" "}
                      {t.caraPakai}
                    </p>
                    <p className="rounded-xl border border-amber/20 bg-amber/8 px-3 py-2 text-xs leading-relaxed text-ink-2">
                      <strong className="text-amber">Bila berlebihan:</strong>{" "}
                      {t.bilaBerlebihan}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sebaran domain */}
      <div className="glass glass-hairline mt-6 p-6">
        <p className="kicker !text-[10px]">Gaya Kontribusimu · Sebaran 4 Domain</p>
        <div className="mt-4 space-y-3">
          {domainHitung.map(({ domain, info, jumlah }) => (
            <div key={domain}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span className="text-ink-2">
                  <span
                    className="mr-2 inline-block h-2.5 w-2.5 rounded-full align-middle"
                    style={{ background: info.warna }}
                  />
                  {info.nama} — {info.julukan}
                </span>
                <span className="shrink-0 font-semibold text-ink-2">
                  {jumlah}/{TOP_N}
                </span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/8">
                <div
                  className="bar-anim h-full rounded-full"
                  style={{
                    width: `${(jumlah / TOP_N) * 100}%`,
                    background: info.warna,
                    opacity: jumlah ? 1 : 0.3,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink-3">
          {domainDominan.info.inti}
        </p>
      </div>

      {/* Ruang bertumbuh */}
      <div className="mt-6 rounded-2xl border border-white/8 bg-white/4 p-6">
        <p className="kicker !text-[10px]">Yang Paling Jarang Kamu Andalkan</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-3">
          {bawah.map((u) => TEMA_INFO[u.dim]?.nama).join(", ")}. Ini{" "}
          <strong className="text-ink-2">bukan kelemahan</strong> — hanya bakat
          yang kurang menonjol dibanding tujuh teratasmu. Kamu tak perlu memaksa
          menguatkan semuanya; sering kali lebih bijak berpartner dengan orang
          yang justru kuat di sini.
        </p>
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

      <PenjelasanMetode nama="Peta Bakat Djiva" data={PETA_BAKAT_DOK} />
    </div>
  );
}

export default function TesPetaBakat() {
  return (
    <HalamanTes
      sistemId="peta_bakat"
      tier="semi_scientific"
      judul={
        <>
          Peta <span className="text-aurora">Bakat</span> Djiva
        </>
      }
      deskripsi="Alternatif gratis & original untuk menemukan kekuatan alamimu (a la CliftonStrengths, tanpa biaya). 48 pernyataan bergaya 'kamu banget atau tidak', skala 1–5. Setiap butir dilengkapi analogi agar tak salah tafsir."
      bullets={[
        "24 bakat dalam 4 domain: Eksekusi, Pengaruh, Relasi, Strategis",
        "Menonjolkan 7 Bakat Utama — fokus pada kekuatan, bukan kekurangan",
        "Tiap bakat dilengkapi 'cara memakai' & 'bila berlebihan'",
      ]}
      catatan="Kerangka original Djiva, bukan afiliasi Gallup®. CliftonStrengths® adalah asesmen berbayar milik Gallup — Peta Bakat ini alternatif bebas & legal."
      mode="likert"
      items={BAKAT_ITEMS}
      hitung={(jawaban) => skorLikert(BAKAT_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
