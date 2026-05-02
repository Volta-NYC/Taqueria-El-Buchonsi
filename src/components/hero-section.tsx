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
          src="/taqueria-el-buchon-foods-08.jpg"
          alt="Taqueria El Buchon hero dining image"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.35),_transparent_40%),linear-gradient(135deg,rgba(17,17,17,0.95),rgba(17,17,17,0.58),rgba(17,17,17,0.9))]" />
      </div>

      <PageShell className="relative py-24 sm:py-28 lg:py-36">
        <div className="grid items-end gap-14 lg:grid-cols-[1.1fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-[color:var(--color-gold)]">
              Staten Island Mexican Kitchen
            </p>
            <h1 className="font-serif-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              {site.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
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
            <div className="rounded-[2rem] border border-white/10 bg-[rgba(198,40,40,0.15)] p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-white/55">Visit Tonight</p>
              <p className="mt-4 text-2xl font-semibold">{site.address}</p>
              <Link
                href={site.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-gold)]"
              >
                Get Directions
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </PageShell>
    </section>
  )
}
