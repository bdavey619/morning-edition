import type { StorylineItem } from "@/types/edition";
import SectionLabel from "./SectionLabel";
import ProvenanceBadge from "./ProvenanceBadge";
import WhySelectedDisclosure from "./WhySelected";
import ConversationStarter from "./ConversationStarter";

export default function StorylineSection({ item }: { item: StorylineItem }) {
  const paragraphs = item.body.split("\n\n").filter(Boolean);

  return (
    <section className="mb-10">
      <SectionLabel>The Storyline</SectionLabel>

      <p className="text-xs font-bold tracking-wider uppercase text-stone-400 mb-1">{item.topic}</p>

      <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-tight mb-4">
        {item.headline}
      </h2>

      <div className="space-y-4 mb-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-base text-stone-700 leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-1">
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
