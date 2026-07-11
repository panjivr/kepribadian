/**
 * Domain: Sosial, komunikasi, & sesat pikir dalam relasi antarmanusia.
 * Kumpulan wawasan tentang bagaimana kita saling memengaruhi, berkomunikasi,
 * dan keliru menilai satu sama lain. Tiap entri dilengkapi cerita & analogi
 * sehari-hari agar mudah dipahami siapa pun. Konten edukatif.
 */
import type { Wawasan } from "@/data/wawasan";

export const SOSIAL: Wawasan[] = [
  // ------------------------------- Sosial & Media ----------------------------
  {
    id: "sos-social-proof",
    judul: "Bukti Sosial & Konformitas",
    kategori: "Sosial & Media",
    ikon: "👥",
    ringkas: "Saat ragu, kita ikut apa kata orang banyak — bahkan ketika mata kita sendiri berkata sebaliknya.",
    cerita:
      "Pada 1951, psikolog Solomon Asch menguji hal yang tampak sepele: peserta diminta menunjuk garis mana yang sama panjang dengan garis contoh — jawabannya sebenarnya jelas. Tapi di ruangan itu ada aktor bayaran yang sengaja kompak menjawab salah. Hasilnya mengejutkan: sekitar tiga dari empat peserta ikut menjawab salah setidaknya sekali, mengalah pada suara mayoritas meski matanya sendiri tahu itu keliru. Kita memang menjadikan perilaku orang banyak sebagai 'petunjuk' tentang apa yang benar — itulah bukti sosial. Naluri ini kadang berguna (warung yang ramai biasanya enak), tapi bisa menyesatkan saat mayoritas ternyata salah.",
    analogi:
      "Seperti memilih warung yang antreannya panjang padahal belum tentu paling enak — kita menganggap keramaian sebagai jaminan mutu. Kadang benar, tapi kadang kita cuma ikut-ikutan tanpa pernah mencicipi sendiri.",
    penerapan: [
      "Saat ikut suara mayoritas, tanya sejenak: 'Aku setuju karena yakin, atau cuma tak enak berbeda?'",
      "Cari satu orang yang berani bersuara beda — kehadiran satu 'sekutu' membuat orang lain ikut jujur.",
      "Untuk keputusan penting, kumpulkan fakta sendiri sebelum melihat ke mana arah orang banyak.",
    ],
    sumber: "Solomon Asch (1951); prinsip bukti sosial, Robert Cialdini",
  },
  {
    id: "sos-bystander-effect",
    judul: "Efek Pengamat (Bystander)",
    kategori: "Sosial & Media",
    ikon: "🧍",
    ringkas: "Makin banyak orang menyaksikan sebuah keadaan darurat, makin kecil kemungkinan ada yang menolong.",
    cerita:
      "Tahun 1964, kabar pembunuhan Kitty Genovese di New York menyebar dengan klaim bahwa 38 tetangga menyaksikan namun tak satu pun menolong — belakangan terbukti angka itu dilebih-lebihkan media, tapi kisahnya memicu riset penting. Psikolog John Darley & Bibb Latané lalu membuktikan lewat eksperimen: makin banyak orang hadir, makin kecil peluang seseorang benar-benar bertindak. Sebabnya 'penyebaran tanggung jawab' — tiap orang berpikir 'pasti ada orang lain yang menolong'. Ditambah kita saling melirik: karena semua diam, kita menyimpulkan keadaan tak segenting itu. Akibatnya banyak mata, tapi tak ada tangan.",
    analogi:
      "Seperti sampah yang menumpuk di gang milik bersama: karena ini urusan 'semua orang', ujungnya jadi urusan tidak ada orang. Tanggung jawab yang dibagi rata ke banyak kepala sering menguap jadi nol.",
    penerapan: [
      "Kalau kamu yang butuh tolong, TUNJUK satu orang spesifik: 'Bapak baju biru, tolong panggil ambulans!'",
      "Jangan menunggu orang lain bergerak — jadilah yang pertama; sering satu orang cukup memicu yang lain ikut.",
      "Sadari jebakan 'pasti ada yang mengurus'; justru saat ramai, ambil inisiatif duluan.",
    ],
    sumber: "Darley & Latané (1968)",
  },
  {
    id: "sos-milgram",
    judul: "Kepatuhan pada Otoritas",
    kategori: "Sosial & Media",
    ikon: "🎚️",
    ringkas: "Orang biasa bisa melakukan hal yang menyakiti sesama — cukup karena disuruh figur yang tampak berwenang.",
    cerita:
      "Awal 1960-an, psikolog Stanley Milgram di Universitas Yale merancang eksperimen yang menggetarkan. Peserta yang berperan sebagai 'guru' disuruh memberi kejutan listrik makin besar kepada seorang 'murid' tiap kali salah menjawab — padahal murid itu aktor dan listriknya palsu. Meski mendengar (pura-pura) jeritan kesakitan, sekitar 65% peserta terus menekan tombol sampai tegangan maksimal, hanya karena peneliti berjas berkata 'silakan lanjutkan'. Milgram menyimpulkan banyak orang menyerahkan tanggung jawab moralnya kepada otoritas, merasa 'saya cuma menjalankan perintah'. Studi ini punya kritik metodologis, tapi pesannya tetap menampar: kejahatan tak selalu butuh orang jahat, kadang cukup orang yang patuh.",
    analogi:
      "Seperti pegawai yang menjalankan aturan yang jelas keliru sambil berkata 'ini kebijakan atasan, saya cuma menaati'. Seragam & jabatan bisa membuat kita mematikan suara hati sendiri.",
    penerapan: [
      "Saat disuruh melakukan hal yang terasa salah, tanya: 'Kalau tak ada yang menyuruh, apakah aku sendiri memilih ini?'",
      "Ingat bahwa 'sekadar menjalankan perintah' bukan alasan yang membebaskanmu dari tanggung jawab.",
      "Beri ruang bagi rekan atau anak buah untuk menolak dengan aman saat ada yang tak beres.",
    ],
    sumber: "Stanley Milgram (1963)",
  },
  {
    id: "sos-groupthink",
    judul: "Pemikiran Kelompok (Groupthink)",
    kategori: "Sosial & Media",
    ikon: "🧠",
    ringkas: "Kelompok yang terlalu ingin kompak bisa mengambil keputusan bodoh yang tak akan diambil anggotanya sendirian.",
    cerita:
      "Psikolog Irving Janis (1972) menyelidiki kenapa tim yang cerdas kadang membuat blunder besar, seperti gagalnya invasi Teluk Babi. Ia menemukan pola yang disebut 'groupthink': demi menjaga kerukunan & konsensus, anggota menahan keraguan, menyensor diri sendiri, dan menekan yang berbeda pendapat. Muncul ilusi 'kita pasti benar', sementara pihak luar diremehkan. Akibatnya alternatif tak dipertimbangkan, risiko tak dibahas, dan kelompok melaju mulus menuju keputusan buruk. Ironisnya, makin akrab & kompak sebuah tim, makin rentan ia terjebak.",
    analogi:
      "Seperti rombongan yang tersesat tapi terus berjalan karena tak ada yang enak berkata 'sepertinya kita salah belok'. Semua diam demi menjaga suasana, sampai tersesatnya makin jauh.",
    penerapan: [
      "Tunjuk 'pengkritik resmi' (devil's advocate) yang tugasnya justru mencari kelemahan rencana.",
      "Minta pendapat ditulis diam-diam lebih dulu sebelum diskusi, agar tak terbawa suara terkuat.",
      "Pemimpin sebaiknya bicara terakhir; kalau atasan duluan, anak buah cenderung cuma mengiyakan.",
    ],
    sumber: "Irving Janis (1972)",
  },
  {
    id: "sos-echo-chamber",
    judul: "Ruang Gema & Gelembung Filter",
    kategori: "Sosial & Media",
    ikon: "🫧",
    ringkas: "Algoritma menyodorkan terus hal yang kita sukai, sampai kita mengira seluruh dunia sepikiran dengan kita.",
    cerita:
      "Aktivis Eli Pariser (2011) memperkenalkan istilah 'filter bubble' atau gelembung filter: mesin rekomendasi belajar dari klik kita, lalu menyaring dunia menjadi versi yang paling kita setujui. Ditambah kita sendiri cenderung berteman & mengikuti yang sepaham — terbentuklah 'ruang gema', tempat pendapat kita dipantulkan bolak-balik sampai terdengar seperti kebenaran mutlak. Suara yang berbeda makin jarang muncul, dan yang berbeda mulai terasa 'aneh' atau bahkan 'musuh'. Akibatnya kita makin yakin sekaligus makin sempit, dan masyarakat terbelah ke kubu-kubu yang tak lagi saling paham.",
    analogi:
      "Seperti berada di kamar berdinding cermin yang hanya memantulkan wajah sendiri — apa pun yang kaupikirkan, dunia seolah mengangguk setuju. Padahal itu cuma gemamu sendiri yang berbalik.",
    penerapan: [
      "Sengaja ikuti beberapa sumber yang cerdas namun berbeda pandangan denganmu.",
      "Sesekali cari 'argumen terbaik' pihak seberang, bukan versi paling konyolnya.",
      "Ingat: lini masamu adalah cermin seleramu, bukan potret dunia yang sebenarnya.",
    ],
    sumber: "Eli Pariser (2011)",
  },
  {
    id: "sos-parasocial",
    judul: "Hubungan Parasosial",
    kategori: "Sosial & Media",
    ikon: "📺",
    ringkas: "Kita bisa merasa sangat dekat & kenal dengan idola atau streamer — padahal mereka tak tahu kita ada.",
    cerita:
      "Pada 1956, peneliti Horton & Wohl mengamati bagaimana penonton televisi merasa 'berteman' dengan pembawa acara yang menyapa lembut ke kamera. Mereka menyebutnya 'interaksi parasosial': ikatan yang terasa timbal balik, padahal sepenuhnya satu arah. Di era YouTuber, streamer, & selebgram, fenomena ini meledak — kita menonton keseharian seseorang berjam-jam hingga otak memperlakukannya seperti teman dekat. Ikatan ini bisa sehat (memberi inspirasi & rasa ditemani), tapi bisa menyakitkan saat kita mencurahkan emosi & uang pada orang yang sebenarnya tak mengenal kita. Batas antara mengagumi dan merasa 'memiliki' pun menjadi kabur.",
    analogi:
      "Seperti hafal seluk-beluk hidup tetangga dari balik pagar lalu merasa sudah jadi sahabat karib — padahal ia bahkan tak tahu namamu. Kedekatan itu nyata bagimu, tapi tak ada di sisi seberang.",
    penerapan: [
      "Nikmati konten idola sebagai hiburan & inspirasi, tapi sadari itu bukan persahabatan dua arah.",
      "Jaga porsi: kalau ikatan ke figur layar mulai menggeser relasi nyatamu, tarik keseimbangan.",
      "Sebelum berdonasi besar atau membela mati-matian, tanya: 'apa ini sepadan untuk orang yang tak mengenalku?'",
    ],
    sumber: "Horton & Wohl (1956)",
  },
  // ---------------------------- Komunikasi & Relasi --------------------------
  {
    id: "sos-reciprocity",
    judul: "Hukum Timbal Balik",
    kategori: "Komunikasi & Relasi",
    ikon: "🤝",
    ringkas: "Diberi lebih dulu, kita merasa 'berutang' dan terdorong membalas — salah satu mesin sosial paling kuat.",
    cerita:
      "Psikolog Robert Cialdini mencatat timbal balik sebagai salah satu prinsip pengaruh paling universal: hampir semua budaya mengajarkan untuk membalas kebaikan. Dalam studi klasik Dennis Regan (1971), peserta yang tanpa diminta ditraktir sekaleng minuman oleh orang asing, kemudian membeli tiket undian jauh lebih banyak dari orang itu — bahkan bila si pemberi tadi kurang menyenangkan. Rasa 'tak enak berutang' begitu kuat hingga kita cenderung membalas melebihi nilai pemberiannya. Inilah alasan sampel gratis, cendera mata, & 'traktiran' begitu ampuh dalam penjualan. Kebaikan kecil di depan membuka pintu bagi permintaan besar di belakang.",
    analogi:
      "Seperti tetangga yang mengantar sepiring kue — besoknya kita merasa wajib membalas dengan sesuatu. Utang budi memang terasa lebih berat dipikul daripada utang uang.",
    penerapan: [
      "Manfaatkan untuk kebaikan: memberi lebih dulu (bantuan, perhatian tulus) adalah cara jujur membangun relasi.",
      "Waspadai 'pemberian' yang sebenarnya jebakan agar kamu sungkan menolak permintaan berikutnya.",
      "Boleh menerima kebaikan tanpa merasa wajib menuruti apa pun — pisahkan rasa terima kasih dari tekanan.",
    ],
    sumber: "Robert Cialdini (1984); Dennis Regan (1971)",
  },
  {
    id: "sos-four-horsemen",
    judul: "Empat Penunggang Kuda dalam Hubungan",
    kategori: "Komunikasi & Relasi",
    ikon: "🐴",
    ringkas: "Empat pola komunikasi yang, bila dibiarkan, hampir pasti meramalkan hancurnya sebuah hubungan.",
    cerita:
      "Peneliti pernikahan John Gottman mengamati ribuan pasangan di 'lab cinta'-nya dan bisa menebak siapa yang akan bercerai dengan akurasi tinggi — hanya dari cara mereka bertengkar. Ia menamai empat pola perusak sebagai 'Empat Penunggang Kuda': kritik yang menyerang pribadi ('kamu memang egois'), penghinaan (sinis, meremehkan, memutar bola mata) yang paling mematikan, sikap membela diri (menyalahkan balik, tak mau mengakui apa pun), dan menutup diri (diam membisu lalu kabur dari percakapan). Yang merusak sebenarnya bukan adanya konflik — semua pasangan pasti bertengkar — melainkan keempat racun inilah yang menggerogoti. Kabar baiknya, tiap penunggang punya penawar yang bisa dilatih.",
    analogi:
      "Seperti karat pada besi: bukan satu pukulan keras yang mematahkannya, tapi tetesan kecil yang dibiarkan menahun. Penghinaan yang diulang-ulang pelan-pelan mengeroposi cinta dari dalam.",
    penerapan: [
      "Ganti kritik ('kamu selalu...') dengan keluhan spesifik plus kebutuhan ('aku merasa ... saat ..., aku butuh ...').",
      "Basmi penghinaan; bangun kebiasaan menyebut hal yang kamu hargai dari pasangan.",
      "Lawan sikap bela diri dengan mengakui satu bagian yang jadi tanggung jawabmu, sekecil apa pun.",
      "Saat ingin membisu, minta jeda dengan jelas: 'aku butuh 20 menit menenangkan diri, nanti kita lanjut.'",
    ],
    sumber: "John Gottman (1994)",
  },
  {
    id: "sos-active-constructive",
    judul: "Merespons Kabar Baik dengan Tepat",
    kategori: "Komunikasi & Relasi",
    ikon: "🎉",
    ringkas: "Cara kita menanggapi KABAR BAIK orang terdekat sering lebih menentukan hubungan daripada saat menghibur kabar buruknya.",
    cerita:
      "Psikolog Shelly Gable menemukan hal yang mengejutkan: keintiman sebuah hubungan lebih diprediksi oleh cara kita merespons kabar gembira pasangan, bukan cuma cara kita menemani saat susah. Ia memetakan empat gaya tanggapan: aktif-konstruktif (antusias tulus dan menggali, 'wah, ceritakan semuanya!'), pasif-konstruktif (dingin, 'oh, bagus'), aktif-destruktif (langsung menohok sisi buruknya), dan pasif-destruktif (cuek lalu ganti topik). Hanya gaya aktif-konstruktif yang benar-benar mempererat; tiga sisanya diam-diam mendinginkan hubungan. Merayakan bersama, ternyata, lebih merekatkan daripada sekadar menghibur bersama.",
    analogi:
      "Seperti api kecil kebahagiaan yang dibawa pulang seseorang: kamu bisa meniupnya jadi besar dengan antusiasme, atau menyiramnya sampai padam dengan tanggapan datar. Sering sebuah hubungan retak bukan karena gagal saat susah, tapi karena gagal ikut senang saat senang.",
    penerapan: [
      "Saat orang terdekat berbagi kabar baik, berhenti sejenak dan tunjukkan antusiasme yang tulus.",
      "Ajukan pertanyaan menggali agar ia bisa menikmati ulang momen bahagianya.",
      "Tahan refleks 'mengingatkan sisi negatif'; simpan realisme untuk lain waktu.",
    ],
    sumber: "Shelly Gable (2004)",
  },
  {
    id: "sos-love-bombing",
    judul: "Love Bombing & Tanda Bahaya",
    kategori: "Komunikasi & Relasi",
    ikon: "🚩",
    ringkas: "Banjir perhatian & janji manis di awal hubungan bisa jadi tanda upaya mengontrol, bukan cinta.",
    cerita:
      "Istilah 'love bombing' berakar dari riset kelompok kultus pada 1970-an, tempat anggota baru dihujani kasih sayang berlebihan agar cepat terikat. Dalam hubungan romantis, polanya mirip: di minggu-minggu awal seseorang memberi hadiah bertubi, memuji berlebihan, menyebut 'kamu jodohku' terlalu cepat, dan menuntut kedekatan yang intens. Rasanya seperti dongeng — sampai hadiah itu perlahan berubah jadi tagihan berupa rasa bersalah, cemburu berlebih, dan kontrol atas siapa yang boleh kamu temui. Bukan berarti semua perhatian besar itu jahat; yang menjadi tanda bahaya adalah pola cepat-intens-menuntut yang membuatmu kehilangan ruang. Cinta yang sehat memberi tanpa mengikat; manipulasi memberi agar bisa mengendalikan.",
    analogi:
      "Seperti utang dengan bunga tersembunyi: 'gratisnya' di depan terasa manis, tapi cicilan kontrolnya baru terasa belakangan. Perhatian yang tulus tak pernah menagih kepatuhanmu sebagai balasannya.",
    penerapan: [
      "Perhatikan kecepatan: cinta sehat tumbuh bertahap, bukan meledak lalu menuntut komitmen kilat.",
      "Jaga batas & ruang pribadi; lihat reaksinya saat kamu berkata 'tidak' — di situ karakter aslinya terlihat.",
      "Percayai pola, bukan janji; tindakan yang konsisten dari waktu ke waktu lebih jujur daripada kata manis.",
      "Pertahankan teman & keluarga sebagai cermin; manipulator sering mulai dengan mengisolasimu dari mereka.",
    ],
    sumber: "Konsep dari riset kultus (1970-an); psikologi hubungan manipulatif",
  },
  {
    id: "sos-dunbar",
    judul: "Angka Dunbar (150 Relasi)",
    kategori: "Komunikasi & Relasi",
    ikon: "🔢",
    ringkas: "Otak manusia hanya sanggup memelihara sekitar 150 hubungan yang benar-benar bermakna sekaligus.",
    cerita:
      "Antropolog Robin Dunbar meneliti kaitan antara ukuran otak primata dan besar kelompok sosialnya, lalu menghitung perkiraan untuk manusia: sekitar 150 relasi stabil — angka yang berulang muncul dari suku pemburu, desa tua, sampai satuan militer. Relasi ini berlapis seperti bawang: kira-kira 5 orang terdekat, lalu 15 sahabat, 50 teman baik, dan 150 kenalan yang bermakna. Media sosial boleh memberimu ribuan 'teman', tapi kapasitas emosi & waktu kita tetap terbatas. Menyebar perhatian terlalu tipis hanya membuat semua hubungan terasa dangkal. Kualitas lingkaran terdekat jauh lebih menentukan kebahagiaan daripada banyaknya kontak.",
    analogi:
      "Seperti gelas yang kapasitasnya tetap: mau diisi berapa banyak nama pun, air perhatianmu segitu-segitu saja. Menuang ke seribu gelas kecil hanya membuat tak satu pun terisi penuh.",
    penerapan: [
      "Sadari 'lingkaran-5'-mu; sengaja rawat segelintir orang terpenting alih-alih memburu banyak kenalan.",
      "Jangan ukur kekayaan sosial dari jumlah pengikut, tapi dari kedalaman beberapa relasi inti.",
      "Rutin menyapa agar seseorang tetap di lingkaran dekat — hubungan butuh perawatan, bukan sekadar ada.",
    ],
    sumber: "Robin Dunbar (1992)",
  },
  // ------------------------------ Bias & Sesat Pikir -------------------------
  {
    id: "sos-halo-effect",
    judul: "Efek Halo",
    kategori: "Bias & Sesat Pikir",
    ikon: "😇",
    ringkas: "Satu kesan baik (misalnya wajah menarik) membuat kita mengira seseorang juga pintar, jujur, & kompeten.",
    cerita:
      "Psikolog Edward Thorndike (1920) meminta para komandan menilai anak buahnya, dan menemukan keanehan: prajurit yang dianggap berpenampilan baik & tegap otomatis juga dinilai lebih cerdas, lebih setia, dan lebih cakap — seolah satu sifat baik memancarkan 'cahaya' (halo) ke seluruh penilaian. Otak kita malas menilai tiap sifat secara terpisah, jadi mengambil jalan pintas: 'kalau satu bagus, mungkin semuanya bagus'. Itu sebabnya orang rupawan sering dikira lebih pandai, produk berkemasan mewah dikira lebih bermutu, dan pembicara yang percaya diri dikira lebih benar. Kesan pertama pun menjelma menjadi lensa yang mewarnai segalanya.",
    analogi:
      "Seperti menilai isi buku dari sampulnya yang mengkilap — sekali kita suka sampulnya, kita cenderung memaafkan halaman-halaman yang sebenarnya biasa saja.",
    penerapan: [
      "Saat terkesan pada seseorang, pisahkan penilaian: rupawan atau percaya diri belum tentu benar atau kompeten.",
      "Nilai bukti & rekam jejak satu per satu, bukan lewat kesan menyeluruh yang samar.",
      "Manfaatkan sisi baiknya: kesan pertama memang berpengaruh besar — rawatlah penampilanmu, tapi jangan mudah tertipu oleh milik orang lain.",
    ],
    sumber: "Edward Thorndike (1920)",
  },
  {
    id: "sos-fundamental-attribution",
    judul: "Kesalahan Atribusi Fundamental",
    kategori: "Bias & Sesat Pikir",
    ikon: "🫵",
    ringkas: "Kalau orang lain salah, kita bilang 'dasar orangnya'; kalau kita sendiri salah, kita bilang 'lagi apes'.",
    cerita:
      "Psikolog Lee Ross (1977) memberi nama pada kecenderungan yang sangat manusiawi ini: saat menjelaskan perilaku orang lain, kita terlalu cepat menuding wataknya dan terlalu abai pada keadaannya. Ada orang menyalip di jalan? 'Dasar tukang serobot!' — kita lupa mungkin ia sedang mengantar keluarga yang sakit. Tapi saat KITA yang menyalip, kita punya sejuta alasan situasional: buru-buru, terpaksa, sedang darurat. Riset Jones & Harris bahkan menunjukkan orang tetap menganggap sebuah tulisan mencerminkan pendapat asli penulisnya, walau tahu penulis itu cuma disuruh menulisnya. Kita jadi hakim yang keras bagi watak orang, tapi pengacara ulung bagi keadaan diri sendiri.",
    analogi:
      "Seperti wasit yang menganggap pelanggaran lawan itu 'main kasar', tapi pelanggaran timnya sendiri 'cuma kecelakaan'. Kacamata kita otomatis berat sebelah tergantung siapa pelakunya.",
    penerapan: [
      "Sebelum menghakimi, tanya: 'situasi apa yang mungkin membuat orang ini bertindak begitu?'",
      "Beri orang lain 'kemurahan konteks' yang biasa kamu berikan pada diri sendiri.",
      "Untuk dirimu, sesekali balik arah: jangan buru-buru menyalahkan keadaan, cek juga andil sikapmu.",
    ],
    sumber: "Lee Ross (1977); Jones & Harris (1967)",
  },
  {
    id: "sos-anchoring",
    judul: "Efek Jangkar (Anchoring)",
    kategori: "Bias & Sesat Pikir",
    ikon: "⚓",
    ringkas: "Angka pertama yang kita dengar diam-diam menjadi 'jangkar' yang menyeret semua perkiraan sesudahnya.",
    cerita:
      "Daniel Kahneman & Amos Tversky (1974) memutar sebuah roda angka yang sudah dicurangi (selalu berhenti di 10 atau 65) di depan peserta, lalu bertanya berapa persen negara Afrika di PBB. Anehnya, yang tadi melihat angka 65 menebak jauh lebih tinggi daripada yang melihat 10 — padahal angka pada roda itu jelas tak ada hubungannya sama sekali. Begitulah jangkar bekerja: begitu sebuah angka muncul, pikiran kita menyesuaikan diri di sekitarnya, bahkan bila angka itu ngawur. Inilah senjata utama dalam tawar-menawar, sebab harga pertama yang disebut membentuk seluruh perundingan. Penjual menuliskan 'harga coret' yang tinggi bukan tanpa alasan — itu jangkar agar diskonnya terasa besar.",
    analogi:
      "Seperti mata yang baru menatap cahaya terang lalu menilai ruangan biasa jadi terasa gelap — angka pertama menyetel 'ukuran normal' di kepala kita. Sekali jangkar terlempar, sulit menilai kembali dari titik nol.",
    penerapan: [
      "Dalam negosiasi, beranilah menyebut angka pertama yang masuk akal — kamu yang memasang jangkar.",
      "Kalau lawan menyebut angka ekstrem duluan, jangan cuma menawar dari situ; setel ulang dengan angkamu sendiri.",
      "Saat menaksir sesuatu, sadari angka apa yang baru saja kamu lihat — bisa jadi ia diam-diam menyetir tebakanmu.",
    ],
    sumber: "Tversky & Kahneman (1974)",
  },
  {
    id: "sos-framing",
    judul: "Efek Bingkai (Framing)",
    kategori: "Bias & Sesat Pikir",
    ikon: "🖼️",
    ringkas: "Fakta yang sama persis terasa berbeda tergantung 'dibingkai' sebagai keuntungan atau kerugian.",
    cerita:
      "Kahneman & Tversky (1981) menyodorkan pilihan pengobatan yang secara matematis identik, tapi dibingkai dengan kata berbeda. Saat sebuah tindakan disebut punya 'tingkat selamat 90%', orang berbondong memilihnya; saat tindakan yang sama disebut punya 'tingkat kematian 10%', banyak yang justru mundur — padahal artinya sama persis. Bingkai 'untung' cenderung membuat kita main aman, sedangkan bingkai 'rugi' membuat kita nekat mengambil risiko. Kata-kata bukan sekadar pembungkus; ia mengubah rasa sekaligus keputusan. Itu sebabnya label '95% bebas lemak' laku keras, sedangkan 'mengandung 5% lemak' terdengar tak menggugah — walau isinya sama.",
    analogi:
      "Seperti gelas berisi separuh: disebut 'masih setengah penuh' terasa menenangkan, disebut 'sudah setengah kosong' terasa mencemaskan — airnya sama, rasanya beda. Cara menuang kalimat mengubah rasa isinya.",
    penerapan: [
      "Saat ditawari sesuatu, coba bingkai ulang ke sisi sebaliknya: 'kalau ini disebut dari sisi ruginya, apa aku tetap tertarik?'",
      "Waspadai iklan & angka yang sengaja dibingkai memikat (diskon, persentase, kata 'gratis').",
      "Untuk memutuskan dengan adil, lihat data mentahnya, bukan cuma cara ia disajikan.",
    ],
    sumber: "Tversky & Kahneman (1981)",
  },
  {
    id: "sos-negativity-bias",
    judul: "Bias Negativitas",
    kategori: "Bias & Sesat Pikir",
    ikon: "📰",
    ringkas: "Satu kabar buruk melekat lebih kuat daripada sepuluh kabar baik — dan media tahu betul soal ini.",
    cerita:
      "Peneliti seperti Roy Baumeister merangkum ratusan studi dalam makalah berjudul lugas 'Bad is Stronger than Good' (2001): hal buruk meninggalkan jejak psikologis yang lebih dalam daripada hal baik yang setara. Satu kritik bisa menghapus lima pujian; satu pengalaman menakutkan tertanam bertahun-tahun. Ini sebagian warisan bertahan hidup — nenek moyang yang lebih waspada pada bahaya lebih besar peluangnya untuk selamat. Masalahnya, industri berita & media sosial memanen naluri ini dengan prinsip 'kalau berdarah, jadi berita utama'. Akibatnya kita mengira dunia jauh lebih menyeramkan daripada kenyataannya, semata karena yang buruk selalu terdengar lebih nyaring.",
    analogi:
      "Seperti setetes tinta hitam dalam segelas air jernih — sedikit saja, seluruh gelas ikut keruh. Otak kita memberi bobot ekstra pada yang gelap, sehingga sepuluh hal baik pun bisa kalah oleh satu hal buruk.",
    penerapan: [
      "Batasi asupan berita buruk; ikuti kabar secukupnya agar tak terbentuk pandangan dunia yang keliru suram.",
      "Saat menilai hari, orang, atau dirimu, sengaja hitung juga hal baik yang otak cenderung abaikan.",
      "Ingat rumus praktis relasi: butuh beberapa interaksi positif untuk menutup satu yang negatif — maka perbanyaklah yang positif.",
    ],
    sumber: "Baumeister dkk. (2001); Rozin & Royzman (2001)",
  },
];
