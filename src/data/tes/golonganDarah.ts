export type GolDarah = "A" | "B" | "O" | "AB";

export interface GolDarahInfo {
  stereotip: string[];
  kerja: string;
  cinta: string;
  cocok: string;
  negatif: string;
}

export const GOLDARAH_INFO: Record<GolDarah, GolDarahInfo> = {
  A: {
    stereotip: ["rapi & terorganisir", "perfeksionis", "sopan & sabar", "pemendam cemas"],
    kerja: "teliti, taat prosedur, tim player pendiam",
    cinta: "pemalu, serius, setia",
    cocok: "A & AB",
    negatif: "kaku, sulit rileks, overthinking",
  },
  B: {
    stereotip: ["kreatif bebas", "fokus pada minat sendiri", "optimis", "tidak suka aturan"],
    kerja: "spesialis passionate, benci micromanagement",
    cinta: "menggebu di awal, butuh kebebasan",
    cocok: "B & AB",
    negatif: "egois, moody, kurang peka aturan sosial",
  },
  O: {
    stereotip: ["percaya diri", "ambisius", "pemimpin natural", "easy going"],
    kerja: "berpikir gambaran besar, kompetitif, tahan banting",
    cinta: "ekspresif, posesif ringan",
    cocok: "O & AB",
    negatif: "arogan, kurang peka detail, keras kepala",
  },
  AB: {
    stereotip: ["rasional & unik", "dua sisi (A+B)", "tenang misterius", "adaptif"],
    kerja: "problem solver kreatif, suka kerja sendiri",
    cinta: "sulit ditebak, butuh ruang privat besar",
    cocok: "semua (netral)",
    negatif: "dingin, plin-plan, menjaga jarak",
  },
};
