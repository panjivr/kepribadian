import type { ItemLikertDimensi } from "@/lib/skoring";

export interface EnneaTipe {
  no: number;
  nama: string;
  ketakutan: string;
  hasrat: string;
  dosa: string;
  stresKe: number;
  growthKe: number;
  sehat: string[];
  tidakSehat: string[];
  karier: string[];
  tips: string;
}

export const ENNEA_TIPE: Record<number, EnneaTipe> = {
  1: { no: 1, nama: "Reformis / Perfeksionis", ketakutan: "Menjadi buruk, korup, cacat", hasrat: "Menjadi baik, benar, berintegritas", dosa: "Kemarahan (ditekan jadi resentment)", stresKe: 4, growthKe: 7, sehat: ["berprinsip", "adil", "teliti", "reformis nyata"], tidakSehat: ["kritis obsesif", "kaku", "menghakimi diri & orang"], karier: ["auditor", "editor", "quality control", "aktivis kebijakan"], tips: "Progres lebih penting daripada sempurna. Latih humor & kelonggaran (energi Tipe 7)." },
  2: { no: 2, nama: "Penolong", ketakutan: "Tidak dicintai, tidak dibutuhkan", hasrat: "Merasa dicintai", dosa: "Kesombongan (merasa tak butuh bantuan)", stresKe: 8, growthKe: 4, sehat: ["empatik tulus", "dermawan", "hangat"], tidakSehat: ["manipulatif lewat kebaikan", "posesif", "martir"], karier: ["perawat", "HR", "community manager", "guru"], tips: "Menolong tanpa pamrih tersembunyi. Kenali kebutuhanmu sendiri (energi Tipe 4)." },
  3: { no: 3, nama: "Peraih Prestasi", ketakutan: "Tidak berharga tanpa pencapaian", hasrat: "Merasa berharga & dikagumi", dosa: "Kebohongan (citra ≠ diri asli)", stresKe: 9, growthKe: 6, sehat: ["ambisius efektif", "adaptif", "memotivasi"], tidakSehat: ["workaholic", "pencitraan", "kompetitif tak sehat"], karier: ["sales top", "entrepreneur", "eksekutif", "public figure"], tips: "Kamu berharga saat tidak sedang berprestasi juga. Loyal pada tim, bukan hanya target (energi Tipe 6)." },
  4: { no: 4, nama: "Individualis / Romantis", ketakutan: "Tidak punya identitas, tidak signifikan", hasrat: "Menemukan diri yang autentik & unik", dosa: "Iri hati", stresKe: 2, growthKe: 1, sehat: ["kreatif mendalam", "jujur emosional", "empati pada penderitaan"], tidakSehat: ["melodramatis", "menarik diri", "iri kronis"], karier: ["seniman", "penulis", "desainer", "terapis seni"], tips: "Identitas dibangun lewat karya & disiplin (energi Tipe 1), bukan hanya perasaan." },
  5: { no: 5, nama: "Penyelidik", ketakutan: "Tidak kompeten, kewalahan oleh dunia", hasrat: "Kompeten & mampu", dosa: "Kekikiran (energi, waktu, diri)", stresKe: 7, growthKe: 8, sehat: ["ahli mendalam", "objektif", "inovatif konseptual"], tidakSehat: ["isolasi", "menimbun ilmu tanpa aksi", "dingin"], karier: ["peneliti", "engineer", "analis", "spesialis niche"], tips: "Ilmu jadi kekuatan saat dibagikan & dieksekusi (energi Tipe 8)." },
  6: { no: 6, nama: "Loyalis", ketakutan: "Tanpa dukungan & panduan", hasrat: "Rasa aman", dosa: "Ketakutan", stresKe: 3, growthKe: 9, sehat: ["loyal", "waspada risiko yang berguna", "kolaboratif"], tidakSehat: ["cemas kronis", "curiga", "ragu terus-menerus"], karier: ["risk management", "legal/compliance", "operasional", "keamanan"], tips: "Kepercayaan pada diri sendiri adalah rasa aman terbaik. Tenangkan pikiran (energi Tipe 9)." },
  7: { no: 7, nama: "Antusias / Petualang", ketakutan: "Terjebak dalam kesakitan & kekurangan", hasrat: "Puas & bahagia", dosa: "Kerakusan (pengalaman)", stresKe: 1, growthKe: 5, sehat: ["optimis produktif", "multitalenta", "spontan menyenangkan"], tidakSehat: ["lari dari masalah", "impulsif", "tidak tuntas"], karier: ["kreator", "travel/event", "marketing", "inovator produk"], tips: "Kedalaman satu hal lebih berharga daripada lebar seribu hal (energi Tipe 5)." },
  8: { no: 8, nama: "Penantang", ketakutan: "Dikendalikan, disakiti, lemah", hasrat: "Melindungi diri & menentukan nasib sendiri", dosa: "Nafsu (intensitas)", stresKe: 5, growthKe: 2, sehat: ["pelindung", "tegas adil", "pemimpin krisis"], tidakSehat: ["mendominasi", "konfrontatif", "kasar"], karier: ["pemimpin organisasi", "pengusaha", "advokat", "komandan lapangan"], tips: "Kerentanan bukan kelemahan. Kekuatan terbesarmu adalah melindungi & memberdayakan (energi Tipe 2)." },
  9: { no: 9, nama: "Pendamai", ketakutan: "Kehilangan koneksi, konflik, terpecah", hasrat: "Kedamaian batin & harmoni", dosa: "Kemalasan (terhadap prioritas sendiri)", stresKe: 6, growthKe: 3, sehat: ["mediator alami", "menerima semua pihak", "tenang menstabilkan"], tidakSehat: ["pasif-agresif", "menghilang dari keputusan", "menunda hidup sendiri"], karier: ["mediator", "konselor", "diplomat", "operations support"], tips: "Suaramu penting. Tetapkan agenda sendiri & kejar (energi Tipe 3)." },
};

export const ENNEA_TRIAD: Record<number, string> = {
  1: "Triad Naluri — emosi inti: marah",
  8: "Triad Naluri — emosi inti: marah",
  9: "Triad Naluri — emosi inti: marah",
  2: "Triad Hati — emosi inti: malu",
  3: "Triad Hati — emosi inti: malu",
  4: "Triad Hati — emosi inti: malu",
  5: "Triad Kepala — emosi inti: takut",
  6: "Triad Kepala — emosi inti: takut",
  7: "Triad Kepala — emosi inti: takut",
};

export const ENNEA_ITEMS: (ItemLikertDimensi & { dim: string })[] = [
  { no: 1, dim: "1", teks: "Saya sulit mentolerir pekerjaan yang asal-asalan." },
  { no: 2, dim: "1", teks: "Ada suara kritik di kepala saya yang jarang berhenti." },
  { no: 3, dim: "1", teks: "Saya merasa bertanggung jawab memperbaiki hal yang salah." },
  { no: 4, dim: "1", teks: "Saya menahan marah demi tetap terlihat pantas." },
  { no: 5, dim: "2", teks: "Saya cepat tahu apa yang dibutuhkan orang lain." },
  { no: 6, dim: "2", teks: "Saya merasa paling berharga saat membantu." },
  { no: 7, dim: "2", teks: "Saya sulit meminta bantuan untuk diri sendiri." },
  { no: 8, dim: "2", teks: "Diam-diam saya kecewa jika kebaikan saya tidak dihargai." },
  { no: 9, dim: "3", teks: "Saya sangat sadar bagaimana saya terlihat di mata orang." },
  { no: 10, dim: "3", teks: "Target dan pencapaian menggerakkan hidup saya." },
  { no: 11, dim: "3", teks: "Saya menyesuaikan diri agar sukses di lingkungan mana pun." },
  { no: 12, dim: "3", teks: "Kegagalan terasa seperti ancaman terhadap identitas saya." },
  { no: 13, dim: "4", teks: "Saya merasa berbeda dari kebanyakan orang." },
  { no: 14, dim: "4", teks: "Emosi saya dalam dan berlapis." },
  { no: 15, dim: "4", teks: "Saya tertarik pada keindahan yang melankolis." },
  { no: 16, dim: "4", teks: "Saya iri melihat orang yang hidupnya terasa lengkap." },
  { no: 17, dim: "5", teks: "Saya butuh banyak waktu sendiri untuk berpikir." },
  { no: 18, dim: "5", teks: "Saya mengamati dulu lama sebelum terlibat." },
  { no: 19, dim: "5", teks: "Pengetahuan membuat saya merasa aman." },
  { no: 20, dim: "5", teks: "Permintaan sosial terasa menguras energi saya." },
  { no: 21, dim: "6", teks: "Saya selalu memikirkan skenario terburuk untuk berjaga-jaga." },
  { no: 22, dim: "6", teks: "Saya loyal pada orang/kelompok yang saya percaya." },
  { no: 23, dim: "6", teks: "Saya sering meragukan keputusan sendiri." },
  { no: 24, dim: "6", teks: "Saya menguji apakah orang bisa dipercaya." },
  { no: 25, dim: "7", teks: "Saya selalu punya rencana seru berikutnya." },
  { no: 26, dim: "7", teks: "Saya menghindari suasana yang berat dan membosankan." },
  { no: 27, dim: "7", teks: "Banyak proyek saya mulai, tidak semua selesai." },
  { no: 28, dim: "7", teks: "Membatasi pilihan terasa seperti hukuman." },
  { no: 29, dim: "8", teks: "Saya langsung ambil kendali saat situasi kacau." },
  { no: 30, dim: "8", teks: "Saya melawan siapa pun yang menindas orang lemah." },
  { no: 31, dim: "8", teks: "Menunjukkan kelemahan terasa berbahaya bagi saya." },
  { no: 32, dim: "8", teks: "Konfrontasi langsung lebih baik daripada basa-basi." },
  { no: 33, dim: "9", teks: "Saya bisa melihat kebenaran dari semua sudut pandang." },
  { no: 34, dim: "9", teks: "Saya mengalah agar suasana tetap damai." },
  { no: 35, dim: "9", teks: "Saya sering menunda hal yang penting untuk diri sendiri." },
  { no: 36, dim: "9", teks: "Konflik membuat saya ingin menghilang." },
];

/** Wing = tetangga di lingkaran (wrap 9↔1) dengan raw lebih tinggi. */
export function hitungWing(tipe: number, raw: Record<string, number>): number {
  const kiri = tipe === 1 ? 9 : tipe - 1;
  const kanan = tipe === 9 ? 1 : tipe + 1;
  return raw[String(kiri)] >= raw[String(kanan)] ? kiri : kanan;
}
