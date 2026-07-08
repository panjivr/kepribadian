import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-28 border-t border-white/8">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-extrabold tracking-tight">
              JIVA
            </p>
            <p className="mt-1 text-sm font-medium text-aurora">
              Know Yourself Better Than Ever
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-3">
              Platform penemuan jati diri multi-metode: asesmen psikometri
              berstandar riset, dipadukan kearifan budaya Nusantara & dunia —
              dengan label kejelasan ilmiah yang selalu transparan.
            </p>
          </div>
          <div className="text-sm">
            <p className="kicker mb-4">Jelajah</p>
            <ul className="space-y-2.5 text-ink-2">
              <li><Link className="transition-colors hover:text-ink" href="/mulai">Mulai Perjalanan</Link></li>
              <li><Link className="transition-colors hover:text-ink" href="/tes">Semua Tes</Link></li>
              <li><Link className="transition-colors hover:text-ink" href="/hasil">Cetak Biru Kelahiran</Link></li>
              <li><Link className="transition-colors hover:text-ink" href="/profil">Profil Terpadu</Link></li>
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
            <strong className="text-ink-2">Bukan alat diagnosis.</strong> JIVA
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
            Sistem budaya & spiritual (weton, shio, zodiak, numerologi, kua)
            disajikan sebagai warisan budaya dan bahan refleksi — bukan ramalan
            pasti, dan tidak pernah menimpa hasil asesmen ilmiah.
          </p>
          <p className="pt-2 text-ink-3/70">
            © {new Date().getFullYear()} JIVA · Dibangun dari PersonaDB v1.0 —
            27 sistem penemuan jati diri
          </p>
        </div>
      </div>
    </footer>
  );
}
