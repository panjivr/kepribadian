import type { DokMetode } from "@/components/PenjelasanMetode";

export const RIASEC_DOK: DokMetode = {
  ringkasan:
    "RIASEC (Holland Codes) memetakan minat kariermu ke enam tipe — Realistic, Investigative, Artistic, Social, Enterprising, Conventional. Tiga tipe teratasmu membentuk 'kode Holland' (mis. SIA) yang bisa dicocokkan dengan lingkungan kerja & jurusan kuliah yang paling membuatmu betah.",
  sejarah:
    "Dikembangkan psikolog John L. Holland pada 1959 dan disempurnakan sepanjang dekade berikutnya. Gagasannya sederhana namun kuat: orang paling puas dan berhasil ketika lingkungan kerjanya cocok dengan tipe kepribadian minatnya. Model ini menjadi salah satu kerangka bimbingan karier paling banyak dipakai di dunia, termasuk dalam sistem O*NET milik Departemen Tenaga Kerja Amerika Serikat.",
  pencipta:
    "John L. Holland (1919–2008), psikolog Amerika yang mengabdikan kariernya pada teori pilihan karier (theory of vocational choice).",
  tujuan:
    "Membantu seseorang menemukan bidang studi & pekerjaan yang selaras dengan minat alaminya, sehingga terhindar dari salah jurusan dan lebih mungkin menikmati serta bertahan di bidangnya.",
  dasar:
    "Enam tipe disusun dalam 'heksagon Holland': tipe yang bersebelahan (mis. Realistic–Investigative) lebih mirip, sedangkan yang berseberangan (mis. Realistic–Social) paling berbeda. Prinsip 'kongruensi': makin cocok minat seseorang dengan lingkungannya, makin tinggi kepuasan & kinerjanya. Analoginya: menanam padi di sawah dan kaktus di gurun — tiap 'benih minat' punya 'tanah' yang paling menyuburkannya.",
  caraKerja:
    "Kamu menilai 36 pernyataan aktivitas (6 per tipe) pada skala 1–5 sesuai seberapa kamu menikmatinya. Tiap pernyataan diberi analogi/contoh agar tak ada salah tafsir.",
  caraSkor:
    "Skor tiap tipe = jumlah 6 butirnya, lalu diperingkat. Tiga tipe tertinggi digabung menjadi kode Holland (mis. 'SIA'). Kode ini dicocokkan dengan rumpun jurusan: makin banyak huruf kode-mu yang muncul pada kode sebuah rumpun (dengan bobot lebih besar untuk minat utamamu), makin cocok rumpun itu untukmu.",
  kelebihan: [
    "Sangat praktis & langsung terpakai untuk memilih jurusan/karier.",
    "Tervalidasi luas dan dipakai lembaga bimbingan karier di banyak negara.",
    "Mudah dipahami — enam kategori yang intuitif.",
    "Fokus pada minat (yang relatif stabil), bukan sekadar kemampuan sesaat.",
  ],
  kekurangan: [
    "Minat bukan satu-satunya penentu sukses — kemampuan, nilai, dan peluang juga penting.",
    "Berbasis laporan diri: bisa bias oleh citra diri atau ekspektasi sosial.",
    "Dunia kerja modern makin lintas-bidang; banyak pekerjaan menggabungkan beberapa tipe.",
    "Kode bisa berubah seiring pengalaman & paparan baru.",
  ],
  kritik:
    "Kritik utama: model ini memotret MINAT, bukan BAKAT atau peluang nyata. Seseorang bisa berminat Artistic tetapi perlu melatih keterampilan agar kompetitif. Selain itu, mencocokkan diri terlalu kaku pada satu kode berisiko menutup peluang lintas-bidang. Karena itu, pakailah RIASEC sebagai kompas arah — bukan vonis — dan padukan dengan Big Five (kepribadian) serta pertimbangan nilai, biaya, dan realita pasar kerja.",
  validitas:
    "RIASEC termasuk instrumen minat karier dengan dukungan riset yang kuat dan reliabilitas baik. Struktur heksagonalnya berulang kali direplikasi lintas budaya. Meski demikian, versi 36-butir ini adalah estimasi ringkas untuk refleksi & penjurusan awal, bukan asesmen bimbingan karier lengkap yang biasanya lebih panjang.",
  kapanCocok: [
    "Siswa SMA/SMK yang memilih jurusan kuliah.",
    "Mahasiswa yang mempertimbangkan pindah/tambah minat.",
    "Siapa pun yang ingin menyelaraskan pekerjaan dengan minatnya.",
    "Bimbingan karier & konseling penjurusan.",
  ],
  kapanKurang: [
    "Menilai kemampuan/kecerdasan (pakai tes kognitif untuk itu).",
    "Keputusan final tanpa mempertimbangkan biaya, nilai rapor, & peluang kerja.",
    "Diagnosis psikologis.",
  ],
  studiKasus:
    "Contoh: Rangga bingung antara Teknik dan Kedokteran karena keduanya 'bergengsi'. Hasil RIASEC-nya IRA (Investigative-Realistic-Artistic) dengan Social rendah. Ia menyadari bahwa merawat pasien secara langsung (Social) kurang menyalakannya, sementara memecahkan masalah teknis & merancang (I+R+A) sangat cocok. Ia memilih Teknik/Arsitektur dan merasa jauh lebih 'nyambung' — menghindari risiko salah jurusan yang mahal.",
  faq: [
    { t: "Apakah kode Holland saya menentukan nasib?", j: "Tidak. Ia menunjukkan arah minat yang paling nyaman bagimu, bukan batas. Banyak orang sukses di bidang yang menggabungkan beberapa tipe." },
    { t: "Bagaimana kalau skor tiga tipe teratas saya mirip semua?", j: "Itu wajar dan berarti minatmu fleksibel. Lihat beberapa rumpun teratas sekaligus, lalu pertimbangkan nilai rapor, biaya, dan peluang kerja." },
    { t: "Apakah ini menggantikan tes penjurusan sekolah?", j: "Tidak menggantikan, tetapi melengkapi. Pakai sebagai titik mulai diskusi dengan guru BK, orang tua, dan risetmu sendiri tentang jurusan & kampus." },
    { t: "Minat saya berubah, apakah harus tes ulang?", j: "Boleh. Minat bisa berkembang seiring pengalaman baru; tes ulang tiap beberapa waktu wajar dilakukan." },
  ],
  referensi: [
    "Holland, J. L. (1997). Making Vocational Choices: A Theory of Vocational Personalities and Work Environments (3rd ed.).",
    "O*NET Interest Profiler — U.S. Department of Labor (kerangka RIASEC).",
    "Nauta, M. M. (2010). The Development, Evolution, and Status of Holland's Theory. Journal of Counseling Psychology.",
  ],
};
