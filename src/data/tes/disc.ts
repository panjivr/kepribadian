import type { ItemLikertDimensi } from "@/lib/skoring";

export type DiscDim = "D" | "I" | "S" | "C";

export const DISC_URUTAN: DiscDim[] = ["D", "I", "S", "C"];

export interface DiscInfo {
  nama: string;
  fokus: string;
  trait: string[];
  ketakutan: string;
  komunikasi: string;
  kelemahan: string[];
  karier: string[];
}

export const DISC_INFO: Record<DiscDim, DiscInfo> = {
  D: {
    nama: "Dominance",
    fokus: "Hasil & tantangan",
    trait: ["tegas", "cepat memutuskan", "kompetitif", "langsung ke inti"],
    ketakutan: "dimanfaatkan / kehilangan kendali",
    komunikasi: "To the point, bicara hasil, jangan bertele-tele.",
    kelemahan: ["tidak sabaran", "kurang mendengar", "menyakiti tanpa sadar"],
    karier: ["CEO", "sales director", "project lead", "militer"],
  },
  I: {
    nama: "Influence",
    fokus: "Orang & pengaruh",
    trait: ["antusias", "persuasif", "optimis", "ekspresif"],
    ketakutan: "penolakan sosial / diabaikan",
    komunikasi: "Ramah, beri panggung, apresiasi terbuka.",
    kelemahan: ["kurang detail", "overpromise", "tidak terorganisir"],
    karier: ["marketing", "PR", "MC", "kreator"],
  },
  S: {
    nama: "Steadiness",
    fokus: "Stabilitas & kerjasama",
    trait: ["sabar", "setia", "pendengar baik", "konsisten"],
    ketakutan: "perubahan mendadak / konflik",
    komunikasi: "Lembut, beri waktu adaptasi, beri jaminan keamanan.",
    kelemahan: ["sulit menolak", "menghindari konfrontasi", "lambat berubah"],
    karier: ["support", "HR", "perawat", "operasional"],
  },
  C: {
    nama: "Conscientiousness",
    fokus: "Akurasi & kualitas",
    trait: ["analitis", "teliti", "sistematis", "standar tinggi"],
    ketakutan: "kritik atas pekerjaan / kesalahan",
    komunikasi: "Data, logika, detail tertulis, jangan tekan cepat-cepat.",
    kelemahan: ["overanalisis", "perfeksionis", "dingin"],
    karier: ["engineer", "auditor", "analis", "QA"],
  },
};

export const DISC_KOMBINASI: Record<string, string> = {
  DI: "Motivator hasil — memimpin dengan energi, mendorong tim capai target dengan gaya karismatik.",
  DC: "Eksekutor presisi — hasil cepat DAN benar; keras pada standar.",
  ID: "Persuader — menjual visi, menggerakkan orang ke aksi.",
  IS: "Pendukung hangat — perekat tim, membangun relasi tulus.",
  SI: "Kolaborator setia — stabil, ramah, tim player sejati.",
  SC: "Spesialis tenang — konsisten, teliti, bisa diandalkan diam-diam.",
  CS: "Perfeksionis sabar — kualitas tinggi dengan proses stabil.",
  CD: "Arsitek standar — sistem, aturan, dan hasil terukur.",
};

export const DISC_ITEMS: (ItemLikertDimensi & { dim: DiscDim; bantuan: string })[] = [
  { no: 1, dim: "D", teks: "Saya suka mengambil alih kendali situasi.", bantuan: "Contoh: saat rapat kacau tanpa arah, Anda yang maju mengambil alih dan menentukan langkah selanjutnya." },
  { no: 2, dim: "D", teks: "Saya nyaman membuat keputusan cepat dengan info terbatas.", bantuan: "Seperti langsung memutuskan strategi meski data yang tersedia belum lengkap, karena waktu mendesak." },
  { no: 3, dim: "D", teks: "Kompetisi memacu performa terbaik saya.", bantuan: "Contoh: semangat kerja naik drastis begitu tahu ada rekan lain yang bersaing mengejar target yang sama." },
  { no: 4, dim: "D", teks: "Saya berbicara langsung ke inti tanpa basa-basi.", bantuan: "Misal: langsung menyampaikan \"intinya begini\" saat rapat, tanpa banyak basa-basi di awal." },
  { no: 5, dim: "D", teks: "Hambatan adalah tantangan, bukan alasan berhenti.", bantuan: "Seperti tetap mencari jalan lain saat rencana awal gagal, bukan malah menyerah." },
  { no: 6, dim: "D", teks: "Saya tidak sabar dengan proses yang lambat.", bantuan: "Contoh: merasa gelisah menunggu persetujuan berlapis-lapis untuk hal yang menurut Anda bisa langsung dieksekusi." },
  { no: 7, dim: "I", teks: "Saya mudah mengajak orang antusias terhadap ide saya.", bantuan: "Seperti berhasil membuat teman-teman semangat ikut proyek baru hanya lewat cara Anda bercerita." },
  { no: 8, dim: "I", teks: "Bertemu orang baru memberi saya energi.", bantuan: "Contoh: pulang dari acara networking justru merasa lebih bersemangat, bukan lelah, setelah kenalan dengan banyak orang." },
  { no: 9, dim: "I", teks: "Saya sering jadi pencair suasana.", bantuan: "Seperti melempar lelucon ringan saat suasana rapat terasa kaku dan tegang." },
  { no: 10, dim: "I", teks: "Saya lebih suka brainstorming ramai daripada kerja sendiri.", bantuan: "Contoh: lebih suka diskusi ide beramai-ramai di ruang rapat daripada mengerjakan sendirian di meja." },
  { no: 11, dim: "I", teks: "Pengakuan publik penting bagi saya.", bantuan: "Seperti merasa senang saat nama Anda disebut dan dipuji di depan banyak orang atas suatu pencapaian." },
  { no: 12, dim: "I", teks: "Saya bercerita dengan ekspresif dan hidup.", bantuan: "Contoh: saat menceritakan liburan, Anda memakai nada suara naik-turun dan gerakan tangan supaya lebih hidup." },
  { no: 13, dim: "S", teks: "Saya lebih suka lingkungan yang stabil dan bisa diprediksi.", bantuan: "Seperti merasa nyaman dengan rutinitas kerja yang sama setiap hari daripada jadwal yang berubah-ubah." },
  { no: 14, dim: "S", teks: "Orang datang ke saya untuk didengarkan.", bantuan: "Contoh: teman-teman sering curhat ke Anda karena tahu Anda akan mendengarkan dengan sabar." },
  { no: 15, dim: "S", teks: "Saya menyelesaikan tugas dengan tempo konsisten.", bantuan: "Seperti mengerjakan pekerjaan sedikit demi sedikit dengan kecepatan yang sama setiap hari, tanpa naik-turun drastis." },
  { no: 16, dim: "S", teks: "Saya mengalah demi kedamaian tim.", bantuan: "Contoh: memilih menyetujui pendapat rekan meski sebenarnya kurang setuju, supaya suasana tim tetap adem." },
  { no: 17, dim: "S", teks: "Perubahan mendadak membuat saya tidak nyaman.", bantuan: "Seperti merasa gelisah ketika rencana kerja yang sudah disusun tiba-tiba diubah total tanpa pemberitahuan." },
  { no: 18, dim: "S", teks: "Kesetiaan adalah nilai tertinggi saya.", bantuan: "Contoh: tetap bertahan mendukung tim atau perusahaan lama meski ada tawaran lain yang lebih menggiurkan." },
  { no: 19, dim: "C", teks: "Saya butuh data lengkap sebelum memutuskan.", bantuan: "Seperti menunda keputusan pembelian sampai semua ulasan dan spesifikasi produk sudah dibaca lengkap." },
  { no: 20, dim: "C", teks: "Kesalahan kecil dalam pekerjaan mengganggu saya.", bantuan: "Contoh: terganggu melihat ada satu tanda baca salah di laporan, meski isi keseluruhannya sudah bagus." },
  { no: 21, dim: "C", teks: "Saya mengikuti prosedur dan standar dengan ketat.", bantuan: "Seperti selalu mengisi checklist sesuai urutan resmi, tidak mengambil jalan pintas meski terasa lebih cepat." },
  { no: 22, dim: "C", teks: "Saya lebih percaya fakta daripada perasaan.", bantuan: "Contoh: memilih berpegang pada data penjualan dibanding firasat pribadi saat menilai suatu strategi." },
  { no: 23, dim: "C", teks: "Kualitas lebih penting daripada kecepatan.", bantuan: "Seperti rela menunda pengiriman sehari lagi demi memastikan hasil kerja benar-benar rapi." },
  { no: 24, dim: "C", teks: "Saya menganalisis risiko sebelum bertindak.", bantuan: "Contoh: membuat daftar kemungkinan yang bisa gagal dulu sebelum benar-benar memulai proyek baru." },
];
