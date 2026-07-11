"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { bacaBigFive, bacaHasilSistem } from "@/lib/storage";
import type { SkorDimensi } from "@/lib/skoring";
import { klasifikasiGaya } from "@/data/tes/attachment";
import {
  KATEGORI_TUMBUH,
  cariBuku,
  cariChannel,
  type KategoriTumbuh,
  type Sumber,
} from "@/data/tumbuh";

/** Tentukan area pertumbuhan yang paling relevan dari hasil tes yang ada. */
function areaDisarankan(): string[] {
  const set = new Set<string>();
  try {
    const bf = bacaBigFive();
    if (bf) {
      const p = bf.persen;
      if (p.E <= 45) set.add("komunikasi");
      if (p.N >= 56) {
        set.add("emosi");
        set.add("percayadiri");
      }
      if (p.C <= 45) {
        set.add("produktivitas");
        set.add("fokus");
      }
      if (p.O <= 45) set.add("kreativitas");
      if (p.A <= 45) set.add("empati");
      if (p.E >= 60) set.add("kepemimpinan");
    }

    const gm = bacaHasilSistem<SkorDimensi>("growth_mindset");
    if (gm && (gm.skor.persen.growth ?? 100) < 55) set.add("polapikir");

    const grit = bacaHasilSistem<SkorDimensi>("grit");
    if (grit) {
      const t = ((grit.skor.persen.konsistensi ?? 0) + (grit.skor.persen.ketekunan ?? 0)) / 2;
      if (t < 55) {
        set.add("produktivitas");
        set.add("polapikir");
      }
    }

    const eq = bacaHasilSistem<SkorDimensi>("eq");
    if (eq) {
      const dims = ["kesadaran_diri", "regulasi_diri", "motivasi", "empati", "keterampilan_sosial"];
      const avg = dims.reduce((a, d) => a + (eq.skor.persen[d] ?? 0), 0) / dims.length;
      if (avg < 62) set.add("emosi");
    }

    const att = bacaHasilSistem<SkorDimensi>("attachment");
    if (att) {
      const g = klasifikasiGaya(att.skor.persen.cemas ?? 0, att.skor.persen.hindar ?? 0);
      if (g !== "aman") set.add("relasi");
    }

    const conflict = bacaHasilSistem<SkorDimensi>("conflict_style");
    if (conflict) {
      const top = conflict.skor.urut?.[0]?.dim;
      if (top === "menghindar" || top === "mengakomodasi") set.add("komunikasi");
    }
  } catch {
    /* abaikan — tampilkan default */
  }

  if (set.size === 0) ["polapikir", "produktivitas", "komunikasi", "emosi"].forEach((x) => set.add(x));
  return [...set];
}

function Bendera({ bahasa }: { bahasa: "ID" | "EN" }) {
  return (
    <span
      className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold ${
        bahasa === "ID" ? "bg-mint/15 text-mint" : "bg-blue/15 text-blue"
      }`}
    >
      {bahasa === "ID" ? "🇮🇩 ID" : "🌍 EN"}
    </span>
  );
}

function KartuSumber({ s, href }: { s: Sumber; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.03] p-3.5 transition-colors hover:border-violet/40 hover:bg-white/[0.06]"
    >
      <div>
        <p className="text-sm font-semibold text-ink group-hover:text-aurora">{s.judul}</p>
        {s.oleh && <p className="text-xs text-ink-3">{s.oleh}</p>}
        {s.catatan && <p className="mt-1 text-xs leading-relaxed text-ink-2">{s.catatan}</p>}
      </div>
      <Bendera bahasa={s.bahasa} />
    </a>
  );
}

function KartuKategori({ k, sorot }: { k: KategoriTumbuh; sorot?: boolean }) {
  return (
    <section
      id={k.id}
      className={`glass glass-hairline scroll-mt-24 p-6 md:p-8 ${
        sorot ? "border-violet/30" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl" aria-hidden>
          {k.ikon}
        </span>
        <div>
          <h2 className="font-display text-lg font-extrabold tracking-tight md:text-xl">{k.nama}</h2>
          <p className="mt-1 text-sm leading-relaxed text-ink-2">{k.deskripsi}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <p className="kicker !text-[10px] mb-3">📚 Buku Rekomendasi</p>
          <div className="space-y-2.5">
            {k.buku.map((b) => (
              <KartuSumber key={b.judul} s={b} href={cariBuku(b)} />
            ))}
          </div>
        </div>
        <div>
          <p className="kicker !text-[10px] mb-3">▶️ Channel YouTube</p>
          <div className="space-y-2.5">
            {k.channel.map((c) => (
              <KartuSumber key={c.judul} s={c} href={cariChannel(c)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HalamanTumbuh() {
  const [siap, setSiap] = useState(false);
  const [disarankan, setDisarankan] = useState<string[]>([]);

  useEffect(() => {
    setDisarankan(areaDisarankan());
    setSiap(true);
  }, []);

  const { sorot, lainnya } = useMemo(() => {
    const set = new Set(disarankan);
    const sorot = KATEGORI_TUMBUH.filter((k) => set.has(k.id));
    const lainnya = KATEGORI_TUMBUH.filter((k) => !set.has(k.id));
    return { sorot, lainnya };
  }, [disarankan]);

  return (
    <section className="mx-auto max-w-5xl px-5 pb-24 pt-32 md:px-8">
      <div className="text-center">
        <p className="kicker mb-4">Tumbuh · Buku & Channel</p>
        <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
          Bahan bakar untuk <span className="text-aurora">bertumbuh.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-2 md:text-base">
          Buku (Indonesia & internasional) dan channel YouTube (lokal & luar
          negeri) pilihan, dipetakan ke area pertumbuhanmu. Makin banyak tes yang
          kamu selesaikan, makin pas rekomendasinya.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/profil" className="btn-ghost text-sm">
            Lihat Profil
          </Link>
          <Link href="/tes" className="btn-ghost text-sm">
            Ikuti Tes Lain
          </Link>
        </div>
      </div>

      {siap && sorot.length > 0 && (
        <div className="mt-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
            <p className="kicker !text-[11px] text-aurora">✨ Direkomendasikan untukmu</p>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
          </div>
          <div className="space-y-6">
            {sorot.map((k) => (
              <KartuKategori key={k.id} k={k} sorot />
            ))}
          </div>
        </div>
      )}

      <div className="mt-14">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
          <p className="kicker !text-[11px]">Semua Area Pertumbuhan</p>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
        </div>
        <div className="space-y-6">
          {(siap ? lainnya : KATEGORI_TUMBUH).map((k) => (
            <KartuKategori key={k.id} k={k} />
          ))}
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-ink-3">
        Tautan buku membuka pencarian Google; tautan channel membuka pencarian
        YouTube — jadi selalu mengarah ke sumber terbaru. Djiva tidak berafiliasi
        dengan penulis maupun kreator mana pun.
      </p>
    </section>
  );
}
