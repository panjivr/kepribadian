"use client";

import { useState } from "react";
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

const TAUTAN: { href: string; label: string }[] = [
  { href: "/#sistem", label: "Sistem" },
  { href: "/#metode", label: "Metode" },
  { href: "/tes", label: "Tes" },
  { href: "/jenjang", label: "Jenjang" },
  { href: "/profil", label: "Profil Saya" },
  { href: "/cv", label: "CV" },
];

export default function Nav() {
  const [buka, setBuka] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setBuka(false)}>
          <LogoMark />
          <span className="font-display text-lg font-extrabold tracking-tight">
            Djiva
          </span>
        </Link>

        {/* tautan desktop */}
        <div className="hidden items-center gap-7 text-sm text-ink-2 md:flex">
          {TAUTAN.map((t) => (
            <Link key={t.href} href={t.href} className="transition-colors hover:text-ink">
              {t.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/mulai"
            className="btn-primary !px-4 !py-2.5 text-sm md:!px-5"
            onClick={() => setBuka(false)}
          >
            Mulai Gratis
          </Link>
          {/* tombol menu mobile */}
          <button
            type="button"
            onClick={() => setBuka((v) => !v)}
            aria-label={buka ? "Tutup menu" : "Buka menu"}
            aria-expanded={buka}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-ink transition-colors hover:bg-white/10 md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className="absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200"
                style={{ top: buka ? "6px" : "0px", transform: buka ? "rotate(45deg)" : "none" }}
              />
              <span
                className="absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200"
                style={{ opacity: buka ? 0 : 1 }}
              />
              <span
                className="absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-200"
                style={{ top: buka ? "6px" : "12px", transform: buka ? "rotate(-45deg)" : "none" }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* panel menu mobile */}
      {buka && (
        <div className="md:hidden">
          <div className="mx-auto max-w-6xl px-5 pb-4">
            <div className="glass glass-hairline flex flex-col gap-1 rounded-2xl p-2">
              {TAUTAN.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  onClick={() => setBuka(false)}
                  className="rounded-xl px-4 py-3 text-sm text-ink-2 transition-colors hover:bg-white/8 hover:text-ink"
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

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
