import { getAllEditions, formatEditionDate } from "@/lib/editions";
import Link from "next/link";
import EditionFooter from "@/components/EditionFooter";

export default function ArchivePage() {
  const editions = getAllEditions();

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <header className="border-b-2 border-stone-800 pb-6 mb-8">
          <Link href="/" className="text-xs font-medium tracking-widest uppercase text-stone-400 hover:text-stone-700 transition-colors">
            ← Morning Edition
          </Link>
          <h1 className="font-serif text-4xl font-bold text-stone-900 mt-3">Archive</h1>
          <p className="text-sm text-stone-500 mt-1">Every edition, in order.</p>
        </header>

        <section>
          {editions.length === 0 ? (
            <p className="text-stone-500">No editions published yet.</p>
          ) : (
            <ul className="divide-y divide-stone-200">
              {editions.map((edition) => (
                <li key={edition.id}>
                  <Link
                    href={`/edition/${edition.id}`}
                    className="flex items-center justify-between py-4 group"
                  >
                    <div>
                      <p className="font-medium text-stone-900 group-hover:underline">
                        {formatEditionDate(edition.date)}
                      </p>
                      <p className="text-sm text-stone-500 mt-0.5">
                        {edition.editionName} · {edition.readTime} read
                      </p>
                    </div>
                    <span className="text-stone-300 group-hover:text-stone-600 transition-colors text-lg">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <EditionFooter />
      </div>
    </main>
  );
}
