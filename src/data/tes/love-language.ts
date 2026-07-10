import type { ItemLikertDimensi } from "@/lib/skoring";

/**
 * Bahasa Kasih (Love Languages) — 5 cara utama orang merasa & mengungkapkan
 * cinta (konsep populer Gary Chapman). Konsep 5 kategori bukan hak cipta;
 * seluruh butir & deskripsi di sini original Djiva.
 */

export type BahasaKasih = "kata" | "waktu" | "hadiah" | "layan" | "sentuh";

export const BK_URUTAN: BahasaKasih[] = ["kata", "waktu", "hadiah", "layan", "sentuh"];

export interface BkInfo {
  nama: string;
  emoji: string;
  deskripsi: string;
  caraMenerima: string; // bagaimana kamu merasa dicintai
  caraMemberi: string; // cara mencintai orang dengan bahasa ini
  contoh: string[];
  warna: string;
}

export const BK_INFO: Record<BahasaKasih, BkInfo> = {
  kata: {
    nama: "Kata-kata Penegasan", emoji: "💬",
    deskripsi: "Kamu merasa paling dicintai lewat kata — pujian, penghargaan, dan dukungan yang diucapkan.",
    caraMenerima: "Dengar 'aku bangga padamu', 'terima kasih', atau apresiasi tulus membuat hatimu penuh.",
    caraMemberi: "Ungkapkan apresiasi secara verbal & tertulis; hindari kata-kata merendahkan yang membekas lama.",
    contoh: ["pujian tulus", "pesan penyemangat", "ucapan terima kasih", "kata sayang"],
    warna: "#67e8f9",
  },
  waktu: {
    nama: "Waktu Berkualitas", emoji: "⏳",
    deskripsi: "Kamu merasa dicintai lewat perhatian penuh & kebersamaan tanpa gangguan.",
    caraMenerima: "Kehadiran utuh (tanpa HP), obrolan mendalam, dan momen berdua lebih berarti dari apa pun.",
    caraMemberi: "Sisihkan waktu khusus & fokus penuh; matikan distraksi saat bersamanya.",
    contoh: ["ngobrol tanpa gangguan", "kencan berdua", "melakukan aktivitas bersama", "mendengarkan penuh"],
    warna: "#8b5cf6",
  },
  hadiah: {
    nama: "Menerima Hadiah", emoji: "🎁",
    deskripsi: "Kamu merasa diingat & istimewa lewat pemberian yang penuh pemikiran (bukan soal harga).",
    caraMenerima: "Hadiah kecil 'karena teringat kamu' terasa seperti bukti nyata bahwa kamu ada di pikirannya.",
    caraMemberi: "Beri kejutan kecil bermakna & ingat momen penting; yang dihargai perhatiannya, bukan harganya.",
    contoh: ["oleh-oleh kecil", "kado di momen spesial", "sesuatu yang 'kamu banget'", "kejutan tak terduga"],
    warna: "#ff9f0a",
  },
  layan: {
    nama: "Tindakan Melayani", emoji: "🤲",
    deskripsi: "Kamu merasa dicintai saat seseorang meringankan bebanmu lewat tindakan nyata.",
    caraMenerima: "Dibuatkan makan, dibantu tugas, atau diringankan pekerjaan terasa lebih 'cinta' daripada kata.",
    caraMemberi: "Tunjukkan sayang lewat bantuan konkret & menepati janji; tindakan berbicara lebih keras darimu.",
    contoh: ["dibantu tanpa diminta", "dibuatkan sesuatu", "diurus saat sakit", "janji yang ditepati"],
    warna: "#30d158",
  },
  sentuh: {
    nama: "Sentuhan Fisik", emoji: "🤗",
    deskripsi: "Kamu merasa aman & dicintai lewat kehangatan fisik — pelukan, genggaman, kedekatan.",
    caraMenerima: "Pelukan, genggaman tangan, atau bersandar menenangkanmu dan membuatmu merasa terhubung.",
    caraMemberi: "Beri kehangatan fisik yang sopan & konsisten; kedekatan fisik adalah bahasa cintamu.",
    contoh: ["pelukan", "genggaman tangan", "duduk berdekatan", "tepukan menenangkan"],
    warna: "#f472b6",
  },
};

export const LOVE_ITEMS: (ItemLikertDimensi & { dim: BahasaKasih; bantuan: string })[] = [
  { no: 1, dim: "kata", teks: "Saya merasa sangat dicintai saat dipuji atau dihargai dengan kata-kata.", bantuan: "Contoh: 'kamu hebat, aku bangga' terasa menghangatkan hatimu seharian." },
  { no: 2, dim: "kata", teks: "Ucapan 'terima kasih' atau 'aku menghargaimu' sangat berarti bagi saya.", bantuan: "Maksudnya: kata apresiasi kecil pun terasa bermakna besar bagimu." },
  { no: 3, dim: "kata", teks: "Kata-kata yang menyakitkan sulit saya lupakan.", bantuan: "Analogi: bagi 'penutur kata', ucapan kasar membekas lama seperti bekas luka." },
  { no: 4, dim: "kata", teks: "Pesan singkat penuh perhatian bisa mencerahkan hari saya.", bantuan: "Contoh: chat 'semangat ya, aku doakan' bikin harimu berubah cerah." },

  { no: 5, dim: "waktu", teks: "Saya merasa dicintai saat seseorang memberi perhatian penuh tanpa gangguan HP.", bantuan: "Contoh: ngobrol dan dia benar-benar menyimak (HP disingkirkan) terasa istimewa." },
  { no: 6, dim: "waktu", teks: "Waktu berkualitas berdua lebih berarti bagi saya daripada hadiah.", bantuan: "Maksudnya: kebersamaan penuh > barang, bagi bahasa cinta ini." },
  { no: 7, dim: "waktu", teks: "Saya kecewa jika rencana bersama dibatalkan mendadak.", bantuan: "Analogi: batalnya waktu berdua terasa seperti kehilangan sesuatu yang berharga." },
  { no: 8, dim: "waktu", teks: "Obrolan mendalam tanpa terburu-buru membuat saya merasa dekat.", bantuan: "Contoh: ngobrol dari hati ke hati berjam-jam justru mengisi 'tangki cinta'-mu." },

  { no: 9, dim: "hadiah", teks: "Hadiah kecil yang penuh pemikiran membuat saya merasa diingat.", bantuan: "Contoh: dibawakan jajanan favorit 'karena teringat kamu' terasa manis." },
  { no: 10, dim: "hadiah", teks: "Saya menyimpan pemberian dari orang tersayang sebagai kenangan.", bantuan: "Maksudnya: benda pemberian punya nilai emosional, bukan sekadar barang." },
  { no: 11, dim: "hadiah", teks: "Saya merasa istimewa saat seseorang membawakan sesuatu tanpa alasan khusus.", bantuan: "Contoh: kejutan kecil di hari biasa terasa seperti bukti kamu dipikirkan." },
  { no: 12, dim: "hadiah", teks: "Lupa memberi tanda/hadiah di momen penting terasa menyakitkan bagi saya.", bantuan: "Analogi: bagi bahasa ini, momen terlewat terasa seperti 'aku tak cukup diingat'." },

  { no: 13, dim: "layan", teks: "Saya merasa dicintai saat seseorang membantu meringankan pekerjaan saya.", bantuan: "Contoh: dibantu beres-beres saat kamu lelah terasa seperti pelukan." },
  { no: 14, dim: "layan", teks: "Tindakan nyata lebih berkesan bagi saya daripada kata-kata manis.", bantuan: "Maksudnya: 'buktikan lewat perbuatan' adalah bahasa hatimu." },
  { no: 15, dim: "layan", teks: "Saya menghargai orang yang menawarkan bantuan tanpa diminta.", bantuan: "Contoh: dia lihat kamu repot lalu langsung turun tangan — itu terasa cinta." },
  { no: 16, dim: "layan", teks: "Janji yang tidak ditepati membuat saya merasa tidak diprioritaskan.", bantuan: "Analogi: bagi bahasa ini, tindakan (menepati) berbicara lebih keras dari kata." },

  { no: 17, dim: "sentuh", teks: "Pelukan atau genggaman tangan membuat saya merasa aman dan dicintai.", bantuan: "Contoh: dipeluk saat capek langsung menenangkan hatimu." },
  { no: 18, dim: "sentuh", teks: "Kedekatan fisik menenangkan saya saat sedang sedih.", bantuan: "Maksudnya: sentuhan hangat lebih menghibur daripada nasihat panjang." },
  { no: 19, dim: "sentuh", teks: "Saya merasa jauh secara emosional jika jarang ada sentuhan hangat.", bantuan: "Analogi: kurang sentuhan terasa seperti 'tangki cinta'-mu perlahan kosong." },
  { no: 20, dim: "sentuh", teks: "Duduk berdekatan atau bersandar terasa sangat berarti bagi saya.", bantuan: "Contoh: nonton sambil bersandar bahu terasa lebih intim dari apa pun." },
];
