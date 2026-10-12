import { Navigation } from "@/components/navigation";
import { Hero, FlavorRibbon } from "@/components/hero";
import {
  WaffleHighlight,
  KumpirHighlight,
} from "@/components/product-highlights";
import { MenuPreview } from "@/components/menu-preview";
import { Branches } from "@/components/branches";
import { Story } from "@/components/story";
import { SocialGallery } from "@/components/social-gallery";
import { Footer, FinalCta } from "@/components/footer";
import { SectionReveals } from "@/components/section-reveals";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <FlavorRibbon />
        <WaffleHighlight />
        <KumpirHighlight />
        <MenuPreview />
        <Branches />
        <Story />
        <SocialGallery />
        <FinalCta />
      </main>
      <Footer />
      <SectionReveals />
    </>
  );
}
