"use client";

import { useState } from "react";
import type { WhySelected } from "@/types/edition";

const TAG_STYLES: Record<string, string> = {
  "Local relevance": "bg-stone-100 text-stone-600",
  "Conversation potential": "bg-amber-50 text-amber-700",
  "Undercovered by algorithmic feeds": "bg-sky-50 text-sky-700",
  "Useful context for the week": "bg-emerald-50 text-emerald-700",
  "Strong reason to visit another neighborhood": "bg-violet-50 text-violet-700",
  "Broad community interest": "bg-rose-50 text-rose-700",
};

export default function WhySelectedDisclosure({ data }: { data: WhySelected }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors group"
        aria-expanded={open}
      >
        <span
          className={`inline-block transition-transform duration-150 ${open ? "rotate-90" : ""}`}
        >
          ▶
        </span>
        <span className="group-hover:underline underline-offset-2">
          Why this made today&rsquo;s edition
        </span>
      </button>

      {open && (
        <div className="mt-2 pl-4 border-l border-stone-200">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${TAG_STYLES[tag] ?? "bg-stone-100 text-stone-600"}`}
              >
                {tag}
              </span>
            ))}
          </div>
          {data.note && (
            <p className="text-xs text-stone-500 leading-relaxed italic">{data.note}</p>
          )}
        </div>
      )}
    </div>
  );
}
