export type HdTipe =
  | "Manifestor"
  | "Generator"
  | "Manifesting Generator"
  | "Projector"
  | "Reflector";

export interface HdInfo {
  populasi: string;
  aura: string;
  strategi: string;
  tandaBenar: string;
  tandaSalah: string;
  deskripsi: string;
}

export const HD_INFO: Record<HdTipe, HdInfo> = {
  Manifestor: {
    populasi: "~9%",
    aura: "tertutup & menolak",
    strategi: "Menginformasikan sebelum bertindak",
    tandaBenar: "Damai",
    tandaSalah: "Marah",
    deskripsi:
      "Inisiator murni — memulai tanpa menunggu; dirancang untuk memicu, bukan menyelesaikan semua.",
  },
  Generator: {
    populasi: "~37%",
    aura: "terbuka & membungkus",
    strategi: "Menunggu untuk merespons",
    tandaBenar: "Kepuasan",
    tandaSalah: "Frustrasi",
    deskripsi:
      "Pembangun berenergi sakral — kekuatan hidup mengalir saat mengerjakan yang benar-benar dicintai.",
  },
  "Manifesting Generator": {
    populasi: "~33%",
    aura: "terbuka",
    strategi: "Merespons, lalu menginformasikan",
    tandaBenar: "Kepuasan & damai",
    tandaSalah: "Frustrasi & marah",
    deskripsi:
      "Multi-passionate — cepat, melompati langkah, menjalani banyak jalur sekaligus.",
  },
  Projector: {
    populasi: "~20%",
    aura: "fokus & menyerap",
    strategi: "Menunggu undangan",
    tandaBenar: "Sukses",
    tandaSalah: "Pahit (bitterness)",
    deskripsi:
      "Pemandu sistem & orang — melihat efisiensi yang tak dilihat orang lain; energi terbatas, kerja pintar bukan keras.",
  },
  Reflector: {
    populasi: "~1%",
    aura: "menyampel & memantulkan",
    strategi: "Menunggu satu siklus bulan (28 hari) untuk keputusan besar",
    tandaBenar: "Terkejut positif",
    tandaSalah: "Kecewa",
    deskripsi:
      "Cermin komunitas — kesehatan lingkungannya terbaca lewat dirinya.",
  },
};

export const HD_URUTAN: HdTipe[] = [
  "Generator",
  "Manifesting Generator",
  "Projector",
  "Manifestor",
  "Reflector",
];

export const HD_AUTHORITY = [
  "Emotional — tunggu gelombang emosi reda",
  "Sacral — respons gut instan",
  "Splenic — intuisi sekejap",
  "Ego / Heart",
  "Self-Projected",
  "Environmental / Mental",
  "Lunar",
];
