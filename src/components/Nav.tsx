import Link from "next/link";

function LogoMark() {
  return (
    <span
      className="inline-block h-6 w-6 rounded-full"
      style={{
        background:
          "radial-gradient(circle at 32% 28%, #67e8f9 0%, #3b82f6 42%, #8b5cf6 78%, #4c1d95 100%)",
        boxShadow: "0 0 18px rgba(124,96,246,0.55)",
      }}
      aria-hidden="true"
    />
  );
}

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-display text-lg font-extrabold tracking-tight">
            Djiva
          </span>
        </Link>
        <div className="hidden items-center gap-7 text-sm text-ink-2 md:flex">
          <Link href="/#sistem" className="transition-colors hover:text-ink">
            Sistem
          </Link>
          <Link href="/#metode" className="transition-colors hover:text-ink">
            Metode
          </Link>
          <Link href="/tes" className="transition-colors hover:text-ink">
            Tes
          </Link>
          <Link href="/profil" className="transition-colors hover:text-ink">
            Profil Saya
          </Link>
        </div>
        <Link
          href="/mulai"
          className="btn-primary !px-5 !py-2.5 text-sm"
        >
          Mulai Gratis
        </Link>
      </div>
      <div
        className="mx-auto h-px max-w-6xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)",
        }}
      />
      <div className="absolute inset-0 -z-10 backdrop-blur-xl [background:rgba(5,6,13,0.55)]" />
    </nav>
  );
}
