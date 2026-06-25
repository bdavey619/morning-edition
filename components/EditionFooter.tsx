import Link from "next/link";

export default function EditionFooter() {
  return (
    <footer className="border-t-2 border-stone-800 pt-6 mt-10 pb-12">
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
        <div>
          <p className="font-bold text-stone-700 mb-0.5">Morning Edition</p>
          <p>A shared front page for your community.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/archive" className="hover:text-stone-700 transition-colors">
            Archive
          </Link>
          <Link href="/editor" className="hover:text-stone-700 transition-colors">
            Editor
          </Link>
          <Link href="/editorial-guide" className="hover:text-stone-700 transition-colors">
            Editorial Standards
          </Link>
        </div>
      </div>
      <p className="text-xs text-stone-400 mt-4">
        AI-assisted content is clearly labeled. Human editors are responsible for all published
        material.
      </p>
    </footer>
  );
}
