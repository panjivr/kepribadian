import type { Tier } from "@/lib/types";
import type { SistemId } from "@/lib/storage";

export type JenisSistem =
  | "instan" // dihitung dari data lahir, tampil di /hasil
  | "tes" // kuesioner interaktif
  | "input" // user memasukkan hasil eksternal
  | "refleksi" // cast/kuis hiburan (iching, grafologi)
  | "artikel" // konten edukasi (face reading)
  | "soon"; // belum tersedia

export interface SistemInfo {
  nama: string;
  tier: Tier;
  ringkas: string;
  jenis: JenisSistem;
  route?: string;
  durasi?: string;
  /** kunci pengecekan penyelesaian di localStorage */
  cek?: SistemId | "bigfive" | "mbti";
  tersedia: boolean;
}

/** 27 sistem dari persona-db/master-index.json. */
export const SEMUA_SISTEM: SistemInfo[] = [
  { nama: "Big Five (OCEAN)", tier: "scientific", ringkas: "Fondasi — 50 item IPIP, 5 dimensi kepribadian", jenis: "tes", route: "/tes/big-five", durasi: "±7 menit · 50 pernyataan", cek: "bigfive", tersedia: true },
  { nama: "HEXACO", tier: "scientific", ringkas: "6 dimensi termasuk Kejujuran-Kerendahan Hati", jenis: "tes", route: "/tes/hexaco", durasi: "±4 menit · 24 pernyataan", cek: "hexaco", tersedia: true },
  { nama: "VIA Kekuatan Karakter", tier: "scientific", ringkas: "Peringkat 24 kekuatan, 5 signature strengths", jenis: "tes", route: "/tes/kekuatan-karakter", durasi: "±6 menit · 48 pernyataan", cek: "via", tersedia: true },
  { nama: "Peta Bakat Djiva", tier: "semi_scientific", ringkas: "Alternatif CliftonStrengths gratis — 24 bakat, 4 domain, 7 bakat utama", jenis: "tes", route: "/tes/peta-bakat", durasi: "±7 menit · 48 pernyataan", cek: "peta_bakat", tersedia: true },
  { nama: "Kompas Moral", tier: "scientific", ringkas: "6 fondasi kompas moral (Haidt)", jenis: "tes", route: "/tes/kompas-moral", durasi: "±3 menit · 18 pernyataan", cek: "mft", tersedia: true },
  { nama: "Estimasi Kognitif (IQ)", tier: "scientific", ringkas: "Penalaran logis, numerik, verbal & pola — 48 soal diacak dari bank 116 soal (mudah→sulit)", jenis: "tes", route: "/tes/iq", durasi: "±18 menit · 48 soal acak", cek: "iq", tersedia: true },
  { nama: "Minat Karier & Jurusan (RIASEC)", tier: "scientific", ringkas: "Holland Codes → peta SMA ke Kuliah: jurusan, prospek & kampus", jenis: "tes", route: "/tes/minat-karier", durasi: "±5 menit · 36 pernyataan", cek: "riasec", tersedia: true },
  { nama: "Gaya Kelekatan (Attachment)", tier: "scientific", ringkas: "Pola kedekatan dalam relasi: Aman, Cemas, Menghindar, Cemas-Menghindar", jenis: "tes", route: "/tes/kelekatan", durasi: "±3 menit · 16 pernyataan", cek: "attachment", tersedia: true },
  { nama: "Bahasa Kasih (Love Languages)", tier: "semi_scientific", ringkas: "5 bahasa cinta — cara kamu merasa & memberi cinta", jenis: "tes", route: "/tes/bahasa-kasih", durasi: "±3 menit · 20 pernyataan", cek: "love_language", tersedia: true },
  { nama: "Grit (Ketabahan)", tier: "scientific", ringkas: "Konsistensi minat + ketekunan usaha jangka panjang", jenis: "tes", route: "/tes/grit", durasi: "±2 menit · 12 pernyataan", cek: "grit", tersedia: true },
  { nama: "Pola Pikir Berkembang", tier: "scientific", ringkas: "Growth vs Fixed Mindset (Dweck) + cara menumbuhkan", jenis: "tes", route: "/tes/pola-pikir", durasi: "±2 menit · 12 pernyataan", cek: "growth_mindset", tersedia: true },
  { nama: "Gaya Menghadapi Konflik", tier: "semi_scientific", ringkas: "5 gaya Thomas-Kilmann: bersaing, kolaborasi, kompromi, dll", jenis: "tes", route: "/tes/gaya-konflik", durasi: "±3 menit · 20 pernyataan", cek: "conflict_style", tersedia: true },
  { nama: "Nilai Hidup (Schwartz)", tier: "scientific", ringkas: "10 nilai dasar + 4 orientasi hidup lintas budaya", jenis: "tes", route: "/tes/nilai", durasi: "±3 menit · 20 pernyataan", cek: "values", tersedia: true },
  { nama: "16 Tipe Kepribadian", tier: "semi_scientific", ringkas: "28 item, 16 tipe + fungsi kognitif", jenis: "tes", route: "/tes/tipe-16", durasi: "±4 menit · 28 pilihan", cek: "mbti", tersedia: true },
  { nama: "DISC", tier: "semi_scientific", ringkas: "Gaya kerja D-I-S-C + kombinasi", jenis: "tes", route: "/tes/disc", durasi: "±3 menit · 24 pernyataan", cek: "disc", tersedia: true },
  { nama: "Enneagram", tier: "semi_scientific", ringkas: "9 tipe + wing + arah stres/growth", jenis: "tes", route: "/tes/enneagram", durasi: "±5 menit · 36 pernyataan", cek: "enneagram", tersedia: true },
  { nama: "4 Temperamen", tier: "semi_scientific", ringkas: "Sanguinis, Koleris, Melankolis, Plegmatis", jenis: "tes", route: "/tes/temperamen", durasi: "±2 menit · 16 pernyataan", cek: "temperament", tersedia: true },
  { nama: "Kecerdasan Majemuk", tier: "semi_scientific", ringkas: "Profil 8 kecerdasan Gardner", jenis: "tes", route: "/tes/kecerdasan-majemuk", durasi: "±3 menit · 24 pernyataan", cek: "mi", tersedia: true },
  { nama: "Gaya Belajar VAK", tier: "semi_scientific", ringkas: "Visual, Auditori, Kinestetik", jenis: "tes", route: "/tes/gaya-belajar", durasi: "±3 menit · 15 pilihan", cek: "vak", tersedia: true },
  { nama: "Dominansi Gaya Berpikir", tier: "semi_scientific", ringkas: "4 kuadran gaya berpikir", jenis: "tes", route: "/tes/gaya-berpikir", durasi: "±2 menit · 16 pernyataan", cek: "hbdi", tersedia: true },
  { nama: "True Colors", tier: "semi_scientific", ringkas: "4 warna kepribadian", jenis: "tes", route: "/tes/warna", durasi: "±2 menit · 12 pernyataan", cek: "true_colors", tersedia: true },
  { nama: "Tes EQ (Kecerdasan Emosional)", tier: "semi_scientific", ringkas: "5 domain Goleman + langkah praktis", jenis: "tes", route: "/tes/eq", durasi: "±7 menit · 50 pernyataan", cek: "eq", tersedia: true },
  { nama: "Eysenck PEN", tier: "scientific", ringkas: "Psychoticism–Extraversion–Neuroticism (dari Big Five)", jenis: "instan", route: "/profil", tersedia: true },
  { nama: "Zodiak Barat", tier: "cultural_spiritual", ringkas: "Sun sign, elemen & modalitas", jenis: "instan", route: "/hasil", tersedia: true },
  { nama: "Shio", tier: "cultural_spiritual", ringkas: "Zodiak Tiongkok + elemen, akurat tanggal Imlek", jenis: "instan", route: "/hasil", tersedia: true },
  { nama: "Weton Jawa", tier: "cultural_spiritual", ringkas: "Hari + pasaran + neptu + watak", jenis: "instan", route: "/hasil", tersedia: true },
  { nama: "Primbon Jawa", tier: "cultural_spiritual", ringkas: "Rejeki, pangarasan, kearifan lokal", jenis: "instan", route: "/hasil", tersedia: true },
  { nama: "Numerologi", tier: "cultural_spiritual", ringkas: "Life path, destiny, soul urge, personality", jenis: "instan", route: "/hasil", tersedia: true },
  { nama: "Feng Shui Kua", tier: "cultural_spiritual", ringkas: "Angka Kua + arah keberuntungan", jenis: "instan", route: "/hasil", tersedia: true },
  { nama: "BaZi (Empat Pilar)", tier: "cultural_spiritual", ringkas: "Day Master + keseimbangan 5 elemen", jenis: "instan", route: "/hasil", tersedia: true },
  { nama: "I Ching", tier: "cultural_spiritual", ringkas: "64 hexagram untuk refleksi", jenis: "refleksi", route: "/tes/iching", durasi: "cast koin", cek: "iching", tersedia: true },
  { nama: "Human Design", tier: "cultural_spiritual", ringkas: "5 tipe + strategi + authority", jenis: "input", route: "/tes/human-design", durasi: "input tipe", cek: "human_design", tersedia: true },
  { nama: "STIFIn", tier: "pseudoscience", ringkas: "Referensi — input hasil eksternal", jenis: "input", route: "/tes/stifin", durasi: "input hasil", cek: "stifin", tersedia: true },
  { nama: "Golongan Darah", tier: "pseudoscience", ringkas: "Profil A/B/O/AB ala Jepang", jenis: "input", route: "/tes/golongan-darah", durasi: "input golongan", cek: "blood_type", tersedia: true },
  { nama: "Grafologi", tier: "pseudoscience", ringkas: "Interpretasi tulisan tangan (hiburan)", jenis: "refleksi", route: "/tes/grafologi", durasi: "kuis singkat", tersedia: true },
  { nama: "Face Reading", tier: "pseudoscience", ringkas: "Physiognomy tradisional (edukasi)", jenis: "artikel", route: "/tes/face-reading", durasi: "artikel", tersedia: true },
  { nama: "CliftonStrengths", tier: "scientific", ringkas: "Referensi 34 tema Gallup + 4 domain", jenis: "input", route: "/tes/clifton-strengths", durasi: "input hasil", cek: "clifton", tersedia: true },
];
