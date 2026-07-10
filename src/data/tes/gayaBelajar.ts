import type { ItemTes } from "@/components/HalamanTes";

export type VakDim = "V" | "A" | "K";

export interface VakInfo {
  nama: string;
  ciri: string[];
  strategi: string[];
}

export const VAK_INFO: Record<VakDim, VakInfo> = {
  V: {
    nama: "Visual",
    ciri: ["ingat wajah lupa nama", "suka diagram & warna", "corat-coret saat berpikir"],
    strategi: ["mind map", "highlight warna", "video & infografis", "flashcard bergambar"],
  },
  A: {
    nama: "Auditori",
    ciri: ["ingat yang didengar", "bicara sendiri saat berpikir", "suka diskusi"],
    strategi: ["rekam & dengar ulang", "jelaskan ke orang lain", "podcast", "baca dengan suara"],
  },
  K: {
    nama: "Kinestetik",
    ciri: ["belajar sambil praktik", "gelisah duduk lama", "suka menyentuh & mencoba"],
    strategi: ["praktik langsung", "belajar sambil bergerak", "simulasi & role-play", "istirahat gerak tiap 25 menit"],
  },
};

export const VAK_ITEMS: ItemTes[] = [
  { no: 1, teks: "Saat belajar hal baru, saya paling terbantu oleh:", bantuan: "Pilih yang paling spontan kamu lakukan, bukan yang menurutmu 'seharusnya'. Tak ada jawaban benar/salah.", pilihan: [{ kunci: "V", teks: "melihat diagram/demo" }, { kunci: "A", teks: "mendengar penjelasan" }, { kunci: "K", teks: "langsung mencoba" }] },
  { no: 2, teks: "Saat mengeja kata sulit, saya:", bantuan: "Contoh kata 'khusyuk': kamu membayangkan bentuk tulisannya (V), mengucapkannya pelan (A), atau menuliskannya dulu (K)?", pilihan: [{ kunci: "V", teks: "membayangkan tulisannya" }, { kunci: "A", teks: "mengucapkannya" }, { kunci: "K", teks: "menulisnya dulu" }] },
  { no: 3, teks: "Saya paling ingat orang dari:", bantuan: "Saat bertemu kenalan lama, apa yang lebih dulu 'nyala' di ingatanmu?", pilihan: [{ kunci: "V", teks: "wajahnya" }, { kunci: "A", teks: "suaranya atau namanya" }, { kunci: "K", teks: "apa yang kami lakukan bersama" }] },
  { no: 4, teks: "Saat bosan saya cenderung:", bantuan: "Bayangkan sedang menunggu lama tanpa kegiatan — tubuhmu otomatis melakukan apa?", pilihan: [{ kunci: "V", teks: "melamun atau corat-coret" }, { kunci: "A", teks: "mengobrol atau bersenandung" }, { kunci: "K", teks: "gerak-gerak atau berjalan" }] },
  { no: 5, teks: "Instruksi paling jelas untuk saya:", bantuan: "Saat dapat tugas baru, bentuk penjelasan mana yang bikin kamu paling cepat 'ngeh'?", pilihan: [{ kunci: "V", teks: "tertulis dengan gambar" }, { kunci: "A", teks: "dijelaskan lisan" }, { kunci: "K", teks: "didemokan lalu saya tiru" }] },
  { no: 6, teks: "Saat marah, saya:", bantuan: "Reaksi paling alamimu saat emosi memuncak biasanya seperti apa?", pilihan: [{ kunci: "V", teks: "diam, terlihat dari ekspresi" }, { kunci: "A", teks: "meninggikan suara" }, { kunci: "K", teks: "pergi atau membanting sesuatu" }] },
  { no: 7, teks: "Hadiah favorit saya:", bantuan: "Dari ketiganya, mana yang paling bikin kamu senang menerimanya?", pilihan: [{ kunci: "V", teks: "sesuatu yang indah dilihat" }, { kunci: "A", teks: "musik atau konser" }, { kunci: "K", teks: "alat atau pengalaman aktivitas" }] },
  { no: 8, teks: "Saat menunggu, saya:", bantuan: "Misal antre lama di bank — kamu biasanya melakukan apa untuk mengisi waktu?", pilihan: [{ kunci: "V", teks: "mengamati sekitar atau scroll" }, { kunci: "A", teks: "dengar musik atau menelepon" }, { kunci: "K", teks: "mondar-mandir" }] },
  { no: 9, teks: "Kata yang sering saya pakai:", bantuan: "Ungkapan mana yang paling sering meluncur dari mulutmu tanpa sadar?", pilihan: [{ kunci: "V", teks: "'kelihatannya', 'bayangkan'" }, { kunci: "A", teks: "'kedengarannya', 'dengar dulu'" }, { kunci: "K", teks: "'rasanya', 'pegang dulu'" }] },
  { no: 10, teks: "Merakit barang baru, saya:", bantuan: "Dapat lemari rakitan baru — langkah pertamamu apa?", pilihan: [{ kunci: "V", teks: "baca manual bergambar" }, { kunci: "A", teks: "minta dijelaskan" }, { kunci: "K", teks: "langsung rakit, manual belakangan" }] },
  { no: 11, teks: "Presentasi favorit saya berisi:", bantuan: "Presentasi seperti apa yang bikin kamu betah menyimak sampai selesai?", pilihan: [{ kunci: "V", teks: "slide visual menarik" }, { kunci: "A", teks: "pembicara yang enak didengar" }, { kunci: "K", teks: "aktivitas interaktif" }] },
  { no: 12, teks: "Mengingat nomor telepon, saya:", bantuan: "Cara paling alamimu supaya angka itu nempel di ingatan?", pilihan: [{ kunci: "V", teks: "membayangkan angkanya" }, { kunci: "A", teks: "mengulang dengan suara" }, { kunci: "K", teks: "mengetiknya beberapa kali" }] },
  { no: 13, teks: "Di waktu luang saya pilih:", bantuan: "Akhir pekan bebas — kegiatan mana yang paling kamu cari?", pilihan: [{ kunci: "V", teks: "film, galeri, atau desain" }, { kunci: "A", teks: "musik, podcast, mengobrol" }, { kunci: "K", teks: "olahraga, masak, berkebun" }] },
  { no: 14, teks: "Saat konsentrasi, saya terganggu oleh:", bantuan: "Apa yang paling cepat merusak fokusmu saat sedang serius bekerja?", pilihan: [{ kunci: "V", teks: "gerakan atau kekacauan visual" }, { kunci: "A", teks: "suara berisik" }, { kunci: "K", teks: "duduk terlalu lama" }] },
  { no: 15, teks: "Memberi arah jalan, saya:", bantuan: "Ada yang tanya arah ke rumahmu — kamu paling nyaman menjelaskannya bagaimana?", pilihan: [{ kunci: "V", teks: "menggambar peta" }, { kunci: "A", teks: "menjelaskan lisan" }, { kunci: "K", teks: "mengantar langsung" }] },
];
