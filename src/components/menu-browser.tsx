"use client"

import { Search } from "lucide-react"
import { useMemo, useState } from "react"

import { menuCategories, menuItems } from "@/data/site"
import { cn } from "@/lib/utils"

const dietaryColors: Record<string, string> = {
  Vegetarian: "bg-[rgba(22,101,52,0.12)] text-[color:var(--color-green)]",
  "Gluten-Free": "bg-[rgba(217,119,6,0.12)] text-[color:var(--color-orange)]",
}

export function MenuBrowser() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0])
  const [query, setQuery] = useState("")

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = item.category === activeCategory
      const searchTarget = `${item.name} ${item.description} ${item.price}`.toLowerCase()
      const matchesQuery = searchTarget.includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <div className="space-y-10">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="relative">
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[color:var(--color-muted)]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search tacos, birria, horchata..."
            className="w-full rounded-full border border-[color:var(--color-sand-line)] bg-white px-12 py-4 text-sm outline-none transition focus:border-[color:var(--color-red)]"
          />
        </div>
        <p className="text-sm text-[color:var(--color-muted)]">
          {filteredItems.length} items in {activeCategory}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {menuCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-5 py-3 text-sm font-medium transition",
              activeCategory === category
                ? "border-[color:var(--color-red)] bg-[color:var(--color-red)] text-white"
                : "border-[color:var(--color-sand-line)] bg-white text-[color:var(--color-ink)] hover:border-[color:var(--color-red)] hover:text-[color:var(--color-red)]"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {filteredItems.map((item) => (
          <article
            key={`${item.category}-${item.name}`}
            className="grid gap-5 rounded-[2rem] border border-[color:var(--color-sand-line)] bg-white p-5 shadow-[0_18px_45px_rgba(17,17,17,0.05)] sm:grid-cols-[140px_1fr]"
          >
            <div className="flex min-h-[136px] items-end rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(17,17,17,0.95),rgba(198,40,40,0.85),rgba(217,119,6,0.85))] p-4 text-white">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/65">Image Placeholder</p>
                <p className="mt-3 font-serif-display text-2xl">{item.category}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif-display text-2xl text-[color:var(--color-ink)]">{item.name}</h3>
                  {item.description ? (
                    <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                      {item.description}
                    </p>
                  ) : null}
                </div>
                <span className="rounded-full bg-[color:var(--color-surface)] px-4 py-2 text-sm font-semibold text-[color:var(--color-red)]">
                  {item.price}
                </span>
              </div>

              {item.tags?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
                        dietaryColors[tag] ?? "bg-[color:var(--color-surface)] text-[color:var(--color-ink)]"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
