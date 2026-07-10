import type { ItemLikertDimensi } from "@/lib/skoring";

export type TemperamenDim =
  | "Sanguinis"
  | "Koleris"
  | "Melankolis"
  | "Plegmatis";

export const TEMPERAMEN_URUTAN: TemperamenDim[] = [
  "Sanguinis",
  "Koleris",
  "Melankolis",
  "Plegmatis",
];

export interface TemperamenInfo {
  julukan: string;
  elemen: string;
  trait: string[];
  kekuatan: string[];
  kelemahan: string[];
  diKerja: string;
  cinta: string;
  disc: string;
}

export const TEMPERAMEN_INFO: Record<TemperamenDim, TemperamenInfo> = {
  Sanguinis: {
    julukan: "Yang Populer",
    elemen: "Udara",
    trait: ["ceria", "spontan", "ekspresif", "suka bercerita"],
    kekuatan: ["menghidupkan suasana", "cepat berteman", "optimis menular"],
    kelemahan: ["pelupa", "tidak disiplin", "haus perhatian", "mudah teralihkan"],
    diKerja: "Ide & energi awal luar biasa; butuh partner penyelesai.",
    cinta: "Hangat dan seru; butuh apresiasi terus-menerus.",
    disc: "I",
  },
  Koleris: {
    julukan: "Yang Kuat",
    elemen: "Api",
    trait: ["tegas", "berkemauan baja", "cepat", "mandiri"],
    kekuatan: ["pemimpin alami", "pengambil keputusan", "produktif"],
    kelemahan: ["dominan", "tidak sabar", "sulit minta maaf", "workaholic"],
    diKerja: "Penggerak utama; belajar delegasi & empati.",
    cinta: "Protektif dan setia; belajar melunak.",
    disc: "D",
  },
  Melankolis: {
    julukan: "Yang Sempurna",
    elemen: "Tanah",
    trait: ["mendalam", "analitis", "perfeksionis", "setia"],
    kekuatan: ["standar kualitas tertinggi", "perencana detail", "kreatif serius"],
    kelemahan: ["pesimis", "mudah tersinggung", "overthinking", "sulit puas"],
    diKerja: "Penjaga kualitas & sistem; hati-hati paralysis by analysis.",
    cinta: "Dalam dan setia; belajar tidak menuntut kesempurnaan.",
    disc: "C",
  },
  Plegmatis: {
    julukan: "Yang Damai",
    elemen: "Air",
    trait: ["tenang", "sabar", "santai", "diplomatis"],
    kekuatan: ["penstabil konflik", "pendengar terbaik", "konsisten tanpa drama"],
    kelemahan: ["pasif", "sulit ambil keputusan", "menunda", "menghindari tanggung jawab besar"],
    diKerja: "Perekat tim yang tenang; butuh dorongan inisiatif.",
    cinta: "Nyaman dan tanpa drama; belajar mengungkapkan keinginan.",
    disc: "S",
  },
};

export const TEMPERAMEN_ITEMS: (ItemLikertDimensi & { dim: TemperamenDim; bantuan: string })[] = [
  { no: 1, dim: "Sanguinis", teks: "Saya bercerita dengan heboh dan penuh ekspresi.", bantuan: "Seperti menceritakan kejadian sehari-hari dengan suara keras, gerakan tangan, dan mimik wajah yang hidup." },
  { no: 2, dim: "Sanguinis", teks: "Saya mudah lupa detail tapi ingat suasana serunya.", bantuan: "Contoh: lupa nama tempat liburan tapi masih ingat betapa serunya momen itu." },
  { no: 3, dim: "Sanguinis", teks: "Saya butuh berada di sekitar orang agar semangat.", bantuan: "Seperti merasa lebih bertenaga saat berada di keramaian dibanding sendirian di rumah." },
  { no: 4, dim: "Sanguinis", teks: "Saya spontan memutuskan ikut acara dadakan.", bantuan: "Contoh: langsung bilang \"ikut\" saat diajak nongkrong mendadak malam itu juga, tanpa pikir panjang." },
  { no: 5, dim: "Koleris", teks: "Saya frustrasi melihat orang lamban bekerja.", bantuan: "Seperti merasa jengkel menunggu rekan kerja yang masih mengerjakan hal yang menurut Anda sudah bisa selesai dari tadi." },
  { no: 6, dim: "Koleris", teks: "Saya yakin cara saya biasanya yang paling efektif.", bantuan: "Contoh: tetap memilih metode Anda sendiri dalam menyelesaikan tugas kelompok karena yakin itu paling cepat berhasil." },
  { no: 7, dim: "Koleris", teks: "Target harus tercapai, apapun caranya.", bantuan: "Seperti tetap mendorong tim bekerja lembur demi memastikan target bulan ini tercapai." },
  { no: 8, dim: "Koleris", teks: "Saya otomatis memimpin saat tak ada yang mengambil alih.", bantuan: "Contoh: saat rapat hening tanpa ada yang bicara, Anda spontan mengambil alih dan mengarahkan jalannya diskusi." },
  { no: 9, dim: "Melankolis", teks: "Saya memikirkan ulang percakapan yang sudah lewat.", bantuan: "Seperti masih memutar ulang di kepala obrolan tadi siang, memikirkan apakah ada kata yang salah diucapkan." },
  { no: 10, dim: "Melankolis", teks: "Detail kecil yang salah sangat mengganggu saya.", bantuan: "Contoh: terganggu melihat foto yang sedikit miring di dinding meski yang lain sudah rapi." },
  { no: 11, dim: "Melankolis", teks: "Saya butuh waktu sendiri untuk memproses perasaan.", bantuan: "Seperti memilih menyendiri dulu di kamar sebelum bisa cerita ke orang lain setelah hari yang berat." },
  { no: 12, dim: "Melankolis", teks: "Saya membuat rencana cadangan untuk rencana cadangan.", bantuan: "Contoh: menyiapkan rencana B dan rencana C untuk acara penting, bukan cuma satu rencana saja." },
  { no: 13, dim: "Plegmatis", teks: "Orang bilang saya sangat sulit marah.", bantuan: "Seperti tetap bersikap tenang dan tidak meninggikan suara meski diprovokasi berkali-kali." },
  { no: 14, dim: "Plegmatis", teks: "Saya ikut saja keputusan mayoritas.", bantuan: "Contoh: saat teman-teman memilih tempat makan, Anda cenderung bilang \"terserah, ikut aja\" daripada bersikeras dengan pilihan sendiri." },
  { no: 15, dim: "Plegmatis", teks: "Santai di rumah lebih menarik daripada acara ramai.", bantuan: "Seperti lebih memilih rebahan menonton di rumah daripada datang ke pesta yang ramai di akhir pekan." },
  { no: 16, dim: "Plegmatis", teks: "Saya penengah alami saat teman-teman berkonflik.", bantuan: "Contoh: saat dua teman bertengkar, Anda yang biasanya diminta menjadi penengah untuk meredakan situasi." },
];
