import { getEditionById, getAllEditions } from "@/lib/editions";
import GoodMorningHeader from "@/components/GoodMorningHeader";
import MissionStatement from "@/components/MissionStatement";
import FrontPageSection from "@/components/FrontPageSection";
import AroundTownSection from "@/components/AroundTownSection";
import StorylineSection from "@/components/StorylineSection";
import WorthYourTimeSection from "@/components/WorthYourTimeSection";
import MiniPuzzleSection from "@/components/MiniPuzzleSection";
import HallwayQuestionSection from "@/components/HallwayQuestionSection";
import LookingAheadSection from "@/components/LookingAheadSection";
import EditionFooter from "@/components/EditionFooter";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const editions = getAllEditions();
  return editions.map((e) => ({ id: e.id }));
}

export default async function EditionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const edition = getEditionById(id);
  if (!edition || !edition.published) notFound();

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-6">
          <Link
            href="/archive"
            className="text-xs font-medium tracking-widest uppercase text-stone-400 hover:text-stone-700 transition-colors"
          >
            ← Archive
          </Link>
        </div>

        <GoodMorningHeader edition={edition} />
        {edition.missionStatement && (
          <MissionStatement text={edition.missionStatement} />
        )}
        <FrontPageSection story={edition.frontPage} />
        <hr className="border-stone-200 mb-10" />
        <AroundTownSection item={edition.aroundTown} />
        <hr className="border-stone-200 mb-10" />
        {edition.lookingAhead && (
          <>
            <LookingAheadSection item={edition.lookingAhead} />
            <hr className="border-stone-200 mb-10" />
          </>
        )}
        <StorylineSection item={edition.storyline} />
        <hr className="border-stone-200 mb-10" />
        <WorthYourTimeSection item={edition.worthYourTime} />
        <hr className="border-stone-200 mb-10" />
        <MiniPuzzleSection puzzle={edition.miniPuzzle} />
        <hr className="border-stone-200 mb-10" />
        <HallwayQuestionSection item={edition.hallwayQuestion} />
        <EditionFooter />
      </div>
    </main>
  );
}
