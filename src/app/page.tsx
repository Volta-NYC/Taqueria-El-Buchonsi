import Link from "next/link"

import { AboutPreview } from "@/components/about-preview"
import { CtaBanner } from "@/components/cta-banner"
import { FeaturedDishes } from "@/components/featured-dishes"
import { GalleryMasonry } from "@/components/gallery-masonry"
import { HeroSection } from "@/components/hero-section"
import { PageShell } from "@/components/page-shell"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { site } from "@/data/site"

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FeaturedDishes />

      <section className="bg-white py-20 sm:py-24">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Why Guests Return"
                title="A warm room, a colorful table, and a menu built to share."
                description="The experience is designed to feel indulgent but grounded. House specialties, handcrafted tortillas, and a comfortable flow from lunch through evening give the restaurant its inviting rhythm."
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-[color:var(--color-sand-line)] bg-[color:var(--color-surface)] p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--color-red)]">Authenticity</p>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                    Traditional flavor profiles, bold seasoning, and a menu centered on Mexican comfort food done with care.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-[color:var(--color-sand-line)] bg-[color:var(--color-surface)] p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--color-red)]">Premium Feel</p>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                    A cleaner layout, richer storytelling, and upscale styling that lets the food photography shine.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2.5rem] border border-[color:var(--color-sand-line)] bg-[color:var(--color-charcoal)] p-8 text-white shadow-[0_25px_70px_rgba(17,17,17,0.15)]">
              <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-gold)]">
                Visit & Order
              </p>
              <h3 className="mt-5 font-serif-display text-4xl leading-tight">
                Everything you need to plan the perfect taco night.
              </h3>
              <div className="mt-8 space-y-4 text-sm text-white/75">
                <p>{site.address}</p>
                <p>{site.phone}</p>
                <p>Sunday - Thursday: 11AM - 10PM</p>
                <p>Friday - Saturday: 11AM - 11PM</p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={site.orderUrl} target="_blank" rel="noreferrer">
                  <Button variant="gold">Order Online</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary">Contact & Directions</Button>
                </Link>
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      <GalleryMasonry
        limit={9}
        description="Food, drinks, and atmosphere arranged in a responsive collage that makes the restaurant feel lively before guests even arrive."
      />

      <AboutPreview />
      <CtaBanner />
    </>
  )
}
