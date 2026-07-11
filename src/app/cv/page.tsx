"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { bacaProfil } from "@/lib/storage";
import { daftarRingkasan, type RingkasanTes, type KelompokTes } from "@/lib/ringkasan";

/* ------------------------------- model data ------------------------------- */

interface Baris {
  a: string;
  b: string;
  c: string;
}
interface DataCV {
  email: string;
  hp: string;
  kota: string;
  tagline: string;
  pendidikan: Baris[];
  kerja: Baris[];
  organisasi: Baris[];
  prestasi: Baris[];
  keterampilan: string[];
  dipilih: string[]; // id sistem yang dimasukkan ke CV
  dipilihDiset: boolean; // sudah pernah diinisialisasi dari tes selesai?
}

const KOSONG: DataCV = {
  email: "",
  hp: "",
  kota: "",
  tagline: "",
  pendidikan: [],
  kerja: [],
  organisasi: [],
  prestasi: [],
  keterampilan: [],
  dipilih: [],
  dipilihDiset: false,
};

const KEY = "jiva:v1:cv";

function baca(): DataCV {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...KOSONG };
    return { ...KOSONG, ...(JSON.parse(raw) as Partial<DataCV>) };
  } catch {
    return { ...KOSONG };
  }
}
function simpan(d: DataCV) {
  try {
    localStorage.setItem(KEY, JSON.stringify(d));
  } catch {
    /* abaikan */
  }
}

const KELOMPOK_LABEL: Record<KelompokTes, string> = {
  ilmiah: "Psikometri Ilmiah",
  semi: "Populer & Semi-Ilmiah",
  budaya: "Budaya & Spiritual",
  input: "Referensi / Input",
};
const KELOMPOK_URUTAN: KelompokTes[] = ["ilmiah", "semi", "budaya", "input"];

/* ------------------------------- sub-editor ------------------------------- */

function SeksiBaris({
  judul,
  labelA,
  labelB,
  labelC,
  rows,
  onChange,
}: {
  judul: string;
  labelA: string;
  labelB: string;
  labelC: string;
  rows: Baris[];
  onChange: (rows: Baris[]) => void;
}) {
  const ubah = (i: number, k: keyof Baris, v: string) => {
    const next = rows.map((r, j) => (j === i ? { ...r, [k]: v } : r));
    onChange(next);
  };
  const tambah = () => onChange([...rows, { a: "", b: "", c: "" }]);
  const hapus = (i: number) => onChange(rows.filter((_, j) => j !== i));

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className="kicker !text-[10px]">{judul}</p>
        <button
          type="button"
          onClick={tambah}
          className="rounded-lg border border-white/12 bg-white/5 px-2.5 py-1 text-xs text-ink-2 transition-colors hover:bg-white/10"
        >
          + Tambah
        </button>
      </div>
      <div className="space-y-2">
        {rows.length === 0 && (
          <p className="text-xs text-ink-3">Belum ada. Klik “+ Tambah”.</p>
        )}
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-[1fr_1fr_auto_auto] gap-2">
            <input
              value={r.a}
              onChange={(e) => ubah(i, "a", e.target.value)}
              placeholder={labelA}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink outline-none focus:border-violet/50"
            />
            <input
              value={r.b}
              onChange={(e) => ubah(i, "b", e.target.value)}
              placeholder={labelB}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink outline-none focus:border-violet/50"
            />
            <input
              value={r.c}
              onChange={(e) => ubah(i, "c", e.target.value)}
              placeholder={labelC}
              className="w-24 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink outline-none focus:border-violet/50"
            />
            <button
              type="button"
              onClick={() => hapus(i)}
              aria-label="Hapus baris"
              className="rounded-lg border border-white/10 px-2 text-ink-3 transition-colors hover:border-amber/40 hover:text-amber"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- halaman -------------------------------- */

export default function GeneratorCV() {
  const [siap, setSiap] = useState(false);
  const [data, setData] = useState<DataCV>(KOSONG);
  const [nama, setNama] = useState("");
  const [ringkasan, setRingkasan] = useState<RingkasanTes[]>([]);

  useEffect(() => {
    const pr = bacaProfil();
    const r = daftarRingkasan(pr);
    setRingkasan(r);
    setNama(pr?.namaLengkap ?? "");
    const d = baca();
    if (!d.dipilihDiset) {
      d.dipilih = r.filter((x) => x.selesai).map((x) => x.id);
      d.dipilihDiset = true;
    }
    setData(d);
    setSiap(true);
  }, []);

  const set = (patch: Partial<DataCV>) => {
    setData((prev) => {
      const next = { ...prev, ...patch };
      simpan(next);
      return next;
    });
  };

  const toggleTes = (id: string) => {
    const ada = data.dipilih.includes(id);
    set({
      dipilih: ada ? data.dipilih.filter((x) => x !== id) : [...data.dipilih, id],
    });
  };

  if (!siap) {
    return (
      <div className="flex min-h-[70svh] items-center justify-center text-sm text-ink-3">
        Menyiapkan CV-mu…
      </div>
    );
  }

  const dipilihSet = new Set(data.dipilih);
  const tesTerpilih = ringkasan.filter((r) => r.selesai && dipilihSet.has(r.id));
  const adaIsiRiwayat =
    data.pendidikan.some((r) => r.a || r.b) ||
    data.kerja.some((r) => r.a || r.b) ||
    data.organisasi.some((r) => r.a || r.b) ||
    data.prestasi.some((r) => r.a || r.b) ||
    data.keterampilan.length > 0;

  const barisIsi = (r: Baris) => r.a || r.b || r.c;

  return (
    <section className="mx-auto max-w-6xl px-5 pb-24 pt-32 md:px-8">
      <Reveal>
        <div className="text-center no-print">
          <p className="kicker mb-4">Generator CV · Riwayat Hidup</p>
          <h1 className="font-display text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
            CV singkat, <span className="text-aurora">plus sisi kepribadianmu.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-2">
            Isi riwayat hidupmu, centang hasil tes yang ingin kamu sertakan, lalu
            cetak atau simpan sebagai PDF. Semua tersimpan di perangkatmu.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button onClick={() => window.print()} className="btn-primary text-sm">
              ⤓ Cetak / Simpan PDF
            </button>
            <Link href="/tes" className="btn-ghost text-sm">
              Ikuti Tes Lain
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr] print:!block">
        {/* ------------------------------- editor ------------------------------ */}
        <div className="no-print space-y-6">
          <div className="glass glass-hairline space-y-4 p-6">
            <p className="kicker !text-[10px]">Data Diri</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="text-xs text-ink-3">
                Nama lengkap
                <input
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama lengkap"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink outline-none focus:border-violet/50"
                />
              </label>
              <label className="text-xs text-ink-3">
                Kota / domisili
                <input
                  value={data.kota}
                  onChange={(e) => set({ kota: e.target.value })}
                  placeholder="mis. Surabaya"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink outline-none focus:border-violet/50"
                />
              </label>
              <label className="text-xs text-ink-3">
                Email
                <input
                  value={data.email}
                  onChange={(e) => set({ email: e.target.value })}
                  placeholder="email@contoh.com"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink outline-none focus:border-violet/50"
                />
              </label>
              <label className="text-xs text-ink-3">
                No. HP
                <input
                  value={data.hp}
                  onChange={(e) => set({ hp: e.target.value })}
                  placeholder="08xxxxxxxxxx"
                  className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink outline-none focus:border-violet/50"
                />
              </label>
            </div>
            <label className="block text-xs text-ink-3">
              Tentang saya (satu kalimat)
              <input
                value={data.tagline}
                onChange={(e) => set({ tagline: e.target.value })}
                placeholder="mis. Mahasiswa teknik yang gigih & suka memecahkan masalah."
                className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink outline-none focus:border-violet/50"
              />
            </label>
          </div>

          <div className="glass glass-hairline space-y-6 p-6">
            <SeksiBaris
              judul="Pendidikan"
              labelA="Institusi / sekolah"
              labelB="Jurusan / bidang"
              labelC="Tahun"
              rows={data.pendidikan}
              onChange={(rows) => set({ pendidikan: rows })}
            />
            <SeksiBaris
              judul="Pengalaman Kerja / Karier"
              labelA="Posisi"
              labelB="Tempat / perusahaan"
              labelC="Periode"
              rows={data.kerja}
              onChange={(rows) => set({ kerja: rows })}
            />
            <SeksiBaris
              judul="Organisasi"
              labelA="Nama organisasi"
              labelB="Peran"
              labelC="Periode"
              rows={data.organisasi}
              onChange={(rows) => set({ organisasi: rows })}
            />
            <SeksiBaris
              judul="Prestasi & Olimpiade"
              labelA="Judul / prestasi"
              labelB="Tingkat / penyelenggara"
              labelC="Tahun"
              rows={data.prestasi}
              onChange={(rows) => set({ prestasi: rows })}
            />
            <TagEditor
              tags={data.keterampilan}
              onChange={(t) => set({ keterampilan: t })}
            />
          </div>

          {/* filter tes */}
          <div className="glass glass-hairline p-6">
            <div className="mb-3 flex items-center justify-between">
              <p className="kicker !text-[10px]">Hasil Tes yang Disertakan</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => set({ dipilih: ringkasan.filter((r) => r.selesai).map((r) => r.id) })}
                  className="rounded-lg border border-white/12 bg-white/5 px-2.5 py-1 text-xs text-ink-2 hover:bg-white/10"
                >
                  Pilih semua
                </button>
                <button
                  type="button"
                  onClick={() => set({ dipilih: [] })}
                  className="rounded-lg border border-white/12 bg-white/5 px-2.5 py-1 text-xs text-ink-2 hover:bg-white/10"
                >
                  Kosongkan
                </button>
              </div>
            </div>
            <p className="mb-4 text-xs text-ink-3">
              Centang tes mana saja yang ingin muncul di CV — bisa cuma Big Five &
              DISC, bisa juga plus weton, shio, IQ, EQ, atau semuanya.
            </p>
            <div className="space-y-4">
              {KELOMPOK_URUTAN.map((k) => {
                const items = ringkasan.filter((r) => r.kelompok === k && r.selesai);
                if (!items.length) return null;
                return (
                  <div key={k}>
                    <p className="mb-2 text-[11px] uppercase tracking-widest text-ink-3">
                      {KELOMPOK_LABEL[k]}
                    </p>
                    <div className="grid gap-1.5 sm:grid-cols-2">
                      {items.map((r) => (
                        <label
                          key={r.id}
                          className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-sm text-ink-2"
                        >
                          <input
                            type="checkbox"
                            checked={dipilihSet.has(r.id)}
                            onChange={() => toggleTes(r.id)}
                            className="accent-violet"
                          />
                          {r.nama}
                        </label>
                      ))}
                    </div>
                  </div>
                );
              })}
              {ringkasan.every((r) => !r.selesai) && (
                <p className="text-xs text-ink-3">
                  Belum ada tes yang selesai.{" "}
                  <Link href="/tes" className="text-aurora underline underline-offset-2">
                    Ikuti tes dulu
                  </Link>{" "}
                  agar bisa disertakan di CV.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* ------------------------------ pratinjau ---------------------------- */}
        <div>
          <p className="kicker !text-[10px] mb-3 no-print">Pratinjau</p>
          <div className="glass glass-hairline overflow-hidden p-7 md:p-9" id="cv-cetak">
            <header className="border-b border-white/10 pb-4">
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                {nama || "Nama Lengkap"}
              </h2>
              <p className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-ink-3">
                {data.kota && <span>{data.kota}</span>}
                {data.email && <span>· {data.email}</span>}
                {data.hp && <span>· {data.hp}</span>}
              </p>
              {data.tagline && (
                <p className="mt-2 text-sm leading-relaxed text-ink-2">{data.tagline}</p>
              )}
            </header>

            {adaIsiRiwayat && (
              <div className="mt-5 space-y-5">
                <BlokRiwayat judul="Pendidikan" rows={data.pendidikan.filter(barisIsi)} />
                <BlokRiwayat judul="Pengalaman Kerja" rows={data.kerja.filter(barisIsi)} />
                <BlokRiwayat judul="Organisasi" rows={data.organisasi.filter(barisIsi)} />
                <BlokRiwayat judul="Prestasi & Olimpiade" rows={data.prestasi.filter(barisIsi)} />
                {data.keterampilan.length > 0 && (
                  <div>
                    <p className="kicker !text-[10px] mb-2">Keterampilan</p>
                    <div className="flex flex-wrap gap-1.5">
                      {data.keterampilan.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {tesTerpilih.length > 0 && (
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="kicker !text-[10px] mb-3">Profil Kepribadian (Djiva)</p>
                <div className="space-y-2.5">
                  {tesTerpilih.map((r) => (
                    <div key={r.id} className="text-sm leading-relaxed">
                      <span className="font-semibold text-ink">{r.nama}:</span>{" "}
                      <span className="text-ink-2">{r.headline}</span>
                      {r.poin.length > 0 && (
                        <span className="block text-xs text-ink-3">{r.poin.join(" · ")}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!adaIsiRiwayat && tesTerpilih.length === 0 && (
              <p className="mt-6 text-sm text-ink-3">
                Mulai isi riwayat hidup di kiri, atau centang hasil tes untuk
                melihat pratinjau CV-mu di sini.
              </p>
            )}

            <p className="mt-8 border-t border-white/8 pt-3 text-[10px] text-ink-3/70">
              Dibuat dengan Djiva — djiwa.web.id · © 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- komponen kecil --------------------------- */

function BlokRiwayat({ judul, rows }: { judul: string; rows: Baris[] }) {
  if (rows.length === 0) return null;
  return (
    <div>
      <p className="kicker !text-[10px] mb-2">{judul}</p>
      <ul className="space-y-1.5">
        {rows.map((r, i) => (
          <li key={i} className="flex items-baseline justify-between gap-3 text-sm">
            <span className="text-ink-2">
              <strong className="text-ink">{r.a}</strong>
              {r.b && <span className="text-ink-3"> — {r.b}</span>}
            </span>
            {r.c && <span className="shrink-0 text-xs text-ink-3">{r.c}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TagEditor({ tags, onChange }: { tags: string[]; onChange: (t: string[]) => void }) {
  const [nilai, setNilai] = useState("");
  const tambah = () => {
    const v = nilai.trim();
    if (v && !tags.includes(v)) onChange([...tags, v]);
    setNilai("");
  };
  return (
    <div>
      <p className="kicker !text-[10px] mb-2">Bakat & Keterampilan</p>
      <div className="flex gap-2">
        <input
          value={nilai}
          onChange={(e) => setNilai(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              tambah();
            }
          }}
          placeholder="mis. Public speaking, Python…"
          className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-ink outline-none focus:border-violet/50"
        />
        <button
          type="button"
          onClick={tambah}
          className="rounded-lg border border-white/12 bg-white/5 px-3 py-2 text-xs text-ink-2 hover:bg-white/10"
        >
          Tambah
        </button>
      </div>
      {tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => onChange(tags.filter((x) => x !== t))}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-2 hover:border-amber/40 hover:text-amber"
            >
              {t} ✕
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* Reveal ringan lokal agar tak bergantung animasi berat saat cetak. */
function Reveal({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
