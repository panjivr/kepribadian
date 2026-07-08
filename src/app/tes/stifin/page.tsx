"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";
import {
  STIFIN_CROSSCHECK,
  STIFIN_INFO,
  STIFIN_URUTAN,
  type StifinKode,
} from "@/data/tes/stifin";
import { bacaBigFive, bacaHasilSistem, simpanHasilSistem } from "@/lib/storage";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2">
      {children}
    </span>
  );
}

export default function TesStifin() {
  const [kode, setKode] = useState<StifinKode | null>(null);
  const [kemudi, setKemudi] = useState<"i" | "e" | null>(null);
  const [punyaBigFive, setPunyaBigFive] = useState(false);

  useEffect(() => {
    const t = bacaHasilSistem<{ kode: StifinKode; kemudi: "i" | "e" | null }>("stifin");
    if (t?.skor) {
      setKode(t.skor.kode);
      setKemudi(t.skor.kemudi ?? null);
    }
    setPunyaBigFive(!!bacaBigFive());
  }, []);

  const simpan = (k: StifinKode, kem: "i" | "e" | null) => {
    setKode(k);
    setKemudi(kem);
    simpanHasilSistem("stifin", { kode: k, kemudi: kem });
  };

  const info = kode ? STIFIN_INFO[kode] : null;

  return (
    <section className="mx-auto max-w-3xl px-5 pb-20 pt-32 md:px-8">
      <Reveal className="text-center">
        <div className="mb-4 flex justify-center">
          <TierBadge tier="pseudoscience" />
        </div>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          <span className="text-aurora">STIFIn</span> — Referensi
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink-2">
          Sudah pernah tes STIFIn? Masukkan hasilmu di sini untuk membacanya
          kembali dan membandingkannya dengan profil Big Five ilmiahmu.
        </p>
        <p className="mx-auto mt-4 max-w-md rounded-2xl border border-amber/20 bg-amber/8 px-4 py-3 text-xs leading-relaxed text-ink-2">
          <strong className="text-amber">Catatan penting:</strong> klaim penentuan
          “mesin kecerdasan” lewat sidik jari belum terbukti secara ilmiah dan
          tidak diakui psikologi standar. Djiva tidak melakukan tes sidik jari —
          ini hanya untuk mencatat & membandingkan hasil yang sudah kamu miliki.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="glass glass-hairline mt-10 p-7">
          <p className="mb-3 text-sm font-semibold">Mesin kecerdasanmu:</p>
          <div className="grid grid-cols-5 gap-2">
            {STIFIN_URUTAN.map((k) => (
              <button
                key={k}
                onClick={() => simpan(k, STIFIN_INFO[k].punyaKemudi ? kemudi : null)}
                className={`font-display rounded-2xl border-2 py-4 text-lg font-extrabold transition-all ${
                  kode === k
                    ? "border-violet bg-violet/20 text-ink"
                    : "border-white/12 bg-white/4 text-ink-2 hover:border-white/25"
                }`}
              >
                {k}
              </button>
            ))}
          </div>

          {info?.punyaKemudi && (
            <div className="mt-5">
              <p className="mb-2 text-sm font-semibold">Kemudi (arah energi):</p>
              <div className="grid grid-cols-2 gap-3">
                {(["i", "e"] as const).map((kem) => (
                  <button
                    key={kem}
                    onClick={() => simpan(kode!, kem)}
                    className={`rounded-2xl border-2 py-3 text-sm font-semibold transition-all ${
                      kemudi === kem
                        ? "border-violet bg-violet/15 text-ink"
                        : "border-white/12 bg-white/4 text-ink-2 hover:border-white/25"
                    }`}
                  >
                    {kem === "i" ? "introvert (i)" : "extrovert (e)"}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </Reveal>

      {info && (
        <div className="fade-in-up mt-8 space-y-6">
          <div className="glass glass-hairline p-7">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              {info.nama}
              {info.punyaKemudi && kemudi ? ` ${kemudi}` : ""}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-2">
              {info.deskripsi}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {info.kekuatan.map((k) => (
                <Chip key={k}>{k}</Chip>
              ))}
            </div>
            <div className="mt-4">
              <p className="mb-2 text-xs uppercase tracking-widest text-ink-3">
                Karier yang sering dikaitkan
              </p>
              <div className="flex flex-wrap gap-1.5">
                {info.karier.map((k) => (
                  <Chip key={k}>{k}</Chip>
                ))}
              </div>
            </div>
          </div>

          <div className="glass border-cyan/20 p-6">
            <p className="kicker !text-[10px]">Cross-Check dengan Big Five</p>
            {punyaBigFive ? (
              <p className="mt-2 text-sm leading-relaxed text-ink-2">
                Tipe {info.nama} biasanya beririsan dengan profil{" "}
                <strong className="text-ink">{STIFIN_CROSSCHECK[kode!]}</strong>.
                Buka Profil Terpadumu untuk melihat apakah Big Five-mu — yang
                berbasis riset — sejalan atau justru berbeda. Jika berbeda,
                percayai yang ilmiah.
              </p>
            ) : (
              <p className="mt-2 text-sm leading-relaxed text-ink-2">
                Selesaikan{" "}
                <Link href="/tes/big-five" className="text-aurora underline underline-offset-4">
                  tes Big Five
                </Link>{" "}
                dulu, lalu kami bisa membandingkan klaim STIFIn ini dengan
                profil ilmiahmu.
              </p>
            )}
          </div>
        </div>
      )}

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <Link href="/profil" className="btn-primary">
          Buka Profil Terpadumu
          <span aria-hidden>→</span>
        </Link>
        <Link href="/tes" className="btn-ghost">
          Semua Tes
        </Link>
      </div>
    </section>
  );
}
