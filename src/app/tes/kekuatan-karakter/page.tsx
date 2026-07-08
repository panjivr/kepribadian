"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import BarSkor from "@/components/BarSkor";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import { VIA_ITEMS, VIA_KEKUATAN } from "@/data/tes/via";

const INFO = Object.fromEntries(VIA_KEKUATAN.map((k) => [k.id, k]));

function Hasil({ skor }: { skor: SkorDimensi }) {
  const urut = skor.urut;
  const top5 = urut.slice(0, 5);
  const bawah3 = urut.slice(-3).reverse();

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · VIA Kekuatan Karakter</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
          Lima <span className="text-aurora">kekuatan tanda tanganmu.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm text-ink-2">
          Kekuatan yang kamu pakai tiap hari berkaitan erat dengan kepuasan
          hidup. Inilah yang paling menonjol darimu.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {top5.map((u, i) => {
          const info = INFO[u.dim];
          return (
            <div key={u.dim} className="glass glass-hairline p-6">
              <div className="flex items-start gap-4">
                <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue to-violet text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-bold">
                      {info.nama}
                    </h3>
                    <span className="shrink-0 text-sm font-bold text-ink-2">
                      {Math.round(u.persen)}%
                    </span>
                  </div>
                  <p className="text-xs text-ink-3">Kebajikan {info.virtue}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">
                    {info.desk}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="glass mt-6 border-cyan/20 p-6">
        <p className="kicker !text-[10px]">Tantangan Mingguan</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-2">
          Pilih kekuatan teratasmu —{" "}
          <strong className="text-aurora">{INFO[top5[0].dim].nama}</strong> —
          dan pakai dengan cara yang benar-benar baru minggu ini. Riset
          psikologi positif menunjukkan inilah kebiasaan kecil yang paling
          menaikkan kepuasan hidup.
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-white/8 bg-white/4 p-6">
        <p className="kicker !text-[10px]">Ruang Bertumbuh</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-3">
          Kekuatan yang saat ini paling jarang kamu andalkan:{" "}
          {bawah3.map((u) => INFO[u.dim].nama).join(", ")}. Bukan kelemahan —
          hanya belum kamu latih. Semua bisa ditumbuhkan.
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
    </div>
  );
}

export default function TesKekuatanKarakter() {
  return (
    <HalamanTes
      sistemId="via"
      tier="scientific"
      judul={
        <>
          Kekuatan <span className="text-aurora">Karakter</span>
        </>
      }
      deskripsi="24 kekuatan karakter dalam 6 kebajikan universal. Temukan lima 'signature strengths' yang paling menonjol darimu. 48 pernyataan, skala 1–5."
      bullets={[
        "Kerangka Peterson & Seligman (psikologi positif)",
        "Fokus pada apa yang terbaik darimu, bukan yang salah",
        "Menyokong seksi Kekuatan Utama di Profil Terpadu",
      ]}
      catatan="Item original Djiva untuk estimasi. Survei resmi lengkap tersedia di viacharacter.org."
      mode="likert"
      items={VIA_ITEMS}
      hitung={(jawaban) => skorLikert(VIA_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
