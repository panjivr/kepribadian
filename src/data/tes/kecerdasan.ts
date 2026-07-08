import type { ItemLikertDimensi } from "@/lib/skoring";

export type MiDim =
  | "linguistik"
  | "logis"
  | "visual"
  | "musikal"
  | "kinestetik"
  | "interpersonal"
  | "intrapersonal"
  | "naturalis";

export const MI_URUTAN: MiDim[] = [
  "linguistik",
  "logis",
  "visual",
  "musikal",
  "kinestetik",
  "interpersonal",
  "intrapersonal",
  "naturalis",
];

export interface MiInfo {
  nama: string;
  labelPendek: string;
  desk: string;
  karier: string[];
  caraBelajar: string;
}

export const MI_INFO: Record<MiDim, MiInfo> = {
  linguistik: { nama: "Linguistik", labelPendek: "Linguistik", desk: "Kata-kata, bahasa, menulis, bercerita", karier: ["penulis", "jurnalis", "pengacara", "penerjemah"], caraBelajar: "membaca, menulis catatan, diskusi" },
  logis: { nama: "Logis-Matematis", labelPendek: "Logis", desk: "Angka, pola, logika, sebab-akibat", karier: ["programmer", "ilmuwan", "analis", "akuntan"], caraBelajar: "klasifikasi, eksperimen, pemecahan masalah" },
  visual: { nama: "Visual-Spasial", labelPendek: "Visual", desk: "Gambar, ruang, desain, peta", karier: ["desainer", "arsitek", "fotografer", "pilot"], caraBelajar: "diagram, mind map, video" },
  musikal: { nama: "Musikal", labelPendek: "Musikal", desk: "Nada, ritme, melodi, suara", karier: ["musisi", "produser", "sound designer", "komposer"], caraBelajar: "lagu, ritme, musik latar" },
  kinestetik: { nama: "Kinestetik-Tubuh", labelPendek: "Kinestetik", desk: "Gerak, koordinasi, keterampilan tangan", karier: ["atlet", "penari", "ahli bedah", "teknisi"], caraBelajar: "praktik langsung, simulasi" },
  interpersonal: { nama: "Interpersonal", labelPendek: "Interpersonal", desk: "Memahami & berinteraksi dengan orang", karier: ["guru", "HR", "sales", "politisi"], caraBelajar: "kelompok belajar, mengajar orang lain" },
  intrapersonal: { nama: "Intrapersonal", labelPendek: "Intrapersonal", desk: "Memahami diri, refleksi, tujuan hidup", karier: ["psikolog", "penulis", "entrepreneur", "filsuf"], caraBelajar: "jurnal, refleksi mandiri, target personal" },
  naturalis: { nama: "Naturalis", labelPendek: "Naturalis", desk: "Alam, pola lingkungan, klasifikasi makhluk hidup", karier: ["biolog", "dokter hewan", "konservasi", "agronom"], caraBelajar: "observasi lapangan, kategorisasi" },
};

export const MI_ITEMS: (ItemLikertDimensi & { dim: MiDim })[] = [
  { no: 1, dim: "linguistik", teks: "Saya mudah menemukan kata yang tepat saat menulis/bicara." },
  { no: 2, dim: "linguistik", teks: "Saya menikmati permainan kata dan bahasa." },
  { no: 3, dim: "linguistik", teks: "Saya belajar paling baik dengan membaca." },
  { no: 4, dim: "logis", teks: "Saya suka mencari pola dan hubungan sebab-akibat." },
  { no: 5, dim: "logis", teks: "Hitungan dan logika terasa alami bagi saya." },
  { no: 6, dim: "logis", teks: "Saya memecah masalah besar jadi langkah sistematis." },
  { no: 7, dim: "visual", teks: "Saya berpikir dalam gambar." },
  { no: 8, dim: "visual", teks: "Saya mudah membaca peta dan membayangkan ruang 3D." },
  { no: 9, dim: "visual", teks: "Saya memperhatikan estetika visual di sekitar." },
  { no: 10, dim: "musikal", teks: "Saya cepat menangkap melodi atau ritme baru." },
  { no: 11, dim: "musikal", teks: "Saya sering menyadari nada sumbang." },
  { no: 12, dim: "musikal", teks: "Musik memengaruhi mood & fokus saya dengan kuat." },
  { no: 13, dim: "kinestetik", teks: "Saya belajar dengan mencoba langsung, bukan membaca manual." },
  { no: 14, dim: "kinestetik", teks: "Koordinasi tubuh/tangan saya bagus." },
  { no: 15, dim: "kinestetik", teks: "Saya sulit diam lama; harus bergerak." },
  { no: 16, dim: "interpersonal", teks: "Saya cepat membaca suasana hati orang." },
  { no: 17, dim: "interpersonal", teks: "Orang sering curhat kepada saya." },
  { no: 18, dim: "interpersonal", teks: "Saya bekerja lebih baik dalam tim." },
  { no: 19, dim: "intrapersonal", teks: "Saya sangat mengenal kekuatan & kelemahan saya." },
  { no: 20, dim: "intrapersonal", teks: "Saya rutin merenungkan arah hidup." },
  { no: 21, dim: "intrapersonal", teks: "Saya nyaman bekerja mandiri dengan target sendiri." },
  { no: 22, dim: "naturalis", teks: "Saya peka terhadap perubahan alam & lingkungan." },
  { no: 23, dim: "naturalis", teks: "Saya suka mengamati/mengklasifikasi tumbuhan-hewan." },
  { no: 24, dim: "naturalis", teks: "Berada di alam memulihkan energi saya." },
];
