import type { Tier } from "@/lib/types";

const TIER_TAMPIL: Record<Tier, { label: string; kelas: string }> = {
  scientific: {
    label: "Ilmiah",
    kelas: "bg-mint/12 text-mint border-mint/25",
  },
  semi_scientific: {
    label: "Semi-Ilmiah",
    kelas: "bg-blue/12 text-[#7db4f9] border-blue/25",
  },
  cultural_spiritual: {
    label: "Budaya & Refleksi",
    kelas: "bg-violet/12 text-[#b39cf9] border-violet/25",
  },
  pseudoscience: {
    label: "Hiburan",
    kelas: "bg-amber/12 text-amber border-amber/25",
  },
};

export default function TierBadge({ tier }: { tier: Tier }) {
  const t = TIER_TAMPIL[tier];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${t.kelas}`}
    >
      {t.label}
    </span>
  );
}
