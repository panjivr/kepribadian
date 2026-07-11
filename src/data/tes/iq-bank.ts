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
  // ============================ TINGKAT SULIT ============================
  // ------------------------------- NUMERIK -------------------------------
  { no: 141, domain: "numerik", teks: "Lanjutkan deret: 4, 7, 12, 19, 28, …", opsi: ["37", "39", "41", "36"], benar: 1, pembahasan: "Selisih bertambah ganjil: +3, +5, +7, +9, lalu +11. 28 + 11 = 39." },
  { no: 142, domain: "numerik", teks: "Lanjutkan deret: 2, 6, 12, 20, 30, …", opsi: ["40", "42", "44", "38"], benar: 1, pembahasan: "Selisih bertambah genap: +4, +6, +8, +10, lalu +12. 30 + 12 = 42." },
  { no: 143, domain: "numerik", teks: "Lanjutkan deret: 1, 2, 6, 24, 120, …", opsi: ["600", "720", "840", "480"], benar: 1, pembahasan: "Tiap suku dikali bilangan naik: ×2, ×3, ×4, ×5, lalu ×6. 120 × 6 = 720." },
  { no: 144, domain: "numerik", teks: "Lanjutkan deret: 5, 8, 14, 26, 50, …", opsi: ["74", "98", "100", "86"], benar: 1, pembahasan: "Selisih berlipat dua: +3, +6, +12, +24, lalu +48. 50 + 48 = 98." },
  { no: 145, domain: "numerik", teks: "Lanjutkan deret: 128, 64, 32, 16, …", opsi: ["8", "10", "12", "4"], benar: 0, pembahasan: "Tiap suku dibagi 2. 16 ÷ 2 = 8." },
  { no: 146, domain: "numerik", teks: "Lanjutkan deret: 2, 3, 5, 8, 13, 21, …", opsi: ["33", "34", "35", "32"], benar: 1, pembahasan: "Tiap suku = jumlah dua suku sebelumnya: 13 + 21 = 34." },
  { no: 147, domain: "numerik", teks: "Lanjutkan deret: 81, 27, 9, 3, …", opsi: ["1", "2", "0", "3"], benar: 0, pembahasan: "Tiap suku dibagi 3. 3 ÷ 3 = 1." },
  { no: 148, domain: "numerik", teks: "Lanjutkan deret pangkat tiga: 1, 8, 27, 64, 125, …", opsi: ["216", "196", "225", "150"], benar: 0, pembahasan: "Deret bilangan kubik: 1³, 2³, 3³, 4³, 5³, lalu 6³ = 216." },
  { no: 149, domain: "numerik", teks: "Sebuah tangki terisi 3/4 memuat 90 liter. Berapa kapasitas penuh tangki?", opsi: ["100 liter", "120 liter", "135 liter", "150 liter"], benar: 1, pembahasan: "Jika 3/4 = 90 liter, maka 1/4 = 30 liter, sehingga penuh = 120 liter." },
  { no: 150, domain: "numerik", teks: "Nilai rata-rata 5 anak adalah 80. Bila satu anak bernilai 60 dikeluarkan, berapa rata-rata 4 anak sisanya?", opsi: ["82", "84", "85", "86"], benar: 2, pembahasan: "Total = 5 × 80 = 400. Dikurangi 60 = 340. Rata-rata 4 anak = 340 ÷ 4 = 85." },
  { no: 151, domain: "numerik", teks: "Sebuah harga naik 20% lalu turun 20%. Dibanding harga awal, hasil akhirnya …", opsi: ["Naik 4%", "Turun 4%", "Tetap sama", "Turun 2%"], benar: 1, pembahasan: "1 × 1,2 × 0,8 = 0,96. Jadi turun 4% dari harga awal." },
  { no: 152, domain: "numerik", teks: "Menempuh 120 km dalam 2 jam, lalu 60 km dalam 3 jam. Berapa kecepatan rata-rata seluruh perjalanan?", opsi: ["30 km/jam", "36 km/jam", "40 km/jam", "45 km/jam"], benar: 1, pembahasan: "Total jarak 180 km ÷ total waktu 5 jam = 36 km/jam." },
  { no: 153, domain: "numerik", teks: "Jika a★b = a² − b, maka nilai 5★4 adalah …", opsi: ["21", "20", "16", "9"], benar: 0, pembahasan: "5★4 = 5² − 4 = 25 − 4 = 21." },
  { no: 154, domain: "numerik", teks: "Sekarang pukul 14.00. Pukul berapa 50 jam kemudian?", opsi: ["16.00", "12.00", "18.00", "14.00"], benar: 0, pembahasan: "50 jam = 2 hari (48 jam) + 2 jam. 14.00 + 2 jam = 16.00." },
  // -------------------------------- LOGIS --------------------------------
  { no: 155, domain: "logis", teks: "Semua dokter pandai. Sebagian orang pandai kaya. Kesimpulan yang pasti benar:", opsi: ["Semua dokter kaya", "Sebagian dokter kaya", "Tidak dapat disimpulkan sebagian dokter kaya", "Tidak ada dokter kaya"], benar: 2, pembahasan: "Orang pandai yang kaya belum tentu dokter, jadi kekayaan dokter tak bisa dipastikan." },
  { no: 156, domain: "logis", teks: "Semua A adalah B. Semua B adalah C. Maka:", opsi: ["Semua C adalah A", "Semua A adalah C", "Sebagian A bukan C", "Tidak ada A yang C"], benar: 1, pembahasan: "Silogisme berantai: A ⊆ B ⊆ C, sehingga semua A pasti C." },
  { no: 157, domain: "logis", teks: "Aturan: 'Jika hari Minggu maka libur.' Fakta: hari ini Minggu. Kesimpulan:", opsi: ["Hari ini libur", "Hari ini tidak libur", "Besok libur", "Tidak dapat disimpulkan"], benar: 0, pembahasan: "Modus ponens: sebab (Minggu) terpenuhi, maka akibat (libur) pasti terjadi." },
  { no: 158, domain: "logis", teks: "Aturan: 'Jika rajin maka lulus.' Fakta: Doni tidak rajin. Kesimpulan:", opsi: ["Doni tidak lulus", "Doni lulus", "Tidak dapat disimpulkan", "Doni bodoh"], benar: 2, pembahasan: "Menyangkal sebab tak menentukan akibat — Doni bisa saja lulus lewat cara lain." },
  { no: 159, domain: "logis", teks: "Dalam lomba, Ana finis sebelum Bima, Bima sebelum Cinta, dan Dedi setelah Cinta. Siapa juara pertama?", opsi: ["Ana", "Bima", "Cinta", "Dedi"], benar: 0, pembahasan: "Urutan finis: Ana, Bima, Cinta, Dedi. Juara pertama adalah Ana." },
  { no: 160, domain: "logis", teks: "Semua kucing adalah mamalia. Sebagian mamalia bisa berenang. Kesimpulan:", opsi: ["Semua kucing berenang", "Sebagian kucing berenang", "Tidak dapat disimpulkan", "Kucing bukan mamalia"], benar: 2, pembahasan: "Mamalia yang berenang belum tentu kucing, jadi tak bisa disimpulkan soal kucing." },
  { no: 161, domain: "logis", teks: "Pernyataan 'Jika sehat maka bahagia' setara maknanya dengan:", opsi: ["Jika bahagia maka sehat", "Jika tidak sehat maka tidak bahagia", "Jika tidak bahagia maka tidak sehat", "Jika sehat maka tidak bahagia"], benar: 2, pembahasan: "Kontraposisi: 'Jika P maka Q' setara 'Jika bukan Q maka bukan P'." },
  { no: 162, domain: "logis", teks: "Tidak ada P yang Q. Semua R adalah Q. Kesimpulan yang pasti benar:", opsi: ["Semua R adalah P", "Sebagian R adalah P", "Tidak ada R yang P", "Semua P adalah R"], benar: 2, pembahasan: "Karena semua R adalah Q, dan tak ada P yang Q, maka tak ada R yang P." },
  { no: 163, domain: "logis", teks: "A lebih berat dari B. C lebih ringan dari B. D lebih berat dari A. Siapa paling berat?", opsi: ["A", "B", "C", "D"], benar: 3, pembahasan: "Urutan berat: D > A > B > C. Maka D paling berat." },
  { no: 164, domain: "logis", teks: "Jika 'sebagian X adalah Y' benar, maka pasti benar pula:", opsi: ["Semua X adalah Y", "Sebagian Y adalah X", "Semua Y adalah X", "Tidak ada X yang Y"], benar: 1, pembahasan: "Pernyataan 'sebagian' dapat dibalik: jika sebagian X adalah Y, maka sebagian Y adalah X." },
  { no: 165, domain: "logis", teks: "'Tidak semua politikus jujur' bermakna sama dengan:", opsi: ["Semua politikus tidak jujur", "Ada politikus yang tidak jujur", "Semua politikus jujur", "Tidak ada politikus jujur"], benar: 1, pembahasan: "Ingkaran 'semua jujur' adalah 'ada minimal satu yang tidak jujur'." },
  { no: 166, domain: "logis", teks: "Jika kemarin adalah hari Rabu, maka lusa adalah hari …", opsi: ["Jumat", "Sabtu", "Minggu", "Kamis"], benar: 1, pembahasan: "Kemarin Rabu → hari ini Kamis → besok Jumat → lusa Sabtu." },
  { no: 167, domain: "logis", teks: "Jika pernyataan 'Semua siswa lulus' ternyata SALAH, apakah 'Semua siswa gagal' pasti benar?", opsi: ["Ya, pasti benar", "Tidak, belum tentu benar", "Tidak ada siswa", "Semua lulus"], benar: 1, pembahasan: "Ingkaran 'semua lulus' hanya berarti 'ada yang tidak lulus' — bukan berarti semua gagal." },
  { no: 168, domain: "logis", teks: "Jika 'ayah dari ayahku' adalah kakekku, maka 'anak dari anakku' adalah …", opsi: ["Cucu", "Keponakan", "Saudara", "Sepupu"], benar: 0, pembahasan: "Relasi menurun dua tingkat dari diriku: anak dari anakku adalah cucuku." },
  // ------------------------------- VERBAL --------------------------------
  { no: 169, domain: "verbal", teks: "Sinonim (persamaan kata) dari 'ABSURD' adalah …", opsi: ["Masuk akal", "Janggal", "Umum", "Nyata"], benar: 1, pembahasan: "Absurd berarti janggal, mustahil, atau tak masuk akal." },
  { no: 170, domain: "verbal", teks: "Antonim (lawan kata) dari 'GERSANG' adalah …", opsi: ["Kering", "Subur", "Panas", "Tandus"], benar: 1, pembahasan: "Lawan dari gersang (tandus) adalah subur." },
  { no: 171, domain: "verbal", teks: "DOKTER : PASIEN = GURU : …", opsi: ["Sekolah", "Murid", "Buku", "Papan"], benar: 1, pembahasan: "Dokter melayani pasien; guru mengajar murid." },
  { no: 172, domain: "verbal", teks: "GITAR : MUSISI = KUAS : …", opsi: ["Cat", "Pelukis", "Lukisan", "Kanvas"], benar: 1, pembahasan: "Gitar adalah alat kerja musisi; kuas adalah alat kerja pelukis." },
  { no: 173, domain: "verbal", teks: "Sinonim (persamaan kata) dari 'FIKTIF' adalah …", opsi: ["Nyata", "Khayalan", "Sejarah", "Fakta"], benar: 1, pembahasan: "Fiktif berarti bersifat khayalan, bukan kenyataan." },
  { no: 174, domain: "verbal", teks: "Antonim (lawan kata) dari 'DERMAWAN' adalah …", opsi: ["Kaya", "Pelit", "Baik", "Miskin"], benar: 1, pembahasan: "Lawan dari dermawan (suka memberi) adalah pelit atau kikir." },
  { no: 175, domain: "verbal", teks: "JARUM : MENJAHIT = GUNTING : …", opsi: ["Kertas", "Memotong", "Tajam", "Rambut"], benar: 1, pembahasan: "Fungsi jarum adalah menjahit; fungsi gunting adalah memotong." },
  { no: 176, domain: "verbal", teks: "Satu kata berikut tidak sekelompok dengan lainnya. Manakah?", opsi: ["Mawar", "Melati", "Anggrek", "Mangga"], benar: 3, pembahasan: "Mawar, melati, anggrek adalah bunga; mangga adalah buah." },
  { no: 177, domain: "verbal", teks: "TERANG : GELAP = … (pasangan berlawanan makna)", opsi: ["Panas : Hangat", "Riang : Sedih", "Besar : Luas", "Cepat : Kilat"], benar: 1, pembahasan: "Terang lawan gelap; pasangan berlawanan yang setara adalah riang lawan sedih." },
  { no: 178, domain: "verbal", teks: "Sinonim (persamaan kata) dari 'MAYA' adalah …", opsi: ["Nyata", "Semu", "Terang", "Jelas"], benar: 1, pembahasan: "Maya berarti semu atau tidak nyata." },
  { no: 179, domain: "verbal", teks: "PATUNG : PEMAHAT = LAGU : …", opsi: ["Panggung", "Pencipta Lagu", "Penonton", "Alat Musik"], benar: 1, pembahasan: "Patung dibuat oleh pemahat; lagu dibuat oleh pencipta lagu." },
  { no: 180, domain: "verbal", teks: "Antonim (lawan kata) dari 'SEMENTARA' adalah …", opsi: ["Sebentar", "Kekal", "Cepat", "Baru"], benar: 1, pembahasan: "Lawan dari sementara (tidak tetap) adalah kekal atau abadi." },
  { no: 181, domain: "verbal", teks: "Ungkapan 'buah tangan' berarti …", opsi: ["Hadiah pernikahan", "Oleh-oleh", "Hasil karya", "Anak kandung"], benar: 1, pembahasan: "'Buah tangan' adalah ungkapan untuk oleh-oleh." },
  { no: 182, domain: "verbal", teks: "PENA : TINTA = PENSIL : …", opsi: ["Kertas", "Grafit", "Karet", "Kayu"], benar: 1, pembahasan: "Pena menulis dengan tinta; pensil menulis dengan grafit." },
  // --------------------------------- POLA --------------------------------
  { no: 183, domain: "pola", teks: "Lanjutkan pola huruf: A, C, F, J, O, …", opsi: ["T", "U", "V", "S"], benar: 1, pembahasan: "Selang bertambah: +2, +3, +4, +5, lalu +6. Dari O (posisi 15) + 6 = U (posisi 21)." },
  { no: 184, domain: "pola", teks: "Lanjutkan pola huruf: C, F, I, L, …", opsi: ["N", "O", "P", "M"], benar: 1, pembahasan: "Melompati dua huruf (+3): C, F, I, L, lalu O." },
  { no: 185, domain: "pola", teks: "Lanjutkan pola huruf mundur: X, U, R, O, …", opsi: ["M", "L", "K", "N"], benar: 1, pembahasan: "Mundur tiga huruf (−3): X, U, R, O, lalu L." },
  { no: 186, domain: "pola", teks: "Jika KODE ditulis LPEF (tiap huruf +1), maka SANDI ditulis …", opsi: ["TBOEJ", "RZMCH", "TBPEJ", "TCOEJ"], benar: 0, pembahasan: "Geser tiap huruf +1: S→T, A→B, N→O, D→E, I→J = TBOEJ." },
  { no: 187, domain: "pola", teks: "Jika ABIS ditulis YZGQ (tiap huruf −2), maka TUAN ditulis …", opsi: ["RSYL", "VWCP", "RSYK", "RSYM"], benar: 0, pembahasan: "Geser tiap huruf −2 (memutar bila perlu): T→R, U→S, A→Y, N→L = RSYL." },
  { no: 188, domain: "pola", teks: "Pada matriks — baris: 3,4,12 / 2,5,10 / 6,3,? — berapa nilai '?'", opsi: ["9", "18", "12", "24"], benar: 1, pembahasan: "Kolom ketiga = kolom pertama × kolom kedua. 6 × 3 = 18." },
  { no: 189, domain: "pola", teks: "Pada matriks — baris: 6,2,4 / 9,3,6 / 12,4,? — berapa nilai '?'", opsi: ["6", "8", "10", "16"], benar: 1, pembahasan: "Kolom ketiga = kolom pertama − kolom kedua. 12 − 4 = 8." },
  { no: 190, domain: "pola", teks: "Lanjutkan pola tiap baris: 2,4,8 / 3,6,12 / 4,8,? ", opsi: ["14", "16", "12", "20"], benar: 1, pembahasan: "Tiap baris berlipat dua dari kiri: 4, 8, lalu 16." },
  { no: 191, domain: "pola", teks: "Lanjutkan pola simbol: ◆◆● ◆◆● ◆◆…", opsi: ["◆", "●", "■", "▲"], benar: 1, pembahasan: "Pola berulang tiga simbol: ◆, ◆, ●. Setelah dua ◆, berikutnya ●." },
  { no: 192, domain: "pola", teks: "Lanjutkan pola angka-huruf: 1A, 2C, 3E, 4G, …", opsi: ["5H", "5I", "5J", "6I"], benar: 1, pembahasan: "Angka +1 (jadi 5) dan huruf melompat satu (A, C, E, G, I). Maka 5I." },
  { no: 193, domain: "pola", teks: "Lanjutkan pola: A1, B2, D4, G7, …", opsi: ["K11", "J10", "K10", "L11"], benar: 0, pembahasan: "Huruf naik +1,+2,+3,+4 (A,B,D,G,K) dan angka naik +1,+2,+3,+4 (1,2,4,7,11). Maka K11." },
  { no: 194, domain: "pola", teks: "Lanjutkan pola: AZ, BY, CX, DW, …", opsi: ["EV", "EU", "FV", "EW"], benar: 0, pembahasan: "Huruf depan maju (A,B,C,D,E) dan huruf belakang mundur (Z,Y,X,W,V). Maka EV." },
  { no: 195, domain: "pola", teks: "Banyak lingkaran tiap suku: ○ , ○○○ , ○○○○○ , …. Berapa lingkaran suku berikutnya?", opsi: ["6 lingkaran", "7 lingkaran", "8 lingkaran", "5 lingkaran"], benar: 1, pembahasan: "Jumlah lingkaran bilangan ganjil: 1, 3, 5, lalu 7." },
  { no: 196, domain: "pola", teks: "Lanjutkan pola huruf: B, E, D, G, F, I, H, …", opsi: ["J", "K", "L", "I"], benar: 1, pembahasan: "Berselang +3 lalu −1: B→E(+3)→D(−1)→G(+3)→F(−1)→I(+3)→H(−1)→K(+3)." },
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
  perDomain = 12,
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
