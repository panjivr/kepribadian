"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";
import RadarChart from "@/components/RadarChart";
import { DIMENSI_INFO } from "@/lib/bigfive";
import { TIPE_16, prediksiMbtiDariBigFive } from "@/lib/mbti";
import {
  actionPlan,
  areaPertumbuhan,
  arketipeHeadline,
  indikasiDisc,
  indikasiEnneagram,
  narasiDimensi,
  rekomendasiKarier,
} from "@/lib/profil";
import {
  hitungKua,
  hitungNumerologi,
  hitungShio,
  hitungWeton,
  hitungZodiak,
  MAKNA_ANGKA,
} from "@/lib/birth";
import { bacaBigFive, bacaMbti, bacaProfil } from "@/lib/storage";
import type {
  BigFiveDim,
  BigFiveResult,
  MbtiResult,
  UserProfile,
} from "@/lib/types";

const URUTAN_DIM: BigFiveDim[] = ["O", "C", "E", "A", "N"];

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

export default function ProfilTerpadu() {
  const [siap, setSiap] = useState(false);
  const [profil, setProfil] = useState<UserProfile | null>(null);
  const [bigFive, setBigFive] = useState<BigFiveResult | null>(null);
  const [mbti, setMbti] = useState<MbtiResult | null>(null);

  useEffect(() => {
    setProfil(bacaProfil());
    setBigFive(bacaBigFive());
    setMbti(bacaMbti());
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
            Profil Terpadu disintesis di atas fondasi ilmiah. Selesaikan tes
            Big Five (±7 menit) untuk membukanya — cetak biru kelahiranmu sudah
            siap menunggu di dalam.
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
  const disc = indikasiDisc(bigFive.persen);
  const ennea = indikasiEnneagram(bigFive.persen).slice(0, 2);
  const karier = rekomendasiKarier(bigFive, mbtiFinal);
  const tumbuh = areaPertumbuhan(bigFive, mbtiFinal);
  const rencana = actionPlan(bigFive);
  const headline = arketipeHeadline(bigFive.persen);
  const dimTertinggi = URUTAN_DIM.reduce((a, b) =>
    bigFive.persen[a] >= bigFive.persen[b] ? a : b
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
          {tipeInfo
            ? `${mbtiFinal.tipe} — ${tipeInfo.julukan}. `
            : ""}
          Disintesis dari Big Five (fondasi ilmiah), 16 tipe, indikasi DISC &
          Enneagram, plus perspektif budaya kelahiranmu.
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
                        (prediksi dari korelasi riset Big Five —{" "}
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
                  <strong className="text-ink">Indikasi Enneagram:</strong>{" "}
                  {ennea.map((e) => e.nama).join("  ·  ")}
                  <span className="block pt-1 text-xs text-ink-3">
                    Indikatif dari pola OCEAN-mu — bukan hasil tes Enneagram.
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

        {/* ------------------------ 2. gaya kerja & tim ------------------------ */}
        <Seksi
          nomor="02"
          judul="Gaya Kerja & Tim"
          aksen={<TierBadge tier="semi_scientific" />}
          anak={
            <div>
              <p className="mb-5 text-sm text-ink-3">
                Indikasi gaya DISC dari profil OCEAN-mu — urutan teratas adalah
                gaya paling alami bagimu.
              </p>
              <div className="space-y-4">
                {disc.map((d, i) => (
                  <div key={d.kode}>
                    <div className="flex items-baseline justify-between gap-3 text-sm">
                      <span className={i === 0 ? "font-bold text-ink" : "text-ink-2"}>
                        <span className="font-display mr-1.5 font-extrabold">{d.kode}</span>
                        {d.nama}
                      </span>
                      <span className="shrink-0 font-semibold text-ink-2">{d.skor}</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/8">
                      <div
                        className="bar-anim h-full rounded-full"
                        style={{
                          width: `${d.skor}%`,
                          background:
                            i === 0
                              ? "linear-gradient(90deg, #67e8f9, #3b82f6, #8b5cf6)"
                              : "rgba(255,255,255,0.22)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        {/* ------------------------ 3. rekomendasi karier ----------------------- */}
        <Seksi
          nomor="03"
          judul="Rekomendasi Karier"
          aksen={<TierBadge tier="scientific" />}
          anak={
            <div>
              <p className="mb-5 text-sm text-ink-3">
                Irisan arah karier dari semua sistem ilmiah & semi-ilmiah —
                yang muncul berulang kali paling layak kamu jelajahi.
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
                      <span className="ml-1.5 text-xs text-aurora">
                        ×{k.sumber}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          }
        />

        {/* ------------------------ 4. relasi & komunikasi ---------------------- */}
        <Seksi
          nomor="04"
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

        {/* ------------------------- 5. area pertumbuhan ------------------------ */}
        <Seksi
          nomor="05"
          judul="Area Pertumbuhan"
          anak={
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
          }
        />

        {/* ------------------------ 6. perspektif budaya ------------------------ */}
        <Seksi
          nomor="06"
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
                  ["Tahun Personal", `Angka ${numerologi.personalYear} (${numerologi.tahunBerjalan})`, MAKNA_ANGKA[numerologi.personalYear].tahunPersonal ?? MAKNA_ANGKA[numerologi.personalYear].arketipe],
                ].map(([judul, nilai, ket]) => (
                  <div key={judul} className="rounded-2xl border border-white/8 bg-white/4 p-4">
                    <p className="text-[11px] uppercase tracking-widest text-ink-3">{judul}</p>
                    <p className="font-display mt-1 text-sm font-bold">{nilai}</p>
                    <p className="mt-1 text-xs capitalize leading-relaxed text-ink-3">{ket}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-right">
                <Link href="/hasil" className="text-xs text-aurora underline underline-offset-4">
                  Lihat cetak biru kelahiran lengkap →
                </Link>
              </p>
            </div>
          }
        />

        {/* ------------------------- 7. action plan 30 hari --------------------- */}
        <Seksi
          nomor="07"
          judul="Action Plan 30 Hari"
          anak={
            <div>
              <ol className="space-y-4">
                {rencana.map((r, i) => (
                  <li key={r} className="flex items-start gap-4">
                    <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-violet text-sm font-extrabold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-ink-2">{r}</p>
                  </li>
                ))}
                <li className="flex items-start gap-4">
                  <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-violet/40 bg-violet/10 text-sm font-extrabold text-aurora">
                    ★
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-ink-2">
                    <strong className="text-ink">Tantangan kekuatan khas:</strong>{" "}
                    {DIMENSI_INFO[dimTertinggi].singkat} adalah dimensi
                    terkuatmu — pakai secara sadar untuk satu proyek atau satu
                    orang di sekitarmu bulan ini.
                  </p>
                </li>
              </ol>
            </div>
          }
        />
      </div>

      {/* ------------------------------- penutup ------------------------------- */}
      <Reveal className="mt-12">
        <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-ink-3">
          Profil ini adalah cermin, bukan kotak. Manusia selalu lebih luas dari
          model mana pun — pakai insight ini sebagai titik mulai refleksi,
          bukan label akhir. Bukan alat diagnosis kesehatan mental.
        </p>
      </Reveal>
    </section>
  );
}
