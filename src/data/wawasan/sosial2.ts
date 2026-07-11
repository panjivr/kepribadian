/**
 * Domain: Sosial 2 — perluasan perpustakaan ilmu tentang cara manusia saling
 * memengaruhi, berkomunikasi, mengatur waktu, dan mengelola uang. Tiap entri
 * dilengkapi cerita ringkas & analogi sehari-hari agar mudah dipahami siapa
 * pun. Konten edukatif.
 */
import type { Wawasan } from "@/data/wawasan";

export const SOSIAL2: Wawasan[] = [
  // ------------------------------- Sosial & Media ----------------------------
  {
    id: "s2-social-comparison",
    judul: "Teori Perbandingan Sosial",
    kategori: "Sosial & Media",
    ikon: "📊",
    ringkas: "Kita menilai diri bukan dari ukuran mutlak, melainkan dengan membandingkannya pada orang lain.",
    cerita:
      "Pada 1954, psikolog Leon Festinger mengajukan gagasan sederhana namun mendalam: manusia punya dorongan bawaan untuk menilai kemampuan dan pendapatnya, dan ketika tak ada ukuran objektif, kita memakai orang lain sebagai penggaris. Festinger membedakan dua arah: 'perbandingan ke atas' pada mereka yang lebih hebat, dan 'perbandingan ke bawah' pada mereka yang lebih di bawah. Perbandingan ke atas bisa memotivasi, tapi juga bisa membuat minder bila jaraknya terasa mustahil. Media sosial memperparahnya karena kita membandingkan keseharian kita yang biasa-biasa dengan potongan terbaik hidup orang lain. Gaji yang tadinya terasa cukup bisa mendadak terasa kecil begitu kita tahu berapa gaji teman seangkatan.",
    analogi:
      "Seperti anak yang senang dapat nilai 80 sampai ia tahu teman sebangkunya dapat 95 — angkanya tak berubah, tapi rasanya langsung anjlok. Penggaris kebahagiaan kita ternyata bukan diri sendiri, melainkan orang di sebelah.",
    penerapan: [
      "Sadari saat mood-mu turun tepat setelah melihat feed orang lain; itu tanda perbandingan ke atas sedang bekerja.",
      "Bandingkan dirimu hari ini dengan dirimu setahun lalu, bukan dengan versi terbaik orang lain.",
      "Kurasi lini masa: ikuti akun yang menyemangati, redam yang cuma memicu iri.",
    ],
    sumber: "Leon Festinger (1954)",
  },
  {
    id: "s2-social-loafing",
    judul: "Kemalasan Sosial (Social Loafing)",
    kategori: "Sosial & Media",
    ikon: "🪢",
    ringkas: "Makin banyak orang dalam satu tugas bersama, makin sedikit tenaga yang dikeluarkan tiap individu.",
    cerita:
      "Pada 1913, insinyur Prancis Max Ringelmann meminta orang menarik tali tambang, sendiri dan beramai-ramai, lalu mengukur tenaganya. Ia menemukan hal ganjil: makin besar kelompoknya, makin kecil tenaga rata-rata tiap orang — delapan orang tidak menarik sekuat delapan kali satu orang. Pada 1979, Latané, Williams, dan Harkins menamainya 'social loafing' dan membuktikannya lagi lewat eksperimen bertepuk tangan dan bersorak: dalam kelompok, tiap orang diam-diam mengendur. Sebabnya, tanggung jawab terasa menyebar dan usaha individu jadi tak kelihatan, sehingga otak bawah sadar berpikir 'toh ada yang lain'. Efek ini melemah saat kontribusi tiap orang bisa dilihat dan dihargai.",
    analogi:
      "Seperti kerja kelompok di sekolah yang ujungnya dikerjakan satu-dua anak saja, sementara sisanya numpang nama. Ketika keringat semua orang menyatu jadi satu angka, tak ada yang merasa keringatnya sendiri penting.",
    penerapan: [
      "Pecah tugas besar jadi bagian yang jelas pemiliknya — nama menempel pada hasil.",
      "Buat kontribusi tiap orang terlihat, misalnya lewat laporan singkat atau papan tugas bersama.",
      "Jaga tim tetap kecil; makin ramai, makin mudah orang bersembunyi di balik keramaian.",
    ],
    sumber: "Max Ringelmann (1913); Latane, Williams & Harkins (1979)",
  },
  {
    id: "s2-mere-exposure",
    judul: "Efek Sekadar Terpapar (Mere Exposure)",
    kategori: "Sosial & Media",
    ikon: "🔁",
    ringkas: "Semakin sering kita melihat sesuatu, semakin kita menyukainya — walau tak ada alasan lain.",
    cerita:
      "Pada 1968, psikolog Robert Zajonc menunjukkan bahwa keakraban saja bisa melahirkan rasa suka. Dalam eksperimennya, orang diperlihatkan kata-kata asing, wajah, dan simbol berulang kali; makin sering sebuah hal muncul, makin positif penilaian mereka terhadapnya. Yang menarik, efek ini bekerja bahkan ketika orang tak sadar pernah melihatnya. Otak kita cenderung menganggap yang familiar sebagai yang aman, dan yang aman terasa menyenangkan. Inilah alasan lagu yang awalnya biasa saja bisa jadi favorit setelah sering diputar, dan mengapa iklan rela tampil berulang-ulang meski tak menjual apa-apa saat itu.",
    analogi:
      "Seperti tetangga baru yang awalnya terasa asing, lalu setelah sering berpapasan dan bertukar senyum jadi terasa nyaman dan dekat. Bukan karena ia berubah, tapi karena wajahnya sudah jadi bagian dari duniamu yang familiar.",
    penerapan: [
      "Manfaatkan untuk hal baik: paparkan dirimu sedikit demi sedikit pada kebiasaan sehat sampai terasa akrab.",
      "Sadari saat kamu menyukai sebuah merek atau tokoh hanya karena sering melihatnya, bukan karena isinya.",
      "Untuk membangun relasi, perbanyak kehadiran ringan yang tulus; kedekatan sering lahir dari seringnya bertemu.",
    ],
    sumber: "Robert Zajonc (1968)",
  },
  {
    id: "s2-ingroup-outgroup",
    judul: "Kelompok Kita vs Kelompok Mereka",
    kategori: "Sosial & Media",
    ikon: "🚩",
    ringkas: "Otak begitu mudah membentuk 'kubu' — bahkan dari pembeda yang benar-benar sepele dan acak.",
    cerita:
      "Pada 1971, psikolog Henri Tajfel menguji seberapa gampang manusia terbelah menjadi kubu. Ia membagi peserta ke dalam dua kelompok berdasarkan hal remeh — misalnya konon lebih suka lukisan pelukis A atau B, padahal pembagiannya sebenarnya acak. Meski anggota tak saling kenal dan tak akan bertemu, mereka langsung cenderung memberi lebih banyak imbalan kepada 'kelompok sendiri' dan menahannya dari 'kelompok lain'. Tajfel menyebutnya paradigma kelompok minimal: identitas sekecil apa pun cukup untuk memicu keberpihakan. Dari sini lahir teori identitas sosial — kita mengambil rasa harga diri dari kelompok tempat kita merasa memiliki, lalu tanpa sadar merendahkan kelompok seberang.",
    analogi:
      "Seperti dua kelompok suporter bola yang saling ejek padahal sama-sama cinta pertandingan yang sama — cukup beda warna kaus untuk mengubah 'sesama penonton' jadi 'lawan'. Garis pembatasnya tipis, tapi begitu ditarik, kita langsung memihak.",
    penerapan: [
      "Saat merasa benci pada 'kubu sebelah', tanya: apakah aku menilai orangnya, atau sekadar labelnya?",
      "Cari identitas bersama yang lebih besar — 'sama-sama warga', 'sama-sama orang tua' — untuk memperlebar lingkaran 'kita'.",
      "Waspadai tokoh atau media yang untung dari memperuncing garis 'kita vs mereka'.",
    ],
    sumber: "Henri Tajfel (1971)",
  },
  {
    id: "s2-pratfall-effect",
    judul: "Efek Kikuk (Pratfall)",
    kategori: "Sosial & Media",
    ikon: "☕",
    ringkas: "Orang yang tampak sangat kompeten justru lebih disukai setelah melakukan blunder kecil.",
    cerita:
      "Pada 1966, psikolog Elliot Aronson bersama Willerman dan Floyd memperdengarkan rekaman seorang peserta kuis yang tampil sangat cerdas. Pada sebagian rekaman, di akhir sesi orang itu terdengar menumpahkan kopi ke bajunya sambil berseru kikuk. Anehnya, versi yang menumpahkan kopi justru dinilai lebih disukai daripada yang tampil sempurna tanpa cela. Kesalahan kecil membuat sang jagoan terasa lebih manusiawi dan mudah didekati. Tapi ada syaratnya: efek ini hanya bekerja untuk orang yang sudah dianggap cakap — bila orang biasa-biasa saja yang ceroboh, tumpahan kopi malah menurunkan penilaian.",
    analogi:
      "Seperti dosen brilian yang tiba-tiba salah sebut nama sendiri lalu tertawa — kelasnya justru makin sayang padanya. Kesempurnaan bikin kagum dari jauh; satu keceplosan kecil bikin dekat dari hati.",
    penerapan: [
      "Tak perlu berpura-pura sempurna; mengakui kesalahan kecil dengan santai justru menghangatkan relasi.",
      "Bila kamu memang kompeten, sesekali menunjukkan sisi manusiawi membuatmu lebih mudah didekati.",
      "Nilai orang dari pola besarnya, jangan langsung mencoret hanya karena satu kekikukan sepele.",
    ],
    sumber: "Aronson, Willerman & Floyd (1966)",
  },
  {
    id: "s2-scarcity-principle",
    judul: "Prinsip Kelangkaan (Scarcity)",
    kategori: "Sosial & Media",
    ikon: "⏳",
    ringkas: "Sesuatu terasa jauh lebih berharga dan diinginkan begitu ia menjadi langka atau terbatas.",
    cerita:
      "Psikolog Robert Cialdini memasukkan kelangkaan sebagai salah satu prinsip persuasi paling kuat: kita menilai peluang lebih tinggi saat ketersediaannya menyusut. Dalam sebuah eksperimen klasik oleh Worchel dan rekan (1975), orang menilai kue yang diambil dari toples nyaris kosong lebih enak dan lebih mahal daripada kue identik dari toples penuh. Padahal kuenya sama persis — yang berubah hanya kesan langkanya. Otak kita membaca 'tinggal sedikit' sebagai 'pasti bagus, makanya cepat habis', sekaligus takut kehilangan kesempatan. Karena itu label seperti 'stok terbatas', 'hanya hari ini', dan 'edisi khusus' begitu ampuh menggerakkan dompet.",
    analogi:
      "Seperti diskon 'flash sale tinggal 5 menit' yang membuat jantung berdebar dan jari cepat mengetuk 'beli', padahal barangnya belum tentu kamu butuh. Rasa takut ketinggalan sering berteriak lebih keras daripada akal sehat.",
    penerapan: [
      "Saat melihat 'terbatas' atau 'tinggal sedikit', berhenti sejenak: apakah aku ingin barangnya, atau cuma takut kehilangan?",
      "Pisahkan kualitas dari kelangkaan — langka tidak otomatis berarti bagus.",
      "Beri jeda waktu sebelum membeli sesuatu yang 'mendesak'; urgensi buatan biasanya luntur setelah semalam.",
    ],
    sumber: "Robert Cialdini, Influence (1984); Worchel dkk. (1975)",
  },

  // ----------------------------- Komunikasi & Relasi -------------------------
  {
    id: "s2-foot-in-the-door",
    judul: "Kaki di Pintu & Pintu di Muka",
    kategori: "Komunikasi & Relasi",
    ikon: "🚪",
    ringkas: "Permintaan kecil dulu membuka jalan untuk yang besar; permintaan besar yang ditolak membuat yang kecil terasa wajar.",
    cerita:
      "Pada 1966, Freedman dan Fraser menemukan taktik 'kaki di pintu': orang yang lebih dulu diminta menempel stiker kecil soal keselamatan berkendara jauh lebih bersedia, beberapa waktu kemudian, memasang papan besar yang jelek di halamannya. Setelah berkata 'ya' pada hal kecil, kita ingin tetap konsisten dengan diri yang sudah membantu. Cialdini kemudian menunjukkan taktik kebalikannya, 'pintu di muka': ajukan permintaan besar yang pasti ditolak, lalu turunkan ke permintaan yang sejak awal kamu incar. Setelah menolak yang besar, orang merasa tak enak dan permintaan kecil terasa seperti kompromi yang pantas dipenuhi. Keduanya bekerja karena kita ingin terlihat konsisten sekaligus tahu balas budi.",
    analogi:
      "Kaki di pintu seperti anak yang minta izin main lima menit dulu, lalu pelan-pelan jadi satu jam. Pintu di muka seperti pedagang yang menawar Rp100 ribu, ditolak, lalu berkata 'ya sudah Rp60 ribu' — angka yang sebenarnya sejak awal ia targetkan.",
    penerapan: [
      "Untuk mengubah kebiasaan, mulai dari langkah kecil yang mudah di-'ya'-kan, lalu tingkatkan bertahap.",
      "Sadari saat dirimu disetir: apakah kesediaanku sekarang berasal dari 'ya' kecil yang tadi kuberikan?",
      "Saat menawar atau bernegosiasi, pahami bahwa penawaran pertama sering sengaja dibuat ekstrem sebagai jangkar.",
    ],
    sumber: "Freedman & Fraser (1966); Cialdini dkk. (1975)",
  },
  {
    id: "s2-nvc-needs",
    judul: "Komunikasi Nirkekerasan & Kebutuhan",
    kategori: "Komunikasi & Relasi",
    ikon: "🕊️",
    ringkas: "Di balik setiap kemarahan tersembunyi kebutuhan yang tak terpenuhi — bicarakan kebutuhannya, bukan lemparkan tuduhan.",
    cerita:
      "Psikolog Marshall Rosenberg mengembangkan Komunikasi Nirkekerasan (Nonviolent Communication) setelah puluhan tahun menengahi konflik. Ia mengajarkan empat langkah: amati fakta tanpa menilai, akui perasaan, kenali kebutuhan di baliknya, lalu sampaikan permintaan yang jelas. Menurut Rosenberg, perasaan seperti marah dan kecewa adalah sinyal dari kebutuhan yang tak terpenuhi — dihargai, didengar, atau merasa aman. Masalahnya, kita sering melompat langsung ke celaan ('kamu egois!') alih-alih menamai kebutuhan ('aku butuh merasa diperhatikan'). Celaan memancing pembelaan diri, sedangkan kebutuhan yang jujur memancing empati. Kuncinya, ubah 'kamu selalu salah' menjadi 'aku merasa X karena butuh Y'.",
    analogi:
      "Seperti bayi menangis: tangisnya bukan untuk menyalahkan siapa pun, tapi menyampaikan bahwa ia lapar atau tak nyaman. Orang dewasa pun begitu — di balik omelan yang tajam, biasanya ada kebutuhan lembut yang belum terucap.",
    penerapan: [
      "Sebelum menyalahkan, tanya diri: kebutuhanku apa yang sedang tidak terpenuhi di sini?",
      "Urai konflik dengan pola: pengamatan fakta, perasaan, kebutuhan, lalu permintaan yang konkret.",
      "Dengarkan omelan orang lain sebagai kebutuhan yang tersamar, bukan sebagai serangan pada dirimu.",
    ],
    sumber: "Marshall Rosenberg, Nonviolent Communication (1999)",
  },
  {
    id: "s2-i-statements",
    judul: "Kalimat 'Aku' (I-Statements)",
    kategori: "Komunikasi & Relasi",
    ikon: "💬",
    ringkas: "Mulai dari 'aku merasa' alih-alih 'kamu selalu' — mengurangi pembelaan diri dan membuka percakapan.",
    cerita:
      "Psikolog Thomas Gordon mempopulerkan gagasan 'pesan-aku' dalam pelatihan komunikasinya pada 1970. Ia membedakan 'pesan-kamu' yang menuduh ('kamu tak pernah peduli!') dari 'pesan-aku' yang mengaku ('aku merasa sendirian kalau kita tak sempat mengobrol'). Pesan-kamu terdengar seperti vonis, sehingga lawan bicara otomatis membela diri atau balas menyerang. Pesan-aku menyampaikan pengalamanmu sendiri — dan pengalaman pribadi sulit dibantah, karena tak ada yang bisa berkata 'kamu tidak merasa begitu'. Polanya sederhana: sebut perilaku spesifik, dampaknya padamu, lalu perasaan yang muncul. Nadanya berubah dari sidang menjadi curhat, dan lawan bicara lebih mungkin mendengarkan.",
    analogi:
      "Seperti bedanya berkata 'kamu berisik banget!' dengan 'aku susah fokus kalau suaranya keras' — yang pertama memicu debat, yang kedua memicu pengertian. Jari yang menunjuk membuat orang mundur; tangan yang terbuka membuat orang mendekat.",
    penerapan: [
      "Ganti pembuka 'kamu selalu/tidak pernah' dengan 'aku merasa... ketika...'.",
      "Sebutkan perilaku konkret, bukan label karakter — 'kamu telat' lebih baik daripada 'kamu tak bertanggung jawab'.",
      "Akhiri dengan permintaan yang jelas, bukan sindiran, agar lawan bicara tahu langkah berikutnya.",
    ],
    sumber: "Thomas Gordon (1970)",
  },
  {
    id: "s2-active-listening",
    judul: "Mendengar Aktif (Active Listening)",
    kategori: "Komunikasi & Relasi",
    ikon: "👂",
    ringkas: "Mendengar sungguhan bukan menunggu giliran bicara, melainkan memantulkan kembali isi dan perasaan lawan.",
    cerita:
      "Pada 1957, psikolog Carl Rogers bersama Richard Farson menamai keterampilan 'mendengar aktif': menyimak bukan hanya kata, tetapi juga makna dan emosi di baliknya, lalu memantulkannya kembali agar si pembicara merasa benar-benar dipahami. Kebanyakan orang, kata Rogers, sebenarnya sedang menyusun bantahan sambil pura-pura mendengar. Mendengar aktif membalik itu: kita menahan penilaian, bertanya untuk memperjelas, dan meringkas ulang ('jadi kamu merasa kecewa karena tak dilibatkan, ya?'). Ketika seseorang merasa didengar tanpa dihakimi, pertahanannya turun dan ia lebih terbuka. Riset komunikasi berulang kali menunjukkan bahwa merasa 'didengar' adalah salah satu penyebab terbesar kepuasan dalam relasi.",
    analogi:
      "Seperti pantulan cermin yang jernih: lawan bicara melihat perasaannya sendiri dipantulkan kembali dengan utuh, dan itu menenangkan. Bandingkan dengan orang yang sibuk menyiapkan jawaban — telinganya terbuka, tapi hatinya sudah tutup.",
    penerapan: [
      "Sebelum menjawab, ringkas dulu apa yang kamu tangkap: 'kalau tidak salah, maksudmu...'.",
      "Tahan dorongan memberi solusi; sering orang cuma ingin dimengerti, bukan diperbaiki.",
      "Perhatikan perasaan di balik kata, lalu namai dengan lembut agar lawan merasa dipahami.",
    ],
    sumber: "Carl Rogers & Richard Farson (1957)",
  },
  {
    id: "s2-emotional-bank-account",
    judul: "Rekening Bank Emosi",
    kategori: "Komunikasi & Relasi",
    ikon: "🏦",
    ringkas: "Setiap relasi punya saldo kepercayaan — kebaikan menabung, pengkhianatan menarik, dan saldo menentukan ketahanannya.",
    cerita:
      "Dalam bukunya The 7 Habits (1989), Stephen Covey mengibaratkan tiap hubungan sebagai rekening bank berisi kepercayaan. Tindakan seperti menepati janji, meminta maaf tulus, mendengarkan, dan berbuat baik adalah 'setoran'. Sebaliknya, mengingkari janji, meremehkan, dan bersikap kasar adalah 'penarikan'. Ketika saldonya tinggi, satu kesalahan kecil mudah dimaafkan karena masih banyak simpanan kebaikan. Tapi bila saldonya sudah nyaris kosong, salah ucap sedikit saja bisa memicu pertengkaran besar. Covey menekankan bahwa dalam relasi, penarikan sering terasa jauh lebih besar daripada setoran, jadi kita perlu rajin menabung sebelum krisis datang.",
    analogi:
      "Seperti tabungan sungguhan: kalau isinya tebal, tarikan tak terduga tak bikin bangkrut; kalau kosong, tarik sedikit saja langsung minus. Relasi yang sering diisi kebaikan kecil punya bantalan untuk menahan gesekan yang tak terhindarkan.",
    penerapan: [
      "Rajin lakukan setoran kecil: menepati janji, ucapan terima kasih, perhatian tulus sehari-hari.",
      "Saat berbuat salah, segera minta maaf sungguh-sungguh — itu menambal penarikan sebelum menganga.",
      "Jangan tunggu hubungan retak baru berbenah; isi saldonya jauh sebelum badai datang.",
    ],
    sumber: "Stephen Covey, The 7 Habits of Highly Effective People (1989)",
  },
  {
    id: "s2-text-tone-overconfidence",
    judul: "Salah Baca Nada di Pesan Teks",
    kategori: "Komunikasi & Relasi",
    ikon: "📱",
    ringkas: "Kita yakin nada bercanda atau serius kita jelas lewat teks — padahal pembaca sering menebaknya seperti melempar koin.",
    cerita:
      "Pada 2005, Kruger, Epley, dan rekan menguji seberapa baik nada emosi tersampaikan lewat teks. Pengirim diminta menulis pesan bernada serius atau sarkastik, lalu menebak berapa banyak pembaca yang akan menangkap nadanya dengan benar; rata-rata mereka yakin sekitar 80 persen akan paham. Kenyataannya, pembaca hanya benar sekitar 50 persen — setara menebak lewat lemparan koin. Sebabnya 'egosentrisme': saat menulis, kepala kita sudah penuh nada dan niat, sehingga kita lupa bahwa pembaca hanya menerima kata-kata telanjang tanpa mimik, jeda, atau intonasi. Ironisnya, kita juga terlalu pede menganggap bisa menebak nada orang lain. Inilah biang banyak salah paham di chat dan email.",
    analogi:
      "Seperti mengirim pesan 'ya, bagus banget' — di kepalamu itu candaan hangat, tapi di layar penerima bisa terbaca sindiran dingin. Tanpa wajah dan nada suara, tulisan seperti lagu tanpa musik: liriknya sama, tapi rasanya bisa jauh berbeda.",
    penerapan: [
      "Untuk urusan sensitif, telepon atau bertemu langsung; teks mudah salah nada.",
      "Perjelas maksud dengan kata atau emoji penanda nada, jangan mengandalkan pembaca 'pasti paham'.",
      "Saat menerima pesan yang terasa menyakitkan, beri manfaat keraguan — mungkin nadanya tak seburuk yang kamu bayangkan.",
    ],
    sumber: "Kruger, Epley, Parker & Ng (2005)",
  },

  // --------------------------- Produktivitas & Waktu -------------------------
  {
    id: "s2-time-blocking",
    judul: "Memblok Waktu (Time-Blocking)",
    kategori: "Produktivitas & Waktu",
    ikon: "📅",
    ringkas: "Beri tiap tugas jadwal dan tempatnya sendiri di kalender, alih-alih memungutnya dari daftar tak berujung.",
    cerita:
      "Time-blocking adalah kebiasaan memberi setiap pekerjaan sepetak waktu yang pasti di kalender, bukan sekadar mendaftarnya di to-do list. Pendekatan ini punya akar tua — Benjamin Franklin sudah menyusun jadwal harian yang ketat pada abad ke-18 — dan kembali populer lewat penulis produktivitas seperti Cal Newport. Idenya: daftar tugas hanya memberi tahu 'apa', sedangkan blok waktu memaksa keputusan 'kapan' dan 'berapa lama'. Dengan begitu, pekerjaan penting mendapat tempat sebelum keriuhan hari menelannya, dan kita berhenti berpindah-pindah tugas tanpa arah. Blok waktu juga membuat kita realistis: begitu kalender penuh, terlihat jelas bahwa waktu memang terbatas dan tak semua bisa muat.",
    analogi:
      "Seperti mengisi toples dengan batu besar dulu baru pasir: kalau pasir (urusan receh) dimasukkan lebih dulu, batu (hal penting) tak lagi kebagian tempat. Kalender kosong itu toplesnya, dan blok waktu adalah caramu menaruh batu di awal.",
    penerapan: [
      "Tiap pagi atau malam sebelumnya, tempatkan tugas terpenting ke slot waktu nyata di kalender.",
      "Sisakan blok kosong untuk hal tak terduga; jadwal yang terlalu padat pasti meleset.",
      "Perlakukan blok itu seperti janji temu — hormati, jangan mudah digeser oleh gangguan.",
    ],
    sumber: "Dipopulerkan Cal Newport; praktik tua ala Benjamin Franklin",
  },
  {
    id: "s2-pomodoro",
    judul: "Teknik Pomodoro",
    kategori: "Produktivitas & Waktu",
    ikon: "🍅",
    ringkas: "Kerja fokus 25 menit lalu istirahat 5 menit — ritme sederhana yang menjinakkan tugas yang terasa berat.",
    cerita:
      "Pada akhir 1980-an, mahasiswa Italia bernama Francesco Cirillo kesulitan berkonsentrasi belajar, lalu menantang dirinya fokus dengan bantuan timer dapur berbentuk buah tomat — pomodoro dalam bahasa Italia. Ia menetapkan pola: 25 menit kerja penuh tanpa gangguan, lalu 5 menit istirahat, dan setelah empat putaran ambil jeda lebih panjang. Rahasianya, komitmen 25 menit terasa ringan sehingga menekan rasa malas untuk memulai, sekaligus jeda teratur mencegah kelelahan. Batas waktu yang berdetak juga menciptakan sedikit urgensi sehat yang menahan godaan membuka ponsel. Kini teknik ini dipakai jutaan pelajar dan pekerja untuk memecah pekerjaan besar menjadi porsi yang mudah ditelan.",
    analogi:
      "Seperti lari maraton yang dijalani dengan berhenti minum di tiap pos: bukan lari tanpa henti sampai tumbang, tapi berlari-istirahat berirama agar kuat sampai garis akhir. Tugas besar jadi tak menakutkan karena kamu cuma perlu bertahan 25 menit.",
    penerapan: [
      "Setel timer 25 menit, kerjakan satu tugas saja, lalu istirahat 5 menit sungguhan.",
      "Selama satu putaran, catat gangguan yang muncul di kertas dan urus nanti — jangan langsung dituruti.",
      "Setelah empat putaran, ambil jeda 15-30 menit untuk memulihkan tenaga.",
    ],
    sumber: "Francesco Cirillo (akhir 1980-an)",
  },
  {
    id: "s2-eat-the-frog",
    judul: "Telan Kataknya (Eat the Frog)",
    kategori: "Produktivitas & Waktu",
    ikon: "🐸",
    ringkas: "Kerjakan tugas terberat dan paling penting lebih dulu di pagi hari, sebelum apa pun mengalihkanmu.",
    cerita:
      "Penulis Brian Tracy memopulerkan nasihat ini lewat bukunya Eat That Frog! (2001), meminjam ucapan yang sering dikaitkan dengan Mark Twain: kalau tugasmu adalah menelan seekor katak, lakukan pagi-pagi, dan kalau ada dua, telan yang paling besar dulu. 'Katak' adalah tugas terbesar dan terpenting yang paling mudah kamu tunda-tunda. Dengan menuntaskannya di awal hari, saat energi dan tekad masih penuh, sisa hari terasa ringan dan bebas dari bayang-bayang tugas yang menggantung. Sebaliknya, bila hal berat terus ditunda, ia menguras pikiran seharian meski belum disentuh. Menyelesaikan yang tersulit lebih dulu juga memberi rasa menang yang mendorong momentum untuk tugas berikutnya.",
    analogi:
      "Seperti menyelesaikan soal ujian tersulit selagi otak masih segar, bukan menyisakannya di akhir saat sudah lelah dan panik. Begitu 'katak' tertelan, tak ada lagi yang menakutkan menunggu di piring.",
    penerapan: [
      "Malam sebelumnya, tentukan satu 'katak' — tugas terpenting yang paling ingin kamu hindari.",
      "Kerjakan katak itu pertama kali di pagi hari, sebelum membuka email atau media sosial.",
      "Kalau ada dua katak, telan yang terbesar dulu; sisanya akan terasa jauh lebih ringan.",
    ],
    sumber: "Brian Tracy, Eat That Frog! (2001)",
  },
  {
    id: "s2-two-list-focus",
    judul: "Strategi Dua Daftar",
    kategori: "Produktivitas & Waktu",
    ikon: "🎯",
    ringkas: "Tulis banyak tujuan, lingkari sedikit yang paling penting, lalu hindari sisanya seperti racun.",
    cerita:
      "Sebuah kisah populer — kerap dikaitkan dengan Warren Buffett meski keasliannya sendiri diragukan — menggambarkan strategi fokus yang tajam. Konon Buffett menyuruh seseorang menuliskan 25 tujuan kariernya, lalu melingkari 5 yang paling penting. Orang itu mengira 20 sisanya bisa dikerjakan sambil lalu di waktu senggang. Buffett justru mengoreksi: 20 tujuan yang tak dilingkari itu bukan prioritas kedua, melainkan 'daftar yang harus dihindari dengan segala cara', karena justru merekalah yang diam-diam mencuri waktu dari 5 hal terpenting. Inti pelajarannya jelas: musuh terbesar dari hal yang paling penting bukanlah kemalasan, melainkan hal-hal yang cukup penting tapi bukan yang utama.",
    analogi:
      "Seperti isi keranjang belanja yang penuh 'lumayan butuh' sampai uang habis sebelum sampai ke barang yang benar-benar dicari. Hal-hal setengah penting adalah pencuri paling licin karena mereka menyamar sebagai hal berguna.",
    penerapan: [
      "Tulis semua tujuan besarmu, lalu lingkari hanya beberapa yang paling menentukan.",
      "Perlakukan sisanya sebagai daftar 'jangan disentuh dulu', bukan cadangan waktu luang.",
      "Saat tergoda mengambil peluang baru, tanya: ini bagian dari 5 utama, atau pencuri fokus yang menyamar?",
    ],
    sumber: "Kisah populer dikaitkan dengan Warren Buffett (keasliannya diragukan)",
  },
  {
    id: "s2-bikeshedding",
    judul: "Efek Kandang Sepeda (Bikeshedding)",
    kategori: "Produktivitas & Waktu",
    ikon: "🚲",
    ringkas: "Rapat menghabiskan waktu berdebat soal hal sepele karena semua paham, dan melewati hal besar karena tak ada yang mengerti.",
    cerita:
      "Pada 1957, sejarawan C. Northcote Parkinson merumuskan 'hukum kesepelean': waktu yang dihabiskan sebuah komite untuk suatu perkara berbanding terbalik dengan besarnya biaya perkara itu. Ilustrasinya melegenda: sebuah komite menyetujui pembangunan reaktor nuklir bernilai jutaan dalam hitungan menit karena rumit dan sedikit yang paham, lalu berdebat panjang lebar soal warna kandang sepeda karyawan karena semua orang punya pendapat soal itu. Fenomena ini kini dikenal sebagai 'bikeshedding'. Sebabnya, hal sepele mudah dimengerti sehingga semua merasa berhak berkomentar, sedangkan hal besar terasa menakutkan sehingga orang diam. Akibatnya energi tim terkuras pada perkara remeh, sementara keputusan penting lolos tanpa pengawasan yang layak.",
    analogi:
      "Seperti rapat panitia acara yang berjam-jam berdebat soal warna spanduk, tapi cuma lima menit membahas anggaran yang bisa membuat acara bangkrut. Yang gampang dipahami menyedot semua suara; yang sulit malah dibiarkan lewat.",
    penerapan: [
      "Di rapat, tetapkan porsi waktu berdasarkan bobot masalah, bukan seberapa ramai orang berkomentar.",
      "Waspadai saat semua bersemangat soal detail kecil — mungkin hal besarnya sedang terabaikan.",
      "Untuk perkara sepele, tunjuk satu orang memutuskan; hemat forum untuk keputusan yang benar-benar berat.",
    ],
    sumber: "C. Northcote Parkinson (1957)",
  },

  // ---------------------------- Uang & Kelas Sosial --------------------------
  {
    id: "s2-diderot-effect",
    judul: "Efek Diderot (Spiral Belanja)",
    kategori: "Uang & Kelas Sosial",
    ikon: "🛋️",
    ringkas: "Satu barang baru yang bagus memicu rentetan pembelian lain agar segalanya terasa serasi.",
    cerita:
      "Namanya diambil dari filsuf Prancis Denis Diderot, yang menulis esai getir setelah menerima hadiah jubah merah mewah. Jubah barunya membuat perabot lamanya tampak kusam, maka ia mengganti kursi, lalu meja, lalu segalanya — hingga terjerat utang demi menyamai kemegahan sehelai jubah. Antropolog Grant McCracken menamai pola ini 'efek Diderot' pada 1988: memiliki sesuatu yang baru dan lebih baik sering memicu spiral konsumsi, karena barang baru menuntut 'teman' yang setara. Kepemilikan kita cenderung membentuk satu kesatuan identitas, dan satu unsur yang naik kelas membuat sisanya terasa tak pantas. Begitulah membeli satu ponsel baru bisa berujung pada casing, earbud, dan langganan yang tak pernah kamu rencanakan.",
    analogi:
      "Seperti membeli sepatu baru yang keren, lalu merasa baju lama tak lagi pantas, lanjut tas, lalu seluruh isi lemari — satu jubah menyeret satu rumah. Barang baru itu seperti kerikil yang jatuh ke kolam: riaknya menyebar ke mana-mana.",
    penerapan: [
      "Saat membeli sesuatu, waspadai dorongan 'melengkapi'; itu awal spiral, bukan kebutuhan.",
      "Terapkan aturan 'satu masuk, satu keluar' agar kepemilikan tak diam-diam membengkak.",
      "Beri jeda sebelum membeli pelengkap; sering keinginan itu memudar begitu euforia barang utama reda.",
    ],
    sumber: "Grant McCracken (1988), dari esai Denis Diderot",
  },
  {
    id: "s2-pay-yourself-first",
    judul: "Bayar Diri Sendiri Dulu",
    kategori: "Uang & Kelas Sosial",
    ikon: "💰",
    ringkas: "Sisihkan tabungan di awal begitu gaji datang, bukan menabung dari sisa yang biasanya tak pernah ada.",
    cerita:
      "Nasihat ini diperkenalkan luas oleh George S. Clason dalam The Richest Man in Babylon (1926) lewat prinsip 'sebagian dari semua yang kau hasilkan adalah milikmu untuk disimpan'. Tokohnya menyisihkan minimal sepersepuluh penghasilan lebih dulu, sebelum membayar apa pun yang lain. Kebanyakan orang melakukan kebalikannya: membayar semua kebutuhan dan keinginan dulu, lalu berharap menabung dari sisa — padahal 'sisa' hampir selalu nol karena pengeluaran memuai mengikuti pemasukan. Dengan membalik urutannya, tabungan menjadi tagihan pertama yang wajib dibayar, bukan renungan terakhir. Bila dibuat otomatis, cara ini bekerja diam-diam tanpa mengandalkan disiplin harian yang mudah goyah.",
    analogi:
      "Seperti mengambil bibit terbaik untuk ditanam sebelum panen dimakan habis — petani yang makan semua hasilnya tak punya apa-apa untuk musim depan. Menabung dari 'sisa' sama saja menunggu air surut di ember yang bocor.",
    penerapan: [
      "Begitu gaji masuk, langsung pindahkan porsi tabungan ke rekening terpisah.",
      "Otomatiskan lewat transfer terjadwal agar tak bergantung pada niat yang mudah luntur.",
      "Atur hidup dari uang yang tersisa setelah menabung, bukan sebaliknya.",
    ],
    sumber: "George S. Clason, The Richest Man in Babylon (1926)",
  },
  {
    id: "s2-emergency-fund",
    judul: "Logika Dana Darurat",
    kategori: "Uang & Kelas Sosial",
    ikon: "🛟",
    ringkas: "Simpanan setara beberapa bulan pengeluaran adalah bantalan yang mencegah kejutan hidup berubah jadi utang.",
    cerita:
      "Perencana keuangan lazim menyarankan menyimpan dana setara tiga hingga enam bulan biaya hidup dalam bentuk yang mudah dicairkan. Fungsinya bukan untuk diinvestasikan atau menghasilkan bunga besar, melainkan menjadi bantalan saat hal tak terduga menghantam — kehilangan pekerjaan, sakit, atau kendaraan mogok. Tanpa bantalan ini, satu kejutan kecil bisa memaksa orang berutang berbunga tinggi atau menjual aset di saat yang buruk, memicu efek domino keuangan. Dengan dana darurat, guncangan yang sama cukup diselesaikan dengan tenang tanpa merusak rencana jangka panjang. Yang tak kalah penting, keberadaannya memberi ketenangan pikiran yang membuat keputusan finansial lebih jernih, tidak panik.",
    analogi:
      "Seperti ban serep di bagasi: kamu berharap tak pernah memakainya, tapi saat ban bocor di tengah jalan, ia menyelamatkanmu dari terdampar. Hidup tanpa dana darurat seperti berkendara jauh tanpa serep — sekali kempis, langsung berhenti total.",
    penerapan: [
      "Hitung pengeluaran wajib bulananmu, lalu targetkan simpanan setara 3-6 bulan darinya.",
      "Simpan di tempat aman dan mudah dicairkan, terpisah dari rekening harian agar tak tergoda dipakai.",
      "Isi bertahap dari sisihan rutin; sedikit demi sedikit lebih baik daripada menunggu bisa sekaligus.",
    ],
    sumber: "Prinsip baku perencanaan keuangan pribadi",
  },
  {
    id: "s2-delayed-gratification",
    judul: "Menunda Kenikmatan (Uji Marshmallow)",
    kategori: "Uang & Kelas Sosial",
    ikon: "🍬",
    ringkas: "Kemampuan menahan godaan sekarang demi imbalan lebih besar nanti adalah otot penting bagi keuangan sehat.",
    cerita:
      "Pada awal 1970-an, psikolog Walter Mischel di Stanford menaruh seorang anak sendirian bersama satu marshmallow, dengan janji: bila mau menunggu sekitar 15 menit tanpa memakannya, ia akan mendapat dua. Sebagian anak langsung melahap, sebagian lagi berjuang mengalihkan perhatian sampai berhasil menunggu. Studi lanjutan mengesankan bahwa anak yang mampu menunggu cenderung punya hasil hidup lebih baik, meski penelitian ulang pada 2018 oleh Watts dan rekan menunjukkan efeknya lebih kecil dan banyak dipengaruhi latar belakang keluarga. Terlepas dari perdebatan itu, intinya tetap relevan: menunda kenikmatan kecil hari ini demi imbalan lebih besar di masa depan adalah keterampilan yang bisa dilatih. Dalam urusan uang, otot inilah yang membedakan antara menabung-berinvestasi dan menghabiskan segalanya begitu diterima.",
    analogi:
      "Seperti memilih menyimpan sebagian THR alih-alih membelanjakannya habis di hari pertama — kenikmatan yang ditahan hari ini bisa tumbuh jadi kelegaan yang lebih besar esok. Godaan itu satu marshmallow di depan mata; masa depan itu marshmallow kedua yang belum terlihat.",
    penerapan: [
      "Beri jeda antara keinginan dan pembelian; tunda 24 jam untuk membedakan butuh dari sekadar mau.",
      "Alihkan perhatian dari godaan seperti anak yang menutup mata — jauhkan pemicu, bukan sekadar menahan diri.",
      "Buat imbalan masa depan terasa nyata, misalnya menamai tabungan sesuai tujuannya agar lebih mudah bersabar.",
    ],
    sumber: "Walter Mischel (1972); replikasi Watts dkk. (2018)",
  },
  {
    id: "s2-diversification",
    judul: "Diversifikasi (Jangan Taruh Semua Telur di Satu Keranjang)",
    kategori: "Uang & Kelas Sosial",
    ikon: "🧺",
    ringkas: "Menyebar simpanan ke berbagai tempat menekan risiko tanpa harus mengorbankan hasil secara sepadan.",
    cerita:
      "Pada 1952, ekonom Harry Markowitz meletakkan dasar teori portofolio modern yang kelak membuatnya meraih Nobel. Ia membuktikan secara matematis bahwa menggabungkan aset yang tidak bergerak seragam bisa menurunkan risiko keseluruhan tanpa harus memangkas imbal hasil sebanyak itu — sesuatu yang sering disebut satu-satunya 'makan siang gratis' dalam investasi. Idenya menerjemahkan pepatah tua 'jangan taruh semua telur di satu keranjang' menjadi ilmu. Bila semua uangmu di satu tempat dan tempat itu ambruk, kamu habis; bila tersebar, kejatuhan satu aset diredam oleh yang lain. Kuncinya bukan asal banyak, tetapi memilih hal-hal yang tidak jatuh berbarengan, sehingga saat satu turun yang lain bisa menahan.",
    analogi:
      "Seperti pedagang yang tak hanya menjual es saat kemarau, tapi juga payung saat hujan — apa pun cuacanya, selalu ada yang laku. Menaruh seluruh nasib pada satu barang berarti bertaruh cuaca tak pernah berubah.",
    penerapan: [
      "Jangan tanam seluruh dana pada satu jenis aset, satu perusahaan, atau satu peluang.",
      "Pilih hal-hal yang risikonya tak searah agar tak jatuh bersamaan saat keadaan memburuk.",
      "Ingat: diversifikasi meredam guncangan, bukan menghapus risiko — tetap pahami apa yang kamu miliki.",
    ],
    sumber: "Harry Markowitz (1952)",
  },
];
