/**
 * Perpustakaan Wawasan — teori ilmiah, bias kognitif, & prinsip hidup lintas
 * bidang (keputusan, motivasi, sosial, uang, makna, pikiran, relasi). Tiap
 * entri dilengkapi cerita & analogi agar mudah dipahami. Konten edukatif.
 */
import { LOGIKA } from "@/data/wawasan/logika";
import { SAINS } from "@/data/wawasan/sains";
import { EKONOMI } from "@/data/wawasan/ekonomi";
import { FILSAFAT } from "@/data/wawasan/filsafat";

export type KategoriWawasan =
  | "Bias & Sesat Pikir"
  | "Pengambilan Keputusan"
  | "Logika & Argumen"
  | "Motivasi & Kebiasaan"
  | "Produktivitas & Waktu"
  | "Sosial & Media"
  | "Komunikasi & Relasi"
  | "Uang & Kelas Sosial"
  | "Makna & Kebahagiaan"
  | "Filsafat & Etika"
  | "Belajar & Pikiran"
  | "Sains & Alam"
  | "Tubuh & Kesehatan"
  | "Sejarah & Peradaban"
  | "Teknologi & Masa Depan";

export interface Wawasan {
  id: string;
  judul: string;
  kategori: KategoriWawasan;
  ikon: string;
  ringkas: string;
  cerita: string;
  analogi: string;
  penerapan: string[];
  sumber?: string;
}

export const WAWASAN_KATEGORI: KategoriWawasan[] = [
  "Bias & Sesat Pikir",
  "Pengambilan Keputusan",
  "Logika & Argumen",
  "Motivasi & Kebiasaan",
  "Produktivitas & Waktu",
  "Sosial & Media",
  "Komunikasi & Relasi",
  "Uang & Kelas Sosial",
  "Makna & Kebahagiaan",
  "Filsafat & Etika",
  "Belajar & Pikiran",
  "Sains & Alam",
  "Tubuh & Kesehatan",
  "Sejarah & Peradaban",
  "Teknologi & Masa Depan",
];

const INTI: Wawasan[] = [
  // ---------------------------- Bias & Sesat Pikir ---------------------------
  {
    id: "dunning-kruger",
    judul: "Efek Dunning-Kruger",
    kategori: "Bias & Sesat Pikir",
    ikon: "📈",
    ringkas: "Yang paling sedikit tahu justru paling percaya diri — karena tak cukup tahu untuk sadar bahwa dirinya tak tahu.",
    cerita:
      "Pada 1999, psikolog David Dunning & Justin Kruger menemukan bahwa orang dengan kemampuan rendah pada suatu bidang cenderung menilai diri jauh di atas kenyataan. Sebabnya ironis: keterampilan yang sama yang dibutuhkan untuk mahir, juga dibutuhkan untuk menilai kemahiran. Karena belum punya keterampilan itu, mereka buta terhadap kekurangannya. Sebaliknya, para ahli sering meremehkan diri karena menyangka hal yang mudah bagi mereka mudah bagi semua orang.",
    analogi:
      "Seperti orang yang baru bisa main gitar tiga kunci lalu merasa siap manggung, sementara gitaris hebat malah gugup karena tahu betapa luasnya yang belum ia kuasai. Makin terang lampu pengetahuanmu, makin luas kegelapan yang kaulihat di sekitarnya.",
    penerapan: [
      "Saat merasa 'ini gampang', tanya: apa yang mungkin belum kuketahui?",
      "Cari umpan balik dari orang yang lebih ahli, bukan dari rasa percaya diri sendiri.",
      "Hormati rasa ragu sang ahli — sering itu tanda kompetensi, bukan kelemahan.",
    ],
    sumber: "Kruger & Dunning (1999)",
  },
  {
    id: "barnum-effect",
    judul: "Efek Barnum (Forer)",
    kategori: "Bias & Sesat Pikir",
    ikon: "🔮",
    ringkas: "Deskripsi yang sangat umum terasa sangat personal — kenapa ramalan & horoskop terasa 'akurat banget'.",
    cerita:
      "Pada 1948 psikolog Bertram Forer memberi muridnya 'analisis kepribadian personal' dan meminta menilai ketepatannya; rata-rata 4,3 dari 5. Padahal semua mendapat teks yang sama persis — dikutip dari buku horoskop. Kalimat seperti 'kamu punya potensi yang belum tergali' atau 'kadang ekstrovert, kadang menyendiri' terasa cocok untuk hampir semua orang. Otak kita mengisi kekosongan dan merasa itu ditulis khusus untuk kita.",
    analogi:
      "Seperti baju 'all size' yang dipakai siapa pun terasa pas — bukan karena dijahit untukmu, tapi karena sengaja dibuat longgar untuk semua. Makin umum kalimatnya, makin 'kena' rasanya.",
    penerapan: [
      "Saat sebuah deskripsi terasa 'kena banget', tanya: apakah ini juga cocok untuk kebanyakan orang?",
      "Nikmati tes kepribadian & budaya sebagai cermin refleksi, bukan ramalan pasti.",
      "Cari klaim yang spesifik & bisa salah — itu tanda informasi yang benar-benar bermakna.",
    ],
    sumber: "Bertram Forer (1948)",
  },
  {
    id: "sunk-cost",
    judul: "Jebakan Biaya Hangus (Sunk Cost)",
    kategori: "Bias & Sesat Pikir",
    ikon: "🕳️",
    ringkas: "Kita bertahan pada hal yang merugikan hanya karena sudah terlanjur berkorban banyak.",
    cerita:
      "Manusia benci merasa 'sia-sia', sehingga sering melanjutkan sesuatu semata karena sudah menanam waktu, uang, atau tenaga — walau ke depan jelas merugikan. Nama gaulnya 'sudah kepalang basah'. Padahal biaya yang sudah keluar tak bisa kembali apa pun keputusanmu; yang rasional hanyalah menimbang manfaat & biaya ke DEPAN.",
    analogi:
      "Seperti tetap menonton film membosankan sampai habis 'karena tiket sudah dibeli' — tiketmu tetap hilang entah kamu bertahan atau pergi; satu-satunya yang bisa kauselamatkan adalah dua jam ke depan.",
    penerapan: [
      "Tanya: 'Kalau baru mulai hari ini tanpa riwayat apa pun, apakah aku akan memilih ini?'",
      "Pisahkan keputusan dari ego — berhenti bukan berarti gagal, tapi berhenti membayar kerugian.",
      "Berlaku untuk hubungan, pekerjaan, jurusan, & investasi yang jelas-jelas tak lagi sehat.",
    ],
    sumber: "Arkes & Blumer (1985)",
  },
  {
    id: "confirmation-bias",
    judul: "Bias Konfirmasi",
    kategori: "Bias & Sesat Pikir",
    ikon: "🪞",
    ringkas: "Kita mencari & mempercayai info yang mendukung keyakinan lama, dan mengabaikan yang menentang.",
    cerita:
      "Otak suka merasa benar, maka ia diam-diam menyaring dunia: bukti yang cocok dengan keyakinan kita terasa 'jelas benar', bukti yang bertentangan terasa 'meragukan'. Akibatnya kita mengira sedang berpikir objektif, padahal sedang mengumpulkan pembenaran. Algoritma media sosial memperparahnya dengan menyodorkan terus hal yang kita setujui.",
    analogi:
      "Seperti memakai kacamata berwarna: kamu kira melihat dunia apa adanya, padahal semua sudah diwarnai lebih dulu. Kamu hanya menemukan apa yang memang kamu cari.",
    penerapan: [
      "Sesekali cari argumen terbaik dari pihak yang tak kamu setujui — bukan yang terlemah.",
      "Tanya: 'Bukti apa yang akan membuatku mengubah pikiran?' Kalau tak ada, itu keyakinan buta.",
      "Ikuti sumber yang cerdas namun berbeda pandangan untuk menyeimbangkan lini masamu.",
    ],
    sumber: "Peter Wason (1960)",
  },
  {
    id: "survivorship-bias",
    judul: "Bias Penyintas (Survivorship)",
    kategori: "Bias & Sesat Pikir",
    ikon: "✈️",
    ringkas: "Kita belajar dari yang berhasil & lupa pada yang gagal diam-diam — sehingga menarik pelajaran yang salah.",
    cerita:
      "Perang Dunia II: militer ingin memperkuat pesawat di area yang paling banyak kena peluru saat kembali. Ahli statistik Abraham Wald menolak — justru perkuat area yang MULUS, karena pesawat yang tertembak di sana tak pernah pulang untuk dihitung. Kita cuma melihat 'penyintas'. Kisah sukses dropout miliuner ramai diceritakan; jutaan yang dropout lalu kesulitan tak pernah viral.",
    analogi:
      "Seperti menilai 'judi itu menguntungkan' hanya dengan mewawancarai pemenang di kasino — yang kalah sudah pulang diam-diam dan tak masuk hitunganmu.",
    penerapan: [
      "Saat mendengar kisah sukses, tanya: berapa banyak yang melakukan hal sama tapi gagal?",
      "Pelajari kegagalan, bukan hanya kemenangan — di situ letak pelajaran yang jujur.",
      "Waspadai resep 'rahasia sukses' yang mengabaikan peran peluang & keadaan.",
    ],
    sumber: "Abraham Wald (1943)",
  },
  // -------------------------- Pengambilan Keputusan --------------------------
  {
    id: "paradox-of-choice",
    judul: "Paradoks Pilihan",
    kategori: "Pengambilan Keputusan",
    ikon: "🧃",
    ringkas: "Terlalu banyak pilihan justru melumpuhkan & menurunkan kepuasan, bukan membebaskan.",
    cerita:
      "Psikolog Barry Schwartz menunjukkan bahwa lebih banyak opsi tak selalu lebih baik. Dalam studi terkenal, stan selai dengan 24 rasa menarik lebih banyak pengunjung, tapi yang dengan 6 rasa justru 10x lebih banyak menghasilkan pembelian. Terlalu banyak pilihan bikin kita cemas, menunda, dan setelah memilih pun menyesal membayangkan opsi lain. Kebebasan tanpa batas berubah jadi beban.",
    analogi:
      "Seperti buka Netflix 40 menit dan akhirnya tidak menonton apa pun — bukan karena tak ada yang bagus, tapi karena terlalu banyak yang bagus membuat otak korslet.",
    penerapan: [
      "Batasi pilihan lebih dulu (mis. 'cukup 3 opsi') sebelum memutuskan.",
      "Jadilah 'satisficer': pilih yang cukup baik, bukan pemburu yang 'paling sempurna'.",
      "Untuk keputusan kecil, buat aturan default agar hemat energi mental.",
    ],
    sumber: "Barry Schwartz (2004); Iyengar & Lepper (2000)",
  },
  {
    id: "loss-aversion",
    judul: "Keengganan pada Kerugian",
    kategori: "Pengambilan Keputusan",
    ikon: "⚖️",
    ringkas: "Rasa sakit kehilangan Rp100rb kira-kira dua kali lebih kuat daripada senang mendapat Rp100rb.",
    cerita:
      "Daniel Kahneman & Amos Tversky menemukan bahwa manusia menimbang kerugian jauh lebih berat daripada keuntungan yang setara. Karena itu kita menghindari risiko demi mempertahankan yang ada, kadang sampai melewatkan peluang bagus. Ketakutan rugi juga membuat kita memegang saham merugi terlalu lama & menjual yang untung terlalu cepat.",
    analogi:
      "Seperti lebih kesal kehilangan Rp50rb di jalan daripada gembira menemukan Rp50rb — padahal nilainya sama. Timbangan di kepala kita memang berat sebelah ke sisi 'takut kehilangan'.",
    penerapan: [
      "Bingkai ulang keputusan: fokus pada peluang yang hilang bila TIDAK bertindak.",
      "Sadari saat rasa takut rugi, bukan logika, yang sedang menyetir pilihanmu.",
      "Untuk kebiasaan baik, manfaatkan ini: pertaruhkan sesuatu agar 'takut rugi' bekerja untukmu.",
    ],
    sumber: "Kahneman & Tversky (1979)",
  },
  // --------------------------- Motivasi & Kebiasaan --------------------------
  {
    id: "saitama-syndrome",
    judul: "Sindrom Saitama",
    kategori: "Motivasi & Kebiasaan",
    ikon: "👊",
    ringkas: "Saat semua jadi terlalu mudah & semua tercapai, gairah malah padam — manusia butuh tantangan yang pas.",
    cerita:
      "Terinspirasi tokoh One Punch Man yang bisa mengalahkan siapa pun sekali pukul lalu justru merasa hampa & bosan. Ini menggambarkan kebenaran psikologis: kepuasan lahir dari PROSES mengatasi tantangan, bukan hanya dari kemenangan. Tanpa lawan yang setara, pencapaian kehilangan rasa. Sejalan dengan teori Flow: kita paling hidup saat tantangan sedikit di atas kemampuan.",
    analogi:
      "Seperti main game dengan mode cheat 'dewa': menang terus, tapi dalam 10 menit bosan. Yang bikin nagih justru level yang bikin kita nyaris kalah lalu berhasil.",
    penerapan: [
      "Kalau merasa hampa meski 'sukses', cari tantangan baru yang bermakna & lebih sulit.",
      "Naikkan level bertahap — kejar pertumbuhan, bukan sekadar kemenangan mudah.",
      "Rayakan proses & perjuangan, bukan hanya garis finis.",
    ],
    sumber: "Konsep populer; selaras teori Flow (Csikszentmihalyi)",
  },
  {
    id: "dopamine-detox",
    judul: "Puasa Dopamin",
    kategori: "Motivasi & Kebiasaan",
    ikon: "📵",
    ringkas: "Terlalu banyak kesenangan instan menumpulkan motivasi — otak butuh 'reset' dari stimulus murah.",
    cerita:
      "Dopamin bukan zat 'kebahagiaan', melainkan zat 'dorongan & antisipasi'. Scroll, game, junk food, & pornografi memberi ledakan dopamin instan; otak lalu menurunkan kepekaannya (toleransi), sehingga hal-hal biasa — membaca, belajar, ngobrol — terasa membosankan. 'Puasa dopamin' berarti sengaja menjauhi stimulus murah untuk sementara agar reseptor pulih dan hal sederhana kembali terasa memuaskan. Ini soal keseimbangan, bukan menyiksa diri.",
    analogi:
      "Seperti lidah yang kebanyakan makan manis lalu tak lagi bisa menikmati manisnya buah. Puasa sejenak membuat buah terasa manis lagi.",
    penerapan: [
      "Buat 'jeda tanpa layar' terjadwal; biarkan bosan datang — di situ kreativitas lahir.",
      "Ganti hit instan dengan 'dopamin lambat': olahraga, karya, belajar, alam.",
      "Perbesar friksi ke hal candu (logout, hapus app) & perkecil friksi ke hal baik.",
    ],
    sumber: "Anna Lembke, 'Dopamine Nation' (2021)",
  },
  {
    id: "delayed-gratification",
    judul: "Menunda Kepuasan (Marshmallow)",
    kategori: "Motivasi & Kebiasaan",
    ikon: "🍬",
    ringkas: "Kemampuan menahan godaan kecil sekarang demi hadiah lebih besar nanti amat menentukan hidup.",
    cerita:
      "Eksperimen Walter Mischel di Stanford (1970-an): anak diberi satu marshmallow dan dijanjikan dua bila mau menunggu 15 menit tanpa memakannya. Bertahun kemudian, anak yang mampu menunggu cenderung lebih baik dalam studi & pengelolaan diri. Riset lanjutan menekankan: kuncinya bukan 'kemauan keras' semata, tapi STRATEGI — mengalihkan perhatian, menjauhkan godaan. Kesabaran bisa dilatih.",
    analogi:
      "Seperti menahan diri tak memetik buah yang masih mentah agar nanti panen yang matang & manis. Yang sabar menanam, memanen lebih banyak.",
    penerapan: [
      "Jauhkan godaan dari pandangan — 'dari mata turun ke keinginan'.",
      "Alihkan fokus ke hadiah besar di masa depan saat tergoda hadiah kecil sekarang.",
      "Bangun sistem otomatis (mis. tabungan otomatis) agar tak bergantung pada niat saja.",
    ],
    sumber: "Walter Mischel (1972)",
  },
  {
    id: "compound-effect",
    judul: "Efek Bunga Majemuk (Compound)",
    kategori: "Motivasi & Kebiasaan",
    ikon: "🌪️",
    ringkas: "Perbaikan kecil yang konsisten menumpuk jadi hasil raksasa — kekuatan yang paling diremehkan.",
    cerita:
      "1% lebih baik tiap hari selama setahun membuatmu ~37x lebih baik; 1% lebih buruk tiap hari nyaris menuju nol. Perubahan kecil terasa tak berarti hari ini, sehingga sering ditinggalkan. Tapi hasil bersifat menunda: seperti es batu yang tak meleleh dari -10° ke -1°, lalu 'tiba-tiba' cair di 0°. Yang penting bukan besarnya langkah, tapi konsistensi arah.",
    analogi:
      "Seperti menabung recehan tiap hari — hari ini tak terasa, tapi bertahun kemudian jadi gunung. Waktu adalah teman bagi yang konsisten, musuh bagi yang menunda.",
    penerapan: [
      "Pilih satu kebiasaan kecil yang bisa kaulakukan tiap hari tanpa drama.",
      "Ukur konsistensi (berapa hari beruntun), bukan kesempurnaan.",
      "Bersabar melewati 'lembah kekecewaan' sebelum hasil terlihat.",
    ],
    sumber: "Darren Hardy (2010); James Clear, 'Atomic Habits'",
  },
  // ------------------------------- Sosial & Media ----------------------------
  {
    id: "media-sosial-candu",
    judul: "Candu & Kebohongan Media Sosial",
    kategori: "Sosial & Media",
    ikon: "📱",
    ringkas: "Kita membandingkan realita berantakan kita dengan 'highlight reel' orang lain, di mesin yang dirancang bikin nagih.",
    cerita:
      "Media sosial memakai 'variable reward' — sama seperti mesin judi: kita menarik layar berharap kejutan (like, notifikasi), dan ketidakpastian itulah yang bikin ketagihan. Yang kita lihat pun bukan hidup nyata orang, melainkan versi terpilih & terpoles. Membandingkan 'balik layar' hidup kita dengan 'panggung' orang lain melahirkan iri, cemas, & merasa tertinggal. Ditambah misinformasi yang menyebar lebih cepat daripada kebenaran karena lebih memancing emosi.",
    analogi:
      "Seperti menilai seluruh film dari cuplikan trailer terbaiknya — padahal setiap orang punya adegan membosankan & gagal yang tak pernah diunggah.",
    penerapan: [
      "Ingat: kamu membandingkan behind-the-scenes-mu dengan highlight orang lain.",
      "Kurasi lini masa; unfollow akun yang membuatmu merasa buruk, bukan bertumbuh.",
      "Verifikasi sebelum membagikan; makin memancing emosi, makin perlu dicek dulu.",
    ],
    sumber: "Tristan Harris; Vosoughi dkk., Science (2018)",
  },
  {
    id: "spotlight-effect",
    judul: "Efek Sorotan (Spotlight)",
    kategori: "Sosial & Media",
    ikon: "🔦",
    ringkas: "Kita mengira semua orang memperhatikan kesalahan & penampilan kita — padahal mereka sibuk memikirkan diri sendiri.",
    cerita:
      "Dalam studi Gilovich, mahasiswa disuruh memakai kaus memalukan lalu menebak berapa yang memperhatikan; mereka melebih-lebihkan dua kali lipat dari kenyataan. Kita adalah pusat dunia kita sendiri, lalu keliru mengira kita juga pusat perhatian dunia orang lain. Padahal setiap orang sedang sibuk mengkhawatirkan citranya masing-masing.",
    analogi:
      "Seperti panik karena salah ucap saat presentasi — kamu memutar ulang seharian, sementara audiens sudah lupa lima menit kemudian karena mereka juga memikirkan urusannya sendiri.",
    penerapan: [
      "Saat malu, ingat: orang lain jauh lebih tidak memperhatikanmu daripada dugaanmu.",
      "Berani ambil risiko sosial (bertanya, mencoba) — biaya malunya hampir selalu dibesar-besarkan.",
      "Bebaskan dirimu dari penjara 'kata orang' yang sebenarnya tak seramai itu.",
    ],
    sumber: "Gilovich, Medvec & Savitsky (2000)",
  },
  // ---------------------------- Uang & Kelas Sosial --------------------------
  {
    id: "belajar-dari-yang-tepat",
    judul: "Belajar dari Orang yang Sudah di Tujuan",
    kategori: "Uang & Kelas Sosial",
    ikon: "🧗",
    ringkas: "\"Orang miskin sulit mengajari jadi kaya\" — bukan soal merendahkan, tapi soal memilih guru yang sudah menempuh jalannya.",
    cerita:
      "Inti ungkapan ini bukan menghina siapa pun, melainkan prinsip belajar: untuk menguasai keterampilan (termasuk mengelola & menumbuhkan uang), pelajari dari mereka yang benar-benar sudah mempraktikkannya, bukan sekadar mengulang nasihat yang diwariskan tanpa pernah teruji. Pola pikir & kebiasaan finansial menular dari lingkungan; bila semua di sekitarmu hanya tahu 'bertahan', sulit belajar 'bertumbuh'. Namun hati-hati: banyak yang mengaku kaya sebenarnya menjual mimpi — pilih mentor dari BUKTI, bukan pamer.",
    analogi:
      "Seperti ingin jago berenang: kamu berguru pada perenang, bukan pada orang yang cuma pernah membaca soal air. Bukan soal harga diri sang guru, tapi soal apakah ia sudah menyeberangi kolam itu.",
    penerapan: [
      "Pilih sumber belajar dari rekam jejak nyata, bukan sekadar retorika atau pamer.",
      "Perluas lingkaran: dekati orang yang pola pikirnya ingin kautiru.",
      "Uji nasihat lama secara jujur — hormati orang tua, tapi update ilmunya.",
    ],
    sumber: "Prinsip modeling & lingkungan (mis. riset kelas sosial & mobilitas)",
  },
  {
    id: "inflasi-gaya-hidup",
    judul: "Inflasi Gaya Hidup",
    kategori: "Uang & Kelas Sosial",
    ikon: "💸",
    ringkas: "Saat penghasilan naik, pengeluaran diam-diam ikut naik — sehingga selalu merasa 'kurang'.",
    cerita:
      "Begitu gaji naik, standar hidup nyaris otomatis ikut naik: HP baru, langganan baru, gaya baru. Kenaikan yang dulu diimpikan cepat jadi 'normal baru', dan rasa cukup tak kunjung datang. Akibatnya banyak orang berpenghasilan besar tetap tak punya tabungan. Kuncinya menjaga jarak antara penghasilan & gaya hidup — 'bayar diri sendiri dulu' (menabung/investasi) sebelum belanja.",
    analogi:
      "Seperti mengejar cakrawala: tiap kali mendekat, garisnya mundur lagi. Rasa cukup bukan soal seberapa banyak yang kaupunya, tapi seberapa cepat keinginanmu ikut lari.",
    penerapan: [
      "Saat penghasilan naik, naikkan dulu porsi tabungan/investasi sebelum gaya hidup.",
      "Bedakan 'kebutuhan', 'keinginan', & 'gengsi' dengan jujur.",
      "Tetapkan 'angka cukup' agar tahu kapan mengejar berhenti melelahkan.",
    ],
    sumber: "Parkinson's Law of lifestyle; Morgan Housel, 'Psychology of Money'",
  },
  // -------------------------- Makna & Kebahagiaan ----------------------------
  {
    id: "hedonic-treadmill",
    judul: "Roda Hedonik",
    kategori: "Makna & Kebahagiaan",
    ikon: "🎡",
    ringkas: "Kita cepat terbiasa pada hal baik maupun buruk, lalu kembali ke tingkat bahagia semula.",
    cerita:
      "Studi klasik menemukan pemenang lotre & korban kecelakaan lumpuh, setelah beberapa waktu, kembali ke tingkat kebahagiaan yang mirip sebelumnya. Manusia punya 'titik setel' bahagia; peristiwa besar menggeser sesaat, lalu kita beradaptasi. Itu sebabnya barang impian cepat terasa biasa. Kebahagiaan yang bertahan lebih banyak datang dari relasi, makna, & pertumbuhan ketimbang dari benda.",
    analogi:
      "Seperti berlari di treadmill: seberapa cepat pun kaukejar 'kebahagiaan berikutnya', posisimu kembali ke titik semula. Yang menggeser titik itu bukan barang baru, tapi cara hidupmu.",
    penerapan: [
      "Investasikan pada pengalaman, relasi, & makna — bukan sekadar barang.",
      "Latih syukur untuk melawan adaptasi yang membuat segalanya terasa biasa.",
      "Ciptakan variasi & jeda agar kenikmatan tak cepat memudar.",
    ],
    sumber: "Brickman & Campbell (1971)",
  },
  {
    id: "flow",
    judul: "Flow (Kondisi Mengalir)",
    kategori: "Makna & Kebahagiaan",
    ikon: "🌊",
    ringkas: "Momen paling memuaskan: saat larut total dalam aktivitas menantang hingga lupa waktu.",
    cerita:
      "Psikolog Mihaly Csikszentmihalyi meneliti pelukis, atlet, & musisi yang tenggelam dalam kerja sampai lupa makan & waktu. Ia menyebutnya 'flow': fokus penuh, rasa kendali, & hilangnya kesadaran diri. Syaratnya: tantangan sedikit di atas kemampuan (terlalu mudah = bosan, terlalu sulit = cemas), tujuan jelas, & umpan balik langsung. Flow adalah salah satu sumber kebahagiaan paling dalam dan bisa dirancang.",
    analogi:
      "Seperti pemain gim yang lupa waktu karena levelnya pas — cukup menantang untuk seru, cukup mungkin untuk menang. Di zona itu, kerja terasa seperti main.",
    penerapan: [
      "Atur tantangan agar pas: naikkan kesulitan saat bosan, turunkan saat cemas.",
      "Matikan gangguan; flow butuh fokus tak terputus.",
      "Perbanyak aktivitas dengan tujuan jelas & umpan balik cepat.",
    ],
    sumber: "Mihaly Csikszentmihalyi (1990)",
  },
  {
    id: "dichotomy-of-control",
    judul: "Dikotomi Kendali (Stoa)",
    kategori: "Makna & Kebahagiaan",
    ikon: "🏛️",
    ringkas: "Pisahkan yang bisa & tak bisa kaukendalikan; tenang datang saat berhenti melawan yang di luar kuasamu.",
    cerita:
      "Filsuf Stoa Epictetus — dulunya budak — mengajarkan bahwa sebagian hal ada dalam kuasa kita (pikiran, sikap, usaha) dan sebagian tidak (hasil, opini orang, cuaca, masa lalu). Penderitaan muncul saat kita menuntut kendali atas yang bukan urusan kita. Ketenangan lahir saat kita mencurahkan energi pada bagian kita, dan menerima sisanya dengan lapang. Ini inti Stoisisme yang dipopulerkan ulang lewat 'Filosofi Teras'.",
    analogi:
      "Seperti pelaut: kamu tak bisa mengatur arah angin, tapi bisa mengatur layar. Marah pada angin hanya membuang tenaga; menyetel layar membawamu maju.",
    penerapan: [
      "Saat cemas, tanya: 'Bagian mana yang benar-benar dalam kendaliku?' Fokus di situ.",
      "Lepaskan hasil & opini orang; pegang erat usaha & sikapmu.",
      "Latih 'premeditatio': bayangkan kemungkinan buruk agar tak kaget & tetap tenang.",
    ],
    sumber: "Epictetus, 'Enchiridion'; Henry Manampiring, 'Filosofi Teras'",
  },
  // ----------------------------- Belajar & Pikiran ---------------------------
  {
    id: "sekolah-vs-belajar",
    judul: "Mitos \"Sekolah Gak Penting\"",
    kategori: "Belajar & Pikiran",
    ikon: "🎓",
    ringkas: "Yang sering dimaksud bukan 'belajar tak penting', tapi bahwa belajar jauh lebih luas daripada bangku sekolah.",
    cerita:
      "Slogan 'sekolah gak penting' biasanya keliru dipahami. Yang benar: IJAZAH bukan satu-satunya jalan, dan banyak keterampilan hidup (uang, komunikasi, disiplin) tak diajarkan di kelas. Tapi BELAJAR justru makin penting — hanya saja kini bisa mandiri lewat buku, kursus, mentor, & praktik. Sekolah tetap berharga untuk fondasi, jejaring, & disiplin; masalahnya bila kita berhenti belajar setelah lulus. Orang sukses tanpa gelar hampir selalu adalah pembelajar seumur hidup yang gigih — bukan orang yang berhenti belajar.",
    analogi:
      "Seperti membedakan 'peta' dan 'perjalanan'. Sekolah memberi satu peta yang berguna, tapi tak menggantikan keharusan benar-benar berjalan & belajar dari medan sepanjang hidup.",
    penerapan: [
      "Jangan berhenti belajar setelah lulus — kuasai skill yang tak diajarkan di kelas.",
      "Manfaatkan sekolah untuk fondasi & jejaring, lengkapi dengan belajar mandiri.",
      "Ukur dirimu dari kemampuan & karya, bukan hanya dari selembar ijazah.",
    ],
    sumber: "Diskusi pendidikan modern; self-directed learning",
  },
  {
    id: "illusion-of-free-will",
    judul: "Ilusi Kehendak Bebas",
    kategori: "Belajar & Pikiran",
    ikon: "🧬",
    ringkas: "Seberapa 'bebas' pilihan kita, bila otak tampak memutuskan sepersekian detik sebelum kita 'sadar' memilih?",
    cerita:
      "Eksperimen Benjamin Libet (1980-an) menemukan aktivitas otak yang memulai gerakan muncul ratusan milidetik SEBELUM seseorang merasa 'memutuskan' untuk bergerak. Ini memicu debat panjang: apakah kehendak bebas nyata, atau kita hanya 'menyaksikan' keputusan yang sudah dibuat otak? Sebagian ilmuwan menyimpulkan kehendak bebas mutlak itu ilusi; sebagian lain menekankan kita tetap punya 'kuasa veto' & tanggung jawab. Terlepas dari filsafatnya, hidup seolah kita bertanggung jawab tetap membawa hasil terbaik.",
    analogi:
      "Seperti menyangka kitalah sutradara film, padahal banyak adegan sudah ditulis oleh gen, pengasuhan, & lingkungan. Kita mungkin lebih banyak 'mengedit' daripada 'menulis dari nol' — tapi editan itu tetap berarti.",
    penerapan: [
      "Rancang lingkungan yang memancing perilaku baik — sebagian besar 'pilihan' dipicu konteks.",
      "Lebih berbelas kasih: orang (termasuk dirimu) dibentuk banyak faktor di luar kuasanya.",
      "Tetap ambil tanggung jawab — hidup 'seolah bebas' menghasilkan usaha & pertumbuhan.",
    ],
    sumber: "Benjamin Libet (1983); debat neurosains & filsafat",
  },
  // ---------------------------- Komunikasi & Relasi --------------------------
  {
    id: "impostor-syndrome",
    judul: "Sindrom Penipu (Impostor)",
    kategori: "Komunikasi & Relasi",
    ikon: "🎭",
    ringkas: "Merasa 'sebenarnya tidak sehebat itu' & takut ketahuan 'menipu' — justru sering dialami orang kompeten.",
    cerita:
      "Diteliti Pauline Clance & Suzanne Imes (1978): banyak orang berprestasi diam-diam yakin keberhasilannya cuma keberuntungan, dan cepat atau lambat akan 'ketahuan' tak becus. Ironisnya, makin kompeten & makin tinggi standarnya, makin rentan merasa begini (kebalikan Dunning-Kruger). Rasa ini tumbuh subur dalam diam; menyuarakannya sering melegakan karena ternyata banyak yang mengalaminya.",
    analogi:
      "Seperti aktor bagus yang di balik panggung terus berbisik 'aku cuma beruntung' — padahal penonton melihat penampilan nyata yang memang layak. Suara 'penipu' itu bukan fakta, hanya rasa takut.",
    penerapan: [
      "Catat bukti nyata pencapaianmu; lawan perasaan dengan fakta.",
      "Bicarakan — kamu akan kaget betapa banyak orang hebat merasakan hal sama.",
      "Ubah 'aku belum tahu' jadi tanda ruang tumbuh, bukan bukti kamu 'penipu'.",
    ],
    sumber: "Clance & Imes (1978)",
  },
  {
    id: "mendengar-aktif",
    judul: "Mendengar untuk Memahami",
    kategori: "Komunikasi & Relasi",
    ikon: "👂",
    ringkas: "Kebanyakan orang mendengar untuk membalas, bukan untuk memahami — akar dari salah paham & konflik.",
    cerita:
      "Stephen Covey merumuskan: 'berusahalah memahami dulu, baru dipahami'. Saat orang bercerita, pikiran kita sering sibuk menyiapkan jawaban, menghakimi, atau menunggu giliran bicara. Mendengar aktif berarti hadir penuh: memantulkan kembali isi & perasaan lawan bicara ('jadi kamu merasa… karena…'), bertanya, dan menahan solusi terburu-buru. Marshall Rosenberg (Komunikasi Nirkekerasan) menambahkan: dengarkan kebutuhan di balik kata-kata, bukan hanya kata-katanya.",
    analogi:
      "Seperti dua radio yang sama-sama menyiar tapi tak ada yang menyetel ke frekuensi lawan — suara ramai, tapi tak ada yang benar-benar terhubung.",
    penerapan: [
      "Sebelum menjawab, ringkas dulu maksud lawan bicara sampai ia merasa dimengerti.",
      "Tanya 'kamu merasa bagaimana?' sebelum menawarkan solusi.",
      "Perhatikan nada & bahasa tubuh — sering lebih jujur daripada kata-kata.",
    ],
    sumber: "Stephen Covey (1989); Marshall Rosenberg (2003)",
  },
];

/* ------------------- gabungan seluruh domain ilmu (perpustakaan) ------------------ */
// Entri per-domain hidup di src/data/wawasan/*.ts lalu digabung di sini.
export const WAWASAN: Wawasan[] = [
  ...INTI,
  ...LOGIKA,
  ...SAINS,
  ...EKONOMI,
  ...FILSAFAT,
];
