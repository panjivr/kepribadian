"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import BarSkor from "@/components/BarSkor";
import PenjelasanMetode from "@/components/PenjelasanMetode";
import { skorLikert, type SkorDimensi } from "@/lib/skoring";
import { KONFLIK_INFO, KONFLIK_ITEMS, type KonflikDim } from "@/data/tes/conflict";
import { CONFLICT_DOK } from "@/data/dok/conflict";

function Hasil({ skor }: { skor: SkorDimensi }) {
  const urut = skor.urut as { dim: KonflikDim; raw: number; persen: number }[];
  const primer = urut[0].dim;
  const infoP = KONFLIK_INFO[primer];

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Gaya Menghadapi Konflik</p>
        <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl" style={{ color: infoP.warna }}>
          {infoP.nama}
        </h1>
        <p className="font-display mt-2 text-sm font-semibold text-ink-2">{infoP.sumbu}</p>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-2">{infoP.deskripsi}</p>
      </div>

      <div className="glass glass-hairline mt-10 space-y-4 p-7 md:p-10">
        {urut.map((u, i) => (
          <div key={u.dim}>
            <BarSkor
              label={KONFLIK_INFO[u.dim].nama}
              nilaiTeks={`${Math.round(u.persen)}%`}
              persen={u.persen}
              aktif={i === 0}
            />
            <p className="mt-1 text-xs leading-relaxed text-ink-3">{KONFLIK_INFO[u.dim].sumbu}</p>
          </div>
        ))}
      </div>

      <div className="glass glass-hairline mt-6 border-violet/20 p-6">
        <p className="kicker !text-[10px]">Kapan Gaya Utamamu Paling Cocok</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-2">{infoP.cocok}</p>
      </div>

      <div className="glass glass-hairline mt-6 p-6">
        <p className="kicker !text-[10px]">Peta Kelima Gaya</p>
        <ul className="mt-3 space-y-2.5 text-sm text-ink-2">
          {(Object.keys(KONFLIK_INFO) as KonflikDim[]).map((d) => (
            <li key={d} className="flex items-start gap-2.5">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" style={{ background: KONFLIK_INFO[d].warna }} />
              <span>
                <strong className="text-ink">{KONFLIK_INFO[d].nama}</strong> — {KONFLIK_INFO[d].cocok}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-ink-3">
        Tidak ada gaya yang paling benar. Orang yang matang dalam konflik luwes
        memilih gaya sesuai situasi — bukan terkunci pada satu cara.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/profil" className="btn-primary">Buka Profil Terpadumu<span aria-hidden>→</span></Link>
        <Link href="/tes" className="btn-ghost">Semua Tes</Link>
      </div>

      <PenjelasanMetode nama="Gaya Menghadapi Konflik" data={CONFLICT_DOK} />
    </div>
  );
}

export default function TesGayaKonflik() {
  return (
    <HalamanTes
      sistemId="conflict_style"
      tier="semi_scientific"
      judul={<>Gaya Menghadapi <span className="text-aurora">Konflik</span></>}
      deskripsi="Saat berselisih, gaya apa yang alami bagimu? Model Thomas-Kilmann memetakan 5 gaya di dua sumbu: ketegasan (kepentingan sendiri) & kerja sama (kepentingan orang lain). 20 pernyataan, skala 1–5."
      bullets={[
        "5 gaya: bersaing, kolaborasi, kompromi, menghindar, mengakomodasi",
        "Peringkat gaya + kapan tiap gaya paling cocok",
        "Tiap pernyataan ada contoh agar tak salah tafsir",
      ]}
      catatan="Tidak ada gaya 'terbaik'. Gaya nyata bisa berbeda tergantung situasi & lawan. Ini refleksi, bukan vonis."
      mode="likert"
      items={KONFLIK_ITEMS}
      hitung={(jawaban) => skorLikert(KONFLIK_ITEMS, jawaban)}
      Hasil={Hasil}
    />
  );
}
