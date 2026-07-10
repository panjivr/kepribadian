import type { ItemLikertDimensi } from "@/lib/skoring";

/**
 * Pola Pikir Berkembang (Growth vs Fixed Mindset) — Carol Dweck.
 * Satu dimensi "growth": makin tinggi = makin percaya kemampuan bisa tumbuh.
 * Item bernuansa fixed mindset dibalik (key -1). Item original.
 */
export type MindsetDim = "growth";

export function bandMindset(persen: number): { label: string; warna: string; narasi: string } {
  if (persen >= 75)
    return {
      label: "Pola Pikir Berkembang Kuat",
      warna: "#30d158",
      narasi:
        "Kamu yakin kemampuan bisa tumbuh lewat usaha, strategi, & belajar dari kegagalan. Kamu memandang tantangan sebagai kesempatan berkembang, bukan ujian harga diri.",
    };
  if (persen >= 58)
    return {
      label: "Cenderung Berkembang",
      warna: "#67e8f9",
      narasi:
        "Kamu lebih sering percaya kemampuan bisa diasah. Di beberapa area kamu masih bisa terpancing merasa 'ini memang bukan bakatku' — kenali momen itu.",
    };
  if (persen >= 42)
    return {
      label: "Campuran",
      warna: "#818cf8",
      narasi:
        "Pola pikirmu bergantung situasi: berkembang di bidang yang kamu kuasai, tetap (fixed) di bidang yang terasa asing. Wajar — dan bisa digeser ke arah bertumbuh.",
    };
  return {
    label: "Cenderung Pola Pikir Tetap",
    warna: "#ff9f0a",
    narasi:
      "Kamu mungkin sering merasa kemampuan itu bawaan yang sulit diubah, sehingga menghindari tantangan agar tak terlihat gagal. Kabar baiknya: pola pikir itu sendiri bisa diubah.",
  };
}

export const MINDSET_TIPS: string[] = [
  "Tambahkan kata 'belum' — bukan 'aku tidak bisa', tapi 'aku belum bisa'. Satu kata mengubah kegagalan jadi proses.",
  "Puji proses & strategi (usaha, cara belajar), bukan label 'pintar/berbakat' — pada diri sendiri maupun orang lain.",
  "Perlakukan kesalahan sebagai data: apa yang bisa dicoba beda lain kali?",
  "Pilih tantangan yang sedikit di atas kemampuanmu — di sanalah otak paling banyak tumbuh.",
  "Belajar dari orang yang lebih hebat sebagai inspirasi & sumber strategi, bukan ancaman bagi harga diri.",
];

export const MINDSET_ITEMS: (ItemLikertDimensi & { dim: MindsetDim; bantuan: string })[] = [
  // Item fixed mindset (dibalik: setuju = growth rendah)
  { no: 1, dim: "growth", key: -1, teks: "Kecerdasan seseorang adalah sesuatu yang mendasar & sulit diubah.", bantuan: "Terbalik: makin setuju, makin 'fixed'. Contoh keyakinan fixed: 'IQ ya segitu-gitu saja seumur hidup.'" },
  { no: 2, dim: "growth", key: -1, teks: "Kamu bisa belajar hal baru, tapi kecerdasan dasarmu tak bisa banyak berubah.", bantuan: "Terbalik: ini keyakinan bahwa 'plafon' kemampuan sudah tetap sejak lahir." },
  { no: 3, dim: "growth", key: -1, teks: "Bakat itu bawaan — kalau bukan bakatmu, percuma dipaksakan.", bantuan: "Terbalik: fixed mindset menyerah sebelum mencoba karena merasa 'bukan bakatnya'." },
  { no: 4, dim: "growth", key: -1, teks: "Saya menghindari tugas yang berisiko membuat saya terlihat gagal.", bantuan: "Terbalik: menghindari tantangan demi menjaga citra 'pintar' adalah ciri pola pikir tetap." },
  { no: 5, dim: "growth", key: -1, teks: "Kritik atas hasil kerja saya terasa seperti serangan pada diri saya.", bantuan: "Terbalik: bila kritik terasa menyerang harga diri, itu tanda fixed mindset. Analogi: menganggap nilai ujian = nilai dirimu." },
  { no: 6, dim: "growth", key: -1, teks: "Kalau harus berusaha keras, berarti saya memang tidak berbakat di bidang itu.", bantuan: "Terbalik: fixed mindset melihat usaha sebagai bukti kekurangan, bukan jalan bertumbuh." },
  // Item growth mindset (positif)
  { no: 7, dim: "growth", teks: "Seberapa pun tingkat kemampuan saya sekarang, saya bisa mengubahnya cukup banyak.", bantuan: "Contoh: 'Aku belum jago, tapi dengan latihan aku bisa jauh lebih baik.'" },
  { no: 8, dim: "growth", teks: "Saya menyukai tantangan yang membuat saya belajar, meski awalnya sulit.", bantuan: "Analogi: seperti naik level di game — sulit itu tanda kamu sedang tumbuh." },
  { no: 9, dim: "growth", teks: "Kegagalan adalah kesempatan belajar, bukan bukti bahwa saya tidak mampu.", bantuan: "Contoh: gagal ujian → menganalisis bab mana yang lemah, lalu memperbaikinya." },
  { no: 10, dim: "growth", teks: "Usaha & strategi yang tepat adalah jalan utama menjadi mahir.", bantuan: "Contoh: percaya latihan terarah, bukan sekadar 'bakat', yang membuat orang hebat." },
  { no: 11, dim: "growth", teks: "Saya bisa belajar banyak dari orang yang lebih hebat dari saya.", bantuan: "Analogi: melihat orang jago sebagai guru & inspirasi, bukan ancaman." },
  { no: 12, dim: "growth", teks: "Umpan balik & kritik membantu saya berkembang.", bantuan: "Contoh: meminta masukan justru untuk tahu bagian mana yang perlu diperbaiki." },
];
