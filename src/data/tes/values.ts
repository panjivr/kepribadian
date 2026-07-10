import type { ItemLikertDimensi } from "@/lib/skoring";

/**
 * Nilai Hidup — teori nilai dasar Shalom Schwartz. 10 nilai universal yang
 * tersusun dalam lingkaran & terkelompok menjadi 4 orientasi tingkat tinggi.
 * 20 item (2 per nilai), original. Skala kepentingan 1–5.
 */
export type NilaiDim =
  | "kemandirian"
  | "stimulasi"
  | "hedonisme"
  | "prestasi"
  | "kekuasaan"
  | "keamanan"
  | "konformitas"
  | "tradisi"
  | "kebajikan"
  | "universalisme";

export const NILAI_URUTAN: NilaiDim[] = [
  "kemandirian",
  "stimulasi",
  "hedonisme",
  "prestasi",
  "kekuasaan",
  "keamanan",
  "konformitas",
  "tradisi",
  "kebajikan",
  "universalisme",
];

export const NILAI_INFO: Record<NilaiDim, { nama: string; deskripsi: string }> = {
  kemandirian: { nama: "Kemandirian", deskripsi: "Kebebasan berpikir & bertindak, memilih jalan sendiri, kreativitas & rasa ingin tahu." },
  stimulasi: { nama: "Stimulasi", deskripsi: "Kebaruan, tantangan, & kegembiraan dalam hidup — mencari pengalaman yang menggetarkan." },
  hedonisme: { nama: "Hedonisme", deskripsi: "Kesenangan & kenikmatan indrawi bagi diri sendiri; menikmati hidup." },
  prestasi: { nama: "Prestasi", deskripsi: "Sukses pribadi lewat kompetensi sesuai standar sosial; ingin diakui mampu." },
  kekuasaan: { nama: "Kekuasaan", deskripsi: "Status sosial, gengsi, kendali atas orang & sumber daya." },
  keamanan: { nama: "Keamanan", deskripsi: "Keselamatan, keharmonisan, & stabilitas diri, hubungan, & masyarakat." },
  konformitas: { nama: "Konformitas", deskripsi: "Menahan diri dari tindakan yang melanggar norma & harapan sosial; sopan & patuh." },
  tradisi: { nama: "Tradisi", deskripsi: "Menghormati & menjalankan adat, budaya, & keyakinan agama; rendah hati & menerima." },
  kebajikan: { nama: "Kebajikan", deskripsi: "Menjaga & meningkatkan kesejahteraan orang-orang dekat; setia, jujur, & membantu." },
  universalisme: { nama: "Universalisme", deskripsi: "Memahami, menghargai, & melindungi kesejahteraan semua orang & alam; keadilan & toleransi." },
};

export type OrientasiId = "keterbukaan" | "peningkatan" | "pelestarian" | "transendensi";

export const ORIENTASI_INFO: Record<
  OrientasiId,
  { nama: string; anggota: NilaiDim[]; deskripsi: string; lawan: string; warna: string }
> = {
  keterbukaan: {
    nama: "Keterbukaan pada Perubahan",
    anggota: ["kemandirian", "stimulasi", "hedonisme"],
    deskripsi: "Menghargai kemandirian, kebaruan, & kebebasan. Terbuka pada ide & pengalaman baru.",
    lawan: "Pelestarian",
    warna: "#67e8f9",
  },
  peningkatan: {
    nama: "Peningkatan Diri",
    anggota: ["prestasi", "kekuasaan"],
    deskripsi: "Menghargai keberhasilan pribadi, kompetensi, status, & pengaruh.",
    lawan: "Transendensi Diri",
    warna: "#ff9f0a",
  },
  pelestarian: {
    nama: "Pelestarian",
    anggota: ["keamanan", "konformitas", "tradisi"],
    deskripsi: "Menghargai stabilitas, ketertiban, kehati-hatian, & penghormatan pada tradisi.",
    lawan: "Keterbukaan pada Perubahan",
    warna: "#818cf8",
  },
  transendensi: {
    nama: "Transendensi Diri",
    anggota: ["kebajikan", "universalisme"],
    deskripsi: "Menghargai kesejahteraan orang lain & alam; melampaui kepentingan diri.",
    lawan: "Peningkatan Diri",
    warna: "#30d158",
  },
};

export const ORIENTASI_URUTAN: OrientasiId[] = [
  "keterbukaan",
  "peningkatan",
  "pelestarian",
  "transendensi",
];

export const NILAI_ITEMS: (ItemLikertDimensi & { dim: NilaiDim; bantuan: string })[] = [
  { no: 1, dim: "kemandirian", teks: "Penting bagi saya membuat keputusan sendiri & bebas menentukan jalan hidup.", bantuan: "Contoh: memilih karier/gaya hidupmu sendiri, bukan sekadar mengikuti arahan orang." },
  { no: 2, dim: "kemandirian", teks: "Saya menghargai kreativitas & rasa ingin tahu untuk mengeksplorasi ide sendiri.", bantuan: "Contoh: senang bereksperimen & menemukan caramu sendiri." },
  { no: 3, dim: "stimulasi", teks: "Penting bagi saya menjalani hidup yang penuh petualangan & pengalaman baru.", bantuan: "Analogi: memilih rute baru yang menantang daripada jalan yang itu-itu saja." },
  { no: 4, dim: "stimulasi", teks: "Saya mencari kegembiraan & tantangan yang membuat hidup terasa hidup.", bantuan: "Contoh: mencoba hal ekstrem/baru agar tak bosan." },
  { no: 5, dim: "hedonisme", teks: "Penting bagi saya menikmati kesenangan & kenikmatan dalam hidup.", bantuan: "Contoh: memberi diri waktu untuk bersenang-senang & memanjakan diri." },
  { no: 6, dim: "hedonisme", teks: "Saya ingin memanjakan diri & menikmati momen menyenangkan.", bantuan: "Contoh: kuliner enak, hiburan, atau istirahat yang memanjakan." },
  { no: 7, dim: "prestasi", teks: "Penting bagi saya menunjukkan kemampuan & diakui berhasil.", bantuan: "Contoh: bangga saat pencapaianmu diakui orang lain." },
  { no: 8, dim: "prestasi", teks: "Saya ingin sukses & dihargai atas kompetensi saya.", bantuan: "Analogi: seperti atlet yang ingin meraih medali & pengakuan." },
  { no: 9, dim: "kekuasaan", teks: "Penting bagi saya memiliki pengaruh, status, atau kendali atas keadaan.", bantuan: "Contoh: ingin berada di posisi yang bisa menentukan arah/keputusan." },
  { no: 10, dim: "kekuasaan", teks: "Saya menghargai kekayaan atau kedudukan yang membuat saya dihormati.", bantuan: "Contoh: status & sumber daya penting sebagai tanda keberhasilan." },
  { no: 11, dim: "keamanan", teks: "Penting bagi saya hidup dalam keadaan aman, stabil, & teratur.", bantuan: "Contoh: mengutamakan pekerjaan/tabungan yang memberi rasa aman." },
  { no: 12, dim: "keamanan", teks: "Saya menghargai keselamatan & keharmonisan diri, keluarga, & lingkungan.", bantuan: "Analogi: seperti membangun pagar & tabungan agar hidup tak mudah goyah." },
  { no: 13, dim: "konformitas", teks: "Penting bagi saya bersikap sopan & tidak melanggar aturan atau norma.", bantuan: "Contoh: menjaga perilaku agar sesuai harapan sosial & tidak menyinggung." },
  { no: 14, dim: "konformitas", teks: "Saya berusaha memenuhi harapan orang lain & menghindari membuat keributan.", bantuan: "Contoh: menahan diri agar tak melanggar kepantasan." },
  { no: 15, dim: "tradisi", teks: "Penting bagi saya menghormati adat, budaya, atau ajaran agama saya.", bantuan: "Contoh: menjalankan tradisi keluarga/agama dengan setia." },
  { no: 16, dim: "tradisi", teks: "Saya menghargai kerendahan hati & menerima peran yang diberikan hidup.", bantuan: "Contoh: menerima & menjalani adat dengan penuh hormat." },
  { no: 17, dim: "kebajikan", teks: "Penting bagi saya membantu & menjaga kesejahteraan orang-orang dekat saya.", bantuan: "Contoh: setia & siap menolong keluarga & sahabat." },
  { no: 18, dim: "kebajikan", teks: "Saya berusaha jujur, setia, & peduli pada orang di sekitar saya.", bantuan: "Analogi: menjadi sandaran yang bisa diandalkan orang terdekat." },
  { no: 19, dim: "universalisme", teks: "Penting bagi saya keadilan & kesejahteraan semua orang, bukan hanya kelompok saya.", bantuan: "Contoh: peduli pada orang yang tak kamu kenal & pada keadilan sosial." },
  { no: 20, dim: "universalisme", teks: "Saya menghargai pelestarian alam & toleransi terhadap yang berbeda.", bantuan: "Contoh: peduli lingkungan & menghormati keberagaman." },
];
