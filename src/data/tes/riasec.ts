import type { ItemLikertDimensi } from "@/lib/skoring";

/**
 * RIASEC / Holland Codes — teori minat karier John L. Holland (1959).
 * Enam tipe minat: Realistic, Investigative, Artistic, Social, Enterprising,
 * Conventional. Kode Holland = 3 tipe teratas (mis. "SIA"). Dipakai memetakan
 * minat ke rumpun jurusan kuliah (lihat src/data/jurusan.ts).
 */

export type RiasecDim = "R" | "I" | "A" | "S" | "E" | "C";

export const RIASEC_URUTAN: RiasecDim[] = ["R", "I", "A", "S", "E", "C"];

export interface RiasecInfo {
  huruf: RiasecDim;
  nama: string;
  julukan: string;
  deskripsi: string;
  kataKunci: string[];
  warna: string;
}

export const RIASEC_INFO: Record<RiasecDim, RiasecInfo> = {
  R: {
    huruf: "R",
    nama: "Realistic (Realistis)",
    julukan: "Sang Pelaku",
    deskripsi:
      "Suka bekerja dengan tangan, alat, mesin, tumbuhan, atau hewan. Praktis, konkret, dan lebih suka 'melakukan' daripada 'membahas'. Nyaman di lapangan, bengkel, atau alam terbuka.",
    kataKunci: ["praktis", "teknis", "fisik", "alat & mesin", "outdoor"],
    warna: "#30d158",
  },
  I: {
    huruf: "I",
    nama: "Investigative (Investigatif)",
    julukan: "Sang Pemikir",
    deskripsi:
      "Suka mengamati, meneliti, menganalisis, dan memecahkan masalah abstrak. Digerakkan rasa ingin tahu dan pertanyaan 'mengapa & bagaimana'. Nyaman di laboratorium, riset, dan data.",
    kataKunci: ["analitis", "sains", "riset", "logika", "rasa ingin tahu"],
    warna: "#3b82f6",
  },
  A: {
    huruf: "A",
    nama: "Artistic (Artistik)",
    julukan: "Sang Kreator",
    deskripsi:
      "Suka berekspresi, mencipta, dan bekerja tanpa aturan kaku. Menghargai keindahan, orisinalitas, dan imajinasi. Nyaman di studio, panggung, atau ruang desain.",
    kataKunci: ["kreatif", "ekspresif", "estetis", "orisinal", "bebas"],
    warna: "#8b5cf6",
  },
  S: {
    huruf: "S",
    nama: "Social (Sosial)",
    julukan: "Sang Penolong",
    deskripsi:
      "Suka membantu, mengajar, merawat, dan bekerja bersama orang. Peka pada kebutuhan orang lain dan senang membuat mereka berkembang. Nyaman di kelas, klinik, atau komunitas.",
    kataKunci: ["membantu", "mengajar", "empati", "kerja sama", "melayani"],
    warna: "#67e8f9",
  },
  E: {
    huruf: "E",
    nama: "Enterprising (Pengusaha/Persuasif)",
    julukan: "Sang Penggerak",
    deskripsi:
      "Suka memimpin, memengaruhi, menjual, dan mengambil inisiatif demi tujuan. Berani mengambil risiko dan digerakkan pencapaian. Nyaman di dunia bisnis, penjualan, dan kepemimpinan.",
    kataKunci: ["memimpin", "persuasif", "bisnis", "berani risiko", "target"],
    warna: "#ff9f0a",
  },
  C: {
    huruf: "C",
    nama: "Conventional (Konvensional)",
    julukan: "Sang Penata",
    deskripsi:
      "Suka keteraturan, data, prosedur, dan ketelitian. Nyaman mengelola informasi, angka, dan sistem agar semuanya rapi dan akurat. Cocok di administrasi, keuangan, dan operasional.",
    kataKunci: ["teratur", "detail", "data", "prosedur", "akurat"],
    warna: "#a78bfa",
  },
};

export const RIASEC_ITEMS: (ItemLikertDimensi & { dim: RiasecDim; bantuan: string })[] = [
  // ------------------------------- R -------------------------------
  { no: 1, dim: "R", teks: "Saya senang memperbaiki barang yang rusak (elektronik, sepeda, keran).", bantuan: "Contoh: keran bocor, kamu langsung ambil kunci dan membetulkannya sendiri, bukan memanggil tukang." },
  { no: 2, dim: "R", teks: "Saya menikmati bekerja dengan mesin, alat, atau perkakas.", bantuan: "Analogi: obeng, bor, atau mesin terasa 'asyik' di tanganmu, bukan menakutkan." },
  { no: 3, dim: "R", teks: "Saya suka kegiatan fisik atau bekerja di luar ruangan.", bantuan: "Contoh: kamu lebih hidup saat berkegiatan di lapangan/alam daripada duduk seharian di dalam." },
  { no: 4, dim: "R", teks: "Saya senang merakit atau membangun sesuatu dengan tangan.", bantuan: "Contoh: merakit rak, PC, atau prakarya terasa memuaskan saat jadi." },
  { no: 5, dim: "R", teks: "Saya tertarik merawat tanaman, hewan, atau alam.", bantuan: "Contoh: berkebun atau memelihara hewan bukan beban, tapi menyenangkan bagimu." },
  { no: 6, dim: "R", teks: "Saya nyaman mengoperasikan kendaraan atau peralatan berkendara/berat.", bantuan: "Analogi: mengendalikan mesin (mobil, drone, alat) terasa memberimu kendali & kepuasan." },
  // ------------------------------- I -------------------------------
  { no: 7, dim: "I", teks: "Saya menikmati memecahkan teka-teki atau soal yang menantang.", bantuan: "Contoh: soal sulit justru bikin penasaran, bukan bikin menyerah." },
  { no: 8, dim: "I", teks: "Saya suka menyelidiki cara kerja sesuatu lewat percobaan.", bantuan: "Analogi: seperti ilmuwan kecil — kamu ingin membongkar & menguji, bukan sekadar menerima." },
  { no: 9, dim: "I", teks: "Saya tertarik membaca artikel sains, teknologi, atau pengetahuan.", bantuan: "Contoh: kamu betah menonton dokumenter atau membaca 'kenapa langit biru'." },
  { no: 10, dim: "I", teks: "Saya senang menganalisis data atau angka untuk menemukan pola.", bantuan: "Contoh: melihat kumpulan angka, kamu penasaran mencari maknanya." },
  { no: 11, dim: "I", teks: "Saya sering bertanya 'mengapa' dan mengejar jawaban yang mendalam.", bantuan: "Analogi: kamu tak puas dengan jawaban 'ya begitu saja' — kamu gali sampai akar." },
  { no: 12, dim: "I", teks: "Saya menikmati mempelajari topik rumit sampai benar-benar paham.", bantuan: "Contoh: konsep sulit justru menantangmu untuk dikuasai, bukan dihindari." },
  // ------------------------------- A -------------------------------
  { no: 13, dim: "A", teks: "Saya senang menggambar, melukis, atau mendesain.", bantuan: "Contoh: kamu suka corat-coret ide visual atau menata tampilan sesuatu." },
  { no: 14, dim: "A", teks: "Saya menikmati menulis cerita, puisi, atau konten kreatif.", bantuan: "Contoh: menuangkan ide jadi tulisan terasa mengalir & memuaskan." },
  { no: 15, dim: "A", teks: "Saya suka bermain musik, menyanyi, atau seni pertunjukan.", bantuan: "Contoh: bernyanyi/main alat musik/akting adalah caramu berekspresi." },
  { no: 16, dim: "A", teks: "Saya terdorong menciptakan sesuatu yang orisinal dan berbeda.", bantuan: "Analogi: kamu bosan meniru — ingin membuat yang belum pernah ada." },
  { no: 17, dim: "A", teks: "Saya senang menghias atau menata agar sesuatu terlihat indah.", bantuan: "Contoh: menata kamar, feed media sosial, atau acara agar estetis." },
  { no: 18, dim: "A", teks: "Saya lebih suka berimprovisasi daripada mengikuti aturan kaku.", bantuan: "Analogi: aturan ketat terasa mengekang; kamu berkembang saat bebas bereksplorasi." },
  // ------------------------------- S -------------------------------
  { no: 19, dim: "S", teks: "Saya senang membantu orang menyelesaikan masalah pribadinya.", bantuan: "Contoh: teman bingung, kamu tergerak menemani & membantunya cari jalan." },
  { no: 20, dim: "S", teks: "Saya menikmati mengajar atau menjelaskan sesuatu ke orang lain.", bantuan: "Contoh: kamu sabar & senang saat orang akhirnya paham karena penjelasanmu." },
  { no: 21, dim: "S", teks: "Saya peduli merawat orang yang sakit atau membutuhkan bantuan.", bantuan: "Contoh: melihat orang kesusahan, hatimu tergerak untuk menolong." },
  { no: 22, dim: "S", teks: "Saya suka bekerja dalam kelompok dan menjaga kekompakan.", bantuan: "Analogi: kamu perekat tim — senang saat semua orang guyub." },
  { no: 23, dim: "S", teks: "Saya bersedia mendengarkan curhat dan memberi dukungan.", bantuan: "Contoh: orang nyaman bercerita padamu karena kamu mendengarkan tulus." },
  { no: 24, dim: "S", teks: "Saya tertarik menjadi relawan untuk kegiatan sosial.", bantuan: "Contoh: kegiatan bakti sosial/komunitas terasa bermakna bagimu." },
  // ------------------------------- E -------------------------------
  { no: 25, dim: "E", teks: "Saya senang memimpin tim atau memegang kendali sebuah proyek.", bantuan: "Contoh: saat kerja kelompok, kamu yang mengarahkan & mengatur pembagian." },
  { no: 26, dim: "E", teks: "Saya pandai meyakinkan orang untuk menerima ide saya.", bantuan: "Analogi: kamu bisa 'menjual' gagasan hingga orang ikut setuju & bergerak." },
  { no: 27, dim: "E", teks: "Saya tertarik memulai usaha atau berjualan.", bantuan: "Contoh: melihat peluang, kamu langsung terpikir 'ini bisa dijadikan bisnis'." },
  { no: 28, dim: "E", teks: "Saya nyaman berbicara di depan umum untuk memengaruhi orang.", bantuan: "Contoh: tampil presentasi/orasi memberimu energi, bukan gugup lumpuh." },
  { no: 29, dim: "E", teks: "Saya berani mengambil keputusan dan risiko demi hasil besar.", bantuan: "Analogi: kamu rela bertaruh terukur demi peluang menang besar." },
  { no: 30, dim: "E", teks: "Saya menikmati bernegosiasi atau tawar-menawar.", bantuan: "Contoh: menawar harga atau berunding kesepakatan terasa seru, bukan canggung." },
  // ------------------------------- C -------------------------------
  { no: 31, dim: "C", teks: "Saya senang menyusun data atau berkas dengan rapi dan teratur.", bantuan: "Contoh: kamu puas saat file & catatan tertata sistematis dan mudah dicari." },
  { no: 32, dim: "C", teks: "Saya nyaman mengikuti prosedur dan aturan yang jelas.", bantuan: "Analogi: panduan langkah demi langkah membuatmu tenang, bukan terkekang." },
  { no: 33, dim: "C", teks: "Saya menikmati bekerja dengan angka, pembukuan, atau spreadsheet.", bantuan: "Contoh: merapikan anggaran atau tabel terasa memuaskan bagimu." },
  { no: 34, dim: "C", teks: "Saya teliti memeriksa detail agar tidak ada yang salah.", bantuan: "Contoh: kamu menyadari salah ketik/selisih kecil yang orang lain lewatkan." },
  { no: 35, dim: "C", teks: "Saya suka membuat jadwal dan daftar agar semua terkontrol.", bantuan: "Analogi: checklist & agenda membuatmu merasa hidup tertata & aman." },
  { no: 36, dim: "C", teks: "Saya cocok mengelola arsip, administrasi, atau dokumentasi.", bantuan: "Contoh: mengurus berkas & pencatatan rapi terasa alami, bukan membosankan." },
];

/** Kode Holland = 3 dimensi teratas (skor tertinggi), mis. "SIA". */
export function kodeHolland(urut: { dim: string }[]): string {
  return urut.slice(0, 3).map((u) => u.dim).join("");
}
