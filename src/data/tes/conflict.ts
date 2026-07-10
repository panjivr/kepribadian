import type { ItemLikertDimensi } from "@/lib/skoring";

/**
 * Gaya Menghadapi Konflik — model Thomas-Kilmann (TKI).
 * 5 gaya di dua sumbu: ketegasan (kepentingan sendiri) × kerja sama (kepentingan
 * orang lain). Tidak ada gaya "terbaik" — tiap gaya cocok pada situasi berbeda.
 * Item original, 4 per gaya.
 */
export type KonflikDim =
  | "bersaing"
  | "kolaborasi"
  | "kompromi"
  | "menghindar"
  | "mengakomodasi";

export const KONFLIK_URUTAN: KonflikDim[] = [
  "bersaing",
  "kolaborasi",
  "kompromi",
  "menghindar",
  "mengakomodasi",
];

export const KONFLIK_INFO: Record<
  KonflikDim,
  { nama: string; sumbu: string; deskripsi: string; cocok: string; warna: string }
> = {
  bersaing: {
    nama: "Bersaing (Competing)",
    sumbu: "Tegas, kurang kerja sama",
    deskripsi:
      "Kamu memperjuangkan kepentingan/pendapatmu dengan tegas, bahkan bila harus mengalahkan pihak lain. Berorientasi 'menang'.",
    cocok:
      "Saat keputusan cepat & tegas dibutuhkan, saat prinsip penting, atau dalam keadaan darurat.",
    warna: "#ff453a",
  },
  kolaborasi: {
    nama: "Kolaborasi (Collaborating)",
    sumbu: "Tegas & kerja sama tinggi",
    deskripsi:
      "Kamu berusaha mencari solusi yang memuaskan SEMUA pihak — menggali kebutuhan di balik posisi masing-masing. Berorientasi 'menang-menang'.",
    cocok:
      "Saat kedua kepentingan terlalu penting untuk dikompromikan & ada waktu untuk berdialog mendalam.",
    warna: "#30d158",
  },
  kompromi: {
    nama: "Kompromi (Compromising)",
    sumbu: "Menengah di kedua sumbu",
    deskripsi:
      "Kamu mencari jalan tengah yang cukup adil — masing-masing mengalah sebagian. Berorientasi 'sama-sama dapat separuh'.",
    cocok:
      "Saat waktu terbatas, kekuatan setara, atau sebagai solusi sementara yang praktis.",
    warna: "#ffd60a",
  },
  menghindar: {
    nama: "Menghindar (Avoiding)",
    sumbu: "Kurang tegas & kurang kerja sama",
    deskripsi:
      "Kamu menunda atau menjauh dari konflik — tidak memperjuangkan kepentingan sendiri maupun orang lain saat itu.",
    cocok:
      "Saat isu sepele, saat perlu waktu menenangkan diri, atau saat risiko lebih besar dari manfaat berkonflik.",
    warna: "#8e8e93",
  },
  mengakomodasi: {
    nama: "Mengakomodasi (Accommodating)",
    sumbu: "Kurang tegas, kerja sama tinggi",
    deskripsi:
      "Kamu mengalah & mengutamakan kepentingan pihak lain di atas kepentinganmu sendiri. Berorientasi menjaga hubungan.",
    cocok:
      "Saat kamu keliru, saat isu jauh lebih penting bagi pihak lain, atau saat menjaga harmoni lebih berharga.",
    warna: "#0a84ff",
  },
};

export const KONFLIK_ITEMS: (ItemLikertDimensi & { dim: KonflikDim; bantuan: string })[] = [
  // Bersaing
  { no: 1, dim: "bersaing", teks: "Saat berselisih, saya berusaha keras agar pendapat saya yang diterima.", bantuan: "Contoh: dalam rapat kamu gigih memperjuangkan idemu sampai disetujui." },
  { no: 2, dim: "bersaing", teks: "Saya tegas menyatakan apa yang saya inginkan meski orang lain kurang setuju.", bantuan: "Analogi: seperti pengacara yang membela posisinya tanpa ragu." },
  { no: 3, dim: "bersaing", teks: "Saya lebih suka menang dalam perdebatan daripada mengalah.", bantuan: "Contoh: kamu merasa penting memenangkan argumen yang kamu yakini benar." },
  { no: 4, dim: "bersaing", teks: "Saya berani menekan untuk mencapai tujuan saya saat konflik.", bantuan: "Contoh: kamu mendorong kuat agar keputusan berpihak pada targetmu." },
  // Kolaborasi
  { no: 5, dim: "kolaborasi", teks: "Saya berusaha memahami kebutuhan semua pihak sebelum mencari solusi.", bantuan: "Contoh: menanyakan 'apa yang sebenarnya kamu butuhkan?' sebelum menawarkan jalan keluar." },
  { no: 6, dim: "kolaborasi", teks: "Saya mengajak berdiskusi terbuka agar semua pihak sama-sama puas.", bantuan: "Analogi: memperbesar kue bersama, bukan berebut potongan yang ada." },
  { no: 7, dim: "kolaborasi", teks: "Saya senang mencari solusi kreatif yang menguntungkan kedua belah pihak.", bantuan: "Contoh: menemukan opsi ketiga yang tak terpikir sebelumnya & memuaskan semua." },
  { no: 8, dim: "kolaborasi", teks: "Saya menggabungkan sudut pandang yang berbeda menjadi satu jalan keluar.", bantuan: "Contoh: memadukan idemu & ide lawan bicara jadi rencana baru yang lebih baik." },
  // Kompromi
  { no: 9, dim: "kompromi", teks: "Saya mencari jalan tengah yang adil bagi kedua pihak.", bantuan: "Contoh: 'kamu mengalah di sini, aku mengalah di situ.'" },
  { no: 10, dim: "kompromi", teks: "Saya bersedia mengalah sebagian asalkan pihak lain juga mengalah sebagian.", bantuan: "Analogi: membagi jeruk jadi dua bagian yang sama besar." },
  { no: 11, dim: "kompromi", teks: "Saya lebih suka kesepakatan cepat yang cukup memuaskan daripada berdebat lama.", bantuan: "Contoh: memilih solusi 'cukup baik' agar urusan segera selesai." },
  { no: 12, dim: "kompromi", teks: "Saya menawarkan pertukaran agar kedua pihak sama-sama mendapat sesuatu.", bantuan: "Contoh: 'aku setuju A kalau kamu setuju B.'" },
  // Menghindar
  { no: 13, dim: "menghindar", teks: "Saya cenderung menunda atau menjauhi perselisihan bila bisa.", bantuan: "Contoh: memilih diam & menghindar daripada memulai perdebatan." },
  { no: 14, dim: "menghindar", teks: "Saya lebih baik diam daripada terlibat konflik yang menegangkan.", bantuan: "Analogi: memilih memutar arah daripada menabrak rintangan." },
  { no: 15, dim: "menghindar", teks: "Saya membiarkan masalah reda sendiri tanpa membahasnya langsung.", bantuan: "Contoh: berharap situasi membaik seiring waktu tanpa konfrontasi." },
  { no: 16, dim: "menghindar", teks: "Saya menghindari topik yang berpotensi memicu pertengkaran.", bantuan: "Contoh: mengalihkan pembicaraan agar tak menyentuh isu sensitif." },
  // Mengakomodasi
  { no: 17, dim: "mengakomodasi", teks: "Saya sering mengalah demi menjaga hubungan tetap baik.", bantuan: "Contoh: menuruti keinginan teman agar tak ada yang tersinggung." },
  { no: 18, dim: "mengakomodasi", teks: "Saya mengutamakan kebahagiaan orang lain di atas keinginan saya sendiri.", bantuan: "Analogi: menyerahkan kursi terbaik agar orang lain nyaman." },
  { no: 19, dim: "mengakomodasi", teks: "Saya rela menyerahkan keinginan saya agar pihak lain merasa puas.", bantuan: "Contoh: membiarkan pasangan memilih meski kamu punya preferensi lain." },
  { no: 20, dim: "mengakomodasi", teks: "Saya menempatkan keharmonisan di atas memenangkan perselisihan.", bantuan: "Contoh: memilih damai daripada bersikeras kamu yang benar." },
];
