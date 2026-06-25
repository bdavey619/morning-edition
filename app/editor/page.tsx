import { getAllEditions, formatEditionDate } from "@/lib/editions";
import Link from "next/link";
import { PROVENANCE_LABELS, PROVENANCE_COLORS } from "@/lib/provenance";
import type { Provenance } from "@/types/edition";

function ProvenancePill({ p }: { p: Provenance }) {
  return (
    <span className={`text-[11px] font-medium px-2 py-0.5 rounded border ${PROVENANCE_COLORS[p]}`}>
      {PROVENANCE_LABELS[p]}
    </span>
  );
}

function Check({ ok }: { ok: boolean }) {
  return (
    <span className={ok ? "text-emerald-500" : "text-stone-300"} title={ok ? "Present" : "Missing"}>
      {ok ? "✓" : "–"}
    </span>
  );
}

export default function EditorPage() {
  const editions = getAllEditions();

  return (
    <main className="min-h-screen bg-stone-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <header className="mb-8">
          <Link href="/" className="text-xs text-stone-400 hover:text-stone-700 transition-colors">
            ← Homepage
          </Link>
          <h1 className="font-serif text-3xl font-bold text-stone-900 mt-2">Editor Dashboard</h1>
          <p className="text-sm text-stone-500 mt-1">
            Review editions and content completeness. Edit JSON files in{" "}
            <code className="bg-stone-200 px-1 rounded text-xs">content/editions/</code> to update
            content.
          </p>
        </header>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm text-amber-800">
          <p className="font-semibold mb-1">MVP Editor Mode</p>
          <p>
            This dashboard is read-only. Edit JSON files in{" "}
            <code className="bg-amber-100 px-1 rounded">content/editions/</code> directly.
            Use prompts in <code className="bg-amber-100 px-1 rounded">prompts/</code> to draft
            content with AI, then update provenance fields and set{" "}
            <code className="bg-amber-100 px-1 rounded">&quot;published&quot;: true</code> when ready.
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-4">
            Published Editions
          </h2>

          <div className="space-y-6">
            {editions.map((edition) => (
              <div key={edition.id} className="bg-white border border-stone-200 rounded-lg p-5">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="font-semibold text-stone-900">{formatEditionDate(edition.date)}</p>
                    <p className="text-xs text-stone-500">
                      {edition.editionName} · {edition.readTime}
                    </p>
                  </div>
                  <Link
                    href={`/edition/${edition.id}`}
                    className="text-xs text-stone-500 underline hover:text-stone-800 shrink-0"
                  >
                    View →
                  </Link>
                </div>

                {/* Section provenance */}
                <div className="mb-4">
                  <p className="text-[11px] font-bold tracking-wider uppercase text-stone-400 mb-2">
                    Provenance
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {[
                      { label: "Front Page", p: edition.frontPage.provenance },
                      { label: "Around Town", p: edition.aroundTown.provenance },
                      { label: "Storyline", p: edition.storyline.provenance },
                      { label: "Worth Your Time", p: edition.worthYourTime.provenance },
                      { label: "Mini Puzzle", p: edition.miniPuzzle.provenance },
                      { label: "Hallway Question", p: edition.hallwayQuestion.provenance },
                      ...(edition.lookingAhead
                        ? [{ label: "Looking Ahead", p: edition.lookingAhead.provenance }]
                        : []),
                    ].map(({ label, p }) => (
                      <div
                        key={label}
                        className="flex items-center justify-between gap-2 py-1 border-b border-stone-100"
                      >
                        <span className="text-stone-500 text-xs">{label}</span>
                        <ProvenancePill p={p as Provenance} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Completeness checklist */}
                <div>
                  <p className="text-[11px] font-bold tracking-wider uppercase text-stone-400 mb-2">
                    Content completeness
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-xs text-stone-600">
                    <span className="flex items-center gap-1.5">
                      <Check ok={!!edition.missionStatement} />
                      Mission statement
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check ok={edition.frontPage.sources.length > 0} />
                      Front page sources
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check ok={!!edition.frontPage.whySelected} />
                      Front page why-selected
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check ok={!!edition.frontPage.conversationStarter} />
                      Front page starter
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check ok={!!edition.aroundTown.ifYouGo} />
                      If You Go
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check ok={!!edition.aroundTown.neighborhoodNudge} />
                      Neighborhood nudge
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check ok={!!edition.aroundTown.whySelected} />
                      Around town why-selected
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check ok={!!edition.aroundTown.conversationStarter} />
                      Around town starter
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check ok={!!edition.storyline.whySelected} />
                      Storyline why-selected
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check ok={!!edition.storyline.conversationStarter} />
                      Storyline starter
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check ok={!!edition.worthYourTime.whySelected} />
                      WYT why-selected
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check ok={!!edition.miniPuzzle.whySelected} />
                      Puzzle why-selected
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check ok={!!edition.lookingAhead} />
                      Looking Ahead
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check
                        ok={
                          !!edition.lookingAhead &&
                          ["editor_verified", "source_verified"].includes(
                            edition.lookingAhead.verificationStatus
                          )
                        }
                      />
                      Logistics verified
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check
                        ok={
                          !edition.aroundTown.ifYouGo ||
                          ["editor_verified", "source_verified"].includes(
                            edition.aroundTown.ifYouGo.verificationStatus ?? ""
                          )
                        }
                      />
                      If You Go verified
                    </span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-stone-100">
                  <p className="text-xs text-stone-400">
                    File:{" "}
                    <code className="bg-stone-100 px-1 rounded">
                      content/editions/{edition.id}.json
                    </code>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-4">
            AI Prompt Templates
          </h2>
          <div className="bg-white border border-stone-200 rounded-lg divide-y divide-stone-100">
            {[
              { file: "gather-candidates.md", desc: "Find and surface candidate stories" },
              { file: "rank-candidates.md", desc: "Rank and filter gathered candidates" },
              { file: "draft-edition.md", desc: "Draft a full edition from ranked candidates" },
              { file: "fact-check-checklist.md", desc: "Pre-publish fact-check checklist" },
            ].map(({ file, desc }) => (
              <div key={file} className="flex items-center justify-between px-4 py-3">
                <div>
                  <code className="text-xs text-stone-700">{file}</code>
                  <p className="text-xs text-stone-400 mt-0.5">{desc}</p>
                </div>
                <span className="text-xs text-stone-300">prompts/</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
