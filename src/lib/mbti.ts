/**
 * 16 Tipe Kepribadian — item original (persona-db/systems/mbti16.json).
 * Tier: semi_scientific. MBTI® adalah merek dagang Myers-Briggs Company;
 * situs ini memakai istilah generik & soal original.
 */
import type { BigFiveDim, MbtiResult } from "./types";

export type Dikotomi = "E/I" | "S/N" | "T/F" | "J/P";

export interface MbtiItem {
  no: number;
  dik: Dikotomi;
  a: { teks: string; nilai: string };
  b: { teks: string; nilai: string };
}

export const DIKOTOMI_INFO: Record<Dikotomi, { nama: string; inti: string }> = {
  "E/I": { nama: "Extraversion vs Introversion", inti: "Dari mana energi berasal? Interaksi luar (E) atau dunia dalam (I)?" },
  "S/N": { nama: "Sensing vs Intuition", inti: "Cara menyerap info: fakta konkret (S) atau pola & kemungkinan (N)?" },
  "T/F": { nama: "Thinking vs Feeling", inti: "Cara memutuskan: logika objektif (T) atau nilai & dampak pada orang (F)?" },
  "J/P": { nama: "Judging vs Perceiving", inti: "Gaya hidup: terstruktur & tuntas (J) atau fleksibel & terbuka (P)?" },
};

export const MBTI_ITEMS: MbtiItem[] = [
  { no: 1, dik: "E/I", a: { teks: "Setelah acara ramai, saya merasa terisi energi", nilai: "E" }, b: { teks: "Setelah acara ramai, saya butuh waktu sendiri untuk mengisi energi", nilai: "I" } },
  { no: 2, dik: "E/I", a: { teks: "Saya berpikir sambil bicara", nilai: "E" }, b: { teks: "Saya berpikir dulu baru bicara", nilai: "I" } },
  { no: 3, dik: "E/I", a: { teks: "Lingkaran pertemanan saya luas", nilai: "E" }, b: { teks: "Lingkaran pertemanan saya kecil tapi dalam", nilai: "I" } },
  { no: 4, dik: "E/I", a: { teks: "Diam terlalu lama membuat saya gelisah", nilai: "E" }, b: { teks: "Terlalu banyak interaksi membuat saya lelah", nilai: "I" } },
  { no: 5, dik: "E/I", a: { teks: "Saya mudah memulai obrolan dengan orang asing", nilai: "E" }, b: { teks: "Saya menunggu orang lain memulai", nilai: "I" } },
  { no: 6, dik: "E/I", a: { teks: "Kerja kelompok membuat saya produktif", nilai: "E" }, b: { teks: "Kerja sendiri membuat saya produktif", nilai: "I" } },
  { no: 7, dik: "E/I", a: { teks: "Akhir pekan ideal: keluar bersama banyak orang", nilai: "E" }, b: { teks: "Akhir pekan ideal: di rumah dengan hobi/orang terdekat", nilai: "I" } },
  { no: 8, dik: "S/N", a: { teks: "Saya fokus pada apa yang nyata dan terjadi sekarang", nilai: "S" }, b: { teks: "Saya fokus pada kemungkinan dan masa depan", nilai: "N" } },
  { no: 9, dik: "S/N", a: { teks: "Saya percaya pengalaman langsung", nilai: "S" }, b: { teks: "Saya percaya firasat dan pola", nilai: "N" } },
  { no: 10, dik: "S/N", a: { teks: "Instruksi langkah-demi-langkah membantu saya", nilai: "S" }, b: { teks: "Saya lebih suka gambaran besar lalu improvisasi", nilai: "N" } },
  { no: 11, dik: "S/N", a: { teks: "Saya orang yang praktis", nilai: "S" }, b: { teks: "Saya orang yang imajinatif", nilai: "N" } },
  { no: 12, dik: "S/N", a: { teks: "Detail dulu, baru kesimpulan", nilai: "S" }, b: { teks: "Kesimpulan dulu, detail menyusul", nilai: "N" } },
  { no: 13, dik: "S/N", a: { teks: "Saya menghargai tradisi dan cara yang sudah terbukti", nilai: "S" }, b: { teks: "Saya suka mencoba cara yang belum pernah ada", nilai: "N" } },
  { no: 14, dik: "S/N", a: { teks: "Percakapan favorit: hal konkret (kejadian, orang, tempat)", nilai: "S" }, b: { teks: "Percakapan favorit: ide, teori, makna", nilai: "N" } },
  { no: 15, dik: "T/F", a: { teks: "Keputusan terbaik datang dari analisis objektif", nilai: "T" }, b: { teks: "Keputusan terbaik mempertimbangkan perasaan semua pihak", nilai: "F" } },
  { no: 16, dik: "T/F", a: { teks: "Saya lebih menghargai kebenaran daripada kenyamanan", nilai: "T" }, b: { teks: "Saya lebih menghargai harmoni daripada menang debat", nilai: "F" } },
  { no: 17, dik: "T/F", a: { teks: "Kritik saya sampaikan langsung apa adanya", nilai: "T" }, b: { teks: "Kritik saya bungkus agar tidak menyakiti", nilai: "F" } },
  { no: 18, dik: "T/F", a: { teks: "Saat teman curhat, saya beri solusi", nilai: "T" }, b: { teks: "Saat teman curhat, saya dengarkan dan validasi perasaannya", nilai: "F" } },
  { no: 19, dik: "T/F", a: { teks: "Adil = semua diperlakukan sama sesuai aturan", nilai: "T" }, b: { teks: "Adil = mempertimbangkan situasi tiap orang", nilai: "F" } },
  { no: 20, dik: "T/F", a: { teks: "Saya dinilai orang sebagai tegas dan logis", nilai: "T" }, b: { teks: "Saya dinilai orang sebagai hangat dan pengertian", nilai: "F" } },
  { no: 21, dik: "T/F", a: { teks: "Konflik itu wajar demi hasil terbaik", nilai: "T" }, b: { teks: "Konflik sebaiknya dihindari demi hubungan", nilai: "F" } },
  { no: 22, dik: "J/P", a: { teks: "Saya suka rencana yang jelas dan pasti", nilai: "J" }, b: { teks: "Saya suka opsi tetap terbuka", nilai: "P" } },
  { no: 23, dik: "J/P", a: { teks: "Deadline saya selesaikan jauh sebelum waktunya", nilai: "J" }, b: { teks: "Saya bekerja paling baik mendekati deadline", nilai: "P" } },
  { no: 24, dik: "J/P", a: { teks: "Meja/ruang kerja saya rapi terorganisir", nilai: "J" }, b: { teks: "Meja saya berantakan tapi saya tahu letak semuanya", nilai: "P" } },
  { no: 25, dik: "J/P", a: { teks: "Perubahan rencana mendadak mengganggu saya", nilai: "J" }, b: { teks: "Perubahan rencana mendadak terasa seru", nilai: "P" } },
  { no: 26, dik: "J/P", a: { teks: "Liburan saya rencanakan detail (itinerary)", nilai: "J" }, b: { teks: "Liburan saya jalani spontan", nilai: "P" } },
  { no: 27, dik: "J/P", a: { teks: "Menyelesaikan tugas memberi kepuasan terbesar", nilai: "J" }, b: { teks: "Memulai hal baru memberi kepuasan terbesar", nilai: "P" } },
  { no: 28, dik: "J/P", a: { teks: "Keputusan cepat lebih baik daripada menggantung", nilai: "J" }, b: { teks: "Menunda keputusan = mengumpulkan info lebih banyak", nilai: "P" } },
];

export interface TipeInfo {
  kode: string;
  julukan: string;
  fungsi: string[];
  kekuatan: string[];
  kelemahan: string[];
  karier: string[];
  relasi: string;
  growth: string;
}

export const TIPE_16: Record<string, TipeInfo> = {
  INTJ: { kode: "INTJ", julukan: "Sang Arsitek", fungsi: ["Ni", "Te", "Fi", "Se"], kekuatan: ["strategis jangka panjang", "mandiri", "standar tinggi", "sistem thinker"], kelemahan: ["arogan intelektual", "tidak sabar dengan inefisiensi", "dingin secara emosional"], karier: ["strategist", "arsitek sistem", "ilmuwan", "founder"], relasi: "Setia tapi butuh ruang; menunjukkan cinta lewat tindakan & perbaikan hidup pasangan.", growth: "Latih empati verbal; tidak semua hal harus dioptimasi." },
  INTP: { kode: "INTP", julukan: "Sang Pemikir", fungsi: ["Ti", "Ne", "Si", "Fe"], kekuatan: ["analisis mendalam", "objektif", "kreatif konseptual"], kelemahan: ["prokrastinasi", "abai hal praktis", "sulit ekspresi emosi"], karier: ["programmer", "filsuf", "analis data", "peneliti"], relasi: "Butuh partner yang menghargai ruang berpikir; canggung tapi tulus.", growth: "Eksekusi > teori sempurna; selesaikan yang dimulai." },
  ENTJ: { kode: "ENTJ", julukan: "Sang Komandan", fungsi: ["Te", "Ni", "Se", "Fi"], kekuatan: ["decisive", "visioner eksekutor", "natural leader"], kelemahan: ["dominan", "tidak sabaran", "meremehkan perasaan"], karier: ["CEO", "direktur operasional", "konsultan", "politisi"], relasi: "Protektif dan ambisius untuk pasangan; harus belajar mendengar tanpa memperbaiki.", growth: "Kepemimpinan = melayani, bukan hanya mengarahkan." },
  ENTP: { kode: "ENTP", julukan: "Sang Pendebat", fungsi: ["Ne", "Ti", "Fe", "Si"], kekuatan: ["cepat berpikir", "inovatif", "persuasif", "adaptif"], kelemahan: ["suka berdebat demi debat", "bosan rutinitas", "banyak mulai sedikit selesai"], karier: ["entrepreneur", "marketer", "pengacara", "kreator konten"], relasi: "Seru dan penuh ide; butuh stimulasi intelektual dari pasangan.", growth: "Komitmen pada satu hal sampai tuntas." },
  INFJ: { kode: "INFJ", julukan: "Sang Advokat", fungsi: ["Ni", "Fe", "Ti", "Se"], kekuatan: ["insight mendalam tentang orang", "idealis terarah", "penulis/komunikator makna"], kelemahan: ["perfeksionis", "mudah burnout", "terlalu privat"], karier: ["konselor", "penulis", "HR strategis", "pemimpin nirlaba"], relasi: "Mencari kedalaman, bukan kuantitas; door-slam jika dikhianati.", growth: "Terima ketidaksempurnaan; komunikasikan kebutuhan sendiri." },
  INFP: { kode: "INFP", julukan: "Sang Mediator", fungsi: ["Fi", "Ne", "Si", "Te"], kekuatan: ["integritas nilai", "empati kreatif", "imajinasi kaya"], kelemahan: ["terlalu idealis", "menghindari konflik", "sulit praktis"], karier: ["penulis", "desainer", "psikolog", "seniman"], relasi: "Romantis idealis; kecewa jika realita tak sesuai bayangan.", growth: "Nilai butuh diwujudkan lewat aksi nyata, bukan hanya dirasakan." },
  ENFJ: { kode: "ENFJ", julukan: "Sang Protagonis", fungsi: ["Fe", "Ni", "Se", "Ti"], kekuatan: ["inspirator", "organizer manusia", "karismatik tulus"], kelemahan: ["terlalu mengorbankan diri", "sensitif kritik", "mengatur hidup orang"], karier: ["guru", "pemimpin komunitas", "public speaker", "HRD"], relasi: "Memberi total; harus belajar menerima juga.", growth: "Kamu tidak bertanggung jawab atas kebahagiaan semua orang." },
  ENFP: { kode: "ENFP", julukan: "Sang Juru Kampanye", fungsi: ["Ne", "Fi", "Te", "Si"], kekuatan: ["antusiasme menular", "kreatif", "koneksi cepat dengan orang"], kelemahan: ["fokus buyar", "overcommit", "drama emosional"], karier: ["kreator", "event/campaign", "jurnalis", "brand storyteller"], relasi: "Hangat dan spontan; butuh kebebasan dalam komitmen.", growth: "Sistem dan rutinitas adalah teman kreativitas, bukan musuh." },
  ISTJ: { kode: "ISTJ", julukan: "Sang Logistikus", fungsi: ["Si", "Te", "Fi", "Ne"], kekuatan: ["andal", "teliti", "integritas tinggi", "tahan rutinitas"], kelemahan: ["kaku pada aturan", "resisten perubahan", "dianggap dingin"], karier: ["auditor", "PNS/birokrat", "akuntan", "engineer QA"], relasi: "Setia lewat konsistensi; cinta = tanggung jawab.", growth: "Kadang aturan boleh dilanggar demi hal yang lebih penting." },
  ISFJ: { kode: "ISFJ", julukan: "Sang Pembela", fungsi: ["Si", "Fe", "Ti", "Ne"], kekuatan: ["perhatian pada detail orang", "loyal", "pekerja tekun di balik layar"], kelemahan: ["sulit menolak", "memendam", "takut perubahan"], karier: ["perawat", "admin", "guru SD", "support ops"], relasi: "Pengurus alami; jangan sampai dimanfaatkan.", growth: "Kebutuhanmu sama pentingnya dengan kebutuhan orang lain." },
  ESTJ: { kode: "ESTJ", julukan: "Sang Eksekutif", fungsi: ["Te", "Si", "Ne", "Fi"], kekuatan: ["organisator ulung", "tegas", "menjaga standar & tradisi"], kelemahan: ["keras kepala", "judgemental", "sulit rileks"], karier: ["manajer operasional", "kepala proyek", "militer/polisi", "GM"], relasi: "Stabil dan bisa diandalkan; belajar fleksibel pada perbedaan.", growth: "Efektivitas manusia tidak selalu bisa diukur seperti mesin." },
  ESFJ: { kode: "ESFJ", julukan: "Sang Konsul", fungsi: ["Fe", "Si", "Ne", "Ti"], kekuatan: ["perekat sosial", "praktis membantu", "loyal komunitas"], kelemahan: ["butuh validasi", "sulit terima kritik", "terlalu peduli status sosial"], karier: ["event coordinator", "perhotelan", "sales relationship", "admin komunitas"], relasi: "Perhatian penuh; waspadai people-pleasing.", growth: "Harga dirimu tidak ditentukan pendapat orang." },
  ISTP: { kode: "ISTP", julukan: "Sang Virtuoso", fungsi: ["Ti", "Se", "Ni", "Fe"], kekuatan: ["problem solver praktis", "tenang di krisis", "mahir alat/teknis"], kelemahan: ["susah komitmen jangka panjang", "tertutup", "bosan cepat"], karier: ["teknisi", "pilot/mekanik", "forensik", "atlet ekstrem"], relasi: "Butuh ruang besar; menunjukkan sayang lewat memperbaiki barangmu.", growth: "Bicarakan isi kepala; orang bukan pembaca pikiran." },
  ISFP: { kode: "ISFP", julukan: "Sang Petualang", fungsi: ["Fi", "Se", "Ni", "Te"], kekuatan: ["estetika kuat", "hidup di momen", "lembut tapi berprinsip"], kelemahan: ["menghindari perencanaan", "terlalu privat", "mudah tersinggung"], karier: ["fotografer", "desainer", "chef", "videografer"], relasi: "Penuh gestur kecil bermakna; jangan dikekang.", growth: "Rencana jangka panjang tidak membunuh spontanitas." },
  ESTP: { kode: "ESTP", julukan: "Sang Pengusaha", fungsi: ["Se", "Ti", "Fe", "Ni"], kekuatan: ["aksi cepat", "persuasif di lapangan", "berani risiko"], kelemahan: ["impulsif", "tidak sabar teori", "abai konsekuensi jangka panjang"], karier: ["sales lapangan", "trader", "event ops", "negosiator"], relasi: "Seru dan spontan; komitmen butuh usaha sadar.", growth: "Pikirkan langkah ketiga, bukan hanya langkah pertama." },
  ESFP: { kode: "ESFP", julukan: "Sang Penghibur", fungsi: ["Se", "Fi", "Te", "Ni"], kekuatan: ["energi positif", "spontan menghidupkan suasana", "praktis membantu"], kelemahan: ["sulit fokus jangka panjang", "boros", "menghindari hal berat"], karier: ["entertainer", "MC", "tour guide", "sosial media talent"], relasi: "Hangat dan menyenangkan; belajar hadapi percakapan sulit.", growth: "Masalah yang dihindari akan tumbuh, bukan hilang." },
};

export const FUNGSI_KOGNITIF: Record<string, string> = {
  Ni: "Intuisi Introvert — sintesis pola jadi satu visi masa depan",
  Ne: "Intuisi Ekstravert — eksplorasi banyak kemungkinan dari satu titik",
  Si: "Sensing Introvert — memori detail & perbandingan dengan pengalaman lampau",
  Se: "Sensing Ekstravert — kesadaran penuh momen ini, aksi real-time",
  Ti: "Thinking Introvert — kerangka logika internal, presisi konsep",
  Te: "Thinking Ekstravert — organisasi eksternal, efisiensi & hasil terukur",
  Fi: "Feeling Introvert — kompas nilai personal, autentisitas",
  Fe: "Feeling Ekstravert — harmoni kelompok, membaca & mengelola emosi bersama",
};

/** jawaban: map nomor item (1-28) → "a" | "b". Tiap dikotomi 7 item (ganjil, tak mungkin seri). */
export function skorMbti(jawaban: Record<number, "a" | "b">): MbtiResult {
  const hitung: Record<string, number> = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  for (const item of MBTI_ITEMS) {
    const pilihan = jawaban[item.no];
    if (pilihan !== "a" && pilihan !== "b") {
      throw new Error(`Jawaban item ${item.no} tidak valid`);
    }
    hitung[item[pilihan].nilai] += 1;
  }
  const pasangan: [string, string][] = [["E", "I"], ["S", "N"], ["T", "F"], ["J", "P"]];
  let tipe = "";
  const kekuatan: Record<string, number> = {};
  for (const [x, y] of pasangan) {
    const menang = hitung[x] >= hitung[y] ? x : y;
    const total = hitung[x] + hitung[y];
    tipe += menang;
    kekuatan[menang] = Math.round((hitung[menang] / total) * 100);
  }
  return { tipe, kekuatan, sumber: "tes", tanggal: new Date().toISOString() };
}

/**
 * Prediksi tipe 16 dari Big Five (persona-db/engine/profile-engine.json —
 * korelasi riset: E↔Extraversion, N(intuition)↔Openness, F↔Agreeableness, J↔Conscientiousness).
 * Kuesioner 16 tipe menimpa prediksi ini.
 */
export function prediksiMbtiDariBigFive(persen: Record<BigFiveDim, number>): MbtiResult {
  const huruf = (skor: number, tinggi: string, rendah: string) =>
    skor >= 50 ? tinggi : rendah;
  const kuat = (skor: number) => Math.round(50 + Math.abs(skor - 50));
  const tipe =
    huruf(persen.E, "E", "I") +
    huruf(persen.O, "N", "S") +
    huruf(persen.A, "F", "T") +
    huruf(persen.C, "J", "P");
  return {
    tipe,
    kekuatan: {
      [tipe[0]]: kuat(persen.E),
      [tipe[1]]: kuat(persen.O),
      [tipe[2]]: kuat(persen.A),
      [tipe[3]]: kuat(persen.C),
    },
    sumber: "prediksi_big_five",
  };
}
