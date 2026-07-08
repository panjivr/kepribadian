# PersonaDB v1.0 — Database Penemuan Jati Diri

Knowledge base lengkap 27 sistem kepribadian & jati diri untuk dibangun jadi website (Next.js + Prisma + Supabase ready).

## Struktur
```
persona-db/
├── master-index.json      # daftar semua sistem, tier, input, prioritas MVP
├── SCHEMA.md              # Prisma schema + format hasil + alur MVP
├── systems/               # 26 file — data lengkap per sistem
│   ├── big-five.json      # 50 item IPIP (public domain) + scoring + interpretasi ★ FONDASI
│   ├── hexaco.json        # 24 item + 6 dimensi
│   ├── mbti16.json        # 28 item + 16 tipe lengkap + fungsi kognitif
│   ├── disc.json          # 24 item + 4 tipe + 8 kombinasi
│   ├── enneagram.json     # 36 item + 9 tipe + wing + arah stres/growth
│   ├── temperament.json   # 16 item + 4 temperamen
│   ├── eysenck.json       # PEN (derive dari Big Five)
│   ├── via-strengths.json # 24 kekuatan / 6 kebajikan
│   ├── multiple-intelligence.json # 8 kecerdasan + 24 item
│   ├── vak.json           # 15 item gaya belajar
│   ├── moral-foundations.json # 6 fondasi moral
│   ├── hbdi.json          # 4 kuadran berpikir
│   ├── true-colors.json   # 4 warna + item
│   ├── numerology.json    # Pythagorean + Chaldean + semua core numbers + algoritma
│   ├── zodiac-western.json# 12 tanda lengkap
│   ├── shio.json          # 12 shio + elemen + algoritma + catatan Imlek
│   ├── weton.json         # neptu + algoritma pasaran + watak + petung jodoh
│   ├── primbon.json       # rejeki, pangarasan, hari baik
│   ├── bazi.json          # 10 stems + siklus elemen + algoritma
│   ├── feng-shui-kua.json # rumus Kua + 8 angka
│   ├── human-design.json  # 5 tipe + authority + catatan implementasi
│   ├── iching.json        # 64 hexagram + algoritma cast
│   ├── stifin.json        # referensi (user-input only)
│   ├── blood-type.json    # A/B/O/AB
│   ├── graphology.json    # hiburan/edukasi
│   ├── face-reading.json  # hiburan/edukasi (TANPA upload foto)
│   └── strengths-note.json# catatan legal CliftonStrengths
└── engine/
    ├── profile-engine.json    # cross-mapping antar sistem + sintesis 10 seksi
    └── prompt-templates.json  # prompt Claude API untuk generate profil & chat
```

## Prinsip Wajib (etika & legal)
1. **Tier system**: ilmiah vs budaya/spiritual vs pseudoscience — label WAJIB tampil di UI.
2. Layer budaya TIDAK PERNAH menimpa hasil ilmiah.
3. Hasil "buruk" (petung jodoh dll) diframe positif — bukan vonis.
4. Bukan alat diagnosis mental — sertakan disclaimer & rujukan profesional.
5. IP: jangan replikasi soal MBTI®/CliftonStrengths®/HBDI® resmi — semua item di database ini original atau public domain (IPIP).
6. Tanpa analisis foto wajah/sidik jari.

## Cara pakai di Claude Code
Prompt awal yang disarankan:
"Baca semua file di persona-db/. Bangun website Next.js 15 + TypeScript + Prisma + Supabase sesuai SCHEMA.md dan alur MVP. Mulai dari onboarding instant-results (weton+shio+zodiak+numerologi) lalu tes Big Five."
