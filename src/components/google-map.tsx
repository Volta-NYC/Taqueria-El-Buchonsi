import { site } from "@/data/site"

export function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-sand-line)] bg-white shadow-[0_20px_60px_rgba(17,17,17,0.08)]">
      <iframe
        title={`${site.name} map`}
        src={site.mapEmbedUrl}
        className="h-[420px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
