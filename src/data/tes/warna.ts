import type { ItemLikertDimensi } from "@/lib/skoring";

export type WarnaDim = "Gold" | "Blue" | "Green" | "Orange";

export const WARNA_URUTAN: WarnaDim[] = ["Gold", "Blue", "Green", "Orange"];

export const WARNA_HEX: Record<WarnaDim, string> = {
  Gold: "#eab308",
  Blue: "#3b82f6",
  Green: "#30d158",
  Orange: "#ff9f0a",
};

export interface WarnaInfo {
  label: string;
  padanan: string;
  nilaiInti: string;
  trait: string[];
  diTim: string;
  stresJika: string;
}

export const WARNA_INFO: Record<WarnaDim, WarnaInfo> = {
  Gold: {
    label: "Emas",
    padanan: "SJ / Guardian ~ ISTJ–ESFJ",
    nilaiInti: "tanggung jawab & tatanan",
    trait: ["terencana", "tepat waktu", "loyal", "menghargai aturan"],
    diTim: "tulang punggung operasional",
    stresJika: "kekacauan & ketidakjelasan",
  },
  Blue: {
    label: "Biru",
    padanan: "NF / Idealist ~ INFP–ENFJ",
    nilaiInti: "hubungan & makna",
    trait: ["empatik", "komunikatif perasaan", "harmonis", "autentik"],
    diTim: "perekat emosional & moral",
    stresJika: "konflik & ketidaktulusan",
  },
  Green: {
    label: "Hijau",
    padanan: "NT / Rational ~ INTJ–ENTP",
    nilaiInti: "kompetensi & logika",
    trait: ["analitis", "independen", "ingin tahu", "skeptis sehat"],
    diTim: "otak strategi & inovasi",
    stresJika: "inkompetensi & keputusan emosional",
  },
  Orange: {
    label: "Oranye",
    padanan: "SP / Artisan ~ ESTP–ISFP",
    nilaiInti: "kebebasan & aksi",
    trait: ["spontan", "berani", "enerjik", "praktis di lapangan"],
    diTim: "eksekutor cepat & pemecah kebuntuan",
    stresJika: "rutinitas & birokrasi",
  },
};

export const WARNA_ITEMS: (ItemLikertDimensi & { dim: WarnaDim; bantuan: string })[] = [
  { no: 1, dim: "Gold", teks: "Saya merasa tenang saat semua terjadwal.", bantuan: "Seperti merasa lega melihat agenda harian sudah tersusun rapi jam demi jam." },
  { no: 2, dim: "Gold", teks: "Aturan dibuat untuk kebaikan bersama dan saya menaatinya.", bantuan: "Contoh: tetap mengantre dengan tertib meski tidak ada yang mengawasi, karena percaya aturan itu untuk kebaikan bersama." },
  { no: 3, dim: "Gold", teks: "Saya menepati janji apapun yang terjadi.", bantuan: "Seperti tetap datang tepat waktu memenuhi janji meski cuaca sedang buruk atau Anda sedang lelah." },
  { no: 4, dim: "Blue", teks: "Hubungan yang dalam lebih penting dari pencapaian.", bantuan: "Contoh: lebih memilih menghabiskan waktu berkualitas dengan keluarga daripada mengejar promosi jabatan." },
  { no: 5, dim: "Blue", teks: "Saya peka terhadap perasaan tak terucap orang lain.", bantuan: "Seperti langsung menyadari teman sedang sedih hanya dari nada suaranya, meski dia bilang \"aku baik-baik saja\"." },
  { no: 6, dim: "Blue", teks: "Saya butuh pekerjaan yang bermakna, bukan sekadar gaji.", bantuan: "Contoh: memilih pekerjaan dengan gaji lebih kecil tapi terasa membantu orang lain, dibanding gaji besar tanpa makna." },
  { no: 7, dim: "Green", teks: "Saya menuntut alasan logis di balik setiap keputusan.", bantuan: "Seperti selalu bertanya \"kenapa harus begini\" sebelum menyetujui suatu kebijakan di kantor." },
  { no: 8, dim: "Green", teks: "Saya lebih suka memecahkan masalah kompleks daripada bersosialisasi.", bantuan: "Contoh: lebih memilih menyendiri memecahkan teka-teki rumit daripada ikut mengobrol santai di acara kumpul." },
  { no: 9, dim: "Green", teks: "Kompetensi adalah ukuran utama saya menilai orang.", bantuan: "Seperti lebih menghormati rekan kerja yang benar-benar ahli di bidangnya dibanding yang sekadar ramah tapi kurang kompeten." },
  { no: 10, dim: "Orange", teks: "Saya bertindak dulu, menyesuaikan kemudian.", bantuan: "Contoh: langsung memulai proyek dan menyesuaikan rencana sambil jalan, daripada menunggu semua matang dulu." },
  { no: 11, dim: "Orange", teks: "Risiko membuat hidup terasa hidup.", bantuan: "Seperti merasa hidup lebih bergairah saat mencoba olahraga ekstrem atau mengambil peluang yang belum pasti hasilnya." },
  { no: 12, dim: "Orange", teks: "Duduk rapat lama adalah siksaan bagi saya.", bantuan: "Contoh: merasa gelisah dan ingin segera bergerak saat rapat berlangsung lebih dari satu jam tanpa jeda." },
];
