import type { DokMetode } from "@/components/PenjelasanMetode";

export const WETON_DOK: DokMetode = {
  ringkasan:
    "Weton adalah perhitungan hari kelahiran dalam kalender Jawa — perpaduan hari biasa (Senin–Minggu) dengan hari pasaran (Legi, Pahing, Pon, Wage, Kliwon). Dari kombinasi ini lahir 'neptu' (nilai angka) yang dipakai untuk membaca watak, memilih hari baik, hingga menimbang kecocokan jodoh. Ini warisan budaya, bukan sains.",
  sejarah:
    "Sistem hari pasaran (pancawara) yang berjumlah lima sudah ada di Nusantara jauh sebelum Islam masuk, berakar pada tradisi Jawa kuno dan pengaruh Hindu-Buddha. Titik penting terjadi pada 1633 Masehi, ketika Sultan Agung dari Kesultanan Mataram menyatukan kalender Saka (berbasis matahari, warisan Hindu) dengan kalender Hijriah (berbasis bulan, dari Islam) menjadi Kalender Jawa. Sejak itu, siklus tujuh hari (saptawara) dan lima pasaran berjalan berdampingan, dan weton menjadi bagian tak terpisahkan dari kehidupan masyarakat Jawa.",
  pencipta:
    "Weton bukan ciptaan satu orang, melainkan kearifan kolektif masyarakat Jawa yang diwariskan turun-temurun. Kodifikasi kalendernya dikaitkan dengan Sultan Agung (Mataram, abad ke-17). Pengetahuan tentang watak dan hitungannya dihimpun dalam kitab-kitab Primbon.",
  tujuan:
    "Weton dipakai untuk beberapa keperluan tradisional: mengenali watak bawaan seseorang, memilih hari baik untuk hajatan (pernikahan, pindah rumah, memulai usaha), menimbang kecocokan pasangan (petung jodoh), memperkirakan arah rejeki, serta menentukan hari peringatan (mis. selapanan setiap 35 hari).",
  dasar:
    "Dasarnya adalah filosofi dan numerologi budaya, bukan pembuktian ilmiah. Setiap hari dan pasaran diberi 'neptu' — nilai angka. Neptu hari: Minggu 5, Senin 4, Selasa 3, Rabu 7, Kamis 8, Jumat 6, Sabtu 9. Neptu pasaran: Legi 5, Pahing 9, Pon 7, Wage 4, Kliwon 8. Siklus 7 hari dikalikan 5 pasaran menghasilkan siklus 35 hari yang disebut 'selapan'. Angka-angka ini kemudian ditafsirkan menjadi watak (unsur/laku), rejeki, dan kecocokan.",
  budaya:
    "Weton hidup di dalam tradisi Primbon Jawa — kumpulan pengetahuan tentang perhitungan hari, watak, jodoh, dan ramalan. Ia melekat pada ritual daur hidup: kelahiran (weton bayi), pernikahan (petung jodoh), hingga peringatan kematian. Bagi banyak keluarga Jawa, mengetahui weton adalah bagian dari identitas dan penghormatan pada leluhur.",
  caraKerja:
    "Langkah pertama menentukan hari (dari kalender Masehi biasa) dan pasaran (siklus 5 hari yang dihitung dari tanggal acuan). Gabungan keduanya, misalnya 'Jumat Kliwon', adalah wetonmu. Neptu hari dan neptu pasaran dijumlahkan menjadi neptu total, lalu total itu dipetakan ke tabel watak, 'laku' (unsur seperti geni/api, banyu/air, bumi, angin), arah rejeki, dan pangarasan (watak bawaan).",
  caraSkor:
    "Contoh: Jumat (6) + Kliwon (8) = neptu 11. Neptu total menentukan 'laku' lewat rentang tertentu (mis. 10–12 = Lakune Geni/api). Untuk arah rejeki dipakai neptu mod 5, untuk pangarasan neptu mod 3. Untuk petung jodoh, neptu kedua pasangan dijumlahkan lalu di-mod (versi umum mod 8) untuk mendapat kategori seperti Ratu, Jodoh, Pegat, atau Pesthi. Semua hasil 'kurang baik' dalam tradisi yang bijak selalu dibingkai sebagai area yang butuh ikhtiar lebih — bukan vonis.",
  kelebihan: [
    "Kaya makna filosofis dan mempererat ikatan dengan budaya & leluhur.",
    "Menjadi kerangka refleksi diri yang puitis dan mudah diingat.",
    "Memberi panduan simbolik untuk memaknai momen-momen penting hidup.",
    "Melestarikan pengetahuan lokal Nusantara yang berharga.",
  ],
  kekurangan: [
    "Tidak memiliki dasar ilmiah; tidak bisa memprediksi watak atau nasib secara akurat.",
    "Jika ditafsirkan kaku, konsep 'hari naas' bisa menimbulkan kecemasan berlebih.",
    "Berpotensi terasa deterministik dan membatasi bila dianggap kepastian.",
  ],
  kritik:
    "Seperti astrologi pada umumnya, tidak ada bukti ilmiah bahwa tanggal atau hari kelahiran menentukan watak, rejeki, atau kecocokan seseorang. Kesan 'akurat' sering muncul karena efek Barnum (deskripsi umum yang terasa personal) dan bias konfirmasi. Karena itu weton digolongkan sebagai tradisi budaya dan spiritual, bukan asesmen psikologis.",
  validitas:
    "Weton tidak pernah — dan memang bukan dimaksudkan untuk — diuji lewat metode ilmiah. Nilainya terletak pada makna budaya, kontinuitas tradisi, dan fungsi reflektif, bukan pada kekuatan prediktif. Membacanya sebagai cermin refleksi jauh lebih sehat daripada sebagai ramalan pasti.",
  kapanCocok: [
    "Melestarikan dan menghormati warisan budaya Jawa.",
    "Bahan refleksi diri dan perenungan yang bermakna.",
    "Memilih tanggal seremonial sesuai adat dan kesepakatan keluarga.",
  ],
  kapanKurang: [
    "Keputusan yang menuntut bukti: kesehatan, keuangan, atau karier — pakai data & asesmen tervalidasi.",
    "Memvonis kecocokan pasangan; hubungan sehat dibangun dari komunikasi, bukan hitungan neptu.",
    "Situasi yang berisiko menimbulkan ketakutan atau fatalisme.",
  ],
  studiKasus:
    "Sepasang calon pengantin mendapati petung jodoh mereka jatuh pada kategori 'Pegat' (secara harfiah dikaitkan dengan rawan pisah). Dalam tradisi yang bijak, ini tidak dibaca sebagai vonis, melainkan undangan untuk lebih sadar merawat komunikasi dan kesabaran. Banyak sesepuh menutup hitungan dengan pesan bahwa usaha dan doa selalu berada di atas petungan.",
  faq: [
    {
      t: "Apa bedanya weton dengan zodiak?",
      j: "Keduanya sama-sama sistem budaya berbasis waktu lahir. Zodiak memakai posisi matahari di rasi bintang; weton memakai kalender Jawa (hari + pasaran + neptu). Sama-sama untuk refleksi, bukan sains.",
    },
    {
      t: "Apakah hari naas harus dihindari?",
      j: "Dalam tradisi, itu panduan simbolik untuk lebih berhati-hati, bukan larangan mutlak. Jangan sampai menimbulkan ketakutan; ikhtiar dan kehati-hatian yang wajar sudah cukup.",
    },
    {
      t: "Kenapa weton saya kadang beda sehari?",
      j: "Dalam tradisi Jawa, hari berganti saat maghrib. Bila kamu lahir malam setelah maghrib, sebagian orang menghitungnya sebagai hari berikutnya. Djiva memakai perhitungan tengah malam standar, jadi bisa berbeda untuk kelahiran larut malam.",
    },
  ],
  referensi: [
    "Serat Centhini — ensiklopedia budaya Jawa klasik.",
    "Primbon Betaljemur Adammakna — kitab primbon yang banyak dirujuk.",
    "Sejarah penyatuan Kalender Jawa oleh Sultan Agung Mataram (1633 M).",
  ],
};
