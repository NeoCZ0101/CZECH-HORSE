export type TopicId =
  | "smer"
  | "psychika"
  | "komunikace"
  | "prace"
  | "vztahy"
  | "telo"
  | "zdravi"
  | "strava"
  | "vzhled"
  | "samostatnost";

export type Topic = {
  id: TopicId;
  label: string;
  shortLabel: string;
  description: string;
};

export type Location = {
  city: string;
  district?: string;
  online: boolean;
};

export type Qualification = {
  kind: "Odborná kvalifikace" | "Profesní praxe" | "Osobní zkušenost";
  title: string;
  issuer?: string;
};

export type Situation = {
  id: string;
  slug: string;
  title: string;
  description: string;
  areas: TopicId[];
  stepCount: number;
  materialCount: number;
  nextStep: string;
  relatedExpertTypes: string[];
};

export type SituationGuide = {
  slug: string;
  intro: string;
  signals: string[];
  reflectionQuestions: string[];
  selfSteps: string[];
  expertTypes: string[];
  helpNotice: string;
};

export type HomepageSituation = {
  slug: string;
  category: string;
  title: string;
  description: string;
  stepCount: number;
  ctaLabel: string;
  tone: "cream" | "sage" | "forest";
  featured?: boolean;
};

export type LifeJourney = {
  slug: string;
  title: string;
  startingPoint: string;
  outcome: string;
  duration: string;
  areas: TopicId[];
  stages: {
    title: string;
    description: string;
    task: string;
  }[];
  recommendedContent: string[];
  services: string[];
  community: string;
};

export type Service = {
  id: string;
  name: string;
  type: string;
  price: string;
  delivery: "Online" | "Osobně" | "Hybridně";
};

export type Article = {
  slug: string;
  title: string;
  type: "Článek" | "Video" | "Pracovní list";
  readingTime: string;
  topic: TopicId;
  summary: string;
  commercial?: boolean;
};

export type Expert = {
  slug: string;
  name: string;
  profession: string;
  image: string;
  qualifications: Qualification[];
  helpsWith: string[];
  goodFit: string[];
  notFit: string[];
  collaboration: string;
  serviceType: string;
  cooperation: "Individuální" | "Skupinová" | "Obojí";
  price: string;
  location: Location;
  availability: string;
  relatedContent: string[];
  relatedSituations: string[];
  areas: TopicId[];
  mode: "Online" | "Osobně" | "Hybridně";
};

export type Event = {
  slug: string;
  title: string;
  format: string;
  date: string;
  location: string;
  description: string;
  areas: TopicId[];
  commercial?: boolean;
};

export type CommunityGroup = {
  slug: string;
  title: string;
  format: string;
  cadence: string;
  city: string;
  description: string;
  nextStep: string;
  areas: TopicId[];
};
