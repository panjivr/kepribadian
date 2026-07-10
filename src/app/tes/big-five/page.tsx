"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";
import RadarChart from "@/components/RadarChart";
import LanjutTes from "@/components/LanjutTes";
import {
  BIG_FIVE_ITEMS,
  DIMENSI_INFO,
  SKALA_LIKERT,
  skorBigFive,
} from "@/lib/bigfive";
import { bacaBigFive, simpanBigFive } from "@/lib/storage";
import type { BigFiveDim, BigFiveResult } from "@/lib/types";

type Tahap = "intro" | "kuis" | "hasil";

const URUTAN_DIM: BigFiveDim[] = ["O", "C", "E", "A", "N"];

const WARNA_BAND: Record<string, string> = {
  Rendah: "#67e8f9",
  "Cenderung Rendah": "#7db4f9",
  Sedang: "#818cf8",
  "Cenderung Tinggi": "#a78bfa",
  Tinggi: "#c4b5fd",
};

function HasilView({ hasil }: { hasil: BigFiveResult }) {
  return (
    <div className="fade-in-up">
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Big Five (OCEAN)</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
          Potret ilmiah <span className="text-aurora">kepribadianmu.</span>
        </h1>
        <div className="mt-3 flex justify-center">
          <TierBadge tier="scientific" />
        </div>
      </div>

      <div className="glass glass-hairline mt-10 grid items-center gap-8 p-7 md:grid-cols-[1fr_1.2fr] md:p-10">
        <div className="flex justify-center">
          <RadarChart
            nilai={URUTAN_DIM.map((d) => hasil.persen[d])}
            label={URUTAN_DIM.map((d) => DIMENSI_INFO[d].singkat)}
          />
        </div>
        <div className="space-y-5">
          {URUTAN_DIM.map((dim) => {
            const info = DIMENSI_INFO[dim];
            const p = hasil.persen[dim];
            return (
              <div key={dim}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-semibold">
                    {info.singkat}{" "}
                    <span className="font-normal text-ink-3">({info.nama})</span>
                  </p>
                  <p className="shrink-0 text-sm font-bold" style={{ color: WARNA_BAND[hasil.band[dim]] }}>
                    {Math.round(p)}% · {hasil.band[dim]}
                  </p>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/8">
                  <div
                    className="bar-anim h-full rounded-full"
                    style={{
                      width: `${Math.max(p, 2)}%`,
                      background: "linear-gradient(90deg, #67e8f9, #3b82f6, #8b5cf6)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {URUTAN_DIM.map((dim, i) => {
          const info = DIMENSI_INFO[dim];
          const p = hasil.persen[dim];
          const arah = p >= 56 ? info.tinggi : p <= 45 ? info.rendah : null;
          return (
            <Reveal key={dim} delay={(i % 2) * 90}>
              <div className="glass h-full p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-lg font-bold">
                    {info.singkat}
                  </h3>
                  <span className="text-sm font-bold" style={{ color: WARNA_BAND[hasil.band[dim]] }}>
                    {Math.round(p)}%
                  </span>
                </div>
                <p className="mt-1 text-xs text-ink-3">{info.deskripsi}</p>
                {arah ? (
                  <>
                    <p className="mt-3 text-sm leading-relaxed text-ink-2">
                      <strong className="text-ink">Kecenderunganmu:</strong>{" "}
                      {arah.trait.join(", ")}.
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-2">
                      <strong className="text-ink">Perhatikan:</strong>{" "}
                      {arah.risiko.join(", ")}.
                    </p>
                  </>
                ) : (
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">
                    Kamu berada di tengah spektrum — fleksibel mengambil kedua
                    sisi sesuai situasi.
                  </p>
                )}
                <p className="mt-3 text-xs leading-relaxed text-ink-3">
                  Facet: {info.facets.join(" · ")}
                </p>
              </div>
            </Reveal>
          );
        })}

        {hasil.kombinasi.length > 0 && (
          <Reveal delay={90}>
            <div className="glass glass-hairline h-full border-violet/20 p-6">
              <p className="kicker !text-[10px]">Pola Kombinasi Istimewa</p>
              <ul className="mt-3 space-y-3">
                {hasil.kombinasi.map((k) => (
                  <li key={k.pola} className="text-sm leading-relaxed text-ink-2">
                    <strong className="text-aurora">{k.pola}.</strong>{" "}
                    {k.insight}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <Link href="/profil" className="btn-primary">
          Buka Profil Terpadumu
          <span aria-hidden>→</span>
        </Link>
        <Link href="/tes/tipe-16" className="btn-ghost">
          Lanjut Tes 16 Tipe
        </Link>
      </div>
      <LanjutTes current="big_five" />
    </div>
  );
}

export default function TesBigFive() {
  const [tahap, setTahap] = useState<Tahap>("intro");
  const [indeks, setIndeks] = useState(0);
  const [jawaban, setJawaban] = useState<Record<number, number>>({});
  const [hasil, setHasil] = useState<BigFiveResult | null>(null);
  const kunciRef = useRef(false);

  useEffect(() => {
    const tersimpan = bacaBigFive();
    if (tersimpan) {
      setHasil(tersimpan);
      setTahap("hasil");
    }
  }, []);

  const item = BIG_FIVE_ITEMS[indeks];
  const progres = useMemo(
    () => (Object.keys(jawaban).length / BIG_FIVE_ITEMS.length) * 100,
    [jawaban]
  );

  const jawab = (nilai: number) => {
    if (kunciRef.current) return;
    kunciRef.current = true;
    const baru = { ...jawaban, [item.no]: nilai };
    setJawaban(baru);
    window.setTimeout(() => {
      kunciRef.current = false;
      if (indeks < BIG_FIVE_ITEMS.length - 1) {
        setIndeks(indeks + 1);
      } else {
        const r = skorBigFive(baru);
        simpanBigFive(r);
        setHasil(r);
        setTahap("hasil");
        window.scrollTo({ top: 0 });
      }
    }, 260);
  };

  const mulaiUlang = () => {
    setJawaban({});
    setIndeks(0);
    setHasil(null);
    setTahap("kuis");
    window.scrollTo({ top: 0 });
  };

  return (
    <section className="mx-auto max-w-4xl px-5 pb-20 pt-32 md:px-8">
      {tahap === "intro" && (
        <Reveal className="mx-auto max-w-xl text-center">
          <div className="mb-4 flex justify-center">
            <TierBadge tier="scientific" />
          </div>
          <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
            Tes Big Five <span className="text-aurora">(OCEAN)</span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-ink-2 md:text-base">
            50 pernyataan singkat, skala 1–5. Jawab jujur sesuai dirimu yang
            biasanya — bukan dirimu yang ideal. Tidak ada jawaban benar atau
            salah, dan hasilnya hanya tersimpan di perangkatmu.
          </p>
          <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm text-ink-2">
            <li>◇ ±7 menit, bisa mundur untuk mengubah jawaban</li>
            <li>◇ Item IPIP — bank soal riset public domain</li>
            <li>◇ Fondasi untuk Profil Terpadu & prediksi tipe 16</li>
          </ul>
          <button onClick={() => setTahap("kuis")} className="btn-primary mt-9 text-base">
            Mulai Sekarang
          </button>
        </Reveal>
      )}

      {tahap === "kuis" && (
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 flex items-center justify-between text-xs font-semibold text-ink-3">
            <span>
              Pernyataan {indeks + 1} / {BIG_FIVE_ITEMS.length}
            </span>
            <span>{Math.round(progres)}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${progres}%`,
                background: "linear-gradient(90deg, #67e8f9, #3b82f6, #8b5cf6)",
              }}
            />
          </div>

          <div key={item.no} className="glass glass-hairline fade-in-up mt-8 p-8 md:p-12">
            <p className="text-center font-display text-xl font-bold leading-snug tracking-tight md:text-2xl">
              “{item.teks}”
            </p>
            {item.bantuan && (
              <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-ink-3">
                💡 {item.bantuan}
              </p>
            )}

            <div className="mt-10">
              <div className="flex items-end justify-between gap-2 md:gap-3">
                {SKALA_LIKERT.map((s) => {
                  const dipilih = jawaban[item.no] === s.nilai;
                  const ukuran = [56, 48, 42, 48, 56][s.nilai - 1];
                  return (
                    <button
                      key={s.nilai}
                      onClick={() => jawab(s.nilai)}
                      aria-label={s.label}
                      title={s.label}
                      className={`flex items-center justify-center rounded-full border-2 font-display font-bold transition-all duration-200 ease-out hover:scale-110 ${
                        dipilih
                          ? "border-violet bg-violet/30 text-ink shadow-[0_0_28px_rgba(139,92,246,0.5)]"
                          : "border-white/15 bg-white/4 text-ink-3 hover:border-violet/50 hover:text-ink"
                      }`}
                      style={{ width: ukuran, height: ukuran }}
                    >
                      {s.nilai}
                    </button>
                  );
                })}
              </div>
              <div className="mt-3 flex justify-between text-[11px] font-semibold text-ink-3">
                <span>Sangat tidak setuju</span>
                <span>Sangat setuju</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between text-sm">
            <button
              onClick={() => setIndeks(Math.max(0, indeks - 1))}
              disabled={indeks === 0}
              className="btn-ghost !px-5 !py-2.5 disabled:pointer-events-none disabled:opacity-30"
            >
              ← Mundur
            </button>
            {jawaban[item.no] && indeks < BIG_FIVE_ITEMS.length - 1 && (
              <button
                onClick={() => setIndeks(indeks + 1)}
                className="btn-ghost !px-5 !py-2.5"
              >
                Lanjut →
              </button>
            )}
          </div>
        </div>
      )}

      {tahap === "hasil" && hasil && (
        <>
          <HasilView hasil={hasil} />
          <p className="mt-8 text-center">
            <button
              onClick={mulaiUlang}
              className="text-xs text-ink-3 underline underline-offset-4 transition-colors hover:text-ink"
            >
              Ulangi tes dari awal
            </button>
          </p>
        </>
      )}
    </section>
  );
}
