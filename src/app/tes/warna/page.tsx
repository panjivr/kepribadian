"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import {
  WARNA_HEX,
  WARNA_INFO,
  WARNA_ITEMS,
  type WarnaDim,
} from "@/data/tes/warna";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2">
      {children}
    </span>
  );
}

function BarWarna({
  dim,
  persen,
  aktif,
}: {
  dim: WarnaDim;
  persen: number;
  aktif: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className={aktif ? "font-semibold text-ink" : "text-ink-2"}>
          <span
            className="mr-2 inline-block h-2.5 w-2.5 rounded-full align-middle"
            style={{ background: WARNA_HEX[dim] }}
          />
          {WARNA_INFO[dim].label} · {dim}
        </span>
        <span className="shrink-0 font-semibold text-ink-2">
          {Math.round(persen)}%
        </span>
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/8">
        <div
          className="bar-anim h-full rounded-full"
          style={{
            width: `${Math.max(persen, 2)}%`,
            background: WARNA_HEX[dim],
            opacity: aktif ? 1 : 0.55,
          }}
        />
      </div>
    </div>
  );
}

function Hasil({ skor }: { skor: SkorDimensi }) {
  const urut = skor.urut as { dim: WarnaDim; raw: number; persen: number }[];
  const primer = urut[0].dim;
  const sekunder = urut[1].dim;
  const infoP = WARNA_INFO[primer];
  const infoS = WARNA_INFO[sekunder];

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · True Colors</p>
        <h1
          className="font-display text-4xl font-extrabold tracking-tight md:text-5xl"
          style={{ color: WARNA_HEX[primer] }}
        >
          {infoP.label}
        </h1>
        <p className="mt-2 text-sm text-ink-2">
          dengan nuansa {infoS.label} · {infoP.nilaiInti}
        </p>
      </div>

      <div className="glass glass-hairline mt-10 space-y-4 p-7 md:p-10">
        {urut.map((u, i) => (
          <BarWarna key={u.dim} dim={u.dim} persen={u.persen} aktif={i === 0} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div
          className="glass glass-hairline p-7 md:p-8"
          style={{ borderColor: `${WARNA_HEX[primer]}55` }}
        >
          <p className="kicker !text-[10px]">Warna Utamamu · {infoP.label}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">
            <strong className="text-ink">Nilai inti:</strong> {infoP.nilaiInti}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {infoP.trait.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-2">
            <strong className="text-ink">Peranmu di tim:</strong> {infoP.diTim}.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-2">
            <strong className="text-ink">Kamu tertekan saat:</strong>{" "}
            {infoP.stresJika}.
          </p>
          <p className="mt-2 text-xs text-ink-3">Padanan 16 tipe: {infoP.padanan}</p>
        </div>
        <div className="glass p-6">
          <p className="kicker !text-[10px]">Warna Pendukung · {infoS.label}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">
            {infoS.nilaiInti} — {infoS.diTim}.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {infoS.trait.map((t) => (
              <Chip key={t}>{t}</Chip>
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

export default function TesWarna() {
  return (
    <HalamanTes
      sistemId="true_colors"
      tier="semi_scientific"
      judul={
        <>
          Kepribadian <span className="text-aurora">Warna</span>
        </>
      }
      deskripsi="Empat warna — Emas, Biru, Hijau, Oranye — memetakan nilai inti dan gaya alamimu dengan cara yang mudah diingat. 12 pernyataan, skala 1–5."
      bullets={[
        "Warna primer + sekunder menggambarkan perpaduanmu",
        "Terhubung ke kerangka 16 tipe",
        "Ringkas & intuitif untuk komunikasi tim",
      ]}
      mode="likert"
      items={WARNA_ITEMS}
      hitung={(jawaban) => skorLikert(WARNA_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
