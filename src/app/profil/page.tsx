"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";
import RadarChart from "@/components/RadarChart";
import BarSkor from "@/components/BarSkor";
import { DIMENSI_INFO } from "@/lib/bigfive";
import { TIPE_16, prediksiMbtiDariBigFive } from "@/lib/mbti";
import {
  actionPlan,
  areaPertumbuhan,
  arketipeHeadline,
  eysenckDariBigFive,
  indikasiDisc,
  indikasiEnneagram,
  narasiDimensi,
  rekomendasiKarier,
} from "@/lib/profil";
import {
  hitungBazi,
  type Elemen,
} from "@/lib/bazi";
import {
  hitungKua,
  hitungNumerologi,
  hitungShio,
  hitungWeton,
  hitungZodiak,
  MAKNA_ANGKA,
} from "@/lib/birth";
import {
  bacaBigFive,
  bacaHasilSistem,
  bacaMbti,
  bacaProfil,
} from "@/lib/storage";
import type { SkorDimensi } from "@/lib/skoring";
import type {
  BigFiveDim,
  BigFiveResult,
  MbtiResult,
  UserProfile,
} from "@/lib/types";
import { VIA_KEKUATAN } from "@/data/tes/via";
import { MI_INFO, type MiDim } from "@/data/tes/kecerdasan";
import { DISC_INFO, type DiscDim } from "@/data/tes/disc";
import { ENNEA_TIPE } from "@/data/tes/enneagram";
import { TEMPERAMEN_INFO, type TemperamenDim } from "@/data/tes/temperamen";
import { MORAL_INFO, MORAL_INSIGHT, type MoralDim } from "@/data/tes/moral";
import { HBDI_INFO, type HbdiDim } from "@/data/tes/hbdi";

const URUTAN_DIM: BigFiveDim[] = ["O", "C", "E", "A", "N"];
const VIA_INFO = Object.fromEntries(VIA_KEKUATAN.map((k) => [k.id, k]));

const NAMA_VAK: Record<string, string> = {
  V: "Visual",
  A: "Auditori",
  K: "Kinestetik",
};

function Seksi({
  nomor,
  judul,
  anak,
  aksen,
}: {
  nomor: string;
  judul: string;
  anak: React.ReactNode;
  aksen?: React.ReactNode;
}) {
  return (
    <Reveal>
      <section className="glass glass-hairline p-7 md:p-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-violet/30 bg-gradient-to-br from-blue/15 to-violet/15 text-sm font-extrabold text-aurora">
              {nomor}
            </span>
            <h2 className="font-display text-xl font-extrabold tracking-tight md:text-2xl">
              {judul}
            </h2>
          </div>
          {aksen}
        </div>
        <div className="mt-6">{anak}</div>
      </section>
    </Reveal>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2">
      {children}
    </span>
  );
}

function BelumTes({ nama, route }: { nama: string; route: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/12 bg-white/[0.03] p-5 text-sm text-ink-3">
      Ikuti{" "}
      <Link href={route} className="text-aurora underline underline-offset-4">
        tes {nama}
      </Link>{" "}
      untuk mengisi bagian ini dengan hasil aslimu.
    </div>
  );
}

export default function ProfilTerpadu() {
  const [siap, setSiap] = useState(false);
  const [profil, setProfil] = useState<UserProfile | null>(null);
  const [bigFive, setBigFive] = useState<BigFiveResult | null>(null);
  const [mbti, setMbti] = useState<MbtiResult | null>(null);
  const [via, setVia] = useState<SkorDimensi | null>(null);
  const [mi, setMi] = useState<SkorDimensi | null>(null);
  const [disc, setDisc] = useState<SkorDimensi | null>(null);
  const [ennea, setEnnea] = useState<SkorDimensi | null>(null);
  const [temperamen, setTemperamen] = useState<SkorDimensi | null>(null);
  const [mft, setMft] = useState<SkorDimensi | null>(null);
  const [hbdi, setHbdi] = useState<SkorDimensi | null>(null);
  const [vak, setVak] = useState<{ urut: { nilai: string; persen: number }[] } | null>(null);

  useEffect(() => {
    setProfil(bacaProfil());
    setBigFive(bacaBigFive());
    setMbti(bacaMbti());
    setVia(bacaHasilSistem<SkorDimensi>("via")?.skor ?? null);
    setMi(bacaHasilSistem<SkorDimensi>("mi")?.skor ?? null);
    setDisc(bacaHasilSistem<SkorDimensi>("disc")?.skor ?? null);
    setEnnea(bacaHasilSistem<SkorDimensi>("enneagram")?.skor ?? null);
    setTemperamen(bacaHasilSistem<SkorDimensi>("temperament")?.skor ?? null);
    setMft(bacaHasilSistem<SkorDimensi>("mft")?.skor ?? null);
    setHbdi(bacaHasilSistem<SkorDimensi>("hbdi")?.skor ?? null);
    setVak(bacaHasilSistem<{ urut: { nilai: string; persen: number }[] }>("vak")?.skor ?? null);
    setSiap(true);
  }, []);

  if (!siap) {
    return (
      <div className="flex min-h-[70svh] items-center justify-center text-sm text-ink-3">
        Menyusun profilmu…
      </div>
    );
  }

  if (!profil) {
    return (
      <section className="mx-auto flex min-h-[80svh] max-w-xl flex-col items-center justify-center px-5 text-center">
        <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          Profilmu masih <span className="text-aurora">kosong.</span>
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-ink-2">
          Mulai dari data kelahiranmu — 30 detik — lalu lengkapi dengan tes Big
          Five untuk membuka Profil Terpadu.
        </p>
        <Link href="/mulai" className="btn-primary mt-8">
          Mulai Perjalananmu
        </Link>
      </section>
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
  const bazi = hitungBazi(profil.tanggalLahir, profil.jamLahir);

  if (!bigFive) {
    return (
      <section className="mx-auto max-w-2xl px-5 pb-20 pt-32 text-center md:px-8">
        <Reveal>
          <p className="kicker mb-4">Profil Terpadu</p>
          <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
            Satu langkah lagi,{" "}
            <span className="text-aurora">{profil.namaPanggilan}.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-2">
            Profil Terpadu disintesis di atas fondasi ilmiah. Selesaikan tes Big
            Five (±7 menit) untuk membukanya — cetak biru kelahiranmu sudah siap
            menunggu di dalam.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/tes/big-five" className="btn-primary">
              Ikuti Tes Big Five
            </Link>
            <Link href="/hasil" className="btn-ghost">
              Lihat Cetak Biru Kelahiran
            </Link>
          </div>
        </Reveal>
      </section>
    );
  }

  const mbtiFinal: MbtiResult =
    mbti && mbti.sumber === "tes" ? mbti : prediksiMbtiDariBigFive(bigFive.persen);
  const tipeInfo = TIPE_16[mbtiFinal.tipe];
  const eysenck = eysenckDariBigFive(bigFive.persen);
  const headline = arketipeHeadline(bigFive.persen);
  const dimTertinggi = URUTAN_DIM.reduce((a, b) =>
    bigFive.persen[a] >= bigFive.persen[b] ? a : b
  );

  // DISC: hasil tes asli menimpa indikasi Big Five
  const discUrut = disc
    ? (disc.urut as { dim: DiscDim; persen: number }[])
    : indikasiDisc(bigFive.persen).map((d) => ({ dim: d.kode, persen: d.skor }));
  const discSumberTes = !!disc;

  // Enneagram: hasil tes asli menimpa indikasi
  const enneaUrut = ennea
    ? ennea.urut.map((u) => ({ tipe: Number(u.dim), persen: u.persen }))
    : indikasiEnneagram(bigFive.persen).map((e) => ({ tipe: e.tipe, persen: e.skor }));
  const enneaSumberTes = !!ennea;

  // Karier: kumpulkan lintas sistem yang tersedia
  const karier = rekomendasiKarier(bigFive, mbtiFinal);
  const tumbuh = areaPertumbuhan(bigFive, mbtiFinal);
  const rencana = actionPlan(bigFive);

  const viaTop5 = via
    ? via.urut.slice(0, 5).map((u) => ({ ...u, info: VIA_INFO[u.dim] }))
    : null;
  const miTop3 = mi
    ? (mi.urut.slice(0, 3) as { dim: MiDim; persen: number }[])
    : null;
  const temperamenTop = temperamen
    ? (temperamen.urut[0].dim as TemperamenDim)
    : null;
  const hbdiTop = hbdi ? (hbdi.urut[0].dim as HbdiDim) : null;
  const vakTop = vak?.urut?.[0]?.nilai ?? null;

  // MFT insight
  let mftInsight: string | null = null;
  let mftPersen: Record<MoralDim, number> | null = null;
  if (mft) {
    mftPersen = mft.persen as Record<MoralDim, number>;
    const indi = (mftPersen.care + mftPersen.fairness) / 2;
    const bind = (mftPersen.loyalty + mftPersen.authority + mftPersen.sanctity) / 2;
    mftInsight =
      indi - bind >= 10
        ? MORAL_INSIGHT.individualizing
        : bind - indi >= 10
          ? MORAL_INSIGHT.binding
          : MORAL_INSIGHT.seimbang;
  }

  const maxElemen = Math.max(
    ...(["Kayu", "Api", "Tanah", "Logam", "Air"] as Elemen[]).map(
      (e) => bazi.hitungElemen[e]
    )
  );

  return (
    <section className="mx-auto max-w-5xl px-5 pb-20 pt-32 md:px-8">
      {/* ------------------------------- header ------------------------------- */}
      <Reveal className="text-center">
        <p className="kicker mb-4">Profil Terpadu · Sintesis Semua Sistem</p>
        <h1 className="font-display text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
          {profil.namaPanggilan},{" "}
          <span className="text-aurora">{headline}.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink-2 md:text-base">
          {tipeInfo ? `${mbtiFinal.tipe} — ${tipeInfo.julukan}. ` : ""}
          Disintesis dari Big Five (fondasi ilmiah) dan setiap tes yang sudah
          kamu selesaikan, plus perspektif budaya kelahiranmu.
        </p>
        <button
          onClick={() => window.print()}
          className="btn-ghost no-print mt-7 !px-5 !py-2.5 text-sm"
        >
          ⤓ Cetak / Simpan PDF
        </button>
      </Reveal>

      <div className="mt-14 space-y-6">
        {/* --------------------------- 1. inti diri --------------------------- */}
        <Seksi
          nomor="01"
          judul="Inti Diri"
          aksen={<TierBadge tier="scientific" />}
          anak={
            <div className="grid items-center gap-8 md:grid-cols-[1fr_1.15fr]">
              <div className="flex justify-center">
                <RadarChart
                  nilai={URUTAN_DIM.map((d) => bigFive.persen[d])}
                  label={URUTAN_DIM.map((d) => DIMENSI_INFO[d].singkat)}
                />
              </div>
              <div className="space-y-3.5">
                {URUTAN_DIM.map((dim) => (
                  <p key={dim} className="text-sm leading-relaxed text-ink-2">
                    <strong className="text-ink">
                      {DIMENSI_INFO[dim].singkat}{" "}
                      {Math.round(bigFive.persen[dim])}% ({bigFive.band[dim]}).
                    </strong>{" "}
                    {narasiDimensi(dim, bigFive.persen[dim])}
                  </p>
                ))}
                {tipeInfo && (
                  <p className="rounded-2xl border border-white/8 bg-white/4 p-4 text-sm leading-relaxed text-ink-2">
                    <strong className="text-aurora">
                      {mbtiFinal.tipe} · {tipeInfo.julukan}
                    </strong>{" "}
                    {mbtiFinal.sumber === "prediksi_big_five" ? (
                      <span className="text-xs text-ink-3">
                        (prediksi dari Big Five —{" "}
                        <Link href="/tes/tipe-16" className="underline underline-offset-2">
                          ikuti tesnya
                        </Link>{" "}
                        untuk konfirmasi)
                      </span>
                    ) : (
                      <span className="text-xs text-ink-3">(hasil tes)</span>
                    )}
                    <br />
                    Kekuatan khasmu: {tipeInfo.kekuatan.slice(0, 3).join(", ")}.
                  </p>
                )}
                <div className="rounded-2xl border border-white/8 bg-white/4 p-4 text-sm leading-relaxed text-ink-2">
                  <strong className="text-ink">
                    Enneagram: Tipe {enneaUrut[0].tipe} —{" "}
                    {ENNEA_TIPE[enneaUrut[0].tipe].nama}
                  </strong>
                  <span className="block pt-1 text-xs text-ink-3">
                    {enneaSumberTes
                      ? "Dari hasil tes Enneagram-mu."
                      : "Indikatif dari pola OCEAN — ikuti tes Enneagram untuk hasil asli."}
                  </span>
                </div>
                {bigFive.kombinasi.length > 0 && (
                  <div className="rounded-2xl border border-violet/25 bg-violet/8 p-4 text-sm leading-relaxed text-ink-2">
                    <strong className="text-aurora">Pola istimewa:</strong>{" "}
                    {bigFive.kombinasi.map((k) => k.insight).join(" ")}
                  </div>
                )}
              </div>
            </div>
          }
        />

        {/* ------------------------ 2. kekuatan utama ------------------------- */}
        <Seksi
          nomor="02"
          judul="Kekuatan Utama"
          aksen={<TierBadge tier="scientific" />}
          anak={
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="kicker !text-[10px] mb-3">
                  Signature Strengths (VIA)
                </p>
                {viaTop5 ? (
                  <ol className="space-y-2">
                    {viaTop5.map((u, i) => (
                      <li key={u.dim} className="flex items-center gap-3 text-sm">
                        <span className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue to-violet text-xs font-extrabold text-white">
                          {i + 1}
                        </span>
                        <span className="text-ink-2">
                          {u.info?.nama}{" "}
                          <span className="text-ink-3">— {u.info?.virtue}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <BelumTes nama="Kekuatan Karakter" route="/tes/kekuatan-karakter" />
                )}
              </div>
              <div>
                <p className="kicker !text-[10px] mb-3">
                  Kecerdasan Teratas (Gardner)
                </p>
                {miTop3 ? (
                  <div className="space-y-3">
                    {miTop3.map((u) => (
                      <BarSkor
                        key={u.dim}
                        label={MI_INFO[u.dim].nama}
                        nilaiTeks={`${Math.round(u.persen)}%`}
                        persen={u.persen}
                      />
                    ))}
                  </div>
                ) : (
                  <BelumTes nama="Kecerdasan Majemuk" route="/tes/kecerdasan-majemuk" />
                )}
              </div>
            </div>
          }
        />

        {/* ------------------------ 3. gaya kerja & tim ------------------------ */}
        <Seksi
          nomor="03"
          judul="Gaya Kerja & Tim"
          aksen={<TierBadge tier="semi_scientific" />}
          anak={
            <div className="space-y-6">
              <div>
                <p className="mb-3 text-sm text-ink-3">
                  Gaya DISC{" "}
                  {discSumberTes
                    ? "(dari hasil tesmu)"
                    : "(indikasi dari profil OCEAN)"}
                </p>
                <div className="space-y-3">
                  {discUrut.map((d, i) => (
                    <BarSkor
                      key={d.dim}
                      label={`${d.dim} — ${DISC_INFO[d.dim].nama}`}
                      nilaiTeks={`${Math.round(d.persen)}%`}
                      persen={d.persen}
                      aktif={i === 0}
                    />
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                  <p className="text-xs uppercase tracking-widest text-ink-3">
                    Temperamen
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {temperamenTop
                      ? `${temperamenTop} — ${TEMPERAMEN_INFO[temperamenTop].julukan}`
                      : "Belum dites"}
                  </p>
                  {!temperamenTop && (
                    <Link
                      href="/tes/temperamen"
                      className="text-xs text-aurora underline underline-offset-2"
                    >
                      ikuti tes
                    </Link>
                  )}
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                  <p className="text-xs uppercase tracking-widest text-ink-3">
                    Gaya Berpikir
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {hbdiTop ? HBDI_INFO[hbdiTop].nama : "Belum dites"}
                  </p>
                  {!hbdiTop && (
                    <Link
                      href="/tes/gaya-berpikir"
                      className="text-xs text-aurora underline underline-offset-2"
                    >
                      ikuti tes
                    </Link>
                  )}
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
                  <p className="text-xs uppercase tracking-widest text-ink-3">
                    Eysenck PEN
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {eysenck.kuadran.split(" (")[0]}
                  </p>
                  <p className="text-[11px] text-ink-3">
                    E{eysenck.E} · N{eysenck.N} · P{eysenck.P}
                  </p>
                </div>
              </div>
            </div>
          }
        />

        {/* -------------------- 4. nilai & kompas moral ----------------------- */}
        <Seksi
          nomor="04"
          judul="Nilai & Kompas Moral"
          aksen={<TierBadge tier="scientific" />}
          anak={
            mftPersen && mftInsight ? (
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div className="space-y-2.5">
                  {(Object.keys(MORAL_INFO) as MoralDim[]).map((d) => (
                    <BarSkor
                      key={d}
                      label={MORAL_INFO[d].labelPendek}
                      nilaiTeks={`${Math.round(mftPersen![d])}%`}
                      persen={mftPersen![d]}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-ink-2">{mftInsight}</p>
              </div>
            ) : (
              <BelumTes nama="Kompas Moral" route="/tes/kompas-moral" />
            )
          }
        />

        {/* --------------------------- 5. cara belajar ------------------------ */}
        <Seksi
          nomor="05"
          judul="Cara Belajar"
          aksen={<TierBadge tier="semi_scientific" />}
          anak={
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/8 bg-white/4 p-5">
                <p className="kicker !text-[10px]">Preferensi Sensorik (VAK)</p>
                {vakTop ? (
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">
                    Kamu paling nyaman menyerap hal baru secara{" "}
                    <strong className="text-ink">{NAMA_VAK[vakTop]}</strong>.
                    Ingat: belajar terbaik tetap multimodal.
                  </p>
                ) : (
                  <div className="mt-2">
                    <BelumTes nama="Gaya Belajar" route="/tes/gaya-belajar" />
                  </div>
                )}
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/4 p-5">
                <p className="kicker !text-[10px]">Jalur Kecerdasan Terkuat</p>
                {miTop3 ? (
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">
                    Kecerdasan {MI_INFO[miTop3[0].dim].nama}-mu paling menonjol —
                    belajar efektif lewat {MI_INFO[miTop3[0].dim].caraBelajar}.
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-ink-3">
                    Ikuti tes Kecerdasan Majemuk untuk melengkapi bagian ini.
                  </p>
                )}
              </div>
            </div>
          }
        />

        {/* ------------------------ 6. rekomendasi karier ----------------------- */}
        <Seksi
          nomor="06"
          judul="Rekomendasi Karier"
          aksen={<TierBadge tier="scientific" />}
          anak={
            <div>
              <p className="mb-5 text-sm text-ink-3">
                Irisan arah karier dari semua sistem ilmiah & semi-ilmiah — yang
                muncul berulang paling layak dijelajahi.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {karier.map((k) => (
                  <span
                    key={k.nama}
                    className={`rounded-2xl border px-4 py-2 text-sm capitalize ${
                      k.sumber >= 2
                        ? "border-violet/40 bg-violet/12 font-semibold text-ink shadow-[0_0_20px_rgba(139,92,246,0.18)]"
                        : "border-white/10 bg-white/5 text-ink-2"
                    }`}
                  >
                    {k.nama}
                    {k.sumber >= 2 && (
                      <span className="ml-1.5 text-xs text-aurora">×{k.sumber}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          }
        />

        {/* ------------------------ 7. relasi & komunikasi ---------------------- */}
        <Seksi
          nomor="07"
          judul="Relasi & Komunikasi"
          anak={
            <div className="grid gap-5 md:grid-cols-2">
              {tipeInfo && (
                <div className="rounded-2xl border border-white/8 bg-white/4 p-5">
                  <p className="kicker !text-[10px] mb-2">
                    Gaya Relasimu ({mbtiFinal.tipe})
                  </p>
                  <p className="text-sm leading-relaxed text-ink-2">{tipeInfo.relasi}</p>
                </div>
              )}
              <div className="rounded-2xl border border-white/8 bg-white/4 p-5">
                <p className="kicker !text-[10px] mb-2">Cara Terbaik Berkomunikasi Denganmu</p>
                <p className="text-sm leading-relaxed text-ink-2">
                  {DISC_INFO[discUrut[0].dim].komunikasi}
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/4 p-5 md:col-span-2">
                <p className="kicker !text-[10px] mb-2">
                  Keselarasan Tradisional{" "}
                  <span className="normal-case text-ink-3">(budaya & hiburan)</span>
                </p>
                <p className="text-sm leading-relaxed text-ink-2">
                  Zodiak {zodiak.nama} selaras dengan{" "}
                  {zodiak.cocok.slice(0, 3).join(", ")}. Shio {shio.nama} cocok
                  bersama shio {shio.cocok.join(", ")}.
                </p>
              </div>
            </div>
          }
        />

        {/* ------------------------- 8. area pertumbuhan ------------------------ */}
        <Seksi
          nomor="08"
          judul="Area Pertumbuhan"
          anak={
            <div className="space-y-4">
              <ul className="grid gap-3 sm:grid-cols-2">
                {tumbuh.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 p-4 text-sm capitalize leading-relaxed text-ink-2"
                  >
                    <span className="mt-0.5 shrink-0 text-amber">▲</span> {t}
                  </li>
                ))}
              </ul>
              {enneaSumberTes && (
                <p className="text-sm leading-relaxed text-ink-2">
                  <strong className="text-ink">Dari Enneagram-mu:</strong>{" "}
                  {ENNEA_TIPE[enneaUrut[0].tipe].tips}
                </p>
              )}
            </div>
          }
        />

        {/* ------------------------ 9. perspektif budaya ------------------------ */}
        <Seksi
          nomor="09"
          judul="Perspektif Budaya & Spiritual"
          aksen={<TierBadge tier="cultural_spiritual" />}
          anak={
            <div>
              <p className="mb-5 text-sm text-ink-3">
                Warisan budaya sebagai cermin refleksi — disajikan terpisah dan
                tidak menimpa hasil ilmiah di atas.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["Weton", `${weton.hari} ${weton.pasaran} · neptu ${weton.neptu}`, weton.lakuMakna],
                  ["Shio", `${shio.nama} ${shio.elemen} (${shio.yinYang})`, shio.kekuatan],
                  ["Zodiak", `${zodiak.nama} · ${zodiak.elemen}`, zodiak.kekuatan],
                  ["Life Path", `Angka ${numerologi.lifePath}`, MAKNA_ANGKA[numerologi.lifePath].arketipe],
                  ["Angka Kua", `${kua.angka} · Kelompok ${kua.grup}`, kua.karakter],
                  ["BaZi", `Day Master ${bazi.dayMaster.nama} (${bazi.dayMaster.elemen})`, bazi.dayMaster.arketipe],
                ].map(([judul, nilai, ket]) => (
                  <div key={judul} className="rounded-2xl border border-white/8 bg-white/4 p-4">
                    <p className="text-[11px] uppercase tracking-widest text-ink-3">{judul}</p>
                    <p className="font-display mt-1 text-sm font-bold">{nilai}</p>
                    <p className="mt-1 text-xs capitalize leading-relaxed text-ink-3">{ket}</p>
                  </div>
                ))}
              </div>
              {/* mini bar elemen bazi */}
              <div className="mt-4 flex items-center gap-2 text-xs text-ink-3">
                <span>Elemen dominan BaZi:</span>
                <span className="font-semibold text-ink-2">
                  {bazi.elemenKuat}
                </span>
                <span>· penyeimbang</span>
                <span className="font-semibold text-ink-2">
                  {bazi.elemenPenyeimbang}
                </span>
                <span className="text-ink-3/60">
                  ({Math.round((bazi.hitungElemen[bazi.elemenKuat] / maxElemen) * 100)}% intensitas)
                </span>
              </div>
              <p className="mt-4 text-right">
                <Link href="/hasil" className="text-xs text-aurora underline underline-offset-4">
                  Lihat cetak biru kelahiran lengkap →
                </Link>
              </p>
            </div>
          }
        />

        {/* ------------------------- 10. action plan 30 hari -------------------- */}
        <Seksi
          nomor="10"
          judul="Action Plan 30 Hari"
          anak={
            <ol className="space-y-4">
              {rencana.map((r, i) => (
                <li key={r} className="flex items-start gap-4">
                  <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-violet text-sm font-extrabold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-ink-2">{r}</p>
                </li>
              ))}
              {viaTop5 && (
                <li className="flex items-start gap-4">
                  <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-mint/40 bg-mint/10 text-sm font-extrabold text-mint">
                    ✦
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-ink-2">
                    <strong className="text-ink">Pakai kekuatan tanda tanganmu:</strong>{" "}
                    gunakan {viaTop5[0].info?.nama} dengan cara yang benar-benar
                    baru minggu ini — kebiasaan kecil yang paling menaikkan
                    kepuasan hidup.
                  </p>
                </li>
              )}
              <li className="flex items-start gap-4">
                <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-violet/40 bg-violet/10 text-sm font-extrabold text-aurora">
                  ★
                </span>
                <p className="pt-1 text-sm leading-relaxed text-ink-2">
                  <strong className="text-ink">Tantangan kekuatan khas:</strong>{" "}
                  {DIMENSI_INFO[dimTertinggi].singkat} adalah dimensi terkuatmu —
                  pakai secara sadar untuk satu proyek atau satu orang di
                  sekitarmu bulan ini.
                </p>
              </li>
            </ol>
          }
        />
      </div>

      {/* progres kelengkapan */}
      <Reveal className="mt-10">
        <div className="glass p-6 text-center text-sm text-ink-3">
          Makin banyak tes yang kamu selesaikan, makin tajam profil ini.{" "}
          <Link href="/tes" className="text-aurora underline underline-offset-4">
            Lihat tes yang belum kamu ambil →
          </Link>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-ink-3">
          Profil ini adalah cermin, bukan kotak. Manusia selalu lebih luas dari
          model mana pun — pakai insight ini sebagai titik mulai refleksi, bukan
          label akhir. Bukan alat diagnosis kesehatan mental.
        </p>
      </Reveal>
    </section>
  );
}
