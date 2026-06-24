"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import { featuredDishes } from "@/data/site"
import { PageShell } from "@/components/page-shell"
import { SectionHeading } from "@/components/section-heading"

export function FeaturedDishes() {
  return (
    <section className="bg-[color:var(--color-cream)] py-20 sm:py-24">
      <PageShell>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Featured Specials"
            title="Signature dishes that set the tone for the whole table."
            description="A focused lineup of favorites to introduce the menu's balance of comfort, freshness, and bolder premium flavors."
          />
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featuredDishes.map((dish, index) => (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
              className="group overflow-hidden rounded-[2rem] border border-[color:var(--color-sand-line)] bg-white shadow-[0_20px_60px_rgba(17,17,17,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(198,40,40,0.22)] hover:shadow-[0_24px_80px_rgba(17,17,17,0.12)]"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-4 p-7">
                <div className="h-px w-12 bg-[color:var(--color-gold)] transition-all duration-300 group-hover:w-24" />
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif-display text-3xl text-[color:var(--color-ink)]">
                    {dish.name}
                  </h3>
                  <span className="rounded-full bg-[color:var(--color-surface)] px-4 py-2 text-sm font-semibold text-[color:var(--color-red)]">
                    {dish.price}
                  </span>
                </div>
                <p className="text-sm leading-7 text-[color:var(--color-muted)]">
                  {dish.description}
                </p>
                <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-red)] transition-transform duration-300 group-hover:translate-x-1">
                  Explore the full menu
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </PageShell>
    </section>
  )
}
