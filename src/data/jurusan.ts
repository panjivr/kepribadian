/**
 * Kurasi rumpun jurusan kuliah di Indonesia untuk pemetaan minat (RIASEC) →
 * arah kuliah. Setiap rumpun diberi kode Holland dominan; pencocokan menghitung
 * irisan kode Holland pengguna dengan kode rumpun (posisi diberi bobot).
 *
 * Data kampus = CONTOH kampus dengan program yang dikenal kuat/populer per
 * rumpun (campuran PTN & PTS), BUKAN peringkat resmi & bukan daftar lengkap.
 * Selalu verifikasi akreditasi & kurikulum terbaru di web resmi kampus.
 */

export interface Kampus {
  nama: string;
  kota: string;
  jenis: "PTN" | "PTS" | "Kedinasan" | "Politeknik";
}

export interface RumpunJurusan {
  id: string;
  nama: string;
  emoji: string;
  kode: string; // kode Holland dominan, mis. "IRC"
  deskripsi: string;
  contohProdi: string[];
  matkulInti: string[];
  prospek: string[]; // output karier
  kampus: Kampus[];
  catatan?: string;
}

export const RUMPUN_JURUSAN: RumpunJurusan[] = [
  {
    id: "ti", nama: "Teknologi Informasi & Komputer", emoji: "💻", kode: "IRC",
    deskripsi: "Merancang perangkat lunak, sistem, dan mengolah data. Bidang paling cepat tumbuh dengan peluang kerja luas, termasuk remote & global.",
    contohProdi: ["Teknik Informatika", "Ilmu Komputer", "Sistem Informasi", "Rekayasa Perangkat Lunak", "Sains Data", "Keamanan Siber"],
    matkulInti: ["Algoritma & Struktur Data", "Pemrograman", "Basis Data", "Jaringan Komputer", "Kecerdasan Buatan", "Rekayasa Perangkat Lunak"],
    prospek: ["Software Engineer", "Data Scientist / Analyst", "Product Manager", "Cybersecurity Analyst", "AI/ML Engineer", "Startup founder"],
    kampus: [
      { nama: "Institut Teknologi Bandung (ITB)", kota: "Bandung", jenis: "PTN" },
      { nama: "Universitas Indonesia (UI)", kota: "Depok", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (UGM)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Institut Teknologi Sepuluh Nopember (ITS)", kota: "Surabaya", jenis: "PTN" },
      { nama: "Telkom University", kota: "Bandung", jenis: "PTS" },
      { nama: "Universitas Bina Nusantara (Binus)", kota: "Jakarta", jenis: "PTS" },
    ],
    catatan: "Banyak jalur belajar mandiri/online (bootcamp) bisa melengkapi kuliah untuk mempercepat kerja.",
  },
  {
    id: "teknik", nama: "Teknik & Rekayasa", emoji: "⚙️", kode: "RIC",
    deskripsi: "Merancang dan membangun benda & sistem fisik: gedung, mesin, listrik, pabrik. Menggabungkan sains, matematika, dan kerja nyata.",
    contohProdi: ["Teknik Sipil", "Teknik Mesin", "Teknik Elektro", "Teknik Industri", "Teknik Kimia", "Teknik Perkapalan"],
    matkulInti: ["Kalkulus & Fisika Teknik", "Mekanika", "Termodinamika", "Material Teknik", "Menggambar Teknik / CAD", "Manajemen Proyek"],
    prospek: ["Insinyur (sipil/mesin/elektro)", "Project/Site Engineer", "Manajer Produksi", "Konsultan Teknik", "Quality Control", "BUMN & migas"],
    kampus: [
      { nama: "Institut Teknologi Bandung (ITB)", kota: "Bandung", jenis: "PTN" },
      { nama: "Institut Teknologi Sepuluh Nopember (ITS)", kota: "Surabaya", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (UGM)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Indonesia (UI)", kota: "Depok", jenis: "PTN" },
      { nama: "Universitas Diponegoro (Undip)", kota: "Semarang", jenis: "PTN" },
      { nama: "Universitas Brawijaya (UB)", kota: "Malang", jenis: "PTN" },
    ],
  },
  {
    id: "kedokteran", nama: "Kedokteran & Ilmu Kesehatan", emoji: "🩺", kode: "ISR",
    deskripsi: "Menjaga dan memulihkan kesehatan manusia. Menuntut ketekunan panjang, empati, dan ketelitian tinggi; sangat dihormati & dibutuhkan.",
    contohProdi: ["Pendidikan Dokter", "Kedokteran Gigi", "Keperawatan", "Farmasi", "Gizi", "Kebidanan"],
    matkulInti: ["Anatomi & Fisiologi", "Biokimia", "Patologi", "Farmakologi", "Keterampilan Klinik", "Etika Kedokteran"],
    prospek: ["Dokter umum/spesialis", "Apoteker", "Perawat", "Ahli gizi", "Peneliti medis", "Tenaga kesehatan RS/puskesmas"],
    kampus: [
      { nama: "Universitas Indonesia (UI)", kota: "Depok", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (UGM)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Airlangga (Unair)", kota: "Surabaya", jenis: "PTN" },
      { nama: "Universitas Padjadjaran (Unpad)", kota: "Bandung", jenis: "PTN" },
      { nama: "Universitas Diponegoro (Undip)", kota: "Semarang", jenis: "PTN" },
      { nama: "Universitas Sumatera Utara (USU)", kota: "Medan", jenis: "PTN" },
    ],
    catatan: "Biaya & durasi (termasuk koas & internship) perlu dipertimbangkan. Perlu daya tahan belajar tinggi.",
  },
  {
    id: "sains", nama: "Sains & Matematika", emoji: "🔬", kode: "IRA",
    deskripsi: "Memahami hukum dasar alam & angka. Fondasi bagi riset, teknologi, dan pengajaran. Cocok untuk yang haus 'mengapa'.",
    contohProdi: ["Matematika", "Fisika", "Kimia", "Biologi", "Statistika", "Aktuaria", "Geofisika"],
    matkulInti: ["Kalkulus & Aljabar Linear", "Fisika/Kimia/Biologi Dasar", "Metode Statistika", "Komputasi Sains", "Metodologi Penelitian"],
    prospek: ["Peneliti / dosen", "Data & Actuarial Analyst", "Quality/Lab Analyst", "Ahli statistika (BPS, riset)", "Guru sains", "Industri farmasi/energi"],
    kampus: [
      { nama: "Institut Teknologi Bandung (ITB)", kota: "Bandung", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (UGM)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Indonesia (UI)", kota: "Depok", jenis: "PTN" },
      { nama: "Institut Pertanian Bogor (IPB)", kota: "Bogor", jenis: "PTN" },
      { nama: "Institut Teknologi Sepuluh Nopember (ITS)", kota: "Surabaya", jenis: "PTN" },
    ],
  },
  {
    id: "ekonomi-bisnis", nama: "Ekonomi, Bisnis & Manajemen", emoji: "📈", kode: "ECS",
    deskripsi: "Mengelola sumber daya, uang, dan organisasi agar tumbuh. Serbaguna — dibutuhkan di hampir semua industri & wirausaha.",
    contohProdi: ["Manajemen", "Ilmu Ekonomi", "Bisnis Digital", "Kewirausahaan", "Ekonomi Pembangunan", "Manajemen Bisnis Internasional"],
    matkulInti: ["Pengantar Ekonomi (Mikro/Makro)", "Manajemen & Pemasaran", "Akuntansi Dasar", "Statistika Bisnis", "Manajemen Keuangan", "Strategi Bisnis"],
    prospek: ["Manajer / analis bisnis", "Marketing & Brand", "Konsultan", "Perbankan & keuangan", "Wirausahawan", "Human Resources"],
    kampus: [
      { nama: "Universitas Indonesia (UI)", kota: "Depok", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (UGM)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Airlangga (Unair)", kota: "Surabaya", jenis: "PTN" },
      { nama: "Universitas Prasetiya Mulya", kota: "Tangerang", jenis: "PTS" },
      { nama: "Universitas Bina Nusantara (Binus)", kota: "Jakarta", jenis: "PTS" },
      { nama: "Universitas Brawijaya (UB)", kota: "Malang", jenis: "PTN" },
    ],
  },
  {
    id: "hukum", nama: "Hukum", emoji: "⚖️", kode: "ESC",
    deskripsi: "Menegakkan keadilan & mengatur kehidupan bersama lewat aturan. Melatih penalaran tajam, argumentasi, dan ketelitian teks.",
    contohProdi: ["Ilmu Hukum (peminatan: pidana, perdata, tata negara, bisnis, internasional)"],
    matkulInti: ["Pengantar Ilmu Hukum", "Hukum Perdata & Pidana", "Hukum Tata Negara", "Hukum Acara", "Hukum Bisnis", "Filsafat Hukum"],
    prospek: ["Advokat / pengacara", "Hakim & jaksa (via jalur khusus)", "Notaris", "Legal officer / corporate lawyer", "Diplomat", "Legislatif & pemerintahan"],
    kampus: [
      { nama: "Universitas Indonesia (UI)", kota: "Depok", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (UGM)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Airlangga (Unair)", kota: "Surabaya", jenis: "PTN" },
      { nama: "Universitas Diponegoro (Undip)", kota: "Semarang", jenis: "PTN" },
      { nama: "Universitas Padjadjaran (Unpad)", kota: "Bandung", jenis: "PTN" },
    ],
  },
  {
    id: "sospol", nama: "Ilmu Sosial & Politik", emoji: "🌏", kode: "SEC",
    deskripsi: "Memahami masyarakat, negara, dan hubungan antarbangsa. Cocok untuk yang peduli isu publik, kebijakan, dan diplomasi.",
    contohProdi: ["Hubungan Internasional", "Ilmu Politik", "Administrasi Publik", "Sosiologi", "Ilmu Pemerintahan", "Kriminologi"],
    matkulInti: ["Teori Sosial & Politik", "Sistem Politik Indonesia", "Hubungan Internasional", "Kebijakan Publik", "Metodologi Penelitian Sosial"],
    prospek: ["Diplomat / staf kementerian", "Analis kebijakan", "Peneliti sosial", "Jurnalis", "NGO & organisasi internasional", "ASN"],
    kampus: [
      { nama: "Universitas Indonesia (UI)", kota: "Depok", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (UGM)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Airlangga (Unair)", kota: "Surabaya", jenis: "PTN" },
      { nama: "Universitas Padjadjaran (Unpad)", kota: "Bandung", jenis: "PTN" },
      { nama: "UPN Veteran Yogyakarta", kota: "Yogyakarta", jenis: "PTN" },
    ],
  },
  {
    id: "komunikasi", nama: "Ilmu Komunikasi & Media", emoji: "🎙️", kode: "AES",
    deskripsi: "Menyampaikan pesan secara efektif lewat media, kampanye, dan cerita. Cocok untuk yang ekspresif, kreatif, dan senang orang.",
    contohProdi: ["Ilmu Komunikasi", "Jurnalistik", "Public Relations", "Periklanan", "Broadcasting", "Digital Media"],
    matkulInti: ["Teori Komunikasi", "Jurnalistik & Media", "Public Relations", "Produksi Media (video/audio)", "Komunikasi Pemasaran", "Media Digital"],
    prospek: ["Content creator & strategist", "PR / Corporate Communication", "Jurnalis & produser", "Digital marketer", "Brand & advertising", "Social media manager"],
    kampus: [
      { nama: "Universitas Indonesia (UI)", kota: "Depok", jenis: "PTN" },
      { nama: "Universitas Padjadjaran (Unpad)", kota: "Bandung", jenis: "PTN" },
      { nama: "Universitas Multimedia Nusantara (UMN)", kota: "Tangerang", jenis: "PTS" },
      { nama: "London School of Public Relations (LSPR)", kota: "Jakarta", jenis: "PTS" },
      { nama: "Universitas Bina Nusantara (Binus)", kota: "Jakarta", jenis: "PTS" },
    ],
  },
  {
    id: "psikologi", nama: "Psikologi", emoji: "🧠", kode: "SIA",
    deskripsi: "Memahami pikiran & perilaku manusia. Menggabungkan sains dan kepedulian pada orang. Luas: klinis, industri, pendidikan, sosial.",
    contohProdi: ["Psikologi (peminatan: klinis, industri-organisasi (PIO), pendidikan, sosial, perkembangan)"],
    matkulInti: ["Psikologi Umum", "Psikologi Perkembangan", "Psikologi Kepribadian", "Psikometri & Statistik", "Psikologi Klinis & Industri", "Metode Penelitian"],
    prospek: ["HRD & talent (PIO)", "Psikolog (butuh profesi/magister)", "Konselor", "Peneliti perilaku / UX researcher", "Trainer & asesor", "Pendidikan"],
    kampus: [
      { nama: "Universitas Indonesia (UI)", kota: "Depok", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (UGM)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Airlangga (Unair)", kota: "Surabaya", jenis: "PTN" },
      { nama: "Universitas Padjadjaran (Unpad)", kota: "Bandung", jenis: "PTN" },
      { nama: "Universitas Katolik Atma Jaya", kota: "Jakarta", jenis: "PTS" },
    ],
    catatan: "Untuk menjadi 'Psikolog' berpraktik perlu lanjut Magister Profesi Psikologi.",
  },
  {
    id: "pendidikan", nama: "Pendidikan & Keguruan", emoji: "🎓", kode: "SEC",
    deskripsi: "Mencetak generasi lewat mengajar & mendidik. Cocok untuk yang sabar, senang berbagi ilmu, dan ingin berdampak jangka panjang.",
    contohProdi: ["PGSD", "Pendidikan Matematika/IPA/Bahasa", "Bimbingan Konseling", "PAUD", "Teknologi Pendidikan", "Pendidikan Luar Biasa"],
    matkulInti: ["Ilmu Pendidikan", "Psikologi Pendidikan", "Kurikulum & Pembelajaran", "Evaluasi Pendidikan", "Praktik Mengajar (PPL)"],
    prospek: ["Guru (SD–SMA)", "Dosen", "Pengembang kurikulum / edutech", "Konselor sekolah", "Trainer & instruktur", "ASN pendidikan"],
    kampus: [
      { nama: "Universitas Pendidikan Indonesia (UPI)", kota: "Bandung", jenis: "PTN" },
      { nama: "Universitas Negeri Yogyakarta (UNY)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Negeri Jakarta (UNJ)", kota: "Jakarta", jenis: "PTN" },
      { nama: "Universitas Negeri Malang (UM)", kota: "Malang", jenis: "PTN" },
      { nama: "Universitas Negeri Surabaya (Unesa)", kota: "Surabaya", jenis: "PTN" },
    ],
  },
  {
    id: "seni-desain", nama: "Seni, Desain & Industri Kreatif", emoji: "🎨", kode: "AER",
    deskripsi: "Menciptakan karya visual, audio, dan pengalaman. Cocok untuk yang imajinatif & ekspresif; industri kreatif terus tumbuh.",
    contohProdi: ["Desain Komunikasi Visual (DKV)", "Desain Produk", "Seni Rupa", "Film & Animasi", "Musik", "Desain Interior"],
    matkulInti: ["Nirmana & Rupa Dasar", "Gambar & Ilustrasi", "Tipografi", "Desain Digital (UI/UX, motion)", "Sejarah Seni & Desain", "Tugas Studio/Karya"],
    prospek: ["Graphic/UI-UX Designer", "Ilustrator & animator", "Art director", "Product/Interior designer", "Content & creative industry", "Seniman"],
    kampus: [
      { nama: "Institut Seni Indonesia (ISI) Yogyakarta", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Institut Teknologi Bandung (FSRD ITB)", kota: "Bandung", jenis: "PTN" },
      { nama: "Institut Kesenian Jakarta (IKJ)", kota: "Jakarta", jenis: "PTS" },
      { nama: "Universitas Multimedia Nusantara (UMN)", kota: "Tangerang", jenis: "PTS" },
      { nama: "Universitas Bina Nusantara (Binus)", kota: "Jakarta", jenis: "PTS" },
    ],
  },
  {
    id: "arsitektur", nama: "Arsitektur & Perencanaan", emoji: "🏛️", kode: "AIR",
    deskripsi: "Merancang ruang & kota — perpaduan seni, teknik, dan kepedulian pada manusia & lingkungan.",
    contohProdi: ["Arsitektur", "Perencanaan Wilayah & Kota (PWK)", "Desain Interior", "Arsitektur Lanskap"],
    matkulInti: ["Studio Perancangan Arsitektur", "Struktur & Konstruksi", "Teori & Sejarah Arsitektur", "Perancangan Kota", "Teknologi Bangunan", "CAD/BIM"],
    prospek: ["Arsitek", "Urban/Perencana kota", "Desainer interior", "Konsultan properti & real estate", "Kontraktor/pengembang", "Konsultan lingkungan binaan"],
    kampus: [
      { nama: "Institut Teknologi Bandung (ITB)", kota: "Bandung", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (UGM)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Institut Teknologi Sepuluh Nopember (ITS)", kota: "Surabaya", jenis: "PTN" },
      { nama: "Universitas Diponegoro (Undip)", kota: "Semarang", jenis: "PTN" },
      { nama: "Universitas Tarumanagara (Untar)", kota: "Jakarta", jenis: "PTS" },
    ],
  },
  {
    id: "agro", nama: "Pertanian, Kehutanan & Kelautan", emoji: "🌱", kode: "RIS",
    deskripsi: "Mengelola pangan, alam, dan sumber daya hayati secara berkelanjutan. Strategis untuk ketahanan pangan & lingkungan.",
    contohProdi: ["Agroteknologi / Agronomi", "Teknologi Pangan", "Kehutanan", "Perikanan & Kelautan", "Peternakan", "Agribisnis"],
    matkulInti: ["Biologi & Ekologi", "Ilmu Tanah & Tanaman", "Teknologi Budidaya", "Teknologi Pangan", "Agribisnis & Manajemen", "Konservasi Sumber Daya"],
    prospek: ["Agronom / penyuluh", "Ahli teknologi pangan (QC/R&D)", "Pengelola kehutanan/perikanan", "Agripreneur", "Peneliti pertanian", "Industri pangan & FMCG"],
    kampus: [
      { nama: "Institut Pertanian Bogor (IPB)", kota: "Bogor", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (UGM)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Brawijaya (UB)", kota: "Malang", jenis: "PTN" },
      { nama: "Universitas Padjadjaran (Unpad)", kota: "Bandung", jenis: "PTN" },
      { nama: "Universitas Andalas (Unand)", kota: "Padang", jenis: "PTN" },
    ],
  },
  {
    id: "bahasa", nama: "Bahasa, Sastra & Budaya", emoji: "📚", kode: "ASI",
    deskripsi: "Mendalami bahasa, karya sastra, dan budaya. Cocok untuk yang cinta kata, lintas budaya, dan komunikasi.",
    contohProdi: ["Sastra Inggris", "Sastra Indonesia", "Sastra Jepang/Korea/Arab/Mandarin", "Linguistik", "Ilmu Sejarah", "Antropologi Budaya"],
    matkulInti: ["Linguistik Umum", "Kajian Sastra", "Keterampilan Bahasa (lanjut)", "Penerjemahan", "Budaya & Sejarah", "Penulisan Kreatif/Akademik"],
    prospek: ["Penerjemah & interpreter", "Editor & penulis", "Pengajar bahasa", "Content & localization", "Diplomasi budaya", "Jurnalis/peneliti budaya"],
    kampus: [
      { nama: "Universitas Indonesia (UI)", kota: "Depok", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (UGM)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Padjadjaran (Unpad)", kota: "Bandung", jenis: "PTN" },
      { nama: "Universitas Negeri Yogyakarta (UNY)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Negeri Malang (UM)", kota: "Malang", jenis: "PTN" },
    ],
  },
  {
    id: "agama-filsafat", nama: "Studi Agama & Filsafat", emoji: "🕌", kode: "SIA",
    deskripsi: "Mendalami keyakinan, makna hidup, etika, dan pemikiran. Cocok untuk yang reflektif, spiritual, dan senang pertanyaan besar.",
    contohProdi: ["Studi Agama (Islam/Kristen/dll.)", "Filsafat", "Ilmu Al-Qur'an & Tafsir", "Perbandingan Agama", "Pendidikan Agama", "Hukum Islam/Syariah"],
    matkulInti: ["Filsafat & Logika", "Studi Teks Keagamaan", "Etika & Teologi", "Sejarah Pemikiran", "Metodologi Studi Agama"],
    prospek: ["Pemuka/penyuluh agama", "Dosen & peneliti", "Penulis & pemikir", "Konselor spiritual", "Pendidik agama", "Lembaga keagamaan & sosial"],
    kampus: [
      { nama: "UIN Syarif Hidayatullah", kota: "Jakarta", jenis: "PTN" },
      { nama: "UIN Sunan Kalijaga", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (Filsafat)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Sekolah Tinggi Filsafat Driyarkara", kota: "Jakarta", jenis: "PTS" },
    ],
  },
  {
    id: "pariwisata", nama: "Pariwisata, Perhotelan & Kuliner", emoji: "🧳", kode: "ESR",
    deskripsi: "Mengelola pengalaman, layanan, dan perjalanan. Cocok untuk yang ramah, energik, dan senang melayani serta bertemu banyak orang.",
    contohProdi: ["Pariwisata", "Perhotelan (Hospitality)", "Manajemen Tata Boga / Kuliner", "Manajemen Event / MICE", "Usaha Perjalanan Wisata"],
    matkulInti: ["Pengantar Pariwisata & Hospitality", "Manajemen Hotel & Restoran", "Food & Beverage", "Manajemen Event", "Bahasa Asing", "Praktik Industri/Magang"],
    prospek: ["Hotel & restaurant management", "Event/MICE organizer", "Tour & travel", "Chef & F&B professional", "Pengelola destinasi wisata", "Wirausaha kuliner/hospitality"],
    kampus: [
      { nama: "Politeknik Pariwisata (Poltekpar) NHI Bandung", kota: "Bandung", jenis: "Politeknik" },
      { nama: "Politeknik Pariwisata Bali", kota: "Denpasar", jenis: "Politeknik" },
      { nama: "Universitas Udayana", kota: "Denpasar", jenis: "PTN" },
      { nama: "Universitas Trisakti (Pariwisata)", kota: "Jakarta", jenis: "PTS" },
      { nama: "Podomoro University", kota: "Jakarta", jenis: "PTS" },
    ],
  },
  {
    id: "kesmas", nama: "Kesehatan Masyarakat & Lingkungan", emoji: "🌍", kode: "ISR",
    deskripsi: "Menjaga kesehatan pada level populasi & lingkungan — pencegahan, kebijakan, sanitasi, K3. Cocok untuk yang peduli dampak luas.",
    contohProdi: ["Kesehatan Masyarakat", "Kesehatan Lingkungan", "Keselamatan & Kesehatan Kerja (K3)", "Epidemiologi", "Gizi Masyarakat"],
    matkulInti: ["Epidemiologi", "Biostatistika", "Promosi Kesehatan", "Kesehatan Lingkungan", "Administrasi Kebijakan Kesehatan", "K3"],
    prospek: ["Epidemiolog / analis kesehatan", "Petugas K3 (HSE) industri", "Promotor kesehatan", "Peneliti & NGO kesehatan", "ASN dinas kesehatan", "Sanitarian"],
    kampus: [
      { nama: "Universitas Indonesia (UI)", kota: "Depok", jenis: "PTN" },
      { nama: "Universitas Airlangga (Unair)", kota: "Surabaya", jenis: "PTN" },
      { nama: "Universitas Diponegoro (Undip)", kota: "Semarang", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (UGM)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Hasanuddin (Unhas)", kota: "Makassar", jenis: "PTN" },
    ],
  },
  {
    id: "akuntansi", nama: "Akuntansi, Keuangan & Perpajakan", emoji: "🧾", kode: "CES",
    deskripsi: "Mencatat, menganalisis, dan menjaga kesehatan keuangan organisasi. Cocok untuk yang teliti, tertib, dan suka angka.",
    contohProdi: ["Akuntansi", "Perpajakan", "Keuangan & Perbankan", "Akuntansi Sektor Publik", "Audit"],
    matkulInti: ["Akuntansi Keuangan", "Akuntansi Biaya & Manajemen", "Auditing", "Perpajakan", "Sistem Informasi Akuntansi", "Analisis Laporan Keuangan"],
    prospek: ["Akuntan & auditor", "Konsultan pajak", "Analis keuangan", "Financial controller", "Perbankan", "ASN keuangan (mis. DJP, BPK)"],
    kampus: [
      { nama: "Universitas Indonesia (UI)", kota: "Depok", jenis: "PTN" },
      { nama: "Universitas Gadjah Mada (UGM)", kota: "Yogyakarta", jenis: "PTN" },
      { nama: "Universitas Airlangga (Unair)", kota: "Surabaya", jenis: "PTN" },
      { nama: "PKN STAN", kota: "Tangerang Selatan", jenis: "Kedinasan" },
      { nama: "Universitas Brawijaya (UB)", kota: "Malang", jenis: "PTN" },
    ],
    catatan: "PKN STAN (kedinasan) gratis + ikatan dinas; jalur seleksinya ketat.",
  },
];

/**
 * Skor kecocokan rumpun terhadap kode Holland pengguna (mis. "SIA").
 * Huruf di posisi awal kode pengguna diberi bobot lebih besar.
 */
export function skorRumpun(kodeUser: string, rumpun: RumpunJurusan): number {
  const bobot = [3, 2, 1]; // untuk huruf ke-1,2,3 kode user
  let skor = 0;
  for (let i = 0; i < kodeUser.length; i++) {
    if (rumpun.kode.includes(kodeUser[i])) skor += bobot[i] ?? 1;
  }
  return skor;
}

/** Urutkan rumpun paling cocok untuk kode Holland pengguna. */
export function rumpunTerbaik(kodeUser: string, batas = 5): RumpunJurusan[] {
  return [...RUMPUN_JURUSAN]
    .map((r) => ({ r, s: skorRumpun(kodeUser, r) }))
    .sort((a, b) => b.s - a.s)
    .slice(0, batas)
    .map((x) => x.r);
}

/* -------------------------- provinsi / geografis --------------------------- */
// Kota yang dipakai di data kampus → provinsinya (akurat & terverifikasi).
const KOTA_PROVINSI: Record<string, string> = {
  Bandung: "Jawa Barat",
  Depok: "Jawa Barat",
  Bogor: "Jawa Barat",
  Jakarta: "DKI Jakarta",
  Tangerang: "Banten",
  "Tangerang Selatan": "Banten",
  Yogyakarta: "DI Yogyakarta",
  Surabaya: "Jawa Timur",
  Malang: "Jawa Timur",
  Semarang: "Jawa Tengah",
  Medan: "Sumatera Utara",
  Padang: "Sumatera Barat",
  Denpasar: "Bali",
  Makassar: "Sulawesi Selatan",
};

export function provinsiKampus(k: Kampus): string {
  return KOTA_PROVINSI[k.kota] ?? "Lainnya";
}

/** Daftar provinsi yang muncul di data kurasi (untuk filter), urut alfabet. */
export const PROVINSI_KURASI: string[] = [
  ...new Set(
    RUMPUN_JURUSAN.flatMap((r) => r.kampus.map((k) => provinsiKampus(k)))
  ),
].sort((a, b) => a.localeCompare(b, "id"));

/**
 * Tautan pencarian ke daftar LENGKAP & resmi (PDDikti) via Google — dijamin
 * valid dan selalu terbarukan, mencakup semua kampus termasuk PTKIN/UIN kecil.
 * Dipakai karena situs statis ini tidak menyimpan seluruh 4000+ kampus.
 */
export function linkKampusLengkap(namaRumpun: string, provinsi?: string): string {
  const q = provinsi
    ? `daftar kampus jurusan ${namaRumpun} di ${provinsi} pddikti akreditasi`
    : `daftar kampus jurusan ${namaRumpun} di Indonesia pddikti akreditasi`;
  return `https://www.google.com/search?q=${encodeURIComponent(q)}`;
}

/** Tautan langsung ke portal pencarian resmi PDDikti (data lengkap kampus & prodi). */
export const PDDIKTI_URL = "https://pddikti.kemdiktisaintek.go.id/";
