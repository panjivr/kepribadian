export type Gender = "pria" | "wanita";

export interface UserProfile {
  namaLengkap: string;
  namaPanggilan: string;
  tanggalLahir: string; // "YYYY-MM-DD"
  gender: Gender;
  jamLahir?: string; // "HH:mm"
}

export type Tier =
  | "scientific"
  | "semi_scientific"
  | "cultural_spiritual"
  | "pseudoscience";

export interface ZodiacResult {
  nama: string;
  tanggal: string;
  elemen: string;
  modalitas: string;
  planet: string;
  simbol: string;
  trait: string[];
  kekuatan: string;
  kelemahan: string;
  cocok: string[];
  karier: string[];
}

export interface ShioResult {
  nama: string;
  elemen: string;
  elemenMakna: string;
  yinYang: "Yin" | "Yang";
  tahunEfektif: number;
  bergeserKarenaImlek: boolean;
  trait: string[];
  kekuatan: string;
  kelemahan: string;
  cocok: string[];
  kurangCocok: string[];
  karier: string[];
}

export interface WetonResult {
  hari: string;
  pasaran: string;
  neptuHari: number;
  neptuPasaran: number;
  neptu: number;
  laku: string;
  lakuMakna: string;
  watakHari: string;
  watakPasaran: string;
  rejeki: { nama: string; makna: string };
  pangarasan: { nama: string; makna: string };
}

export interface NumerologyResult {
  lifePath: number;
  destiny: number;
  soulUrge: number;
  personality: number;
  birthday: number;
  maturity: number;
  personalYear: number;
  tahunBerjalan: number;
}

export interface KuaResult {
  angka: number;
  grup: "Timur" | "Barat";
  elemen: string;
  arahBaik: string[];
  karakter: string;
}

export type BigFiveDim = "O" | "C" | "E" | "A" | "N";

export interface BigFiveResult {
  raw: Record<BigFiveDim, number>; // 10–50
  persen: Record<BigFiveDim, number>; // 0–100
  band: Record<BigFiveDim, string>;
  kombinasi: { pola: string; insight: string }[];
  tanggal: string; // ISO date of completion
}

export type MbtiLetter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export interface MbtiResult {
  tipe: string; // e.g. "INTJ"
  kekuatan: Record<string, number>; // preference strength % per chosen letter
  sumber: "tes" | "prediksi_big_five";
  tanggal?: string;
}

export interface DiscIndication {
  kode: "D" | "I" | "S" | "C";
  nama: string;
  skor: number;
}

export interface EnneagramIndication {
  tipe: number;
  nama: string;
  skor: number;
}
