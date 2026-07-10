import type { ItemLikertDimensi } from "@/lib/skoring";

/**
 * Gaya Kelekatan (Attachment Style) — teori kelekatan dewasa.
 * Dua dimensi: Kecemasan (anxiety) & Penghindaran (avoidance). Kombinasi
 * tinggi/rendah keduanya menghasilkan 4 gaya (model Bartholomew). Item original.
 */

export type AttachDim = "cemas" | "hindar";

export type GayaKelekatan = "aman" | "cemas" | "menghindar" | "cemas_menghindar";

export interface GayaInfo {
  nama: string;
  julukan: string;
  populasi: string;
  deskripsi: string;
  dalamRelasi: string;
  kekuatan: string[];
  tantangan: string[];
  bertumbuh: string;
  pasanganMendukung: string;
  warna: string;
}

export const GAYA_INFO: Record<GayaKelekatan, GayaInfo> = {
  aman: {
    nama: "Aman (Secure)",
    julukan: "Sang Jangkar",
    populasi: "~55% populasi",
    deskripsi:
      "Kamu nyaman dengan kedekatan sekaligus kemandirian. Percaya bahwa dirimu layak dicintai dan orang lain umumnya bisa diandalkan.",
    dalamRelasi:
      "Mudah percaya, terbuka soal perasaan, dan menyelesaikan konflik tanpa drama berlebihan. Menjadi 'pelabuhan aman' bagi pasangan.",
    kekuatan: ["komunikasi terbuka", "percaya sehat", "regulasi emosi baik", "mandiri sekaligus hangat"],
    tantangan: ["bisa kurang sabar pada pola tak-aman pasangan", "menganggap semua orang seaman dirinya"],
    bertumbuh: "Pertahankan pola sehatmu, dan jadilah teladan rasa aman bagi pasangan yang polanya berbeda.",
    pasanganMendukung: "Hargai keterbukaanmu; hubungan denganmu cenderung stabil & saling menumbuhkan.",
    warna: "#30d158",
  },
  cemas: {
    nama: "Cemas / Preokupasi (Anxious)",
    julukan: "Sang Pencari Kepastian",
    populasi: "~20% populasi",
    deskripsi:
      "Kamu sangat menghargai kedekatan, tetapi sering khawatir tidak cukup dicintai atau akan ditinggalkan. Butuh penegasan yang cukup sering.",
    dalamRelasi:
      "Sangat perhatian & penuh kasih, namun bisa cemas saat pasangan terasa 'jauh', dan butuh banyak reassurance.",
    kekuatan: ["penuh perhatian", "ekspresif secara emosional", "berkomitmen kuat", "peka pada pasangan"],
    tantangan: ["takut ditinggalkan", "butuh validasi berlebih", "mudah cemburu/overthinking", "sulit menenangkan diri sendiri"],
    bertumbuh: "Latih menenangkan diri sendiri (self-soothing) & komunikasikan kebutuhan dengan tenang, bukan lewat protes/menuntut.",
    pasanganMendukung: "Beri kepastian yang konsisten & tepati janji kecil — konsistensi menurunkan kecemasannya jauh lebih dari kata-kata besar.",
    warna: "#ff9f0a",
  },
  menghindar: {
    nama: "Menghindar / Dismissive (Avoidant)",
    julukan: "Sang Mandiri",
    populasi: "~23% populasi",
    deskripsi:
      "Kamu sangat menghargai kemandirian dan ruang pribadi. Kedekatan yang terlalu intens bisa terasa menekan, jadi kamu cenderung menjaga jarak emosional.",
    dalamRelasi:
      "Bisa diandalkan & tenang, tetapi cenderung menyimpan perasaan dan menarik diri saat masalah, sehingga pasangan bisa merasa 'ditutup'.",
    kekuatan: ["mandiri", "tenang di krisis", "tidak menuntut", "menjaga batas diri"],
    tantangan: ["sulit terbuka soal perasaan", "menarik diri saat konflik", "terkesan dingin/menjauh", "meremehkan kebutuhan akan kedekatan"],
    bertumbuh: "Latih berbagi satu perasaan kecil tiap hari & tetap 'hadir' saat ingin menarik diri — kedekatan tidak menghilangkan kemandirianmu.",
    pasanganMendukung: "Beri ruang tanpa mengancam, dan hargai caranya menunjukkan sayang lewat tindakan, bukan kata.",
    warna: "#3b82f6",
  },
  cemas_menghindar: {
    nama: "Cemas-Menghindar / Fearful (Disorganized)",
    julukan: "Sang Terombang-ambing",
    populasi: "~2–5% populasi",
    deskripsi:
      "Kamu mendambakan kedekatan sekaligus takut terluka olehnya — sehingga bisa mendekat lalu menjauh. Sering berakar dari luka relasi masa lalu.",
    dalamRelasi:
      "Perasaan bisa naik-turun tajam: ingin dekat tapi juga takut dilukai, sehingga sinyal ke pasangan kadang membingungkan.",
    kekuatan: ["empati mendalam pada luka orang", "sensitif & penuh perasaan", "kapasitas cinta besar saat merasa aman"],
    tantangan: ["konflik batin dekat-vs-jauh", "sulit percaya", "reaksi emosi kuat", "pola pasang-surut"],
    bertumbuh: "Pertimbangkan dukungan konselor/terapis; bangun rasa aman perlahan lewat relasi yang konsisten & tanpa kekerasan.",
    pasanganMendukung: "Konsistensi, kesabaran, dan kelembutan sangat berarti; jangan membalas penarikan diri dengan penghukuman.",
    warna: "#8b5cf6",
  },
};

export function klasifikasiGaya(persenCemas: number, persenHindar: number): GayaKelekatan {
  const cemasTinggi = persenCemas >= 50;
  const hindarTinggi = persenHindar >= 50;
  if (!cemasTinggi && !hindarTinggi) return "aman";
  if (cemasTinggi && !hindarTinggi) return "cemas";
  if (!cemasTinggi && hindarTinggi) return "menghindar";
  return "cemas_menghindar";
}

export const ATTACHMENT_ITEMS: (ItemLikertDimensi & { dim: AttachDim; bantuan: string })[] = [
  // ----------------------------- KECEMASAN -----------------------------
  { no: 1, dim: "cemas", teks: "Saya khawatir orang yang saya sayangi akan meninggalkan saya.", bantuan: "Contoh: saat pasangan sibuk, muncul pikiran 'jangan-jangan dia mulai menjauh'." },
  { no: 2, dim: "cemas", teks: "Saya butuh sering diyakinkan bahwa saya benar-benar dicintai.", bantuan: "Analogi: seperti perlu 'mengecek sinyal' berulang agar merasa aman dalam hubungan." },
  { no: 3, dim: "cemas", teks: "Saya cemas atau gelisah jika pesan saya lama dibalas orang dekat.", bantuan: "Contoh: chat belum dibalas sebentar, pikiranmu sudah membayangkan yang tidak-tidak." },
  { no: 4, dim: "cemas", teks: "Saya sering takut tidak cukup berharga bagi orang yang saya sayangi.", bantuan: "Maksudnya: diam-diam merasa 'apa iya aku pantas dicintai sebesar itu?'." },
  { no: 5, dim: "cemas", teks: "Saya mudah cemburu atau merasa tidak aman dalam hubungan.", bantuan: "Contoh: melihat pasangan akrab dengan orang lain langsung memicu rasa tak nyaman." },
  { no: 6, dim: "cemas", teks: "Saya sangat terpukul ketika merasa diabaikan orang dekat.", bantuan: "Analogi: pengabaian kecil terasa seperti luka besar bagimu." },
  { no: 7, dim: "cemas", key: -1, teks: "Saya jarang mengkhawatirkan seberapa besar orang menyayangi saya.", bantuan: "Ini pernyataan terbalik: kalau ini sangat sesuai, kecemasan kelekatanmu justru rendah (bagus)." },
  { no: 8, dim: "cemas", teks: "Saya cenderung ingin selalu dekat saat menyayangi seseorang.", bantuan: "Contoh: kamu ingin sering bersama & terhubung, dan jarak terasa berat." },
  // ----------------------------- PENGHINDARAN -----------------------------
  { no: 9, dim: "hindar", teks: "Saya tidak nyaman berbagi perasaan terdalam dengan orang lain.", bantuan: "Contoh: saat ditanya 'kamu lagi ngerasa apa?', kamu cenderung menjawab 'nggak apa-apa'." },
  { no: 10, dim: "hindar", teks: "Saya lebih suka mandiri daripada bergantung pada orang lain.", bantuan: "Analogi: 'urus sendiri' terasa lebih aman daripada meminta bantuan." },
  { no: 11, dim: "hindar", teks: "Saat ada masalah, saya cenderung menarik diri daripada mencari dukungan.", bantuan: "Contoh: sedang berat, kamu memilih menyendiri, bukan bercerita." },
  { no: 12, dim: "hindar", teks: "Saya risih jika seseorang ingin terlalu dekat atau intim.", bantuan: "Maksudnya: kedekatan yang terlalu intens membuatmu ingin menarik napas & menjaga jarak." },
  { no: 13, dim: "hindar", teks: "Saya sulit sepenuhnya mempercayai pasangan/orang dekat.", bantuan: "Contoh: ada bagian dirimu yang tetap 'berjaga' meski sudah dekat." },
  { no: 14, dim: "hindar", key: -1, teks: "Saya nyaman bergantung pada orang yang saya cintai.", bantuan: "Ini pernyataan terbalik: kalau sangat sesuai, penghindaranmu justru rendah (nyaman dekat)." },
  { no: 15, dim: "hindar", teks: "Saya menjaga jarak emosional agar tidak terluka.", bantuan: "Analogi: seperti memasang 'pagar' di hati untuk berjaga-jaga." },
  { no: 16, dim: "hindar", key: -1, teks: "Saya mudah terbuka soal perasaan kepada orang dekat.", bantuan: "Ini pernyataan terbalik: kalau sangat sesuai, kamu tergolong terbuka (penghindaran rendah)." },
];
