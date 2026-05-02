import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-red)]">
        {eyebrow}
      </p>
      <h2 className="font-serif-display text-4xl leading-tight text-[color:var(--color-ink)] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
