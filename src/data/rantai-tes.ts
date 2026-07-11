/**
 * Rantai tes berkelanjutan (wizard). Urutan perjalanan yang disarankan:
 * fondasi ilmiah dulu, lalu kerangka populer, ditutup EQ & estimasi kognitif.
 * id di sini cocok dengan "cek" di sistem-list / sistemId storage
 * (plus "big_five" & "mbti" untuk dua halaman kustom).
 */
export interface LangkahTes {
  id: string;
  nama: string;
  href: string;
}

export const RANTAI_TES: LangkahTes[] = [
  { id: "big_five", nama: "Big Five (OCEAN)", href: "/tes/big-five" },
  { id: "hexaco", nama: "HEXACO", href: "/tes/hexaco" },
  { id: "mbti", nama: "16 Tipe Kepribadian", href: "/tes/tipe-16" },
  { id: "disc", nama: "DISC", href: "/tes/disc" },
  { id: "enneagram", nama: "Enneagram", href: "/tes/enneagram" },
  { id: "temperament", nama: "4 Temperamen", href: "/tes/temperamen" },
  { id: "via", nama: "VIA Kekuatan Karakter", href: "/tes/kekuatan-karakter" },
  { id: "peta_bakat", nama: "Peta Bakat Djiva", href: "/tes/peta-bakat" },
  { id: "mi", nama: "Kecerdasan Majemuk", href: "/tes/kecerdasan-majemuk" },
  { id: "vak", nama: "Gaya Belajar VAK", href: "/tes/gaya-belajar" },
  { id: "mft", nama: "Kompas Moral", href: "/tes/kompas-moral" },
  { id: "hbdi", nama: "Dominansi Gaya Berpikir", href: "/tes/gaya-berpikir" },
  { id: "true_colors", nama: "True Colors", href: "/tes/warna" },
  { id: "eq", nama: "Tes EQ (Kecerdasan Emosional)", href: "/tes/eq" },
  { id: "iq", nama: "Tes Estimasi Kognitif (IQ)", href: "/tes/iq" },
  { id: "riasec", nama: "Minat Karier & Jurusan (RIASEC)", href: "/tes/minat-karier" },
  { id: "grit", nama: "Grit (Ketabahan)", href: "/tes/grit" },
  { id: "growth_mindset", nama: "Pola Pikir Berkembang", href: "/tes/pola-pikir" },
  { id: "conflict_style", nama: "Gaya Menghadapi Konflik", href: "/tes/gaya-konflik" },
  { id: "values", nama: "Nilai Hidup (Schwartz)", href: "/tes/nilai" },
  { id: "dark_triad", nama: "Sisi Gelap (Dark Triad)", href: "/tes/sisi-gelap" },
  { id: "attachment", nama: "Gaya Kelekatan (Attachment)", href: "/tes/kelekatan" },
  { id: "love_language", nama: "Bahasa Kasih (Love Languages)", href: "/tes/bahasa-kasih" },
];

export function langkahBerikutnya(id: string): LangkahTes | null {
  const i = RANTAI_TES.findIndex((l) => l.id === id);
  if (i === -1 || i >= RANTAI_TES.length - 1) return null;
  return RANTAI_TES[i + 1];
}

export function posisiTes(id: string): { indeks: number; total: number } | null {
  const i = RANTAI_TES.findIndex((l) => l.id === id);
  if (i === -1) return null;
  return { indeks: i + 1, total: RANTAI_TES.length };
}
