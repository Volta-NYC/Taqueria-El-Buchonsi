import type { Metadata } from "next"

import { GalleryMasonry } from "@/components/gallery-masonry"
import { PageHero } from "@/components/page-hero"
import { site } from "@/data/site"

export const metadata: Metadata = {
  title: "Gallery",
  description: `Browse food, drinks, and atmosphere from ${site.name} through a premium image gallery.`,
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Visual Story"
        title="A gallery that lets the food, color, and atmosphere do the selling."
        description="Built from the restaurant's existing imagery, this experience uses a masonry layout, lightbox viewing, and gentle interactions to create a more premium first impression."
        backgroundImage="/gallery.avif"
        backgroundPosition="center center"
      />
      <GalleryMasonry
        title="A full gallery of dishes, drinks, and atmosphere."
        description="Filter by food, drinks, or interior moments and open any image for a closer look."
      />
    </>
  )
}
