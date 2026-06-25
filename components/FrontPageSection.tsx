import type { FrontPageStory } from "@/types/edition";
import SectionLabel from "./SectionLabel";
import ProvenanceBadge from "./ProvenanceBadge";
import WhySelectedDisclosure from "./WhySelected";
import ConversationStarter from "./ConversationStarter";

export default function FrontPageSection({ story }: { story: FrontPageStory }) {
  return (
    <section className="mb-10">
      <SectionLabel>Today&rsquo;s Front Page</SectionLabel>

      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight mb-3">
        {story.headline}
      </h2>

      <p className="text-base text-stone-700 leading-relaxed mb-4">{story.summary}</p>

      <div className="bg-stone-50 border border-stone-200 rounded p-4 mb-4">
        <p className="text-xs font-bold tracking-wider uppercase text-stone-400 mb-1">
          Why it matters
        </p>
        <p className="text-sm text-stone-700 leading-relaxed">{story.whyItMatters}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <div className="flex flex-wrap gap-2">
          {story.sources.map((src, i) => (
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
        </div>
        <ProvenanceBadge provenance={story.provenance} />
      </div>

      {story.whySelected && <WhySelectedDisclosure data={story.whySelected} />}
      {story.conversationStarter && (
        <ConversationStarter question={story.conversationStarter} />
      )}
    </section>
  );
}
