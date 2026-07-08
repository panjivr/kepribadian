import type { ItemLikertDimensi } from "@/lib/skoring";

export type HexacoDim = "H" | "E" | "X" | "A" | "C" | "O";

export const HEXACO_URUTAN: HexacoDim[] = ["H", "E", "X", "A", "C", "O"];

export const HEXACO_LABEL: Record<HexacoDim, string> = {
  H: "Kejujuran",
  E: "Emosionalitas",
  X: "Ekstraversi",
  A: "Keramahan",
  C: "Kesungguhan",
  O: "Keterbukaan",
};

export interface HexacoInfo {
  nama: string;
  deskripsi: string;
  tinggi: string;
  rendah: string;
  insight?: string;
}

export const HEXACO_INFO: Record<HexacoDim, HexacoInfo> = {
  H: {
    nama: "Honesty-Humility (Kejujuran-Kerendahan Hati)",
    deskripsi:
      "Ketulusan, keadilan, tidak serakah, rendah hati. Inilah pembeda utama HEXACO dari Big Five.",
    tinggi: "tulus, anti-manipulasi, tidak silau status",
    rendah: "oportunis, suka pamer, memanipulasi demi keuntungan",
    insight: "Prediktor terbaik untuk perilaku etis, korupsi, dan kecurangan.",
  },
  E: {
    nama: "Emotionality",
    deskripsi:
      "Rasa takut, kecemasan, ketergantungan emosional, dan sentimentalitas.",
    tinggi: "empatik, waspada bahaya, butuh dukungan",
    rendah: "berani fisik, mandiri emosional, tahan tekanan",
  },
  X: {
    nama: "Extraversion",
    deskripsi: "Percaya diri sosial, keberanian sosial, dan keceriaan.",
    tinggi: "energik sosial, percaya diri",
    rendah: "pendiam, reflektif",
  },
  A: {
    nama: "Agreeableness",
    deskripsi:
      "Pemaaf, lembut, fleksibel, sabar — fokus pada respons saat diperlakukan buruk.",
    tinggi: "pemaaf, sabar, kompromis",
    rendah: "pendendam, keras kepala, cepat marah",
  },
  C: {
    nama: "Conscientiousness",
    deskripsi: "Terorganisir, rajin, perfeksionis, dan hati-hati.",
    tinggi: "disiplin & teliti",
    rendah: "spontan & santai",
  },
  O: {
    nama: "Openness",
    deskripsi:
      "Apresiasi estetika, rasa ingin tahu, kreativitas, dan hal-hal tak konvensional.",
    tinggi: "kreatif eksploratif",
    rendah: "praktis konvensional",
  },
};

export const HEXACO_ITEMS: (ItemLikertDimensi & { dim: HexacoDim })[] = [
  { no: 1, dim: "H", key: 1, teks: "Saya tidak akan menjilat atasan demi kenaikan jabatan." },
  { no: 2, dim: "H", key: -1, teks: "Saya tergoda memakai uang palsu jika yakin tidak ketahuan." },
  { no: 3, dim: "H", key: 1, teks: "Memiliki barang mewah bukan hal penting bagi saya." },
  { no: 4, dim: "H", key: -1, teks: "Saya ingin orang tahu bahwa saya orang penting berstatus tinggi." },
  { no: 5, dim: "E", key: 1, teks: "Saya sangat takut menghadapi bahaya fisik." },
  { no: 6, dim: "E", key: 1, teks: "Saya butuh seseorang untuk menguatkan saat masa sulit." },
  { no: 7, dim: "E", key: -1, teks: "Saya tetap tenang meski dalam situasi menegangkan." },
  { no: 8, dim: "E", key: -1, teks: "Saya jarang menangis, bahkan di momen sedih." },
  { no: 9, dim: "X", key: 1, teks: "Saya mudah memulai percakapan dengan orang baru." },
  { no: 10, dim: "X", key: 1, teks: "Dalam kelompok, saya sering jadi yang memimpin diskusi." },
  { no: 11, dim: "X", key: -1, teks: "Saya merasa canggung menjadi pusat perhatian." },
  { no: 12, dim: "X", key: -1, teks: "Saya lebih memilih pekerjaan tanpa banyak interaksi sosial." },
  { no: 13, dim: "A", key: 1, teks: "Saya mudah memaafkan orang yang menyakiti saya." },
  { no: 14, dim: "A", key: 1, teks: "Saya jarang mengkritik orang meski mereka salah." },
  { no: 15, dim: "A", key: -1, teks: "Saya sulit melupakan orang yang pernah berbuat buruk pada saya." },
  { no: 16, dim: "A", key: -1, teks: "Orang bilang saya keras kepala dalam berargumen." },
  { no: 17, dim: "C", key: 1, teks: "Saya merencanakan segala sesuatu jauh-jauh hari." },
  { no: 18, dim: "C", key: 1, teks: "Saya memeriksa ulang pekerjaan untuk memastikan tanpa kesalahan." },
  { no: 19, dim: "C", key: -1, teks: "Saya membuat keputusan berdasarkan dorongan sesaat." },
  { no: 20, dim: "C", key: -1, teks: "Kamar/ruang kerja saya sering berantakan." },
  { no: 21, dim: "O", key: 1, teks: "Saya menikmati karya seni, musik, atau sastra yang tidak biasa." },
  { no: 22, dim: "O", key: 1, teks: "Saya senang memikirkan pertanyaan filosofis." },
  { no: 23, dim: "O", key: -1, teks: "Saya bosan dengan diskusi tentang ide-ide abstrak." },
  { no: 24, dim: "O", key: -1, teks: "Saya lebih suka hal yang sudah familiar daripada mencoba yang aneh-aneh." },
];
