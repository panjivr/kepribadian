/**
 * BaZi — Empat Pilar Takdir (persona-db/systems/bazi.json).
 * Tier cultural_spiritual — sajian refleksi, bukan sains.
 * Memakai lunar-javascript untuk akurasi solar-term (JieQi) & batas tahun Li Chun.
 */
import { Solar } from "lunar-javascript";

export type Elemen = "Kayu" | "Api" | "Tanah" | "Logam" | "Air";

interface StemInfo {
  nama: string;
  elemen: Elemen;
  yin: boolean;
  arketipe: string;
}

// 10 Heavenly Stems (batang langit) → nama pinyin + elemen + arketipe (persona-db).
const STEM: Record<string, StemInfo> = {
  "甲": { nama: "Jia", elemen: "Kayu", yin: false, arketipe: "Pohon besar — kokoh, berprinsip, pemimpin lurus" },
  "乙": { nama: "Yi", elemen: "Kayu", yin: true, arketipe: "Rumput/liana — fleksibel, diplomatis, survivor" },
  "丙": { nama: "Bing", elemen: "Api", yin: false, arketipe: "Matahari — hangat, murah hati, menerangi semua" },
  "丁": { nama: "Ding", elemen: "Api", yin: true, arketipe: "Lilin — fokus, detail, menerangi yang dekat" },
  "戊": { nama: "Wu", elemen: "Tanah", yin: false, arketipe: "Gunung — stabil, dapat dipercaya, keras kepala" },
  "己": { nama: "Ji", elemen: "Tanah", yin: true, arketipe: "Ladang — memelihara, produktif, sabar" },
  "庚": { nama: "Geng", elemen: "Logam", yin: false, arketipe: "Pedang — tegas, adil, tanpa kompromi" },
  "辛": { nama: "Xin", elemen: "Logam", yin: true, arketipe: "Perhiasan — halus, estetis, menjaga gengsi" },
  "壬": { nama: "Ren", elemen: "Air", yin: false, arketipe: "Samudra — visioner, cerdas, sulit ditebak" },
  "癸": { nama: "Gui", elemen: "Air", yin: true, arketipe: "Embun/hujan — intuitif, lembut, menyusup ke mana pun" },
};

// 12 Earthly Branches (cabang bumi) → elemen utama.
const BRANCH_ELEMEN: Record<string, Elemen> = {
  "子": "Air", "丑": "Tanah", "寅": "Kayu", "卯": "Kayu", "辰": "Tanah", "巳": "Api",
  "午": "Api", "未": "Tanah", "申": "Logam", "酉": "Logam", "戌": "Tanah", "亥": "Air",
};

export const ELEMEN_WARNA: Record<Elemen, string> = {
  Kayu: "#30d158",
  Api: "#ff453a",
  Tanah: "#ff9f0a",
  Logam: "#cbd5e1",
  Air: "#3b82f6",
};

export const ELEMEN_INDUSTRI: Record<Elemen, string> = {
  Kayu: "pendidikan, penerbitan, tekstil, agrikultur",
  Api: "energi, F&B, entertainment, teknologi",
  Tanah: "properti, konstruksi, asuransi, pertanian",
  Logam: "keuangan, mesin, otomotif, hukum",
  Air: "logistik, travel, komunikasi, perdagangan",
};

// Siklus menghidupi: Kayu→Api→Tanah→Logam→Air→Kayu.
const MENGHIDUPI: Record<Elemen, Elemen> = {
  Kayu: "Api",
  Api: "Tanah",
  Tanah: "Logam",
  Logam: "Air",
  Air: "Kayu",
};

export interface BaziResult {
  pilar: { label: string; stem: string; branch: string; elemen: Elemen }[];
  dayMaster: StemInfo;
  hitungElemen: Record<Elemen, number>;
  elemenKuat: Elemen;
  elemenLemah: Elemen;
  elemenPenyeimbang: Elemen;
  pakaiJam: boolean;
}

export function hitungBazi(iso: string, jamLahir?: string): BaziResult {
  const [y, m, d] = iso.split("-").map(Number);
  const pakaiJam = !!jamLahir;
  const [jam, menit] = pakaiJam
    ? jamLahir!.split(":").map(Number)
    : [12, 0];

  const solar = Solar.fromYmdHms(y, m, d, jam, menit, 0);
  const ec = solar.getLunar().getEightChar();

  const pilarDef: { label: string; stem: string; branch: string }[] = [
    { label: "Tahun", stem: ec.getYearGan(), branch: ec.getYearZhi() },
    { label: "Bulan", stem: ec.getMonthGan(), branch: ec.getMonthZhi() },
    { label: "Hari", stem: ec.getDayGan(), branch: ec.getDayZhi() },
  ];
  if (pakaiJam) {
    pilarDef.push({ label: "Jam", stem: ec.getTimeGan(), branch: ec.getTimeZhi() });
  }

  const hitung: Record<Elemen, number> = { Kayu: 0, Api: 0, Tanah: 0, Logam: 0, Air: 0 };
  const pilar = pilarDef.map((p) => {
    const elemenStem = STEM[p.stem].elemen;
    const elemenBranch = BRANCH_ELEMEN[p.branch];
    hitung[elemenStem]++;
    hitung[elemenBranch]++;
    return { label: p.label, stem: p.stem, branch: p.branch, elemen: elemenStem };
  });

  const elemenList = Object.keys(hitung) as Elemen[];
  const elemenKuat = elemenList.reduce((a, b) => (hitung[a] >= hitung[b] ? a : b));
  const elemenLemah = elemenList.reduce((a, b) => (hitung[a] <= hitung[b] ? a : b));

  return {
    pilar,
    dayMaster: STEM[ec.getDayGan()],
    hitungElemen: hitung,
    elemenKuat,
    elemenLemah,
    // penyeimbang: elemen yang menghidupi elemen terlemah
    elemenPenyeimbang: (Object.keys(MENGHIDUPI) as Elemen[]).find(
      (e) => MENGHIDUPI[e] === elemenLemah
    )!,
    pakaiJam,
  };
}
