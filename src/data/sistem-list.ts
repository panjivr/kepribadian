import type { Tier } from "@/lib/types";

export interface SistemInfo {
  nama: string;
  tier: Tier;
  ringkas: string;
  tersedia: boolean;
}

/** 27 sistem dari persona-db/master-index.json. */
export const SEMUA_SISTEM: SistemInfo[] = [
  { nama: "Big Five (OCEAN)", tier: "scientific", ringkas: "Fondasi — 50 item IPIP, 5 dimensi kepribadian", tersedia: true },
  { nama: "16 Tipe Kepribadian", tier: "semi_scientific", ringkas: "28 item, 16 tipe + fungsi kognitif", tersedia: true },
  { nama: "Zodiak Barat", tier: "cultural_spiritual", ringkas: "Sun sign, elemen & modalitas", tersedia: true },
  { nama: "Shio", tier: "cultural_spiritual", ringkas: "Zodiak Tiongkok + elemen, akurat tanggal Imlek", tersedia: true },
  { nama: "Weton Jawa", tier: "cultural_spiritual", ringkas: "Hari + pasaran + neptu + watak", tersedia: true },
  { nama: "Primbon Jawa", tier: "cultural_spiritual", ringkas: "Rejeki, pangarasan, kearifan lokal", tersedia: true },
  { nama: "Numerologi", tier: "cultural_spiritual", ringkas: "Life path, destiny, soul urge, personality", tersedia: true },
  { nama: "Feng Shui Kua", tier: "cultural_spiritual", ringkas: "Angka Kua + arah keberuntungan", tersedia: true },
  { nama: "HEXACO", tier: "scientific", ringkas: "6 dimensi termasuk Kejujuran-Kerendahan hati", tersedia: false },
  { nama: "VIA Character Strengths", tier: "scientific", ringkas: "Peringkat 24 kekuatan karakter", tersedia: false },
  { nama: "Moral Foundations", tier: "scientific", ringkas: "6 fondasi kompas moral", tersedia: false },
  { nama: "Eysenck PEN", tier: "scientific", ringkas: "Psychoticism–Extraversion–Neuroticism", tersedia: false },
  { nama: "DISC", tier: "semi_scientific", ringkas: "Gaya kerja D-I-S-C + kombinasi", tersedia: false },
  { nama: "Enneagram", tier: "semi_scientific", ringkas: "9 tipe + wing + arah stres/growth", tersedia: false },
  { nama: "4 Temperamen", tier: "semi_scientific", ringkas: "Sanguinis, Koleris, Melankolis, Plegmatis", tersedia: false },
  { nama: "Multiple Intelligence", tier: "semi_scientific", ringkas: "Profil 8 kecerdasan Gardner", tersedia: false },
  { nama: "Gaya Belajar VAK", tier: "semi_scientific", ringkas: "Visual, Auditori, Kinestetik", tersedia: false },
  { nama: "HBDI (Dominansi Berpikir)", tier: "semi_scientific", ringkas: "4 kuadran gaya berpikir", tersedia: false },
  { nama: "True Colors", tier: "semi_scientific", ringkas: "4 warna kepribadian", tersedia: false },
  { nama: "CliftonStrengths", tier: "scientific", ringkas: "Referensi 34 tema (lisensi Gallup)", tersedia: false },
  { nama: "BaZi (Empat Pilar)", tier: "cultural_spiritual", ringkas: "4 pilar takdir + elemen dominan", tersedia: false },
  { nama: "Human Design", tier: "cultural_spiritual", ringkas: "5 tipe + authority + profile", tersedia: false },
  { nama: "I Ching", tier: "cultural_spiritual", ringkas: "64 hexagram untuk refleksi", tersedia: false },
  { nama: "STIFIn", tier: "pseudoscience", ringkas: "Referensi — input hasil eksternal", tersedia: false },
  { nama: "Golongan Darah", tier: "pseudoscience", ringkas: "Profil A/B/O/AB ala Jepang", tersedia: false },
  { nama: "Grafologi", tier: "pseudoscience", ringkas: "Interpretasi tulisan tangan (edukasi)", tersedia: false },
  { nama: "Face Reading", tier: "pseudoscience", ringkas: "Physiognomy tradisional (edukasi)", tersedia: false },
];
