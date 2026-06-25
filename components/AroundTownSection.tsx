import type { AroundTownItem } from "@/types/edition";
import SectionLabel from "./SectionLabel";
import ProvenanceBadge from "./ProvenanceBadge";
import WhySelectedDisclosure from "./WhySelected";
import ConversationStarter from "./ConversationStarter";
import IfYouGoModule from "./IfYouGo";

export default function AroundTownSection({ item }: { item: AroundTownItem }) {
  return (
    <section className="mb-10">
      <SectionLabel>Around Town</SectionLabel>

      <div className="flex items-start gap-2 mb-2">
        <span className="text-xs font-semibold bg-stone-800 text-stone-100 px-2 py-0.5 rounded-sm mt-0.5">
          {item.type}
        </span>
      </div>

      <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-tight mb-2">
        {item.title}
      </h2>

      {(item.dateTime || item.location) && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500 mb-3">
          {item.dateTime && (
            <span>
              <span className="font-medium">When:</span> {item.dateTime}
            </span>
          )}
          {item.location && (
            <span>
              <span className="font-medium">Where:</span> {item.location}
            </span>
          )}
        </div>
      )}

      <p className="text-base text-stone-700 leading-relaxed mb-3">{item.description}</p>

      <p className="text-sm text-stone-600 italic leading-relaxed mb-3">{item.whyCare}</p>

      {item.neighborhoodNudge && (
        <div className="flex items-start gap-2 mb-4 bg-violet-50 border border-violet-100 rounded px-3 py-2">
          <span className="text-violet-400 text-sm mt-0.5 shrink-0">↗</span>
          <p className="text-sm text-violet-800 leading-snug">{item.neighborhoodNudge}</p>
        </div>
      )}

      {item.ifYouGo && <IfYouGoModule data={item.ifYouGo} />}

      <div className="flex flex-wrap items-center gap-3 mt-4">
        {item.source && (
          <a
            href={item.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-stone-500 underline underline-offset-2 hover:text-stone-800 transition-colors"
          >
            {item.source.label}
          </a>
        )}
        <ProvenanceBadge provenance={item.provenance} />
      </div>

      {item.whySelected && <WhySelectedDisclosure data={item.whySelected} />}
      {item.conversationStarter && (
        <ConversationStarter question={item.conversationStarter} />
      )}
    </section>
  );
}
