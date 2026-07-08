/**
 * Verifikasi engine terhadap kasus yang diketahui kebenarannya.
 * Jalankan: npm run test:engine
 */
import {
  hitungKua,
  hitungNumerologi,
  hitungShio,
  hitungWeton,
  hitungZodiak,
  reduksi,
} from "../src/lib/birth";
import { BIG_FIVE_ITEMS, skorBigFive } from "../src/lib/bigfive";
import { MBTI_ITEMS, skorMbti, prediksiMbtiDariBigFive } from "../src/lib/mbti";
import { indikasiDisc, indikasiEnneagram, rekomendasiKarier, actionPlan } from "../src/lib/profil";

let lulus = 0;
let gagal = 0;

function uji(nama: string, dapat: unknown, harap: unknown) {
  const d = JSON.stringify(dapat);
  const h = JSON.stringify(harap);
  if (d === h) {
    lulus++;
    console.log(`  ✓ ${nama}`);
  } else {
    gagal++;
    console.error(`  ✗ ${nama}\n      dapat: ${d}\n      harap: ${h}`);
  }
}

console.log("— Weton (anchor 1900-01-01 = Senin Pahing) —");
{
  const w = hitungWeton("1900-01-01");
  uji("1900-01-01 = Senin Pahing", [w.hari, w.pasaran], ["Senin", "Pahing"]);
}
{
  const w = hitungWeton("1945-08-17");
  uji("17 Agustus 1945 = Jumat Legi", [w.hari, w.pasaran], ["Jumat", "Legi"]);
  uji("neptu Jumat Legi = 11 (Lakune Geni)", [w.neptu, w.laku], [11, "Lakune Geni"]);
}
{
  const w = hitungWeton("2000-01-01");
  uji("2000-01-01 = Sabtu (kalender)", w.hari, "Sabtu");
  uji("primbon rejeki & pangarasan terdefinisi", [!!w.rejeki, !!w.pangarasan], [true, true]);
}

console.log("— Numerologi (Pythagorean) —");
uji("reduksi 28 → 1", reduksi(28), 1);
uji("reduksi 29 → 11 (master)", reduksi(29), 11);
uji("reduksi 22 tetap 22 (master)", reduksi(22), 22);
{
  // Contoh persis dari persona-db/systems/numerology.json
  const n = hitungNumerologi("Contoh Nama", "1999-08-17", 2026);
  uji("life path 17-08-1999 = 8", n.lifePath, 8);
  uji("birthday 17 → 8", n.birthday, 8);
}
{
  // ABC: A=1,B=2,C=3 → destiny 6; vokal A=1 → soul urge 1; konsonan 2+3=5
  const n = hitungNumerologi("ABC", "2000-01-01", 2026);
  uji("destiny 'ABC' = 6", n.destiny, 6);
  uji("soul urge 'ABC' = 1", n.soulUrge, 1);
  uji("personality 'ABC' = 5", n.personality, 5);
}

console.log("— Shio (dengan tanggal Imlek asli) —");
{
  const s = hitungShio("1996-02-19"); // tepat hari Imlek 1996
  uji("1996-02-19 = Tikus Api", [s.nama, s.elemen], ["Tikus", "Api"]);
}
{
  const s = hitungShio("1996-02-18"); // sehari sebelum Imlek → masih 1995
  uji("1996-02-18 = Babi Kayu (geser Imlek)", [s.nama, s.elemen, s.bergeserKarenaImlek], ["Babi", "Kayu", true]);
}
{
  const s = hitungShio("2000-06-15");
  uji("2000 = Naga Logam Yang", [s.nama, s.elemen, s.yinYang], ["Naga", "Logam", "Yang"]);
}
{
  const s = hitungShio("2025-01-28"); // Imlek 2025 = 29 Jan → masih Naga
  uji("2025-01-28 masih Naga", s.nama, "Naga");
  const s2 = hitungShio("2025-01-29");
  uji("2025-01-29 = Ular", s2.nama, "Ular");
}

console.log("— Zodiak —");
uji("1 Januari = Capricorn", hitungZodiak("1999-01-01").nama, "Capricorn");
uji("21 Maret = Aries", hitungZodiak("2000-03-21").nama, "Aries");
uji("18 Februari = Aquarius", hitungZodiak("1990-02-18").nama, "Aquarius");
uji("19 Februari = Pisces", hitungZodiak("1990-02-19").nama, "Pisces");
uji("22 Desember = Capricorn", hitungZodiak("1990-12-22").nama, "Capricorn");
uji("21 November = Scorpio", hitungZodiak("1990-11-21").nama, "Scorpio");

console.log("— Kua —");
uji("pria 1990 → Kua 1", hitungKua("1990-06-15", "pria").angka, 1);
uji("wanita 1990 → Kua 8 (5→8)", hitungKua("1990-06-15", "wanita").angka, 8);
uji("pria 2000 → Kua 9", hitungKua("2000-06-15", "pria").angka, 9);
uji("wanita 2005 → Kua 2", hitungKua("2005-06-15", "wanita").angka, 2);
uji("pria lahir 1990-01-15 (sebelum Imlek, tahun lunar 1989) → Kua 2", hitungKua("1990-01-15", "pria").angka, 2);

console.log("— Big Five (IPIP-50) —");
uji("jumlah item = 50", BIG_FIVE_ITEMS.length, 50);
{
  const perDim: Record<string, number> = {};
  for (const it of BIG_FIVE_ITEMS) perDim[it.dim] = (perDim[it.dim] ?? 0) + 1;
  uji("10 item per dimensi", perDim, { E: 10, A: 10, C: 10, N: 10, O: 10 });
}
{
  const netral: Record<number, number> = {};
  BIG_FIVE_ITEMS.forEach((it) => (netral[it.no] = 3));
  const r = skorBigFive(netral);
  uji("semua netral → 50% semua dimensi", Object.values(r.persen), [50, 50, 50, 50, 50]);
  uji("band 50% = Sedang", r.band.O, "Sedang");
}
{
  const maks: Record<number, number> = {};
  BIG_FIVE_ITEMS.forEach((it) => (maks[it.no] = it.key === 1 ? 5 : 1));
  const r = skorBigFive(maks);
  uji("jawaban searah kunci → 100% semua", Object.values(r.persen), [100, 100, 100, 100, 100]);
  uji("raw maksimum = 50", Object.values(r.raw), [50, 50, 50, 50, 50]);
}
{
  const min: Record<number, number> = {};
  BIG_FIVE_ITEMS.forEach((it) => (min[it.no] = it.key === 1 ? 1 : 5));
  const r = skorBigFive(min);
  uji("jawaban berlawanan kunci → 0% semua", Object.values(r.persen), [0, 0, 0, 0, 0]);
}

console.log("— 16 Tipe —");
uji("jumlah item = 28", MBTI_ITEMS.length, 28);
{
  const perDik: Record<string, number> = {};
  for (const it of MBTI_ITEMS) perDik[it.dik] = (perDik[it.dik] ?? 0) + 1;
  uji("7 item per dikotomi (ganjil, tak bisa seri)", perDik, { "E/I": 7, "S/N": 7, "T/F": 7, "J/P": 7 });
}
{
  const semuaA: Record<number, "a" | "b"> = {};
  MBTI_ITEMS.forEach((it) => (semuaA[it.no] = "a"));
  const r = skorMbti(semuaA);
  uji("semua pilihan A → ESTJ 100%", [r.tipe, r.kekuatan.E], ["ESTJ", 100]);
  const semuaB: Record<number, "a" | "b"> = {};
  MBTI_ITEMS.forEach((it) => (semuaB[it.no] = "b"));
  uji("semua pilihan B → INFP", skorMbti(semuaB).tipe, "INFP");
}
{
  const p = { O: 80, C: 75, E: 30, A: 40, N: 45 } as const;
  const pred = prediksiMbtiDariBigFive(p);
  uji("prediksi O↑C↑E↓A↓ → INTJ", pred.tipe, "INTJ");
  uji("sumber prediksi ditandai", pred.sumber, "prediksi_big_five");
}

console.log("— Sintesis —");
{
  const p = { O: 80, C: 75, E: 30, A: 40, N: 45 };
  const disc = indikasiDisc(p);
  uji("DISC E↓C↑ → C teratas", disc[0].kode, "C");
  const ennea = indikasiEnneagram({ O: 85, C: 50, E: 20, A: 50, N: 40 });
  uji("Enneagram O↑E↓ (C netral) → tipe 5 teratas", ennea[0].tipe, 5);
  uji("Enneagram C↑N sedang → tipe 1 teratas", indikasiEnneagram(p)[0].tipe, 1);
  const bf = { raw: { O: 42, C: 40, E: 18, A: 26, N: 28 }, persen: p, band: { O: "Tinggi", C: "Tinggi", E: "Cenderung Rendah", A: "Cenderung Rendah", N: "Sedang" }, kombinasi: [], tanggal: "" };
  const karier = rekomendasiKarier(bf as never, null);
  uji("rekomendasi karier tidak kosong", karier.length > 0, true);
  uji("action plan menghasilkan ≤3 kebiasaan", actionPlan(bf as never).length <= 3, true);
}

console.log(`\n${lulus} lulus, ${gagal} gagal`);
if (gagal > 0) process.exit(1);
