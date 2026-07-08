"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Reveal from "@/components/Reveal";
import { bacaProfil, simpanProfil } from "@/lib/storage";
import type { Gender } from "@/lib/types";

export default function Mulai() {
  const router = useRouter();
  const [namaLengkap, setNamaLengkap] = useState("");
  const [namaPanggilan, setNamaPanggilan] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jamLahir, setJamLahir] = useState("");
  const [gender, setGender] = useState<Gender | "">("");
  const [galat, setGalat] = useState("");
  const [hariIni, setHariIni] = useState("2030-12-31");

  useEffect(() => {
    setHariIni(new Date().toISOString().slice(0, 10));
    const ada = bacaProfil();
    if (ada) {
      setNamaLengkap(ada.namaLengkap);
      setNamaPanggilan(ada.namaPanggilan);
      setTanggalLahir(ada.tanggalLahir);
      setJamLahir(ada.jamLahir ?? "");
      setGender(ada.gender);
    }
  }, []);

  const kirim = (e: FormEvent) => {
    e.preventDefault();
    const nama = namaLengkap.trim();
    if (nama.length < 2 || !/[a-zA-Z]/.test(nama)) {
      setGalat("Masukkan nama lengkap sesuai akta — dipakai untuk numerologi.");
      return;
    }
    if (!tanggalLahir) {
      setGalat("Tanggal lahir wajib diisi.");
      return;
    }
    if (tanggalLahir < "1930-01-01" || tanggalLahir > hariIni) {
      setGalat("Tanggal lahir harus antara tahun 1930 dan hari ini.");
      return;
    }
    if (!gender) {
      setGalat("Pilih gender — dipakai untuk perhitungan angka Kua.");
      return;
    }
    simpanProfil({
      namaLengkap: nama,
      namaPanggilan: namaPanggilan.trim() || nama.split(/\s+/)[0],
      tanggalLahir,
      jamLahir: jamLahir || undefined,
      gender,
    });
    router.push("/hasil");
  };

  return (
    <section className="mx-auto flex min-h-[100svh] max-w-xl flex-col justify-center px-5 pb-20 pt-28">
      <Reveal>
        <p className="kicker mb-4 text-center">Langkah 1 · Momen Lahirmu</p>
        <h1 className="font-display text-balance text-center text-3xl font-extrabold tracking-tight md:text-4xl">
          Semua dimulai dari{" "}
          <span className="text-aurora">satu momen.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-ink-2">
          Dari data ini, JIVA langsung membaca weton, shio, zodiak, numerologi,
          dan angka Kua-mu. Semua tersimpan hanya di perangkatmu.
        </p>
      </Reveal>

      <Reveal delay={120}>
        <form onSubmit={kirim} className="glass glass-hairline mt-10 space-y-6 p-7 md:p-9" noValidate>
          <div>
            <label htmlFor="nama" className="mb-2 block text-sm font-semibold">
              Nama lengkap <span className="text-ink-3">(sesuai akta)</span>
            </label>
            <input
              id="nama"
              className="input-glass"
              type="text"
              placeholder="mis. Panji Vatorrohman"
              value={namaLengkap}
              onChange={(e) => setNamaLengkap(e.target.value)}
              autoComplete="name"
            />
            <p className="mt-1.5 text-xs text-ink-3">
              Huruf-huruf nama ini menjadi dasar angka destiny, soul urge &
              personality.
            </p>
          </div>

          <div>
            <label htmlFor="panggilan" className="mb-2 block text-sm font-semibold">
              Nama panggilan <span className="text-ink-3">(opsional)</span>
            </label>
            <input
              id="panggilan"
              className="input-glass"
              type="text"
              placeholder="mis. Panji"
              value={namaPanggilan}
              onChange={(e) => setNamaPanggilan(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="tgl" className="mb-2 block text-sm font-semibold">
              Tanggal lahir
            </label>
            <input
              id="tgl"
              className="input-glass"
              type="date"
              min="1930-01-01"
              max={hariIni}
              value={tanggalLahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="jam" className="mb-2 block text-sm font-semibold">
              Jam lahir <span className="text-ink-3">(opsional)</span>
            </label>
            <input
              id="jam"
              className="input-glass"
              type="time"
              value={jamLahir}
              onChange={(e) => setJamLahir(e.target.value)}
            />
            <p className="mt-1.5 text-xs text-ink-3">
              Membuka pilar Jam pada BaZi (Empat Pilar). Kosongkan jika tidak
              ingat — tiga pilar lain tetap terbaca.
            </p>
          </div>

          <div>
            <span className="mb-2 block text-sm font-semibold">Gender</span>
            <div className="grid grid-cols-2 gap-3">
              {(["pria", "wanita"] as const).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGender(g)}
                  className={`rounded-2xl border px-4 py-3 text-sm font-semibold capitalize transition-all duration-300 ease-out ${
                    gender === g
                      ? "border-violet/60 bg-violet/15 text-ink shadow-[0_0_24px_rgba(139,92,246,0.25)]"
                      : "border-white/10 bg-white/5 text-ink-2 hover:border-white/20"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
            <p className="mt-1.5 text-xs text-ink-3">
              Dipakai hanya untuk rumus angka Kua (feng shui).
            </p>
          </div>

          {galat && (
            <p className="rounded-xl border border-rose/30 bg-rose/10 px-4 py-3 text-sm text-[#ff8a84]">
              {galat}
            </p>
          )}

          <button type="submit" className="btn-primary w-full text-base">
            Baca Cetak Biru Kelahiranku
            <span aria-hidden>→</span>
          </button>
          <p className="text-center text-xs text-ink-3">
            Gratis · Instan · 100% di perangkatmu
          </p>
        </form>
      </Reveal>
    </section>
  );
}
