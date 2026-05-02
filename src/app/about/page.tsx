import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone } from "lucide-react"

import { GoogleMap } from "@/components/google-map"
import { PageHero } from "@/components/page-hero"
import { PageShell } from "@/components/page-shell"
import { SectionHeading } from "@/components/section-heading"
import { Testimonials } from "@/components/testimonials"
import { Button } from "@/components/ui/button"
import { site } from "@/data/site"

export const metadata: Metadata = {
  title: "About",
  description: `Learn the story behind ${site.name}, a Mexican restaurant in Staten Island focused on authentic flavor and warm hospitality.`,
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A richer take on the neighborhood taqueria, rooted in tradition."
        description="Taqueria El Buchon combines the energy of Mexican street food with a more polished dining experience that still feels warm, generous, and familiar."
        backgroundImage="/non.jpg"
        backgroundPosition="center 45%"
      />
      <section className="bg-white py-16 sm:py-20">
        <PageShell>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="The Restaurant"
                title="Flavor-first cooking with a hospitality mindset."
                description={`${site.story} ${site.storyExtended}`}
              />
              <div className="mt-10 space-y-5 text-base leading-8 text-[color:var(--color-muted)]">
                <p>
                  The original restaurant messaging emphasizes authentic Mexican cuisine, fresh ingredients, and traditional recipes. This redesign carries that identity forward while presenting it through a cleaner, more premium lens.
                </p>
                <p>
                  The result is a brand experience that feels more editorial and elevated without losing the warmth and vibrancy that make the restaurant approachable.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={site.orderUrl} target="_blank" rel="noreferrer">
                  <Button>Start an Order</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Visit Us Today</Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative h-72 overflow-hidden rounded-[2rem] sm:h-[25rem]">
                <Image src="/taqueria-el-buchon-foods-09.jpg" alt="Taqueria dining atmosphere" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
              <div className="relative h-72 overflow-hidden rounded-[2rem] sm:mt-12 sm:h-[28rem]">
                <Image src="/taqueria-el-buchon-foods-05.jpg" alt="Taqueria plated dish" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      <Testimonials
        heading="The neighborhood trust is already there."
        description="This fits best alongside the story of the restaurant: real guest reactions that reinforce the warmth, consistency, and range people remember."
      />

      <section className="bg-[color:var(--color-surface)] py-16 sm:py-20">
        <PageShell>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6 rounded-[2rem] border border-[color:var(--color-sand-line)] bg-white p-8 shadow-[0_20px_60px_rgba(17,17,17,0.06)]">
              <h2 className="font-serif-display text-4xl text-[color:var(--color-ink)]">Find Us</h2>
              <div className="flex gap-4">
                <MapPin className="mt-1 text-[color:var(--color-red)]" size={18} />
                <div className="space-y-1">
                  <p className="font-medium text-[color:var(--color-ink)]">Address</p>
                  <p className="text-sm leading-7 text-[color:var(--color-muted)]">{site.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-1 text-[color:var(--color-red)]" size={18} />
                <div className="space-y-1">
                  <p className="font-medium text-[color:var(--color-ink)]">Phone</p>
                  <p className="text-sm leading-7 text-[color:var(--color-muted)]">{site.phone}</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-medium text-[color:var(--color-ink)]">Hours</p>
                {site.hours.map((entry) => (
                  <div key={entry.label} className="flex items-center justify-between gap-4 border-b border-[color:var(--color-sand-line)] pb-3 text-sm text-[color:var(--color-muted)]">
                    <span>{entry.label}</span>
                    <span className="font-medium text-[color:var(--color-ink)]">{entry.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <GoogleMap />
          </div>
        </PageShell>
      </section>
    </>
  )
}
