"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import BarSkor from "@/components/BarSkor";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import {
  ENNEA_ITEMS,
  ENNEA_TIPE,
  ENNEA_TRIAD,
  hitungWing,
} from "@/data/tes/enneagram";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2">
      {children}
    </span>
  );
}

function Hasil({ skor }: { skor: SkorDimensi }) {
  const urut = skor.urut;
  const tipe = Number(urut[0].dim);
  const info = ENNEA_TIPE[tipe];
  const wing = hitungWing(tipe, skor.raw);
  const selisih = urut[0].raw - urut[1].raw;
  const kandidat = selisih < 2 ? Number(urut[1].dim) : null;

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Enneagram</p>
        <h1 className="font-display text-5xl font-extrabold tracking-tight text-aurora md:text-6xl">
          {tipe}w{wing}
        </h1>
        <p className="font-display mt-2 text-lg font-bold md:text-xl">
          {info.nama}
        </p>
        <div className="mt-3 flex justify-center">
          <Chip>{ENNEA_TRIAD[tipe]}</Chip>
        </div>
      </div>

      <div className="glass glass-hairline mt-10 space-y-3 p-7 md:p-10">
        {urut.map((u, i) => (
          <BarSkor
            key={u.dim}
            label={`Tipe ${u.dim} — ${ENNEA_TIPE[Number(u.dim)].nama}`}
            nilaiTeks={`${Math.round(u.persen)}%`}
            persen={u.persen}
            aktif={i === 0}
          />
        ))}
      </div>

      {kandidat && (
        <div className="glass mt-6 border-cyan/25 p-5">
          <p className="text-sm leading-relaxed text-ink-2">
            <strong className="text-cyan">Sangat berdekatan.</strong> Skor Tipe{" "}
            {tipe} dan Tipe {kandidat} nyaris seri — kandidat lain yang layak
            kamu baca: <strong className="text-ink">Tipe {kandidat} — {ENNEA_TIPE[kandidat].nama}</strong>.
          </p>
        </div>
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="glass glass-hairline p-7">
          <p className="kicker !text-[10px]">Inti Motivasimu</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">
            <strong className="text-ink">Ketakutan inti:</strong> {info.ketakutan}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-2">
            <strong className="text-ink">Hasrat inti:</strong> {info.hasrat}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-2">
            <strong className="text-ink">Godaan khas:</strong> {info.dosa}
          </p>
        </div>
        <div className="glass glass-hairline p-7">
          <p className="kicker !text-[10px]">Saat Sehat vs Tertekan</p>
          <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="mb-1.5 text-xs font-semibold text-mint">Versi sehat</p>
              <ul className="space-y-1 text-ink-2">
                {info.sehat.map((s) => (
                  <li key={s}>+ {s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-1.5 text-xs font-semibold text-amber">Versi tertekan</p>
              <ul className="space-y-1 text-ink-2">
                {info.tidakSehat.map((s) => (
                  <li key={s}>– {s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="glass p-6">
          <p className="kicker !text-[10px]">Arah Pergerakan</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">
            <strong className="text-amber">Saat stres →</strong> kamu mengambil
            sisi negatif Tipe {info.stresKe} ({ENNEA_TIPE[info.stresKe].nama}).
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-2">
            <strong className="text-mint">Saat bertumbuh →</strong> kamu
            mengambil sisi positif Tipe {info.growthKe} (
            {ENNEA_TIPE[info.growthKe].nama}).
          </p>
        </div>
        <div className="glass p-6">
          <p className="kicker !text-[10px]">Tumbuh & Karier</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">{info.tips}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {info.karier.map((k) => (
              <Chip key={k}>{k}</Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
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

export default function TesEnneagram() {
  return (
    <HalamanTes
      sistemId="enneagram"
      tier="semi_scientific"
      judul={
        <>
          Tes <span className="text-aurora">Enneagram</span>
        </>
      }
      deskripsi="Sembilan tipe yang memetakan motivasi terdalam — ketakutan dan hasrat yang menggerakkanmu diam-diam. 36 pernyataan, skala 1–5."
      bullets={[
        "Menemukan tipe utama + wing (sayap) tetanggamu",
        "Arah pergerakan saat stres & saat bertumbuh",
        "Fokus pada 'mengapa', bukan sekadar 'apa'",
      ]}
      catatan="Enneagram populer untuk pengembangan diri, namun dukungan psikometriknya masih diperdebatkan. Baca sebagai cermin refleksi."
      mode="likert"
      items={ENNEA_ITEMS}
      hitung={(jawaban) => skorLikert(ENNEA_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
