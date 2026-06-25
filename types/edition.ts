export type Provenance =
  | "ai_drafted"
  | "human_reviewed"
  | "human_written"
  | "community_submitted";

export type VerificationStatus =
  | "editor_verified"
  | "source_verified"
  | "ai_inferred"
  | "community_submitted"
  | "needs_review";

export type WhySelectedTag =
  | "Local relevance"
  | "Conversation potential"
  | "Undercovered by algorithmic feeds"
  | "Useful context for the week"
  | "Strong reason to visit another neighborhood"
  | "Broad community interest";

export type WorthLeavingFor = "yes" | "maybe" | "no";
export type PlanningDifficulty = "low" | "medium" | "high";

export interface SourceLink {
  label: string;
  url: string;
  outlet?: string;
}

export interface WhySelected {
  tags: WhySelectedTag[];
  note?: string;
}

export interface IfYouGo {
  bestTime?: string;
  parking?: string;
  transit?: string;
  cost?: string;
  goodFor?: string;
  insiderTip?: string;
  verificationStatus?: VerificationStatus;
}

export interface LookingAhead {
  title: string;
  date: string;
  neighborhood: string;
  description: string;
  worthLeavingNeighborhoodFor: WorthLeavingFor;
  planningDifficulty: PlanningDifficulty;
  decisionDeadline?: string;
  travelFriction: number; // 1–5
  energyPayoff: number; // 1–5
  goodFor?: string;
  gettingThere?: string;
  parkingNote?: string;
  transitNote?: string;
  rideshareNote?: string;
  insiderTip?: string;
  conversationStarter?: string;
  sources?: SourceLink[];
  provenance: Provenance;
  verificationStatus: VerificationStatus;
  whySelected?: WhySelected;
}

export interface FrontPageStory {
  headline: string;
  summary: string;
  whyItMatters: string;
  sources: SourceLink[];
  provenance: Provenance;
  whySelected?: WhySelected;
  conversationStarter?: string;
}

export interface AroundTownItem {
  title: string;
  type: string;
  dateTime?: string;
  location?: string;
  description: string;
  whyCare: string;
  neighborhoodNudge?: string;
  ifYouGo?: IfYouGo;
  source?: SourceLink;
  provenance: Provenance;
  whySelected?: WhySelected;
  conversationStarter?: string;
}

export interface StorylineItem {
  topic: string;
  headline: string;
  body: string;
  source?: SourceLink;
  provenance: Provenance;
  whySelected?: WhySelected;
  conversationStarter?: string;
}

export interface WorthYourTime {
  title: string;
  author: string;
  outlet: string;
  readingTime: string;
  url: string;
  teaser: string;
  provenance: Provenance;
  whySelected?: WhySelected;
  conversationStarter?: string;
}

export interface MiniPuzzle {
  type: "trivia" | "word" | "landmark" | "local-trivia";
  prompt: string;
  options?: string[];
  answer: string;
  hint?: string;
  provenance: Provenance;
  whySelected?: WhySelected;
}

export interface HallwayQuestion {
  question: string;
  note?: string;
  provenance: Provenance;
}

export interface Edition {
  id: string;
  date: string;
  editionName: string;
  readTime: string;
  published: boolean;
  missionStatement?: string;
  frontPage: FrontPageStory;
  aroundTown: AroundTownItem;
  lookingAhead?: LookingAhead;
  storyline: StorylineItem;
  worthYourTime: WorthYourTime;
  miniPuzzle: MiniPuzzle;
  hallwayQuestion: HallwayQuestion;
  editorNote?: string;
}
