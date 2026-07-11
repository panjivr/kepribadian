import type { Wawasan } from "@/data/wawasan";

export const LOGIKA: Wawasan[] = [
  {
    id: "log-korelasi-kausalitas",
    judul: "Korelasi Bukan Sebab-Akibat",
    kategori: "Logika & Argumen",
    ikon: "🔗",
    ringkas: "Dua hal terjadi bersamaan tak berarti yang satu menyebabkan yang lain.",
    cerita:
      "Penjualan es krim naik bersamaan dengan angka tenggelam di pantai — apakah es krim menyebabkan orang tenggelam? Tentu tidak; keduanya dipicu faktor ketiga: cuaca panas. Ini salah satu sesat pikir paling sering: melihat pola lalu buru-buru menyimpulkan sebab. Ilmu pengetahuan repot-repot melakukan eksperimen terkontrol justru untuk memisahkan 'kebetulan berbarengan' dari 'benar-benar menyebabkan'.",
    analogi:
      "Seperti melihat ayam berkokok lalu matahari terbit, kemudian menyimpulkan ayam yang memunculkan matahari. Padahal keduanya sekadar mengikuti jadwal pagi yang sama.",
    penerapan: [
      "Saat lihat 'A naik, B naik', tanya: adakah faktor C yang memicu keduanya?",
      "Curigai judul berita yang menyiratkan sebab dari sekadar hubungan.",
      "Cari eksperimen/uji terkontrol sebelum memercayai klaim 'X menyebabkan Y'.",
    ],
    sumber: "Prinsip metode ilmiah",
  },
  {
    id: "log-strawman",
    judul: "Sesat Pikir Orang-orangan Sawah",
    kategori: "Logika & Argumen",
    ikon: "🌾",
    ringkas: "Memelintir argumen lawan jadi versi lemah yang mudah dirobohkan, lalu merasa menang.",
    cerita:
      "Alih-alih menghadapi argumen sebenarnya, orang sering membuat 'boneka jerami' — versi argumen lawan yang dilebih-lebihkan atau disederhanakan — lalu menyerangnya. Contoh: A berkata 'kita perlu atur lalu lintas', B menjawab 'jadi kamu mau melarang semua mobil?!'. B menyerang posisi yang tak pernah dikatakan A. Debat jadi ramai tapi kosong, karena yang dirobohkan hanya bayangan.",
    analogi:
      "Seperti bertinju melawan patung jerami lalu menepuk dada karena menang — patung itu memang tak pernah bisa membalas, dan bukan lawan sesungguhnya.",
    penerapan: [
      "Sebelum membantah, ulangi dulu argumen lawan sampai ia setuju 'ya, itu maksudku'.",
      "Lawan versi TERKUAT argumen (steelman), bukan yang terlemah.",
      "Waspadai kata 'jadi maksudmu…' yang melebih-lebihkan ucapan orang.",
    ],
    sumber: "Logika informal",
  },
  {
    id: "log-ad-hominem",
    judul: "Menyerang Orang, Bukan Argumen",
    kategori: "Logika & Argumen",
    ikon: "🎯",
    ringkas: "Menjatuhkan pembawa pesan tak membuat pesannya salah.",
    cerita:
      "Ad hominem berarti menyerang pribadi lawan alih-alih isi argumennya: 'kamu kan masih muda, apa tahu?' atau 'dia kan cuma lulusan SMA'. Kebenaran sebuah klaim tak bergantung pada siapa yang mengucapkannya — orang yang tak kita sukai pun bisa benar, dan ahli pun bisa keliru. Menyerang orang hanya mengalihkan dari pertanyaan sebenarnya: apakah argumennya masuk akal?",
    analogi:
      "Seperti menolak resep masakan enak hanya karena tak suka wajah kokinya. Rasa masakan tak berubah oleh siapa yang menuliskan resepnya.",
    penerapan: [
      "Pisahkan 'siapa yang bicara' dari 'apa yang dikatakan'.",
      "Saat tergoda menyerang pribadi, kembalikan ke isi: 'tapi apakah argumennya benar?'",
      "Nilai ide dari bukti & logikanya, bukan dari status atau kesukaanmu pada orangnya.",
    ],
    sumber: "Logika informal",
  },
  {
    id: "log-dilema-palsu",
    judul: "Dilema Palsu",
    kategori: "Logika & Argumen",
    ikon: "🚦",
    ringkas: "Disodori seolah hanya ada dua pilihan, padahal ada banyak kemungkinan di antaranya.",
    cerita:
      "Dilema palsu (false dichotomy) memaksa kita memilih hitam atau putih: 'kalau tidak bersama kami, berarti melawan kami'. Padahal dunia penuh warna abu-abu & opsi ketiga. Taktik ini menekan lawan bicara agar buru-buru memihak, menutup ruang nuansa & kompromi. Banyak konflik memanas karena dua kubu lupa bahwa jalan tengah itu ada.",
    analogi:
      "Seperti ditanya 'mau teh atau kopi?' padahal kamu boleh minta air putih, jus, atau tidak minum sama sekali. Menu yang disodorkan belum tentu seluruh pilihan yang tersedia.",
    penerapan: [
      "Saat cuma disodori dua opsi, tanya: 'apakah benar hanya ini pilihannya?'",
      "Cari opsi ketiga & jalan tengah sebelum memihak.",
      "Waspadai retorika 'kalau bukan A, pasti B'.",
    ],
    sumber: "Logika informal",
  },
  {
    id: "log-occam",
    judul: "Pisau Occam",
    kategori: "Logika & Argumen",
    ikon: "🪒",
    ringkas: "Bila ada beberapa penjelasan, yang paling sederhana biasanya paling mungkin benar.",
    cerita:
      "Prinsip dari filsuf William dari Ockham: jangan mengarang asumsi lebih banyak dari yang diperlukan. Kalau lampu mati, penjelasan 'listrik padam' lebih masuk akal daripada 'hantu mematikannya'. Occam bukan hukum mutlak — kadang jawaban memang rumit — tapi ia titik awal yang baik: pilih penjelasan dengan asumsi paling sedikit sampai ada bukti kuat untuk yang lebih rumit.",
    analogi:
      "Seperti mendengar derap kaki di halaman: lebih masuk akal itu kuda daripada zebra (kecuali kamu tinggal di sabana). Tebak yang biasa dulu, bukan yang eksotis.",
    penerapan: [
      "Saat menebak sebab, mulai dari penjelasan paling sederhana & umum.",
      "Curigai teori yang butuh banyak 'kebetulan' atau asumsi tersembunyi.",
      "Tetap terbuka: sederhana bukan selalu benar, hanya lebih mungkin sebagai awal.",
    ],
    sumber: "William of Ockham (abad ke-14)",
  },
  {
    id: "log-falsifiability",
    judul: "Bisa Dibuktikan Salah (Falsifiabilitas)",
    kategori: "Logika & Argumen",
    ikon: "🧪",
    ringkas: "Klaim yang tak mungkin dibuktikan salah bukanlah ilmu — melainkan keyakinan yang kebal uji.",
    cerita:
      "Filsuf Karl Popper berpendapat bahwa yang membedakan sains dari bukan-sains adalah falsifiabilitas: teori ilmiah harus bisa, secara prinsip, dibuktikan SALAH oleh pengamatan. 'Semua angsa putih' bisa dipatahkan oleh satu angsa hitam. Sebaliknya, klaim yang bisa menjelaskan apa pun ('semua ini kehendak semesta') tak bisa diuji — nyaman didengar, tapi kosong sebagai pengetahuan.",
    analogi:
      "Seperti ramalan 'besok mungkin hujan, mungkin juga tidak' — selalu benar, karena tak bisa salah, dan justru karena itu tak berguna. Ramalan yang berani salah-lah yang bernilai.",
    penerapan: [
      "Tanya pada sebuah klaim: 'bukti apa yang akan membuktikannya salah?'",
      "Curigai keyakinan yang bisa menjelaskan segala hasil — itu tanda tak teruji.",
      "Hargai teori & orang yang berani menyebut kondisi 'aku keliru bila…'.",
    ],
    sumber: "Karl Popper (1934)",
  },
  {
    id: "log-first-principles",
    judul: "Berpikir dari Prinsip Dasar",
    kategori: "Belajar & Pikiran",
    ikon: "🧱",
    ringkas: "Bongkar masalah sampai kebenaran paling dasar, lalu bangun ulang dari sana — bukan meniru yang sudah ada.",
    cerita:
      "Alih-alih berpikir dengan analogi ('begini caranya karena semua orang begitu'), berpikir dari prinsip dasar berarti menanyakan 'apa yang benar-benar pasti benar di sini?' lalu menyusun ulang dari fondasi itu. Aristoteles memakainya; Elon Musk memopulerkannya saat menghitung ulang biaya roket dari harga bahan mentahnya, bukan dari harga pasar roket. Cara ini membebaskan dari asumsi warisan yang tak pernah dipertanyakan.",
    analogi:
      "Seperti memasak: alih-alih menyalin resep bulat-bulat, kamu paham fungsi tiap bahan sehingga bisa berkreasi & memperbaiki. Yang paham prinsip bisa mencipta, yang cuma meniru terjebak resep.",
    penerapan: [
      "Tanya: 'Apa yang benar-benar pasti benar di sini, tanpa asumsi warisan?'",
      "Bedakan fakta dasar dari 'katanya' & kebiasaan yang tak pernah diuji.",
      "Bangun solusimu dari fondasi itu, bukan sekadar menyalin yang sudah ada.",
    ],
    sumber: "Aristoteles; dipopulerkan ulang di era modern",
  },
  {
    id: "log-feynman",
    judul: "Teknik Feynman",
    kategori: "Belajar & Pikiran",
    ikon: "👨‍🏫",
    ringkas: "Kamu baru benar-benar paham sesuatu kalau bisa menjelaskannya secara sederhana ke anak kecil.",
    cerita:
      "Fisikawan Richard Feynman terkenal menjelaskan hal rumit dengan sangat sederhana. Metodenya: pilih topik, jelaskan seolah ke anak SD, temukan bagian yang kamu 'tersendat', lalu kembali belajar bagian itu sampai lancar. Kesederhanaan memaksa kejujuran — istilah rumit sering jadi tempat sembunyi ketidakpahaman. Kalau kamu hanya bisa menjelaskan dengan jargon, sering kali kamu belum benar-benar mengerti.",
    analogi:
      "Seperti mengetes apakah kamu hafal jalan: kalau bisa memandu orang lain tanpa peta, kamu benar-benar tahu; kalau tersendat, di situlah letak yang belum kaukuasai.",
    penerapan: [
      "Setelah belajar, jelaskan materi dengan bahasa sederhana tanpa jargon.",
      "Tandai bagian yang bikin tersendat — itu peta lubang pemahamanmu.",
      "Ulangi sampai penjelasanmu mengalir & mudah dipahami orang awam.",
    ],
    sumber: "Richard Feynman",
  },
  {
    id: "log-peta-wilayah",
    judul: "Peta Bukan Wilayah",
    kategori: "Belajar & Pikiran",
    ikon: "🗺️",
    ringkas: "Model & label di kepala kita hanyalah peta — berguna, tapi bukan kenyataan itu sendiri.",
    cerita:
      "Ahli semantik Alfred Korzybski mengingatkan: 'peta bukanlah wilayah'. Semua yang kita tahu — teori, stereotip, bahkan tes kepribadian — adalah penyederhanaan realitas, bukan realitas utuh. Peta yang baik membantu kita menavigasi, tapi bahaya muncul saat kita lupa itu cuma peta dan memperlakukannya sebagai kebenaran mutlak. Semua model salah; sebagian berguna.",
    analogi:
      "Seperti foto seseorang: membantu mengenalinya, tapi bukan orangnya. Mencium foto tak sama dengan memeluk orangnya — jangan tertukar antara gambaran dan yang digambarkan.",
    penerapan: [
      "Perlakukan teori & label (termasuk hasil tes) sebagai peta, bukan vonis.",
      "Perbarui petamu saat kenyataan tak cocok — jangan paksa kenyataan ikut peta.",
      "Punya beberapa 'peta' (sudut pandang) untuk melihat masalah lebih utuh.",
    ],
    sumber: "Alfred Korzybski (1933)",
  },
];
