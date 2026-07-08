"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import { HBDI_INFO, HBDI_ITEMS, type HbdiDim } from "@/data/tes/hbdi";

// Urutan grid 2×2: A kiri-atas, D kanan-atas, B kiri-bawah, C kanan-bawah.
const GRID: HbdiDim[] = ["A", "D", "B", "C"];

function Hasil({ skor }: { skor: SkorDimensi }) {
  const persen = skor.persen as Record<HbdiDim, number>;
  const urut = skor.urut as { dim: HbdiDim; raw: number; persen: number }[];
  const puncak = urut[0].persen;
  const dominan = new Set(
    urut.filter((u) => puncak - u.persen <= 5).map((u) => u.dim)
  );
  const utama = urut[0].dim;

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Dominansi Gaya Berpikir</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
          Otakmu condong ke{" "}
          <span className="text-aurora">
            {dominan.size > 1 ? "dua kuadran" : HBDI_INFO[utama].nama}
          </span>
          .
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm text-ink-2">
          “{HBDI_INFO[utama].kalimatKhas}” — kalimat yang paling sering muncul di
          kepalamu.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4">
        {GRID.map((d) => {
          const info = HBDI_INFO[d];
          const isDom = dominan.has(d);
          return (
            <div
              key={d}
              className={`glass p-6 transition-all ${
                isDom
                  ? "!border-violet/50 shadow-[0_0_32px_rgba(139,92,246,0.22)]"
                  : "opacity-75"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm font-bold tracking-widest text-ink-3">
                  {d}
                </span>
                <span className="font-display text-2xl font-extrabold text-aurora">
                  {Math.round(persen[d])}%
                </span>
              </div>
              <h3 className="font-display mt-1 text-lg font-bold">{info.nama}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {info.kataKunci.map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-ink-2"
                  >
                    {k}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-ink-3">
                Karier: {info.karier.join(", ")}
              </p>
            </div>
          );
        })}
      </div>

      {dominan.size > 1 && (
        <p className="mt-6 text-center text-sm text-ink-2">
          <strong className="text-aurora">Profil ganda.</strong> Dua kuadran
          hampir seimbang — kamu bisa berpindah gaya berpikir sesuai kebutuhan,
          kekuatan yang langka.
        </p>
      )}

      <p className="mx-auto mt-6 max-w-2xl rounded-2xl border border-white/8 bg-white/4 px-5 py-4 text-center text-xs leading-relaxed text-ink-3">
        Ini model 4-kuadran generik yang terinspirasi HBDI® (milik Herrmann
        Global) — bukan tes resminya. Mitos “otak kiri vs otak kanan” secara
        harfiah sudah dibantah sains; anggap ini sebagai metafora gaya berpikir,
        bukan peta anatomi otak.
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

export default function TesGayaBerpikir() {
  return (
    <HalamanTes
      sistemId="hbdi"
      tier="semi_scientific"
      judul={
        <>
          Dominansi <span className="text-aurora">Gaya Berpikir</span>
        </>
      }
      deskripsi="Empat kuadran cara berpikir: Analitis, Sekuensial, Interpersonal, dan Imajinatif. Lihat kombinasi mana yang paling kamu andalkan. 16 pernyataan, skala 1–5."
      bullets={[
        "Peta 2×2 gaya berpikirmu",
        "Bisa dominan di satu atau dua kuadran",
        "Metafora, bukan klaim anatomi otak",
      ]}
      mode="likert"
      items={HBDI_ITEMS}
      hitung={(jawaban) => skorLikert(HBDI_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
