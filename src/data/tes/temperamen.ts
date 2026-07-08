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

export const TEMPERAMEN_ITEMS: (ItemLikertDimensi & { dim: TemperamenDim })[] = [
  { no: 1, dim: "Sanguinis", teks: "Saya bercerita dengan heboh dan penuh ekspresi." },
  { no: 2, dim: "Sanguinis", teks: "Saya mudah lupa detail tapi ingat suasana serunya." },
  { no: 3, dim: "Sanguinis", teks: "Saya butuh berada di sekitar orang agar semangat." },
  { no: 4, dim: "Sanguinis", teks: "Saya spontan memutuskan ikut acara dadakan." },
  { no: 5, dim: "Koleris", teks: "Saya frustrasi melihat orang lamban bekerja." },
  { no: 6, dim: "Koleris", teks: "Saya yakin cara saya biasanya yang paling efektif." },
  { no: 7, dim: "Koleris", teks: "Target harus tercapai, apapun caranya." },
  { no: 8, dim: "Koleris", teks: "Saya otomatis memimpin saat tak ada yang mengambil alih." },
  { no: 9, dim: "Melankolis", teks: "Saya memikirkan ulang percakapan yang sudah lewat." },
  { no: 10, dim: "Melankolis", teks: "Detail kecil yang salah sangat mengganggu saya." },
  { no: 11, dim: "Melankolis", teks: "Saya butuh waktu sendiri untuk memproses perasaan." },
  { no: 12, dim: "Melankolis", teks: "Saya membuat rencana cadangan untuk rencana cadangan." },
  { no: 13, dim: "Plegmatis", teks: "Orang bilang saya sangat sulit marah." },
  { no: 14, dim: "Plegmatis", teks: "Saya ikut saja keputusan mayoritas." },
  { no: 15, dim: "Plegmatis", teks: "Santai di rumah lebih menarik daripada acara ramai." },
  { no: 16, dim: "Plegmatis", teks: "Saya penengah alami saat teman-teman berkonflik." },
];
