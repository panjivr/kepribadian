/**
 * Ringkasan hasil semua tes — sumber tunggal kebenaran untuk Dashboard Profil
 * & generator CV. Membaca localStorage (via storage.ts) dan mengembalikan
 * ringkasan pendek & manusiawi per sistem. Semua perhitungan di perangkat.
 */
import type { Tier } from "@/lib/types";
import type { UserProfile, BigFiveDim } from "@/lib/types";
import type { SkorDimensi } from "@/lib/skoring";
import {
  bacaBigFive,
  bacaMbti,
  bacaHasilSistem,
  type SistemId,
} from "@/lib/storage";
import { SEMUA_SISTEM } from "@/data/sistem-list";
import { DIMENSI_INFO } from "@/lib/bigfive";
import { TIPE_16 } from "@/lib/mbti";
import { arketipeHeadline, eysenckDariBigFive } from "@/lib/profil";
import {
  hitungWeton,
  hitungShio,
  hitungZodiak,
  hitungNumerologi,
  hitungKua,
  MAKNA_ANGKA,
} from "@/lib/birth";
import { hitungBazi } from "@/lib/bazi";
import { VIA_KEKUATAN } from "@/data/tes/via";
import { MI_INFO } from "@/data/tes/kecerdasan";
import { DISC_INFO } from "@/data/tes/disc";
import { ENNEA_TIPE } from "@/data/tes/enneagram";
import { TEMPERAMEN_INFO } from "@/data/tes/temperamen";
import { MORAL_INFO } from "@/data/tes/moral";
import { HBDI_INFO } from "@/data/tes/hbdi";
import { HEXACO_INFO } from "@/data/tes/hexaco";
import { WARNA_INFO } from "@/data/tes/warna";
import { TEMA_INFO } from "@/data/tes/peta-bakat";
import { RIASEC_INFO, kodeHolland } from "@/data/tes/riasec";
import { GAYA_INFO, klasifikasiGaya } from "@/data/tes/attachment";
import { BK_INFO } from "@/data/tes/love-language";
import { bandGrit } from "@/data/tes/grit";
import { bandMindset } from "@/data/tes/mindset";
import { KONFLIK_INFO } from "@/data/tes/conflict";
import { NILAI_INFO, ORIENTASI_INFO, ORIENTASI_URUTAN } from "@/data/tes/values";
import { EQ_INFO, EQ_URUTAN } from "@/data/tes/eq";
import { bandIq } from "@/data/tes/iq";

const VIA_NAMA = Object.fromEntries(VIA_KEKUATAN.map((k) => [k.id, k.nama]));
const NAMA_VAK: Record<string, string> = { V: "Visual", A: "Auditori", K: "Kinestetik" };
const URUTAN_BF: BigFiveDim[] = ["O", "C", "E", "A", "N"];

export type KelompokTes = "ilmiah" | "semi" | "budaya" | "input";

export interface RingkasanTes {
  id: string;
  nama: string;
  tier: Tier;
  kelompok: KelompokTes;
  route: string;
  selesai: boolean;
  tanggal?: string;
  headline: string;
  poin: string[];
}

function kelompokDariTier(tier: Tier): KelompokTes {
  if (tier === "scientific") return "ilmiah";
  if (tier === "semi_scientific") return "semi";
  if (tier === "cultural_spiritual") return "budaya";
  return "input";
}

function aman<T>(fn: () => T): T | null {
  try {
    return fn();
  } catch {
    return null;
  }
}

const p2 = (n: number) => `${Math.round(n)}%`;

/** Ringkas satu SkorDimensi menjadi headline+poin sesuai cek id. */
function ringkasSkor(cek: string, skor: SkorDimensi): { headline: string; poin: string[] } {
  const persen = skor.persen as Record<string, number>;
  const urut = skor.urut as { dim: string; persen: number }[];
  const top = urut[0];
  switch (cek) {
    case "hexaco":
      return { headline: `${HEXACO_INFO[top.dim as keyof typeof HEXACO_INFO].nama.split(" (")[0]} paling menonjol`, poin: urut.slice(0, 3).map((u) => `${HEXACO_INFO[u.dim as keyof typeof HEXACO_INFO].nama.split(" (")[0]} ${p2(u.persen)}`) };
    case "via":
      return { headline: `Kekuatan utama: ${VIA_NAMA[top.dim]}`, poin: [urut.slice(0, 5).map((u) => VIA_NAMA[u.dim]).join(" · ")] };
    case "peta_bakat":
      return { headline: `Bakat utama: ${TEMA_INFO[top.dim]?.nama ?? top.dim}`, poin: [urut.slice(0, 5).map((u) => TEMA_INFO[u.dim]?.nama ?? u.dim).join(" · ")] };
    case "mi":
      return { headline: `Kecerdasan terkuat: ${MI_INFO[top.dim as keyof typeof MI_INFO].nama}`, poin: urut.slice(0, 3).map((u) => `${MI_INFO[u.dim as keyof typeof MI_INFO].nama} ${p2(u.persen)}`) };
    case "disc": {
      const k2 = urut[1]?.dim ?? "";
      return { headline: `${top.dim}${k2} — ${DISC_INFO[top.dim as keyof typeof DISC_INFO].nama}`, poin: urut.map((u) => `${u.dim} ${p2(u.persen)}`) };
    }
    case "enneagram": {
      const t = Number(top.dim);
      return { headline: `Tipe ${t} — ${ENNEA_TIPE[t]?.nama ?? ""}`, poin: [] };
    }
    case "temperament":
      return { headline: `${top.dim} — ${TEMPERAMEN_INFO[top.dim as keyof typeof TEMPERAMEN_INFO].julukan}`, poin: [] };
    case "mft":
      return { headline: `Fondasi terkuat: ${MORAL_INFO[top.dim as keyof typeof MORAL_INFO].labelPendek}`, poin: urut.slice(0, 3).map((u) => `${MORAL_INFO[u.dim as keyof typeof MORAL_INFO].labelPendek} ${p2(u.persen)}`) };
    case "hbdi":
      return { headline: `Gaya berpikir: ${HBDI_INFO[top.dim as keyof typeof HBDI_INFO].nama}`, poin: [] };
    case "true_colors":
      return { headline: `Warna dominan: ${WARNA_INFO[top.dim as keyof typeof WARNA_INFO].label}`, poin: urut.map((u) => `${WARNA_INFO[u.dim as keyof typeof WARNA_INFO].label} ${p2(u.persen)}`) };
    case "riasec":
      return { headline: `Kode Holland: ${kodeHolland(urut)}`, poin: [urut.slice(0, 3).map((u) => RIASEC_INFO[u.dim as keyof typeof RIASEC_INFO].nama).join(" · ")] };
    case "attachment": {
      const g = klasifikasiGaya(persen.cemas, persen.hindar);
      return { headline: GAYA_INFO[g].nama, poin: [`Kecemasan ${p2(persen.cemas)} · Penghindaran ${p2(persen.hindar)}`] };
    }
    case "love_language":
      return { headline: `Bahasa kasih utama: ${BK_INFO[top.dim as keyof typeof BK_INFO].nama}`, poin: [urut.slice(0, 2).map((u) => BK_INFO[u.dim as keyof typeof BK_INFO].nama).join(" · ")] };
    case "grit": {
      const total = Math.round((persen.konsistensi + persen.ketekunan) / 2);
      return { headline: `${bandGrit(total).label} (${total}/100)`, poin: [`Konsistensi ${p2(persen.konsistensi)} · Ketekunan ${p2(persen.ketekunan)}`] };
    }
    case "growth_mindset": {
      const g = Math.round(persen.growth);
      return { headline: `${bandMindset(g).label} (${g}/100)`, poin: [] };
    }
    case "conflict_style":
      return { headline: `Gaya utama: ${KONFLIK_INFO[top.dim as keyof typeof KONFLIK_INFO].nama}`, poin: urut.slice(0, 2).map((u) => `${KONFLIK_INFO[u.dim as keyof typeof KONFLIK_INFO].nama} ${p2(u.persen)}`) };
    case "values": {
      const orient = ORIENTASI_URUTAN.map((oid) => {
        const ang = ORIENTASI_INFO[oid].anggota;
        return { oid, nilai: ang.reduce((a, d) => a + (persen[d] ?? 0), 0) / ang.length };
      }).sort((a, b) => b.nilai - a.nilai);
      return { headline: `Orientasi dominan: ${ORIENTASI_INFO[orient[0].oid].nama}`, poin: [`Nilai teratas: ${urut.slice(0, 3).map((u) => NILAI_INFO[u.dim as keyof typeof NILAI_INFO].nama).join(", ")}`] };
    }
    case "eq": {
      const overall = Math.round(EQ_URUTAN.reduce((a, d) => a + (persen[d] ?? 0), 0) / EQ_URUTAN.length);
      const band = overall >= 80 ? "Sangat Baik" : overall >= 65 ? "Baik" : overall >= 45 ? "Sedang" : "Sedang Berkembang";
      return { headline: `Skor EQ ${overall}/100 — ${band}`, poin: [`Domain terkuat: ${EQ_INFO[top.dim as keyof typeof EQ_INFO].labelPendek}`] };
    }
    default:
      return { headline: `${top.dim} tertinggi (${p2(top.persen)})`, poin: [] };
  }
}

const KOSONG = { headline: "Belum dikerjakan", poin: [] as string[] };

/** Ringkasan satu sistem (interaktif/input) berdasar cek id. */
function ringkasSistem(cek: string): { headline: string; poin: string[]; selesai: boolean; tanggal?: string } {
  if (cek === "bigfive") {
    const bf = bacaBigFive();
    if (!bf) return { ...KOSONG, selesai: false };
    return {
      headline: arketipeHeadline(bf.persen),
      poin: [
        URUTAN_BF.map((d) => `${DIMENSI_INFO[d].singkat} ${p2(bf.persen[d])}`).join(" · "),
        `Eysenck: ${eysenckDariBigFive(bf.persen).kuadran.split(" (")[0]}`,
      ],
      selesai: true,
      tanggal: bf.tanggal,
    };
  }
  if (cek === "mbti") {
    const m = bacaMbti();
    if (!m) return { ...KOSONG, selesai: false };
    return { headline: `${m.tipe} — ${TIPE_16[m.tipe]?.julukan ?? ""}`, poin: m.sumber === "tes" ? ["Dari hasil tes"] : ["Prediksi dari Big Five"], selesai: true };
  }
  if (cek === "iq") {
    const r = aman(() => bacaHasilSistem<{ benar: number; total: number; persen: number }>("iq"));
    if (!r?.skor) return { ...KOSONG, selesai: false };
    const b = bandIq(r.skor.persen);
    return { headline: `${b.label} — benar ${r.skor.benar}/${r.skor.total} (${r.skor.persen}%)`, poin: [b.rentang], selesai: true, tanggal: r.tanggal };
  }
  if (cek === "human_design") {
    const r = aman(() => bacaHasilSistem<{ tipe: string }>("human_design"));
    if (!r?.skor) return { ...KOSONG, selesai: false };
    return { headline: `Tipe: ${r.skor.tipe}`, poin: [], selesai: true, tanggal: r.tanggal };
  }
  if (cek === "stifin") {
    const r = aman(() => bacaHasilSistem<{ kode: string; kemudi: string }>("stifin"));
    if (!r?.skor) return { ...KOSONG, selesai: false };
    return { headline: `${r.skor.kode}${r.skor.kemudi ? ` (${r.skor.kemudi})` : ""}`, poin: [], selesai: true, tanggal: r.tanggal };
  }
  if (cek === "blood_type") {
    const r = aman(() => bacaHasilSistem<{ gol: string }>("blood_type"));
    if (!r?.skor) return { ...KOSONG, selesai: false };
    return { headline: `Golongan ${r.skor.gol}`, poin: [], selesai: true, tanggal: r.tanggal };
  }
  if (cek === "iching") {
    const r = aman(() => bacaHasilSistem<{ no: number; nama: string }>("iching"));
    if (!r?.skor) return { ...KOSONG, selesai: false };
    return { headline: `Hexagram ${r.skor.no} — ${r.skor.nama}`, poin: [], selesai: true, tanggal: r.tanggal };
  }
  if (cek === "vak") {
    const r = aman(() => bacaHasilSistem<{ urut: { nilai: string; persen: number }[] }>("vak"));
    const t = r?.skor?.urut?.[0];
    if (!t) return { ...KOSONG, selesai: false };
    return { headline: `Preferensi: ${NAMA_VAK[t.nilai] ?? t.nilai}`, poin: [], selesai: true, tanggal: r?.tanggal };
  }
  // sisanya: SkorDimensi generik
  const r = aman(() => bacaHasilSistem<SkorDimensi>(cek as SistemId));
  if (!r?.skor?.urut) return { ...KOSONG, selesai: false };
  return { ...ringkasSkor(cek, r.skor), selesai: true, tanggal: r.tanggal };
}

/**
 * Daftar ringkasan SEMUA sistem. Jika `profil` diberikan, sistem budaya
 * (weton, shio, dll) ikut dihitung dari tanggal lahir.
 */
export function daftarRingkasan(profil?: UserProfile | null): RingkasanTes[] {
  const hasil: RingkasanTes[] = [];

  for (const s of SEMUA_SISTEM) {
    if (!s.cek) continue;
    const r = ringkasSistem(s.cek);
    hasil.push({
      id: s.cek,
      nama: s.nama,
      tier: s.tier,
      kelompok: kelompokDariTier(s.tier),
      route: s.route ?? "/tes",
      selesai: r.selesai,
      tanggal: r.tanggal,
      headline: r.headline,
      poin: r.poin,
    });
  }

  if (profil?.tanggalLahir) {
    const tgl = profil.tanggalLahir;
    const budaya: RingkasanTes[] = [];
    const tambah = (id: string, nama: string, headline: string, poin: string[] = []) =>
      budaya.push({ id, nama, tier: "cultural_spiritual", kelompok: "budaya", route: "/hasil", selesai: true, headline, poin });
    aman(() => { const w = hitungWeton(tgl); tambah("weton", "Weton Jawa", `${w.hari} ${w.pasaran} · neptu ${w.neptu}`, [w.lakuMakna]); });
    aman(() => { const sh = hitungShio(tgl); tambah("shio", "Shio", `${sh.nama} ${sh.elemen} (${sh.yinYang})`); });
    aman(() => { const z = hitungZodiak(tgl); tambah("zodiak", "Zodiak Barat", `${z.nama} · ${z.elemen}`); });
    aman(() => { const n = hitungNumerologi(profil.namaLengkap, tgl, new Date().getFullYear()); tambah("numerologi", "Numerologi", `Life Path ${n.lifePath} — ${MAKNA_ANGKA[n.lifePath].arketipe}`); });
    aman(() => { const k = hitungKua(tgl, profil.gender); tambah("kua", "Feng Shui Kua", `Kua ${k.angka} · Kelompok ${k.grup}`); });
    aman(() => { const b = hitungBazi(tgl, profil.jamLahir); tambah("bazi", "BaZi (Empat Pilar)", `Day Master ${b.dayMaster.nama} (${b.dayMaster.elemen})`); });
    hasil.push(...budaya);
  }

  return hasil;
}
