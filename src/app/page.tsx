import Link from "next/link";
import Orb from "@/components/Orb";
import Tilt from "@/components/Tilt";
import Reveal from "@/components/Reveal";
import TierBadge from "@/components/TierBadge";
import RadarChart from "@/components/RadarChart";
import { SEMUA_SISTEM } from "@/data/sistem-list";

const LANGKAH = [
  {
    nomor: "01",
    judul: "Ceritakan momen lahirmu",
    isi: "Nama lengkap, tanggal lahir, dan gender. Dalam sekejap, cetak biru kelahiranmu terbaca: weton, shio, zodiak, numerologi, dan angka Kua.",
    ikon: "✦",
  },
  {
    nomor: "02",
    judul: "Ukur dirimu dengan sains",
    isi: "Big Five (IPIP-50) — standar emas riset kepribadian modern — plus 16 Tipe. Sekitar 7 menit yang mengubah caramu melihat diri sendiri.",
    ikon: "◈",
  },
  {
    nomor: "03",
    judul: "Terima profil terpadumu",
    isi: "Semua sistem disintesis jadi satu narasi: inti diri, gaya kerja, karier, relasi, area pertumbuhan, hingga action plan 30 hari.",
    ikon: "❖",
  },
];

const NILAI_DEMO = [78, 64, 42, 71, 35];
const LABEL_DEMO = ["Keterbukaan", "Kesungguhan", "Ekstraversi", "Keramahan", "Neurotisisme"];

export default function Landing() {
  const tersedia = SEMUA_SISTEM.filter((s) => s.tersedia).length;

  return (
    <>
      {/* ================================ HERO ================================ */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5">
        <Orb className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[min(120vw,54rem)] w-[min(120vw,54rem)] -translate-x-1/2 -translate-y-1/2 opacity-90" />
        <div className="mx-auto max-w-4xl pb-16 pt-28 text-center">
          <p className="kicker fade-in-up mb-6">
            Platform Penemuan Jati Diri · 27 Sistem
          </p>
          <h1
            className="font-display fade-in-up text-balance text-5xl font-extrabold leading-[1.04] tracking-tight md:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Know Yourself
            <br />
            <span className="text-aurora">Better Than Ever.</span>
          </h1>
          <p
            className="fade-in-up mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-ink-2 md:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Satu tempat yang membaca dirimu seutuhnya — sains psikometri
            berstandar riset, dipadukan kearifan weton, shio, zodiak, dan
            numerologi. Disintesis menjadi satu profil jati diri yang hanya
            milikmu.
          </p>
          <div
            className="fade-in-up mt-10 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/mulai" className="btn-primary text-base">
              Mulai Perjalananmu
              <span aria-hidden>→</span>
            </Link>
            <Link href="#sistem" className="btn-ghost text-base">
              Jelajahi 27 Sistem
            </Link>
          </div>
          <div
            className="fade-in-up mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-3"
            style={{ animationDelay: "320ms" }}
          >
            <span>◇ IPIP-50 standar riset</span>
            <span>◇ Hasil instan &lt; 1 detik</span>
            <span>◇ 100% privat — data tak pernah meninggalkan perangkatmu</span>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night to-transparent" />
      </section>

      {/* =============================== ANGKA ================================ */}
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="glass glass-hairline grid grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4">
            {[
              ["27", "sistem kepribadian & jati diri"],
              ["78", "item asesmen terkurasi"],
              ["10", "seksi profil terpadu"],
              ["0", "data dikirim ke server"],
            ].map(([angka, ket]) => (
              <div key={ket} className="text-center">
                <p className="font-display text-4xl font-extrabold text-aurora md:text-5xl">
                  {angka}
                </p>
                <p className="mx-auto mt-2 max-w-[11rem] text-xs leading-snug text-ink-3">
                  {ket}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* =============================== METODE =============================== */}
      <section id="metode" className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-28 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="kicker mb-4">Cara Djiva Membacamu</p>
          <h2 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
            Tiga langkah menuju
            <br />
            <span className="text-aurora">dirimu yang paling jernih.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {LANGKAH.map((l, i) => (
            <Reveal key={l.nomor} delay={i * 120}>
              <Tilt className="glass glass-hairline h-full p-8">
                <div className="tilt-layer">
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-2xl text-lg"
                      style={{
                        background: "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(139,92,246,0.25))",
                        border: "1px solid rgba(139,92,246,0.35)",
                      }}
                      aria-hidden
                    >
                      {l.ikon}
                    </span>
                    <span className="font-display text-sm font-bold tracking-[0.2em] text-ink-3">
                      {l.nomor}
                    </span>
                  </div>
                  <h3 className="font-display mt-6 text-xl font-bold tracking-tight">
                    {l.judul}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-2">
                    {l.isi}
                  </p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============================ FONDASI ILMIAH =========================== */}
      <section className="mx-auto max-w-6xl px-5 pt-28 md:px-8">
        <div className="glass glass-hairline overflow-hidden">
          <div className="grid items-center gap-10 p-8 md:grid-cols-2 md:p-14">
            <Reveal>
              <p className="kicker mb-4">Fondasi Ilmiah</p>
              <h2 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-4xl">
                Dibangun di atas{" "}
                <span className="text-aurora">Big Five</span> — bukan sekadar
                kuis internet.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-ink-2 md:text-base">
                Model lima faktor (OCEAN) adalah kerangka kepribadian paling
                tervalidasi dalam psikologi modern. Djiva memakai 50 item IPIP —
                bank soal public domain yang dipakai peneliti di seluruh dunia —
                dengan skoring standar dan interpretasi per dimensi & facet.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink-2">
                {[
                  "5 dimensi × 10 item, skala Likert 5 poin",
                  "Deteksi kombinasi langka — mis. Inovator Eksekutor",
                  "Prediksi tipe 16 & indikasi DISC/Enneagram dari korelasi riset",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 text-mint">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
              <Link href="/tes/big-five" className="btn-primary mt-8 text-sm">
                Ikuti Tes Big Five
              </Link>
            </Reveal>
            <Reveal delay={150} className="flex justify-center">
              <div className="w-full max-w-sm">
                <RadarChart nilai={NILAI_DEMO} label={LABEL_DEMO} />
                <p className="mt-2 text-center text-xs text-ink-3">
                  Contoh visual profil OCEAN
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =============================== SISTEM ================================ */}
      <section id="sistem" className="mx-auto max-w-6xl scroll-mt-24 px-5 pt-28 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="kicker mb-4">Perpustakaan Sistem</p>
          <h2 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
            27 lensa untuk membaca dirimu.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ink-2 md:text-base">
            Setiap sistem diberi label tingkat bukti secara transparan — kamu
            selalu tahu mana sains, mana tradisi, mana hiburan.{" "}
            <strong className="text-ink">{tersedia} sistem sudah aktif</strong>,
            sisanya menyusul.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SEMUA_SISTEM.map((s, i) => {
            const isi = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-[15px] font-bold tracking-tight">
                    {s.nama}
                  </h3>
                  <TierBadge tier={s.tier} />
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-3">
                  {s.ringkas}
                </p>
                <p className="mt-3 text-[11px] font-semibold tracking-wide">
                  {s.tersedia ? (
                    <span className="text-mint">● Tersedia sekarang</span>
                  ) : (
                    <span className="text-ink-3">○ Segera hadir</span>
                  )}
                </p>
              </>
            );
            return (
              <Reveal key={s.nama} delay={(i % 3) * 90}>
                {s.tersedia && s.route ? (
                  <Link
                    href={s.route}
                    className="glass block h-full p-5 transition-transform duration-300 ease-out hover:scale-[1.02] hover:!border-white/25"
                  >
                    {isi}
                  </Link>
                ) : (
                  <div className="glass h-full p-5 opacity-60">{isi}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============================ ETIKA & PRIVASI =========================== */}
      <section className="mx-auto max-w-6xl px-5 pt-28 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Tilt className="glass glass-hairline h-full p-8 md:p-10">
              <div className="tilt-layer">
                <p className="kicker mb-4">Kejujuran Ilmiah</p>
                <h3 className="font-display text-2xl font-extrabold tracking-tight">
                  Tradisi tidak pernah menimpa sains.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-2">
                  Weton, shio, zodiak, dan numerologi kami sajikan sebagai{" "}
                  <em>perspektif budaya</em> — kaya makna untuk refleksi, tapi
                  selalu terpisah dan tidak pernah menggantikan hasil asesmen
                  ilmiah. Label tingkat bukti tampil di setiap hasil.
                </p>
              </div>
            </Tilt>
          </Reveal>
          <Reveal delay={130}>
            <Tilt className="glass glass-hairline h-full p-8 md:p-10">
              <div className="tilt-layer">
                <p className="kicker mb-4">Privasi Mutlak</p>
                <h3 className="font-display text-2xl font-extrabold tracking-tight">
                  Dirimu adalah milikmu.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-2">
                  Semua perhitungan berjalan langsung di perangkatmu. Nama,
                  tanggal lahir, dan seluruh jawaban tesmu tersimpan hanya di
                  browsermu — tidak ada akun, tidak ada server, tidak ada yang
                  mengintip.
                </p>
              </div>
            </Tilt>
          </Reveal>
        </div>
      </section>

      {/* ============================== CTA AKHIR =============================== */}
      <section className="relative mx-auto max-w-6xl px-5 pt-28 md:px-8">
        <Reveal>
          <div className="glass-strong glass-hairline relative overflow-hidden p-10 text-center md:p-20">
            <Orb className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 opacity-40" />
            <div className="relative z-10">
              <h2 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
                Dirimu menunggu
                <br />
                <span className="text-aurora">untuk dibaca.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-2 md:text-base">
                Mulai dari momen kelahiranmu — gratis, instan, dan sepenuhnya
                privat.
              </p>
              <Link href="/mulai" className="btn-primary mt-9 text-base">
                Mulai Sekarang — Gratis
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
