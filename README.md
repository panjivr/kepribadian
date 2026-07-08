# JIVA — Know Yourself Better Than Ever

Platform penemuan jati diri multi-metode yang premium: asesmen psikometri
berstandar riset dipadukan kearifan budaya, disintesis menjadi satu profil
jati diri. Dibangun dari knowledge base **PersonaDB v1.0** (27 sistem).

## Fitur

| Alur | Halaman | Isi |
|---|---|---|
| 1. Onboarding | `/mulai` | Nama lengkap + tanggal lahir + gender |
| 2. Hasil instan | `/hasil` | **Cetak Biru Kelahiran**: weton + primbon, shio (akurat tanggal Imlek 1930–2030), zodiak, numerologi Pythagorean, angka Kua |
| 3. Tes ilmiah | `/tes/big-five` | Big Five **IPIP-50** (public domain), radar OCEAN, band interpretasi, deteksi pola kombinasi |
| 4. Tes lanjutan | `/tes/tipe-16` | 16 Tipe (28 item original), fungsi kognitif, kekuatan preferensi |
| 5. Sintesis | `/profil` | **Profil Terpadu** 7 seksi: inti diri, gaya kerja (indikasi DISC), karier (ranking frekuensi lintas sistem), relasi, area pertumbuhan, perspektif budaya, action plan 30 hari + cetak PDF |

Desain: tema *midnight aurora* glassmorphism, orb partikel 3D (canvas murni),
kartu tilt 3D, scroll reveal — tanpa library animasi eksternal.

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
npm run build        # build produksi
npm start            # serve build produksi
npm run test:engine  # 47 tes verifikasi algoritma (weton, shio, numerologi, skoring, dll)
```

## Struktur

```
persona-db/          # knowledge base sumber (27 sistem + engine sintesis)
src/
├── app/             # halaman (App Router): /, /mulai, /hasil, /tes, /tes/big-five,
│                    #   /tes/tipe-16, /profil
├── components/      # Orb (partikel 3D), Tilt, Reveal, RadarChart, Nav, Footer, TierBadge
├── lib/             # engine: birth.ts (weton/shio/zodiak/numerologi/kua),
│                    #   bigfive.ts, mbti.ts, profil.ts (sintesis), storage.ts
└── data/            # cny.json (tanggal Imlek 1930–2030), sistem-list.ts
scripts/
└── verify-engine.ts # verifikasi algoritma terhadap kasus yang diketahui
```

## Akurasi yang diverifikasi

- Weton: anchor 1 Jan 1900 = Senin Pahing, tervalidasi 17 Agustus 1945 = **Jumat Legi**.
- Shio: batas tahun memakai tanggal Imlek asli (digenerate dari kalender lunar),
  bukan sekadar tahun Masehi — lahir Januari–Februari dihitung benar.
- Numerologi: master number 11/22/33 tidak direduksi; contoh uji dari PersonaDB lolos.
- Big Five: skoring IPIP standar (item negatif dibalik), 10 item/dimensi, band resmi.
- Kua: rumus pria/wanita pra/pasca-2000 + aturan Kua 5, memakai tahun lunar.

Jalankan `npm run test:engine` untuk membuktikannya kapan saja.
