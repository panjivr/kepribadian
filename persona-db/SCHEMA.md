# SCHEMA — PersonaDB

## User Profile (Prisma-ready)

```prisma
model User {
  id            String   @id @default(cuid())
  nama          String
  namaLengkap   String   // untuk numerologi
  tanggalLahir  DateTime
  jamLahir      String?  // "HH:mm" — untuk BaZi/Human Design
  kotaLahir     String?
  gender        String   // untuk Kua
  golonganDarah String?
  createdAt     DateTime @default(now())
  hasil         HasilTes[]
  profil        ProfilTerpadu?
}

model HasilTes {
  id        String   @id @default(cuid())
  userId    String
  sistemId  String   // "big_five" | "mbti16" | dst (lihat master-index.json)
  jawaban   Json     // raw answers
  skor      Json     // computed scores
  hasil     Json     // interpretasi terstruktur
  createdAt DateTime @default(now())
  user      User @relation(fields:[userId], references:[id])
  @@unique([userId, sistemId])
}

model ProfilTerpadu {
  id        String @id @default(cuid())
  userId    String @unique
  konten    Json   // 10 seksi hasil sintesis AI
  versi     Int    @default(1)
  updatedAt DateTime @updatedAt
  user      User @relation(fields:[userId], references:[id])
}
```

## Format hasil per kalkulasi (contoh)

```json
// big_five
{"O":72,"C":85,"E":45,"A":60,"N":38,"band":{"O":"Tinggi","C":"Tinggi","E":"Sedang","A":"Cenderung Tinggi","N":"Cenderung Rendah"}}

// mbti16
{"tipe":"INTJ","kekuatan_preferensi":{"I":71,"N":86,"T":64,"J":79},"borderline":[]}

// weton
{"hari":"Kamis","pasaran":"Kliwon","neptu":16,"laku":"Lakune Bumi"}

// numerology
{"life_path":8,"destiny":3,"soul_urge":11,"personality":1,"birthday":8,"personal_year":5}
```

## Alur MVP
1. Onboarding: nama lengkap + tgl lahir + gender → INSTANT results (weton, shio, zodiak, numerologi, kua) — hook gratifikasi cepat.
2. Tes inti: Big Five 50 item (~7 menit).
3. Tes opsional modular: 16 tipe, DISC, Enneagram, VIA, MI, VAK, MFT, dst.
4. Sintesis AI → Profil Terpadu 10 seksi.
5. Fitur lanjutan: kecocokan pasangan/tim, chat konsultasi AI, PDF export.

## Monetisasi (saran)
- Free: hasil instan + Big Five ringkas.
- Premium: profil terpadu lengkap + PDF + chat AI + kecocokan.
- B2B: asesmen tim/rekrutmen (HANYA tier ilmiah).
