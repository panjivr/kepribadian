import type { DokMetode } from "@/components/PenjelasanMetode";

export const CONFLICT_DOK: DokMetode = {
  ringkasan:
    "Model Thomas-Kilmann memetakan lima gaya menghadapi konflik di dua sumbu: ketegasan (seberapa kamu memperjuangkan kepentingan sendiri) dan kerja sama (seberapa kamu memperhatikan kepentingan orang lain). Lima gaya: Bersaing, Kolaborasi, Kompromi, Menghindar, & Mengakomodasi. Tidak ada gaya yang 'terbaik' — tiap gaya efektif pada situasi berbeda.",
  sejarah:
    "Dikembangkan Kenneth W. Thomas & Ralph H. Kilmann pada 1974 sebagai Thomas-Kilmann Conflict Mode Instrument (TKI). Model ini membangun di atas kerangka manajerial sebelumnya (mis. grid Blake & Mouton) dan menjadi salah satu alat pelatihan manajemen konflik paling luas dipakai di dunia kerja.",
  pencipta: "Kenneth W. Thomas & Ralph H. Kilmann.",
  tujuan:
    "Membantu orang mengenali kecenderungan alaminya saat berselisih, memahami kelebihan & keterbatasan tiap gaya, dan belajar memilih gaya yang paling tepat sesuai situasi — bukan terjebak pada satu gaya saja.",
  dasar:
    "Dua sumbu: (1) Assertiveness/ketegasan — memperjuangkan kepentingan diri; (2) Cooperativeness/kerja sama — memperhatikan kepentingan pihak lain. Kombinasi keduanya menghasilkan lima gaya. Analogi berbagi kue: Bersaing = ambil bagian terbesar; Mengakomodasi = beri orang lain bagian terbesar; Kompromi = bagi dua sama rata; Menghindar = tinggalkan kuenya; Kolaborasi = cari cara membuat kue lebih besar agar semua puas.",
  caraKerja:
    "Kamu menilai 20 pernyataan (4 per gaya) pada skala 1–5, seberapa sesuai dengan caramu menghadapi perselisihan. Tiap butir diberi contoh agar tak salah tafsir.",
  caraSkor:
    "Skor tiap gaya dinormalkan ke persen. Gaya dengan skor tertinggi adalah kecenderungan alamimu; gaya lain menunjukkan repertoar yang bisa kamu perluas. Idealnya kamu luwes memakai gaya yang sesuai situasi.",
  kelebihan: [
    "Praktis & mudah dipahami untuk pelatihan komunikasi & tim.",
    "Menormalkan bahwa setiap gaya punya tempatnya — tidak ada yang 'salah'.",
    "Membantu memperluas repertoar, bukan mengunci satu label.",
  ],
  kekurangan: [
    "Berbasis laporan diri & bisa dipengaruhi citra diri.",
    "Gaya nyata sangat bergantung konteks & lawan konflik, bukan sifat tetap.",
    "Menyederhanakan dinamika konflik yang sesungguhnya kompleks.",
  ],
  kritik:
    "Kritik: TKI mengukur preferensi yang dilaporkan sendiri, yang bisa berbeda dari perilaku nyata; hasil bisa berubah tergantung dengan siapa & tentang apa konflik terjadi (mis. beda gaya dengan atasan vs pasangan). Karena itu perlakukan hasil sebagai kecenderungan umum, bukan penentu perilaku di setiap situasi.",
  validitas:
    "Sebagai alat pelatihan, TKI banyak dipakai & berguna secara praktis; namun sifatnya deskriptif-reflektif, bukan diagnosis. Versi 20-butir ini estimasi ringkas untuk refleksi, bukan TKI resmi.",
  kapanCocok: [
    "Menyadari pola berulang saat bertengkar dengan orang dekat atau rekan kerja.",
    "Melatih fleksibilitas: memilih gaya sesuai situasi.",
    "Membangun kerja tim & negosiasi yang lebih sehat.",
  ],
  kapanKurang: [
    "Memvonis seseorang 'tukang cari ribut' atau 'penakut'.",
    "Menghadapi konflik dengan kekerasan/pelecehan (butuh perlindungan, bukan gaya negosiasi).",
    "Diagnosis psikologis.",
  ],
  studiKasus:
    "Contoh: Dua rekan berebut satu ruang meeting untuk jam yang sama. Bersaing = memaksa memakai duluan. Mengakomodasi = mengalah sepenuhnya. Kompromi = membagi waktu masing-masing setengah jam. Menghindar = keduanya batal memakai. Kolaborasi = menggali kebutuhan asli — ternyata satu perlu ruang besar, satu hanya perlu tempat tenang — lalu satu pindah ke ruang lain yang lebih pas. Hasil kolaborasi memuaskan keduanya.",
  faq: [
    { t: "Gaya mana yang terbaik?", j: "Tidak ada. Kolaborasi ideal saat ada waktu & isu penting bagi semua, tetapi bersaing tepat saat darurat, dan menghindar tepat untuk isu sepele. Kematangan = luwes memilih sesuai situasi." },
    { t: "Apakah gaya saya bisa berubah?", j: "Bisa & memang sering berbeda tergantung situasi & lawan. Kamu bisa melatih gaya yang jarang kamu pakai." },
    { t: "Apa beda kompromi & kolaborasi?", j: "Kompromi = semua mengalah sebagian (menang-menang separuh). Kolaborasi = mencari solusi baru yang memuaskan semua sepenuhnya (menang-menang penuh), biasanya butuh lebih banyak waktu." },
    { t: "Menghindar selalu buruk?", j: "Tidak. Untuk isu sepele atau saat emosi memuncak, menunda konflik bisa bijak. Ia jadi masalah hanya bila dipakai untuk lari dari isu penting terus-menerus." },
  ],
  referensi: [
    "Thomas, K. W., & Kilmann, R. H. (1974). Thomas-Kilmann Conflict Mode Instrument.",
    "Thomas, K. W. (1992). Conflict and conflict management: Reflections and update. Journal of Organizational Behavior.",
    "Blake, R. R., & Mouton, J. S. (1964). The Managerial Grid.",
  ],
};
