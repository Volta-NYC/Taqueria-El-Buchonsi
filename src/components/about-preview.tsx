"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

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
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative h-72 overflow-hidden rounded-[2rem] sm:h-80"
            >
              <Image src="/taqueria-el-buchon-foods-13.jpg" alt="Jarritos Lime soda" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
              className="relative mt-10 h-80 overflow-hidden rounded-[2rem] sm:h-96"
            >
              <Image src="/taqueria-el-buchon-foods-14.jpg" alt="Restaurant signature dish" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          >
            <SectionHeading
              eyebrow="Our Story"
              title="A Staten Island taqueria rooted in flavor, hospitality, and craft."
              description={`${site.story} ${site.storyExtended}`}
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[color:var(--color-sand-line)] bg-[color:var(--color-surface)] p-6 transition duration-300 hover:shadow-[0_8px_32px_rgba(17,17,17,0.07)]">
                <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--color-red)]">Philosophy</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  Traditional recipes, quality ingredients, and a room that feels celebratory from lunch through late dinner.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-[color:var(--color-sand-line)] bg-[color:var(--color-surface)] p-6 transition duration-300 hover:shadow-[0_8px_32px_rgba(17,17,17,0.07)]">
                <p className="text-sm uppercase tracking-[0.25em] text-[color:var(--color-red)]">Atmosphere</p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  Warm lighting, vibrant plates, and a polished guest experience inspired by modern hospitality design.
                </p>
              </div>
            </div>
            <Link href="/about" className="mt-10 inline-block">
              <Button variant="outline">Read the Full Story</Button>
            </Link>
          </motion.div>
        </div>
      </PageShell>
    </section>
  )
}
