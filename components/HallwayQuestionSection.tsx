import type { HallwayQuestion } from "@/types/edition";
import SectionLabel from "./SectionLabel";
import ProvenanceBadge from "./ProvenanceBadge";

export default function HallwayQuestionSection({ item }: { item: HallwayQuestion }) {
  return (
    <section className="mb-10">
      <SectionLabel>Hallway Question</SectionLabel>

      <div className="border-l-4 border-stone-800 pl-5 py-1">
        <p className="font-serif text-xl sm:text-2xl text-stone-900 leading-snug mb-2">
          &ldquo;{item.question}&rdquo;
        </p>
        {item.note && (
          <p className="text-sm text-stone-500 italic">{item.note}</p>
        )}
      </div>

      <div className="mt-3">
        <ProvenanceBadge provenance={item.provenance} />
      </div>
    </section>
  );
}
