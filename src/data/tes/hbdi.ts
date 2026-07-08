import type { ItemLikertDimensi } from "@/lib/skoring";

export type HbdiDim = "A" | "B" | "C" | "D";

export interface HbdiInfo {
  nama: string;
  kataKunci: string[];
  kalimatKhas: string;
  karier: string[];
  // posisi di grid 2×2
  grid: "kiri-atas" | "kiri-bawah" | "kanan-bawah" | "kanan-atas";
}

export const HBDI_INFO: Record<HbdiDim, HbdiInfo> = {
  A: {
    nama: "Analitis",
    kataKunci: ["logika", "fakta", "angka", "kritis"],
    kalimatKhas: "Mana datanya?",
    karier: ["analis", "engineer", "keuangan"],
    grid: "kiri-atas",
  },
  B: {
    nama: "Sekuensial / Organisatoris",
    kataKunci: ["prosedur", "rencana", "detail", "kontrol"],
    kalimatKhas: "Apa langkah-langkahnya?",
    karier: ["project manager", "operasional", "admin"],
    grid: "kiri-bawah",
  },
  C: {
    nama: "Interpersonal / Perasa",
    kataKunci: ["emosi", "orang", "komunikasi", "makna"],
    kalimatKhas: "Bagaimana perasaan mereka?",
    karier: ["HR", "guru", "konselor"],
    grid: "kanan-bawah",
  },
  D: {
    nama: "Imajinatif / Eksperimental",
    kataKunci: ["visi", "intuisi", "sintesis", "risiko"],
    kalimatKhas: "Bagaimana kalau kita coba...?",
    karier: ["entrepreneur", "desainer", "strategist"],
    grid: "kanan-atas",
  },
};

export const HBDI_ITEMS: (ItemLikertDimensi & { dim: HbdiDim })[] = [
  { no: 1, dim: "A", teks: "Saya menuntut bukti sebelum percaya." },
  { no: 2, dim: "A", teks: "Saya menikmati bekerja dengan angka." },
  { no: 3, dim: "A", teks: "Argumen emosional tidak meyakinkan saya." },
  { no: 4, dim: "A", teks: "Saya memecah masalah secara logis." },
  { no: 5, dim: "B", teks: "Saya bekerja dengan checklist." },
  { no: 6, dim: "B", teks: "Saya tidak nyaman tanpa rencana jelas." },
  { no: 7, dim: "B", teks: "Saya menyelesaikan tugas tepat waktu secara konsisten." },
  { no: 8, dim: "B", teks: "Prosedur ada untuk diikuti." },
  { no: 9, dim: "C", teks: "Saya mempertimbangkan perasaan orang dalam keputusan." },
  { no: 10, dim: "C", teks: "Saya peka pada dinamika kelompok." },
  { no: 11, dim: "C", teks: "Saya belajar lewat berbagi cerita." },
  { no: 12, dim: "C", teks: "Kerja bermakna lebih penting daripada kerja bergaji besar." },
  { no: 13, dim: "D", teks: "Saya melihat gambaran besar sebelum detail." },
  { no: 14, dim: "D", teks: "Ide-ide liar sering muncul di kepala saya." },
  { no: 15, dim: "D", teks: "Aturan boleh dilanggar demi terobosan." },
  { no: 16, dim: "D", teks: "Saya bosan dengan cara yang itu-itu saja." },
];
