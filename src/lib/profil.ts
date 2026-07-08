/**
 * Mesin Sintesis Profil Terpadu (persona-db/engine/profile-engine.json).
 * Fondasi = tes ilmiah (Big Five). Layer budaya TIDAK PERNAH menimpa hasil
 * ilmiah — disajikan terpisah sebagai "Perspektif Budaya".
 */
import type {
  BigFiveDim,
  BigFiveResult,
  DiscIndication,
  EnneagramIndication,
  MbtiResult,
} from "./types";
import { DIMENSI_INFO } from "./bigfive";
import { TIPE_16 } from "./mbti";

/* ------------------------- indikasi DISC dari OCEAN ------------------------ */
// mapping_bigfive_disc: D = E↑A↓, I = E↑A↑, S = E↓A↑N↓, C = C↑E↓

const DISC_NAMA: Record<DiscIndication["kode"], string> = {
  D: "Dominance — tegas, cepat memutuskan, fokus hasil",
  I: "Influence — persuasif, antusias, menggerakkan orang",
  S: "Steadiness — stabil, sabar, pendengar setia",
  C: "Conscientiousness — presisi, analitis, menjaga standar",
};

export function indikasiDisc(p: Record<BigFiveDim, number>): DiscIndication[] {
  const skor: Record<DiscIndication["kode"], number> = {
    D: (p.E + (100 - p.A)) / 2,
    I: (p.E + p.A) / 2,
    S: (100 - p.E + p.A + (100 - p.N)) / 3,
    C: (p.C + (100 - p.E)) / 2,
  };
  return (Object.keys(skor) as DiscIndication["kode"][])
    .map((kode) => ({ kode, nama: DISC_NAMA[kode], skor: Math.round(skor[kode]) }))
    .sort((a, b) => b.skor - a.skor);
}

/* ---------------------- indikasi Enneagram dari OCEAN ---------------------- */
// mapping_bigfive_enneagram_indikatif — heuristik indikatif, bukan hasil tes.

const ENNEA_NAMA: Record<number, string> = {
  1: "Tipe 1 — Sang Reformis (standar tinggi, ingin memperbaiki)",
  2: "Tipe 2 — Sang Penolong (memberi & dibutuhkan)",
  3: "Tipe 3 — Sang Peraih (pencapaian & citra sukses)",
  4: "Tipe 4 — Sang Individualis (kedalaman rasa & keunikan)",
  5: "Tipe 5 — Sang Investigator (pengetahuan & privasi)",
  6: "Tipe 6 — Sang Loyalis (keamanan & kesiagaan)",
  7: "Tipe 7 — Sang Antusias (pengalaman baru & kegembiraan)",
  8: "Tipe 8 — Sang Penantang (kekuatan & kendali)",
  9: "Tipe 9 — Sang Pendamai (harmoni & ketenangan)",
};

export function indikasiEnneagram(p: Record<BigFiveDim, number>): EnneagramIndication[] {
  const sedang = (x: number) => 100 - Math.abs(x - 50) * 2; // 100 saat tepat di tengah
  const skor: Record<number, number> = {
    1: p.C * 0.6 + sedang(p.N) * 0.4,
    2: p.A * 0.7 + sedang(p.E) * 0.3,
    3: (p.C + p.E) / 2,
    4: (p.N + p.O) / 2,
    5: (p.O + (100 - p.E)) / 2,
    6: p.N * 0.6 + sedang(p.C) * 0.4,
    7: (p.E + p.O) / 2,
    8: (p.E + (100 - p.A) + (100 - p.N)) / 3,
    9: (p.A + (100 - p.E)) / 2,
  };
  return Object.entries(skor)
    .map(([tipe, s]) => ({ tipe: Number(tipe), nama: ENNEA_NAMA[Number(tipe)], skor: Math.round(s) }))
    .sort((a, b) => b.skor - a.skor);
}

/* ------------------------------ narasi inti diri --------------------------- */

export function narasiDimensi(dim: BigFiveDim, persen: number): string {
  const info = DIMENSI_INFO[dim];
  const arah = persen >= 56 ? info.tinggi : persen <= 45 ? info.rendah : null;
  if (!arah) {
    return `Seimbang — kamu bisa bergerak luwes di kedua sisi spektrum ${info.singkat.toLowerCase()}.`;
  }
  return `Kamu cenderung ${arah.trait.slice(0, 3).join(", ")}.`;
}

/* --------------------------- rekomendasi karier ---------------------------- */
// Algoritma: kumpulkan karier dari sistem ilmiah/semi-ilmiah, ranking frekuensi.

export function rekomendasiKarier(
  bigFive: BigFiveResult,
  mbti: MbtiResult | null
): { nama: string; sumber: number }[] {
  const semua: string[] = [];
  (Object.keys(bigFive.persen) as BigFiveDim[]).forEach((dim) => {
    const p = bigFive.persen[dim];
    const info = DIMENSI_INFO[dim];
    if (p >= 56) semua.push(...info.tinggi.karier);
    else if (p <= 45) semua.push(...info.rendah.karier);
  });
  if (mbti && TIPE_16[mbti.tipe]) semua.push(...TIPE_16[mbti.tipe].karier);
  const freq = new Map<string, number>();
  for (const k of semua) {
    const kunci = k.toLowerCase().trim();
    freq.set(kunci, (freq.get(kunci) ?? 0) + 1);
  }
  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([nama, sumber]) => ({ nama, sumber }));
}

/* ---------------------------- area pertumbuhan ----------------------------- */

export function areaPertumbuhan(bigFive: BigFiveResult, mbti: MbtiResult | null): string[] {
  const area: string[] = [];
  (Object.keys(bigFive.persen) as BigFiveDim[]).forEach((dim) => {
    const p = bigFive.persen[dim];
    const info = DIMENSI_INFO[dim];
    if (p >= 56) area.push(...info.tinggi.risiko);
    else if (p <= 45) area.push(...info.rendah.risiko);
  });
  if (mbti && TIPE_16[mbti.tipe]) area.push(...TIPE_16[mbti.tipe].kelemahan.slice(0, 2));
  return [...new Set(area)].slice(0, 6);
}

/* ----------------------------- action plan 30 hari ------------------------- */

const RENCANA: Record<BigFiveDim, { rendahAtauTinggi: "tinggi" | "rendah"; aksi: string }[]> = {
  O: [
    { rendahAtauTinggi: "rendah", aksi: "Coba satu hal benar-benar baru tiap minggu — rute, resep, genre, atau ide dari bidang lain." },
    { rendahAtauTinggi: "tinggi", aksi: "Pilih SATU ide terbaikmu bulan ini dan tuntaskan sampai jadi sebelum mulai yang baru." },
  ],
  C: [
    { rendahAtauTinggi: "rendah", aksi: "Mulai hari dengan 3 prioritas tertulis; rayakan tiap checklist yang selesai." },
    { rendahAtauTinggi: "tinggi", aksi: "Jadwalkan istirahat seserius menjadwalkan kerja — pulih adalah bagian dari performa." },
  ],
  E: [
    { rendahAtauTinggi: "rendah", aksi: "Satu percakapan bermakna per hari — kualitas koneksi, bukan kuantitas." },
    { rendahAtauTinggi: "tinggi", aksi: "Latih 10 menit refleksi tanpa gawai tiap malam; dengarkan dua kali lebih banyak daripada bicara." },
  ],
  A: [
    { rendahAtauTinggi: "rendah", aksi: "Sebelum mengkritik, temukan satu hal yang bisa kamu apresiasi dengan tulus." },
    { rendahAtauTinggi: "tinggi", aksi: "Latih berkata 'tidak' pada satu permintaan kecil tiap minggu — batas yang sehat itu kebaikan juga." },
  ],
  N: [
    { rendahAtauTinggi: "rendah", aksi: "Sebelum keputusan besar, tanya: risiko apa yang mungkin sedang kuremehkan?" },
    { rendahAtauTinggi: "tinggi", aksi: "Tulis kekhawatiranmu 5 menit tiap pagi, lalu tandai mana yang benar-benar bisa kamu kendalikan hari ini." },
  ],
};

export function actionPlan(bigFive: BigFiveResult): string[] {
  const rencana: string[] = [];
  const dims = Object.keys(bigFive.persen) as BigFiveDim[];
  // Ambil 3 dimensi paling ekstrem (jarak terjauh dari 50) → kebiasaan paling relevan
  const ekstrem = [...dims].sort(
    (a, b) => Math.abs(bigFive.persen[b] - 50) - Math.abs(bigFive.persen[a] - 50)
  );
  for (const dim of ekstrem) {
    if (rencana.length >= 3) break;
    const p = bigFive.persen[dim];
    if (p >= 46 && p <= 55) continue;
    const arah = p >= 56 ? "tinggi" : "rendah";
    const r = RENCANA[dim].find((x) => x.rendahAtauTinggi === arah);
    if (r) rencana.push(r.aksi);
  }
  if (rencana.length === 0) {
    rencana.push(
      "Profilmu seimbang di semua dimensi — pilih satu area yang ingin kamu asah dan buat kebiasaan kecil harian di sana."
    );
  }
  return rencana;
}

/* ------------------------------ arketipe headline -------------------------- */

export function arketipeHeadline(p: Record<BigFiveDim, number>): string {
  if (p.O >= 56 && p.C >= 56) return "Inovator Eksekutor";
  if (p.O >= 56 && p.E <= 45) return "Pemikir Mendalam";
  if (p.E >= 56 && p.A >= 56) return "Penggerak Orang";
  if (p.A >= 56 && p.N <= 45) return "Penstabil";
  if (p.E >= 56 && p.A <= 45) return "Penantang Tegas";
  if (p.C >= 56) return "Eksekutor Andal";
  if (p.O >= 56) return "Penjelajah Ide";
  if (p.A >= 56) return "Perawat Harmoni";
  if (p.E >= 56) return "Energi Sosial";
  return "Profil Seimbang";
}
