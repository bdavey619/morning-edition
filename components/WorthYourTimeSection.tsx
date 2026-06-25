import type { WorthYourTime } from "@/types/edition";
import SectionLabel from "./SectionLabel";
import ProvenanceBadge from "./ProvenanceBadge";
import WhySelectedDisclosure from "./WhySelected";
import ConversationStarter from "./ConversationStarter";

export default function WorthYourTimeSection({ item }: { item: WorthYourTime }) {
  return (
    <section className="mb-10">
      <SectionLabel>Worth Your Time</SectionLabel>

      <div className="border border-stone-200 rounded-lg p-5">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <h2 className="font-serif text-xl font-bold text-stone-900 leading-tight group-hover:underline mb-1">
            {item.title}
          </h2>
        </a>

        <div className="flex flex-wrap gap-x-3 text-xs text-stone-500 mb-3">
          <span>{item.author}</span>
          <span>·</span>
          <span>{item.outlet}</span>
          <span>·</span>
          <span>{item.readingTime} read</span>
        </div>

        <p className="text-sm text-stone-700 leading-relaxed mb-4">{item.teaser}</p>

        <div className="flex flex-wrap items-center gap-3 mb-1">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-stone-800 underline underline-offset-2 hover:text-stone-600 transition-colors"
          >
            Read the full article →
          </a>
          <ProvenanceBadge provenance={item.provenance} />
        </div>

        {item.whySelected && <WhySelectedDisclosure data={item.whySelected} />}
        {item.conversationStarter && (
          <ConversationStarter question={item.conversationStarter} />
        )}
      </div>
    </section>
  );
}
