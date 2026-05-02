import Image from "next/image"

import { PageShell } from "@/components/page-shell"

export function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  backgroundPosition = "center",
}: {
  eyebrow: string
  title: string
  description: string
  backgroundImage?: string
  backgroundPosition?: string
}) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-charcoal)] pb-16 pt-24 text-white sm:pb-20 sm:pt-28">
      {backgroundImage ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-38"
            style={{ objectPosition: backgroundPosition }}
          />
        </div>
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,17,17,0.94),rgba(17,17,17,0.72),rgba(17,17,17,0.9)),radial-gradient(circle_at_top_left,rgba(217,119,6,0.24),transparent_32%),radial-gradient(circle_at_right,rgba(198,40,40,0.18),transparent_28%)]" />
      <PageShell>
        <div className="relative max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-14 bg-[color:var(--color-gold)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[color:var(--color-gold)]">
              {eyebrow}
            </p>
          </div>
          <h1 className="mt-5 font-serif-display text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
            {description}
          </p>
        </div>
      </PageShell>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_bottom,transparent,rgba(248,244,236,0.18))]" />
    </section>
  )
}
