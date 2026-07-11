/**
 * Rekomendasi pertumbuhan diri: buku (Indonesia & internasional) dan channel
 * YouTube (lokal & luar) yang dipetakan ke area pertumbuhan. Dipakai halaman
 * /tumbuh, dipersonalisasi dari hasil tes pengguna.
 *
 * Tautan dibuat sebagai pencarian (Google/YouTube) agar selalu valid tanpa
 * bergantung URL yang bisa berubah.
 */

export interface Sumber {
  judul: string;
  oleh?: string;
  bahasa: "ID" | "EN";
  catatan?: string;
}

export interface KategoriTumbuh {
  id: string;
  nama: string;
  ikon: string;
  deskripsi: string;
  buku: Sumber[];
  channel: Sumber[];
}

export const KATEGORI_TUMBUH: KategoriTumbuh[] = [
  {
    id: "komunikasi",
    nama: "Komunikasi & Keterampilan Sosial",
    ikon: "💬",
    deskripsi:
      "Untuk kamu yang ingin lebih lancar bicara, membangun koneksi, dan didengar — cocok bila kamu merasa kurang komunikatif atau canggung secara sosial.",
    buku: [
      { judul: "How to Win Friends and Influence People", oleh: "Dale Carnegie", bahasa: "EN", catatan: "Klasik abadi soal disukai & memengaruhi orang (ada terjemahan Indonesia)." },
      { judul: "Never Split the Difference", oleh: "Chris Voss", bahasa: "EN", catatan: "Negosiasi & mendengar aktif dari mantan negosiator FBI." },
      { judul: "Crucial Conversations", oleh: "Kerry Patterson dkk.", bahasa: "EN", catatan: "Menghadapi percakapan sulit tanpa merusak hubungan." },
      { judul: "Talk Like TED", oleh: "Carmine Gallo", bahasa: "EN", catatan: "Rahasia public speaking dari pembicara TED terbaik." },
    ],
    channel: [
      { judul: "Satu Persen - Indonesian Life School", bahasa: "ID", catatan: "Skill sosial & pengembangan diri, bahasa Indonesia." },
      { judul: "Charisma on Command", bahasa: "EN", catatan: "Membedah karisma & percakapan." },
      { judul: "Science of People (Vanessa Van Edwards)", bahasa: "EN", catatan: "Sisi ilmiah bahasa tubuh & interaksi." },
    ],
  },
  {
    id: "emosi",
    nama: "Kecerdasan Emosional & Regulasi",
    ikon: "🧠",
    deskripsi:
      "Mengenali, memahami, dan mengelola emosi — cocok bila kamu mudah cemas, gampang terpicu, atau ingin lebih tenang.",
    buku: [
      { judul: "Emotional Intelligence", oleh: "Daniel Goleman", bahasa: "EN", catatan: "Buku fondasi kecerdasan emosional." },
      { judul: "Permission to Feel", oleh: "Marc Brackett", bahasa: "EN", catatan: "Kerangka RULER untuk mengenali & mengatur emosi." },
      { judul: "Loving the Wounded Soul", oleh: "Regis Machdy", bahasa: "ID", catatan: "Karya Indonesia soal depresi & kesehatan mental." },
      { judul: "The Body Keeps the Score", oleh: "Bessel van der Kolk", bahasa: "EN", catatan: "Bagaimana trauma tersimpan & pulih (bacaan lanjutan)." },
    ],
    channel: [
      { judul: "Therapy in a Nutshell", bahasa: "EN", catatan: "Latihan regulasi emosi dari terapis." },
      { judul: "Analisa Channel", bahasa: "ID", catatan: "Psikologi & kesehatan mental, bahasa Indonesia." },
      { judul: "The School of Life", bahasa: "EN", catatan: "Filsafat emosi & hidup yang tenang." },
    ],
  },
  {
    id: "produktivitas",
    nama: "Produktivitas & Disiplin",
    ikon: "⚡",
    deskripsi:
      "Membangun kebiasaan, fokus, dan menyelesaikan hal — cocok bila kamu suka menunda atau sulit konsisten.",
    buku: [
      { judul: "Atomic Habits", oleh: "James Clear", bahasa: "EN", catatan: "Sistem kebiasaan 1% lebih baik tiap hari (terjemahan ID populer)." },
      { judul: "Deep Work", oleh: "Cal Newport", bahasa: "EN", catatan: "Fokus tanpa distraksi di era gangguan." },
      { judul: "Eat That Frog!", oleh: "Brian Tracy", bahasa: "EN", catatan: "Melawan menunda dengan mengerjakan yang terberat dulu." },
      { judul: "Getting Things Done", oleh: "David Allen", bahasa: "EN", catatan: "Sistem mengelola tugas & pikiran." },
    ],
    channel: [
      { judul: "Ali Abdaal", bahasa: "EN", catatan: "Produktivitas berbasis bukti, ramah pemula." },
      { judul: "Raymond Chin", bahasa: "ID", catatan: "Pengembangan diri & karier untuk anak muda Indonesia." },
      { judul: "Thomas Frank", bahasa: "EN", catatan: "Produktivitas & kebiasaan belajar." },
    ],
  },
  {
    id: "polapikir",
    nama: "Pola Pikir Bertumbuh & Ketahanan",
    ikon: "🌱",
    deskripsi:
      "Melihat tantangan sebagai kesempatan & bangkit dari kegagalan — cocok bila kamu mudah menyerah atau merasa kemampuan itu bawaan.",
    buku: [
      { judul: "Mindset", oleh: "Carol Dweck", bahasa: "EN", catatan: "Growth vs fixed mindset — dasar ilmiahnya." },
      { judul: "Filosofi Teras", oleh: "Henry Manampiring", bahasa: "ID", catatan: "Stoisisme praktis dalam bahasa Indonesia — sangat direkomendasikan." },
      { judul: "Man's Search for Meaning", oleh: "Viktor Frankl", bahasa: "EN", catatan: "Makna sebagai sumber ketahanan." },
      { judul: "Grit", oleh: "Angela Duckworth", bahasa: "EN", catatan: "Kekuatan ketekunan & passion jangka panjang." },
    ],
    channel: [
      { judul: "Satu Persen - Indonesian Life School", bahasa: "ID", catatan: "Mindset & pengembangan diri, bahasa Indonesia." },
      { judul: "Better Ideas", bahasa: "EN", catatan: "Perbaikan diri yang jujur & membumi." },
      { judul: "Improvement Pill", bahasa: "EN", catatan: "Animasi ringkas soal kebiasaan & mental." },
    ],
  },
  {
    id: "kepemimpinan",
    nama: "Kepemimpinan & Pengaruh",
    ikon: "🎯",
    deskripsi:
      "Menggerakkan orang, mengambil keputusan, dan memimpin dengan tujuan — cocok bila kamu ingin memimpin tim atau proyek.",
    buku: [
      { judul: "Start With Why", oleh: "Simon Sinek", bahasa: "EN", catatan: "Memimpin dari 'mengapa' yang menginspirasi." },
      { judul: "Dare to Lead", oleh: "Brené Brown", bahasa: "EN", catatan: "Kepemimpinan berani & rentan." },
      { judul: "The 7 Habits of Highly Effective People", oleh: "Stephen Covey", bahasa: "EN", catatan: "Prinsip efektivitas pribadi & interpersonal." },
      { judul: "Influence", oleh: "Robert Cialdini", bahasa: "EN", catatan: "Ilmu persuasi & pengaruh." },
    ],
    channel: [
      { judul: "Dr. Indrawan Nugroho", bahasa: "ID", catatan: "Inovasi, bisnis, & kepemimpinan, bahasa Indonesia." },
      { judul: "Simon Sinek", bahasa: "EN", catatan: "Kepemimpinan & tujuan." },
      { judul: "TED", bahasa: "EN", catatan: "Ide kepemimpinan dari pembicara dunia." },
    ],
  },
  {
    id: "relasi",
    nama: "Relasi & Cinta",
    ikon: "❤️",
    deskripsi:
      "Membangun hubungan yang sehat & aman — cocok bila kamu ingin memahami pola kelekatan, bahasa kasih, atau memperbaiki relasi.",
    buku: [
      { judul: "The 5 Love Languages", oleh: "Gary Chapman", bahasa: "EN", catatan: "Cara memberi & menerima cinta." },
      { judul: "Attached", oleh: "Amir Levine & Rachel Heller", bahasa: "EN", catatan: "Sains gaya kelekatan dalam relasi." },
      { judul: "Nonviolent Communication", oleh: "Marshall Rosenberg", bahasa: "EN", catatan: "Komunikasi empatik tanpa menyakiti." },
      { judul: "Hold Me Tight", oleh: "Sue Johnson", bahasa: "EN", catatan: "Memperkuat ikatan emosional pasangan." },
    ],
    channel: [
      { judul: "The School of Life", bahasa: "EN", catatan: "Cinta & relasi dari sudut filsafat." },
      { judul: "Satu Persen - Indonesian Life School", bahasa: "ID", catatan: "Relasi sehat, bahasa Indonesia." },
      { judul: "Matthew Hussey", bahasa: "EN", catatan: "Dinamika hubungan & kepercayaan diri." },
    ],
  },
  {
    id: "kreativitas",
    nama: "Kreativitas & Ide",
    ikon: "🎨",
    deskripsi:
      "Menghasilkan & mewujudkan ide — cocok bila kamu ingin lebih kreatif, terbuka, dan produktif berkarya.",
    buku: [
      { judul: "Steal Like an Artist", oleh: "Austin Kleon", bahasa: "EN", catatan: "Kreativitas tanpa mitos 'orisinal murni'." },
      { judul: "Big Magic", oleh: "Elizabeth Gilbert", bahasa: "EN", catatan: "Hidup kreatif melampaui rasa takut." },
      { judul: "The War of Art", oleh: "Steven Pressfield", bahasa: "EN", catatan: "Melawan 'resistance' yang menghambat berkarya." },
      { judul: "Creativity, Inc.", oleh: "Ed Catmull", bahasa: "EN", catatan: "Membangun budaya kreatif (kisah Pixar)." },
    ],
    channel: [
      { judul: "Kok Bisa?", bahasa: "ID", catatan: "Rasa ingin tahu & ide, animasi bahasa Indonesia." },
      { judul: "The Futur", bahasa: "EN", catatan: "Kreativitas, desain, & karier kreatif." },
      { judul: "Kurzgesagt – In a Nutshell", bahasa: "EN", catatan: "Ide besar divisualkan dengan indah." },
    ],
  },
  {
    id: "empati",
    nama: "Empati & Kebaikan",
    ikon: "🤝",
    deskripsi:
      "Memahami orang lain lebih dalam & bekerja sama — cocok bila kamu ingin lebih peka, sabar, dan kooperatif.",
    buku: [
      { judul: "Nonviolent Communication", oleh: "Marshall Rosenberg", bahasa: "EN", catatan: "Mendengar & bicara dengan empati." },
      { judul: "Braving the Wilderness", oleh: "Brené Brown", bahasa: "EN", catatan: "Keberanian menjadi diri sambil terhubung." },
      { judul: "The Empathy Effect", oleh: "Helen Riess", bahasa: "EN", catatan: "Melatih empati secara ilmiah." },
      { judul: "Filosofi Teras", oleh: "Henry Manampiring", bahasa: "ID", catatan: "Mengelola reaksi terhadap orang lain (Stoa, bahasa Indonesia)." },
    ],
    channel: [
      { judul: "The School of Life", bahasa: "EN", catatan: "Empati, relasi, & kematangan emosi." },
      { judul: "Satu Persen - Indonesian Life School", bahasa: "ID", catatan: "Empati & keterampilan sosial, bahasa Indonesia." },
      { judul: "TED", bahasa: "EN", catatan: "Kisah manusia yang memperluas empati." },
    ],
  },
  {
    id: "percayadiri",
    nama: "Percaya Diri & Harga Diri",
    ikon: "🛡️",
    deskripsi:
      "Membangun harga diri yang sehat & keberanian — cocok bila kamu mudah minder, insecure, atau takut penilaian orang.",
    buku: [
      { judul: "The Six Pillars of Self-Esteem", oleh: "Nathaniel Branden", bahasa: "EN", catatan: "Enam pilar membangun harga diri." },
      { judul: "Berani Tidak Disukai", oleh: "Ichiro Kishimi & Fumitake Koga", bahasa: "ID", catatan: "Psikologi Adler soal bebas dari penilaian orang (terjemahan populer)." },
      { judul: "The Gifts of Imperfection", oleh: "Brené Brown", bahasa: "EN", catatan: "Menerima diri apa adanya." },
      { judul: "Unfu*k Yourself", oleh: "Gary John Bishop", bahasa: "EN", catatan: "Menantang narasi diri yang membatasi." },
    ],
    channel: [
      { judul: "Satu Persen - Indonesian Life School", bahasa: "ID", catatan: "Percaya diri & insecurity, bahasa Indonesia." },
      { judul: "Improvement Pill", bahasa: "EN", catatan: "Membangun rasa percaya diri langkah demi langkah." },
      { judul: "Analisa Channel", bahasa: "ID", catatan: "Harga diri dari sudut psikologi, bahasa Indonesia." },
    ],
  },
  {
    id: "fokus",
    nama: "Fokus, Kebiasaan & Mindfulness",
    ikon: "🧘",
    deskripsi:
      "Menenangkan pikiran, hadir penuh, dan menjaga fokus — cocok bila kamu mudah terdistraksi atau overthinking.",
    buku: [
      { judul: "The Power of Habit", oleh: "Charles Duhigg", bahasa: "EN", catatan: "Bagaimana kebiasaan terbentuk & diubah." },
      { judul: "Hyperfocus", oleh: "Chris Bailey", bahasa: "EN", catatan: "Mengelola perhatian di dunia yang bising." },
      { judul: "Wherever You Go, There You Are", oleh: "Jon Kabat-Zinn", bahasa: "EN", catatan: "Pengantar mindfulness yang membumi." },
      { judul: "Atomic Habits", oleh: "James Clear", bahasa: "EN", catatan: "Membangun kebiasaan fokus yang bertahan." },
    ],
    channel: [
      { judul: "Headspace", bahasa: "EN", catatan: "Meditasi & mindfulness terpandu." },
      { judul: "Satu Persen - Indonesian Life School", bahasa: "ID", catatan: "Fokus & overthinking, bahasa Indonesia." },
      { judul: "Ali Abdaal", bahasa: "EN", catatan: "Kebiasaan & sistem fokus." },
    ],
  },
  {
    id: "kritis",
    nama: "Berpikir Kritis & Belajar",
    ikon: "🔍",
    deskripsi:
      "Berpikir lebih jernih & belajar lebih cepat — cocok bila kamu ingin mengasah nalar dan menghindari bias.",
    buku: [
      { judul: "Thinking, Fast and Slow", oleh: "Daniel Kahneman", bahasa: "EN", catatan: "Dua sistem berpikir & bias-biasnya." },
      { judul: "Ultralearning", oleh: "Scott Young", bahasa: "EN", catatan: "Strategi belajar mandiri yang intens." },
      { judul: "The Art of Thinking Clearly", oleh: "Rolf Dobelli", bahasa: "EN", catatan: "99 kesalahan berpikir yang umum." },
      { judul: "Make It Stick", oleh: "Peter Brown dkk.", bahasa: "EN", catatan: "Sains cara belajar yang benar-benar melekat." },
    ],
    channel: [
      { judul: "Veritasium", bahasa: "EN", catatan: "Sains & berpikir kritis yang memikat." },
      { judul: "Kok Bisa?", bahasa: "ID", catatan: "Menjawab 'kenapa' dengan nalar, bahasa Indonesia." },
      { judul: "Kurzgesagt – In a Nutshell", bahasa: "EN", catatan: "Berpikir sistemik lewat visual." },
    ],
  },
  {
    id: "karier",
    nama: "Karier & Keuangan",
    ikon: "💼",
    deskripsi:
      "Merancang karier bermakna & mengelola uang — cocok untuk kamu yang sedang menata masa depan.",
    buku: [
      { judul: "So Good They Can't Ignore You", oleh: "Cal Newport", bahasa: "EN", catatan: "Membangun karier lewat keterampilan langka." },
      { judul: "Designing Your Life", oleh: "Bill Burnett & Dave Evans", bahasa: "EN", catatan: "Merancang hidup & karier ala design thinking." },
      { judul: "Psychology of Money", oleh: "Morgan Housel", bahasa: "EN", catatan: "Perilaku & kebijaksanaan soal uang (terjemahan ID ada)." },
      { judul: "Filosofi Teras", oleh: "Henry Manampiring", bahasa: "ID", catatan: "Ketenangan menghadapi ketidakpastian karier (bahasa Indonesia)." },
    ],
    channel: [
      { judul: "Raymond Chin", bahasa: "ID", catatan: "Karier & bisnis untuk anak muda Indonesia." },
      { judul: "Ali Abdaal", bahasa: "EN", catatan: "Karier, uang, & hidup yang dirancang sadar." },
      { judul: "Dr. Indrawan Nugroho", bahasa: "ID", catatan: "Strategi bisnis & karier, bahasa Indonesia." },
    ],
  },
];

export function cariBuku(s: Sumber): string {
  return `https://www.google.com/search?q=${encodeURIComponent(`buku ${s.judul} ${s.oleh ?? ""}`.trim())}`;
}

export function cariChannel(s: Sumber): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(s.judul)}`;
}
