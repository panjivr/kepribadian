import type { NextConfig } from "next";

/**
 * Situs 100% statis (semua rute prerendered, semua kalkulasi client-side),
 * jadi bisa diekspor jadi file statis dan disajikan di mana saja.
 *
 * basePath/assetPrefix hanya diaktifkan saat build untuk GitHub Pages
 * (env GITHUB_PAGES=true) — repo project page disajikan di /kepribadian.
 * Saat build biasa (Vercel/Netlify/custom domain di root), keduanya kosong.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "kepribadian";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isPages
    ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` }
    : {}),
};

export default nextConfig;
