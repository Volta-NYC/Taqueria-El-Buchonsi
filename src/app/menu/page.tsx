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
          <MenuBrowser />
        </PageShell>
      </section>
    </>
  )
}
