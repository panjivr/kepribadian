import type { ItemLikertDimensi } from "@/lib/skoring";

/**
 * Sisi Gelap Kepribadian — Dark Triad (Machiavellianism, Narsisme, Psikopati),
 * berbasis kerangka Paulhus & Williams / SD3. Skor tinggi BUKAN vonis "jahat" —
 * ini alat kesadaran diri agar bisa mengelola sisi ini secara sehat. Item original.
 */
export type DarkDim = "makiaveli" | "narsisme" | "psikopati";

export const DARK_URUTAN: DarkDim[] = ["makiaveli", "narsisme", "psikopati"];

export const DARK_INFO: Record<
  DarkDim,
  { nama: string; deskripsi: string; sehat: string; warna: string }
> = {
  makiaveli: {
    nama: "Machiavellianism (Siasat)",
    deskripsi:
      "Kecenderungan strategis, manipulatif, dan menghalalkan cara demi tujuan; memandang orang secara kalkulatif.",
    sehat:
      "Sisi sehatnya: berpikir strategis & jeli membaca situasi. Salurkan untuk negosiasi & perencanaan yang tetap etis.",
    warna: "#8e8e93",
  },
  narsisme: {
    nama: "Narsisme (Kemegahan Diri)",
    deskripsi:
      "Rasa istimewa, haus kekaguman, dan merasa pantas mendapat perlakuan lebih.",
    sehat:
      "Sisi sehatnya: percaya diri & ambisi. Imbangi dengan mendengar umpan balik & menghargai kontribusi orang lain.",
    warna: "#ffd60a",
  },
  psikopati: {
    nama: "Psikopati (Dinginnya Rasa)",
    deskripsi:
      "Impulsif, pencari sensasi, dan rendah empati/rasa bersalah dalam bentuk subklinis (bukan diagnosis).",
    sehat:
      "Sisi sehatnya: berani & tahan tekanan. Latih empati & jeda sebelum bertindak agar tak melukai orang lain.",
    warna: "#ff453a",
  },
};

export function bandDark(persen: number): { label: string; narasi: string } {
  if (persen >= 66)
    return {
      label: "Tinggi",
      narasi: "Kecenderungan ini menonjol. Bukan berarti buruk — tapi sadari dampaknya pada orang lain dan kelola dengan sengaja.",
    };
  if (persen >= 40)
    return {
      label: "Sedang",
      narasi: "Ada pada kadar umum. Muncul di situasi tertentu; kenali pemicunya.",
    };
  return {
    label: "Rendah",
    narasi: "Kecenderungan ini kecil pada dirimu.",
  };
}

export const DARK_TIPS: string[] = [
  "Skor tinggi bukan vonis 'jahat' — ia hanya kecenderungan yang bisa dikelola. Kesadaran adalah langkah pertama.",
  "Latih empati: sebelum bertindak, bayangkan bagaimana perasaan pihak lain.",
  "Beri jeda pada dorongan impulsif — tanya 'apa akibatnya bagi orang lain?'",
  "Salurkan sisi strategis & percaya dirimu untuk tujuan yang membangun, bukan memanipulasi.",
  "Cari umpan balik jujur dari orang tepercaya — titik buta paling gelap ada di sini.",
];

export const DARK_ITEMS: (ItemLikertDimensi & { dim: DarkDim; bantuan: string })[] = [
  // Machiavellianism
  { no: 1, dim: "makiaveli", teks: "Saya cenderung memakai siasat untuk mendapatkan yang saya inginkan.", bantuan: "Contoh: mengatur langkah & timing demi tujuan, bukan sekadar berterus terang." },
  { no: 2, dim: "makiaveli", teks: "Menyimpan informasi penting untuk dipakai saat menguntungkan itu wajar.", bantuan: "Analogi: memegang kartu as untuk dimainkan di saat tepat." },
  { no: 3, dim: "makiaveli", teks: "Saya pandai mengatakan hal yang orang ingin dengar untuk memuluskan urusan.", bantuan: "Contoh: menyesuaikan ucapan agar orang bersedia membantu tujuanmu." },
  { no: 4, dim: "makiaveli", key: -1, teks: "Saya selalu berterus terang sepenuhnya, apa pun akibatnya bagi rencana saya.", bantuan: "Terbalik: makin jujur tanpa perhitungan, makin rendah kecenderungan siasat." },
  { no: 5, dim: "makiaveli", teks: "Kebanyakan orang bisa 'digerakkan' bila tahu titik lemahnya.", bantuan: "Pandangan kalkulatif terhadap orang — melihat tuas untuk menggerakkan mereka." },
  { no: 6, dim: "makiaveli", teks: "Saya suka merencanakan agar selalu selangkah di depan orang lain.", bantuan: "Contoh: menyiapkan beberapa skenario agar tak pernah kalah posisi." },
  // Narsisme
  { no: 7, dim: "narsisme", teks: "Saya menikmati menjadi pusat perhatian.", bantuan: "Contoh: merasa hidup saat semua mata tertuju padamu." },
  { no: 8, dim: "narsisme", teks: "Saya merasa pantas mendapat perlakuan istimewa.", bantuan: "Contoh: merasa aturan biasa mestinya tak berlaku ketat untukmu." },
  { no: 9, dim: "narsisme", teks: "Orang sering bilang saya spesial, dan saya setuju.", bantuan: "Rasa bahwa dirimu memang di atas rata-rata." },
  { no: 10, dim: "narsisme", key: -1, teks: "Saya merasa biasa saja, tidak lebih hebat dari kebanyakan orang.", bantuan: "Terbalik: makin merasa setara, makin rendah kemegahan diri." },
  { no: 11, dim: "narsisme", teks: "Saya sangat menikmati saat orang mengagumi saya.", bantuan: "Kekaguman terasa seperti bahan bakar utama." },
  { no: 12, dim: "narsisme", teks: "Saya berharap suatu hari pencapaian saya dikenang banyak orang.", bantuan: "Contoh: membayangkan nama/karya dikenang luas." },
  // Psikopati
  { no: 13, dim: "psikopati", teks: "Saya suka sensasi & berani ambil risiko meski berbahaya.", bantuan: "Contoh: tertarik pada hal ekstrem yang memacu adrenalin." },
  { no: 14, dim: "psikopati", teks: "Saya jarang merasa bersalah setelah menyakiti perasaan orang.", bantuan: "Rasa bersalah datang tipis atau cepat berlalu." },
  { no: 15, dim: "psikopati", teks: "Kalau ada yang menyakiti saya, membalas cepat itu wajar.", bantuan: "Dorongan balas tanpa banyak menimbang." },
  { no: 16, dim: "psikopati", key: -1, teks: "Saya mudah tersentuh melihat penderitaan orang lain.", bantuan: "Terbalik: makin mudah berempati, makin rendah kedinginan rasa." },
  { no: 17, dim: "psikopati", teks: "Aturan sering menghambat, jadi kadang wajar dilanggar.", bantuan: "Contoh: menganggap aturan sebagai penghalang, bukan pagar." },
  { no: 18, dim: "psikopati", teks: "Saya cenderung bertindak dulu, memikirkan akibatnya belakangan.", bantuan: "Impulsif — gas dulu, rem kemudian." },
];
