"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import BarSkor from "@/components/BarSkor";
import PenjelasanMetode from "@/components/PenjelasanMetode";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import {
  ATTACHMENT_ITEMS,
  GAYA_INFO,
  klasifikasiGaya,
} from "@/data/tes/attachment";
import { ATTACHMENT_DOK } from "@/data/dok/attachment";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2">
      {children}
    </span>
  );
}

function Hasil({ skor }: { skor: SkorDimensi }) {
  const cemas = skor.persen.cemas ?? 0;
  const hindar = skor.persen.hindar ?? 0;
  const gaya = klasifikasiGaya(cemas, hindar);
  const info = GAYA_INFO[gaya];

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Gaya Kelekatan</p>
        <h1
          className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl"
          style={{ color: info.warna }}
        >
          {info.julukan}
        </h1>
        <p className="font-display mt-2 text-lg font-bold">{info.nama}</p>
        <div className="mt-2 flex justify-center">
          <Chip>{info.populasi}</Chip>
        </div>
      </div>

      {/* Peta 2 dimensi */}
      <div className="glass glass-hairline mt-10 p-7 md:p-10">
        <p className="kicker !text-[10px] mb-5">Dua Dimensi Kelekatanmu</p>
        <div className="space-y-4">
          <BarSkor
            label="Kecemasan — takut ditinggalkan / butuh kepastian"
            nilaiTeks={`${Math.round(cemas)}%`}
            persen={cemas}
            aktif={cemas >= 50}
          />
          <BarSkor
            label="Penghindaran — tak nyaman dekat / menjaga jarak"
            nilaiTeks={`${Math.round(hindar)}%`}
            persen={hindar}
            aktif={hindar >= 50}
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-center text-[11px] text-ink-3">
          <div className="rounded-xl border border-white/8 bg-white/4 p-2">
            Cemas {cemas >= 50 ? "Tinggi" : "Rendah"}
          </div>
          <div className="rounded-xl border border-white/8 bg-white/4 p-2">
            Hindar {hindar >= 50 ? "Tinggi" : "Rendah"}
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-ink-2">{info.deskripsi}</p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="glass glass-hairline p-6">
          <p className="kicker !text-[10px]">Dalam Hubungan</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-2">{info.dalamRelasi}</p>
        </div>
        <div className="glass p-6">
          <p className="kicker !text-[10px]">Kekuatanmu</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {info.kekuatan.map((k) => (
              <Chip key={k}>{k}</Chip>
            ))}
          </div>
        </div>
        <div className="glass p-6">
          <p className="kicker !text-[10px]">Titik Rawan</p>
          <ul className="mt-2 space-y-1.5 text-sm text-ink-2">
            {info.tantangan.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-0.5 text-amber">▲</span> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass glass-hairline border-mint/20 p-6">
          <p className="kicker !text-[10px]">Cara Bertumbuh</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-2">{info.bertumbuh}</p>
        </div>
      </div>

      <div className="glass mt-6 border-violet/20 p-6">
        <p className="kicker !text-[10px]">Untuk Pasanganmu — Cara Mendukungmu</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-2">{info.pasanganMendukung}</p>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-ink-3">
        Gaya kelekatan bisa <strong className="text-ink-2">berubah</strong> lewat
        relasi yang aman & konsisten — ini potret saat ini, bukan vonis. Jika
        pola relasimu terasa menyakitkan & berulang, dukungan konselor sangat
        membantu.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/profil" className="btn-primary">
          Buka Profil Terpadumu
          <span aria-hidden>→</span>
        </Link>
        <Link href="/tes/bahasa-kasih" className="btn-ghost">
          Lanjut: Bahasa Kasih
        </Link>
      </div>

      <PenjelasanMetode nama="Gaya Kelekatan" data={ATTACHMENT_DOK} />
    </div>
  );
}

export default function TesKelekatan() {
  return (
    <HalamanTes
      sistemId="attachment"
      tier="scientific"
      judul={
        <>
          Gaya <span className="text-aurora">Kelekatan</span>
        </>
      }
      deskripsi="Bagaimana pola khasmu dalam kedekatan & hubungan? Tes ini mengukur dua dimensi — kecemasan & penghindaran — untuk menemukan gaya kelekatanmu (Aman, Cemas, Menghindar, atau Cemas-Menghindar). Sangat berguna untuk memahami dinamika pacaran & pernikahan. 16 pernyataan, skala 1–5."
      bullets={[
        "4 gaya berdasarkan teori kelekatan dewasa",
        "Insight untuk diri & cara pasangan mendukungmu",
        "Tiap pernyataan ada contoh agar tak salah tafsir",
      ]}
      catatan="Teori kelekatan (Bowlby, Ainsworth, Bartholomew). Potret saat ini yang bisa berubah — bukan vonis, bukan diagnosis klinis."
      mode="likert"
      items={ATTACHMENT_ITEMS}
      hitung={(jawaban) => skorLikert(ATTACHMENT_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
