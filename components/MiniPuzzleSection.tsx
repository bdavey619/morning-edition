"use client";

import { useState } from "react";
import type { MiniPuzzle } from "@/types/edition";
import SectionLabel from "./SectionLabel";
import ProvenanceBadge from "./ProvenanceBadge";
import WhySelectedDisclosure from "./WhySelected";

export default function MiniPuzzleSection({ puzzle }: { puzzle: MiniPuzzle }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const isCorrect = selected === puzzle.answer;

  return (
    <section className="mb-10">
      <SectionLabel>Mini Puzzle</SectionLabel>

      <div className="bg-stone-800 text-stone-100 rounded-lg p-5">
        <p className="text-xs font-bold tracking-wider uppercase text-stone-400 mb-3">
          Local Trivia
        </p>

        <p className="text-base font-medium leading-relaxed mb-5">{puzzle.prompt}</p>

        {puzzle.options ? (
          <div className="space-y-2 mb-4">
            {puzzle.options.map((opt) => {
              const isSelected = selected === opt;
              const showResult = selected !== null;
              const isAnswer = opt === puzzle.answer;

              let btnClass =
                "w-full text-left px-4 py-2.5 rounded text-sm font-medium transition-colors border ";

              if (showResult && isAnswer) {
                btnClass += "bg-emerald-600 border-emerald-500 text-white";
              } else if (showResult && isSelected && !isAnswer) {
                btnClass += "bg-red-700 border-red-600 text-white";
              } else if (!showResult && isSelected) {
                btnClass += "bg-stone-600 border-stone-500 text-white";
              } else {
                btnClass +=
                  "bg-stone-700 border-stone-600 text-stone-200 hover:bg-stone-600";
              }

              return (
                <button
                  key={opt}
                  className={btnClass}
                  onClick={() => !selected && setSelected(opt)}
                  disabled={!!selected}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mb-4">
            {!revealed ? (
              <button
                className="text-sm font-medium text-stone-300 underline underline-offset-2 hover:text-white transition-colors"
                onClick={() => setRevealed(true)}
              >
                Reveal answer
              </button>
            ) : (
              <p className="text-emerald-400 font-semibold">{puzzle.answer}</p>
            )}
          </div>
        )}

        {selected && (
          <div className="text-sm mt-2">
            {isCorrect ? (
              <p className="text-emerald-400 font-medium">Correct! ✓</p>
            ) : (
              <p className="text-red-400">
                Not quite. The answer is{" "}
                <span className="font-semibold text-emerald-400">{puzzle.answer}</span>.
              </p>
            )}
            {puzzle.hint && (
              <p className="text-stone-400 text-xs mt-1 italic">{puzzle.hint}</p>
            )}
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-stone-700 flex flex-col gap-2">
          <ProvenanceBadge provenance={puzzle.provenance} />
          {puzzle.whySelected && (
            <div className="[&_button]:text-stone-400 [&_button:hover]:text-stone-200">
              <WhySelectedDisclosure data={puzzle.whySelected} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
