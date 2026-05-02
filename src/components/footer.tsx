import Image from "next/image"
import Link from "next/link"
import { Camera, MapPin, MessageCircleMore, Music2, Phone, Ticket } from "lucide-react"

import { navigationLinks, site } from "@/data/site"

const iconMap = {
  Instagram: Camera,
  TikTok: Music2,
  Facebook: MessageCircleMore,
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--color-charcoal)] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] lg:px-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/5">
              <Image src="/favicon:logo.png" alt={`${site.name} logo`} fill className="object-cover" sizes="48px" />
            </div>
            <div>
              <p className="font-serif-display text-2xl">{site.name}</p>
              <p className="text-sm text-white/65">Authentic Mexican Street Food</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/70">
            A warmer, more elevated take on the neighborhood taqueria experience, designed to make every visit feel like a celebration.
          </p>
          <div className="flex items-center gap-4">
            {site.socialLinks.map((item) => {
              const Icon = iconMap[item.label as keyof typeof iconMap]
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)]"
                  aria-label={item.label}
                >
                  <Icon size={18} />
                </Link>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="font-serif-display text-xl">Explore</h3>
          <div className="mt-5 space-y-3 text-sm text-white/70">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href={site.cateringUrl} target="_blank" rel="noreferrer" className="block transition hover:text-white">
              Catering
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-serif-display text-xl">Visit</h3>
          <div className="mt-5 space-y-4 text-sm text-white/70">
            <div className="flex gap-3">
              <MapPin size={16} className="mt-1 shrink-0 text-[color:var(--color-gold)]" />
              <span>{site.address}</span>
            </div>
            <div className="flex gap-3">
              <Phone size={16} className="mt-1 shrink-0 text-[color:var(--color-gold)]" />
              <Link href={`tel:${site.phoneRaw}`} className="hover:text-white">
                {site.phone}
              </Link>
            </div>
            <div className="flex gap-3">
              <Ticket size={16} className="mt-1 shrink-0 text-[color:var(--color-gold)]" />
              <Link href={site.orderUrl} target="_blank" rel="noreferrer" className="hover:text-white">
                Start an online order
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-serif-display text-xl">Hours</h3>
          <div className="mt-5 space-y-3 text-sm text-white/70">
            {site.hours.map((entry) => (
              <div key={entry.label} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <span>{entry.label}</span>
                <span className="text-white">{entry.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs uppercase tracking-[0.2em] text-white/45 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p>Crafted for flavor, warmth, and memorable nights.</p>
        </div>
      </div>
    </footer>
  )
}
