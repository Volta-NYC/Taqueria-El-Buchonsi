"use client"

import { motion } from "framer-motion"

import { testimonials } from "@/data/site"
import { PageShell } from "@/components/page-shell"
import { SectionHeading } from "@/components/section-heading"

export function Testimonials({
  heading = "What guests remember most.",
  description = "Real impressions from diners who keep coming back for the food, warmth, and atmosphere.",
}: {
  heading?: string
  description?: string
}) {
  return (
    <section className="bg-[color:var(--color-surface)] py-20 sm:py-24">
      <PageShell>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Guest Love"
            title={heading}
            description={description}
            align="center"
          />
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="rounded-[2rem] border border-[color:var(--color-sand-line)] bg-white p-8 shadow-[0_20px_50px_rgba(17,17,17,0.05)] transition duration-300 hover:shadow-[0_24px_60px_rgba(17,17,17,0.09)] hover:-translate-y-0.5"
            >
              <p className="font-serif-display text-4xl leading-none text-[color:var(--color-gold)]">
                "
              </p>
              <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)]">
                {testimonial.quote}
              </p>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-red)]">
                {testimonial.name}
              </p>
            </motion.article>
          ))}
        </div>
      </PageShell>
    </section>
  )
}
