import { AboutPreview } from "@/components/about-preview"
import { CtaBanner } from "@/components/cta-banner"
import { FeaturedDishes } from "@/components/featured-dishes"
import { GalleryMasonry } from "@/components/gallery-masonry"
import { HeroSection } from "@/components/hero-section"
import { WhyGuestsReturn } from "@/components/why-guests-return"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedDishes />
      <WhyGuestsReturn />
      <GalleryMasonry
        limit={9}
        description="Food, drinks, and atmosphere arranged in a responsive collage that makes the restaurant feel lively before guests even arrive."
      />
      <AboutPreview />
      <CtaBanner />
    </>
  )
}
