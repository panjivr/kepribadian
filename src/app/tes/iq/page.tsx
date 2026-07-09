"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";
import LanjutTes from "@/components/LanjutTes";
import {
  bandIq,
  IQ_DOMAIN_INFO,
  IQ_ITEMS,
  type IqDomain,
} from "@/data/tes/iq";
import { bacaHasilSistem, simpanHasilSistem } from "@/lib/storage";

type Tahap = "intro" | "kuis" | "hasil";

interface IqSkor {
  benar: number;
  total: number;
  persen: number;
  perDomain: Record<IqDomain, { benar: number; total: number }>;
  jawaban: Record<number, number>;
}

function hitungSkor(jawaban: Record<number, number>): IqSkor {
  const perDomain = {} as Record<IqDomain, { benar: number; total: number }>;
  let benar = 0;
  for (const item of IQ_ITEMS) {
    perDomain[item.domain] ??= { benar: 0, total: 0 };
    perDomain[item.domain].total++;
    if (jawaban[item.no] === item.benar) {
      benar++;
      perDomain[item.domain].benar++;
    }
  }
  return {
    benar,
    total: IQ_ITEMS.length,
    persen: Math.round((benar / IQ_ITEMS.length) * 100),
    perDomain,
    jawaban,
  };
}

function format(dtk: number): string {
  const m = Math.floor(dtk / 60);
  const s = dtk % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function HasilView({ skor }: { skor: IqSkor }) {
  const band = bandIq(skor.persen);
  const domains = Object.keys(skor.perDomain) as IqDomain[];

  return (
    <div className="fade-in-up">
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Estimasi Kognitif</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
          Kamu menjawab{" "}
          <span className="text-aurora">
            {skor.benar}/{skor.total}
          </span>{" "}
          benar
        </h1>
        <p className="mt-2 text-lg font-semibold" style={{ color: band.warna }}>
          {band.label} · {band.rentang}
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-2">
          {band.narasi}
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-md rounded-2xl border border-amber/25 bg-amber/8 px-5 py-4 text-center text-xs leading-relaxed text-ink-2">
        <strong className="text-amber">Ini bukan tes IQ klinis.</strong> Skor IQ
        resmi memakai ratusan soal terstandarisasi, dinormakan pada populasi, dan
        diawasi psikolog. Anggap angka “est.” di atas sebagai gambaran kasar dari
        20 soal — untuk latihan & refleksi, bukan diagnosis.
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {domains.map((d) => {
          const dd = skor.perDomain[d];
          const persen = Math.round((dd.benar / dd.total) * 100);
          return (
            <div key={d} className="glass p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-sm font-bold">
                  {IQ_DOMAIN_INFO[d].nama}
                </h3>
                <span className="text-sm font-bold text-ink-2">
                  {dd.benar}/{dd.total}
                </span>
              </div>
              <p className="mt-1 text-xs text-ink-3">{IQ_DOMAIN_INFO[d].desk}</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
                <div
                  className="bar-anim h-full rounded-full"
                  style={{
                    width: `${Math.max(persen, 3)}%`,
                    background: "linear-gradient(90deg, #67e8f9, #8b5cf6)",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Pembahasan edukatif */}
      <div className="mt-8">
        <p className="kicker mb-4">Pembahasan — Belajar dari Tiap Soal</p>
        <div className="space-y-3">
          {IQ_ITEMS.map((item) => {
            const dijawab = skor.jawaban[item.no];
            const tepat = dijawab === item.benar;
            return (
              <div
                key={item.no}
                className={`glass p-5 ${tepat ? "" : "border-amber/25"}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 shrink-0 text-sm font-bold ${tepat ? "text-mint" : "text-amber"}`}
                  >
                    {tepat ? "✓" : "✗"}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-ink">{item.teks}</p>
                    <p className="mt-1 text-xs text-ink-2">
                      Jawaban benar:{" "}
                      <strong className="text-mint">{item.opsi[item.benar]}</strong>
                      {!tepat && dijawab !== undefined && (
                        <>
                          {" "}· jawabanmu:{" "}
                          <span className="text-amber">{item.opsi[dijawab]}</span>
                        </>
                      )}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-3">
                      💡 {item.pembahasan}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/profil" className="btn-primary">
          Buka Profil Terpadumu
          <span aria-hidden>→</span>
        </Link>
        <Link href="/tes" className="btn-ghost">
          Semua Tes
        </Link>
      </div>
      <LanjutTes current="iq" />
    </div>
  );
}

export default function TesIq() {
  const [tahap, setTahap] = useState<Tahap>("intro");
  const [indeks, setIndeks] = useState(0);
  const [jawaban, setJawaban] = useState<Record<number, number>>({});
  const [skor, setSkor] = useState<IqSkor | null>(null);
  const [detik, setDetik] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const t = bacaHasilSistem<IqSkor>("iq");
    if (t) {
      setSkor(t.skor);
      setTahap("hasil");
    }
  }, []);

  useEffect(() => {
    if (tahap === "kuis") {
      timerRef.current = setInterval(() => setDetik((d) => d + 1), 1000);
      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
      };
    }
  }, [tahap]);

  const item = IQ_ITEMS[indeks];
  const progres = (Object.keys(jawaban).length / IQ_ITEMS.length) * 100;

  const pilih = (opsiIdx: number) => {
    const baru = { ...jawaban, [item.no]: opsiIdx };
    setJawaban(baru);
    window.setTimeout(() => {
      if (indeks < IQ_ITEMS.length - 1) {
        setIndeks(indeks + 1);
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        const s = hitungSkor(baru);
        simpanHasilSistem("iq", s);
        setSkor(s);
        setTahap("hasil");
        window.scrollTo({ top: 0 });
      }
    }, 200);
  };

  const mulaiUlang = () => {
    setJawaban({});
    setIndeks(0);
    setSkor(null);
    setDetik(0);
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
            Tes <span className="text-aurora">Estimasi Kognitif</span> (IQ)
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-ink-2 md:text-base">
            20 soal penalaran di empat domain: logis, numerik, verbal, dan pola
            abstrak. Kerjakan dengan tenang — tiap jawaban langsung membawamu ke
            soal berikutnya. Di akhir kamu dapat estimasi kasar plus pembahasan
            setiap soal.
          </p>
          <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm text-ink-2">
            <li>◇ Satu jawaban benar per soal</li>
            <li>◇ Ada waktu terekam, tapi santai — bukan lomba</li>
            <li>◇ Pembahasan lengkap agar kamu belajar</li>
          </ul>
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-ink-3">
            Estimasi singkat untuk latihan & refleksi, bukan pengganti tes IQ
            tervalidasi yang diawasi psikolog.
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
              Soal {indeks + 1} / {IQ_ITEMS.length} ·{" "}
              {IQ_DOMAIN_INFO[item.domain].nama}
            </span>
            <span>⏱ {format(detik)}</span>
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

          <div key={item.no} className="glass glass-hairline fade-in-up mt-8 p-7 md:p-10">
            <p className="text-center font-display text-lg font-bold leading-snug tracking-tight md:text-xl">
              {item.teks}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {item.opsi.map((o, i) => {
                const dipilih = jawaban[item.no] === i;
                return (
                  <button
                    key={i}
                    onClick={() => pilih(i)}
                    className={`glass block w-full p-4 text-left text-base font-semibold transition-all duration-200 ease-out hover:scale-[1.015] ${
                      dipilih
                        ? "!border-violet/60 !bg-violet/15 shadow-[0_0_28px_rgba(139,92,246,0.3)]"
                        : "hover:!border-white/25"
                    }`}
                  >
                    <span className="mr-2 text-ink-3">
                      {String.fromCharCode(65 + i)}.
                    </span>
                    {o}
                  </button>
                );
              })}
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
            {jawaban[item.no] !== undefined && indeks < IQ_ITEMS.length - 1 && (
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

      {tahap === "hasil" && skor && (
        <>
          <HasilView skor={skor} />
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
