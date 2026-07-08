/**
 * CliftonStrengths® adalah merek dagang & properti Gallup, Inc.
 * File ini TIDAK memuat pertanyaan atau teks deskripsi resmi Gallup.
 * Nama 34 tema disebut sekadar sebagai referensi faktual (nominative use);
 * seluruh kalimat "desk" & "ringkas" di bawah adalah ringkasan orisinal Djiva,
 * bukan terjemahan/kutipan dari materi berhak cipta Gallup.
 * Tes resminya hanya bisa diambil di gallup.com/cliftonstrengths.
 */

export type Domain = "Executing" | "Influencing" | "Relationship" | "Strategic";

export interface DomainInfo {
  nama: string;
  warna: string;
  ringkas: string;
}

export const DOMAIN_INFO: Record<Domain, DomainInfo> = {
  Executing: {
    nama: "Eksekusi",
    warna: "#ff9f0a",
    ringkas: "Kekuatan yang membuat rencana benar-benar terwujud lewat kerja nyata dan ketekunan.",
  },
  Influencing: {
    nama: "Memengaruhi",
    warna: "#ff453a",
    ringkas: "Kekuatan yang menggerakkan, meyakinkan, dan mengajak orang lain untuk ikut bergerak.",
  },
  Relationship: {
    nama: "Membangun Relasi",
    warna: "#30d158",
    ringkas: "Kekuatan yang merekatkan tim lewat kepercayaan dan hubungan yang tulus.",
  },
  Strategic: {
    nama: "Berpikir Strategis",
    warna: "#3b82f6",
    ringkas: "Kekuatan yang menyerap informasi lalu mengolahnya menjadi arah dan pilihan yang lebih baik.",
  },
};

export const DOMAIN_URUTAN: Domain[] = [
  "Executing",
  "Influencing",
  "Relationship",
  "Strategic",
];

export interface CliftonTheme {
  id: string;
  nama: string;
  domain: Domain;
  /** Ringkasan orisinal Djiva, bukan teks resmi Gallup. */
  desk: string;
}

export const CLIFTON_THEMES: CliftonTheme[] = [
  // Executing
  { id: "achiever", nama: "Achiever", domain: "Executing", desk: "Dorongan batin untuk terus produktif dan mencapai target setiap hari." },
  { id: "arranger", nama: "Arranger", domain: "Executing", desk: "Lihai menyusun ulang sumber daya agar semua berjalan lebih efisien." },
  { id: "belief", nama: "Belief", domain: "Executing", desk: "Dipandu nilai inti yang stabil dan menuntun setiap keputusan besar." },
  { id: "consistency", nama: "Consistency", domain: "Executing", desk: "Menjaga aturan yang sama agar setiap orang diperlakukan setara." },
  { id: "deliberative", nama: "Deliberative", domain: "Executing", desk: "Berhati-hati, menimbang risiko masak-masak sebelum mengambil langkah penting." },
  { id: "discipline", nama: "Discipline", domain: "Executing", desk: "Nyaman dengan rutinitas, struktur, dan jadwal yang tertata rapi." },
  { id: "focus", nama: "Focus", domain: "Executing", desk: "Mudah menetapkan prioritas dan tetap di jalur menuju tujuan." },
  { id: "responsibility", nama: "Responsibility", domain: "Executing", desk: "Memegang teguh komitmen dan merasa wajib menuntaskannya sampai selesai." },
  { id: "restorative", nama: "Restorative", domain: "Executing", desk: "Senang mencari akar masalah dan memperbaiki sesuatu yang rusak." },
  // Influencing
  { id: "activator", nama: "Activator", domain: "Influencing", desk: "Tidak sabar menunggu, lebih memilih langsung bertindak dan memulai." },
  { id: "command", nama: "Command", domain: "Influencing", desk: "Berani mengambil alih kendali dan menyuarakan pendirian dengan tegas." },
  { id: "communication", nama: "Communication", domain: "Influencing", desk: "Pandai merangkai cerita dan menjelaskan gagasan dengan jelas menarik." },
  { id: "competition", nama: "Competition", domain: "Influencing", desk: "Mengukur diri lewat perbandingan dan termotivasi kuat oleh kemenangan." },
  { id: "maximizer", nama: "Maximizer", domain: "Influencing", desk: "Berfokus mengasah sesuatu yang sudah baik menjadi luar biasa." },
  { id: "self-assurance", nama: "Self-Assurance", domain: "Influencing", desk: "Percaya penuh pada insting dan kemampuan mengambil keputusan sendiri." },
  { id: "significance", nama: "Significance", domain: "Influencing", desk: "Ingin dikenal, dihargai, dan memberi dampak yang benar-benar berarti." },
  { id: "woo", nama: "Woo", domain: "Influencing", desk: "Mudah akrab dan senang menjalin koneksi baru dengan orang lain." },
  // Relationship Building
  { id: "adaptability", nama: "Adaptability", domain: "Relationship", desk: "Luwes mengikuti perubahan dan terbiasa hidup di saat ini." },
  { id: "connectedness", nama: "Connectedness", domain: "Relationship", desk: "Meyakini segala sesuatu saling terkait dan punya makna yang lebih luas." },
  { id: "developer", nama: "Developer", domain: "Relationship", desk: "Melihat potensi tersembunyi orang lain dan senang menumbuhkannya." },
  { id: "empathy", nama: "Empathy", domain: "Relationship", desk: "Mudah merasakan dan memahami emosi orang-orang di sekitarnya." },
  { id: "harmony", nama: "Harmony", domain: "Relationship", desk: "Menghindari perselisihan dan mencari titik temu bersama semua pihak." },
  { id: "includer", nama: "Includer", domain: "Relationship", desk: "Berusaha melibatkan semua orang agar tak ada yang tertinggal." },
  { id: "individualization", nama: "Individualization", domain: "Relationship", desk: "Peka pada keunikan tiap orang dan memperlakukan mereka secara berbeda." },
  { id: "positivity", nama: "Positivity", domain: "Relationship", desk: "Menularkan semangat dan antusiasme ke lingkungan di sekitarnya." },
  { id: "relator", nama: "Relator", domain: "Relationship", desk: "Menikmati kedekatan mendalam dengan lingkaran kecil orang terpercaya." },
  // Strategic Thinking
  { id: "analytical", nama: "Analytical", domain: "Strategic", desk: "Menuntut data dan alasan logis sebelum meyakini sesuatu." },
  { id: "context", nama: "Context", domain: "Strategic", desk: "Memahami situasi sekarang dengan menelusuri pola dari masa lalu." },
  { id: "futuristic", nama: "Futuristic", domain: "Strategic", desk: "Terpikat oleh bayangan masa depan dan senang membicarakannya." },
  { id: "ideation", nama: "Ideation", domain: "Strategic", desk: "Senang bermain dengan gagasan baru dan koneksi yang tak terduga." },
  { id: "input", nama: "Input", domain: "Strategic", desk: "Gemar mengumpulkan informasi, benda, atau pengetahuan yang menarik minat." },
  { id: "intellection", nama: "Intellection", domain: "Strategic", desk: "Menikmati proses berpikir mendalam dan waktu untuk merenung sendiri." },
  { id: "learner", nama: "Learner", domain: "Strategic", desk: "Bersemangat pada proses mempelajari hal baru itu sendiri." },
  { id: "strategic", nama: "Strategic", domain: "Strategic", desk: "Cepat menangkap pola dan menyusun jalur alternatif menuju tujuan." },
];
