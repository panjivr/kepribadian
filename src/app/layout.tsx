import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JIVA — Know Yourself Better Than Ever",
    template: "%s · JIVA",
  },
  description:
    "Baca dirimu lebih dalam dari sebelumnya. Asesmen kepribadian berstandar riset (Big Five IPIP-50), 16 tipe, dan cetak biru kelahiran — weton, shio, zodiak, numerologi — dalam satu profil terpadu yang premium. 100% privat di perangkatmu.",
  keywords: [
    "tes kepribadian",
    "big five",
    "16 tipe kepribadian",
    "weton",
    "shio",
    "zodiak",
    "numerologi",
    "penemuan jati diri",
  ],
  openGraph: {
    title: "JIVA — Know Yourself Better Than Ever",
    description:
      "Satu tempat untuk membaca dirimu: sains psikometri + kearifan budaya, disintesis jadi satu profil jati diri.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <div className="aurora" aria-hidden="true">
          <div className="aurora-blob b1" />
          <div className="aurora-blob b2" />
          <div className="aurora-blob b3" />
        </div>
        <div className="noise" aria-hidden="true" />
        <Nav />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
