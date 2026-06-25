import { formatEditionDate } from "@/lib/editions";
import type { Edition } from "@/types/edition";

export default function GoodMorningHeader({ edition }: { edition: Edition }) {
  const dateFormatted = formatEditionDate(edition.date);

  return (
    <header className="border-b-2 border-stone-800 pb-6 mb-8">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium tracking-widest uppercase text-stone-400">
          {edition.editionName}
        </span>
        <span className="text-xs text-stone-400">{edition.readTime} read</span>
      </div>

      <h1 className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-stone-900 leading-none mb-2">
        Good Morning.
      </h1>

      <p className="text-sm text-stone-500 font-medium">{dateFormatted}</p>

      {edition.editorNote && (
        <p className="mt-3 text-sm italic text-stone-500 border-l-2 border-stone-300 pl-3">
          {edition.editorNote}
        </p>
      )}
    </header>
  );
}
