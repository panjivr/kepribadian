import type { ItemLikertDimensi } from "@/lib/skoring";

export type WarnaDim = "Gold" | "Blue" | "Green" | "Orange";

export const WARNA_URUTAN: WarnaDim[] = ["Gold", "Blue", "Green", "Orange"];

export const WARNA_HEX: Record<WarnaDim, string> = {
  Gold: "#eab308",
  Blue: "#3b82f6",
  Green: "#30d158",
  Orange: "#ff9f0a",
};

export interface WarnaInfo {
  label: string;
  padanan: string;
  nilaiInti: string;
  trait: string[];
  diTim: string;
  stresJika: string;
}

export const WARNA_INFO: Record<WarnaDim, WarnaInfo> = {
  Gold: {
    label: "Emas",
    padanan: "SJ / Guardian ~ ISTJ–ESFJ",
    nilaiInti: "tanggung jawab & tatanan",
    trait: ["terencana", "tepat waktu", "loyal", "menghargai aturan"],
    diTim: "tulang punggung operasional",
    stresJika: "kekacauan & ketidakjelasan",
  },
  Blue: {
    label: "Biru",
    padanan: "NF / Idealist ~ INFP–ENFJ",
    nilaiInti: "hubungan & makna",
    trait: ["empatik", "komunikatif perasaan", "harmonis", "autentik"],
    diTim: "perekat emosional & moral",
    stresJika: "konflik & ketidaktulusan",
  },
  Green: {
    label: "Hijau",
    padanan: "NT / Rational ~ INTJ–ENTP",
    nilaiInti: "kompetensi & logika",
    trait: ["analitis", "independen", "ingin tahu", "skeptis sehat"],
    diTim: "otak strategi & inovasi",
    stresJika: "inkompetensi & keputusan emosional",
  },
  Orange: {
    label: "Oranye",
    padanan: "SP / Artisan ~ ESTP–ISFP",
    nilaiInti: "kebebasan & aksi",
    trait: ["spontan", "berani", "enerjik", "praktis di lapangan"],
    diTim: "eksekutor cepat & pemecah kebuntuan",
    stresJika: "rutinitas & birokrasi",
  },
};

export const WARNA_ITEMS: (ItemLikertDimensi & { dim: WarnaDim })[] = [
  { no: 1, dim: "Gold", teks: "Saya merasa tenang saat semua terjadwal." },
  { no: 2, dim: "Gold", teks: "Aturan dibuat untuk kebaikan bersama dan saya menaatinya." },
  { no: 3, dim: "Gold", teks: "Saya menepati janji apapun yang terjadi." },
  { no: 4, dim: "Blue", teks: "Hubungan yang dalam lebih penting dari pencapaian." },
  { no: 5, dim: "Blue", teks: "Saya peka terhadap perasaan tak terucap orang lain." },
  { no: 6, dim: "Blue", teks: "Saya butuh pekerjaan yang bermakna, bukan sekadar gaji." },
  { no: 7, dim: "Green", teks: "Saya menuntut alasan logis di balik setiap keputusan." },
  { no: 8, dim: "Green", teks: "Saya lebih suka memecahkan masalah kompleks daripada bersosialisasi." },
  { no: 9, dim: "Green", teks: "Kompetensi adalah ukuran utama saya menilai orang." },
  { no: 10, dim: "Orange", teks: "Saya bertindak dulu, menyesuaikan kemudian." },
  { no: 11, dim: "Orange", teks: "Risiko membuat hidup terasa hidup." },
  { no: 12, dim: "Orange", teks: "Duduk rapat lama adalah siksaan bagi saya." },
];
