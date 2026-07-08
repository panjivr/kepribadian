"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import BarSkor from "@/components/BarSkor";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import {
  TEMPERAMEN_INFO,
  TEMPERAMEN_ITEMS,
  type TemperamenDim,
} from "@/data/tes/temperamen";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2">
      {children}
    </span>
  );
}

function Hasil({ skor }: { skor: SkorDimensi }) {
  const urut = skor.urut as { dim: TemperamenDim; raw: number; persen: number }[];
  const primer = urut[0].dim;
  const sekunder = urut[1].dim;
  const infoP = TEMPERAMEN_INFO[primer];
  const infoS = TEMPERAMEN_INFO[sekunder];

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · 4 Temperamen Klasik</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          <span className="text-aurora">{primer}</span> — {infoP.julukan}
        </h1>
        <p className="mt-2 text-sm text-ink-2">
          Paduan {primer}-{sekunder} · elemen klasik {infoP.elemen}
        </p>
      </div>

      <div className="glass glass-hairline mt-10 space-y-4 p-7 md:p-10">
        {urut.map((u, i) => (
          <BarSkor
            key={u.dim}
            label={`${u.dim} — ${TEMPERAMEN_INFO[u.dim].julukan}`}
            nilaiTeks={`${Math.round(u.persen)}%`}
            persen={u.persen}
            aktif={i === 0}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="glass glass-hairline p-7">
          <p className="kicker !text-[10px]">Kekuatanmu</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-2">
            {infoP.kekuatan.map((k) => (
              <li key={k} className="flex items-start gap-2.5">
                <span className="mt-0.5 text-mint">✓</span> {k}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {infoP.trait.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>
        <div className="glass glass-hairline p-7">
          <p className="kicker !text-[10px]">Titik Rawan</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-2">
            {infoP.kelemahan.map((k) => (
              <li key={k} className="flex items-start gap-2.5">
                <span className="mt-0.5 text-amber">▲</span> {k}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass p-6">
          <p className="kicker !text-[10px]">Di Tempat Kerja</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">{infoP.diKerja}</p>
        </div>
        <div className="glass p-6">
          <p className="kicker !text-[10px]">Dalam Relasi</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">{infoP.cinta}</p>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-ink-3">
        Padanan gaya DISC: {primer} ≈ {infoP.disc}, {sekunder} ≈ {infoS.disc}.
        Model temperamen berusia ribuan tahun ini sejalan dengan kerangka modern.
      </p>

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

export default function TesTemperamen() {
  return (
    <HalamanTes
      sistemId="temperament"
      tier="semi_scientific"
      judul={
        <>
          4 <span className="text-aurora">Temperamen</span> Klasik
        </>
      }
      deskripsi="Sanguinis, Koleris, Melankolis, Plegmatis — tipologi tertua di dunia yang masih terasa relevan. 16 pernyataan, skala 1–5."
      bullets={[
        "Temperamen primer + sekunder membentuk perpaduan unikmu",
        "Terhubung ke elemen klasik & gaya DISC modern",
        "Cepat — hanya 16 pernyataan",
      ]}
      mode="likert"
      items={TEMPERAMEN_ITEMS}
      hitung={(jawaban) => skorLikert(TEMPERAMEN_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
