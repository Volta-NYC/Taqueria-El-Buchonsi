import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { site } from "@/data/site"
import { PageShell } from "@/components/page-shell"
import { SectionHeading } from "@/components/section-heading"

export function AboutPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <PageShell>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-72 overflow-hidden rounded-[2rem] sm:h-80">
              <Image src="/taqueria-el-buchon-foods-13.jpg" alt="Restaurant interior" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
            <div className="relative mt-10 h-80 overflow-hidden rounded-[2rem] sm:h-96">
              <Image src="/taqueria-el-buchon-foods-14.jpg" alt="Restaurant signature dish" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="A Staten Island taqueria rooted in flavor, hospitality, and craft."
              description={`${site.story} ${site.storyExtended}`}
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[color:var(--color-sand-line)] bg-[color:var(--color-surface)] p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--color-red)]">Philosophy</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  Traditional recipes, quality ingredients, and a room that feels celebratory from lunch through late dinner.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[color:var(--color-sand-line)] bg-[color:var(--color-surface)] p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--color-red)]">Atmosphere</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  Warm lighting, vibrant plates, and a polished guest experience inspired by modern hospitality design.
                </p>
              </div>
            </div>
            <Link href="/about" className="mt-10 inline-block">
              <Button variant="outline">Read the Full Story</Button>
            </Link>
          </div>
        </div>
      </PageShell>
    </section>
  )
}
