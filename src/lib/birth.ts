/**
 * Engine "hasil instan" — semua sistem yang dihitung murni dari data kelahiran.
 * Sumber algoritma & interpretasi: persona-db/systems/*.json (tier cultural_spiritual —
 * WAJIB disajikan dengan label hiburan & refleksi budaya, bukan diagnosis).
 */
import cnyTable from "@/data/cny.json";
import type {
  Gender,
  KuaResult,
  NumerologyResult,
  ShioResult,
  WetonResult,
  ZodiacResult,
} from "./types";

/* ---------------------------------- util --------------------------------- */

export function parseBirthDate(iso: string): {
  y: number;
  m: number;
  d: number;
} {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m, d };
}

/* --------------------------------- zodiak -------------------------------- */
// Rentang tanggal sesuai persona-db/systems/zodiac-western.json

interface ZodiacDef extends ZodiacResult {
  mulai: [number, number]; // [bulan, tanggal]
  akhir: [number, number];
}

export const ZODIAC: ZodiacDef[] = [
  { nama: "Aries", tanggal: "21 Mar – 19 Apr", mulai: [3, 21], akhir: [4, 19], elemen: "Api", modalitas: "Cardinal", planet: "Mars", simbol: "Domba Jantan", trait: ["pemberani", "inisiator", "kompetitif", "tidak sabaran"], kekuatan: "memulai apa pun tanpa takut", kelemahan: "impulsif, cepat panas, cepat padam", cocok: ["Leo", "Sagitarius", "Gemini", "Aquarius"], karier: ["entrepreneur", "atlet", "sales", "militer"] },
  { nama: "Taurus", tanggal: "20 Apr – 20 Mei", mulai: [4, 20], akhir: [5, 20], elemen: "Tanah", modalitas: "Fixed", planet: "Venus", simbol: "Banteng", trait: ["setia", "sabar", "sensual", "keras kepala"], kekuatan: "konsistensi & daya tahan", kelemahan: "posesif, sulit berubah", cocok: ["Virgo", "Capricorn", "Cancer", "Pisces"], karier: ["keuangan", "kuliner", "seni", "properti"] },
  { nama: "Gemini", tanggal: "21 Mei – 20 Jun", mulai: [5, 21], akhir: [6, 20], elemen: "Udara", modalitas: "Mutable", planet: "Merkurius", simbol: "Kembar", trait: ["komunikatif", "cerdas", "serba ingin tahu", "plin-plan"], kekuatan: "adaptasi & networking", kelemahan: "tidak konsisten, gelisah", cocok: ["Libra", "Aquarius", "Aries", "Leo"], karier: ["media", "penulis", "marketing", "translator"] },
  { nama: "Cancer", tanggal: "21 Jun – 22 Jul", mulai: [6, 21], akhir: [7, 22], elemen: "Air", modalitas: "Cardinal", planet: "Bulan", simbol: "Kepiting", trait: ["penyayang", "protektif", "intuitif", "moody"], kekuatan: "kepedulian mendalam pada 'rumah'", kelemahan: "terlalu sensitif, menyimpan dendam", cocok: ["Scorpio", "Pisces", "Taurus", "Virgo"], karier: ["healthcare", "kuliner", "HR", "real estate"] },
  { nama: "Leo", tanggal: "23 Jul – 22 Agu", mulai: [7, 23], akhir: [8, 22], elemen: "Api", modalitas: "Fixed", planet: "Matahari", simbol: "Singa", trait: ["karismatik", "murah hati", "dramatis", "bangga"], kekuatan: "kepemimpinan yang menghangatkan", kelemahan: "haus pengakuan, arogan", cocok: ["Aries", "Sagitarius", "Gemini", "Libra"], karier: ["entertainer", "pemimpin", "brand ambassador", "creative director"] },
  { nama: "Virgo", tanggal: "23 Agu – 22 Sep", mulai: [8, 23], akhir: [9, 22], elemen: "Tanah", modalitas: "Mutable", planet: "Merkurius", simbol: "Perawan", trait: ["teliti", "analitis", "melayani", "kritis"], kekuatan: "penyempurnaan detail & sistem", kelemahan: "perfeksionis cemas, overkritik", cocok: ["Taurus", "Capricorn", "Cancer", "Scorpio"], karier: ["analis", "editor", "kesehatan", "QA"] },
  { nama: "Libra", tanggal: "23 Sep – 22 Okt", mulai: [9, 23], akhir: [10, 22], elemen: "Udara", modalitas: "Cardinal", planet: "Venus", simbol: "Timbangan", trait: ["diplomatis", "estetis", "adil", "ragu-ragu"], kekuatan: "harmoni & keindahan", kelemahan: "sulit memutuskan, menghindari konflik", cocok: ["Gemini", "Aquarius", "Leo", "Sagitarius"], karier: ["hukum", "desain", "diplomasi", "fashion"] },
  { nama: "Scorpio", tanggal: "23 Okt – 21 Nov", mulai: [10, 23], akhir: [11, 21], elemen: "Air", modalitas: "Fixed", planet: "Pluto/Mars", simbol: "Kalajengking", trait: ["intens", "misterius", "loyal", "pencemburu"], kekuatan: "transformasi & fokus laser", kelemahan: "pendendam, mengontrol", cocok: ["Cancer", "Pisces", "Virgo", "Capricorn"], karier: ["investigasi", "psikologi", "bedah", "riset"] },
  { nama: "Sagitarius", tanggal: "22 Nov – 21 Des", mulai: [11, 22], akhir: [12, 21], elemen: "Api", modalitas: "Mutable", planet: "Jupiter", simbol: "Pemanah", trait: ["optimis", "petualang", "filosofis", "ceplas-ceplos"], kekuatan: "visi luas & kejujuran", kelemahan: "tidak taktis, komitmen fobia", cocok: ["Aries", "Leo", "Libra", "Aquarius"], karier: ["travel", "pendidikan", "penerbit", "motivator"] },
  { nama: "Capricorn", tanggal: "22 Des – 19 Jan", mulai: [12, 22], akhir: [1, 19], elemen: "Tanah", modalitas: "Cardinal", planet: "Saturnus", simbol: "Kambing Laut", trait: ["ambisius", "disiplin", "bertanggung jawab", "kaku"], kekuatan: "daya tahan mendaki jangka panjang", kelemahan: "pesimis, workaholic", cocok: ["Taurus", "Virgo", "Scorpio", "Pisces"], karier: ["eksekutif", "pemerintahan", "keuangan", "arsitek"] },
  { nama: "Aquarius", tanggal: "20 Jan – 18 Feb", mulai: [1, 20], akhir: [2, 18], elemen: "Udara", modalitas: "Fixed", planet: "Uranus/Saturnus", simbol: "Pembawa Air", trait: ["visioner", "humanis", "eksentrik", "dingin"], kekuatan: "inovasi & pemikiran ke depan", kelemahan: "detached emosional, memberontak", cocok: ["Gemini", "Libra", "Aries", "Sagitarius"], karier: ["teknologi", "sains", "aktivisme", "futurist"] },
  { nama: "Pisces", tanggal: "19 Feb – 20 Mar", mulai: [2, 19], akhir: [3, 20], elemen: "Air", modalitas: "Mutable", planet: "Neptunus/Jupiter", simbol: "Ikan", trait: ["empatik", "artistik", "spiritual", "pelarian"], kekuatan: "imajinasi & welas asih tanpa batas", kelemahan: "tidak realistis, mudah terbawa", cocok: ["Cancer", "Scorpio", "Taurus", "Capricorn"], karier: ["seni", "musik", "penyembuhan", "film"] },
];

export function hitungZodiak(iso: string): ZodiacResult {
  const { m, d } = parseBirthDate(iso);
  const val = m * 100 + d;
  for (const z of ZODIAC) {
    const mulai = z.mulai[0] * 100 + z.mulai[1];
    const akhir = z.akhir[0] * 100 + z.akhir[1];
    if (mulai <= akhir) {
      if (val >= mulai && val <= akhir) return z;
    } else {
      // Capricorn melewati pergantian tahun
      if (val >= mulai || val <= akhir) return z;
    }
  }
  // tidak mungkin tercapai — rentang menutupi seluruh tahun
  return ZODIAC[0];
}

/* ---------------------------------- shio --------------------------------- */
// Algoritma: (tahun - 4) % 12; elemen: floor(((tahun-4)%10)/2); genap = Yang.
// Batas tahun memakai tanggal Imlek asli 1930–2030 (src/data/cny.json,
// digenerate dari kalender lunar Tiongkok) — lahir sebelum Imlek = shio tahun sebelumnya.

const SHIO_URUTAN = ["Tikus", "Kerbau", "Macan", "Kelinci", "Naga", "Ular", "Kuda", "Kambing", "Monyet", "Ayam", "Anjing", "Babi"] as const;
const SHIO_ELEMEN = ["Kayu", "Api", "Tanah", "Logam", "Air"] as const;

const ELEMEN_MAKNA: Record<string, string> = {
  Kayu: "tumbuh, ekspansif, idealis",
  Api: "bersemangat, ekspresif, memimpin",
  Tanah: "stabil, praktis, mengayomi",
  Logam: "tegas, disiplin, ambisius",
  Air: "fleksibel, intuitif, komunikatif",
};

const SHIO_DATA: Record<string, Omit<ShioResult, "elemen" | "elemenMakna" | "yinYang" | "tahunEfektif" | "bergeserKarenaImlek">> = {
  Tikus: { nama: "Tikus", trait: ["cerdik", "hemat", "adaptif", "oportunis"], kekuatan: "selalu menemukan celah & bertahan", kelemahan: "licik jika terdesak, pelit", cocok: ["Naga", "Monyet", "Kerbau"], kurangCocok: ["Kuda"], karier: ["bisnis", "keuangan", "penulis"] },
  Kerbau: { nama: "Kerbau", trait: ["pekerja keras", "sabar", "dapat diandalkan", "keras kepala"], kekuatan: "daya tahan luar biasa", kelemahan: "kaku, lambat berubah", cocok: ["Tikus", "Ular", "Ayam"], kurangCocok: ["Kambing"], karier: ["pertanian/agroindustri", "teknik", "manufaktur"] },
  Macan: { nama: "Macan", trait: ["berani", "karismatik", "kompetitif", "gegabah"], kekuatan: "keberanian mengambil tindakan besar", kelemahan: "emosional, sulit menerima perintah", cocok: ["Kuda", "Anjing", "Babi"], kurangCocok: ["Monyet"], karier: ["pemimpin", "militer", "olahraga", "aktivis"] },
  Kelinci: { nama: "Kelinci", trait: ["lembut", "diplomatis", "estetis", "menghindari konflik"], kekuatan: "kelembutan yang membuka pintu", kelemahan: "terlalu hati-hati, melarikan diri", cocok: ["Kambing", "Anjing", "Babi"], kurangCocok: ["Ayam"], karier: ["seni", "diplomasi", "fashion", "terapi"] },
  Naga: { nama: "Naga", trait: ["ambisius", "percaya diri", "energik", "arogan"], kekuatan: "aura besar & keberuntungan tradisional", kelemahan: "sombong, tidak sabaran", cocok: ["Tikus", "Monyet", "Ayam"], kurangCocok: ["Anjing"], karier: ["pemimpin visioner", "entertainer", "politik"] },
  Ular: { nama: "Ular", trait: ["bijak", "misterius", "intuitif", "posesif"], kekuatan: "membaca situasi & manusia dengan dalam", kelemahan: "pencemburu, tertutup", cocok: ["Kerbau", "Ayam"], kurangCocok: ["Babi"], karier: ["riset", "filsafat", "keuangan", "intelijen"] },
  Kuda: { nama: "Kuda", trait: ["bebas", "energik", "populer", "tidak sabaran"], kekuatan: "semangat gerak & kebebasan", kelemahan: "komitmen sulit, mudah bosan", cocok: ["Macan", "Kambing", "Anjing"], kurangCocok: ["Tikus"], karier: ["travel", "sales", "atlet", "komunikasi"] },
  Kambing: { nama: "Kambing", trait: ["artistik", "lembut hati", "penyayang", "pesimis"], kekuatan: "kreativitas & kepekaan estetika", kelemahan: "bergantung, mudah cemas", cocok: ["Kelinci", "Kuda", "Babi"], kurangCocok: ["Kerbau"], karier: ["seni", "desain", "perawatan", "kuliner"] },
  Monyet: { nama: "Monyet", trait: ["jenius akal", "humoris", "fleksibel", "licik"], kekuatan: "kecerdasan memecahkan apapun", kelemahan: "manipulatif, tidak serius", cocok: ["Tikus", "Naga"], kurangCocok: ["Macan"], karier: ["teknologi", "hiburan", "strategi", "trading"] },
  Ayam: { nama: "Ayam", trait: ["teliti", "percaya diri", "pekerja keras", "kritis"], kekuatan: "keteraturan & keberanian bersuara", kelemahan: "sombong kecil, cerewet", cocok: ["Kerbau", "Ular", "Naga"], kurangCocok: ["Kelinci"], karier: ["administrasi", "media", "fashion", "militer"] },
  Anjing: { nama: "Anjing", trait: ["setia", "jujur", "adil", "cemas"], kekuatan: "loyalitas & keadilan tanpa kompromi", kelemahan: "pesimis, terlalu waspada", cocok: ["Macan", "Kelinci", "Kuda"], kurangCocok: ["Naga"], karier: ["hukum", "keamanan", "NGO", "pendidikan"] },
  Babi: { nama: "Babi", trait: ["tulus", "murah hati", "menikmati hidup", "naif"], kekuatan: "ketulusan yang menarik rezeki & teman", kelemahan: "mudah ditipu, boros", cocok: ["Kambing", "Kelinci", "Macan"], kurangCocok: ["Ular"], karier: ["hospitality", "kuliner", "filantropi", "retail"] },
};

export function hitungShio(iso: string): ShioResult {
  const { y } = parseBirthDate(iso);
  let tahunEfektif = y;
  let bergeser = false;
  const cny = (cnyTable as Record<string, string>)[String(y)];
  if (cny && iso < cny) {
    tahunEfektif = y - 1;
    bergeser = true;
  }
  const idx = (((tahunEfektif - 4) % 12) + 12) % 12;
  const elIdx = Math.floor(((((tahunEfektif - 4) % 10) + 10) % 10) / 2);
  const nama = SHIO_URUTAN[idx];
  const elemen = SHIO_ELEMEN[elIdx];
  return {
    ...SHIO_DATA[nama],
    elemen,
    elemenMakna: ELEMEN_MAKNA[elemen],
    yinYang: tahunEfektif % 2 === 0 ? "Yang" : "Yin",
    tahunEfektif,
    bergeserKarenaImlek: bergeser,
  };
}

/* --------------------------------- weton ---------------------------------- */
// Anchor: 1 Januari 1900 = Senin Pahing (persona-db/systems/weton.json).
// Tervalidasi terhadap 17 Agustus 1945 = Jumat Legi.

const PASARAN = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"] as const;
const HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"] as const;

const NEPTU_HARI: Record<string, number> = { Minggu: 5, Senin: 4, Selasa: 3, Rabu: 7, Kamis: 8, Jumat: 6, Sabtu: 9 };
const NEPTU_PASARAN: Record<string, number> = { Legi: 5, Pahing: 9, Pon: 7, Wage: 4, Kliwon: 8 };

const WATAK_HARI: Record<string, string> = {
  Minggu: "Berjiwa pemimpin, senang jadi pusat, murah hati tapi gengsi tinggi.",
  Senin: "Perasa, lembut hati, mudah berubah suasana, penyayang keluarga.",
  Selasa: "Pemberani, mudah tersulut, jujur blak-blakan, pekerja tangguh.",
  Rabu: "Pendiam berbobot, pemikir, disukai banyak orang, penengah.",
  Kamis: "Karismatik, pandai bicara, ambisius, kadang keras kepala.",
  Jumat: "Bersih hati, dihormati, spiritual, suka menolong.",
  Sabtu: "Kuat kemauan, pekerja keras, mandiri, sulit diatur.",
};

const WATAK_PASARAN: Record<string, string> = {
  Legi: "Terbuka, ringan tangan, mudah bergaul, kadang boros.",
  Pahing: "Ambisius, ingin memiliki, tekun, cenderung menyimpan perasaan.",
  Pon: "Percaya diri, suka tampil, pandai bicara, gengsi tinggi.",
  Wage: "Kokoh pendirian, protektif, kaku, setia kawan.",
  Kliwon: "Cerdas, spiritual, pandai membawa diri, misterius.",
};

const LAKU: { range: [number, number]; label: string; makna: string }[] = [
  { range: [7, 9], label: "Pendito Kang Lelaku", makna: "Jiwa pengembara-spiritual, hidup dari perjalanan & pencarian." },
  { range: [10, 12], label: "Lakune Geni", makna: "Semangat api — energik, tempramen, penggerak." },
  { range: [13, 15], label: "Lakune Angin", makna: "Luwes, adaptif, mudah diterima di mana saja." },
  { range: [16, 18], label: "Lakune Bumi", makna: "Tenang, sabar, jadi tempat bersandar, rejeki stabil." },
  { range: [19, 21], label: "Lakune Banyu", makna: "Mengalir, mendinginkan, pandai menempatkan diri, membawa kesejukan." },
  { range: [22, 24], label: "Lakune Lintang/Srengenge", makna: "Bersinar, karismatik, pemimpin yang menerangi banyak orang." },
];

// Primbon (persona-db/systems/primbon.json)
const REJEKI: Record<number, { nama: string; makna: string }> = {
  1: { nama: "Sri", makna: "Rejeki lancar, cocok dagang & pangan." },
  2: { nama: "Lungguh", makna: "Rejeki dari jabatan/karier formal." },
  3: { nama: "Gedhong", makna: "Pandai menyimpan harta, cocok investasi." },
  4: { nama: "Lara", makna: "Rejeki naik-turun — butuh ketekunan & kehati-hatian; usaha konsisten membalik keadaan." },
  0: { nama: "Pati", makna: "Rejeki tumbuh lewat memberi — perbanyak sedekah & sisi spiritual." },
};

const PANGARASAN: Record<number, { nama: string; makna: string }> = {
  1: { nama: "Aras Tuding", makna: "Sering jadi perhatian & pembicaraan — mental kuat jadi modal utamamu." },
  2: { nama: "Aras Kembang", makna: "Disayang banyak orang, mudah menarik simpati." },
  0: { nama: "Aras Pepet", makna: "Rejeki & jodoh butuh usaha ekstra — namun daya tahanmu di atas rata-rata." },
};

export function hitungWeton(iso: string): WetonResult {
  const { y, m, d } = parseBirthDate(iso);
  const utc = Date.UTC(y, m - 1, d);
  const anchor = Date.UTC(1900, 0, 1); // Senin Pahing (index pasaran 1)
  const diff = Math.round((utc - anchor) / 86400000);
  const pasaran = PASARAN[(((1 + diff) % 5) + 5) % 5];
  const hari = HARI[new Date(utc).getUTCDay()];
  const neptuHari = NEPTU_HARI[hari];
  const neptuPasaran = NEPTU_PASARAN[pasaran];
  const neptu = neptuHari + neptuPasaran;
  const laku = LAKU.find((l) => neptu >= l.range[0] && neptu <= l.range[1])!;
  return {
    hari,
    pasaran,
    neptuHari,
    neptuPasaran,
    neptu,
    laku: laku.label,
    lakuMakna: laku.makna,
    watakHari: WATAK_HARI[hari],
    watakPasaran: WATAK_PASARAN[pasaran],
    rejeki: REJEKI[neptu % 5],
    pangarasan: PANGARASAN[neptu % 3],
  };
}

/* ------------------------------- numerologi ------------------------------- */
// Sistem Pythagorean (persona-db/systems/numerology.json).
// Master number 11, 22, 33 tidak direduksi.

const PYTHAGOREAN: Record<string, number> = {
  A: 1, J: 1, S: 1, B: 2, K: 2, T: 2, C: 3, L: 3, U: 3, D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5, F: 6, O: 6, X: 6, G: 7, P: 7, Y: 7, H: 8, Q: 8, Z: 8,
  I: 9, R: 9,
};

const VOKAL = new Set(["A", "E", "I", "O", "U"]);

export function reduksi(n: number): number {
  while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
    n = String(n)
      .split("")
      .reduce((s, c) => s + Number(c), 0);
  }
  return n;
}

function jumlahHuruf(nama: string, filter?: (huruf: string) => boolean): number {
  let total = 0;
  for (const ch of nama.toUpperCase()) {
    if (!(ch in PYTHAGOREAN)) continue;
    if (filter && !filter(ch)) continue;
    total += PYTHAGOREAN[ch];
  }
  return total;
}

export function hitungNumerologi(
  namaLengkap: string,
  iso: string,
  tahunBerjalan: number
): NumerologyResult {
  const { y, m, d } = parseBirthDate(iso);
  const lifePath = reduksi(reduksi(d) + reduksi(m) + reduksi(y));
  const destiny = reduksi(jumlahHuruf(namaLengkap));
  const soulUrge = reduksi(jumlahHuruf(namaLengkap, (h) => VOKAL.has(h)));
  const personality = reduksi(jumlahHuruf(namaLengkap, (h) => !VOKAL.has(h)));
  const birthday = reduksi(d);
  const maturity = reduksi(lifePath + destiny);
  const personalYear = reduksi(reduksi(d) + reduksi(m) + reduksi(tahunBerjalan));
  return { lifePath, destiny, soulUrge, personality, birthday, maturity, personalYear, tahunBerjalan };
}

export interface MaknaAngka {
  arketipe: string;
  kekuatan: string[];
  tantangan: string[];
  karier?: string[];
  cinta?: string;
  tahunPersonal?: string;
  misi?: string;
}

export const MAKNA_ANGKA: Record<number, MaknaAngka> = {
  1: { arketipe: "Pemimpin / Pelopor", kekuatan: ["mandiri", "inisiator", "ambisius", "original"], tantangan: ["egois", "keras kepala", "kesepian di puncak"], karier: ["founder", "direktur", "inovator"], cinta: "Butuh pasangan yang menghargai independensi.", tahunPersonal: "Awal siklus baru — mulai proyek besar." },
  2: { arketipe: "Diplomat / Pendamai", kekuatan: ["kooperatif", "intuitif pada orang", "detail", "penengah"], tantangan: ["terlalu sensitif", "ragu", "bergantung"], karier: ["mediator", "partner bisnis", "konselor", "admin"], cinta: "Romantis, setia, butuh kepastian emosional.", tahunPersonal: "Kesabaran, kemitraan, hal tumbuh perlahan." },
  3: { arketipe: "Komunikator / Kreator", kekuatan: ["ekspresif", "optimis", "kreatif", "menghibur"], tantangan: ["tersebar", "dramatis", "kurang disiplin"], karier: ["penulis", "entertainer", "marketer", "desainer"], cinta: "Menyenangkan tapi butuh belajar kedalaman.", tahunPersonal: "Ekspresi diri, sosial, kreativitas mekar." },
  4: { arketipe: "Pembangun", kekuatan: ["pekerja keras", "sistematis", "andal", "praktis"], tantangan: ["kaku", "terlalu serius", "takut risiko"], karier: ["engineer", "kontraktor", "akuntan", "operasional"], cinta: "Setia dan stabil; ekspresi kasih lewat tindakan.", tahunPersonal: "Kerja keras, fondasi, disiplin." },
  5: { arketipe: "Petualang / Agen Perubahan", kekuatan: ["adaptif", "persuasif", "berani", "serba bisa"], tantangan: ["gelisah", "impulsif", "komitmen sulit"], karier: ["sales", "travel", "jurnalis", "trader"], cinta: "Butuh kebebasan; monoton = maut hubungan.", tahunPersonal: "Perubahan besar, perjalanan, kebebasan." },
  6: { arketipe: "Pengasuh / Penjaga", kekuatan: ["bertanggung jawab", "penyayang", "estetis", "pelindung keluarga"], tantangan: ["ikut campur", "mengorbankan diri", "perfeksionis rumah tangga"], karier: ["guru", "desainer interior", "healthcare", "layanan komunitas"], cinta: "Sangat berorientasi keluarga; hati-hati mengontrol.", tahunPersonal: "Keluarga, tanggung jawab, harmoni rumah." },
  7: { arketipe: "Pencari / Mistikus", kekuatan: ["analitis", "intuitif dalam", "spiritual", "peneliti"], tantangan: ["menyendiri", "skeptis dingin", "sulit percaya"], karier: ["peneliti", "analis", "filsuf", "spesialis teknis"], cinta: "Butuh koneksi jiwa; benci basa-basi.", tahunPersonal: "Refleksi, belajar, penarikan diri produktif." },
  8: { arketipe: "Eksekutif / Kekuasaan Material", kekuatan: ["visioner bisnis", "tegas", "manajemen sumber daya", "tahan banting"], tantangan: ["workaholic", "materialistis", "otoriter"], karier: ["CEO", "investor", "bankir", "real estate"], cinta: "Loyal tapi sering menaruh kerja di atas segalanya.", tahunPersonal: "Panen finansial, karier, kekuasaan — atau pelajaran uang." },
  9: { arketipe: "Humanis / Penyelesai", kekuatan: ["welas asih luas", "bijaksana", "artistik", "dermawan"], tantangan: ["melankolis", "sulit melepaskan masa lalu", "terlalu memberi"], karier: ["NGO", "seniman", "penyembuh", "diplomat"], cinta: "Mencintai secara universal; belajar hadir untuk satu orang.", tahunPersonal: "Penutupan siklus, melepaskan, persiapan babak baru." },
  11: { arketipe: "Master Intuitif / Iluminator", kekuatan: ["visioner spiritual", "inspirator", "sensitivitas ekstrem sebagai antena"], tantangan: ["kecemasan tinggi", "tekanan hidup 'besar'", "gugup"], misi: "Menginspirasi lewat insight & cahaya ide." },
  22: { arketipe: "Master Builder", kekuatan: ["mewujudkan visi besar jadi nyata", "arsitek peradaban"], tantangan: ["beban ekspektasi raksasa", "bisa kolaps jadi 4 biasa"], misi: "Membangun sesuatu berskala besar yang melayani banyak orang." },
  33: { arketipe: "Master Teacher", kekuatan: ["pengabdian kasih tanpa pamrih", "penyembuh kolektif"], tantangan: ["martir", "mengabaikan diri total"], misi: "Mengangkat kesadaran lewat kasih & pelayanan." },
};

/* ----------------------------------- kua ---------------------------------- */
// Rumus persona-db/systems/feng-shui-kua.json. Tahun memakai tahun lunar
// (tahun efektif shio) agar konsisten dengan tradisi.

const KUA_DATA: Record<number, Omit<KuaResult, "angka" | "grup">> = {
  1: { elemen: "Air", arahBaik: ["Tenggara (sukses)", "Timur (kesehatan)", "Selatan (cinta)", "Utara (pertumbuhan)"], karakter: "fleksibel, diplomatis, mengalir" },
  2: { elemen: "Tanah", arahBaik: ["Timur Laut", "Barat", "Barat Laut", "Barat Daya"], karakter: "mengayomi, sabar, keibuan/kebapakan" },
  3: { elemen: "Kayu", arahBaik: ["Selatan", "Utara", "Tenggara", "Timur"], karakter: "pionir, cepat tumbuh, tegas" },
  4: { elemen: "Kayu", arahBaik: ["Utara", "Selatan", "Timur", "Tenggara"], karakter: "lembut, artistik, persuasif" },
  6: { elemen: "Logam", arahBaik: ["Barat", "Timur Laut", "Barat Daya", "Barat Laut"], karakter: "pemimpin, berwibawa, disiplin" },
  7: { elemen: "Logam", arahBaik: ["Barat Laut", "Barat Daya", "Timur Laut", "Barat"], karakter: "komunikatif, menghibur, sosial" },
  8: { elemen: "Tanah", arahBaik: ["Barat Daya", "Barat Laut", "Barat", "Timur Laut"], karakter: "stabil, tekun, penabung" },
  9: { elemen: "Api", arahBaik: ["Timur", "Tenggara", "Utara", "Selatan"], karakter: "bersemangat, karismatik, visioner" },
};

function reduksiSatuDigit(n: number): number {
  while (n > 9) {
    n = String(n)
      .split("")
      .reduce((s, c) => s + Number(c), 0);
  }
  return n;
}

export function hitungKua(iso: string, gender: Gender): KuaResult {
  const tahun = hitungShio(iso).tahunEfektif;
  const duaDigit = tahun % 100;
  const x = reduksiSatuDigit(Math.floor(duaDigit / 10) + (duaDigit % 10));
  let kua: number;
  if (gender === "pria") {
    kua = tahun >= 2000 ? 9 - x : 10 - x;
  } else {
    kua = tahun >= 2000 ? x + 6 : x + 5;
  }
  kua = reduksiSatuDigit(kua === 0 ? 9 : kua);
  if (kua === 5) kua = gender === "pria" ? 2 : 8;
  const grup: "Timur" | "Barat" = [1, 3, 4, 9].includes(kua) ? "Timur" : "Barat";
  return { angka: kua, grup, ...KUA_DATA[kua] };
}
