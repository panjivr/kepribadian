/**
 * Ringkasan Buku — inti sari buku-buku penting dunia. Tiap buku dipecah jadi
 * poin-poin kunci, masing-masing dengan penjelasan & analogi cerita agar mudah
 * dipahami. Sub-perpustakaan dari Wawasan. Konten edukatif ringkasan.
 */
import { BUKU_KEBIASAAN } from "@/data/buku/kebiasaan";
import { BUKU_KUASA } from "@/data/buku/kuasa";
import { BUKU_STOA } from "@/data/buku/stoa";
import { BUKU_UANG } from "@/data/buku/uang";
import { BUKU_EKONOMI } from "@/data/buku/ekonomi";
import { BUKU_PRODUKTIVITAS2 } from "@/data/buku/produktivitas2";
import { BUKU_PSIKOLOGI2 } from "@/data/buku/psikologi2";
import { BUKU_STRATEGI2 } from "@/data/buku/strategi2";
import { BUKU_RELASI2 } from "@/data/buku/relasi2";
import { BUKU_MAKNA2 } from "@/data/buku/makna2";
import { BUKU_UANG2 } from "@/data/buku/uang2";

export type KategoriBuku =
  | "Kebiasaan & Produktivitas"
  | "Kekuasaan & Strategi"
  | "Filsafat & Stoisisme"
  | "Uang & Investasi"
  | "Ekonomi"
  | "Psikologi & Pikiran"
  | "Relasi & Pengaruh"
  | "Makna & Spiritual";

export const KATEGORI_BUKU: KategoriBuku[] = [
  "Kebiasaan & Produktivitas",
  "Kekuasaan & Strategi",
  "Relasi & Pengaruh",
  "Uang & Investasi",
  "Ekonomi",
  "Psikologi & Pikiran",
  "Filsafat & Stoisisme",
  "Makna & Spiritual",
];

export interface PoinBuku {
  judul: string;
  isi: string;
  analogi: string;
}

export interface RingkasanBuku {
  id: string;
  judul: string;
  penulis: string;
  tahun?: number;
  kategori: KategoriBuku;
  ikon: string;
  ringkas: string;
  tentang: string;
  poin: PoinBuku[];
  takeaway: string;
}

const SEED: RingkasanBuku[] = [
  {
    id: "atomic-habits",
    judul: "Atomic Habits",
    penulis: "James Clear",
    tahun: 2018,
    kategori: "Kebiasaan & Produktivitas",
    ikon: "⚛️",
    ringkas:
      "Perubahan besar bukan lahir dari tekad heroik, melainkan dari kebiasaan-kebiasaan kecil (atomic) yang menumpuk konsisten.",
    tentang:
      "James Clear menyatukan psikologi, biologi, & sains perilaku menjadi sistem praktis membangun kebiasaan baik dan meruntuhkan yang buruk. Intinya: fokus pada SISTEM, bukan tujuan; dan pada IDENTITAS, bukan sekadar hasil. Perbaikan 1% tiap hari terasa remeh hari ini, tapi melengkung menjadi luar biasa seiring waktu.",
    poin: [
      {
        judul: "1% lebih baik tiap hari",
        isi: "Kebiasaan adalah bunga majemuk dari pengembangan diri. Perbaikan kecil yang konsisten menumpuk jadi hasil raksasa; kemunduran kecil pun menggerogoti tanpa terasa. Yang penting arah & konsistensi, bukan besarnya langkah.",
        analogi: "Seperti es batu yang tak meleleh dari −10° ke −1°, lalu 'tiba-tiba' cair di 0°. Kemajuan sering tersembunyi sampai melewati ambang batas — jangan berhenti di −1°.",
      },
      {
        judul: "Perubahan berbasis identitas",
        isi: "Jangan mulai dari 'apa yang ingin kucapai', tapi 'ingin jadi orang seperti apa'. Bukan 'aku mau berhenti merokok', tapi 'aku bukan perokok'. Tiap tindakan adalah suara bagi identitas yang ingin kaubangun.",
        analogi: "Seperti memilih kostum lalu memerankannya: makin sering berperan sebagai 'pembaca', makin kamu benar-benar menjadi pembaca. Kebiasaan adalah bukti diri yang kamu pilih.",
      },
      {
        judul: "Empat hukum kebiasaan",
        isi: "Untuk membangun kebiasaan: jadikan Jelas (cue), Menarik (craving), Mudah (response), & Memuaskan (reward). Untuk menghapus kebiasaan buruk: balik keempatnya — jadikan tak terlihat, tak menarik, sulit, & tak memuaskan.",
        analogi: "Seperti mengatur jalur air: buat parit ke arah yang kauinginkan (mudah dilalui) dan sumbat jalur yang salah. Air (perilaku) mengalir ke jalur yang paling gampang.",
      },
      {
        judul: "Rancang lingkungan, bukan andalkan tekad",
        isi: "Kemauan itu terbatas & mudah lelah. Jauh lebih ampuh mengubah lingkungan: taruh buku di bantal, sembunyikan camilan, cabut colokan TV. Orang paling disiplin justru yang paling jarang menghadapi godaan.",
        analogi: "Seperti diet: lebih mudah tak membeli keripik daripada menahan diri saat keripik ada di meja. Menangkan pertempuran sebelum ia dimulai.",
      },
      {
        judul: "Aturan dua menit & habit stacking",
        isi: "Mulai kebiasaan baru dalam versi ≤2 menit ('baca 1 halaman', 'pakai sepatu lari'). Tempelkan pada kebiasaan yang sudah ada: 'setelah menyeduh kopi, aku menulis satu kalimat'. Awali gerbangnya; momentum menyusul.",
        analogi: "Seperti menyalakan mesin motor sebelum jalan jauh — yang berat adalah memulai. Sekali menyala, melanjutkan jadi mudah.",
      },
      {
        judul: "Jangan patahkan rantai (tapi jangan gagal dua kali)",
        isi: "Konsistensi menular; lewatkan sekali masih wajar, tapi jangan melewatkan dua kali berturut-turut — di situ kebiasaan mulai runtuh. Lacak kemajuan (habit tracker) agar 'rantai' terlihat & memotivasi.",
        analogi: "Seperti kalender yang kaucoret tiap hari berhasil: garis panjang itu terlalu sayang untuk diputus. Tujuannya bukan sempurna, tapi tak pernah menyerah dua kali.",
      },
    ],
    takeaway:
      "Kamu tak naik ke level tujuanmu; kamu turun ke level sistemmu. Bangun sistem & identitas kecil yang benar, dan hasil besar mengikuti dengan sendirinya.",
  },
  {
    id: "meditations",
    judul: "Meditations (Renungan)",
    penulis: "Marcus Aurelius",
    tahun: 180,
    kategori: "Filsafat & Stoisisme",
    ikon: "🏛️",
    ringkas:
      "Catatan pribadi seorang Kaisar Roma untuk dirinya sendiri — pengingat Stoa tentang cara hidup tenang, adil, & bermakna di tengah kekuasaan & kekacauan.",
    tentang:
      "'Meditations' tak pernah dimaksudkan untuk diterbitkan; ia jurnal Marcus Aurelius, kaisar sekaligus filsuf Stoa, untuk melatih pikirannya sendiri. Isinya pengingat berulang: kendalikan yang bisa dikendalikan, terima sisanya, dan jalani peran dengan kebajikan. Justru karena ditulis untuk diri sendiri, ia terasa sangat jujur & abadi.",
    poin: [
      {
        judul: "Bedakan yang dalam & di luar kendalimu",
        isi: "Inti Stoa: opini, usaha, & sikapmu ada dalam kuasamu; hasil, opini orang, & keadaan tidak. Penderitaan lahir dari menuntut kendali atas yang bukan urusanmu. Ketenangan datang saat fokus dipindah ke bagianmu.",
        analogi: "Seperti pemanah: ia bisa mengatur bidikan & tarikan (usahanya), tapi angin bisa membelokkan panah (hasil). Ia tenang karena telah melakukan bagiannya dengan baik.",
      },
      {
        judul: "Rintangan adalah jalan",
        isi: "'Apa yang menghalangi tindakan justru memajukan tindakan. Yang menghadang jalan menjadi jalan.' Kesulitan bukan gangguan bagi hidup baik — ia bahan bakunya, kesempatan melatih kebajikan.",
        analogi: "Seperti api yang melahap apa pun yang dilemparkan padanya lalu menjadikannya nyala lebih besar — halangan malah jadi bahan bakar.",
      },
      {
        judul: "Kamu punya kuasa atas pikiranmu",
        isi: "'Kamu berkuasa atas pikiranmu — bukan peristiwa luar. Sadari ini, dan kau akan menemukan kekuatan.' Bukan kejadian yang menyakiti kita, melainkan penilaian kita atasnya. Ubah penilaian, dan penderitaan berubah.",
        analogi: "Seperti dua orang kehujanan: satu mengeluh rusak harinya, satu menikmati segarnya. Hujannya sama; yang beda adalah pikiran yang diberikan padanya.",
      },
      {
        judul: "Memento mori — ingat kamu fana",
        isi: "Marcus terus mengingatkan diri bahwa hidup singkat & kematian pasti. Bukan untuk suram, tapi untuk hidup sekarang dengan sungguh, melepas gengsi & penundaan, serta memprioritaskan yang penting.",
        analogi: "Seperti tamu yang tahu jamuannya sebentar: ia menikmati tiap hidangan & percakapan, tak menyia-nyiakannya untuk hal remeh.",
      },
      {
        judul: "Berbuat baik tanpa menuntut pengakuan",
        isi: "'Anggur yang menghasilkan buah tak menuntut pujian.' Lakukan kebaikan karena itu tugasmu sebagai manusia, lalu lanjutkan — bukan demi tepuk tangan. Nilai tindakan ada pada tindakannya, bukan pada sorakan.",
        analogi: "Seperti pohon yang berbuah tanpa mengumumkannya: ia memberi karena itu kodratnya, bukan untuk dilihat.",
      },
      {
        judul: "Terima orang apa adanya",
        isi: "Setiap pagi, ingatkan diri bahwa kamu akan bertemu orang yang menyebalkan, tak tahu terima kasih, & egois — karena mereka belum tahu bedanya baik & buruk. Jangan kaget, jangan benci; tetap kerjakan bagianmu dengan sabar.",
        analogi: "Seperti tahu jalanan pasti macet: kamu tak marah tiap kali, kamu bersiap & tetap tenang karena sudah mengantisipasinya.",
      },
    ],
    takeaway:
      "Hidup baik bukan soal mengendalikan dunia, melainkan mengendalikan responsmu terhadapnya — dengan kebajikan, kesabaran, & kesadaran bahwa waktumu terbatas.",
  },
  {
    id: "psychology-of-money",
    judul: "The Psychology of Money",
    penulis: "Morgan Housel",
    tahun: 2020,
    kategori: "Uang & Investasi",
    ikon: "🧠",
    ringkas:
      "Sukses finansial lebih ditentukan oleh PERILAKU daripada kecerdasan atau rumus — bagaimana kamu bersikap terhadap uang lebih penting dari apa yang kamu tahu.",
    tentang:
      "Morgan Housel berargumen keuangan bukan ilmu pasti seperti fisika, melainkan soal perilaku manusia: emosi, ego, kesabaran, & sejarah pribadi. Lewat 19 cerita pendek, ia menunjukkan mengapa orang pintar bisa bangkrut & orang biasa bisa kaya — bedanya ada di kebiasaan & pengendalian diri.",
    poin: [
      {
        judul: "Tak ada yang gila soal uang",
        isi: "Keputusan uang yang tampak 'bodoh' bagi orang lain sering masuk akal bagi si pelaku, karena tiap orang dibentuk pengalaman & zaman berbeda. Memahami ini membuat kita lebih rendah hati menilai pilihan finansial orang.",
        analogi: "Seperti selera musik: lagu yang tumbuh bersamamu terasa terbaik. Cara pandang uang pun 'lagu' dari masa & keadaan yang membentukmu.",
      },
      {
        judul: "Keberuntungan & risiko itu kembar",
        isi: "Di balik banyak kesuksesan ada keberuntungan, dan di balik banyak kegagalan ada risiko di luar kendali. Maka jangan terlalu memuja tokoh sukses atau menghakimi yang gagal; tiru pola, bukan hasil ekstrem satu orang.",
        analogi: "Seperti dua orang menyeberang jalan sama: satu selamat, satu tertabrak mobil ngebut. Keputusannya mirip; nasibnya beda karena faktor tak terkendali.",
      },
      {
        judul: "Cukup (never enough)",
        isi: "Banyak orang kaya hancur karena tak pernah merasa cukup & mempertaruhkan yang mereka butuhkan demi yang tak mereka perlukan. Mengetahui 'angka cukup' melindungi dari keserakahan yang menghancurkan.",
        analogi: "Seperti main di kasino lalu menang besar, tapi tak berhenti sampai semua ludes. Tahu kapan berhenti adalah keterampilan terkaya.",
      },
      {
        judul: "Keajaiban bunga majemuk & kesabaran",
        isi: "Kekayaan Warren Buffett bukan cuma karena imbal hasil tinggi, tapi karena ia berinvestasi konsisten selama 80 tahun. Waktu adalah bahan rahasia; membiarkan uang tumbuh tanpa diganggu mengalahkan kejeniusan sesaat.",
        analogi: "Seperti pohon oak: bukan disiram sekali banyak, tapi tumbuh puluhan tahun tanpa dicabut-cabut. Kesabaran, bukan kehebohan, yang membesarkannya.",
      },
      {
        judul: "Kaya vs makmur (wealth is what you don't see)",
        isi: "Kekayaan sejati adalah aset yang TIDAK dibelanjakan — tabungan & kebebasan, bukan mobil mewah yang terlihat. Banyak yang tampak kaya sebenarnya hanya berpenghasilan tinggi & berutang. Kekayaan itu yang tak terlihat.",
        analogi: "Seperti gunung es: yang pamer di permukaan kecil; kekuatan sesungguhnya (tabungan) tersembunyi di bawah air.",
      },
      {
        judul: "Menabung & kebebasan adalah tujuannya",
        isi: "Kemampuan menabung lebih dalam kendalimu daripada penghasilan atau imbal hasil pasar. Nilai tertinggi uang adalah KENDALI atas waktumu — bisa berkata 'aku bisa melakukan apa yang kumau, kapan kumau'.",
        analogi: "Seperti tabungan bensin di tangki: makin penuh, makin jauh & bebas kamu memilih arah tanpa panik mencari pom bensin.",
      },
    ],
    takeaway:
      "Keuangan yang sehat = perilaku sabar + hidup di bawah kemampuan + membiarkan waktu bekerja. Tujuan uang bukan pamer, melainkan kebebasan atas waktumu sendiri.",
  },
  {
    id: "influence-cialdini",
    judul: "Influence: The Psychology of Persuasion",
    penulis: "Robert Cialdini",
    tahun: 1984,
    kategori: "Relasi & Pengaruh",
    ikon: "🧲",
    ringkas:
      "Enam 'jalan pintas' psikologis yang membuat orang berkata 'ya' — memahaminya membuatmu lebih persuasif sekaligus tahan dimanipulasi.",
    tentang:
      "Robert Cialdini, guru besar psikologi, menyamar bertahun-tahun mempelajari para 'ahli bujuk' (sales, penggalang dana, penipu). Ia menemukan bahwa kepatuhan manusia sering dipicu segelintir prinsip otomatis. Buku ini memetakan enam senjata pengaruh itu — agar kita bisa memakainya secara etis & mengenali saat kita sedang dimanfaatkan.",
    poin: [
      {
        judul: "Timbal Balik (Reciprocity)",
        isi: "Kita merasa wajib membalas pemberian. Memberi lebih dulu — bantuan, informasi, sampel — menciptakan rasa 'berutang' yang mendorong orang membalas. Itu sebabnya sampel gratis & 'hadiah' kecil begitu ampuh menaikkan penjualan.",
        analogi: "Seperti ditraktir teman: kamu jadi 'nggak enak' lalu merasa harus balas mentraktir. Kebaikan menciptakan utang tak terucap.",
      },
      {
        judul: "Komitmen & Konsistensi",
        isi: "Setelah menyatakan sikap atau langkah kecil, kita ingin tetap konsisten dengannya. Penjual memakai 'foot-in-the-door': minta hal kecil dulu, lalu yang besar. Kita cenderung membenarkan pilihan yang sudah kita ucapkan.",
        analogi: "Seperti sudah bilang 'aku orang yang rajin' — begitu terucap, kamu terdorong membuktikannya agar tak terasa munafik.",
      },
      {
        judul: "Bukti Sosial (Social Proof)",
        isi: "Saat ragu, kita meniru apa yang dilakukan banyak orang. 'Terlaris', antrean panjang, & jumlah pengikut jadi sinyal 'ini pasti benar'. Makin tak pasti situasinya, makin kuat kita mengikuti kerumunan.",
        analogi: "Seperti memilih warung makan yang ramai daripada yang sepi — 'kalau banyak yang beli, pasti enak', padahal belum tentu.",
      },
      {
        judul: "Otoritas (Authority)",
        isi: "Kita cenderung menuruti figur otoritas — jas dokter, gelar, seragam, atau sekadar tampil percaya diri. Simbol otoritas bisa memicu kepatuhan bahkan tanpa keahlian sejati di baliknya.",
        analogi: "Seperti lebih percaya nasihat kesehatan dari orang berjas putih — padahal jas bisa dipakai siapa saja. Simbol menggantikan pemeriksaan.",
      },
      {
        judul: "Rasa Suka (Liking)",
        isi: "Kita lebih mudah dibujuk oleh orang yang kita sukai — yang mirip kita, memuji kita, menarik, atau akrab. Sales pandai membangun kesamaan & keramahan sebelum menawarkan.",
        analogi: "Seperti lebih rela membeli dari teman sendiri daripada orang asing — kedekatan melunakkan penolakan.",
      },
      {
        judul: "Kelangkaan (Scarcity)",
        isi: "Sesuatu terasa lebih berharga saat langka atau terbatas waktunya. 'Stok terakhir', 'promo hari ini saja' memicu takut kehilangan (FOMO) yang mendorong keputusan terburu-buru.",
        analogi: "Seperti tiket konser yang 'tinggal sedikit' bikin buru-buru checkout — kelangkaan menyalakan panik, bukan pertimbangan.",
      },
      {
        judul: "Kesatuan (Unity)",
        isi: "Prinsip ketujuh yang Cialdini tambahkan kemudian: kita paling terpengaruh oleh mereka yang kita anggap 'satu golongan' — keluarga, suku, almamater, fandom. Rasa 'kita' jauh lebih kuat dari sekadar 'suka'.",
        analogi: "Seperti langsung percaya pada orang sedaerah di perantauan — 'dia orang kita' membuka pintu yang tertutup bagi orang lain.",
      },
    ],
    takeaway:
      "Enam-tujuh prinsip ini bekerja otomatis di bawah sadar. Pakai secara jujur untuk memengaruhi, dan kenali polanya agar tak mudah dijebak saat orang lain memakainya padamu.",
  },
];

export const BUKU: RingkasanBuku[] = [
  ...SEED,
  ...BUKU_KEBIASAAN,
  ...BUKU_KUASA,
  ...BUKU_STOA,
  ...BUKU_UANG,
  ...BUKU_EKONOMI,
  ...BUKU_PRODUKTIVITAS2,
  ...BUKU_PSIKOLOGI2,
  ...BUKU_STRATEGI2,
  ...BUKU_RELASI2,
  ...BUKU_MAKNA2,
  ...BUKU_UANG2,
];
