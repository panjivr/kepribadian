import { IQ_ITEMS, type IqDomain, type IqItem } from "./iq";

/**
 * Bank soal IQ terpusat + mesin pengacakan.
 *
 * Masalah: bila soal selalu sama & urutan opsi tetap, orang yang mengulang tes
 * bisa menghafal kunci lalu mendapat skor sempurna palsu (mis. IQ 125+ terus).
 * Solusi: tiap percobaan MENGAMBIL SAMPEL ACAK dari bank besar, lalu MENGACAK
 * URUTAN OPSI tiap soal (indeks `benar` dipetakan ulang ke posisi barunya).
 *
 * Semua kunci di IQ_TAMBAHAN telah diverifikasi manual dua kali.
 */

const IQ_TAMBAHAN: IqItem[] = [
  // ------------------------------- NUMERIK -------------------------------
  { no: 101, domain: "numerik", teks: "Lanjutkan deret: 5, 10, 20, 40, …", opsi: ["60", "70", "80", "100"], benar: 2, pembahasan: "Tiap angka dikali 2. 40 × 2 = 80." },
  { no: 102, domain: "numerik", teks: "Lanjutkan deret: 1, 4, 9, 16, 25, …", opsi: ["30", "36", "49", "42"], benar: 1, pembahasan: "Deret bilangan kuadrat: 1², 2², 3², 4², 5², lalu 6² = 36." },
  { no: 103, domain: "numerik", teks: "Lanjutkan deret: 2, 5, 10, 17, 26, …", opsi: ["35", "37", "38", "40"], benar: 1, pembahasan: "Selisih bertambah ganjil: +3, +5, +7, +9, lalu +11. 26 + 11 = 37." },
  { no: 104, domain: "numerik", teks: "Lanjutkan deret: 100, 92, 85, 79, 74, …", opsi: ["68", "70", "71", "72"], benar: 1, pembahasan: "Selisih mengecil: −8, −7, −6, −5, lalu −4. 74 − 4 = 70." },
  { no: 105, domain: "numerik", teks: "Lanjutkan deret: 3, 12, 5, 14, 7, 16, …", opsi: ["9", "18", "11", "8"], benar: 0, pembahasan: "Dua deret berselang: posisi ganjil 3, 5, 7 (naik 2) → berikutnya 9; posisi genap 12, 14, 16." },
  { no: 106, domain: "numerik", teks: "Baju seharga Rp200.000 diberi diskon 25%. Berapa harga setelah diskon?", opsi: ["Rp150.000", "Rp160.000", "Rp175.000", "Rp140.000"], benar: 0, pembahasan: "Diskon 25% = Rp50.000. 200.000 − 50.000 = 150.000." },
  { no: 107, domain: "numerik", teks: "Umur ayah 3 kali umur anak. Jika anak berumur 12 tahun, berapa umur ayah?", opsi: ["30", "36", "40", "48"], benar: 1, pembahasan: "3 × 12 = 36 tahun." },
  { no: 108, domain: "numerik", teks: "3 pekerja mengecat pagar dalam 6 jam. Berapa jam bila 6 pekerja bekerja dengan kecepatan sama?", opsi: ["3 jam", "4 jam", "9 jam", "12 jam"], benar: 0, pembahasan: "Pekerja 2 kali lipat → waktu jadi separuh. 6 ÷ 2 = 3 jam." },
  { no: 109, domain: "numerik", teks: "Jika 2#3 = 10, 4#1 = 10, dan 5#2 = 14, maka 6#3 = …", opsi: ["15", "18", "20", "12"], benar: 1, pembahasan: "Aturannya a#b = 2 × (a + b). Maka 6#3 = 2 × 9 = 18." },
  { no: 110, domain: "numerik", teks: "Perbandingan uang Ani : Budi = 3 : 5. Jika total uang mereka Rp80.000, berapa uang Budi?", opsi: ["Rp30.000", "Rp48.000", "Rp50.000", "Rp55.000"], benar: 2, pembahasan: "Total bagian = 8. Uang Budi = 5/8 × 80.000 = 50.000." },
  // -------------------------------- LOGIS --------------------------------
  { no: 111, domain: "logis", teks: "Semua guru sabar. Sebagian guru adalah laki-laki. Kesimpulan yang pasti benar:", opsi: ["Semua laki-laki sabar", "Sebagian laki-laki sabar", "Semua yang sabar adalah guru", "Tidak ada laki-laki sabar"], benar: 1, pembahasan: "Guru laki-laki pasti sabar (karena semua guru sabar), maka sebagian laki-laki sabar." },
  { no: 112, domain: "logis", teks: "Aturan: 'Jika lulus ujian, maka dapat hadiah.' Fakta: Andi TIDAK dapat hadiah. Kesimpulan:", opsi: ["Andi lulus", "Andi tidak lulus", "Andi malas", "Tidak dapat disimpulkan"], benar: 1, pembahasan: "Modus tollens: bila akibat (hadiah) tidak terjadi, sebab (lulus) juga tidak terjadi." },
  { no: 113, domain: "logis", teks: "Aturan: 'Jika hujan, jalan basah.' Fakta: jalan basah. Kesimpulan:", opsi: ["Pasti hujan", "Tidak hujan", "Tidak dapat disimpulkan", "Jalan kering"], benar: 2, pembahasan: "Jalan bisa basah karena sebab lain (disiram, banjir). Menyimpulkan 'hujan' adalah sesat pikir." },
  { no: 114, domain: "logis", teks: "Rina lebih tua dari Sari. Sari lebih tua dari Tini. Doni lebih muda dari Tini. Siapa termuda?", opsi: ["Rina", "Sari", "Tini", "Doni"], benar: 3, pembahasan: "Urutan umur: Rina > Sari > Tini > Doni. Maka Doni termuda." },
  { no: 115, domain: "logis", teks: "Tidak ada ikan yang bisa terbang. Semua hiu adalah ikan. Kesimpulan:", opsi: ["Sebagian hiu terbang", "Tidak ada hiu yang bisa terbang", "Semua yang terbang adalah ikan", "Hiu bukan ikan"], benar: 1, pembahasan: "Hiu termasuk ikan, dan tak ada ikan yang terbang, jadi tak ada hiu yang bisa terbang." },
  { no: 116, domain: "logis", teks: "Semua siswa rajin mendapat nilai bagus. Budi mendapat nilai bagus. Apakah Budi pasti rajin?", opsi: ["Ya, pasti rajin", "Tidak, pasti malas", "Tidak dapat disimpulkan", "Budi tidak sekolah"], benar: 2, pembahasan: "Nilai bagus bisa didapat dengan cara lain. 'Rajin → nilai bagus' tidak berarti 'nilai bagus → rajin'." },
  { no: 117, domain: "logis", teks: "Empat orang antre. Dedi paling depan. Ani di depan Budi. Citra di belakang Budi. Siapa di urutan ketiga?", opsi: ["Ani", "Budi", "Citra", "Dedi"], benar: 1, pembahasan: "Urutan: Dedi, Ani, Budi, Citra. Urutan ketiga adalah Budi." },
  { no: 118, domain: "logis", teks: "Pernyataan 'Semua siswa hadir' ternyata TIDAK benar. Maka yang pasti benar:", opsi: ["Semua siswa tidak hadir", "Ada siswa yang tidak hadir", "Tidak ada siswa", "Sebagian besar hadir"], benar: 1, pembahasan: "Ingkaran dari 'semua hadir' adalah 'ada minimal satu yang tidak hadir'." },
  { no: 119, domain: "logis", teks: "Setiap kali Ani makan pedas, ia sakit perut. Hari ini Ani sakit perut. Kesimpulan yang tepat:", opsi: ["Ani pasti makan pedas", "Belum tentu ia makan pedas", "Ani tidak makan pedas", "Ani alergi"], benar: 1, pembahasan: "Sakit perut bisa banyak sebab. 'Pedas → sakit' tidak berarti 'sakit → pasti pedas'." },
  { no: 120, domain: "logis", teks: "Semua logam memuai saat dipanaskan. Besi adalah logam. Jika besi dipanaskan, maka:", opsi: ["Besi menyusut", "Besi memuai", "Besi meleleh", "Besi tidak berubah"], benar: 1, pembahasan: "Silogisme langsung: besi (logam) dipanaskan → memuai." },
  // ------------------------------- VERBAL --------------------------------
  { no: 121, domain: "verbal", teks: "MOBIL : BENGKEL = MANUSIA : …", opsi: ["Dokter", "Rumah Sakit", "Obat", "Sakit"], benar: 1, pembahasan: "Tempat memperbaiki mobil adalah bengkel; tempat memperbaiki (mengobati) manusia adalah rumah sakit." },
  { no: 122, domain: "verbal", teks: "KAPTEN : KAPAL = PILOT : …", opsi: ["Bandara", "Pesawat", "Langit", "Penumpang"], benar: 1, pembahasan: "Kapten mengemudikan kapal; pilot mengemudikan pesawat." },
  { no: 123, domain: "verbal", teks: "HAUS : MINUM = LAPAR : …", opsi: ["Nasi", "Makan", "Kenyang", "Perut"], benar: 1, pembahasan: "Solusi rasa haus adalah minum; solusi rasa lapar adalah makan." },
  { no: 124, domain: "verbal", teks: "PADI : BERAS = TEBU : …", opsi: ["Manis", "Gula", "Ladang", "Air"], benar: 1, pembahasan: "Padi diolah menjadi beras; tebu diolah menjadi gula (bahan mentah → hasil)." },
  { no: 125, domain: "verbal", teks: "Sinonim (persamaan kata) dari 'PANDAI' adalah …", opsi: ["Rajin", "Cerdas", "Kaya", "Sopan"], benar: 1, pembahasan: "Pandai bermakna sama dengan cerdas." },
  { no: 126, domain: "verbal", teks: "Antonim (lawan kata) dari 'TINGGI' adalah …", opsi: ["Besar", "Rendah", "Panjang", "Jauh"], benar: 1, pembahasan: "Lawan dari tinggi adalah rendah." },
  { no: 127, domain: "verbal", teks: "Manakah benda yang tidak sekelompok dengan lainnya?", opsi: ["Meja", "Kursi", "Lemari", "Sepatu"], benar: 3, pembahasan: "Meja, kursi, lemari adalah perabot rumah; sepatu adalah alas kaki." },
  { no: 128, domain: "verbal", teks: "Satu nama berikut beda kategori dari yang lain. Yang mana?", opsi: ["Jakarta", "Surabaya", "Indonesia", "Bandung"], benar: 2, pembahasan: "Jakarta, Surabaya, Bandung adalah kota; Indonesia adalah negara." },
  { no: 129, domain: "verbal", teks: "PISAU : MEMOTONG = PENA : …", opsi: ["Kertas", "Menulis", "Tinta", "Tangan"], benar: 1, pembahasan: "Fungsi pisau adalah memotong; fungsi pena adalah menulis." },
  { no: 130, domain: "verbal", teks: "RODA : MOBIL = … (relasi bagian terhadap keseluruhan)", opsi: ["Sopir : Mobil", "Halaman : Buku", "Buku : Halaman", "Kertas : Pohon"], benar: 1, pembahasan: "Roda adalah bagian dari mobil; halaman adalah bagian dari buku." },
  // --------------------------------- POLA --------------------------------
  { no: 131, domain: "pola", teks: "Lanjutkan pola huruf: B, D, F, H, …", opsi: ["I", "J", "K", "L"], benar: 1, pembahasan: "Melompati satu huruf: B(+2)D(+2)F(+2)H(+2)J." },
  { no: 132, domain: "pola", teks: "Lanjutkan pola huruf mundur: Y, W, U, S, …", opsi: ["R", "Q", "P", "T"], benar: 1, pembahasan: "Mundur dua huruf: Y(−2)W(−2)U(−2)S(−2)Q." },
  { no: 133, domain: "pola", teks: "Lanjutkan pola: A, Z, B, Y, C, X, …", opsi: ["D", "W", "E", "V"], benar: 0, pembahasan: "Dua deret berselang: dari depan A, B, C (berikutnya D); dari belakang Z, Y, X." },
  { no: 134, domain: "pola", teks: "Jika MAKAN ditulis NBLBO (tiap huruf digeser +1), maka MINUM ditulis …", opsi: ["NJOVN", "LHMTL", "NKOVM", "NJPVN"], benar: 0, pembahasan: "Geser tiap huruf +1: M→N, I→J, N→O, U→V, M→N = NJOVN." },
  { no: 135, domain: "pola", teks: "Jika BATU ditulis AZST (tiap huruf digeser −1), maka KAYU ditulis …", opsi: ["JZXT", "LBZV", "JAXT", "IZXT"], benar: 0, pembahasan: "Geser tiap huruf −1: K→J, A→Z (memutar ke belakang), Y→X, U→T = JZXT." },
  { no: 136, domain: "pola", teks: "Lanjutkan pola angka-huruf: 2B, 4D, 6F, 8H, …", opsi: ["9I", "10J", "10I", "12J"], benar: 1, pembahasan: "Angka +2 (jadi 10) dan huruf melompat satu (B, D, F, H, J). Maka 10J." },
  { no: 137, domain: "pola", teks: "Pada matriks — baris: 1,2,3 / 2,4,6 / 3,6,? — berapa nilai '?'", opsi: ["8", "9", "12", "7"], benar: 1, pembahasan: "Tiap baris adalah kelipatan angka pertamanya. Baris ketiga kelipatan 3: 3, 6, 9." },
  { no: 138, domain: "pola", teks: "Pada matriks — baris: 5,3,8 / 6,2,8 / 7,4,? — berapa nilai '?'", opsi: ["10", "11", "12", "28"], benar: 1, pembahasan: "Kolom ketiga = kolom pertama + kolom kedua. 7 + 4 = 11." },
  { no: 139, domain: "pola", teks: "Lanjutkan pola: AA, BB, CC, DD, …", opsi: ["DE", "EE", "EF", "FF"], benar: 1, pembahasan: "Tiap huruf berurutan digandakan: AA, BB, CC, DD, lalu EE." },
  { no: 140, domain: "pola", teks: "Perhatikan banyak segitiga: (0), △, △△, △△△, …. Berapa segitiga pada suku berikutnya?", opsi: ["3 segitiga", "4 segitiga", "5 segitiga", "2 segitiga"], benar: 1, pembahasan: "Jumlah segitiga bertambah satu tiap suku: 0, 1, 2, 3, lalu 4." },
];

export const SEMUA_IQ_ITEMS: IqItem[] = [...IQ_ITEMS, ...IQ_TAMBAHAN];

export function jumlahBankPerDomain(): Record<IqDomain, number> {
  const c = { logis: 0, numerik: 0, verbal: 0, pola: 0 } as Record<IqDomain, number>;
  for (const it of SEMUA_IQ_ITEMS) c[it.domain]++;
  return c;
}

/** Item hasil pengacakan: opsi sudah diacak & `benar` menunjuk indeks baru. */
export interface IqItemAcak extends IqItem {
  petaOpsi: number[]; // petaOpsi[iBaru] = iLama (audit)
}

function acak<T>(arr: T[], rnd: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function acakOpsi(item: IqItem, rnd: () => number): IqItemAcak {
  const idxAcak = acak(item.opsi.map((_, i) => i), rnd);
  return {
    ...item,
    opsi: idxAcak.map((i) => item.opsi[i]),
    benar: idxAcak.indexOf(item.benar),
    petaOpsi: idxAcak,
  };
}

/**
 * Susun satu set soal acak: `perDomain` soal untuk tiap domain, opsi teracak,
 * diselang-seling antar domain. Default RNG Math.random → beda tiap percobaan.
 */
export function susunSoalAcak(
  perDomain = 10,
  rnd: () => number = Math.random
): IqItemAcak[] {
  const domains: IqDomain[] = ["numerik", "logis", "verbal", "pola"];
  const terpilih = domains.map((d) => {
    const pool = SEMUA_IQ_ITEMS.filter((it) => it.domain === d);
    return acak(pool, rnd).slice(0, Math.min(perDomain, pool.length));
  });
  const hasil: IqItem[] = [];
  const maks = Math.max(...terpilih.map((a) => a.length));
  for (let i = 0; i < maks; i++) {
    for (const bucket of terpilih) if (bucket[i]) hasil.push(bucket[i]);
  }
  return hasil.map((it, i) => acakOpsi({ ...it, no: i + 1 }, rnd));
}
