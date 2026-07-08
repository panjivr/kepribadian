/**
 * Skoring generik untuk semua kuesioner likert berbasis dimensi/tipe.
 * Item negatif (key -1) dibalik: nilai efektif = 6 - nilai.
 * persen = (raw - min) / (max - min) * 100, dengan min = jumlah_item×1, max = ×5.
 */

export interface ItemLikertDimensi {
  no: number;
  dim: string;
  key?: 1 | -1; // default 1 (positif)
  teks: string;
}

export interface SkorDimensi {
  raw: Record<string, number>;
  persen: Record<string, number>;
  urut: { dim: string; raw: number; persen: number }[]; // menurun
}

export function skorLikert(
  items: ItemLikertDimensi[],
  jawaban: Record<number, number>
): SkorDimensi {
  const raw: Record<string, number> = {};
  const jumlahItem: Record<string, number> = {};
  for (const item of items) {
    const nilai = jawaban[item.no];
    if (!nilai || nilai < 1 || nilai > 5) {
      throw new Error(`Jawaban item ${item.no} tidak valid`);
    }
    const efektif = item.key === -1 ? 6 - nilai : nilai;
    raw[item.dim] = (raw[item.dim] ?? 0) + efektif;
    jumlahItem[item.dim] = (jumlahItem[item.dim] ?? 0) + 1;
  }
  const persen: Record<string, number> = {};
  for (const dim of Object.keys(raw)) {
    const min = jumlahItem[dim];
    const max = jumlahItem[dim] * 5;
    persen[dim] = Math.round(((raw[dim] - min) / (max - min)) * 1000) / 10;
  }
  const urut = Object.keys(raw)
    .map((dim) => ({ dim, raw: raw[dim], persen: persen[dim] }))
    .sort((a, b) => b.raw - a.raw || a.dim.localeCompare(b.dim));
  return { raw, persen, urut };
}

/** Hitung mayoritas untuk kuesioner pilihan (mis. VAK A/B/C). */
export function skorPilihan(
  jawaban: Record<number, string>
): { nilai: string; jumlah: number; persen: number }[] {
  const hitung: Record<string, number> = {};
  const entri = Object.values(jawaban);
  for (const v of entri) hitung[v] = (hitung[v] ?? 0) + 1;
  return Object.entries(hitung)
    .map(([nilai, jumlah]) => ({
      nilai,
      jumlah,
      persen: Math.round((jumlah / entri.length) * 100),
    }))
    .sort((a, b) => b.jumlah - a.jumlah || a.nilai.localeCompare(b.nilai));
}
