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

export const HBDI_ITEMS: (ItemLikertDimensi & { dim: HbdiDim; bantuan: string })[] = [
  { no: 1, dim: "A", teks: "Saya menuntut bukti sebelum percaya.", bantuan: "Contoh: mendengar klaim viral, kamu langsung mencari sumber datanya dulu sebelum ikut membagikan." },
  { no: 2, dim: "A", teks: "Saya menikmati bekerja dengan angka.", bantuan: "Contoh: menyusun anggaran atau menganalisis spreadsheet terasa menyenangkan buatmu, bukan beban." },
  { no: 3, dim: "A", teks: "Argumen emosional tidak meyakinkan saya.", bantuan: "Contoh: cerita yang menyentuh hati saja belum cukup membuatmu setuju kalau datanya tidak mendukung." },
  { no: 4, dim: "A", teks: "Saya memecah masalah secara logis.", bantuan: "Contoh: menghadapi masalah rumit, kamu memecahnya jadi langkah-langkah kecil yang masuk akal satu per satu." },
  { no: 5, dim: "B", teks: "Saya bekerja dengan checklist.", bantuan: "Contoh: sebelum bepergian, kamu membuat daftar barang yang harus dibawa dan mencentangnya satu-satu." },
  { no: 6, dim: "B", teks: "Saya tidak nyaman tanpa rencana jelas.", bantuan: "Contoh: diajak jalan-jalan tanpa itinerary bikin kamu gelisah, kamu ingin tahu dulu urutan acaranya." },
  { no: 7, dim: "B", teks: "Saya menyelesaikan tugas tepat waktu secara konsisten.", bantuan: "Contoh: deadline besok, tugasmu sudah beres dari kemarin karena kamu mencicil sesuai jadwal." },
  { no: 8, dim: "B", teks: "Prosedur ada untuk diikuti.", bantuan: "Contoh: kamu tetap mengikuti SOP tahap demi tahap walau terasa lebih lama daripada jalan pintas." },
  { no: 9, dim: "C", teks: "Saya mempertimbangkan perasaan orang dalam keputusan.", bantuan: "Contoh: sebelum menegur bawahan, kamu memikirkan dulu bagaimana perasaannya saat mendengar teguran itu." },
  { no: 10, dim: "C", teks: "Saya peka pada dinamika kelompok.", bantuan: "Contoh: masuk ruangan, kamu langsung bisa merasakan ada yang sedang tegang di antara orang-orang." },
  { no: 11, dim: "C", teks: "Saya belajar lewat berbagi cerita.", bantuan: "Contoh: kamu lebih mudah paham materi baru lewat cerita pengalaman orang lain daripada lewat rumus dan data." },
  { no: 12, dim: "C", teks: "Kerja bermakna lebih penting daripada kerja bergaji besar.", bantuan: "Contoh: kamu rela pindah ke pekerjaan bergaji lebih kecil asal terasa benar-benar membantu orang lain." },
  { no: 13, dim: "D", teks: "Saya melihat gambaran besar sebelum detail.", bantuan: "Contoh: membaca rencana proyek, kamu ingin tahu dulu tujuan akhirnya sebelum membahas detail teknisnya." },
  { no: 14, dim: "D", teks: "Ide-ide liar sering muncul di kepala saya.", bantuan: "Contoh: saat rapat brainstorming, kamu suka melontarkan ide yang tidak biasa dan belum pernah dicoba." },
  { no: 15, dim: "D", teks: "Aturan boleh dilanggar demi terobosan.", bantuan: "Contoh: kamu tidak segan mengubah format laporan standar kalau caramu dianggap lebih inovatif dan efektif." },
  { no: 16, dim: "D", teks: "Saya bosan dengan cara yang itu-itu saja.", bantuan: "Contoh: mengerjakan tugas dengan metode yang sama berulang-ulang bikin kamu jenuh dan ingin mencoba pendekatan baru." },
];
