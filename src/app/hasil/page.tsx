"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import TierBadge from "@/components/TierBadge";
import {
  hitungKua,
  hitungNumerologi,
  hitungShio,
  hitungWeton,
  hitungZodiak,
  MAKNA_ANGKA,
} from "@/lib/birth";
import { bacaProfil } from "@/lib/storage";
import type { UserProfile } from "@/lib/types";

const SIMBOL_ZODIAK: Record<string, string> = {
  Aries: "♈", Taurus: "♉", Gemini: "♊", Cancer: "♋", Leo: "♌", Virgo: "♍",
  Libra: "♎", Scorpio: "♏", Sagitarius: "♐", Capricorn: "♑", Aquarius: "♒", Pisces: "♓",
};

function tanggalIndo(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2">
      {children}
    </span>
  );
}

function JudulKartu({ label, judul }: { label: string; judul: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="kicker !text-[10px]">{label}</p>
        <h2 className="font-display mt-1.5 text-2xl font-extrabold tracking-tight">
          {judul}
        </h2>
      </div>
      <TierBadge tier="cultural_spiritual" />
    </div>
  );
}

function Baris({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-white/6 py-2 text-sm last:border-0">
      <span className="shrink-0 text-ink-3">{k}</span>
      <span className="text-right font-medium">{v}</span>
    </div>
  );
}

export default function Hasil() {
  const router = useRouter();
  const [profil, setProfil] = useState<UserProfile | null>(null);
  const [siap, setSiap] = useState(false);

  useEffect(() => {
    const p = bacaProfil();
    if (!p) {
      router.replace("/mulai");
      return;
    }
    setProfil(p);
    setSiap(true);
  }, [router]);

  if (!siap || !profil) {
    return (
      <div className="flex min-h-[70svh] items-center justify-center text-sm text-ink-3">
        Membaca cetak biru kelahiranmu…
      </div>
    );
  }

  const zodiak = hitungZodiak(profil.tanggalLahir);
  const shio = hitungShio(profil.tanggalLahir);
  const weton = hitungWeton(profil.tanggalLahir);
  const numerologi = hitungNumerologi(
    profil.namaLengkap,
    profil.tanggalLahir,
    new Date().getFullYear()
  );
  const kua = hitungKua(profil.tanggalLahir, profil.gender);
  const maknaLifePath = MAKNA_ANGKA[numerologi.lifePath];
  const maknaTahun = MAKNA_ANGKA[numerologi.personalYear];

  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-32 md:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="kicker mb-4">Cetak Biru Kelahiran</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          Halo, <span className="text-aurora">{profil.namaPanggilan}.</span>
        </h1>
        <p className="mt-4 text-sm text-ink-2 md:text-base">
          Lahir {tanggalIndo(profil.tanggalLahir)} — inilah yang dibisikkan
          lima tradisi tentang momen kelahiranmu.
        </p>
        <p className="mx-auto mt-5 max-w-lg rounded-2xl border border-violet/25 bg-violet/8 px-4 py-3 text-xs leading-relaxed text-ink-2">
          Bagian ini adalah <strong>refleksi budaya & hiburan</strong> — bukan
          asesmen psikologis. Untuk potret ilmiah dirimu, lanjut ke tes Big
          Five di bawah.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* ------------------------------- WETON ------------------------------ */}
        <Reveal>
          <Tilt className="glass glass-hairline h-full p-7 md:p-8">
            <div className="tilt-layer">
              <JudulKartu label="Weton Jawa" judul={`${weton.hari} ${weton.pasaran}`} />
              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-3xl border border-violet/30 bg-gradient-to-br from-blue/20 to-violet/20">
                  <span className="font-display text-3xl font-extrabold text-aurora">
                    {weton.neptu}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-ink-3">
                    neptu
                  </span>
                </div>
                <div>
                  <p className="font-display text-lg font-bold">{weton.laku}</p>
                  <p className="mt-1 text-sm leading-snug text-ink-2">
                    {weton.lakuMakna}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <Baris k={`Hari ${weton.hari}`} v={`neptu ${weton.neptuHari}`} />
                <Baris k={`Pasaran ${weton.pasaran}`} v={`neptu ${weton.neptuPasaran}`} />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-2">
                <strong className="text-ink">Watak {weton.hari}:</strong>{" "}
                {weton.watakHari}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">
                <strong className="text-ink">Watak {weton.pasaran}:</strong>{" "}
                {weton.watakPasaran}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                  <p className="text-xs uppercase tracking-widest text-ink-3">
                    Arah Rejeki · {weton.rejeki.nama}
                  </p>
                  <p className="mt-1.5 text-sm leading-snug text-ink-2">
                    {weton.rejeki.makna}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                  <p className="text-xs uppercase tracking-widest text-ink-3">
                    Pangarasan · {weton.pangarasan.nama}
                  </p>
                  <p className="mt-1.5 text-sm leading-snug text-ink-2">
                    {weton.pangarasan.makna}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs italic text-ink-3">
                Usaha & doa selalu di atas petungan — begitu pesan para leluhur.
              </p>
            </div>
          </Tilt>
        </Reveal>

        {/* ---------------------------- NUMEROLOGI ---------------------------- */}
        <Reveal delay={100}>
          <Tilt className="glass glass-hairline h-full p-7 md:p-8">
            <div className="tilt-layer">
              <JudulKartu label="Numerologi Pythagorean" judul={`Life Path ${numerologi.lifePath}`} />
              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-cyan/30 bg-gradient-to-br from-cyan/15 to-blue/20">
                  <span className="font-display text-4xl font-extrabold text-aurora">
                    {numerologi.lifePath}
                  </span>
                </div>
                <div>
                  <p className="font-display text-lg font-bold">
                    {maknaLifePath.arketipe}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {maknaLifePath.kekuatan.slice(0, 3).map((k) => (
                      <Chip key={k}>{k}</Chip>
                    ))}
                  </div>
                </div>
              </div>
              {[11, 22, 33].includes(numerologi.lifePath) && (
                <p className="mt-4 rounded-2xl border border-cyan/25 bg-cyan/8 px-4 py-3 text-sm text-ink-2">
                  ✦ <strong className="text-ink">Master Number.</strong>{" "}
                  {maknaLifePath.misi}
                </p>
              )}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  ["Destiny", numerologi.destiny, "misi dari namamu"],
                  ["Soul Urge", numerologi.soulUrge, "dorongan hati (vokal)"],
                  ["Personality", numerologi.personality, "citra luar (konsonan)"],
                  ["Birthday", numerologi.birthday, "bakat bawaan"],
                  ["Maturity", numerologi.maturity, "arah paruh kedua hidup"],
                  [`Tahun ${numerologi.tahunBerjalan}`, numerologi.personalYear, "tema tahun personalmu"],
                ].map(([nama, angka, ket]) => (
                  <div
                    key={String(nama)}
                    className="rounded-2xl border border-white/8 bg-white/4 p-3 text-center"
                  >
                    <p className="font-display text-2xl font-extrabold">{angka}</p>
                    <p className="mt-0.5 text-[11px] font-semibold text-ink-2">{nama}</p>
                    <p className="text-[10px] leading-tight text-ink-3">{ket}</p>
                  </div>
                ))}
              </div>
              {maknaTahun.tahunPersonal && (
                <p className="mt-4 text-sm leading-relaxed text-ink-2">
                  <strong className="text-ink">
                    Tema {numerologi.tahunBerjalan}-mu:
                  </strong>{" "}
                  {maknaTahun.tahunPersonal}
                </p>
              )}
            </div>
          </Tilt>
        </Reveal>

        {/* ------------------------------- ZODIAK ------------------------------ */}
        <Reveal>
          <Tilt className="glass glass-hairline h-full p-7 md:p-8">
            <div className="tilt-layer">
              <JudulKartu label="Zodiak Barat" judul={zodiak.nama} />
              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-blue/30 bg-gradient-to-br from-blue/20 to-indigo/20">
                  <span className="text-4xl" aria-hidden>
                    {SIMBOL_ZODIAK[zodiak.nama]}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <Chip>{zodiak.tanggal}</Chip>
                  <Chip>Elemen {zodiak.elemen}</Chip>
                  <Chip>{zodiak.modalitas}</Chip>
                  <Chip>Planet {zodiak.planet}</Chip>
                </div>
              </div>
              <div className="mt-5">
                <Baris k="Kekuatan" v={zodiak.kekuatan} />
                <Baris k="Titik rawan" v={zodiak.kelemahan} />
                <Baris k="Selaras dengan" v={zodiak.cocok.join(", ")} />
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {zodiak.trait.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </Tilt>
        </Reveal>

        {/* -------------------------------- SHIO ------------------------------- */}
        <Reveal delay={100}>
          <Tilt className="glass glass-hairline h-full p-7 md:p-8">
            <div className="tilt-layer">
              <JudulKartu
                label="Shio · Zodiak Tiongkok"
                judul={`${shio.nama} ${shio.elemen}`}
              />
              <div className="mt-5 flex flex-wrap gap-1.5">
                <Chip>Tahun lunar {shio.tahunEfektif}</Chip>
                <Chip>Elemen {shio.elemen} — {shio.elemenMakna}</Chip>
                <Chip>{shio.yinYang}</Chip>
              </div>
              {shio.bergeserKarenaImlek && (
                <p className="mt-4 rounded-2xl border border-cyan/25 bg-cyan/8 px-4 py-3 text-xs leading-relaxed text-ink-2">
                  ✦ Kamu lahir <strong>sebelum Imlek</strong> tahun itu, jadi
                  shiomu mengikuti tahun lunar sebelumnya — detail yang sering
                  terlewat kalkulator lain.
                </p>
              )}
              <div className="mt-4">
                <Baris k="Kekuatan" v={shio.kekuatan} />
                <Baris k="Titik rawan" v={shio.kelemahan} />
                <Baris k="Selaras dengan" v={shio.cocok.join(", ")} />
                <Baris k="Perlu usaha ekstra" v={shio.kurangCocok.join(", ")} />
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {shio.trait.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </Tilt>
        </Reveal>

        {/* -------------------------------- KUA -------------------------------- */}
        <Reveal className="lg:col-span-2">
          <Tilt className="glass glass-hairline p-7 md:p-8" max={5}>
            <div className="tilt-layer">
              <JudulKartu label="Feng Shui" judul={`Angka Kua ${kua.angka}`} />
              <div className="mt-5 grid items-center gap-6 md:grid-cols-[auto_1fr]">
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-mint/25 bg-gradient-to-br from-mint/10 to-cyan/10">
                    <span className="font-display text-4xl font-extrabold">
                      {kua.angka}
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold">
                      Kelompok {kua.grup} · Elemen {kua.elemen}
                    </p>
                    <p className="mt-1 text-sm capitalize text-ink-2">{kua.karakter}</p>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-widest text-ink-3">
                    Arah baik (tradisional) untuk kerja & istirahat
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {kua.arahBaik.map((a) => (
                      <Chip key={a}>{a}</Chip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>

      {/* ------------------------------ CTA lanjut ------------------------------ */}
      <Reveal className="mt-16">
        <div className="glass-strong glass-hairline p-8 text-center md:p-12">
          <p className="kicker mb-3">Langkah 2 · Potret Ilmiah</p>
          <h2 className="font-display text-balance text-2xl font-extrabold tracking-tight md:text-4xl">
            Itu baru langit & kalender.
            <br />
            <span className="text-aurora">Sekarang ukur dirimu dengan sains.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink-2">
            Tes Big Five (IPIP-50) — 50 pernyataan, ±7 menit — membuka profil
            OCEAN-mu, memprediksi tipe 16, dan menjadi fondasi Profil Terpadumu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/tes/big-five" className="btn-primary">
              Mulai Tes Big Five
              <span aria-hidden>→</span>
            </Link>
            <Link href="/tes" className="btn-ghost">
              Lihat Semua Tes
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
