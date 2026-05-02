import type { Metadata } from "next"
import Link from "next/link"
import { Clock3, MapPin, Phone } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { GoogleMap } from "@/components/google-map"
import { PageHero } from "@/components/page-hero"
import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { site } from "@/data/site"

export const metadata: Metadata = {
  title: "Contact & Catering",
  description: `Contact ${site.name} for directions, hours, catering, private events, and ordering details.`,
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Catering"
        title="Plan a visit, ask about catering, or start a conversation for your next event."
        description="This page now balances restaurant details with a stronger catering message, making it easier for guests to book trays, larger orders, and custom event menus."
      />
      <section className="bg-[color:var(--color-cream)] py-16 sm:py-20">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="rounded-[2rem] border border-[color:var(--color-sand-line)] bg-white p-8 shadow-[0_20px_60px_rgba(17,17,17,0.06)]">
                <h2 className="font-serif-display text-4xl text-[color:var(--color-ink)]">Visit the Taqueria</h2>
                <div className="mt-8 space-y-6 text-sm text-[color:var(--color-muted)]">
                  <div className="flex gap-4">
                    <MapPin size={18} className="mt-1 text-[color:var(--color-red)]" />
                    <div>
                      <p className="font-medium text-[color:var(--color-ink)]">Address</p>
                      <p className="mt-1 leading-7">{site.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone size={18} className="mt-1 text-[color:var(--color-red)]" />
                    <div>
                      <p className="font-medium text-[color:var(--color-ink)]">Phone</p>
                      <Link href={`tel:${site.phoneRaw}`} className="mt-1 block leading-7 hover:text-[color:var(--color-red)]">
                        {site.phone}
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock3 size={18} className="mt-1 text-[color:var(--color-red)]" />
                    <div className="w-full">
                      <p className="font-medium text-[color:var(--color-ink)]">Hours</p>
                      <div className="mt-3 space-y-3">
                        {site.hours.map((entry) => (
                          <div key={entry.label} className="flex items-center justify-between gap-4 border-b border-[color:var(--color-sand-line)] pb-3">
                            <span>{entry.label}</span>
                            <span className="font-medium text-[color:var(--color-ink)]">{entry.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href={site.orderUrl} target="_blank" rel="noreferrer">
                    <Button>Order Online</Button>
                  </Link>
                  <Link href={site.directionsUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline">Open in Maps</Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-[2rem] border border-[color:var(--color-sand-line)] bg-[color:var(--color-charcoal)] p-8 text-white shadow-[0_20px_60px_rgba(17,17,17,0.12)]">
                <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-gold)]">Catering</p>
                <h2 className="mt-4 font-serif-display text-4xl">Built for parties, office orders, family events, and custom menus.</h2>
                <div className="mt-6 space-y-4 text-sm leading-8 text-white/78">
                  <p>
                    Alongside the restaurant's Mexican favorites, the catering message should feel broader and more flexible. The team can help guests plan food for casual office lunches, birthdays, family celebrations, community events, and private gatherings of many sizes.
                  </p>
                  <p>
                    They have catered beyond standard taqueria fare before, and can work with guests on different styles of cuisine depending on the event, service format, and group preferences.
                  </p>
                  <p>
                    The best flow here is simple: call directly or send an inquiry with guest count, event type, timing, and any cuisine ideas so the team can guide the menu from there.
                  </p>
                </div>
              </div>
              <GoogleMap />
            </div>

            <div className="space-y-6">
              <ContactForm />
              <div className="rounded-[2rem] border border-[color:var(--color-sand-line)] bg-[color:var(--color-charcoal)] p-8 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-gold)]">Ordering, Social, and Event Inquiries</p>
                <p className="mt-4 text-lg leading-8 text-white/75">
                  Guests can use online ordering for quick pickups, or reach out directly for larger catering conversations, custom cuisine requests, and event planning.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {site.socialLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-[color:var(--color-gold)] hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href={site.orderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-[color:var(--color-gold)] hover:text-white"
                  >
                    Order Online
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  )
}
