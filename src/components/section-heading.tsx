import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  theme?: "light" | "dark"
}) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-red)]">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-serif-display text-4xl leading-tight sm:text-5xl",
          theme === "dark" ? "text-white" : "text-[color:var(--color-ink)]"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-8 sm:text-lg",
            theme === "dark" ? "text-white/72" : "text-[color:var(--color-muted)]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
