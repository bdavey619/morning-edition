"use client";

import { useState } from "react";
import type { LookingAhead, VerificationStatus, WorthLeavingFor, PlanningDifficulty } from "@/types/edition";
import SectionLabel from "./SectionLabel";
import ProvenanceBadge from "./ProvenanceBadge";
import WhySelectedDisclosure from "./WhySelected";
import ConversationStarter from "./ConversationStarter";

const WORTH_LEAVING_STYLES: Record<WorthLeavingFor, { label: string; style: string }> = {
  yes: { label: "Yes — worth the trip", style: "bg-emerald-50 text-emerald-800 border-emerald-200" },
  maybe: { label: "Maybe — depends on you", style: "bg-amber-50 text-amber-800 border-amber-200" },
  no: { label: "Local only", style: "bg-stone-100 text-stone-600 border-stone-200" },
};

const DIFFICULTY_STYLES: Record<PlanningDifficulty, { label: string; style: string }> = {
  low: { label: "Easy to pull off", style: "text-emerald-700" },
  medium: { label: "Some planning needed", style: "text-amber-700" },
  high: { label: "Plan ahead", style: "text-red-700" },
};

const VERIFICATION_LABELS: Record<VerificationStatus, { label: string; style: string }> = {
  editor_verified: { label: "Logistics editor-verified", style: "text-emerald-600" },
  source_verified: { label: "Logistics source-verified", style: "text-emerald-600" },
  ai_inferred: { label: "Logistics AI-inferred — verify before publishing", style: "text-amber-600" },
  community_submitted: { label: "Community submitted", style: "text-sky-600" },
  needs_review: { label: "Needs review before publishing", style: "text-red-600" },
};

function ScoreDots({ value, max = 5, colorOn }: { value: number; max?: number; colorOn: string }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`inline-block w-2 h-2 rounded-full ${i < value ? colorOn : "bg-stone-200"}`}
        />
      ))}
    </span>
  );
}

export default function LookingAheadSection({ item }: { item: LookingAhead }) {
  const [logisticsOpen, setLogisticsOpen] = useState(false);

  const worth = WORTH_LEAVING_STYLES[item.worthLeavingNeighborhoodFor];
  const difficulty = DIFFICULTY_STYLES[item.planningDifficulty];
  const verification = VERIFICATION_LABELS[item.verificationStatus];

  const hasLogistics =
    item.gettingThere || item.parkingNote || item.transitNote || item.rideshareNote || item.insiderTip;

  return (
    <section className="mb-10">
      <SectionLabel>Looking Ahead</SectionLabel>

      {/* At-a-glance badges */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded border ${worth.style}`}
        >
          {worth.label}
        </span>
        <span className={`text-xs font-medium ${difficulty.style}`}>
          · {difficulty.label}
        </span>
      </div>

      <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-tight mb-1">
        {item.title}
      </h2>

      <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-sm text-stone-500 mb-3">
        <span>
          <span className="font-medium">When:</span> {item.date}
        </span>
        <span>
          <span className="font-medium">Neighborhood:</span> {item.neighborhood}
        </span>
      </div>

      <p className="text-base text-stone-700 leading-relaxed mb-4">{item.description}</p>

      {/* Scores */}
      <div className="flex flex-wrap gap-6 mb-4 py-3 border-y border-stone-200">
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-400 font-medium uppercase tracking-wide">Activation cost</span>
          <ScoreDots value={item.travelFriction} colorOn="bg-stone-400" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-400 font-medium uppercase tracking-wide">Energy payoff</span>
          <ScoreDots value={item.energyPayoff} colorOn="bg-stone-800" />
        </div>
        {item.goodFor && (
          <div className="w-full sm:w-auto flex items-start gap-2">
            <span className="text-xs text-stone-400 font-medium uppercase tracking-wide shrink-0">Good for</span>
            <span className="text-xs text-stone-600">{item.goodFor}</span>
          </div>
        )}
      </div>

      {item.decisionDeadline && (
        <div className="flex items-start gap-2 mb-4 bg-amber-50 border border-amber-100 rounded px-3 py-2">
          <span className="text-amber-500 text-sm shrink-0">⏱</span>
          <p className="text-sm text-amber-800">
            <span className="font-semibold">Decide by:</span> {item.decisionDeadline}
          </p>
        </div>
      )}

      {/* Logistics drawer */}
      {hasLogistics && (
        <div className="mb-4">
          <button
            onClick={() => setLogisticsOpen((o) => !o)}
            className="flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-stone-900 transition-colors"
            aria-expanded={logisticsOpen}
          >
            <span className="bg-stone-800 text-stone-100 px-2 py-0.5 rounded text-[11px] tracking-wide uppercase">
              Getting There
            </span>
            <span
              className={`text-stone-400 transition-transform duration-150 ${logisticsOpen ? "rotate-90" : ""}`}
            >
              ▶
            </span>
          </button>

          {logisticsOpen && (
            <div className="mt-3 border border-stone-200 rounded-lg overflow-hidden">
              <div className="divide-y divide-stone-100">
                {item.gettingThere && (
                  <div className="flex gap-3 px-4 py-2.5 text-sm">
                    <span className="text-stone-400 font-medium w-28 shrink-0">Overview</span>
                    <span className="text-stone-700 leading-snug">{item.gettingThere}</span>
                  </div>
                )}
                {item.parkingNote && (
                  <div className="flex gap-3 px-4 py-2.5 text-sm bg-stone-50">
                    <span className="text-stone-400 font-medium w-28 shrink-0">Parking</span>
                    <span className="text-stone-700 leading-snug">{item.parkingNote}</span>
                  </div>
                )}
                {item.transitNote && (
                  <div className="flex gap-3 px-4 py-2.5 text-sm bg-stone-50">
                    <span className="text-stone-400 font-medium w-28 shrink-0">Transit</span>
                    <span className="text-stone-700 leading-snug">{item.transitNote}</span>
                  </div>
                )}
                {item.rideshareNote && (
                  <div className="flex gap-3 px-4 py-2.5 text-sm">
                    <span className="text-stone-400 font-medium w-28 shrink-0">Rideshare</span>
                    <span className="text-stone-700 leading-snug">{item.rideshareNote}</span>
                  </div>
                )}
                {item.insiderTip && (
                  <div className="flex gap-3 px-4 py-2.5 text-sm">
                    <span className="text-stone-400 font-medium w-28 shrink-0">Insider tip</span>
                    <span className="text-stone-600 leading-snug italic">{item.insiderTip}</span>
                  </div>
                )}
              </div>
              <div className="px-4 py-2 bg-stone-50 border-t border-stone-200">
                <span className={`text-[11px] font-medium ${verification.style}`}>
                  ◆ {verification.label}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Sources and provenance */}
      <div className="flex flex-wrap items-center gap-3 mb-1">
        {item.sources?.map((src, i) => (
          <a
            key={i}
            href={src.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-stone-500 underline underline-offset-2 hover:text-stone-800 transition-colors"
          >
            {src.label}
          </a>
        ))}
        <ProvenanceBadge provenance={item.provenance} />
      </div>

      {item.whySelected && <WhySelectedDisclosure data={item.whySelected} />}
      {item.conversationStarter && (
        <ConversationStarter question={item.conversationStarter} />
      )}
    </section>
  );
}
