/**
 * Peta Jenjang Kehidupan — panduan tiap fase hidup: fokus perkembangan, cara
 * memetakan diri/anak, keputusan kunci, solusi praktis, dan tes yang relevan
 * di Djiva. Konten edukatif (bukan diagnosis) yang menautkan seluruh fitur.
 */

export interface TautanTes {
  nama: string;
  href: string;
}

export interface JenjangHidup {
  id: string;
  label: string;
  usia: string;
  emoji: string;
  judul: string;
  fokus: string;
  caraMemetakan: string[];
  keputusanKunci: { judul: string; isi: string };
  solusi: string[];
  tesTerkait: TautanTes[];
}

export const JENJANG: JenjangHidup[] = [
  {
    id: "tk",
    label: "TK / PAUD",
    usia: "4–6 tahun",
    emoji: "🧸",
    judul: "Menemukan Bibit Bakat",
    fokus:
      "Bermain, mengembangkan motorik & sosial-emosi, dan mengenali kegiatan yang berulang kali dinikmati anak. Di usia ini bakat muncul sebagai kesukaan, bukan prestasi.",
    caraMemetakan: [
      "Amati kegiatan yang anak ulang-ulang tanpa disuruh (menggambar, menyusun balok, bergerak/menari, bercerita, bernyanyi).",
      "Perhatikan kecerdasan yang menonjol (visual, gerak, musik, bahasa, sosial) — Kecerdasan Majemuk versi pengamatan orang tua.",
      "Catat apa yang membuat anak fokus lama & bahagia.",
    ],
    keputusanKunci: {
      judul: "TK → SD: pilih sekolah & les awal",
      isi: "Pilih SD yang cocok dengan anak (umum/nasional, sekolah alam, atau berbasis agama) sesuai nilai keluarga & karakter anak. Mulai les sesuai bibit yang terlihat — anak suka menggambar → les gambar; suka gerak → olahraga/menari; suka nada → musik. Ikuti minat anak, bukan gengsi orang tua.",
    },
    solusi: [
      "Jangan paksa calistung berlebihan; perkuat rasa ingin tahu & kemampuan sosial dulu.",
      "Beri banyak jenis pengalaman agar anak menemukan yang paling menyalakannya.",
      "Rayakan usaha & proses, bukan hanya hasil.",
    ],
    tesTerkait: [{ nama: "Kecerdasan Majemuk (diamati ortu)", href: "/tes/kecerdasan-majemuk" }],
  },
  {
    id: "sd",
    label: "SD",
    usia: "7–12 tahun",
    emoji: "🎒",
    judul: "Menumbuhkan Kekuatan & Kebiasaan",
    fokus:
      "Kecerdasan majemuk makin tampak, kebiasaan belajar & karakter terbentuk. Saatnya memperdalam kekuatan sambil membangun fondasi disiplin.",
    caraMemetakan: [
      "Kenali kecerdasan yang paling menonjol (Gardner): logis, bahasa, visual, musik, gerak, sosial, diri, alam.",
      "Temukan gaya belajar yang paling nyaman (Visual / Auditori / Kinestetik).",
      "Perhatikan karakter & minat yang mulai konsisten.",
    ],
    keputusanKunci: {
      judul: "Memperdalam bakat & memilih kegiatan",
      isi: "Perdalam les/kegiatan di bidang yang anak kuat & nikmati, sambil tetap memberi paparan luas. Bangun kebiasaan belajar sesuai gaya belajarnya (mis. anak visual: mind map & video; kinestetik: praktik & bergerak).",
    },
    solusi: [
      "Seimbangkan akademik & non-akademik — keduanya membentuk anak utuh.",
      "Fokus mengasah kekuatan, bukan menghabiskan energi menambal semua kelemahan.",
      "Ajari mengelola waktu & tanggung jawab kecil.",
    ],
    tesTerkait: [
      { nama: "Kecerdasan Majemuk", href: "/tes/kecerdasan-majemuk" },
      { nama: "Gaya Belajar VAK", href: "/tes/gaya-belajar" },
    ],
  },
  {
    id: "smp",
    label: "SMP",
    usia: "13–15 tahun",
    emoji: "📗",
    judul: "Menemukan Arah & Penjurusan Awal",
    fokus:
      "Identitas mulai terbentuk dan minat mengkristal. Saatnya menyiapkan arah SMA/SMK — akademik (IPA/IPS/Bahasa/Agama) atau vokasi (SMK).",
    caraMemetakan: [
      "Petakan minat lewat RIASEC ringan: suka utak-atik & sains (I/R)? suka orang & sosial (S)? suka seni (A)? suka bisnis/memimpin (E)?",
      "Lihat pola nilai rapor: kuat di IPA, IPS, bahasa, atau keterampilan?",
      "Kenali kepribadian dasar (Big Five) & kekuatan karakter.",
    ],
    keputusanKunci: {
      judul: "SMP → SMA/SMK: pilih peminatan",
      isi: "Suka & kuat IPA (fisika, biologi, matematika) → arah sains/teknik/kedokteran. Suka IPS (ekonomi, sosial, sejarah) → arah sosial/ekonomi/hukum. Suka bahasa/seni → arah bahasa/seni/komunikasi. Kuat di agama & pertanyaan makna → arah keagamaan/filsafat. Ingin cepat terampil & kerja → SMK sesuai bidang (teknik, bisnis, multimedia, dll).",
    },
    solusi: [
      "Jangan memilih jurusan hanya karena ikut teman atau gengsi.",
      "Cocokkan peminatan dengan minat + kemampuan, bukan salah satu saja.",
      "SMK adalah pilihan bagus & terhormat untuk yang ingin terampil & cepat bekerja.",
    ],
    tesTerkait: [
      { nama: "Minat Karier & Jurusan (RIASEC)", href: "/tes/minat-karier" },
      { nama: "Big Five", href: "/tes/big-five" },
      { nama: "Kecerdasan Majemuk", href: "/tes/kecerdasan-majemuk" },
    ],
  },
  {
    id: "sma",
    label: "SMA / SMK",
    usia: "16–18 tahun",
    emoji: "🎓",
    judul: "Memetakan Jurusan Kuliah & Karier",
    fokus:
      "Fase paling krusial: memilih jurusan kuliah (atau kuliah vs kerja) yang menentukan arah bertahun-tahun ke depan. Butuh pemetaan minat + kemampuan yang serius.",
    caraMemetakan: [
      "Jalankan tes Minat Karier (RIASEC) → dapatkan kode Holland → rekomendasi rumpun jurusan + prospek + contoh kampus (fitur SMA→Kuliah kami).",
      "Cek kepribadian (Big Five) & estimasi kemampuan penalaran (IQ).",
      "Kenali kekuatan bakatmu (Peta Bakat / VIA) untuk keunggulan yang bisa dijual.",
    ],
    keputusanKunci: {
      judul: "SMA → Kuliah: pilih jurusan & kampus",
      isi: "Cocokkan minat (RIASEC) dengan rumpun jurusan, lalu pilih kampus dengan mempertimbangkan akreditasi, biaya, lokasi (bisa disaring per provinsi), dan jalur masuk (SNBP nilai rapor, SNBT ujian, atau Mandiri). Pertimbangkan juga PTN vs PTS vs kedinasan (ikatan dinas).",
    },
    solusi: [
      "Gunakan fitur 'Minat Karier & Jurusan' untuk peta lengkap jurusan → prospek → kampus per wilayah.",
      "Siapkan rencana B (jurusan/kampus cadangan) & pahami jalur masuknya.",
      "Diskusikan dengan guru BK & orang tua; jangan memutuskan sendirian.",
      "Jika ragu kuliah/kerja: bidang vokasi & magang bisa jadi jembatan.",
    ],
    tesTerkait: [
      { nama: "Minat Karier & Jurusan (RIASEC)", href: "/tes/minat-karier" },
      { nama: "Big Five", href: "/tes/big-five" },
      { nama: "Estimasi Kognitif (IQ)", href: "/tes/iq" },
      { nama: "Peta Bakat Djiva", href: "/tes/peta-bakat" },
    ],
  },
  {
    id: "kuliah",
    label: "Kuliah / Dewasa Muda",
    usia: "18–25 tahun",
    emoji: "💼",
    judul: "Membangun Kompetensi & Jati Diri",
    fokus:
      "Mengasah keterampilan, membangun relasi & jejaring, memulai karier, dan menjadi mandiri. Jati diri makin utuh.",
    caraMemetakan: [
      "Kenali kekuatan sinyaturmu (Peta Bakat / VIA) untuk membangun keunggulan.",
      "Pahami gaya kerja & tim (DISC) serta kecerdasan emosional (EQ).",
      "Sadari nilai & kompas moralmu untuk memilih lingkungan yang cocok.",
    ],
    keputusanKunci: {
      judul: "Fokus karier & relasi serius",
      isi: "Pilih spesialisasi/karier awal yang selaras dengan kekuatan & minat, bangun portofolio dan jejaring, dan mulai relasi yang lebih serius. Ini masa 'menanam' yang menentukan panen di usia berikutnya.",
    },
    solusi: [
      "Bangun portofolio nyata & pengalaman (magang, proyek, organisasi).",
      "Kembangkan EQ & keterampilan komunikasi — sama pentingnya dengan skill teknis.",
      "Kelola keuangan & kebiasaan sejak dini.",
    ],
    tesTerkait: [
      { nama: "Peta Bakat Djiva", href: "/tes/peta-bakat" },
      { nama: "DISC", href: "/tes/disc" },
      { nama: "Tes EQ", href: "/tes/eq" },
      { nama: "VIA Kekuatan Karakter", href: "/tes/kekuatan-karakter" },
    ],
  },
  {
    id: "menikah",
    label: "Menikah / Berkeluarga",
    usia: "Dewasa",
    emoji: "💞",
    judul: "Membangun Relasi yang Sehat",
    fokus:
      "Memahami diri & pasangan secara mendalam, berkomunikasi dengan tepat, menyelesaikan konflik dengan sehat, dan kelak mengasuh anak (kembali ke fase awal untuk sang anak).",
    caraMemetakan: [
      "Kenali gaya kelekatan (Attachment) diri & pasangan — akar dari pola 'kejar–hindar' dan rasa aman.",
      "Temukan bahasa kasih masing-masing agar cinta 'sampai' dengan tepat.",
      "Pahami kepribadian (Big Five) & gaya (DISC) pasangan untuk mengurangi salah paham.",
    ],
    keputusanKunci: {
      judul: "Komunikasi, konflik, & pengasuhan",
      isi: "Sepakati cara berkomunikasi & menyelesaikan konflik berdasar pemahaman gaya kelekatan & bahasa kasih berdua. Saat memiliki anak, terapkan pemetaan bakat sejak dini (kembali ke fase TK) — siklus hidup pun berlanjut.",
    },
    solusi: [
      "Pahami gaya kelekatan berdua: beri kepastian pada yang cemas, beri ruang pada yang menghindar.",
      "Cintai dengan bahasa kasih pasangan, bukan hanya bahasamu sendiri.",
      "Konsistensi, empati, dan mendengarkan mengalahkan 'siapa yang benar'.",
      "Jika pola menyakitkan berulang, konseling pasangan sangat membantu.",
    ],
    tesTerkait: [
      { nama: "Gaya Kelekatan (Attachment)", href: "/tes/kelekatan" },
      { nama: "Bahasa Kasih (Love Languages)", href: "/tes/bahasa-kasih" },
      { nama: "DISC", href: "/tes/disc" },
      { nama: "Big Five", href: "/tes/big-five" },
    ],
  },
];
