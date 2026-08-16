import { BodyMindMap } from "@/components/home/body-mind-map";
import { CurrentFocus } from "@/components/home/current-focus";
import { FounderJourney } from "@/components/home/founder-journey";
import { HomeHero } from "@/components/home/home-hero";
import { PartnerInvitation } from "@/components/home/partner-invitation";
import { PlatformBoundaries } from "@/components/home/platform-boundaries";
import { PlatformProcess } from "@/components/home/platform-process";
import { VisitorForm } from "@/components/home/visitor-form";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <BodyMindMap />
      <FounderJourney />
      <PlatformProcess />
      <CurrentFocus />
      <VisitorForm />
      <PartnerInvitation />
      <PlatformBoundaries />
    </main>
  );
}
