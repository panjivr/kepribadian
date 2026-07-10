import type { ItemLikertDimensi } from "@/lib/skoring";

export type MiDim =
  | "linguistik"
  | "logis"
  | "visual"
  | "musikal"
  | "kinestetik"
  | "interpersonal"
  | "intrapersonal"
  | "naturalis";

export const MI_URUTAN: MiDim[] = [
  "linguistik",
  "logis",
  "visual",
  "musikal",
  "kinestetik",
  "interpersonal",
  "intrapersonal",
  "naturalis",
];

export interface MiInfo {
  nama: string;
  labelPendek: string;
  desk: string;
  karier: string[];
  caraBelajar: string;
}

export const MI_INFO: Record<MiDim, MiInfo> = {
  linguistik: { nama: "Linguistik", labelPendek: "Linguistik", desk: "Kata-kata, bahasa, menulis, bercerita", karier: ["penulis", "jurnalis", "pengacara", "penerjemah"], caraBelajar: "membaca, menulis catatan, diskusi" },
  logis: { nama: "Logis-Matematis", labelPendek: "Logis", desk: "Angka, pola, logika, sebab-akibat", karier: ["programmer", "ilmuwan", "analis", "akuntan"], caraBelajar: "klasifikasi, eksperimen, pemecahan masalah" },
  visual: { nama: "Visual-Spasial", labelPendek: "Visual", desk: "Gambar, ruang, desain, peta", karier: ["desainer", "arsitek", "fotografer", "pilot"], caraBelajar: "diagram, mind map, video" },
  musikal: { nama: "Musikal", labelPendek: "Musikal", desk: "Nada, ritme, melodi, suara", karier: ["musisi", "produser", "sound designer", "komposer"], caraBelajar: "lagu, ritme, musik latar" },
  kinestetik: { nama: "Kinestetik-Tubuh", labelPendek: "Kinestetik", desk: "Gerak, koordinasi, keterampilan tangan", karier: ["atlet", "penari", "ahli bedah", "teknisi"], caraBelajar: "praktik langsung, simulasi" },
  interpersonal: { nama: "Interpersonal", labelPendek: "Interpersonal", desk: "Memahami & berinteraksi dengan orang", karier: ["guru", "HR", "sales", "politisi"], caraBelajar: "kelompok belajar, mengajar orang lain" },
  intrapersonal: { nama: "Intrapersonal", labelPendek: "Intrapersonal", desk: "Memahami diri, refleksi, tujuan hidup", karier: ["psikolog", "penulis", "entrepreneur", "filsuf"], caraBelajar: "jurnal, refleksi mandiri, target personal" },
  naturalis: { nama: "Naturalis", labelPendek: "Naturalis", desk: "Alam, pola lingkungan, klasifikasi makhluk hidup", karier: ["biolog", "dokter hewan", "konservasi", "agronom"], caraBelajar: "observasi lapangan, kategorisasi" },
};

export const MI_ITEMS: (ItemLikertDimensi & { dim: MiDim; bantuan: string })[] = [
  { no: 1, dim: "linguistik", teks: "Saya mudah menemukan kata yang tepat saat menulis/bicara.", bantuan: "Contoh: saat menjelaskan sesuatu ke teman, kamu langsung tahu kata yang pas tanpa perlu berpikir lama." },
  { no: 2, dim: "linguistik", teks: "Saya menikmati permainan kata dan bahasa.", bantuan: "Contoh: kamu suka main tebak-tebakan kata, pantun, atau teka-teki silang." },
  { no: 3, dim: "linguistik", teks: "Saya belajar paling baik dengan membaca.", bantuan: "Contoh: kamu lebih paham materi kuliah dari membaca buku teks dibanding mendengarkan ceramah." },
  { no: 4, dim: "logis", teks: "Saya suka mencari pola dan hubungan sebab-akibat.", bantuan: "Contoh: melihat tagihan listrik naik, kamu langsung menghubungkannya dengan AC yang sering menyala semalaman." },
  { no: 5, dim: "logis", teks: "Hitungan dan logika terasa alami bagi saya.", bantuan: "Contoh: menghitung kembalian belanja atau membagi tagihan patungan terasa mudah dan menyenangkan buatmu." },
  { no: 6, dim: "logis", teks: "Saya memecah masalah besar jadi langkah sistematis.", bantuan: "Contoh: saat merencanakan acara besar, kamu membaginya jadi daftar tugas kecil yang berurutan." },
  { no: 7, dim: "visual", teks: "Saya berpikir dalam gambar.", bantuan: "Contoh: saat memikirkan rencana liburan, yang muncul di kepalamu adalah gambaran tempatnya, bukan kalimat." },
  { no: 8, dim: "visual", teks: "Saya mudah membaca peta dan membayangkan ruang 3D.", bantuan: "Contoh: kamu bisa membayangkan tata letak furnitur di ruangan baru hanya dari denah di kertas." },
  { no: 9, dim: "visual", teks: "Saya memperhatikan estetika visual di sekitar.", bantuan: "Contoh: kamu langsung menyadari kalau warna dinding dan tirai di sebuah ruangan tidak serasi." },
  { no: 10, dim: "musikal", teks: "Saya cepat menangkap melodi atau ritme baru.", bantuan: "Contoh: kamu bisa mengikuti nada lagu yang baru sekali didengar tanpa perlu mengulang berkali-kali." },
  { no: 11, dim: "musikal", teks: "Saya sering menyadari nada sumbang.", bantuan: "Contoh: kamu langsung merasa janggal saat seseorang bernyanyi atau bermain musik sedikit fals." },
  { no: 12, dim: "musikal", teks: "Musik memengaruhi mood & fokus saya dengan kuat.", bantuan: "Contoh: suasana hatimu bisa langsung berubah dari malas jadi bersemangat begitu mendengar lagu tertentu." },
  { no: 13, dim: "kinestetik", teks: "Saya belajar dengan mencoba langsung, bukan membaca manual.", bantuan: "Contoh: saat dapat gadget baru, kamu langsung mengutak-atik tombolnya daripada membaca buku panduan." },
  { no: 14, dim: "kinestetik", teks: "Koordinasi tubuh/tangan saya bagus.", bantuan: "Contoh: kamu mudah menangkap bola yang dilempar tiba-tiba atau cekatan merakit sesuatu dengan tangan." },
  { no: 15, dim: "kinestetik", teks: "Saya sulit diam lama; harus bergerak.", bantuan: "Contoh: saat rapat berlangsung lama, kamu jadi gelisah dan ingin berdiri atau berjalan-jalan sebentar." },
  { no: 16, dim: "interpersonal", teks: "Saya cepat membaca suasana hati orang.", bantuan: "Contoh: begitu masuk ruangan, kamu langsung merasakan kalau ada yang sedang tegang di antara teman-temanmu." },
  { no: 17, dim: "interpersonal", teks: "Orang sering curhat kepada saya.", bantuan: "Contoh: teman-teman lebih memilih bercerita masalah pribadinya kepadamu dibanding orang lain." },
  { no: 18, dim: "interpersonal", teks: "Saya bekerja lebih baik dalam tim.", bantuan: "Contoh: kamu lebih bersemangat dan hasil kerjamu lebih bagus saat mengerjakan proyek bersama orang lain dibanding sendirian." },
  { no: 19, dim: "intrapersonal", teks: "Saya sangat mengenal kekuatan & kelemahan saya.", bantuan: "Contoh: kamu bisa dengan jelas menyebutkan hal apa yang kamu kuasai dan apa yang masih perlu diperbaiki dari dirimu." },
  { no: 20, dim: "intrapersonal", teks: "Saya rutin merenungkan arah hidup.", bantuan: "Contoh: kamu sering menyempatkan waktu sendiri untuk memikirkan mau jadi apa dan ke mana hidupmu akan dibawa." },
  { no: 21, dim: "intrapersonal", teks: "Saya nyaman bekerja mandiri dengan target sendiri.", bantuan: "Contoh: kamu lebih suka mengatur sendiri jadwal dan targetmu daripada terus diawasi orang lain." },
  { no: 22, dim: "naturalis", teks: "Saya peka terhadap perubahan alam & lingkungan.", bantuan: "Contoh: kamu langsung menyadari saat cuaca akan berubah atau musim mulai bergeser sebelum orang lain sadar." },
  { no: 23, dim: "naturalis", teks: "Saya suka mengamati/mengklasifikasi tumbuhan-hewan.", bantuan: "Contoh: saat jalan-jalan di taman, kamu senang mengenali jenis-jenis burung atau tanaman yang kamu lihat." },
  { no: 24, dim: "naturalis", teks: "Berada di alam memulihkan energi saya.", bantuan: "Contoh: setelah seminggu penat bekerja, jalan-jalan ke gunung atau pantai membuatmu merasa segar kembali." },
];
