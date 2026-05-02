import { PageShell } from "@/components/page-shell"

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="bg-[color:var(--color-charcoal)] pb-16 pt-24 text-white sm:pb-20 sm:pt-28">
      <PageShell>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--color-gold)]">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-serif-display text-5xl leading-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            {description}
          </p>
        </div>
      </PageShell>
    </section>
  )
}
