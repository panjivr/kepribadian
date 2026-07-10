"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import PenjelasanMetode from "@/components/PenjelasanMetode";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import { BK_INFO, LOVE_ITEMS, type BahasaKasih } from "@/data/tes/love-language";
import { LOVE_DOK } from "@/data/dok/love-language";

function BarBahasa({
  dim,
  persen,
  aktif,
}: {
  dim: BahasaKasih;
  persen: number;
  aktif: boolean;
}) {
  const info = BK_INFO[dim];
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className={aktif ? "font-semibold text-ink" : "text-ink-2"}>
          {info.emoji} {info.nama}
        </span>
        <span className="shrink-0 font-semibold text-ink-2">{Math.round(persen)}%</span>
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/8">
        <div
          className="bar-anim h-full rounded-full"
          style={{ width: `${Math.max(persen, 2)}%`, background: info.warna, opacity: aktif ? 1 : 0.55 }}
        />
      </div>
    </div>
  );
}

function KartuBahasa({ dim, label }: { dim: BahasaKasih; label: string }) {
  const info = BK_INFO[dim];
  return (
    <div className="glass glass-hairline p-6" style={{ borderColor: `${info.warna}44` }}>
      <p className="kicker !text-[10px]">{label}</p>
      <h3 className="font-display mt-1.5 text-xl font-extrabold tracking-tight">
        {info.emoji} {info.nama}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-2">{info.deskripsi}</p>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink-2">
        <p>
          <strong className="text-ink">Kamu merasa dicintai saat:</strong>{" "}
          {info.caraMenerima}
        </p>
        <p>
          <strong className="text-ink">Cara mencintai orang berbahasa ini:</strong>{" "}
          {info.caraMemberi}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {info.contoh.map((c) => (
          <span key={c} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

function Hasil({ skor }: { skor: SkorDimensi }) {
  const urut = skor.urut as { dim: BahasaKasih; raw: number; persen: number }[];
  const primer = urut[0].dim;
  const sekunder = urut[1].dim;

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Bahasa Kasih</p>
        <h1
          className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-4xl"
          style={{ color: BK_INFO[primer].warna }}
        >
          {BK_INFO[primer].emoji} {BK_INFO[primer].nama}
        </h1>
        <p className="mt-2 text-sm text-ink-2">
          Bahasa kasih utamamu, dengan {BK_INFO[sekunder].nama} sebagai pendukung.
        </p>
      </div>

      <div className="glass glass-hairline mt-10 space-y-4 p-7 md:p-10">
        {urut.map((u, i) => (
          <BarBahasa key={u.dim} dim={u.dim} persen={u.persen} aktif={i < 2} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <KartuBahasa dim={primer} label="Bahasa Utamamu" />
        <KartuBahasa dim={sekunder} label="Bahasa Pendukung" />
      </div>

      <div className="glass mt-6 border-violet/20 p-6">
        <p className="kicker !text-[10px]">Bagikan ke Pasanganmu</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-2">
          Tunjukkan hasil ini ke pasangan/orang terdekat, dan minta mereka ikut
          tes. Cinta paling terasa saat diberi dalam bahasa yang tepat — bukan
          soal seberapa besar usaha, tapi seberapa <em>nyambung</em> caranya.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/profil" className="btn-primary">
          Buka Profil Terpadumu
          <span aria-hidden>→</span>
        </Link>
        <Link href="/tes/kelekatan" className="btn-ghost">
          Cek Gaya Kelekatan
        </Link>
      </div>

      <PenjelasanMetode nama="Bahasa Kasih (5 Love Languages)" data={LOVE_DOK} />
    </div>
  );
}

export default function TesBahasaKasih() {
  return (
    <HalamanTes
      sistemId="love_language"
      tier="semi_scientific"
      judul={
        <>
          Bahasa <span className="text-aurora">Kasih</span>
        </>
      }
      deskripsi="Lima cara utama orang merasa dicintai — Kata-kata, Waktu, Hadiah, Tindakan, Sentuhan. Temukan bahasa kasih utamamu agar cinta 'sampai' dengan tepat. Sangat berguna untuk pasangan & keluarga. 20 pernyataan, skala 1–5."
      bullets={[
        "5 bahasa kasih — temukan yang paling 'mengisi' hatimu",
        "Panduan cara mencintai & dicintai dengan tepat",
        "Ajak pasangan ikut untuk saling memahami",
      ]}
      catatan="Konsep populer dari konseling (Gary Chapman). Butir & deskripsi original Djiva. Alat komunikasi, bukan asesmen psikometrik formal."
      mode="likert"
      items={LOVE_ITEMS}
      hitung={(jawaban) => skorLikert(LOVE_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
