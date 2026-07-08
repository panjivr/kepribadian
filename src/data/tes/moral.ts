import type { ItemLikertDimensi } from "@/lib/skoring";

export type MoralDim =
  | "care"
  | "fairness"
  | "loyalty"
  | "authority"
  | "sanctity"
  | "liberty";

export const MORAL_URUTAN: MoralDim[] = [
  "care",
  "fairness",
  "loyalty",
  "authority",
  "sanctity",
  "liberty",
];

export interface MoralInfo {
  nama: string;
  labelPendek: string;
  inti: string;
}

export const MORAL_INFO: Record<MoralDim, MoralInfo> = {
  care: { nama: "Kepedulian / Anti-kekejaman", labelPendek: "Kepedulian", inti: "Melindungi yang lemah, empati pada penderitaan" },
  fairness: { nama: "Keadilan / Kecurangan", labelPendek: "Keadilan", inti: "Proporsionalitas, hak, anti-curang" },
  loyalty: { nama: "Loyalitas / Pengkhianatan", labelPendek: "Loyalitas", inti: "Kesetiaan pada kelompok, keluarga, bangsa" },
  authority: { nama: "Otoritas / Subversi", labelPendek: "Otoritas", inti: "Hormat pada hierarki, tradisi, tatanan" },
  sanctity: { nama: "Kesucian / Kejijikan", labelPendek: "Kesucian", inti: "Kemurnian, kesakralan tubuh & nilai" },
  liberty: { nama: "Kebebasan / Penindasan", labelPendek: "Kebebasan", inti: "Anti-dominasi, kebebasan individu" },
};

export const MORAL_INSIGHT = {
  individualizing:
    "Fondasi Kepedulian & Keadilan dominan → moralitasmu berpusat pada hak individu. Pola ini khas cara pandang progresif.",
  binding:
    "Fondasi Loyalitas, Otoritas & Kesucian dominan → moralitasmu berpusat pada tatanan komunitas. Pola ini khas cara pandang konservatif/komunal.",
  seimbang:
    "Kamu menghargai kedua sisi hampir setara — potensi menjadi jembatan antar kubu yang sedang berselisih nilai.",
};

export const MORAL_ITEMS: (ItemLikertDimensi & { dim: MoralDim })[] = [
  { no: 1, dim: "care", teks: "Apakah seseorang menderita secara emosional atau fisik." },
  { no: 2, dim: "care", teks: "Apakah ada yang memperlakukan makhluk lemah dengan kejam." },
  { no: 3, dim: "care", teks: "Kasih sayang adalah kebajikan terpenting." },
  { no: 4, dim: "fairness", teks: "Apakah seseorang diperlakukan tidak adil." },
  { no: 5, dim: "fairness", teks: "Apakah seseorang curang demi keuntungan." },
  { no: 6, dim: "fairness", teks: "Keadilan harus ditegakkan meski merugikan diri sendiri." },
  { no: 7, dim: "loyalty", teks: "Apakah tindakan itu mengkhianati kelompoknya." },
  { no: 8, dim: "loyalty", teks: "Bangga pada kelompok atau negara adalah hal penting." },
  { no: 9, dim: "loyalty", teks: "Loyalitas keluarga di atas kepentingan pribadi." },
  { no: 10, dim: "authority", teks: "Apakah tindakan itu melawan otoritas yang sah." },
  { no: 11, dim: "authority", teks: "Hormat pada orang tua & pemimpin adalah kebajikan." },
  { no: 12, dim: "authority", teks: "Tradisi masyarakat layak dijaga." },
  { no: 13, dim: "sanctity", teks: "Apakah tindakan itu menjijikkan secara moral." },
  { no: 14, dim: "sanctity", teks: "Ada hal yang salah meski tak merugikan siapa pun." },
  { no: 15, dim: "sanctity", teks: "Tubuh dan hal sakral tidak boleh dinodai." },
  { no: 16, dim: "liberty", teks: "Apakah ada pihak yang menindas kebebasan orang lain." },
  { no: 17, dim: "liberty", teks: "Setiap orang berhak menentukan hidupnya sendiri." },
  { no: 18, dim: "liberty", teks: "Saya melawan pihak yang sok berkuasa." },
];
