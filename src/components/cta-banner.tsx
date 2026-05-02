import Link from "next/link"

import { Button } from "@/components/ui/button"
import { site } from "@/data/site"
import { PageShell } from "@/components/page-shell"

export function CtaBanner() {
  return (
    <section className="bg-[color:var(--color-charcoal)] py-20 text-white">
      <PageShell>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(198,40,40,0.92),rgba(217,119,6,0.9),rgba(17,17,17,0.85))] px-8 py-10 shadow-[0_30px_80px_rgba(17,17,17,0.25)] sm:px-12 sm:py-14">
          <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-24 w-56 bg-[linear-gradient(90deg,rgba(255,255,255,0.14),transparent)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
                Order, Visit, Celebrate
              </p>
              <h2 className="mt-4 font-serif-display text-4xl leading-tight sm:text-5xl">
                Make tonight a Taqueria El Buchon night.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/80">
                Start an online order, call ahead, or plan your next dinner with bold flavors, handmade tortillas, and a room full of warm energy.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link href={site.orderUrl} target="_blank" rel="noreferrer">
                <Button variant="gold" size="lg" className="w-full lg:w-auto">
                  Order Online
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="w-full lg:w-auto">
                  Plan Your Visit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PageShell>
    </section>
  )
}
