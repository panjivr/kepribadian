/**
 * Maskot animasi kecil untuk tiap tes — bikin suasana ceria & betah.
 * Emoji + kutipan jenaka + animasi "menari" yang berbeda-beda per tes.
 * Hormati prefers-reduced-motion (animasi dimatikan lewat globals.css).
 */

import DinoMascot from "@/components/DinoMascot";

interface Maskot {
  e: string;
  q: string;
}

const MASKOT: Record<string, Maskot> = {
  bigfive: { e: "🌈", q: "Lima warna dirimu siap dipetakan — santai aja!" },
  hexaco: { e: "🦉", q: "Enam sisi, satu kamu. Jujur ya, aku nggak ngejudge." },
  disc: { e: "🎨", q: "Gaya kerjamu itu unik. Ayo kita lihat!" },
  enneagram: { e: "🔮", q: "Sembilan tipe… kira-kira jiwamu yang mana?" },
  temperament: { e: "🎭", q: "Sanguinis? Melankolis? Yuk cari tahu!" },
  mi: { e: "🧠", q: "Kamu pintar dengan caramu sendiri, kok." },
  mft: { e: "⚖️", q: "Tak ada jawaban salah — ini soal nilai." },
  hbdi: { e: "🌀", q: "Otak kiri, otak kanan, atau dua-duanya?" },
  true_colors: { e: "🖍️", q: "Warna kepribadianmu bakal keluar, nih!" },
  vak: { e: "📚", q: "Belajar paling nyaman lewat apa, hayo?" },
  peta_bakat: { e: "🚀", q: "Bakat terpendammu siap meluncur!" },
  via: { e: "⭐", q: "Kekuatan super-mu lagi nunggu ditemukan." },
  riasec: { e: "🧭", q: "Ayo cari arah masa depanmu bareng-bareng!" },
  attachment: { e: "🧸", q: "Peluk dulu, baru cerita soal relasimu." },
  love_language: { e: "💌", q: "Bahasa cintamu apa, nih? Penasaran!" },
  grit: { e: "🔥", q: "Pantang menyerah — kamu lebih kuat dari yang kamu kira." },
  growth_mindset: { e: "🌱", q: "Psst… otakmu bisa tumbuh terus, lho!" },
  conflict_style: { e: "🤺", q: "Berantem sehat itu ada seninya, kawan." },
  values: { e: "💎", q: "Apa sih yang paling kamu junjung dalam hidup?" },
  eq: { e: "💗", q: "Emosi itu teman, bukan musuh. Kenalan yuk!" },
  iq: { e: "🧩", q: "Asah otakmu — santai, bukan lomba kok!" },
  clifton: { e: "🌟", q: "Bakat terbaikmu siap dipetakan!" },
  stifin: { e: "🖐️", q: "Satu mesin kecerdasan dominan — mana punyamu?" },
  blood_type: { e: "🩸", q: "Katanya golongan darah punya cerita, lho." },
  human_design: { e: "⚙️", q: "Cetak biru energimu, siap dibaca!" },
  iching: { e: "☯️", q: "Lempar koin, dengar bisik kebijaksanaan kuno." },
};

const POOL: Maskot[] = [
  { e: "✨", q: "Santai aja, nikmati prosesnya ya!" },
  { e: "🎈", q: "Jawab jujur — nggak ada yang salah kok." },
  { e: "🐣", q: "Yuk kenali dirimu selangkah lebih dalam!" },
  { e: "🍭", q: "Anggap ini ngobrol seru soal dirimu." },
  { e: "🦄", q: "Kamu istimewa — ayo buktikan!" },
];

const ANIMASI = ["dance-bounce", "dance-wiggle", "dance-float", "dance-jelly", "dance-swing"];

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export default function MascotTes({ sistemId }: { sistemId: string }) {
  const h = hash(sistemId);
  const m = MASKOT[sistemId] ?? POOL[h % POOL.length];
  const anim = ANIMASI[h % ANIMASI.length];

  return (
    <div className="mb-5 flex flex-col items-center gap-2.5" aria-hidden>
      <div className="relative">
        <DinoMascot size={96} varian={h} />
        {/* emoji khas tes, "dipegang" si maskot */}
        <span
          className={`absolute -right-2 bottom-1 text-3xl leading-none ${anim} select-none drop-shadow`}
        >
          {m.e}
        </span>
      </div>
      <div className="relative max-w-xs rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-ink-2 shadow-sm">
        <span
          className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-white/10 bg-white/5"
          aria-hidden
        />
        {m.q}
      </div>
    </div>
  );
}
