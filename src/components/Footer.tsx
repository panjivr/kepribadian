import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-28 border-t border-white/8">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-extrabold tracking-tight">
              Djiva
            </p>
            <p className="mt-1 text-sm font-medium text-aurora">
              Know Yourself Better Than Ever
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-3">
              Djiva adalah platform penemuan jati diri paling lengkap yang bisa
              kamu temukan — 38 sistem aktif dengan 23 tes interaktif mendalam,
              merentang dari psikometri berstandar riset (Big Five, HEXACO, VIA,
              IQ, EQ) hingga kearifan budaya Nusantara & dunia. Semuanya
              disintesis menjadi satu Profil Terpadu — kini lengkap dengan
              Dashboard hasil & generator CV. Privasi 100%: seluruh perhitungan
              berjalan di perangkatmu, tidak pernah dikirim ke server mana pun.
            </p>
            <div className="mt-6">
              <p className="kicker">Kreator</p>
              <p className="mt-1.5 text-xs text-ink-3">
                Dirancang &amp; dikembangkan oleh Panji Vatorrohman
              </p>
            </div>
          </div>
          <div className="text-sm">
            <p className="kicker mb-4">Jelajah</p>
            <ul className="space-y-2.5 text-ink-2">
              <li><Link className="transition-colors hover:text-ink" href="/mulai">Mulai Perjalanan</Link></li>
              <li><Link className="transition-colors hover:text-ink" href="/tes">Semua Tes</Link></li>
              <li><Link className="transition-colors hover:text-ink" href="/hasil">Cetak Biru Kelahiran</Link></li>
              <li><Link className="transition-colors hover:text-ink" href="/tumbuh">Buku & Channel Tumbuh</Link></li>
              <li><Link className="transition-colors hover:text-ink" href="/profil">Profil Terpadu</Link></li>
              <li><Link className="transition-colors hover:text-ink" href="/cv">Generator CV</Link></li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="kicker mb-4">Tingkat Bukti</p>
            <ul className="space-y-2.5 text-ink-3">
              <li><span className="mr-2 inline-block h-2 w-2 rounded-full bg-mint" />Ilmiah — riset psikometri</li>
              <li><span className="mr-2 inline-block h-2 w-2 rounded-full bg-blue" />Semi-ilmiah — populer, diperdebatkan</li>
              <li><span className="mr-2 inline-block h-2 w-2 rounded-full bg-violet" />Budaya & refleksi — tradisi</li>
              <li><span className="mr-2 inline-block h-2 w-2 rounded-full bg-amber" />Hiburan — wawasan historis</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 space-y-3 border-t border-white/8 pt-8 text-xs leading-relaxed text-ink-3">
          <p>
            <strong className="text-ink-2">Bukan alat diagnosis.</strong> Djiva
            adalah sarana refleksi & pengembangan diri, bukan instrumen
            diagnosis kesehatan mental. Jika kamu mengalami tekanan psikologis,
            hubungi psikolog atau psikiater profesional.
          </p>
          <p>
            <strong className="text-ink-2">Privasi penuh.</strong> Seluruh
            perhitungan terjadi di perangkatmu. Nama, tanggal lahir, dan hasil
            tesmu tidak pernah dikirim ke server mana pun.
          </p>
          <p>
            <strong className="text-ink-2">38 sistem, satu profil.</strong>{" "}
            Big Five (IPIP-50), HEXACO, VIA (48 item), Peta Bakat, Kompas Moral,
            Estimasi Kognitif (IQ), Kecerdasan Emosional (EQ), Minat Karier
            (RIASEC), Gaya Kelekatan, Bahasa Kasih, Grit, Pola Pikir Berkembang,
            Gaya Menghadapi Konflik, Nilai Hidup (Schwartz), 16 Tipe, DISC,
            Enneagram, Temperamen, Kecerdasan Majemuk, Gaya Belajar, Gaya
            Berpikir, True Colors, Eysenck, weton, shio, zodiak, numerologi,
            Kua, BaZi Empat Pilar, I Ching, Human Design, STIFIn, Golongan
            Darah, Grafologi, Face Reading — disintesis jadi satu Profil
            Terpadu, Dashboard hasil, dan CV siap-cetak. Selengkap dan sedetail
            ini jarang ada di satu tempat.
          </p>
          <p>
            Sistem budaya & spiritual (weton, shio, zodiak, numerologi, kua)
            disajikan sebagai warisan budaya dan bahan refleksi — bukan ramalan
            pasti, dan tidak pernah menimpa hasil asesmen ilmiah.
          </p>
          <p className="pt-2 text-ink-3/70">
            Copyright © 2026 Djiva . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
