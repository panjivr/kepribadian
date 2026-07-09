import type { ItemLikertDimensi } from "@/lib/skoring";

/**
 * "Peta Bakat Djiva" — asesmen penemuan kekuatan ORIGINAL & GRATIS yang fungsinya
 * serupa pendekatan strengths-based (a la CliftonStrengths®), tetapi:
 *  - nama tema, deskripsi, dan seluruh butir soal ORISINAL (bukan salinan 34 tema
 *    Gallup® maupun soal resminya) sehingga bebas dipakai gratis & legal;
 *  - konsep dasar (bakat = pola pikir/rasa/laku yang berulang & produktif, lalu
 *    dikelompokkan ke domain) adalah gagasan psikologi umum, bukan hak cipta.
 * 24 tema dikelompokkan ke 4 domain kerja. Bukan afiliasi Gallup.
 */

export type BakatDomain = "eksekusi" | "pengaruh" | "relasi" | "strategis";

export interface DomainInfo {
  nama: string;
  julukan: string;
  inti: string;
  warna: string;
}

export const BAKAT_DOMAIN: Record<BakatDomain, DomainInfo> = {
  eksekusi: {
    nama: "Eksekusi",
    julukan: "Sang Pelaksana",
    inti: "Mewujudkan ide menjadi kenyataan dan menuntaskannya. Orang dengan domain ini tahu cara membereskan pekerjaan.",
    warna: "#30d158",
  },
  pengaruh: {
    nama: "Pengaruh",
    julukan: "Sang Penggerak",
    inti: "Mengambil alih, bersuara, dan memastikan gagasan tim didengar. Mereka menjangkau orang lebih luas.",
    warna: "#ff9f0a",
  },
  relasi: {
    nama: "Membangun Relasi",
    julukan: "Sang Perekat",
    inti: "Merekatkan tim menjadi lebih dari sekadar jumlah anggotanya. Mereka menjaga manusia tetap terhubung.",
    warna: "#3b82f6",
  },
  strategis: {
    nama: "Berpikir Strategis",
    julukan: "Sang Pemikir",
    inti: "Menyerap dan menganalisis informasi untuk membuat keputusan yang lebih baik. Mereka menjaga tim fokus pada masa depan.",
    warna: "#8b5cf6",
  },
};

export const BAKAT_DOMAIN_URUTAN: BakatDomain[] = [
  "eksekusi",
  "pengaruh",
  "relasi",
  "strategis",
];

export interface BakatTema {
  id: string;
  nama: string;
  domain: BakatDomain;
  ringkas: string;
  deskripsi: string;
  caraPakai: string;
  bilaBerlebihan: string;
}

export const BAKAT_TEMA: BakatTema[] = [
  // ---------------------------- EKSEKUSI ----------------------------
  { id: "penuntas", nama: "Penuntas", domain: "eksekusi", ringkas: "Dorongan kuat menyelesaikan apa yang dimulai.", deskripsi: "Kamu punya 'api' dalam diri untuk merampungkan tugas. Daftar yang tercoret memberi kepuasan nyata, dan kamu bisa terus produktif bahkan saat orang lain sudah lelah.", caraPakai: "Ambil peran yang butuh hasil terukur & tenggat. Pecah proyek besar menjadi checklist agar 'api'-mu terus menyala.", bilaBerlebihan: "Bisa jadi workaholic dan sulit merayakan pencapaian sebelum mengejar target berikutnya." },
  { id: "penata", nama: "Penata", domain: "eksekusi", ringkas: "Mengatur banyak hal bergerak menjadi satu sistem efisien.", deskripsi: "Kamu melihat bagaimana sumber daya, orang, dan jadwal bisa disusun ulang untuk hasil terbaik. Kekacauan justru memicu insting menatamu.", caraPakai: "Cocok mengurus logistik, event, atau proyek dengan banyak variabel. Kamu jago beradaptasi saat rencana berubah mendadak.", bilaBerlebihan: "Orang lain bisa merasa terus-menerus 'diatur ulang' olehmu." },
  { id: "penjaga_irama", nama: "Penjaga-Irama", domain: "eksekusi", ringkas: "Rutinitas, struktur, dan konsistensi yang dapat diandalkan.", deskripsi: "Kamu bekerja paling baik dengan alur yang jelas dan tenggat yang pasti. Struktur bukan kekakuan bagimu — ia adalah rel yang membuatmu melaju.", caraPakai: "Bangun sistem & SOP yang bisa dipakai ulang orang lain. Kamu adalah jangkar stabilitas di tim yang serba spontan.", bilaBerlebihan: "Perubahan mendadak terasa sangat mengganggu; hati-hati menolak hal baru terlalu cepat." },
  { id: "pengemban", nama: "Pengemban", domain: "eksekusi", ringkas: "Rasa tanggung jawab mendalam untuk menepati janji.", deskripsi: "Sekali kamu berkata 'ya', kamu merasa terikat secara psikologis sampai tuntas. Orang mempercayakan hal penting padamu karena tahu kamu tak akan lari.", caraPakai: "Jadilah pemilik (owner) tugas kritis. Reputasi keandalanmu adalah aset karier terbesarmu.", bilaBerlebihan: "Sulit berkata 'tidak' hingga kelebihan beban; belajar mendelegasikan." },
  { id: "pembenah", nama: "Pembenah", domain: "eksekusi", ringkas: "Melihat yang rusak lalu terdorong memperbaikinya.", deskripsi: "Masalah tidak membuatmu panik — ia menyalakan energimu. Kamu senang membongkar, menemukan akar, dan mengembalikan sesuatu berfungsi.", caraPakai: "Cari peran troubleshooting, QA, atau turnaround. Kamu pahlawan saat krisis.", bilaBerlebihan: "Bisa terlalu fokus pada masalah hingga lupa merayakan yang sudah berjalan baik." },
  { id: "peneliti_risiko", nama: "Peneliti-Risiko", domain: "eksekusi", ringkas: "Berhati-hati, menimbang risiko sebelum melangkah.", deskripsi: "Kamu tidak mudah terbawa euforia. Sebelum memutuskan, kamu diam-diam memetakan apa yang bisa salah — dan itu menyelamatkan tim berkali-kali.", caraPakai: "Jadilah 'rem' bijak di tim yang penuh gas. Peranmu vital di bidang berisiko tinggi: hukum, keuangan, keselamatan.", bilaBerlebihan: "Bisa terlihat pesimis atau lambat mengambil peluang." },

  // ---------------------------- PENGARUH ----------------------------
  { id: "pemantik", nama: "Pemantik", domain: "pengaruh", ringkas: "Mengubah pikiran menjadi gerakan — mulai sekarang.", deskripsi: "Bagimu, aksi adalah guru terbaik. Kamu tidak sabar berdiskusi tanpa akhir; kamu ingin mencoba, belajar dari hasilnya, lalu menyesuaikan.", caraPakai: "Jadi pemicu di tim yang macet dalam analisis. Kamu memberi momentum awal yang sering paling sulit.", bilaBerlebihan: "Bisa melompat bertindak sebelum cukup berpikir." },
  { id: "pengarah", nama: "Pengarah", domain: "pengaruh", ringkas: "Nyaman mengambil komando dan membuat keputusan.", deskripsi: "Kamu tidak takut menyampaikan pendapat yang tidak populer atau mengambil alih saat situasi kacau. Kehadiranmu memberi kejelasan.", caraPakai: "Ambil peran kepemimpinan yang butuh keputusan tegas. Kamu meyakinkan orang di masa tak pasti.", bilaBerlebihan: "Bisa terkesan dominan atau mengintimidasi tanpa sadar." },
  { id: "perangkul_baru", nama: "Perangkul-Baru", domain: "pengaruh", ringkas: "Mudah mencairkan suasana & menaklukkan orang asing.", deskripsi: "Bertemu orang baru memberimu energi, bukan menguras. Kamu menikmati tantangan mengubah orang asing menjadi kenalan yang hangat.", caraPakai: "Cocok di peran yang menjangkau publik: sales, PR, networking, komunitas. Kamu pembuka pintu.", bilaBerlebihan: "Relasi bisa jadi luas tapi dangkal; sisihkan waktu untuk kedalaman." },
  { id: "perangkai_kata", nama: "Perangkai-Kata", domain: "pengaruh", ringkas: "Menghidupkan ide dan menjelaskannya dengan memikat.", deskripsi: "Kamu mengubah fakta kering menjadi cerita yang menempel di kepala. Orang mengingat pesan saat kamu yang menyampaikannya.", caraPakai: "Ambil peran presentasi, pemasaran, mengajar, atau kampanye. Suaramu memperkuat gagasan tim.", bilaBerlebihan: "Waspada mengutamakan gaya di atas substansi." },
  { id: "pemuncak", nama: "Pemuncak", domain: "pengaruh", ringkas: "Terpacu bersaing dan mengukur diri vs standar tertinggi.", deskripsi: "Kamu butuh papan skor. Membandingkan performa dengan orang lain bukan soal iri — itu bahan bakar yang mendorongmu ke posisi teratas.", caraPakai: "Cari lingkungan dengan ukuran & peringkat jelas. Kamu mengangkat standar seluruh tim.", bilaBerlebihan: "Bisa kecewa berlebihan saat kalah, atau meremehkan kolaborasi." },
  { id: "pengangkat", nama: "Pengangkat", domain: "pengaruh", ringkas: "Mengubah yang sudah baik menjadi luar biasa.", deskripsi: "Kamu tidak puas dengan 'lumayan'. Insting alamimu adalah memoles kekuatan yang ada — pada diri, orang, atau produk — hingga bersinar maksimal.", caraPakai: "Fokuskan energi pada memaksimalkan keunggulan, bukan menambal kelemahan. Cocok jadi mentor & kurator kualitas.", bilaBerlebihan: "Bisa perfeksionis dan tak sabar dengan hal yang biasa-biasa saja." },

  // ---------------------------- RELASI ----------------------------
  { id: "perasa", nama: "Perasa", domain: "relasi", ringkas: "Menangkap emosi orang lain seolah merasakannya sendiri.", deskripsi: "Kamu membaca isyarat halus — nada suara, bahasa tubuh, hal yang tak terucap. Orang merasa benar-benar dipahami di dekatmu.", caraPakai: "Jadi jembatan di momen sensitif: konseling, HR, layanan, mediasi. Kepekaanmu membuat orang aman.", bilaBerlebihan: "Bisa kewalahan menyerap emosi orang; jaga batas agar tak burnout." },
  { id: "penyelaras", nama: "Penyelaras", domain: "relasi", ringkas: "Mencari titik temu dan meredam gesekan sia-sia.", deskripsi: "Kamu percaya sedikit yang bisa dicapai lewat konflik. Naluri alamimu menurunkan tensi dan mencari kesepakatan yang bisa diterima semua pihak.", caraPakai: "Jadi perekat di tim yang panas. Kamu jago menemukan zona 'sama-sama menang'.", bilaBerlebihan: "Bisa menghindari konflik penting yang sebenarnya perlu dihadapi." },
  { id: "pemersatu", nama: "Pemersatu", domain: "relasi", ringkas: "Merangkul yang terpinggirkan — semua harus ikut serta.", deskripsi: "Kamu peka pada siapa yang tertinggal di luar lingkaran, dan terdorong menariknya masuk. Bagimu, lingkaran selalu bisa diperluas.", caraPakai: "Bangun budaya inklusif & tim yang beragam. Kamu membuat orang merasa diterima apa adanya.", bilaBerlebihan: "Bisa sulit membuat keputusan yang terpaksa mengeksklusi sebagian orang." },
  { id: "penumbuh", nama: "Penumbuh", domain: "relasi", ringkas: "Melihat potensi orang lain lalu memupuknya.", deskripsi: "Kamu mendapat kepuasan mendalam saat menyaksikan orang lain berkembang. Kemajuan kecil orang lain pun kamu rayakan dengan tulus.", caraPakai: "Jadi mentor, pelatih, guru, atau pemimpin tim. Kamu mencetak orang, bukan sekadar hasil.", bilaBerlebihan: "Bisa terlalu sabar pada orang yang sebenarnya tak mau berubah." },
  { id: "pengikat", nama: "Pengikat", domain: "relasi", ringkas: "Kedalaman relasi dengan lingkaran dekat yang terpilih.", deskripsi: "Kamu tak butuh banyak teman — kamu butuh teman yang dalam. Sekali seseorang masuk lingkaranmu, kesetiaanmu nyaris tanpa syarat.", caraPakai: "Bangun kepercayaan jangka panjang di tim inti. Kamu mitra yang bisa diandalkan bertahun-tahun.", bilaBerlebihan: "Bisa terlihat eksklusif atau sulit didekati orang baru." },
  { id: "pencerah", nama: "Pencerah", domain: "relasi", ringkas: "Optimisme dan energi positif yang menular.", deskripsi: "Kamu membawa cahaya ke ruangan. Kemampuanmu melihat sisi baik dan merayakan hal kecil membuat orang di sekitarmu lebih bersemangat.", caraPakai: "Jadi penggerak moral tim, terutama di masa sulit. Antusiasmemu adalah bahan bakar kolektif.", bilaBerlebihan: "Bisa dianggap tak realistis; validasi dulu perasaan orang sebelum menyemangati." },

  // ---------------------------- STRATEGIS ----------------------------
  { id: "penganalisa", nama: "Penganalisa", domain: "strategis", ringkas: "Menuntut bukti dan membedah sebab-akibat.", deskripsi: "Kamu tidak menerima klaim mentah-mentah. Pertanyaan 'apa buktinya?' otomatis muncul, dan kamu piawai menemukan pola di balik data.", caraPakai: "Cocok di riset, keuangan, data, atau strategi. Kamu penjaga tim dari keputusan berdasar asumsi.", bilaBerlebihan: "Bisa membuat orang merasa terus 'diinterogasi' atau memperlambat keputusan." },
  { id: "perancang_jalur", nama: "Perancang-Jalur", domain: "strategis", ringkas: "Melihat banyak jalan sekaligus lalu memilih rute terbaik.", deskripsi: "Di hadapan situasi rumit, otakmu otomatis membuat percabangan 'kalau ini, maka itu'. Kamu cepat menyingkirkan jalan buntu dan menemukan lintasan tercepat.", caraPakai: "Jadi perancang strategi & antisipasi. Kamu melihat beberapa langkah ke depan seperti pecatur.", bilaBerlebihan: "Sulit menjelaskan 'lompatan' logikamu ke orang lain yang berpikir linear." },
  { id: "pembelajar", nama: "Pembelajar", domain: "strategis", ringkas: "Menikmati proses menguasai hal baru itu sendiri.", deskripsi: "Bagimu, kegembiraan ada pada perjalanan dari 'tidak tahu' menuju 'menguasai'. Topik baru adalah undangan, bukan beban.", caraPakai: "Cocok di bidang yang cepat berubah & menuntut belajar terus. Kamu cepat naik ke keahlian baru.", bilaBerlebihan: "Bisa mengejar terlalu banyak hal baru tanpa memperdalam satu pun." },
  { id: "pengumpul", nama: "Pengumpul", domain: "strategis", ringkas: "Haus informasi dan senang mengarsipkan pengetahuan.", deskripsi: "Kamu mengoleksi ide, artikel, fakta, dan sumber daya karena 'suatu saat berguna'. Kamu adalah perpustakaan hidup yang orang datangi saat butuh referensi.", caraPakai: "Jadi sumber pengetahuan tim & kurator informasi. Rasa ingin tahumu memperkaya keputusan.", bilaBerlebihan: "Bisa menimbun tanpa mengeksekusi; ubah koleksi jadi aksi." },
  { id: "perenung", nama: "Perenung", domain: "strategis", ringkas: "Senang berpikir mendalam — aktivitas mental itu memuaskan.", deskripsi: "Kamu butuh waktu menyendiri untuk memproses. Percakapan di dalam kepalamu sama hidupnya dengan percakapan di luar. Ide matang lewat perenungan.", caraPakai: "Beri dirimu ruang berpikir tanpa gangguan. Kamu penyumbang gagasan yang dalam & orisinal.", bilaBerlebihan: "Bisa terjebak overthinking atau terlihat menarik diri." },
  { id: "penerawang", nama: "Penerawang", domain: "strategis", ringkas: "Tertarik pada masa depan dan visi yang memikat.", deskripsi: "Gambaran 'apa yang mungkin terjadi' menyalakan semangatmu. Kamu bisa melukis masa depan begitu jelas hingga orang lain ikut ingin mewujudkannya.", caraPakai: "Jadi pembawa visi & arah jangka panjang. Kamu menginspirasi tim dengan gambaran besar.", bilaBerlebihan: "Bisa kurang membumi pada langkah konkret hari ini." },
];

export const TEMA_INFO: Record<string, BakatTema> = Object.fromEntries(
  BAKAT_TEMA.map((t) => [t.id, t])
);

/** 48 butir — 2 per tema, semua dengan analogi (bantuan) agar tak ada salah tafsir. */
export const BAKAT_ITEMS: (ItemLikertDimensi & { dim: string; bantuan: string })[] = [
  { no: 1, dim: "penuntas", teks: "Mencoret tugas dari daftar memberi saya kepuasan yang nyata.", bantuan: "Analogi: seperti pelari yang justru makin bersemangat di putaran terakhir — garis finis memanggilmu." },
  { no: 2, dim: "penuntas", teks: "Saya sulit tenang sebelum pekerjaan benar-benar tuntas.", bantuan: "Contoh: kamu rela begadang sedikit demi menyelesaikan laporan hari ini daripada menyisakannya untuk besok." },
  { no: 3, dim: "penata", teks: "Saat banyak hal berjalan sekaligus, saya justru pandai menyusunnya jadi rapi.", bantuan: "Seperti dirigen orkestra: banyak alat musik, tapi kamu tahu kapan tiap bagian harus masuk." },
  { no: 4, dim: "penata", teks: "Saya sering menemukan cara mengatur ulang sesuatu agar lebih efisien.", bantuan: "Contoh: kamu menata ulang alur kerja tim agar tak ada langkah yang mubazir." },
  { no: 5, dim: "penjaga_irama", teks: "Saya bekerja paling baik dengan rutinitas dan jadwal yang jelas.", bantuan: "Analogi: seperti kereta yang melaju kencang justru karena ada rel — struktur membuatmu cepat, bukan kaku." },
  { no: 6, dim: "penjaga_irama", teks: "Saya suka membuat sistem yang bisa dipakai berulang kali.", bantuan: "Contoh: kamu membuat template atau checklist agar pekerjaan serupa berikutnya lebih mudah." },
  { no: 7, dim: "pengemban", teks: "Sekali saya berjanji, saya merasa wajib menepatinya apa pun yang terjadi.", bantuan: "Seperti kunci yang sudah dititipkan — orang tenang karena tahu kamu tak akan mengecewakan." },
  { no: 8, dim: "pengemban", teks: "Orang mempercayakan tugas penting kepada saya karena tahu saya andal.", bantuan: "Contoh: saat ada hal krusial, nama kamu yang pertama disebut sebagai penanggung jawab." },
  { no: 9, dim: "pembenah", teks: "Menemukan masalah untuk diperbaiki justru menyalakan energi saya.", bantuan: "Analogi: seperti dokter yang tenang saat pasien datang — masalah adalah panggilanmu, bukan ancaman." },
  { no: 10, dim: "pembenah", teks: "Saya senang membongkar sesuatu yang rusak untuk menemukan akar penyebabnya.", bantuan: "Contoh: saat aplikasi error, kamu betah menelusuri satu per satu sampai ketemu biang keroknya." },
  { no: 11, dim: "peneliti_risiko", teks: "Sebelum memutuskan, saya otomatis memikirkan apa yang bisa salah.", bantuan: "Seperti pengemudi yang selalu cek spion & titik buta — kehati-hatian menyelamatkanmu dari celaka." },
  { no: 12, dim: "peneliti_risiko", teks: "Saya lebih suka melangkah pasti daripada cepat tapi gegabah.", bantuan: "Contoh: kamu membaca semua syarat sebelum tanda tangan, sementara yang lain langsung menandatangani." },
  { no: 13, dim: "pemantik", teks: "Saya lebih suka langsung mencoba daripada berdiskusi berlama-lama.", bantuan: "Analogi: kamu belajar berenang dengan nyemplung, bukan dengan membaca buku renang seharian." },
  { no: 14, dim: "pemantik", teks: "Saya sering menjadi orang yang memulai gerakan saat tim mandek.", bantuan: "Contoh: rapat buntu, lalu kamu bilang 'ya sudah, kita coba versi kecilnya minggu ini' — dan tim bergerak." },
  { no: 15, dim: "pengarah", teks: "Saya nyaman mengambil alih kendali saat situasi tidak jelas.", bantuan: "Seperti kapten saat badai: orang butuh satu suara tegas, dan kamu bersedia menjadinya." },
  { no: 16, dim: "pengarah", teks: "Saya tidak takut menyampaikan pendapat meski tidak populer.", bantuan: "Contoh: kamu berani berkata 'menurut saya ini keliru' di ruangan yang semua setuju." },
  { no: 17, dim: "perangkul_baru", teks: "Bertemu orang baru memberi saya energi, bukan menguras.", bantuan: "Analogi: bagi sebagian orang acara ramai itu melelahkan; bagimu itu seperti mengisi baterai." },
  { no: 18, dim: "perangkul_baru", teks: "Saya mudah mengubah orang asing menjadi kenalan yang akrab.", bantuan: "Contoh: baru 10 menit di antrean, kamu sudah ngobrol hangat dengan orang di sebelahmu." },
  { no: 19, dim: "perangkai_kata", teks: "Saya pandai menjelaskan ide rumit menjadi mudah dipahami.", bantuan: "Seperti penerjemah: kamu mengubah 'bahasa ahli' menjadi 'bahasa manusia' yang menempel di kepala." },
  { no: 20, dim: "perangkai_kata", teks: "Orang mudah mengingat pesan ketika saya yang menyampaikannya.", bantuan: "Contoh: setelah presentasimu, orang masih mengutip satu kalimatmu berminggu-minggu kemudian." },
  { no: 21, dim: "pemuncak", teks: "Membandingkan hasil saya dengan orang lain memacu saya lebih keras.", bantuan: "Analogi: papan peringkat game membuatmu ketagihan naik level — kompetisi itu bahan bakarmu." },
  { no: 22, dim: "pemuncak", teks: "Menjadi 'yang terbaik' penting bagi saya, bukan sekadar ikut serta.", bantuan: "Contoh: 'yang penting ikut' terasa kurang; kamu ingin menang atau mencapai hasil terbaik." },
  { no: 23, dim: "pengangkat", teks: "Saya lebih suka memoles kekuatan yang sudah ada daripada menambal kelemahan.", bantuan: "Seperti pemahat: kamu mengasah bagian yang sudah bagus menjadi karya, bukan sibuk menutupi cacat." },
  { no: 24, dim: "pengangkat", teks: "'Cukup baik' terasa kurang; saya terdorong membuat sesuatu jadi luar biasa.", bantuan: "Contoh: hasil sudah oke menurut orang lain, tapi kamu masih melihat cara membuatnya bersinar." },
  { no: 25, dim: "perasa", teks: "Saya bisa merasakan suasana hati orang lain bahkan sebelum mereka bicara.", bantuan: "Analogi: seperti barometer yang mendeteksi perubahan cuaca — kamu menangkap 'tekanan' emosi di ruangan." },
  { no: 26, dim: "perasa", teks: "Orang sering merasa benar-benar dipahami saat bersama saya.", bantuan: "Contoh: teman curhat padamu bukan untuk solusi, tapi karena kamu 'mengerti' perasaannya." },
  { no: 27, dim: "penyelaras", teks: "Saya berusaha mencari titik temu daripada memperpanjang perdebatan.", bantuan: "Seperti wasit yang mendinginkan pertandingan panas — kamu menurunkan tensi, bukan menambahnya." },
  { no: 28, dim: "penyelaras", teks: "Konflik yang tidak perlu membuat saya tidak nyaman.", bantuan: "Contoh: saat dua rekan berdebat sengit soal hal sepele, kamu tergerak menengahi." },
  { no: 29, dim: "pemersatu", teks: "Saya cepat menyadari siapa yang tertinggal di luar kelompok.", bantuan: "Analogi: seperti tuan rumah yang melihat satu tamu berdiri sendirian, lalu menghampirinya." },
  { no: 30, dim: "pemersatu", teks: "Saya terdorong mengajak semua orang ikut serta, tanpa terkecuali.", bantuan: "Contoh: saat membentuk tim, kamu memastikan yang pendiam pun dapat peran & suara." },
  { no: 31, dim: "penumbuh", teks: "Saya puas melihat orang lain berkembang, bahkan lebih dari kemajuan saya sendiri.", bantuan: "Seperti pelatih yang bangga saat muridnya menang — pertumbuhan mereka adalah kemenanganmu." },
  { no: 32, dim: "penumbuh", teks: "Saya cepat melihat potensi yang belum disadari orang lain.", bantuan: "Contoh: kamu melihat 'bibit bagus' pada anggota baru yang masih ragu-ragu." },
  { no: 33, dim: "pengikat", teks: "Saya lebih menghargai sedikit teman yang dalam daripada banyak kenalan.", bantuan: "Analogi: kamu memilih beberapa pohon berakar kuat, bukan taman luas yang dangkal." },
  { no: 34, dim: "pengikat", teks: "Setelah seseorang masuk lingkaran dekat saya, kesetiaan saya nyaris tanpa syarat.", bantuan: "Contoh: sahabat lamamu tahu kamu akan ada untuknya kapan pun, tanpa perlu diminta." },
  { no: 35, dim: "pencerah", teks: "Saya cenderung membawa energi positif ke dalam sebuah ruangan.", bantuan: "Seperti jendela yang dibuka di pagi hari — kehadiranmu membuat suasana lebih terang." },
  { no: 36, dim: "pencerah", teks: "Saya pandai menemukan sisi baik dan merayakan hal-hal kecil.", bantuan: "Contoh: di tengah proyek berat, kamu yang mengajak 'ayo rayakan dulu, kita sudah sampai separuh jalan'." },
  { no: 37, dim: "penganalisa", teks: "Pertanyaan 'apa buktinya?' otomatis muncul di kepala saya.", bantuan: "Analogi: seperti detektif yang tak percaya kesaksian tanpa barang bukti." },
  { no: 38, dim: "penganalisa", teks: "Saya senang membedah data untuk menemukan pola dan sebab-akibat.", bantuan: "Contoh: melihat angka penjualan turun, kamu betah mencari 'kenapa' sampai ke akarnya." },
  { no: 39, dim: "perancang_jalur", teks: "Menghadapi masalah rumit, saya otomatis membayangkan banyak skenario 'kalau-maka'.", bantuan: "Seperti pecatur yang melihat beberapa langkah ke depan sekaligus." },
  { no: 40, dim: "perancang_jalur", teks: "Saya cepat menyingkirkan jalan buntu dan menemukan rute tercepat.", bantuan: "Contoh: saat tim bingung memilih, kamu langsung tahu opsi mana yang akan mentok." },
  { no: 41, dim: "pembelajar", teks: "Proses menguasai hal baru itu sendiri sudah menyenangkan bagi saya.", bantuan: "Analogi: bagimu belajar seperti mendaki — pemandangan puncak menyenangkan, tapi pendakiannya pun asyik." },
  { no: 42, dim: "pembelajar", teks: "Saya cepat bersemangat ketika ada topik atau keterampilan baru untuk dipelajari.", bantuan: "Contoh: ada kelas atau tools baru, kamu yang paling awal mendaftar." },
  { no: 43, dim: "pengumpul", teks: "Saya senang mengumpulkan informasi, artikel, atau ide 'untuk suatu saat nanti'.", bantuan: "Seperti tupai menyimpan biji — kamu mengarsipkan pengetahuan yang kelak berguna." },
  { no: 44, dim: "pengumpul", teks: "Orang sering datang kepada saya untuk mencari referensi atau sumber.", bantuan: "Contoh: 'tanya saja ke dia, pasti punya bahannya' — kamu perpustakaan hidup tim." },
  { no: 45, dim: "perenung", teks: "Saya butuh waktu menyendiri untuk berpikir agar ide saya matang.", bantuan: "Analogi: seperti teh yang perlu diseduh — pikiranmu butuh waktu diam untuk menghasilkan rasa penuh." },
  { no: 46, dim: "perenung", teks: "Percakapan di dalam kepala saya sama hidupnya dengan percakapan di luar.", bantuan: "Contoh: saat menyetir sendirian, kamu asyik 'berdiskusi' dengan pikiranmu sendiri." },
  { no: 47, dim: "penerawang", teks: "Membayangkan masa depan dan kemungkinannya menyalakan semangat saya.", bantuan: "Seperti arsitek yang sudah melihat gedung megah padahal baru ada lahan kosong." },
  { no: 48, dim: "penerawang", teks: "Saya bisa menggambarkan visi begitu jelas hingga orang lain ikut bersemangat.", bantuan: "Contoh: kamu bercerita soal 'nanti kita akan begini', dan tim langsung ingin mewujudkannya." },
];
