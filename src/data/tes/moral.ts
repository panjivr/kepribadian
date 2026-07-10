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

export const MORAL_ITEMS: (ItemLikertDimensi & { dim: MoralDim; bantuan: string })[] = [
  { no: 1, dim: "care", teks: "Apakah seseorang menderita secara emosional atau fisik.", bantuan: "Contoh: kamu terganggu melihat berita korban bencana yang kelaparan dan kedinginan." },
  { no: 2, dim: "care", teks: "Apakah ada yang memperlakukan makhluk lemah dengan kejam.", bantuan: "Contoh: kamu marah melihat video orang menendang anjing jalanan tanpa alasan." },
  { no: 3, dim: "care", teks: "Kasih sayang adalah kebajikan terpenting.", bantuan: "Contoh: bagimu, orang yang penyayang lebih pantas dihormati daripada orang yang sekadar taat aturan." },
  { no: 4, dim: "fairness", teks: "Apakah seseorang diperlakukan tidak adil.", bantuan: "Contoh: kamu marah melihat satu anak dihukum atas kesalahan yang dilakukan seluruh kelas — ketidakadilan mengganggumu." },
  { no: 5, dim: "fairness", teks: "Apakah seseorang curang demi keuntungan.", bantuan: "Contoh: kamu kesal saat tahu rekan kerja memalsukan data supaya terlihat berprestasi lebih dari yang sebenarnya." },
  { no: 6, dim: "fairness", teks: "Keadilan harus ditegakkan meski merugikan diri sendiri.", bantuan: "Contoh: kamu tetap melaporkan kecurangan temanmu sendiri walau itu bisa membuatmu kehilangan proyek bersama." },
  { no: 7, dim: "loyalty", teks: "Apakah tindakan itu mengkhianati kelompoknya.", bantuan: "Contoh: kamu kecewa berat saat tahu ada anggota tim yang membocorkan strategi ke tim lawan." },
  { no: 8, dim: "loyalty", teks: "Bangga pada kelompok atau negara adalah hal penting.", bantuan: "Contoh: kamu ikut terharu dan bangga saat lagu kebangsaan berkumandang di ajang internasional." },
  { no: 9, dim: "loyalty", teks: "Loyalitas keluarga di atas kepentingan pribadi.", bantuan: "Contoh: kamu rela membatalkan rencana pribadi demi hadir membantu acara besar keluarga." },
  { no: 10, dim: "authority", teks: "Apakah tindakan itu melawan otoritas yang sah.", bantuan: "Contoh: kamu risih melihat karyawan baru membangkang perintah atasan di depan umum tanpa alasan jelas." },
  { no: 11, dim: "authority", teks: "Hormat pada orang tua & pemimpin adalah kebajikan.", bantuan: "Contoh: kamu selalu bicara sopan pada orang yang lebih tua meski sedang tidak setuju dengan mereka." },
  { no: 12, dim: "authority", teks: "Tradisi masyarakat layak dijaga.", bantuan: "Contoh: kamu tetap ikut menjalankan upacara adat warisan leluhur walau terasa merepotkan." },
  { no: 13, dim: "sanctity", teks: "Apakah tindakan itu menjijikkan secara moral.", bantuan: "Contoh: kamu merasa jijik mendengar cerita orang yang menodai jasad di kuburan, walau tak ada korban yang dirugikan langsung." },
  { no: 14, dim: "sanctity", teks: "Ada hal yang salah meski tak merugikan siapa pun.", bantuan: "Contoh: kamu tetap merasa itu salah saat mendengar hubungan sedarah antar saudara dewasa yang saling setuju, walau tak ada yang dirugikan." },
  { no: 15, dim: "sanctity", teks: "Tubuh dan hal sakral tidak boleh dinodai.", bantuan: "Contoh: kamu tersinggung melihat simbol agama dijadikan bahan lelucon murahan di iklan." },
  { no: 16, dim: "liberty", teks: "Apakah ada pihak yang menindas kebebasan orang lain.", bantuan: "Contoh: kamu geram melihat atasan mengatur habis-habisan kehidupan pribadi karyawannya di luar jam kerja." },
  { no: 17, dim: "liberty", teks: "Setiap orang berhak menentukan hidupnya sendiri.", bantuan: "Contoh: kamu percaya orang dewasa berhak memilih jalan hidupnya sendiri walau berbeda dari harapan keluarga." },
  { no: 18, dim: "liberty", teks: "Saya melawan pihak yang sok berkuasa.", bantuan: "Contoh: kamu ikut bersuara saat ada pejabat kecil yang bertindak sewenang-wenang terhadap warga biasa." },
];
