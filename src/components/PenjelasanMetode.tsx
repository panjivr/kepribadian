import type { ReactNode } from "react";

export interface DokMetode {
  /** ringkasan 1–2 kalimat untuk pembuka */
  ringkasan: string;
  sejarah: string;
  pencipta: string;
  tujuan: string;
  /** dasar ilmiah atau filosofi */
  dasar: string;
  /** latar belakang budaya (opsional) */
  budaya?: string;
  caraKerja: string;
  caraSkor?: string;
  kelebihan: string[];
  kekurangan: string[];
  /** kritik ilmiah */
  kritik: string;
  /** validitas & reliabilitas */
  validitas: string;
  kapanCocok: string[];
  kapanKurang: string[];
  studiKasus?: string;
  faq: { t: string; j: string }[];
  referensi: string[];
}

function Seksi({ judul, children }: { judul: string; children: ReactNode }) {
  return (
    <details className="group border-b border-white/8 last:border-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-left">
        <span className="font-display text-base font-bold tracking-tight md:text-lg">
          {judul}
        </span>
        <span className="shrink-0 text-ink-3 transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="pb-5 text-sm leading-relaxed text-ink-2">{children}</div>
    </details>
  );
}

function Daftar({ isi }: { isi: string[] }) {
  return (
    <ul className="space-y-2">
      {isi.map((x) => (
        <li key={x} className="flex items-start gap-2.5">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet" />
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Dokumentasi mendalam sebuah metode — dirender sebagai akordeon agar ringkas
 * namun lengkap. Tujuan: siapa pun paham tanpa perlu bertanya.
 */
export default function PenjelasanMetode({
  nama,
  data,
}: {
  nama: string;
  data: DokMetode;
}) {
  return (
    <div className="glass glass-hairline mt-10 p-7 md:p-9">
      <p className="kicker mb-2">Pahami Metodenya</p>
      <h2 className="font-display text-2xl font-extrabold tracking-tight">
        Semua yang perlu kamu tahu tentang {nama}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-2">{data.ringkasan}</p>

      <div className="mt-5">
        <Seksi judul="Sejarah & Asal-usul">
          <p>{data.sejarah}</p>
        </Seksi>
        <Seksi judul="Pencipta Metode">
          <p>{data.pencipta}</p>
        </Seksi>
        <Seksi judul="Tujuan Dibuat">
          <p>{data.tujuan}</p>
        </Seksi>
        <Seksi judul="Dasar Ilmiah / Filosofi">
          <p>{data.dasar}</p>
        </Seksi>
        {data.budaya && (
          <Seksi judul="Latar Belakang Budaya">
            <p>{data.budaya}</p>
          </Seksi>
        )}
        <Seksi judul="Cara Kerja">
          <p>{data.caraKerja}</p>
        </Seksi>
        {data.caraSkor && (
          <Seksi judul="Cara Perhitungan & Munculnya Hasil">
            <p>{data.caraSkor}</p>
          </Seksi>
        )}
        <Seksi judul="Kelebihan">
          <Daftar isi={data.kelebihan} />
        </Seksi>
        <Seksi judul="Kekurangan">
          <Daftar isi={data.kekurangan} />
        </Seksi>
        <Seksi judul="Kritik Ilmiah">
          <p>{data.kritik}</p>
        </Seksi>
        <Seksi judul="Validitas & Reliabilitas">
          <p>{data.validitas}</p>
        </Seksi>
        <Seksi judul="Kapan Cocok Digunakan">
          <Daftar isi={data.kapanCocok} />
        </Seksi>
        <Seksi judul="Kapan Kurang Cocok">
          <Daftar isi={data.kapanKurang} />
        </Seksi>
        {data.studiKasus && (
          <Seksi judul="Studi Kasus / Contoh Nyata">
            <p>{data.studiKasus}</p>
          </Seksi>
        )}
        <Seksi judul="Pertanyaan yang Sering Diajukan (FAQ)">
          <div className="space-y-4">
            {data.faq.map((f) => (
              <div key={f.t}>
                <p className="font-semibold text-ink">{f.t}</p>
                <p className="mt-1">{f.j}</p>
              </div>
            ))}
          </div>
        </Seksi>
        <Seksi judul="Referensi">
          <ul className="space-y-1.5">
            {data.referensi.map((r) => (
              <li key={r} className="text-xs text-ink-3">
                • {r}
              </li>
            ))}
          </ul>
        </Seksi>
      </div>
    </div>
  );
}
