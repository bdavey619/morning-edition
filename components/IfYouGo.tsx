"use client";

import { useState } from "react";
import type { IfYouGo, VerificationStatus } from "@/types/edition";

const rows: { key: keyof Omit<IfYouGo, "verificationStatus">; label: string; isLogistics?: boolean }[] = [
  { key: "bestTime", label: "Best time to go" },
  { key: "parking", label: "Parking", isLogistics: true },
  { key: "transit", label: "Transit", isLogistics: true },
  { key: "cost", label: "Cost" },
  { key: "goodFor", label: "Good for" },
  { key: "insiderTip", label: "Insider tip" },
];

const VERIFICATION_LABELS: Record<VerificationStatus, { label: string; style: string }> = {
  editor_verified: { label: "Editor verified", style: "text-emerald-600" },
  source_verified: { label: "Source verified", style: "text-emerald-600" },
  ai_inferred: { label: "AI inferred — verify before publishing", style: "text-amber-600" },
  community_submitted: { label: "Community submitted", style: "text-sky-600" },
  needs_review: { label: "Needs review", style: "text-red-600" },
};

export default function IfYouGoModule({ data }: { data: IfYouGo }) {
  const [open, setOpen] = useState(false);
  const filled = rows.filter((r) => data[r.key]);
  const verification = data.verificationStatus
    ? VERIFICATION_LABELS[data.verificationStatus]
    : null;

  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-stone-900 transition-colors group"
        aria-expanded={open}
      >
        <span className="bg-stone-800 text-stone-100 px-2 py-0.5 rounded text-[11px] tracking-wide uppercase">
          If You Go
        </span>
        <span
          className={`text-stone-400 transition-transform duration-150 ${open ? "rotate-90" : ""}`}
        >
          ▶
        </span>
      </button>

      {open && (
        <div className="mt-3 border border-stone-200 rounded-lg overflow-hidden">
          <div className="divide-y divide-stone-100">
            {filled.map(({ key, label, isLogistics }) => (
              <div
                key={key}
                className={`flex gap-3 px-4 py-2.5 text-sm ${isLogistics ? "bg-stone-50" : ""}`}
              >
                <span className="text-stone-400 font-medium w-28 shrink-0">{label}</span>
                <span className="text-stone-700 leading-snug">{data[key] as string}</span>
              </div>
            ))}
          </div>

          {verification && (
            <div className="px-4 py-2 bg-stone-50 border-t border-stone-200">
              <span className={`text-[11px] font-medium ${verification.style}`}>
                ◆ {verification.label}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
