"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import BarSkor from "@/components/BarSkor";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import {
  DISC_INFO,
  DISC_ITEMS,
  DISC_KOMBINASI,
  type DiscDim,
} from "@/data/tes/disc";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2">
      {children}
    </span>
  );
}

function Hasil({ skor }: { skor: SkorDimensi }) {
  const urut = skor.urut as { dim: DiscDim; raw: number; persen: number }[];
  const primer = urut[0].dim;
  const sekunder = urut[1].dim;
  const kodeKombinasi = `${primer}${sekunder}`;
  const kombinasi = DISC_KOMBINASI[kodeKombinasi];
  const infoP = DISC_INFO[primer];
  const infoS = DISC_INFO[sekunder];

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · DISC</p>
        <h1 className="font-display text-5xl font-extrabold tracking-tight text-aurora md:text-6xl">
          {kodeKombinasi}
        </h1>
        <p className="font-display mt-2 text-lg font-bold md:text-xl">
          {infoP.nama} · {infoS.nama}
        </p>
      </div>

      <div className="glass glass-hairline mt-10 space-y-4 p-7 md:p-10">
        {urut.map((u, i) => (
          <BarSkor
            key={u.dim}
            label={`${u.dim} — ${DISC_INFO[u.dim].nama} (${DISC_INFO[u.dim].fokus})`}
            nilaiTeks={`${Math.round(u.persen)}%`}
            persen={u.persen}
            aktif={i === 0}
          />
        ))}
      </div>

      {kombinasi && (
        <div className="glass glass-hairline mt-6 border-violet/20 p-6">
          <p className="kicker !text-[10px]">Profil Kombinasi · {kodeKombinasi}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-2">
            <strong className="text-aurora">{kombinasi}</strong>
          </p>
        </div>
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div className="glass glass-hairline p-7 md:p-8">
          <p className="kicker !text-[10px]">Gaya Utamamu · {infoP.nama}</p>
          <h2 className="font-display mt-1.5 text-2xl font-extrabold tracking-tight">
            Fokus pada {infoP.fokus.toLowerCase()}
          </h2>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {infoP.trait.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-ink-2">
            <p>
              <strong className="text-ink">Ketakutan inti:</strong>{" "}
              {infoP.ketakutan}
            </p>
            <p>
              <strong className="text-ink">Cara terbaik berkomunikasi denganmu:</strong>{" "}
              {infoP.komunikasi}
            </p>
            <p>
              <strong className="text-ink">Titik rawan:</strong>{" "}
              {infoP.kelemahan.join(", ")}.
            </p>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-xs uppercase tracking-widest text-ink-3">
              Karier yang selaras
            </p>
            <div className="flex flex-wrap gap-1.5">
              {infoP.karier.map((k) => (
                <Chip key={k}>{k}</Chip>
              ))}
            </div>
          </div>
        </div>

        <div className="glass h-full p-6">
          <p className="kicker !text-[10px]">Gaya Pendukung · {infoS.nama}</p>
          <p className="mt-2 text-sm capitalize text-ink-2">{infoS.fokus}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {infoS.trait.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-2">
            {infoS.komunikasi}
          </p>
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

export default function TesDisc() {
  return (
    <HalamanTes
      sistemId="disc"
      tier="semi_scientific"
      judul={
        <>
          Tes <span className="text-aurora">DISC</span>
        </>
      }
      deskripsi="Peta gaya perilaku & komunikasimu di tempat kerja: Dominance, Influence, Steadiness, Conscientiousness. 24 pernyataan, skala 1–5."
      bullets={[
        "Gaya primer + sekunder membentuk profil kombinasi",
        "Insight langsung soal cara terbaik orang berkomunikasi denganmu",
        "Melengkapi seksi Gaya Kerja & Tim di Profil Terpadu",
      ]}
      mode="likert"
      items={DISC_ITEMS}
      hitung={(jawaban) => skorLikert(DISC_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
