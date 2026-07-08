import type { ItemLikertDimensi } from "@/lib/skoring";

export type DiscDim = "D" | "I" | "S" | "C";

export const DISC_URUTAN: DiscDim[] = ["D", "I", "S", "C"];

export interface DiscInfo {
  nama: string;
  fokus: string;
  trait: string[];
  ketakutan: string;
  komunikasi: string;
  kelemahan: string[];
  karier: string[];
}

export const DISC_INFO: Record<DiscDim, DiscInfo> = {
  D: {
    nama: "Dominance",
    fokus: "Hasil & tantangan",
    trait: ["tegas", "cepat memutuskan", "kompetitif", "langsung ke inti"],
    ketakutan: "dimanfaatkan / kehilangan kendali",
    komunikasi: "To the point, bicara hasil, jangan bertele-tele.",
    kelemahan: ["tidak sabaran", "kurang mendengar", "menyakiti tanpa sadar"],
    karier: ["CEO", "sales director", "project lead", "militer"],
  },
  I: {
    nama: "Influence",
    fokus: "Orang & pengaruh",
    trait: ["antusias", "persuasif", "optimis", "ekspresif"],
    ketakutan: "penolakan sosial / diabaikan",
    komunikasi: "Ramah, beri panggung, apresiasi terbuka.",
    kelemahan: ["kurang detail", "overpromise", "tidak terorganisir"],
    karier: ["marketing", "PR", "MC", "kreator"],
  },
  S: {
    nama: "Steadiness",
    fokus: "Stabilitas & kerjasama",
    trait: ["sabar", "setia", "pendengar baik", "konsisten"],
    ketakutan: "perubahan mendadak / konflik",
    komunikasi: "Lembut, beri waktu adaptasi, beri jaminan keamanan.",
    kelemahan: ["sulit menolak", "menghindari konfrontasi", "lambat berubah"],
    karier: ["support", "HR", "perawat", "operasional"],
  },
  C: {
    nama: "Conscientiousness",
    fokus: "Akurasi & kualitas",
    trait: ["analitis", "teliti", "sistematis", "standar tinggi"],
    ketakutan: "kritik atas pekerjaan / kesalahan",
    komunikasi: "Data, logika, detail tertulis, jangan tekan cepat-cepat.",
    kelemahan: ["overanalisis", "perfeksionis", "dingin"],
    karier: ["engineer", "auditor", "analis", "QA"],
  },
};

export const DISC_KOMBINASI: Record<string, string> = {
  DI: "Motivator hasil — memimpin dengan energi, mendorong tim capai target dengan gaya karismatik.",
  DC: "Eksekutor presisi — hasil cepat DAN benar; keras pada standar.",
  ID: "Persuader — menjual visi, menggerakkan orang ke aksi.",
  IS: "Pendukung hangat — perekat tim, membangun relasi tulus.",
  SI: "Kolaborator setia — stabil, ramah, tim player sejati.",
  SC: "Spesialis tenang — konsisten, teliti, bisa diandalkan diam-diam.",
  CS: "Perfeksionis sabar — kualitas tinggi dengan proses stabil.",
  CD: "Arsitek standar — sistem, aturan, dan hasil terukur.",
};

export const DISC_ITEMS: (ItemLikertDimensi & { dim: DiscDim })[] = [
  { no: 1, dim: "D", teks: "Saya suka mengambil alih kendali situasi." },
  { no: 2, dim: "D", teks: "Saya nyaman membuat keputusan cepat dengan info terbatas." },
  { no: 3, dim: "D", teks: "Kompetisi memacu performa terbaik saya." },
  { no: 4, dim: "D", teks: "Saya berbicara langsung ke inti tanpa basa-basi." },
  { no: 5, dim: "D", teks: "Hambatan adalah tantangan, bukan alasan berhenti." },
  { no: 6, dim: "D", teks: "Saya tidak sabar dengan proses yang lambat." },
  { no: 7, dim: "I", teks: "Saya mudah mengajak orang antusias terhadap ide saya." },
  { no: 8, dim: "I", teks: "Bertemu orang baru memberi saya energi." },
  { no: 9, dim: "I", teks: "Saya sering jadi pencair suasana." },
  { no: 10, dim: "I", teks: "Saya lebih suka brainstorming ramai daripada kerja sendiri." },
  { no: 11, dim: "I", teks: "Pengakuan publik penting bagi saya." },
  { no: 12, dim: "I", teks: "Saya bercerita dengan ekspresif dan hidup." },
  { no: 13, dim: "S", teks: "Saya lebih suka lingkungan yang stabil dan bisa diprediksi." },
  { no: 14, dim: "S", teks: "Orang datang ke saya untuk didengarkan." },
  { no: 15, dim: "S", teks: "Saya menyelesaikan tugas dengan tempo konsisten." },
  { no: 16, dim: "S", teks: "Saya mengalah demi kedamaian tim." },
  { no: 17, dim: "S", teks: "Perubahan mendadak membuat saya tidak nyaman." },
  { no: 18, dim: "S", teks: "Kesetiaan adalah nilai tertinggi saya." },
  { no: 19, dim: "C", teks: "Saya butuh data lengkap sebelum memutuskan." },
  { no: 20, dim: "C", teks: "Kesalahan kecil dalam pekerjaan mengganggu saya." },
  { no: 21, dim: "C", teks: "Saya mengikuti prosedur dan standar dengan ketat." },
  { no: 22, dim: "C", teks: "Saya lebih percaya fakta daripada perasaan." },
  { no: 23, dim: "C", teks: "Kualitas lebih penting daripada kecepatan." },
  { no: 24, dim: "C", teks: "Saya menganalisis risiko sebelum bertindak." },
];
