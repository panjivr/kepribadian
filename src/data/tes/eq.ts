import type { ItemLikertDimensi } from "@/lib/skoring";

export type EqDim =
  | "kesadaran_diri"
  | "regulasi_diri"
  | "motivasi"
  | "empati"
  | "keterampilan_sosial";

export const EQ_URUTAN: EqDim[] = [
  "kesadaran_diri",
  "regulasi_diri",
  "motivasi",
  "empati",
  "keterampilan_sosial",
];

export interface EqInfo {
  nama: string;
  labelPendek: string;
  deskripsi: string;
  tinggi: string;
  rendah: string;
  tingkatkan: string[];
}

// Lima domain model Goleman (1995).
export const EQ_INFO: Record<EqDim, EqInfo> = {
  kesadaran_diri: {
    nama: "Kesadaran Diri (Self-Awareness)",
    labelPendek: "Kesadaran Diri",
    deskripsi:
      "Kemampuan mengenali emosi sendiri saat sedang terjadi, beserta pemicunya. Ini fondasi seluruh kecerdasan emosional — kamu tak bisa mengelola sesuatu yang tak kamu sadari.",
    tinggi:
      "Kamu cepat menyadari apa yang kamu rasakan dan mengapa, sehingga jarang bertindak 'buta emosi'.",
    rendah:
      "Emosi kadang datang tiba-tiba tanpa kamu sadari pemicunya. Melatih jeda untuk menamai perasaan akan sangat membantu.",
    tingkatkan: [
      "Beri nama emosimu 3x sehari: 'saya sedang merasa ___ karena ___'",
      "Tulis jurnal emosi 5 menit sebelum tidur",
      "Perhatikan sinyal tubuh (dada sesak, rahang tegang) sebagai penanda emosi",
    ],
  },
  regulasi_diri: {
    nama: "Regulasi Diri (Self-Regulation)",
    labelPendek: "Regulasi Diri",
    deskripsi:
      "Kemampuan menahan impuls dan menenangkan diri, memilih respons alih-alih bereaksi otomatis. Bukan menekan emosi, tapi mengelolanya.",
    tinggi:
      "Kamu bisa tetap tenang di bawah tekanan dan jarang menyesali kata-kata yang keluar saat marah.",
    rendah:
      "Emosi kuat kadang mengambil alih kemudi sebelum sempat berpikir. Teknik jeda napas bisa jadi rem daruratmu.",
    tingkatkan: [
      "Aturan 6 detik: tarik napas panjang sebelum merespons saat terpicu",
      "Beri jeda 'tidur dulu' sebelum membalas pesan/keputusan emosional",
      "Reframe: tanya 'apa cara memandang ini yang lebih menenangkan?'",
    ],
  },
  motivasi: {
    nama: "Motivasi Diri (Motivation)",
    labelPendek: "Motivasi",
    deskripsi:
      "Dorongan internal untuk mengejar tujuan demi kepuasan pribadi, bukan sekadar imbalan luar. Termasuk optimisme dan ketahanan menghadapi kegagalan.",
    tinggi:
      "Kamu digerakkan dari dalam, gigih meski hasil belum terlihat, dan cepat bangkit dari kegagalan.",
    rendah:
      "Semangat mudah kendur saat imbalan tak langsung terlihat. Memecah tujuan besar jadi kemenangan kecil akan menyalakan kembali dorongan.",
    tingkatkan: [
      "Hubungkan tugas harian dengan 'mengapa' yang bermakna bagimu",
      "Rayakan progres kecil, jangan tunggu garis finis",
      "Kelilingi diri dengan orang yang energinya menular positif",
    ],
  },
  empati: {
    nama: "Empati (Empathy)",
    labelPendek: "Empati",
    deskripsi:
      "Kemampuan membaca dan memahami perasaan orang lain, bahkan yang tak terucap. Membaca 'bahasa di balik kata'.",
    tinggi:
      "Kamu peka pada perasaan orang di sekitarmu dan sering jadi tempat orang merasa dimengerti.",
    rendah:
      "Kadang kamu melewatkan sinyal emosi orang lain. Melatih mendengar aktif tanpa buru-buru memberi solusi akan menajamkannya.",
    tingkatkan: [
      "Dengarkan untuk memahami, bukan untuk menjawab",
      "Perhatikan bahasa tubuh & nada, bukan hanya kata-kata",
      "Tanyakan 'kamu merasa bagaimana?' sebelum memberi saran",
    ],
  },
  keterampilan_sosial: {
    nama: "Keterampilan Sosial (Social Skills)",
    labelPendek: "Sosial",
    deskripsi:
      "Kemampuan mengelola relasi, memengaruhi, dan bekerja sama — mengubah kesadaran emosi (diri & orang lain) menjadi interaksi yang efektif.",
    tinggi:
      "Kamu membangun relasi dengan mudah, meredakan konflik, dan menggerakkan orang menuju tujuan bersama.",
    rendah:
      "Situasi sosial kadang terasa melelahkan atau canggung. Mulai dari satu percakapan bermakna per hari akan membangun ototnya.",
    tingkatkan: [
      "Latih memberi apresiasi tulus & spesifik tiap hari",
      "Saat konflik, cari kepentingan bersama, bukan siapa yang menang",
      "Jadi jembatan: perkenalkan dua orang yang bisa saling bantu",
    ],
  },
};

/** 25 item (5/domain), skala 1–5. Item reverse (key -1) menjaga kejujuran jawaban. */
export const EQ_ITEMS: (ItemLikertDimensi & { dim: EqDim; bantuan: string })[] = [
  // Kesadaran diri
  { no: 1, dim: "kesadaran_diri", key: 1, teks: "Saya tahu persis emosi apa yang sedang saya rasakan saat itu terjadi.", bantuan: "Contoh: saat rapat memanas, kamu sadar 'ini aku mulai cemas', bukan sekadar ikut tegang tanpa tahu kenapa." },
  { no: 2, dim: "kesadaran_diri", key: 1, teks: "Saya paham apa yang biasanya memicu emosi kuat dalam diri saya.", bantuan: "Seperti tahu 'tombol' yang kalau dipencet bikin kamu meledak — misal dikritik di depan umum." },
  { no: 3, dim: "kesadaran_diri", key: 1, teks: "Saya menyadari bagaimana suasana hati saya memengaruhi keputusan saya.", bantuan: "Analogi: sadar bahwa belanja saat lapar bikin borong berlebihan — mood memengaruhi pilihan." },
  { no: 4, dim: "kesadaran_diri", key: -1, teks: "Sering kali saya baru sadar sedang marah setelah orang lain menunjukkannya.", bantuan: "Ini pernyataan terbalik: kalau ini sangat sesuai denganmu, kesadaran dirimu justru sedang perlu diasah." },
  { no: 5, dim: "kesadaran_diri", key: 1, teks: "Saya bisa membedakan antara lelah, lapar, dan benar-benar sedih.", bantuan: "Kadang 'badmood' sebenarnya cuma ngantuk atau lapar — bisa membedakannya tanda kesadaran diri baik." },
  // Regulasi diri
  { no: 6, dim: "regulasi_diri", key: 1, teks: "Saya bisa tetap tenang saat berada di bawah tekanan.", bantuan: "Seperti pilot yang suaranya tetap stabil saat turbulensi — tekanan tinggi, kepala tetap dingin." },
  { no: 7, dim: "regulasi_diri", key: 1, teks: "Saya berpikir dulu sebelum bertindak saat sedang emosional.", bantuan: "Memberi jeda antara 'terpicu' dan 'bereaksi', seperti menghitung sampai 6 sebelum membalas." },
  { no: 8, dim: "regulasi_diri", key: -1, teks: "Saya sering menyesali kata-kata yang keluar saat sedang marah.", bantuan: "Pernyataan terbalik — makin sering menyesal, makin regulasi diri perlu dilatih." },
  { no: 9, dim: "regulasi_diri", key: 1, teks: "Saya bisa menenangkan diri sendiri setelah kejadian yang membuat kesal.", bantuan: "Kemampuan 'reset' — seperti mematikan lalu menyalakan ulang perangkat yang nge-hang." },
  { no: 10, dim: "regulasi_diri", key: 1, teks: "Saya mampu menahan keinginan sesaat demi tujuan yang lebih besar.", bantuan: "Contoh klasik: menahan jajan demi menabung, atau tidur cukup demi produktif besok." },
  // Motivasi
  { no: 11, dim: "motivasi", key: 1, teks: "Saya terus berusaha meski hasilnya belum kelihatan.", bantuan: "Seperti menyiram benih yang belum tumbuh — percaya proses walau belum ada tanda." },
  { no: 12, dim: "motivasi", key: 1, teks: "Saya mengejar tujuan karena kepuasan pribadi, bukan sekadar pujian orang.", bantuan: "Dorongan dari 'dalam' (ingin jago) vs dari 'luar' (ingin dipuji/dibayar)." },
  { no: 13, dim: "motivasi", key: 1, teks: "Saya cepat bangkit setelah mengalami kegagalan.", bantuan: "Seperti bola karet yang memantul balik, bukan telur yang pecah saat jatuh." },
  { no: 14, dim: "motivasi", key: -1, teks: "Saya mudah menyerah ketika sebuah tugas terasa sulit.", bantuan: "Pernyataan terbalik — kalau ini sangat sesuai, ketahanan motivasimu sedang perlu dikuatkan." },
  { no: 15, dim: "motivasi", key: 1, teks: "Saya biasanya optimis tentang masa depan.", bantuan: "Melihat gelas setengah penuh — percaya usaha hari ini membuahkan hasil nanti." },
  // Empati
  { no: 16, dim: "empati", key: 1, teks: "Saya bisa merasakan suasana hati orang lain meski mereka tidak mengatakannya.", bantuan: "Seperti membaca cuaca dari langit — tahu 'ada yang tidak beres' dari raut & nada, bukan kata-kata." },
  { no: 17, dim: "empati", key: 1, teks: "Saya berusaha memahami sudut pandang orang sebelum menilai.", bantuan: "Memakai 'sepatu' orang lain sejenak — kenapa dia bersikap begitu?" },
  { no: 18, dim: "empati", key: 1, teks: "Orang merasa nyaman menceritakan masalah pribadi kepada saya.", bantuan: "Kamu jadi 'tempat aman' — mereka merasa didengar tanpa dihakimi." },
  { no: 19, dim: "empati", key: -1, teks: "Saya sering tidak menyadari ketika seseorang sedang tersinggung oleh ucapan saya.", bantuan: "Pernyataan terbalik — bila sering terjadi, kepekaan sosialmu sedang perlu diasah." },
  { no: 20, dim: "empati", key: 1, teks: "Saya memperhatikan bahasa tubuh dan nada suara, bukan hanya isi ucapan.", bantuan: "'Bagaimana' sesuatu diucapkan sering lebih jujur daripada 'apa' yang diucapkan." },
  // Keterampilan sosial
  { no: 21, dim: "keterampilan_sosial", key: 1, teks: "Saya mudah membangun hubungan baik dengan orang baru.", bantuan: "Seperti mencairkan es dengan cepat — obrolan mengalir, orang merasa disambut." },
  { no: 22, dim: "keterampilan_sosial", key: 1, teks: "Saya bisa membantu meredakan konflik antara orang lain.", bantuan: "Peran 'penengah' — menemukan titik temu saat dua pihak berselisih." },
  { no: 23, dim: "keterampilan_sosial", key: 1, teks: "Saya bisa memengaruhi dan meyakinkan orang tanpa memaksa.", bantuan: "Mengajak, bukan menekan — orang bergerak karena mau, bukan takut." },
  { no: 24, dim: "keterampilan_sosial", key: -1, teks: "Saya merasa canggung dan menghindar dalam situasi sosial yang ramai.", bantuan: "Pernyataan terbalik — bila sangat sesuai, keterampilan sosialmu punya ruang tumbuh (dan itu wajar bagi introvert)." },
  { no: 25, dim: "keterampilan_sosial", key: 1, teks: "Saya pandai bekerja sama dalam tim menuju tujuan bersama.", bantuan: "Seperti pemain bola yang mengoper, bukan cuma mau mencetak gol sendiri." },
];
