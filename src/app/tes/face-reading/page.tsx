"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";

const AREA = [
  { area: "Dahi", usia: "15–30 tahun", makna: "Dahi lebar & tinggi dikaitkan dengan kapasitas berpikir dan keberuntungan awal karier." },
  { area: "Alis", usia: "—", makna: "Alis tebal & rapi melambangkan energi relasi persaudaraan dan temperamen; alis tipis dikaitkan dengan sikap perhitungan dan hati-hati." },
  { area: "Mata", usia: "35–40 tahun", makna: "Mata besar dianggap ekspresif dan terbuka; mata tajam kecil dikaitkan dengan sikap observan dan strategis." },
  { area: "Hidung", usia: "41–50 tahun", makna: "Hidung besar & lurus secara tradisional menjadi simbol rezeki dan kepercayaan diri." },
  { area: "Bibir & Dagu", usia: "51–75 tahun", makna: "Bibir tebal dikaitkan dengan kehangatan dan kenikmatan hidup; dagu kuat dengan daya tahan di masa tua." },
];

export default function FaceReading() {
  return (
    <section className="mx-auto max-w-3xl px-5 pb-20 pt-32 md:px-8">
      <Reveal className="text-center">
        <div className="mb-4 flex justify-center">
          <TierBadge tier="pseudoscience" />
        </div>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          <span className="text-aurora">Face Reading</span> — Mian Xiang
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink-2">
          Physiognomy Tiongkok (mian xiang) memetakan wajah menjadi zona-zona
          kehidupan. Kami sajikan sebagai wawasan budaya untuk dibaca — bukan
          alat penilaian.
        </p>
        <div className="mx-auto mt-4 max-w-lg rounded-2xl border border-amber/20 bg-amber/8 px-4 py-3 text-xs leading-relaxed text-ink-2">
          <p>
            <strong className="text-amber">Tidak ilmiah & sensitif secara etika.</strong>{" "}
            Secara historis, membaca wajah pernah disalahgunakan untuk
            diskriminasi. Karena itu JIVA{" "}
            <strong className="text-ink">tidak pernah</strong> meminta atau
            menganalisis foto wajahmu. Halaman ini murni artikel edukasi.
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 space-y-4">
          {AREA.map((a) => (
            <div key={a.area} className="glass p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg font-bold">{a.area}</h3>
                {a.usia !== "—" && (
                  <span className="shrink-0 text-xs text-ink-3">
                    zona usia {a.usia}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{a.makna}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <p className="mx-auto mt-8 max-w-xl text-center text-xs italic leading-relaxed text-ink-3">
        Tradisi ini menarik sebagai warisan budaya dan filsafat, tetapi wajah
        seseorang tidak menentukan nasib atau karakternya. Perlakukan sebagai
        cerita, bukan cermin.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link href="/tes" className="btn-primary">
          Kembali ke Semua Tes
          <span aria-hidden>→</span>
        </Link>
        <Link href="/profil" className="btn-ghost">
          Profil Terpadu
        </Link>
      </div>
    </section>
  );
}
