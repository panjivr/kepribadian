export type IqDomain = "logis" | "numerik" | "verbal" | "pola";

export interface IqItem {
  no: number;
  domain: IqDomain;
  teks: string;
  opsi: string[];
  benar: number; // indeks opsi yang benar
  pembahasan: string;
}

export const IQ_DOMAIN_INFO: Record<
  IqDomain,
  { nama: string; desk: string }
> = {
  logis: {
    nama: "Penalaran Logis",
    desk: "Menarik kesimpulan yang sahih dari premis — inti berpikir kritis.",
  },
  numerik: {
    nama: "Penalaran Numerik",
    desk: "Menangkap pola pada angka dan hubungan kuantitatif.",
  },
  verbal: {
    nama: "Penalaran Verbal",
    desk: "Memahami hubungan makna antar kata dan konsep.",
  },
  pola: {
    nama: "Penalaran Pola / Abstrak",
    desk: "Menemukan aturan tersembunyi pada urutan huruf & bentuk.",
  },
};

/**
 * 20 soal, 5 per domain. Setiap jawaban benar telah diverifikasi & disertai
 * pembahasan. Soal original, dirancang tidak ambigu.
 */
export const IQ_ITEMS: IqItem[] = [
  // ---- Numerik ----
  { no: 1, domain: "numerik", teks: "Lanjutkan deret: 2, 4, 8, 16, …", opsi: ["24", "30", "32", "20"], benar: 2, pembahasan: "Tiap angka dikalikan 2. 16 × 2 = 32." },
  { no: 2, domain: "numerik", teks: "Lanjutkan deret: 3, 6, 11, 18, 27, …", opsi: ["36", "38", "40", "35"], benar: 1, pembahasan: "Selisihnya bertambah 2: +3, +5, +7, +9, lalu +11. 27 + 11 = 38." },
  { no: 3, domain: "numerik", teks: "Lanjutkan deret Fibonacci: 1, 1, 2, 3, 5, 8, …", opsi: ["11", "12", "13", "15"], benar: 2, pembahasan: "Tiap angka = jumlah dua angka sebelumnya. 5 + 8 = 13." },
  { no: 4, domain: "numerik", teks: "Lanjutkan deret: 96, 48, 24, 12, …", opsi: ["6", "8", "4", "10"], benar: 0, pembahasan: "Tiap angka dibagi 2. 12 ÷ 2 = 6." },
  { no: 5, domain: "numerik", teks: "Jika 5 mesin membuat 5 produk dalam 5 menit, berapa menit yang dibutuhkan 100 mesin untuk membuat 100 produk?", opsi: ["100 menit", "20 menit", "5 menit", "50 menit"], benar: 2, pembahasan: "1 mesin membuat 1 produk dalam 5 menit. 100 mesin bekerja paralel, jadi tetap 5 menit." },
  // ---- Logis ----
  { no: 6, domain: "logis", teks: "Semua kucing adalah mamalia. Semua mamalia bernapas. Kesimpulan yang pasti benar:", opsi: ["Semua yang bernapas adalah kucing", "Semua kucing bernapas", "Sebagian mamalia bukan kucing", "Semua mamalia adalah kucing"], benar: 1, pembahasan: "Rantai silogisme: kucing → mamalia → bernapas. Maka semua kucing pasti bernapas." },
  { no: 7, domain: "logis", teks: "Aturan: 'Jika hujan, maka jalan basah.' Fakta: jalan TIDAK basah. Kesimpulan:", opsi: ["Hujan", "Tidak hujan", "Mungkin hujan", "Tidak bisa disimpulkan"], benar: 1, pembahasan: "Modus tollens: bila akibat (jalan basah) tidak terjadi, sebabnya (hujan) juga tidak terjadi." },
  { no: 8, domain: "logis", teks: "Manakah yang tidak sekelompok?", opsi: ["Mawar", "Melati", "Anggrek", "Mangga"], benar: 3, pembahasan: "Mawar, melati, dan anggrek adalah bunga; mangga adalah buah." },
  { no: 9, domain: "logis", teks: "Andi lebih tinggi dari Budi. Budi lebih tinggi dari Caca. Siapa paling pendek?", opsi: ["Andi", "Budi", "Caca", "Sama tinggi"], benar: 2, pembahasan: "Urutan tinggi: Andi > Budi > Caca. Maka Caca paling pendek." },
  { no: 10, domain: "logis", teks: "Sebagian dokter adalah penulis. Semua penulis pandai membaca. Kesimpulan yang pasti benar:", opsi: ["Semua dokter pandai membaca", "Sebagian dokter pandai membaca", "Semua penulis adalah dokter", "Tidak ada dokter yang membaca"], benar: 1, pembahasan: "Dokter yang juga penulis pasti pandai membaca — itu 'sebagian dokter'. Tak bisa diklaim 'semua'." },
  // ---- Verbal ----
  { no: 11, domain: "verbal", teks: "DOKTER : RUMAH SAKIT = GURU : …", opsi: ["Buku", "Sekolah", "Murid", "Seragam"], benar: 1, pembahasan: "Dokter bekerja di rumah sakit; guru bekerja di sekolah (relasi tempat kerja)." },
  { no: 12, domain: "verbal", teks: "PANAS : DINGIN = TERANG : …", opsi: ["Lampu", "Silau", "Gelap", "Siang"], benar: 2, pembahasan: "Panas lawan dingin; terang lawan gelap (relasi antonim)." },
  { no: 13, domain: "verbal", teks: "BURUNG : TERBANG = IKAN : …", opsi: ["Air", "Sirip", "Berenang", "Laut"], benar: 2, pembahasan: "Cara bergerak khas: burung terbang, ikan berenang." },
  { no: 14, domain: "verbal", teks: "Lawan kata yang paling tepat dari 'GAGAL' adalah …", opsi: ["Coba", "Berhasil", "Usaha", "Menyerah"], benar: 1, pembahasan: "Antonim langsung dari gagal adalah berhasil." },
  { no: 15, domain: "verbal", teks: "JAM : WAKTU = TIMBANGAN : …", opsi: ["Berat", "Pasar", "Angka", "Besi"], benar: 0, pembahasan: "Jam mengukur waktu; timbangan mengukur berat (relasi alat–besaran)." },
  // ---- Pola / abstrak ----
  { no: 16, domain: "pola", teks: "Lanjutkan pola huruf: A, C, E, G, …", opsi: ["H", "I", "J", "K"], benar: 1, pembahasan: "Melompati satu huruf: A(+2)C(+2)E(+2)G(+2)I." },
  { no: 17, domain: "pola", teks: "Lanjutkan pola huruf mundur: Z, X, V, T, …", opsi: ["S", "R", "Q", "U"], benar: 1, pembahasan: "Mundur dua huruf: Z(−2)X(−2)V(−2)T(−2)R." },
  { no: 18, domain: "pola", teks: "Lanjutkan pola: AB, DE, GH, …", opsi: ["IJ", "JK", "HI", "KL"], benar: 1, pembahasan: "Huruf awal tiap pasangan melompat 3: A, D, G, J → jadi JK." },
  { no: 19, domain: "pola", teks: "Pada matriks, baris = 2,4,6 / 3,6,9 / 4,8,? Berapa nilai '?'", opsi: ["10", "12", "14", "16"], benar: 1, pembahasan: "Tiap baris kelipatan angka pertamanya (×1, ×2, ×3). Baris ketiga: 4×3 = 12." },
  { no: 20, domain: "pola", teks: "Lanjutkan deret angka-huruf: 1A, 2C, 3E, 4G, …", opsi: ["5H", "5I", "5J", "6I"], benar: 1, pembahasan: "Angka +1 (jadi 5); huruf melompat satu (A,C,E,G,I). Maka 5I." },
];

export interface IqBand {
  label: string;
  rentang: string;
  warna: string;
  narasi: string;
}

/** Peta persen-benar → band kualitatif + estimasi rentang KASAR (bukan IQ klinis). */
export function bandIq(persenBenar: number): IqBand {
  if (persenBenar >= 90)
    return { label: "Sangat Tinggi", rentang: "est. ±125+", warna: "#30d158", narasi: "Penalaranmu tajam di hampir semua domain. Ingat: ini latihan singkat, bukan pengganti tes tervalidasi." };
  if (persenBenar >= 70)
    return { label: "Di Atas Rata-rata", rentang: "est. ±110–125", warna: "#67e8f9", narasi: "Kamu menyelesaikan mayoritas soal dengan benar — pola pikir logismu kuat." };
  if (persenBenar >= 45)
    return { label: "Rata-rata", rentang: "est. ±90–110", warna: "#818cf8", narasi: "Hasilmu berada di kisaran umum. Kecerdasan bisa diasah lewat latihan & tidur cukup." };
  return { label: "Sedang Berkembang", rentang: "est. di bawah ±90", warna: "#ff9f0a", narasi: "Jangan berkecil hati — tes singkat & kondisi (lelah, terburu) sangat memengaruhi. Latihan rutin membantu." };
}
