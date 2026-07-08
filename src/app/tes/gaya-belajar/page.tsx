"use client";

import Link from "next/link";
import HalamanTes from "@/components/HalamanTes";
import BarSkor from "@/components/BarSkor";
import { skorPilihan } from "@/lib/skoring";
import { VAK_INFO, VAK_ITEMS, type VakDim } from "@/data/tes/gayaBelajar";

interface VakSkor {
  urut: { nilai: VakDim; jumlah: number; persen: number }[];
}

const NAMA_PENUH: Record<VakDim, string> = {
  V: "Visual",
  A: "Auditori",
  K: "Kinestetik",
};

function Hasil({ skor }: { skor: VakSkor }) {
  // pastikan ketiga dimensi tampil walau 0
  const lengkap: { nilai: VakDim; jumlah: number; persen: number }[] = (
    ["V", "A", "K"] as VakDim[]
  ).map(
    (d) =>
      skor.urut.find((u) => u.nilai === d) ?? { nilai: d, jumlah: 0, persen: 0 }
  );
  lengkap.sort((a, b) => b.jumlah - a.jumlah);
  const primer = lengkap[0];
  const info = VAK_INFO[primer.nilai];
  const kombinasi = lengkap[0].jumlah - lengkap[1].jumlah <= 1;

  return (
    <div>
      <div className="text-center">
        <p className="kicker mb-3">Hasil · Gaya Belajar VAK</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
          Kamu belajar paling baik secara{" "}
          <span className="text-aurora">{NAMA_PENUH[primer.nilai]}</span>
          {kombinasi ? `-${NAMA_PENUH[lengkap[1].nilai]}` : ""}.
        </h1>
      </div>

      <div className="glass glass-hairline mt-10 space-y-4 p-7 md:p-10">
        {lengkap.map((u, i) => (
          <BarSkor
            key={u.nilai}
            label={`${NAMA_PENUH[u.nilai]}`}
            nilaiTeks={`${u.persen}% · ${u.jumlah} pilihan`}
            persen={u.persen}
            aktif={i === 0 || (kombinasi && i === 1)}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="glass glass-hairline p-7">
          <p className="kicker !text-[10px]">Ciri Khasmu</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-2">
            {info.ciri.map((c) => (
              <li key={c} className="flex items-start gap-2.5">
                <span className="mt-0.5 text-cyan">◆</span> {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass glass-hairline p-7">
          <p className="kicker !text-[10px]">Strategi Belajar Terbaik</p>
          <ul className="mt-3 space-y-2 text-sm text-ink-2">
            {info.strategi.map((s) => (
              <li key={s} className="flex items-start gap-2.5">
                <span className="mt-0.5 text-mint">✓</span> {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-2xl rounded-2xl border border-amber/20 bg-amber/8 px-5 py-4 text-center text-xs leading-relaxed text-ink-2">
        <strong className="text-amber">Penting & jujur:</strong> riset modern
        menunjukkan mencocokkan metode mengajar dengan “gaya belajar” TIDAK
        terbukti meningkatkan hasil belajar secara signifikan. Anggap ini
        preferensi yang kamu nikmati, bukan takdir. Belajar terbaik untuk siapa
        pun adalah multimodal — gabungkan melihat, mendengar, dan mempraktikkan.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/profil" className="btn-primary">
          Buka Profil Terpadumu
          <span aria-hidden>→</span>
        </Link>
        <Link href="/tes" className="btn-ghost">
          Semua Tes
        </Link>
      </div>
    </div>
  );
}

export default function TesGayaBelajar() {
  return (
    <HalamanTes<VakSkor>
      sistemId="vak"
      tier="semi_scientific"
      judul={
        <>
          Gaya <span className="text-aurora">Belajar</span> VAK
        </>
      }
      deskripsi="Visual, Auditori, atau Kinestetik — cara mana yang paling kamu nikmati saat menyerap hal baru? 15 pilihan situasi sehari-hari."
      bullets={[
        "15 skenario nyata, pilih yang paling kamu banget",
        "Preferensi, bukan batasan",
        "Cepat — sekitar 3 menit",
      ]}
      catatan="Perhatikan catatan ilmiah pada hasil: 'matching' gaya belajar bukan jaminan hasil lebih baik."
      mode="pilihan"
      items={VAK_ITEMS}
      hitung={(jawaban) => ({
        urut: skorPilihan(jawaban) as VakSkor["urut"],
      })}
      Hasil={Hasil}
    />
  );
}
