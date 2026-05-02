import type { Metadata } from "next"

import { MenuBrowser } from "@/components/menu-browser"
import { PageHero } from "@/components/page-hero"
import { PageShell } from "@/components/page-shell"
import { site } from "@/data/site"

export const metadata: Metadata = {
  title: "Menu",
  description: `Explore the digital menu at ${site.name}, including tacos, burritos, quesadillas, drinks, soups, and desserts.`,
}

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title="A digital menu built for browsing, craving, and quick decision-making."
        description="The menu is organized for speed and clarity, with category filtering, search, and a premium card layout that keeps the focus on ingredients, flavor, and price."
      />
      <section className="bg-[color:var(--color-cream)] py-16 sm:py-20">
        <PageShell>
          <div id="menu-browser" className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-red)]">
              Full Digital Menu
            </p>
            <h2 className="mt-4 font-serif-display text-4xl leading-tight text-[color:var(--color-ink)] sm:text-5xl">
              Browse every category in one place.
            </h2>
            <p className="mt-4 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              Search by craving, jump between sections, and scan the full menu without losing the cleaner premium presentation.
            </p>
          </div>
          <MenuBrowser />
        </PageShell>
      </section>
    </>
  )
}
