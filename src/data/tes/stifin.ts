export type StifinKode = "S" | "T" | "I" | "F" | "In";

export interface StifinInfo {
  nama: string;
  deskripsi: string;
  kekuatan: string[];
  karier: string[];
  punyaKemudi: boolean;
}

export const STIFIN_INFO: Record<StifinKode, StifinInfo> = {
  S: { nama: "Sensing", deskripsi: "Mengandalkan panca indera & memori. Rajin, tekun, konkret.", kekuatan: ["daya ingat kuat", "pekerja keras", "detail"], karier: ["operasional", "atlet", "administrasi", "perdagangan"], punyaKemudi: true },
  T: { nama: "Thinking", deskripsi: "Mengandalkan logika. Objektif, sistematis, manajerial.", kekuatan: ["analisis", "manajemen", "tegas"], karier: ["manajer", "engineer", "keuangan", "teknokrat"], punyaKemudi: true },
  I: { nama: "Intuiting", deskripsi: "Mengandalkan indra kreatif. Visioner, inovatif, konseptor.", kekuatan: ["kreativitas", "melihat peluang", "optimis jangka panjang"], karier: ["entrepreneur", "desainer", "penemu", "kreator"], punyaKemudi: true },
  F: { nama: "Feeling", deskripsi: "Mengandalkan perasaan & empati. Pemimpin karismatik, persuasif.", kekuatan: ["memimpin orang", "diplomasi", "memotivasi"], karier: ["pemimpin", "diplomat", "trainer", "politisi"], punyaKemudi: true },
  In: { nama: "Insting", deskripsi: "Mengandalkan naluri spontan. Serba bisa, responsif, pendamai.", kekuatan: ["multitasking", "adaptasi cepat", "altruis"], karier: ["mediator", "jurnalis", "relawan", "generalis operasional"], punyaKemudi: false },
};

export const STIFIN_URUTAN: StifinKode[] = ["S", "T", "I", "F", "In"];

// Perkiraan padanan Big Five untuk cross-check.
export const STIFIN_CROSSCHECK: Record<StifinKode, string> = {
  S: "Conscientiousness tinggi + Openness rendah",
  T: "Openness sedang, Conscientiousness tinggi, Agreeableness rendah",
  I: "Openness tinggi",
  F: "Extraversion tinggi + Agreeableness tinggi",
  In: "profil relatif seimbang di semua dimensi",
};
