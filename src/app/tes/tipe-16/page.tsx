"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";
import LanjutTes from "@/components/LanjutTes";
import {
  DIKOTOMI_INFO,
  FUNGSI_KOGNITIF,
  MBTI_ITEMS,
  TIPE_16,
  skorMbti,
} from "@/lib/mbti";
import { bacaMbti, simpanMbti } from "@/lib/storage";
import type { MbtiResult } from "@/lib/types";

type Tahap = "intro" | "kuis" | "hasil";

function HasilView({ hasil }: { hasil: MbtiResult }) {
  const info = TIPE_16[hasil.tipe];
  if (!info) return null;
  const pasangan: [string, string, string][] = [
    ["E", "I", "Energi"],
    ["S", "N", "Informasi"],
    ["T", "F", "Keputusan"],
    ["J", "P", "Gaya hidup"],
  ];

  return (
    <div className="fade-in-up">
      <div className="text-center">
        <p className="kicker mb-3">Hasil · 16 Tipe Kepribadian</p>
        <h1 className="font-display text-6xl font-extrabold tracking-tight text-aurora md:text-7xl">
          {info.kode}
        </h1>
        <p className="font-display mt-2 text-xl font-bold md:text-2xl">
          {info.julukan}
        </p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <TierBadge tier="semi_scientific" />
          {hasil.sumber === "prediksi_big_five" && (
            <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-0.5 text-[11px] font-semibold text-cyan">
              Prediksi dari Big Five
            </span>
          )}
        </div>
      </div>

      <div className="glass glass-hairline mt-10 p-7 md:p-10">
        <p className="kicker !text-[10px] mb-5">Kekuatan Preferensi</p>
        <div className="grid gap-5 md:grid-cols-2">
          {pasangan.map(([x, y, label]) => {
            const menang = hasil.tipe.includes(x) ? x : y;
            const kalah = menang === x ? y : x;
            const persen = hasil.kekuatan[menang] ?? 50;
            return (
              <div key={label}>
                <div className="flex justify-between text-xs font-semibold text-ink-3">
                  <span>
                    {label}: <span className="text-ink">{menang}</span> {persen}%
                  </span>
                  <span>
                    {kalah} {100 - persen}%
                  </span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/8">
                  <div
                    className="bar-anim h-full rounded-full"
                    style={{
                      width: `${persen}%`,
                      background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="glass p-6">
          <p className="kicker !text-[10px]">Kekuatan</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-2">
            {info.kekuatan.map((k) => (
              <li key={k} className="flex items-start gap-2.5">
                <span className="mt-0.5 text-mint">✓</span> {k}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass p-6">
          <p className="kicker !text-[10px]">Titik Rawan</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-2">
            {info.kelemahan.map((k) => (
              <li key={k} className="flex items-start gap-2.5">
                <span className="mt-0.5 text-amber">▲</span> {k}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass p-6">
          <p className="kicker !text-[10px]">Relasi & Cinta</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">{info.relasi}</p>
          <p className="kicker !text-[10px] mt-5">Arah Pertumbuhan</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-2">{info.growth}</p>
        </div>
        <div className="glass p-6">
          <p className="kicker !text-[10px]">Karier yang Selaras</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {info.karier.map((k) => (
              <span key={k} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2">
                {k}
              </span>
            ))}
          </div>
          <p className="kicker !text-[10px] mt-5">Tumpukan Fungsi Kognitif</p>
          <ol className="mt-3 space-y-1.5 text-xs leading-relaxed text-ink-2">
            {info.fungsi.map((f, i) => (
              <li key={f}>
                <strong className="text-ink">{i + 1}. {f}</strong> —{" "}
                {FUNGSI_KOGNITIF[f]}
              </li>
            ))}
          </ol>
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
      <LanjutTes current="mbti" />
    </div>
  );
}

export default function TesTipe16() {
  const [tahap, setTahap] = useState<Tahap>("intro");
  const [indeks, setIndeks] = useState(0);
  const [jawaban, setJawaban] = useState<Record<number, "a" | "b">>({});
  const [hasil, setHasil] = useState<MbtiResult | null>(null);
  const kunciRef = useRef(false);

  useEffect(() => {
    const tersimpan = bacaMbti();
    if (tersimpan?.sumber === "tes") {
      setHasil(tersimpan);
      setTahap("hasil");
    }
  }, []);

  const item = MBTI_ITEMS[indeks];
  const progres = useMemo(
    () => (Object.keys(jawaban).length / MBTI_ITEMS.length) * 100,
    [jawaban]
  );

  const jawab = (pilihan: "a" | "b") => {
    if (kunciRef.current) return;
    kunciRef.current = true;
    const baru = { ...jawaban, [item.no]: pilihan };
    setJawaban(baru);
    window.setTimeout(() => {
      kunciRef.current = false;
      if (indeks < MBTI_ITEMS.length - 1) {
        setIndeks(indeks + 1);
      } else {
        const r = skorMbti(baru);
        simpanMbti(r);
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
            <TierBadge tier="semi_scientific" />
          </div>
          <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
            Tes <span className="text-aurora">16 Tipe Kepribadian</span>
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-ink-2 md:text-base">
            28 pasang pernyataan — pilih yang paling terasa “kamu banget”.
            Hasilnya: kode empat huruf, fungsi kognitif, gaya relasi, dan arah
            pertumbuhanmu.
          </p>
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-ink-3">
            Soal original Djiva dengan kerangka 16 tipe generik. MBTI® adalah
            merek dagang The Myers-Briggs Company — tes ini tidak berafiliasi.
          </p>
          <button onClick={() => setTahap("kuis")} className="btn-primary mt-9 text-base">
            Mulai Sekarang
          </button>
        </Reveal>
      )}

      {tahap === "kuis" && (
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 flex items-center justify-between text-xs font-semibold text-ink-3">
            <span>
              Pilihan {indeks + 1} / {MBTI_ITEMS.length} ·{" "}
              {DIKOTOMI_INFO[item.dik].nama}
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

          <div key={item.no} className="fade-in-up mt-8 space-y-4">
            <p className="text-center text-sm text-ink-3">
              Mana yang lebih menggambarkan dirimu?
            </p>
            {(["a", "b"] as const).map((sisi) => {
              const dipilih = jawaban[item.no] === sisi;
              return (
                <button
                  key={sisi}
                  onClick={() => jawab(sisi)}
                  className={`glass block w-full p-6 text-left transition-all duration-200 ease-out hover:scale-[1.015] md:p-7 ${
                    dipilih
                      ? "!border-violet/60 !bg-violet/15 shadow-[0_0_32px_rgba(139,92,246,0.3)]"
                      : "hover:!border-white/25"
                  }`}
                >
                  <span className="font-display text-base font-bold leading-snug md:text-lg">
                    {item[sisi].teks}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex justify-between text-sm">
            <button
              onClick={() => setIndeks(Math.max(0, indeks - 1))}
              disabled={indeks === 0}
              className="btn-ghost !px-5 !py-2.5 disabled:pointer-events-none disabled:opacity-30"
            >
              ← Mundur
            </button>
            {jawaban[item.no] && indeks < MBTI_ITEMS.length - 1 && (
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
