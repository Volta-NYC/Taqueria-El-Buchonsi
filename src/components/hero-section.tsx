"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site } from "@/data/site"
import { PageShell } from "@/components/page-shell"

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--color-charcoal)] text-white">
      <div className="absolute inset-0">
        <Image
          src="/el-buchon-interior-hero.jpg"
          alt="Taqueria El Buchon hero dining image"
          fill
          priority
          className="object-cover opacity-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.2),_transparent_42%),linear-gradient(135deg,rgba(17,17,17,0.78),rgba(17,17,17,0.34),rgba(17,17,17,0.68))]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_bottom,transparent,rgba(248,244,236,0.14),rgba(248,244,236,0.28))]" />

      <PageShell className="relative py-24 sm:py-28 lg:py-36">
        <div className="grid items-end gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-14 bg-[color:var(--color-gold)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[color:var(--color-gold)]">
                Staten Island Mexican Kitchen
              </p>
            </div>
            <h1 className="font-serif-display text-5xl leading-[0.98] sm:text-6xl lg:text-[5.35rem]">
              {site.heroTitle}
            </h1>
            <p className="mt-4 max-w-2xl font-serif-display text-2xl italic leading-relaxed text-white/82 sm:text-3xl">
              Handmade tortillas, slow-cooked meats, and a room that feels as warm as the food.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              {site.heroTagline}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href={site.orderUrl} target="_blank" rel="noreferrer">
                <Button variant="gold" size="lg">Order Online</Button>
              </Link>
              <Link href="/menu">
                <Button variant="secondary" size="lg">
                  View Menu
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {["Handmade Tortillas", "Birria Favorites", "Late-Night Energy"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/76 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="grid gap-4"
          >
            <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/8 backdrop-blur-xl">
              <div className="relative h-[22rem]">
                <Image
                  src="/taqueria-el-buchon-foods-14.jpg"
                  alt="Featured plated dish"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,17,17,0.86),rgba(17,17,17,0.16),transparent)]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-gold)]">Signature Mood</p>
                  <p className="mt-3 font-serif-display text-3xl leading-tight">
                    Rich color, polished plating, and a warm late-night rhythm.
                  </p>
                </div>
              </div>
              <div className="grid gap-0 border-t border-white/10 sm:grid-cols-2">
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/55">Hours</p>
                  <div className="mt-4 space-y-3">
                    {site.hours.map((entry) => (
                      <div key={entry.label} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm">
                        <span className="text-white/70">{entry.label}</span>
                        <span>{entry.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-white/10 p-6 sm:border-l sm:border-t-0">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/55">Visit Tonight</p>
                  <p className="mt-4 text-xl font-semibold leading-8">{site.address}</p>
                  <Link
                    href={site.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-gold)] transition hover:translate-x-1"
                  >
                    Get Directions
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </PageShell>
    </section>
  )
}
