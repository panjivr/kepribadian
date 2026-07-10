"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import BarSkor from "@/components/BarSkor";
import RadarChart from "@/components/RadarChart";
import PenjelasanMetode from "@/components/PenjelasanMetode";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import {
  NILAI_INFO,
  NILAI_ITEMS,
  ORIENTASI_INFO,
  ORIENTASI_URUTAN,
  type NilaiDim,
  type OrientasiId,
} from "@/data/tes/values";
import { VALUES_DOK } from "@/data/dok/values";

function Hasil({ skor }: { skor: SkorDimensi }) {
  const p = skor.persen as Record<NilaiDim, number>;
  const urut = skor.urut as { dim: NilaiDim; raw: number; persen: number }[];
  const top3 = urut.slice(0, 3);

  const orientasi = ORIENTASI_URUTAN.map((id) => {
    const anggota = ORIENTASI_INFO[id].anggota;
    const nilai = Math.round(anggota.reduce((s, d) => s + p[d], 0) / anggota.length);
    return { id, nilai };
  });
  const orientasiUrut = [...orientasi].sort((a, b) => b.nilai - a.nilai);
  const dominan = ORIENTASI_INFO[orientasiUrut[0].id];

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Nilai Hidup (Schwartz)</p>
        <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl" style={{ color: dominan.warna }}>
          {dominan.nama}
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-2">
          Orientasi hidup yang paling menonjol bagimu. {dominan.deskripsi}
        </p>
        <p className="mt-3 text-xs text-ink-3">
          Nilai teratasmu: <strong className="text-ink-2">{top3.map((t) => NILAI_INFO[t.dim].nama).join(" · ")}</strong>
        </p>
      </div>

      <div className="mt-10 grid items-center gap-6 md:grid-cols-2">
        <div className="glass glass-hairline flex justify-center p-6">
          <RadarChart
            nilai={orientasi.map((o) => o.nilai)}
            label={["Keterbukaan", "Peningkatan", "Pelestarian", "Transendensi"]}
            size={320}
          />
        </div>
        <div className="glass glass-hairline space-y-3 p-6">
          <p className="kicker !text-[10px]">4 Orientasi Hidup</p>
          {orientasiUrut.map((o) => (
            <div key={o.id}>
              <BarSkor
                label={ORIENTASI_INFO[o.id].nama}
                nilaiTeks={`${o.nilai}%`}
                persen={o.nilai}
                aktif={o.id === orientasiUrut[0].id}
              />
              <p className="mt-1 text-xs leading-relaxed text-ink-3">
                Lawan: {ORIENTASI_INFO[o.id].lawan}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass glass-hairline mt-6 space-y-4 p-7 md:p-10">
        <p className="kicker !text-[10px]">Peringkat 10 Nilai Dasarmu</p>
        {urut.map((u, i) => (
          <div key={u.dim}>
            <BarSkor
              label={NILAI_INFO[u.dim].nama}
              nilaiTeks={`${Math.round(u.persen)}%`}
              persen={u.persen}
              aktif={i < 3}
            />
            <p className="mt-1 text-xs leading-relaxed text-ink-3">{NILAI_INFO[u.dim].deskripsi}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-ink-3">
        Yang paling bermakna adalah profil relatif — nilai mana yang kamu
        dahulukan saat harus memilih. Tak ada nilai yang lebih baik dari yang
        lain; keputusan yang selaras dengan nilai intimu terasa lebih bermakna.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/profil" className="btn-primary">Buka Profil Terpadumu<span aria-hidden>→</span></Link>
        <Link href="/tes" className="btn-ghost">Semua Tes</Link>
      </div>

      <PenjelasanMetode nama="Nilai Hidup (Schwartz)" data={VALUES_DOK} />
    </div>
  );
}

export default function TesNilai() {
  return (
    <HalamanTes
      sistemId="values"
      tier="scientific"
      judul={<>Nilai <span className="text-aurora">Hidup</span></>}
      deskripsi="Apa prinsip yang paling memandu hidupmu? Teori Schwartz memetakan 10 nilai universal lintas budaya — dari kemandirian & petualangan hingga tradisi & kepedulian pada sesama — dalam 4 orientasi hidup. 20 pernyataan, skala 1–5."
      bullets={[
        "10 nilai dasar Schwartz + 4 orientasi hidup",
        "Radar orientasi + peringkat nilai intimu",
        "Tiap pernyataan ada contoh agar tak salah tafsir",
      ]}
      catatan="Tak ada nilai yang lebih baik dari yang lain. Yang penting profil relatif — prioritasmu. Ini refleksi, bukan vonis."
      mode="likert"
      items={NILAI_ITEMS}
      hitung={(jawaban) => skorLikert(NILAI_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
