import { PROVENANCE_LABELS, PROVENANCE_COLORS } from "@/lib/provenance";
import type { Provenance } from "@/types/edition";

export default function ProvenanceBadge({ provenance }: { provenance: Provenance }) {
  return (
    <span
      className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded border ${PROVENANCE_COLORS[provenance]}`}
    >
      <span className="opacity-60">◆</span>
      {PROVENANCE_LABELS[provenance]}
    </span>
  );
}
