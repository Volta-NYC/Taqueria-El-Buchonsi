"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { useMemo, useState } from "react"

import { galleryImages, type GalleryCategory } from "@/data/site"
import { Button } from "@/components/ui/button"
import { PageShell } from "@/components/page-shell"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

const filters: Array<GalleryCategory | "All"> = ["All", "Food", "Drinks", "Interior"]

export function GalleryMasonry({
  title = "A visual story full of color, texture, and late-night energy.",
  description = "A premium gallery built from the restaurant's existing photography, arranged to feel editorial and immersive on every screen.",
  limit,
}: {
  title?: string
  description?: string
  limit?: number
}) {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory | "All">("All")
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const filteredImages = useMemo(() => {
    const images =
      activeFilter === "All"
        ? galleryImages
        : galleryImages.filter((image) => image.category === activeFilter)

    return typeof limit === "number" ? images.slice(0, limit) : images
  }, [activeFilter, limit])

  return (
    <section className="bg-[color:var(--color-charcoal)] py-20 text-white sm:py-24">
      <PageShell>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title={title}
            description={description}
          />
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  activeFilter === filter
                    ? "border-[color:var(--color-gold)] bg-[color:var(--color-gold)] text-[color:var(--color-charcoal)]"
                    : "border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filteredImages.map((image, index) => (
            <button
              key={`${image.src}-${activeFilter}`}
              type="button"
              className="group mb-5 block w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 text-left"
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative min-h-[240px] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1100}
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
                    {image.category}
                  </p>
                  <p className="mt-2 text-lg font-medium text-white">{image.alt}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </PageShell>

      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[color:var(--color-charcoal)]"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/45 p-2 text-white"
                aria-label="Close gallery image"
              >
                <X size={18} />
              </button>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={filteredImages[activeIndex].src}
                  alt={filteredImages[activeIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="space-y-2 border-t border-white/10 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-gold)]">
                  {filteredImages[activeIndex].category}
                </p>
                <p className="text-lg text-white/85">
                  {filteredImages[activeIndex].alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
