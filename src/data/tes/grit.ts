import type { ItemLikertDimensi } from "@/lib/skoring";

/**
 * Grit (Ketabahan) — Angela Duckworth. Dua komponen: Konsistensi Minat &
 * Ketekunan Usaha. Skor grit = rata-rata keduanya. Item original.
 */
export type GritDim = "konsistensi" | "ketekunan";

export const GRIT_URUTAN: GritDim[] = ["konsistensi", "ketekunan"];

export const GRIT_INFO: Record<GritDim, { nama: string; deskripsi: string }> = {
  konsistensi: {
    nama: "Konsistensi Minat",
    deskripsi:
      "Seberapa kamu bertahan pada tujuan & minat yang sama dalam waktu lama, tanpa mudah beralih ke hal baru.",
  },
  ketekunan: {
    nama: "Ketekunan Usaha",
    deskripsi:
      "Seberapa gigih kamu terus berusaha & menyelesaikan, terutama saat menghadapi kesulitan, kebosanan, atau kegagalan.",
  },
};

export function bandGrit(persen: number): { label: string; warna: string; narasi: string } {
  if (persen >= 75)
    return { label: "Sangat Tabah", warna: "#30d158", narasi: "Kamu luar biasa gigih mengejar tujuan jangka panjang. Pastikan tujuannya memang layak — ketabahan paling bermakna saat diarahkan pada hal yang tepat." };
  if (persen >= 58)
    return { label: "Tabah", warna: "#67e8f9", narasi: "Kamu cukup konsisten & tekun. Kamu bertahan saat banyak orang menyerah." };
  if (persen >= 42)
    return { label: "Sedang", warna: "#818cf8", narasi: "Ketabahanmu di kisaran umum. Ia bisa dilatih — mulai dari satu tujuan yang benar-benar kamu pedulikan." };
  return { label: "Sedang Berkembang", warna: "#ff9f0a", narasi: "Kamu mungkin mudah berganti arah atau kehilangan semangat saat sulit. Itu manusiawi & bisa ditumbuhkan lewat tujuan yang bermakna & kebiasaan kecil." };
}

export const GRIT_TIPS: string[] = [
  "Pilih SATU tujuan jangka panjang yang benar-benar kamu pedulikan — grit tumbuh dari makna, bukan paksaan.",
  "Latih 'deliberate practice': fokus pada bagian yang paling sulit, bukan mengulang yang sudah bisa.",
  "Bangun kebiasaan kecil harian agar kemajuan terasa meski lambat.",
  "Ubah cara memandang kegagalan: sebagai umpan balik, bukan vonis.",
  "Kelilingi dirimu dengan lingkungan/komunitas yang gigih — ketekunan menular.",
];

export const GRIT_ITEMS: (ItemLikertDimensi & { dim: GritDim; bantuan: string })[] = [
  // Konsistensi Minat (item yang menggambarkan MUDAH berganti = reverse)
  { no: 1, dim: "konsistensi", key: -1, teks: "Ide atau proyek baru kadang mengalihkan saya dari yang sebelumnya.", bantuan: "Ini terbalik: kalau sangat sesuai, konsistensi minatmu justru perlu diasah (mudah teralihkan hal baru)." },
  { no: 2, dim: "konsistensi", key: -1, teks: "Minat saya berubah-ubah dari tahun ke tahun.", bantuan: "Terbalik: sering ganti minat = konsistensi rendah. Contoh: tiap beberapa bulan pindah hobi/cita-cita." },
  { no: 3, dim: "konsistensi", key: -1, teks: "Saya mudah bosan mengejar satu tujuan terlalu lama.", bantuan: "Terbalik: cepat bosan pada satu tujuan menurunkan skor konsistensi." },
  { no: 4, dim: "konsistensi", teks: "Saya tetap fokus pada tujuan yang sama meski butuh bertahun-tahun.", bantuan: "Contoh: cita-cita yang kamu pegang sejak lama dan terus kamu kejar." },
  { no: 5, dim: "konsistensi", teks: "Sekali menetapkan tujuan penting, saya jarang menggantinya.", bantuan: "Analogi: seperti kapal yang tetap ke arah pelabuhan yang sama meski ada gelombang." },
  { no: 6, dim: "konsistensi", teks: "Saya sudah lama menekuni minat/bidang yang sama dengan tekun.", bantuan: "Contoh: satu bidang yang kamu dalami terus, bukan lompat-lompat." },
  // Ketekunan Usaha
  { no: 7, dim: "ketekunan", teks: "Saya menyelesaikan apa pun yang sudah saya mulai.", bantuan: "Contoh: tugas atau proyek kamu tuntaskan, bukan ditinggalkan separuh jalan." },
  { no: 8, dim: "ketekunan", teks: "Kemunduran atau kegagalan tidak membuat saya menyerah.", bantuan: "Analogi: seperti pegas — ditekan kegagalan, kamu justru memantul bangkit." },
  { no: 9, dim: "ketekunan", teks: "Saya pekerja keras yang gigih.", bantuan: "Contoh: orang mengenalmu sebagai yang tak kenal lelah saat mengejar sesuatu." },
  { no: 10, dim: "ketekunan", teks: "Saya terus berusaha meski pekerjaannya membosankan atau berat.", bantuan: "Contoh: bagian yang menjemukan pun kamu selesaikan demi tujuan besar." },
  { no: 11, dim: "ketekunan", teks: "Saya tekun mengatasi rintangan untuk mencapai hal penting.", bantuan: "Analogi: seperti air yang terus mengalir mencari celah sampai tembus." },
  { no: 12, dim: "ketekunan", teks: "Saya rajin dan jarang menunda hal yang harus diselesaikan.", bantuan: "Contoh: begitu ada yang harus dikerjakan, kamu langsung menggarapnya konsisten." },
];
