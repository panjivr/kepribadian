/**
 * Big Five (OCEAN) — IPIP-50, public domain. Tier: scientific.
 * Skoring: skor_dimensi = sum(item_positif) + sum(6 - item_negatif), 10 item/dimensi,
 * range 10–50, persen = (raw - 10) / 40 * 100. (persona-db/systems/big-five.json)
 */
import type { BigFiveDim, BigFiveResult } from "./types";

export interface BigFiveItem {
  no: number;
  dim: BigFiveDim;
  key: 1 | -1;
  teks: string;
  bantuan?: string;
}

export const SKALA_LIKERT = [
  { nilai: 1, label: "Sangat Tidak Setuju" },
  { nilai: 2, label: "Tidak Setuju" },
  { nilai: 3, label: "Netral" },
  { nilai: 4, label: "Setuju" },
  { nilai: 5, label: "Sangat Setuju" },
] as const;

export const BIG_FIVE_ITEMS: BigFiveItem[] = [
  { no: 1, dim: "E", key: 1, teks: "Saya adalah pusat perhatian di pesta atau acara.", bantuan: "Contoh: di acara ramai, kamu yang mengajak ngobrol banyak orang & bikin suasana hidup, bukan yang menyisih di pojok." },
  { no: 2, dim: "A", key: -1, teks: "Saya kurang peduli dengan urusan orang lain.", bantuan: "Maksudnya: urusan/masalah orang lain terasa bukan urusanmu — kamu cenderung cuek terhadapnya." },
  { no: 3, dim: "C", key: 1, teks: "Saya selalu siap dan mempersiapkan segala sesuatu.", bantuan: "Analogi: seperti pramuka — sedia payung sebelum hujan, segala sesuatu sudah kamu siapkan lebih dulu." },
  { no: 4, dim: "N", key: 1, teks: "Saya mudah merasa stres atau tertekan.", bantuan: "Contoh: tekanan kecil pun (deadline, macet) cepat membuatmu tegang dibanding orang lain." },
  { no: 5, dim: "O", key: 1, teks: "Saya memiliki kosakata yang kaya.", bantuan: "Maksudnya: kamu punya banyak perbendaharaan kata & mudah menemukan kata yang pas saat bicara/menulis." },
  { no: 6, dim: "E", key: -1, teks: "Saya jarang bicara banyak.", bantuan: "Contoh: dalam obrolan, kamu lebih banyak menyimak daripada bicara panjang lebar." },
  { no: 7, dim: "A", key: 1, teks: "Saya tertarik pada orang lain dan kehidupan mereka.", bantuan: "Contoh: kamu penasaran & senang mendengar cerita kabar, kesibukan, atau perasaan orang lain." },
  { no: 8, dim: "C", key: -1, teks: "Saya sering meninggalkan barang-barang berserakan.", bantuan: "Contoh: baju, buku, atau perkakas sering tergeletak di mana-mana, bukan langsung dirapikan." },
  { no: 9, dim: "N", key: -1, teks: "Saya merasa santai hampir sepanjang waktu.", bantuan: "Maksudnya: kamu tipe yang jarang tegang — kebanyakan waktu terasa tenang & rileks." },
  { no: 10, dim: "O", key: -1, teks: "Saya kesulitan memahami ide-ide abstrak.", bantuan: "Maksudnya: konsep yang tak kasat mata (filsafat, teori) terasa membingungkan; kamu lebih nyaman dengan yang konkret." },
  { no: 11, dim: "E", key: 1, teks: "Saya merasa nyaman berada di sekitar banyak orang.", bantuan: "Analogi: keramaian mengisi energimu, bukan menguras — seperti baterai yang justru terisi di tengah orang banyak." },
  { no: 12, dim: "A", key: -1, teks: "Saya kadang menghina atau merendahkan orang.", bantuan: "Maksudnya: sesekali kata-katamu bisa menyindir atau meremehkan orang lain." },
  { no: 13, dim: "C", key: 1, teks: "Saya memperhatikan detail.", bantuan: "Contoh: kamu menyadari salah ketik kecil atau ada yang miring sedikit yang orang lain lewatkan." },
  { no: 14, dim: "N", key: 1, teks: "Saya sering mengkhawatirkan banyak hal.", bantuan: "Contoh: pikiranmu sering memutar 'bagaimana kalau...' tentang hal yang belum tentu terjadi." },
  { no: 15, dim: "O", key: 1, teks: "Saya memiliki imajinasi yang hidup.", bantuan: "Contoh: kamu mudah membayangkan cerita, gambar, atau kemungkinan di kepala dengan sangat jelas." },
  { no: 16, dim: "E", key: -1, teks: "Saya lebih suka berada di belakang layar.", bantuan: "Contoh: kamu lebih nyaman menyiapkan acara dari balik meja daripada tampil di panggung." },
  { no: 17, dim: "A", key: 1, teks: "Saya bersimpati dengan perasaan orang lain.", bantuan: "Contoh: melihat teman sedih, hatimu ikut tersentuh dan ingin menghibur." },
  { no: 18, dim: "C", key: -1, teks: "Saya sering membuat kekacauan pada hal-hal kecil.", bantuan: "Maksudnya: urusan sepele (menaruh kunci, mengatur berkas) kerap jadi berantakan di tanganmu." },
  { no: 19, dim: "N", key: -1, teks: "Saya jarang merasa sedih atau murung.", bantuan: "Maksudnya: suasana hatimu cenderung stabil & cerah — jarang tiba-tiba muram." },
  { no: 20, dim: "O", key: -1, teks: "Saya tidak tertarik pada ide-ide abstrak.", bantuan: "Maksudnya: obrolan teori atau 'apa makna hidup' kurang menarik bagimu; kamu lebih suka hal praktis." },
  { no: 21, dim: "E", key: 1, teks: "Saya yang biasanya memulai percakapan.", bantuan: "Contoh: di antrean atau lift, kamu yang lebih dulu menyapa, bukan menunggu disapa." },
  { no: 22, dim: "A", key: -1, teks: "Saya tidak terlalu tertarik dengan masalah orang lain.", bantuan: "Maksudnya: keluh kesah orang lain kurang menyita perhatianmu; kamu fokus ke urusan sendiri." },
  { no: 23, dim: "C", key: 1, teks: "Saya menyelesaikan tugas segera tanpa menunda.", bantuan: "Analogi: begitu tugas datang, langsung kamu kerjakan — bukan ditumpuk sampai mepet tenggat." },
  { no: 24, dim: "N", key: 1, teks: "Suasana hati saya mudah terganggu.", bantuan: "Contoh: hal kecil yang tak enak bisa cepat merusak mood-mu seharian." },
  { no: 25, dim: "O", key: 1, teks: "Saya punya ide-ide yang cemerlang.", bantuan: "Contoh: kamu sering tiba-tiba kepikiran gagasan atau solusi baru yang tak terpikir orang lain." },
  { no: 26, dim: "E", key: -1, teks: "Saya tidak banyak bicara dalam kelompok.", bantuan: "Contoh: dalam rapat atau grup, kamu lebih memilih mendengarkan dan bicara seperlunya." },
  { no: 27, dim: "A", key: 1, teks: "Saya memiliki hati yang lembut.", bantuan: "Maksudnya: kamu mudah tersentuh & berbelas kasih — tak tegaan melihat orang atau makhluk kesusahan." },
  { no: 28, dim: "C", key: -1, teks: "Saya sering lupa mengembalikan barang ke tempatnya.", bantuan: "Contoh: sudah pakai gunting/charger, lalu lupa taruh di tempat semula sehingga sering dicari-cari." },
  { no: 29, dim: "N", key: 1, teks: "Saya mudah merasa kesal atau terganggu.", bantuan: "Contoh: gangguan kecil (suara berisik, antre lama) cepat memancing rasa jengkelmu." },
  { no: 30, dim: "O", key: -1, teks: "Saya tidak punya imajinasi yang kuat.", bantuan: "Maksudnya: kamu sulit membayangkan hal yang belum ada; lebih nyaman dengan apa yang nyata di depan mata." },
  { no: 31, dim: "E", key: 1, teks: "Saya berbicara dengan banyak orang berbeda di acara sosial.", bantuan: "Contoh: di pesta, kamu berkeliling menyapa banyak orang, bukan menempel di satu teman saja." },
  { no: 32, dim: "A", key: -1, teks: "Saya sebenarnya tidak terlalu tertarik pada orang lain.", bantuan: "Maksudnya: secara umum kamu kurang penasaran pada kehidupan orang lain." },
  { no: 33, dim: "C", key: 1, teks: "Saya menyukai keteraturan.", bantuan: "Analogi: kamu senang saat semua tertata rapi & ada tempatnya — meja bersih bikin pikiran tenang." },
  { no: 34, dim: "N", key: 1, teks: "Suasana hati saya sering berubah-ubah.", bantuan: "Contoh: dalam sehari mood-mu bisa naik-turun beberapa kali tanpa sebab besar." },
  { no: 35, dim: "O", key: 1, teks: "Saya cepat memahami sesuatu.", bantuan: "Contoh: dijelaskan sekali, kamu langsung 'nyambung' dan paham inti persoalannya." },
  { no: 36, dim: "E", key: -1, teks: "Saya tidak suka menarik perhatian pada diri sendiri.", bantuan: "Maksudnya: kamu risih jadi sorotan; lebih nyaman membaur diam-diam." },
  { no: 37, dim: "A", key: 1, teks: "Saya meluangkan waktu untuk orang lain.", bantuan: "Contoh: kamu rela menunda kesibukan demi menemani atau membantu orang yang butuh." },
  { no: 38, dim: "C", key: -1, teks: "Saya sering lalai menjalankan kewajiban.", bantuan: "Maksudnya: tugas atau tanggung jawab kadang terlewat atau tak tuntas kamu kerjakan." },
  { no: 39, dim: "N", key: 1, teks: "Emosi saya mudah naik-turun.", bantuan: "Analogi: perasaanmu seperti ombak — cepat berubah dari senang ke kecewa dan sebaliknya." },
  { no: 40, dim: "O", key: 1, teks: "Saya menggunakan kata-kata yang tidak umum/canggih.", bantuan: "Contoh: kamu terbiasa memakai istilah atau kosakata yang jarang dipakai orang sehari-hari." },
  { no: 41, dim: "E", key: 1, teks: "Saya tidak keberatan menjadi pusat perhatian.", bantuan: "Contoh: disuruh maju bicara di depan orang banyak, kamu santai saja, bahkan menikmatinya." },
  { no: 42, dim: "A", key: 1, teks: "Saya bisa merasakan emosi orang lain.", bantuan: "Contoh: dari nada suara atau raut wajah, kamu tahu temanmu sedang tak enak hati meski ia diam." },
  { no: 43, dim: "C", key: 1, teks: "Saya mengikuti jadwal yang sudah dibuat.", bantuan: "Contoh: sudah bikin rencana harian, kamu menjalankannya dengan disiplin, bukan sekadar wacana." },
  { no: 44, dim: "N", key: 1, teks: "Saya mudah merasa jengkel.", bantuan: "Contoh: sedikit hal mengganggu, sumbu emosimu cepat tersulut." },
  { no: 45, dim: "O", key: 1, teks: "Saya menghabiskan waktu untuk merenungkan berbagai hal.", bantuan: "Contoh: kamu senang melamun memikirkan 'kenapa begini, bagaimana kalau begitu' soal hidup & dunia." },
  { no: 46, dim: "E", key: -1, teks: "Saya pendiam di antara orang asing.", bantuan: "Contoh: di lingkungan baru yang belum kenal siapa-siapa, kamu cenderung diam sampai merasa nyaman." },
  { no: 47, dim: "A", key: 1, teks: "Saya membuat orang lain merasa nyaman.", bantuan: "Contoh: orang mudah terbuka & betah di dekatmu karena kamu bikin suasana hangat & aman." },
  { no: 48, dim: "C", key: 1, teks: "Saya teliti dan cermat dalam pekerjaan.", bantuan: "Analogi: seperti pemeriksa mutu — kamu cek ulang hasil kerja agar tak ada yang keliru." },
  { no: 49, dim: "N", key: -1, teks: "Saya jarang merasa murung tanpa alasan.", bantuan: "Maksudnya: kamu jarang tiba-tiba sedih; kalau sedih pun biasanya ada sebab yang jelas." },
  { no: 50, dim: "O", key: 1, teks: "Saya penuh dengan ide-ide baru.", bantuan: "Contoh: kepalamu seperti tak pernah kehabisan gagasan — selalu ada hal baru yang ingin dicoba." },
];

export const DIMENSI_INFO: Record<
  BigFiveDim,
  {
    nama: string;
    singkat: string;
    deskripsi: string;
    facets: string[];
    tinggi: { trait: string[]; karier: string[]; risiko: string[] };
    rendah: { trait: string[]; karier: string[]; risiko: string[] };
  }
> = {
  O: {
    nama: "Openness",
    singkat: "Keterbukaan",
    deskripsi: "Imajinasi, rasa ingin tahu, apresiasi seni & ide baru.",
    facets: ["Imajinasi", "Minat Seni", "Emosionalitas", "Petualangan", "Intelektualitas", "Liberalisme Nilai"],
    tinggi: { trait: ["kreatif", "visioner", "suka ide abstrak", "terbuka pada perubahan"], karier: ["desainer", "peneliti", "entrepreneur", "penulis", "strategist"], risiko: ["mudah bosan", "kurang fokus eksekusi rutin"] },
    rendah: { trait: ["praktis", "konsisten", "menyukai rutinitas", "konvensional"], karier: ["operasional", "administrasi", "QA", "akuntansi"], risiko: ["resisten perubahan"] },
  },
  C: {
    nama: "Conscientiousness",
    singkat: "Kesungguhan",
    deskripsi: "Disiplin, keteraturan, orientasi pencapaian, kontrol diri.",
    facets: ["Efikasi Diri", "Keteraturan", "Rasa Tanggung Jawab", "Dorongan Berprestasi", "Disiplin Diri", "Kehati-hatian"],
    tinggi: { trait: ["terorganisir", "andal", "gigih", "perencana"], karier: ["manajer proyek", "auditor", "engineer", "COO"], risiko: ["perfeksionis", "kaku", "workaholic"] },
    rendah: { trait: ["spontan", "fleksibel", "santai"], karier: ["kerja kreatif fleksibel", "improvisasi tinggi"], risiko: ["prokrastinasi", "kurang teliti"] },
  },
  E: {
    nama: "Extraversion",
    singkat: "Ekstraversi",
    deskripsi: "Energi sosial, asertivitas, pencarian stimulasi.",
    facets: ["Keramahan", "Kesukaan Berkelompok", "Asertivitas", "Level Aktivitas", "Pencarian Sensasi", "Keceriaan"],
    tinggi: { trait: ["energik di keramaian", "persuasif", "ekspresif"], karier: ["sales", "PR", "event organizer", "pemimpin tim", "MC"], risiko: ["impulsif", "dominasi percakapan"] },
    rendah: { trait: ["reflektif", "mandiri", "fokus mendalam"], karier: ["programmer", "analis", "penulis", "riset"], risiko: ["terlihat dingin", "jaringan sosial sempit"] },
  },
  A: {
    nama: "Agreeableness",
    singkat: "Keramahan",
    deskripsi: "Empati, kerjasama, kepercayaan pada orang lain.",
    facets: ["Kepercayaan", "Moralitas/Kejujuran", "Altruisme", "Kooperatif", "Kerendahan Hati", "Simpati"],
    tinggi: { trait: ["empatik", "kooperatif", "suka menolong"], karier: ["HR", "konselor", "guru", "perawat", "customer success"], risiko: ["sulit menolak", "dieksploitasi", "menghindari konflik penting"] },
    rendah: { trait: ["kompetitif", "skeptis", "tegas", "blak-blakan"], karier: ["negosiator", "litigator", "trader", "kritikus"], risiko: ["konflik interpersonal", "terkesan kasar"] },
  },
  N: {
    nama: "Neuroticism",
    singkat: "Neurotisisme",
    deskripsi: "Kecenderungan mengalami emosi negatif: cemas, marah, sedih.",
    facets: ["Kecemasan", "Kemarahan", "Depresivitas", "Kesadaran-diri Sosial", "Impulsivitas", "Kerentanan Stres"],
    tinggi: { trait: ["sensitif", "waspada risiko", "emosional"], karier: ["QA", "risk management", "peran terstruktur dengan dukungan"], risiko: ["mudah stres", "overthinking", "burnout"] },
    rendah: { trait: ["tenang", "tahan tekanan", "stabil"], karier: ["crisis management", "bedah", "pilot", "leadership tekanan tinggi"], risiko: ["meremehkan risiko", "kurang peka sinyal bahaya"] },
  },
};

const BANDS = [
  { min: 0, max: 30, label: "Rendah" },
  { min: 31, max: 45, label: "Cenderung Rendah" },
  { min: 46, max: 55, label: "Sedang" },
  { min: 56, max: 70, label: "Cenderung Tinggi" },
  { min: 71, max: 100, label: "Tinggi" },
];

export function bandLabel(persen: number): string {
  const p = Math.round(persen);
  return BANDS.find((b) => p >= b.min && p <= b.max)!.label;
}

const KOMBINASI = [
  { syarat: (p: Record<BigFiveDim, number>) => p.O >= 56 && p.C >= 56, pola: "Openness tinggi + Conscientiousness tinggi", insight: "Inovator eksekutor — langka & bernilai; cocok founder/product lead." },
  { syarat: (p: Record<BigFiveDim, number>) => p.E >= 56 && p.A <= 45, pola: "Extraversion tinggi + Agreeableness rendah", insight: "Dominan & persuasif — kuat di negosiasi, waspadai gaya konfrontatif." },
  { syarat: (p: Record<BigFiveDim, number>) => p.C >= 56 && p.N >= 56, pola: "Conscientiousness tinggi + Neuroticism tinggi", insight: "Perfeksionis cemas — hasil bagus tapi rawan burnout; butuh sistem istirahat." },
  { syarat: (p: Record<BigFiveDim, number>) => p.O >= 56 && p.E <= 45, pola: "Openness tinggi + Extraversion rendah", insight: "Pemikir dalam — kreator solo, riset, penulisan, arsitektur sistem." },
  { syarat: (p: Record<BigFiveDim, number>) => p.A >= 56 && p.N <= 45, pola: "Agreeableness tinggi + Neuroticism rendah", insight: "Penstabil tim — mediator alami, culture keeper." },
];

/** jawaban: map nomor item (1-50) → nilai likert 1-5. Wajib lengkap 50 item. */
export function skorBigFive(jawaban: Record<number, number>): BigFiveResult {
  const raw: Record<BigFiveDim, number> = { O: 0, C: 0, E: 0, A: 0, N: 0 };
  for (const item of BIG_FIVE_ITEMS) {
    const nilai = jawaban[item.no];
    if (!nilai || nilai < 1 || nilai > 5) {
      throw new Error(`Jawaban item ${item.no} tidak valid`);
    }
    raw[item.dim] += item.key === 1 ? nilai : 6 - nilai;
  }
  const persen = {} as Record<BigFiveDim, number>;
  const band = {} as Record<BigFiveDim, string>;
  (Object.keys(raw) as BigFiveDim[]).forEach((dim) => {
    persen[dim] = Math.round(((raw[dim] - 10) / 40) * 1000) / 10;
    band[dim] = bandLabel(persen[dim]);
  });
  const kombinasi = KOMBINASI.filter((k) => k.syarat(persen)).map(
    ({ pola, insight }) => ({ pola, insight })
  );
  return { raw, persen, band, kombinasi, tanggal: new Date().toISOString() };
}
