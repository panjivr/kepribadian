"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";
import {
  bacaHasilSistem,
  simpanHasilSistem,
  type SistemId,
} from "@/lib/storage";
import type { Tier } from "@/lib/types";

export interface ItemTes {
  no: number;
  teks: string;
  /** label kecil di atas progress (mis. nama dikotomi/fondasi) */
  keterangan?: string;
  /** hanya untuk mode "pilihan" */
  pilihan?: { kunci: string; teks: string }[];
}

type Tahap = "intro" | "kuis" | "hasil";

/**
 * Shell bersama semua halaman tes: intro → kuis (likert 1-5 atau pilihan) →
 * hasil (disimpan otomatis ke localStorage per sistemId, dimuat ulang saat kembali).
 */
export default function HalamanTes<TSkor>({
  sistemId,
  judul,
  tier,
  deskripsi,
  bullets = [],
  catatan,
  mode,
  items,
  ujungSkala = ["Sangat tidak setuju", "Sangat setuju"],
  pertanyaanPilihan = "Mana yang paling menggambarkan dirimu?",
  hitung,
  Hasil,
}: {
  sistemId: SistemId;
  judul: ReactNode;
  tier: Tier;
  deskripsi: string;
  bullets?: string[];
  catatan?: string;
  mode: "likert" | "pilihan";
  items: ItemTes[];
  ujungSkala?: [string, string];
  pertanyaanPilihan?: string;
  hitung: (jawaban: Record<number, number & string>) => TSkor;
  Hasil: ComponentType<{ skor: TSkor }>;
}) {
  const [tahap, setTahap] = useState<Tahap>("intro");
  const [indeks, setIndeks] = useState(0);
  const [jawaban, setJawaban] = useState<Record<number, number | string>>({});
  const [skor, setSkor] = useState<TSkor | null>(null);
  const kunciRef = useRef(false);

  useEffect(() => {
    const tersimpan = bacaHasilSistem<TSkor>(sistemId);
    if (tersimpan) {
      setSkor(tersimpan.skor);
      setTahap("hasil");
    }
  }, [sistemId]);

  const item = items[indeks];
  const progres = useMemo(
    () => (Object.keys(jawaban).length / items.length) * 100,
    [jawaban, items.length]
  );

  const jawab = (nilai: number | string) => {
    if (kunciRef.current) return;
    kunciRef.current = true;
    const baru = { ...jawaban, [item.no]: nilai };
    setJawaban(baru);
    window.setTimeout(() => {
      kunciRef.current = false;
      if (indeks < items.length - 1) {
        setIndeks(indeks + 1);
      } else {
        const s = hitung(baru as Record<number, number & string>);
        simpanHasilSistem(sistemId, s);
        setSkor(s);
        setTahap("hasil");
        window.scrollTo({ top: 0 });
      }
    }, 260);
  };

  const mulaiUlang = () => {
    setJawaban({});
    setIndeks(0);
    setSkor(null);
    setTahap("kuis");
    window.scrollTo({ top: 0 });
  };

  return (
    <section className="mx-auto max-w-4xl px-5 pb-20 pt-32 md:px-8">
      {tahap === "intro" && (
        <Reveal className="mx-auto max-w-xl text-center">
          <div className="mb-4 flex justify-center">
            <TierBadge tier={tier} />
          </div>
          <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
            {judul}
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-ink-2 md:text-base">
            {deskripsi}
          </p>
          {bullets.length > 0 && (
            <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm text-ink-2">
              {bullets.map((b) => (
                <li key={b}>◇ {b}</li>
              ))}
            </ul>
          )}
          {catatan && (
            <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-ink-3">
              {catatan}
            </p>
          )}
          <button
            onClick={() => setTahap("kuis")}
            className="btn-primary mt-9 text-base"
          >
            Mulai Sekarang
          </button>
        </Reveal>
      )}

      {tahap === "kuis" && (
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 flex items-center justify-between text-xs font-semibold text-ink-3">
            <span>
              {mode === "likert" ? "Pernyataan" : "Pilihan"} {indeks + 1} /{" "}
              {items.length}
              {item.keterangan ? ` · ${item.keterangan}` : ""}
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

          {mode === "likert" ? (
            <div key={item.no} className="glass glass-hairline fade-in-up mt-8 p-8 md:p-12">
              <p className="text-center font-display text-xl font-bold leading-snug tracking-tight md:text-2xl">
                “{item.teks}”
              </p>
              <div className="mt-10">
                <div className="flex items-end justify-between gap-2 md:gap-3">
                  {[1, 2, 3, 4, 5].map((nilai) => {
                    const dipilih = jawaban[item.no] === nilai;
                    const ukuran = [56, 48, 42, 48, 56][nilai - 1];
                    return (
                      <button
                        key={nilai}
                        onClick={() => jawab(nilai)}
                        aria-label={`Nilai ${nilai} dari 5`}
                        className={`flex items-center justify-center rounded-full border-2 font-display font-bold transition-all duration-200 ease-out hover:scale-110 ${
                          dipilih
                            ? "border-violet bg-violet/30 text-ink shadow-[0_0_28px_rgba(139,92,246,0.5)]"
                            : "border-white/15 bg-white/4 text-ink-3 hover:border-violet/50 hover:text-ink"
                        }`}
                        style={{ width: ukuran, height: ukuran }}
                      >
                        {nilai}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-3 flex justify-between text-[11px] font-semibold text-ink-3">
                  <span>{ujungSkala[0]}</span>
                  <span>{ujungSkala[1]}</span>
                </div>
              </div>
            </div>
          ) : (
            <div key={item.no} className="fade-in-up mt-8 space-y-4">
              <p className="text-center font-display text-lg font-bold leading-snug tracking-tight md:text-xl">
                {item.teks || pertanyaanPilihan}
              </p>
              {(item.pilihan ?? []).map((p) => {
                const dipilih = jawaban[item.no] === p.kunci;
                return (
                  <button
                    key={p.kunci}
                    onClick={() => jawab(p.kunci)}
                    className={`glass block w-full p-5 text-left transition-all duration-200 ease-out hover:scale-[1.015] md:p-6 ${
                      dipilih
                        ? "!border-violet/60 !bg-violet/15 shadow-[0_0_32px_rgba(139,92,246,0.3)]"
                        : "hover:!border-white/25"
                    }`}
                  >
                    <span className="text-base font-semibold leading-snug">
                      {p.teks}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          <div className="mt-6 flex justify-between text-sm">
            <button
              onClick={() => setIndeks(Math.max(0, indeks - 1))}
              disabled={indeks === 0}
              className="btn-ghost !px-5 !py-2.5 disabled:pointer-events-none disabled:opacity-30"
            >
              ← Mundur
            </button>
            {jawaban[item.no] !== undefined && indeks < items.length - 1 && (
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

      {tahap === "hasil" && skor !== null && (
        <>
          <div className="fade-in-up">
            <Hasil skor={skor} />
          </div>
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
