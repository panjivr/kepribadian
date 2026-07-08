# JIVA — Know Yourself Better Than Ever

Platform penemuan jati diri multi-metode yang premium: asesmen psikometri
berstandar riset dipadukan kearifan budaya, disintesis menjadi satu profil
jati diri. Dibangun dari knowledge base **PersonaDB v1.0** — **26 dari 27 sistem
sudah aktif** (hanya CliftonStrengths® yang menunggu, karena berlisensi).

## Fitur

| Alur | Halaman | Isi |
|---|---|---|
| 1. Onboarding | `/mulai` | Nama lengkap + tanggal lahir + gender + jam lahir (opsional) |
| 2. Hasil instan | `/hasil` | **Cetak Biru Kelahiran**: weton + primbon, shio (akurat Imlek 1930–2030), zodiak, numerologi Pythagorean, angka Kua, **BaZi Empat Pilar** (solar-term akurat) |
| 3. Tes | `/tes` | Hub semua tes berlabel tier + status penyelesaian langsung |
| — ilmiah | | Big Five (IPIP-50), HEXACO, VIA Kekuatan Karakter (48 item), Kompas Moral |
| — semi-ilmiah | | 16 Tipe, DISC, Enneagram (wing + stres/growth), Temperamen, Kecerdasan Majemuk, Gaya Belajar VAK, Gaya Berpikir, True Colors |
| — budaya & hiburan | | I Ching (cast koin), Human Design, STIFIn, Golongan Darah, Grafologi, Face Reading |
| 4. Sintesis | `/profil` | **Profil Terpadu 10 seksi** sesuai profile-engine: inti diri, kekuatan utama (VIA+MI), gaya kerja (DISC asli menimpa indikasi + temperamen + HBDI + Eysenck), nilai & kompas moral, cara belajar, karier, relasi, pertumbuhan, perspektif budaya, action plan 30 hari + cetak PDF |

Desain: tema *midnight aurora* glassmorphism, orb partikel 3D (canvas murni),
kartu tilt 3D, scroll reveal — tanpa library animasi eksternal.

### Cara kerja sintesis
Big Five adalah fondasi wajib. Setiap tes lanjutan yang diselesaikan otomatis
memperkaya Profil Terpadu; hasil tes asli (mis. DISC, Enneagram) **menimpa**
prediksi/indikasi yang semula diturunkan dari Big Five. Layer budaya
(weton/shio/zodiak/numerologi/kua/BaZi) selalu tampil terpisah dan tidak pernah
menimpa hasil ilmiah.

## Prinsip (wajib — dari PersonaDB)

1. **Label tier selalu tampil**: Ilmiah / Semi-Ilmiah / Budaya & Refleksi / Hiburan.
2. Layer budaya **tidak pernah menimpa** hasil ilmiah.
3. Hasil "kurang baik" diframe positif — bukan vonis.
4. Bukan alat diagnosis kesehatan mental (disclaimer di footer & profil).
5. Tanpa soal berlisensi (MBTI®/CliftonStrengths®) — semua item original / public domain.
6. **Privasi penuh**: seluruh kalkulasi client-side, data hanya di `localStorage`.

## Menjalankan

```bash
npm install
npm run dev          # pengembangan → http://localhost:3000
npm run build        # build produksi (27 rute statis)
npm start            # serve build produksi
npm run test:engine  # 73 tes verifikasi algoritma & skoring
```

## Struktur

```
persona-db/          # knowledge base sumber (27 sistem + engine sintesis)
src/
├── app/             # halaman (App Router): /, /mulai, /hasil, /tes + 16 rute /tes/*, /profil
├── components/      # Orb (partikel 3D), Tilt, Reveal, RadarChart, BarSkor,
│                    #   HalamanTes (shell kuis bersama), Nav, Footer, TierBadge
├── lib/             # engine: birth.ts, bigfive.ts, mbti.ts, bazi.ts (lunar-javascript),
│                    #   skoring.ts (likert/pilihan generik), profil.ts (sintesis), storage.ts
└── data/            # cny.json (Imlek 1930–2030), sistem-list.ts (registry 27 sistem),
                     #   tes/*.ts (item & interpretasi tiap sistem)
scripts/
└── verify-engine.ts # verifikasi algoritma terhadap kasus yang diketahui
```

## Akurasi yang diverifikasi (73 tes)

- Weton: anchor 1 Jan 1900 = Senin Pahing, tervalidasi 17 Agustus 1945 = **Jumat Legi**.
- Shio: batas tahun memakai tanggal Imlek asli (digenerate dari kalender lunar) —
  lahir Januari–Februari dihitung benar.
- Numerologi: master number 11/22/33 tidak direduksi; contoh uji dari PersonaDB lolos.
- Big Five: skoring IPIP standar (item negatif dibalik), 10 item/dimensi, band resmi.
- Kua: rumus pria/wanita pra/pasca-2000 + aturan Kua 5, memakai tahun lunar.
- **BaZi**: Day Master & keseimbangan 5 elemen via lunar-javascript (solar-term/JieQi);
  1990-06-15 14:30 → Day Master Xin (Logam), tervalidasi.
- **Skoring generik**: reverse-key & normalisasi persen; jumlah item tiap tes cocok
  dengan PersonaDB (HEXACO 24, DISC 24, Enneagram 36, VIA 48, MI 24, MFT 18, dst).
- **I Ching**: 64 hexagram King Wen unik; 6 garis yang → Qian, 6 yin → Kun.

Jalankan `npm run test:engine` untuk membuktikannya kapan saja.
