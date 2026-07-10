"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import RadarChart from "@/components/RadarChart";
import BarSkor from "@/components/BarSkor";
import PenjelasanMetode from "@/components/PenjelasanMetode";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import {
  RIASEC_INFO,
  RIASEC_ITEMS,
  RIASEC_URUTAN,
  kodeHolland,
  type RiasecDim,
} from "@/data/tes/riasec";
import { RIASEC_DOK } from "@/data/dok/riasec";
import { rumpunTerbaik } from "@/data/jurusan";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2">
      {children}
    </span>
  );
}

function Hasil({ skor }: { skor: SkorDimensi }) {
  const urut = skor.urut as { dim: RiasecDim; raw: number; persen: number }[];
  const kode = kodeHolland(urut);
  const top3 = urut.slice(0, 3);
  const rumpun = rumpunTerbaik(kode, 5);

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Minat Karier (RIASEC)</p>
        <h1 className="font-display text-6xl font-extrabold tracking-tight text-aurora md:text-7xl">
          {kode}
        </h1>
        <p className="font-display mt-2 text-lg font-bold md:text-xl">
          {top3.map((u) => RIASEC_INFO[u.dim].julukan).join(" · ")}
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm text-ink-2">
          Kode Holland-mu adalah tiga huruf di atas. Inilah peta minat yang bisa
          menuntunmu memilih jurusan & karier yang terasa “nyambung”.
        </p>
      </div>

      <div className="glass glass-hairline mt-10 grid items-center gap-8 p-7 md:grid-cols-[1fr_1.2fr] md:p-10">
        <div className="flex justify-center">
          <RadarChart
            nilai={RIASEC_URUTAN.map((d) => skor.persen[d])}
            label={RIASEC_URUTAN.map((d) => d)}
          />
        </div>
        <div className="space-y-3.5">
          {urut.map((u, i) => (
            <BarSkor
              key={u.dim}
              label={`${u.dim} — ${RIASEC_INFO[u.dim].nama.split(" (")[0]}`}
              nilaiTeks={`${Math.round(u.persen)}%`}
              persen={u.persen}
              aktif={i < 3}
            />
          ))}
        </div>
      </div>

      {/* Tiga minat teratas */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {top3.map((u) => {
          const info = RIASEC_INFO[u.dim];
          return (
            <div key={u.dim} className="glass p-6" style={{ borderColor: `${info.warna}44` }}>
              <div className="flex items-baseline justify-between">
                <span className="font-display text-3xl font-extrabold" style={{ color: info.warna }}>
                  {u.dim}
                </span>
                <span className="text-sm font-bold text-ink-2">{Math.round(u.persen)}%</span>
              </div>
              <h3 className="font-display mt-1 text-base font-bold">{info.julukan}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-3">{info.deskripsi}</p>
            </div>
          );
        })}
      </div>

      {/* ===================== SMA → KULIAH: rumpun jurusan ==================== */}
      <div className="mt-12">
        <div className="text-center">
          <p className="kicker mb-3">SMA → Kuliah</p>
          <h2 className="font-display text-balance text-2xl font-extrabold tracking-tight md:text-3xl">
            Rumpun jurusan yang <span className="text-aurora">paling cocok untukmu</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink-2">
            Dicocokkan dari kode Holland-mu ({kode}). Untuk tiap rumpun: contoh
            prodi, mata kuliah inti, prospek karier (output), dan contoh kampus.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {rumpun.map((r, i) => (
            <div key={r.id} className="glass glass-hairline p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden>{r.emoji}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-extrabold tracking-tight">
                      {i + 1}. {r.nama}
                    </h3>
                    <Chip>Kode {r.kode}</Chip>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{r.deskripsi}</p>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="kicker !text-[10px] mb-1.5">Contoh Prodi</p>
                      <div className="flex flex-wrap gap-1.5">
                        {r.contohProdi.map((p) => <Chip key={p}>{p}</Chip>)}
                      </div>
                    </div>
                    <div>
                      <p className="kicker !text-[10px] mb-1.5">Mata Kuliah Inti</p>
                      <div className="flex flex-wrap gap-1.5">
                        {r.matkulInti.map((m) => <Chip key={m}>{m}</Chip>)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="kicker !text-[10px] mb-1.5">Prospek Karier (Output)</p>
                    <ul className="grid gap-1.5 text-sm text-ink-2 sm:grid-cols-2">
                      {r.prospek.map((p) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-0.5 text-mint">→</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="kicker !text-[10px] mb-1.5">Contoh Kampus</p>
                    <div className="flex flex-wrap gap-2">
                      {r.kampus.map((k) => (
                        <span
                          key={k.nama}
                          className="rounded-xl border border-white/8 bg-white/4 px-3 py-1.5 text-xs text-ink-2"
                        >
                          <span className="text-ink">{k.nama}</span>
                          <span className="text-ink-3"> · {k.kota} · {k.jenis}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {r.catatan && (
                    <p className="mt-3 rounded-xl border border-cyan/20 bg-cyan/8 px-3 py-2 text-xs leading-relaxed text-ink-2">
                      💡 {r.catatan}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-ink-3">
          Daftar kampus adalah <strong className="text-ink-2">contoh</strong>{" "}
          program yang dikenal kuat/populer — bukan peringkat resmi & bukan
          daftar lengkap. Selalu cek akreditasi, kurikulum, biaya, dan jalur
          masuk terbaru di situs resmi kampus. Padukan hasil ini dengan nilai
          rapor, kondisi keuanganmu, dan diskusi bersama guru BK & orang tua.
        </p>
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

      <PenjelasanMetode nama="RIASEC (Holland Codes)" data={RIASEC_DOK} />
    </div>
  );
}

export default function TesMinatKarier() {
  return (
    <HalamanTes
      sistemId="riasec"
      tier="scientific"
      judul={
        <>
          Minat Karier <span className="text-aurora">& Jurusan</span>
        </>
      }
      deskripsi="Tes RIASEC (Holland Codes) — memetakan minatmu ke enam tipe, lalu merekomendasikan rumpun jurusan kuliah + prospek karier + contoh kampus. Sangat berguna untuk anak SMA/SMK yang memilih kuliah. 36 pernyataan, skala 1–5."
      bullets={[
        "6 tipe minat → kode Holland (mis. SIA)",
        "Peta SMA → Kuliah: jurusan, mata kuliah, prospek, & kampus",
        "Tiap pernyataan ada analogi agar tak salah tafsir",
      ]}
      catatan="Kerangka RIASEC dari John Holland, banyak dipakai bimbingan karier dunia. Ini kompas arah, bukan vonis — padukan dengan nilai rapor & realita."
      mode="likert"
      items={RIASEC_ITEMS}
      hitung={(jawaban) => skorLikert(RIASEC_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
