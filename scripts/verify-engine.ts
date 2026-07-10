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
import { indikasiDisc, indikasiEnneagram, rekomendasiKarier, actionPlan, eysenckDariBigFive } from "../src/lib/profil";
import { skorLikert, skorPilihan } from "../src/lib/skoring";
import { hitungBazi } from "../src/lib/bazi";
import { HEXACO_ITEMS } from "../src/data/tes/hexaco";
import { BAKAT_ITEMS, BAKAT_TEMA } from "../src/data/tes/peta-bakat";
import { DISC_ITEMS } from "../src/data/tes/disc";
import { ENNEA_ITEMS, hitungWing } from "../src/data/tes/enneagram";
import { TEMPERAMEN_ITEMS } from "../src/data/tes/temperamen";
import { VIA_ITEMS, VIA_KEKUATAN } from "../src/data/tes/via";
import { MI_ITEMS } from "../src/data/tes/kecerdasan";
import { MORAL_ITEMS } from "../src/data/tes/moral";
import { HBDI_ITEMS } from "../src/data/tes/hbdi";
import { WARNA_ITEMS } from "../src/data/tes/warna";
import { VAK_ITEMS } from "../src/data/tes/gayaBelajar";
import { hexDariGaris, HEXAGRAM, type Garis } from "../src/data/tes/iching";
import { SEMUA_IQ_ITEMS, susunSoalAcak, jumlahBankPerDomain } from "../src/data/tes/iq-bank";
import { RIASEC_ITEMS, kodeHolland } from "../src/data/tes/riasec";
import { ATTACHMENT_ITEMS, klasifikasiGaya } from "../src/data/tes/attachment";
import { LOVE_ITEMS } from "../src/data/tes/love-language";
import { RUMPUN_JURUSAN, rumpunTerbaik, skorRumpun, provinsiKampus, PROVINSI_KURASI, linkKampusLengkap } from "../src/data/jurusan";

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

console.log("— Skoring generik (likert) —");
{
  // helper isi semua item dengan satu nilai
  const isi = (items: { no: number }[], v: number) =>
    Object.fromEntries(items.map((it) => [it.no, v]));
  const r = skorLikert(HEXACO_ITEMS, isi(HEXACO_ITEMS, 3));
  uji("HEXACO semua netral → 50% semua dimensi", [...new Set(Object.values(r.persen))], [50]);
  // reverse key benar-benar dibalik: item positif max, negatif min → tetap 100
  const maks = Object.fromEntries(
    HEXACO_ITEMS.map((it) => [it.no, it.key === -1 ? 1 : 5])
  );
  const rm = skorLikert(HEXACO_ITEMS, maks);
  uji("HEXACO searah kunci → 100% semua", [...new Set(Object.values(rm.persen))], [100]);
}

console.log("— Jumlah item tiap tes —");
uji("HEXACO 24 item / 6 dim", [HEXACO_ITEMS.length, new Set(HEXACO_ITEMS.map((i) => i.dim)).size], [24, 6]);
uji("DISC 24 item / 4 tipe", [DISC_ITEMS.length, new Set(DISC_ITEMS.map((i) => i.dim)).size], [24, 4]);
uji("Enneagram 36 item / 9 tipe", [ENNEA_ITEMS.length, new Set(ENNEA_ITEMS.map((i) => i.dim)).size], [36, 9]);
uji("Temperamen 16 item / 4 tipe", [TEMPERAMEN_ITEMS.length, new Set(TEMPERAMEN_ITEMS.map((i) => i.dim)).size], [16, 4]);
uji("VIA 48 item / 24 kekuatan", [VIA_ITEMS.length, new Set(VIA_ITEMS.map((i) => i.dim)).size], [48, 24]);
uji("VIA 24 kekuatan terdefinisi", VIA_KEKUATAN.length, 24);
uji("MI 24 item / 8 kecerdasan", [MI_ITEMS.length, new Set(MI_ITEMS.map((i) => i.dim)).size], [24, 8]);
uji("MFT 18 item / 6 fondasi", [MORAL_ITEMS.length, new Set(MORAL_ITEMS.map((i) => i.dim)).size], [18, 6]);
uji("HBDI 16 item / 4 kuadran", [HBDI_ITEMS.length, new Set(HBDI_ITEMS.map((i) => i.dim)).size], [16, 4]);
uji("Warna 12 item / 4 warna", [WARNA_ITEMS.length, new Set(WARNA_ITEMS.map((i) => i.dim)).size], [12, 4]);
uji("VAK 15 item", VAK_ITEMS.length, 15);
uji("Peta Bakat 48 item / 24 tema", [BAKAT_ITEMS.length, new Set(BAKAT_ITEMS.map((i) => i.dim)).size], [48, 24]);
uji("Peta Bakat: setiap item punya analogi (bantuan)", BAKAT_ITEMS.every((i) => i.bantuan.length > 10), true);
uji("Peta Bakat: 24 tema, 6 per domain", [BAKAT_TEMA.length, ...(["eksekusi", "pengaruh", "relasi", "strategis"] as const).map((d) => BAKAT_TEMA.filter((t) => t.domain === d).length)], [24, 6, 6, 6, 6]);
{
  const semua5: Record<number, number> = {};
  BAKAT_ITEMS.forEach((it) => (semua5[it.no] = 5));
  const r = skorLikert(BAKAT_ITEMS, semua5);
  uji("Peta Bakat semua-5 → 100% & 24 tema terurut", [r.urut[0].persen, r.urut.length], [100, 24]);
}

console.log("— Enneagram wing —");
{
  // raw tipe 8 dominan, tetangga 7 & 9; beri 7 lebih tinggi → wing 7
  const raw: Record<string, number> = { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 15, "8": 20, "9": 10 };
  uji("Tipe 8, tetangga 7>9 → wing 7", hitungWing(8, raw), 7);
  const raw2 = { ...raw, "1": 12, "9": 0 };
  uji("Tipe 1, wrap ke 9 vs 2 → wing 2", hitungWing(1, { ...raw2, "2": 8, "9": 3 }), 2);
}

console.log("— VAK skorPilihan —");
{
  const jawaban: Record<number, string> = {};
  VAK_ITEMS.forEach((it, i) => (jawaban[it.no] = i < 9 ? "V" : "A"));
  const r = skorPilihan(jawaban);
  uji("mayoritas V (9 dari 15)", [r[0].nilai, r[0].jumlah], ["V", 9]);
  uji("persen dijumlah = 100", r.reduce((s, x) => s + x.persen, 0), 100);
}

console.log("— Eysenck derived —");
{
  const e = eysenckDariBigFive({ O: 50, C: 30, E: 80, A: 20, N: 75 });
  uji("E↑N↑ → kuadran Koleris", e.kuadran.startsWith("Koleris"), true);
  uji("P dari A↓C↓ tinggi", e.P >= 70, true);
}

console.log("— BaZi (lunar-javascript) —");
{
  const b = hitungBazi("1990-06-15", "14:30");
  uji("Day Master 1990-06-15 14:30 = Xin (Logam)", [b.dayMaster.nama, b.dayMaster.elemen], ["Xin", "Logam"]);
  uji("dengan jam → 4 pilar", b.pilar.length, 4);
  const total = Object.values(b.hitungElemen).reduce((s, n) => s + n, 0);
  uji("8 karakter terhitung (4 pilar × 2)", total, 8);
  const b2 = hitungBazi("2000-01-28");
  uji("tanpa jam → 3 pilar, pakaiJam false", [b2.pilar.length, b2.pakaiJam], [3, false]);
}

console.log("— I Ching King Wen —");
{
  const yin = (): Garis => ({ yang: false, berubah: false });
  const yang = (): Garis => ({ yang: true, berubah: false });
  uji("6 garis yang → Hexagram 1 (Qian)", hexDariGaris([yang(), yang(), yang(), yang(), yang(), yang()], false).no, 1);
  uji("6 garis yin → Hexagram 2 (Kun)", hexDariGaris([yin(), yin(), yin(), yin(), yin(), yin()], false).no, 2);
  uji("64 hexagram terdefinisi & unik", new Set(HEXAGRAM.map((h) => h.no)).size, 64);
}

console.log("— Bank IQ & pengacakan —");
{
  // Setiap kunci jawaban valid & tiap opsi = 4.
  const kunciValid = SEMUA_IQ_ITEMS.every(
    (it) => it.benar >= 0 && it.benar < it.opsi.length && it.opsi.length === 4
  );
  uji("semua kunci IQ valid & 4 opsi", kunciValid, true);

  // Nomor unik (tak ada tabrakan no antar-bank).
  const noSet = new Set(SEMUA_IQ_ITEMS.map((it) => it.no));
  uji("nomor soal IQ unik", noSet.size, SEMUA_IQ_ITEMS.length);

  // Teks unik (tak ada duplikat soal).
  const teksSet = new Set(SEMUA_IQ_ITEMS.map((it) => it.teks));
  uji("teks soal IQ unik (tak ada duplikat)", teksSet.size, SEMUA_IQ_ITEMS.length);

  // Tiap domain minimal 10 agar 10 soal/domain bisa diambil.
  const per = jumlahBankPerDomain();
  uji("tiap domain ≥ 10 soal", [per.numerik >= 10, per.logis >= 10, per.verbal >= 10, per.pola >= 10], [true, true, true, true]);

  // Pengacakan mempertahankan jawaban benar: seed deterministik, cek tiap soal.
  let mulberrySeed = 12345;
  const rnd = () => {
    mulberrySeed |= 0;
    mulberrySeed = (mulberrySeed + 0x6d2b79f5) | 0;
    let t = Math.imul(mulberrySeed ^ (mulberrySeed >>> 15), 1 | mulberrySeed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const asli = new Map(SEMUA_IQ_ITEMS.map((it) => [it.teks, it.opsi[it.benar]]));
  const set = susunSoalAcak(10, rnd);
  const jawabanTetapBenar = set.every((it) => it.opsi[it.benar] === asli.get(it.teks));
  uji("acak opsi tetap menjaga jawaban benar", jawabanTetapBenar, true);
  const permutasiValid = set.every(
    (it) => JSON.stringify([...it.petaOpsi].sort()) === JSON.stringify([0, 1, 2, 3])
  );
  uji("petaOpsi selalu permutasi [0,1,2,3]", permutasiValid, true);
  uji("set acak = 40 soal (10/domain)", set.length, 40);
  uji("nomor set acak berurutan 1..40", [set[0].no, set[set.length - 1].no], [1, 40]);
}

console.log("— RIASEC & pemetaan jurusan —");
{
  uji("RIASEC 36 item / 6 tipe", [RIASEC_ITEMS.length, new Set(RIASEC_ITEMS.map((i) => i.dim)).size], [36, 6]);
  uji("RIASEC 6 item per tipe", (["R", "I", "A", "S", "E", "C"] as const).map((d) => RIASEC_ITEMS.filter((i) => i.dim === d).length), [6, 6, 6, 6, 6, 6]);
  uji("setiap butir RIASEC punya analogi", RIASEC_ITEMS.every((i) => i.bantuan.length > 10), true);
  // kode Holland dari urutan skor
  const urut = [{ dim: "S" }, { dim: "I" }, { dim: "A" }, { dim: "E" }, { dim: "R" }, { dim: "C" }];
  uji("kodeHolland ambil 3 teratas", kodeHolland(urut), "SIA");
  // jurusan
  uji("18 rumpun jurusan", RUMPUN_JURUSAN.length, 18);
  uji("id rumpun unik", new Set(RUMPUN_JURUSAN.map((r) => r.id)).size, RUMPUN_JURUSAN.length);
  uji("tiap rumpun punya kampus & prospek", RUMPUN_JURUSAN.every((r) => r.kampus.length >= 3 && r.prospek.length >= 3 && r.matkulInti.length >= 3), true);
  // pencocokan: kode "IRC" harus mengangkat rumpun TI (kode IRC)
  const ti = RUMPUN_JURUSAN.find((r) => r.id === "ti")!;
  uji("skorRumpun IRC vs TI(IRC) = 3+2+1", skorRumpun("IRC", ti), 6);
  const cocokIRC = rumpunTerbaik("IRC", 3).map((r) => r.id);
  uji("rumpunTerbaik IRC memuat 'ti'", cocokIRC.includes("ti"), true);
  const cocokSIA = rumpunTerbaik("SIA", 3).map((r) => r.id);
  uji("rumpunTerbaik SIA memuat psikologi", cocokSIA.includes("psikologi"), true);
  // provinsi
  uji("provinsi Surabaya = Jawa Timur", provinsiKampus({ nama: "x", kota: "Surabaya", jenis: "PTN" }), "Jawa Timur");
  uji("provinsi Malang = Jawa Timur", provinsiKampus({ nama: "x", kota: "Malang", jenis: "PTN" }), "Jawa Timur");
  uji("PROVINSI_KURASI memuat Jawa Timur", PROVINSI_KURASI.includes("Jawa Timur"), true);
  uji("tiap kampus punya provinsi terpetakan (bukan 'Lainnya')", RUMPUN_JURUSAN.every((r) => r.kampus.every((k) => provinsiKampus(k) !== "Lainnya")), true);
  uji("link kampus lengkap valid (google)", linkKampusLengkap("Teknik", "Jawa Timur").startsWith("https://www.google.com/search?q="), true);
}

console.log("— Kelekatan & Bahasa Kasih —");
{
  uji("Attachment 16 item / 2 dimensi", [ATTACHMENT_ITEMS.length, new Set(ATTACHMENT_ITEMS.map((i) => i.dim)).size], [16, 2]);
  uji("Attachment 8 per dimensi", (["cemas", "hindar"] as const).map((d) => ATTACHMENT_ITEMS.filter((i) => i.dim === d).length), [8, 8]);
  uji("setiap butir attachment ada analogi", ATTACHMENT_ITEMS.every((i) => i.bantuan.length > 10), true);
  uji("klasifikasi cemas↓hindar↓ → aman", klasifikasiGaya(30, 30), "aman");
  uji("klasifikasi cemas↑hindar↓ → cemas", klasifikasiGaya(70, 30), "cemas");
  uji("klasifikasi cemas↓hindar↑ → menghindar", klasifikasiGaya(30, 70), "menghindar");
  uji("klasifikasi cemas↑hindar↑ → cemas-menghindar", klasifikasiGaya(70, 70), "cemas_menghindar");
  uji("Love Language 20 item / 5 bahasa", [LOVE_ITEMS.length, new Set(LOVE_ITEMS.map((i) => i.dim)).size], [20, 5]);
  uji("Love Language 4 per bahasa", (["kata", "waktu", "hadiah", "layan", "sentuh"] as const).map((d) => LOVE_ITEMS.filter((i) => i.dim === d).length), [4, 4, 4, 4, 4]);
  uji("setiap butir love language ada analogi", LOVE_ITEMS.every((i) => i.bantuan.length > 10), true);
}

console.log(`\n${lulus} lulus, ${gagal} gagal`);
if (gagal > 0) process.exit(1);
