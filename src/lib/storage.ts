/**
 * Semua data pengguna disimpan HANYA di perangkat (localStorage) —
 * tidak ada yang dikirim ke server. Privasi penuh.
 */
import type { BigFiveResult, MbtiResult, UserProfile } from "./types";

const KEY_PROFIL = "jiva:v1:profil";
const KEY_BIGFIVE = "jiva:v1:bigfive";
const KEY_MBTI = "jiva:v1:mbti";

function aman<T>(fn: () => T, fallback: T): T {
  try {
    return fn();
  } catch {
    return fallback;
  }
}

export function simpanProfil(p: UserProfile): void {
  aman(() => localStorage.setItem(KEY_PROFIL, JSON.stringify(p)), undefined);
}

export function bacaProfil(): UserProfile | null {
  return aman(() => {
    const raw = localStorage.getItem(KEY_PROFIL);
    if (!raw) return null;
    const p = JSON.parse(raw) as UserProfile;
    if (!p.namaLengkap || !p.tanggalLahir || !p.gender) return null;
    return p;
  }, null);
}

export function simpanBigFive(r: BigFiveResult): void {
  aman(() => localStorage.setItem(KEY_BIGFIVE, JSON.stringify(r)), undefined);
}

export function bacaBigFive(): BigFiveResult | null {
  return aman(() => {
    const raw = localStorage.getItem(KEY_BIGFIVE);
    return raw ? (JSON.parse(raw) as BigFiveResult) : null;
  }, null);
}

export function simpanMbti(r: MbtiResult): void {
  aman(() => localStorage.setItem(KEY_MBTI, JSON.stringify(r)), undefined);
}

export function bacaMbti(): MbtiResult | null {
  return aman(() => {
    const raw = localStorage.getItem(KEY_MBTI);
    return raw ? (JSON.parse(raw) as MbtiResult) : null;
  }, null);
}

/* ---------------------- hasil tes generik (sistem lain) --------------------- */
// ID sistem mengikuti persona-db/master-index.json.

export type SistemId =
  | "hexaco"
  | "disc"
  | "enneagram"
  | "temperament"
  | "via"
  | "mi"
  | "vak"
  | "mft"
  | "hbdi"
  | "true_colors"
  | "blood_type"
  | "stifin"
  | "human_design"
  | "iching"
  | "graphology"
  | "clifton"
  | "peta_bakat"
  | "eq"
  | "iq";

const KEY_TES = "jiva:v1:tes:";

export interface HasilTersimpan<T> {
  skor: T;
  tanggal: string; // ISO
}

export function simpanHasilSistem(id: SistemId, skor: unknown): void {
  aman(
    () =>
      localStorage.setItem(
        KEY_TES + id,
        JSON.stringify({ skor, tanggal: new Date().toISOString() })
      ),
    undefined
  );
}

export function bacaHasilSistem<T>(id: SistemId): HasilTersimpan<T> | null {
  return aman(() => {
    const raw = localStorage.getItem(KEY_TES + id);
    return raw ? (JSON.parse(raw) as HasilTersimpan<T>) : null;
  }, null);
}

export function hapusHasilSistem(id: SistemId): void {
  aman(() => localStorage.removeItem(KEY_TES + id), undefined);
}

export function hapusSemua(): void {
  aman(() => {
    localStorage.removeItem(KEY_PROFIL);
    localStorage.removeItem(KEY_BIGFIVE);
    localStorage.removeItem(KEY_MBTI);
    const kunci: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(KEY_TES)) kunci.push(k);
    }
    kunci.forEach((k) => localStorage.removeItem(k));
  }, undefined);
}
