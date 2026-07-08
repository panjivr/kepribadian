"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";
import {
  hexDariGaris,
  lemparGaris,
  type Garis,
  type Hexagram,
} from "@/data/tes/iching";
import { simpanHasilSistem } from "@/lib/storage";

function GarisView({ garis }: { garis: Garis }) {
  return (
    <div className="flex items-center justify-center gap-2" title={garis.berubah ? "garis berubah" : ""}>
      {garis.yang ? (
        <span
          className="h-2.5 w-40 rounded-full"
          style={{ background: garis.berubah ? "#ff9f0a" : "linear-gradient(90deg,#67e8f9,#8b5cf6)" }}
        />
      ) : (
        <>
          <span
            className="h-2.5 w-[4.25rem] rounded-full"
            style={{ background: garis.berubah ? "#ff9f0a" : "linear-gradient(90deg,#67e8f9,#3b82f6)" }}
          />
          <span
            className="h-2.5 w-[4.25rem] rounded-full"
            style={{ background: garis.berubah ? "#ff9f0a" : "linear-gradient(90deg,#6366f1,#8b5cf6)" }}
          />
        </>
      )}
    </div>
  );
}

function KartuHex({ hex, judul }: { hex: Hexagram; judul: string }) {
  return (
    <div className="glass glass-hairline p-7 text-center">
      <p className="kicker !text-[10px]">{judul}</p>
      <p className="font-display mt-2 text-3xl font-extrabold text-aurora">
        {hex.no}
      </p>
      <h3 className="font-display mt-1 text-xl font-bold">{hex.nama}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-2">{hex.tema}</p>
    </div>
  );
}

export default function TesIChing() {
  const [garis, setGaris] = useState<Garis[] | null>(null);
  const [melempar, setMelempar] = useState(false);

  const cast = () => {
    setMelempar(true);
    setGaris(null);
    // animasikan enam garis muncul satu per satu
    const hasil: Garis[] = [];
    let i = 0;
    const timer = setInterval(() => {
      hasil.push(lemparGaris());
      setGaris([...hasil]);
      i++;
      if (i >= 6) {
        clearInterval(timer);
        setMelempar(false);
        const utama = hexDariGaris(hasil, false);
        simpanHasilSistem("iching", { no: utama.no, nama: utama.nama });
      }
    }, 320);
  };

  const selesai = garis?.length === 6 && !melempar;
  const utama = selesai ? hexDariGaris(garis!, false) : null;
  const adaBerubah = garis?.some((g) => g.berubah) ?? false;
  const berkembang = selesai && adaBerubah ? hexDariGaris(garis!, true) : null;

  return (
    <section className="mx-auto max-w-3xl px-5 pb-20 pt-32 md:px-8">
      <Reveal className="text-center">
        <div className="mb-4 flex justify-center">
          <TierBadge tier="cultural_spiritual" />
        </div>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          <span className="text-aurora">I Ching</span> — Kitab Perubahan
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink-2">
          Pegang satu pertanyaan atau situasi dalam hatimu, lalu lempar koin.
          Enam garis akan membentuk salah satu dari 64 hexagram sebagai bahan
          refleksi — bukan ramalan pasti.
        </p>
      </Reveal>

      <Reveal delay={120} className="mt-10 text-center">
        <button
          onClick={cast}
          disabled={melempar}
          className="btn-primary text-base disabled:opacity-60"
        >
          {melempar ? "Melempar koin…" : garis ? "Lempar Lagi" : "Lempar Koin"}
        </button>
      </Reveal>

      {garis && (
        <div className="glass mt-8 space-y-3 p-8">
          {/* tampilkan dari atas (garis ke-6) ke bawah */}
          {[...garis].reverse().map((g, i) => (
            <div key={garis.length - i} className="fade-in-up">
              <GarisView garis={g} />
            </div>
          ))}
          {melempar && (
            <p className="pt-2 text-center text-xs text-ink-3">
              membentuk garis {garis.length}/6…
            </p>
          )}
        </div>
      )}

      {selesai && utama && (
        <div className="fade-in-up mt-8 space-y-6">
          <KartuHex hex={utama} judul="Hexagram Utama · Situasimu Kini" />
          {berkembang && (
            <>
              <p className="text-center text-sm text-ink-3">
                Ada garis berubah (ditandai oranye) — situasimu sedang bergerak
                menuju:
              </p>
              <KartuHex hex={berkembang} judul="Hexagram Berkembang · Ke Mana Menuju" />
            </>
          )}
          <p className="mx-auto max-w-xl text-center text-xs italic leading-relaxed text-ink-3">
            I Ching adalah cermin untuk berdialog dengan intuisimu sendiri.
            Maknanya lahir dari bagaimana kamu menghubungkannya dengan situasimu,
            bukan dari kepastian ramalan.
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
