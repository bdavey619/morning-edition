import type { Provenance } from "@/types/edition";

export const PROVENANCE_LABELS: Record<Provenance, string> = {
  ai_drafted: "AI drafted",
  human_reviewed: "AI drafted · Human approved",
  human_written: "Human written",
  community_submitted: "Community submitted",
};

export const PROVENANCE_COLORS: Record<Provenance, string> = {
  ai_drafted: "bg-amber-50 text-amber-700 border-amber-200",
  human_reviewed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  human_written: "bg-sky-50 text-sky-700 border-sky-200",
  community_submitted: "bg-violet-50 text-violet-700 border-violet-200",
};
