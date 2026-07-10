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

export const HEXACO_ITEMS: (ItemLikertDimensi & { dim: HexacoDim; bantuan: string })[] = [
  { no: 1, dim: "H", key: 1, teks: "Saya tidak akan menjilat atasan demi kenaikan jabatan.", bantuan: "Contoh: Anda tetap bersikap apa adanya ke atasan, tidak pura-pura memuji berlebihan supaya dilirik naik jabatan." },
  { no: 2, dim: "H", key: -1, teks: "Saya tergoda memakai uang palsu jika yakin tidak ketahuan.", bantuan: "Misal: menemukan uang yang bukan hak Anda dan sempat berpikir untuk memakainya karena yakin tidak akan ketahuan." },
  { no: 3, dim: "H", key: 1, teks: "Memiliki barang mewah bukan hal penting bagi saya.", bantuan: "Contoh: naik motor biasa ke acara reuni tidak masalah, tidak perlu tampil dengan barang mewah supaya dianggap sukses." },
  { no: 4, dim: "H", key: -1, teks: "Saya ingin orang tahu bahwa saya orang penting berstatus tinggi.", bantuan: "Seperti sengaja menyebut jabatan atau koneksi penting saat berkenalan, supaya orang lain terkesan." },
  { no: 5, dim: "E", key: 1, teks: "Saya sangat takut menghadapi bahaya fisik.", bantuan: "Contoh: jantung berdebar kencang dan enggan mendekat saat melihat ketinggian, api besar, atau binatang buas." },
  { no: 6, dim: "E", key: 1, teks: "Saya butuh seseorang untuk menguatkan saat masa sulit.", bantuan: "Seperti ingin segera menelepon orang terdekat untuk didengarkan saat sedang menghadapi masalah berat." },
  { no: 7, dim: "E", key: -1, teks: "Saya tetap tenang meski dalam situasi menegangkan.", bantuan: "Contoh: tetap berpikir jernih saat presentasi mendadak diinterupsi pertanyaan sulit dari atasan." },
  { no: 8, dim: "E", key: -1, teks: "Saya jarang menangis, bahkan di momen sedih.", bantuan: "Misal: tetap menahan air mata saat menonton adegan perpisahan yang mengharukan di film." },
  { no: 9, dim: "X", key: 1, teks: "Saya mudah memulai percakapan dengan orang baru.", bantuan: "Seperti langsung menyapa dan mengobrol dengan orang asing yang duduk di sebelah saat mengantre." },
  { no: 10, dim: "X", key: 1, teks: "Dalam kelompok, saya sering jadi yang memimpin diskusi.", bantuan: "Contoh: saat kerja kelompok, Andalah yang lebih dulu mengatur pembagian tugas dan mengarahkan pembicaraan." },
  { no: 11, dim: "X", key: -1, teks: "Saya merasa canggung menjadi pusat perhatian.", bantuan: "Seperti tangan berkeringat dan ingin cepat duduk lagi saat semua mata tertuju ke Anda di depan kelas." },
  { no: 12, dim: "X", key: -1, teks: "Saya lebih memilih pekerjaan tanpa banyak interaksi sosial.", bantuan: "Contoh: lebih suka pekerjaan yang bisa dikerjakan sendiri di balik layar daripada yang harus melayani banyak orang." },
  { no: 13, dim: "A", key: 1, teks: "Saya mudah memaafkan orang yang menyakiti saya.", bantuan: "Seperti langsung bisa berbaikan dengan teman yang pernah membatalkan janji secara sepihak, tanpa menyimpan dendam." },
  { no: 14, dim: "A", key: 1, teks: "Saya jarang mengkritik orang meski mereka salah.", bantuan: "Contoh: memilih diam atau menyampaikan dengan sangat halus saat rekan kerja melakukan kesalahan kecil." },
  { no: 15, dim: "A", key: -1, teks: "Saya sulit melupakan orang yang pernah berbuat buruk pada saya.", bantuan: "Seperti masih mengingat jelas dan merasa kesal setiap teringat teman yang pernah mengkhianati kepercayaan Anda." },
  { no: 16, dim: "A", key: -1, teks: "Orang bilang saya keras kepala dalam berargumen.", bantuan: "Misal: tetap bersikeras dengan pendapat sendiri dalam diskusi meski sudah diberi banyak bukti sebaliknya." },
  { no: 17, dim: "C", key: 1, teks: "Saya merencanakan segala sesuatu jauh-jauh hari.", bantuan: "Contoh: sudah menyiapkan itinerary dan daftar perlengkapan liburan berbulan-bulan sebelum berangkat." },
  { no: 18, dim: "C", key: 1, teks: "Saya memeriksa ulang pekerjaan untuk memastikan tanpa kesalahan.", bantuan: "Seperti membaca ulang laporan atau email penting dua-tiga kali sebelum benar-benar dikirim." },
  { no: 19, dim: "C", key: -1, teks: "Saya membuat keputusan berdasarkan dorongan sesaat.", bantuan: "Misal: tiba-tiba membeli barang di kasir hanya karena tertarik sesaat, tanpa rencana sebelumnya." },
  { no: 20, dim: "C", key: -1, teks: "Kamar/ruang kerja saya sering berantakan.", bantuan: "Contoh: meja kerja penuh tumpukan kertas dan barang yang tidak tersusun rapi dalam waktu lama." },
  { no: 21, dim: "O", key: 1, teks: "Saya menikmati karya seni, musik, atau sastra yang tidak biasa.", bantuan: "Seperti tertarik menonton film eksperimental atau mendengarkan musik dari genre yang jarang didengar orang lain." },
  { no: 22, dim: "O", key: 1, teks: "Saya senang memikirkan pertanyaan filosofis.", bantuan: "Contoh: suka merenungkan pertanyaan seperti \"apa arti kebahagiaan sebenarnya\" saat sedang santai." },
  { no: 23, dim: "O", key: -1, teks: "Saya bosan dengan diskusi tentang ide-ide abstrak.", bantuan: "Seperti ingin segera mengganti topik saat obrolan mulai membahas konsep filosofis yang rumit dan tidak konkret." },
  { no: 24, dim: "O", key: -1, teks: "Saya lebih suka hal yang sudah familiar daripada mencoba yang aneh-aneh.", bantuan: "Misal: memesan menu yang sama setiap kali makan di restoran favorit daripada mencoba menu baru yang asing." },
];
