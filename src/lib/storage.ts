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

export function hapusSemua(): void {
  aman(() => {
    localStorage.removeItem(KEY_PROFIL);
    localStorage.removeItem(KEY_BIGFIVE);
    localStorage.removeItem(KEY_MBTI);
  }, undefined);
}
