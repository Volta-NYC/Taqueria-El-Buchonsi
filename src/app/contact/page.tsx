import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock3, MapPin, Phone, UtensilsCrossed } from "lucide-react"

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
          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-6">
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[2rem] border border-[color:var(--color-sand-line)] bg-white p-8 shadow-[0_20px_60px_rgba(17,17,17,0.06)]">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-[color:var(--color-surface)] p-3 text-[color:var(--color-red)]">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--color-red)]">
                        Visit
                      </p>
                      <h2 className="mt-3 font-serif-display text-3xl text-[color:var(--color-ink)]">
                        Stop by the taqueria.
                      </h2>
                    </div>
                  </div>
                  <div className="mt-8 space-y-6 text-sm leading-7 text-[color:var(--color-muted)]">
                    <div>
                      <p className="font-medium text-[color:var(--color-ink)]">Address</p>
                      <p className="mt-1">{site.address}</p>
                    </div>
                    <div>
                      <p className="font-medium text-[color:var(--color-ink)]">Phone</p>
                      <Link href={`tel:${site.phoneRaw}`} className="mt-1 block transition hover:text-[color:var(--color-red)]">
                        {site.phone}
                      </Link>
                    </div>
                    <div>
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
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-white/10 p-3 text-[color:var(--color-gold)]">
                      <UtensilsCrossed size={22} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-gold)]">Catering</p>
                      <h2 className="mt-3 font-serif-display text-3xl leading-tight">
                        Clear, flexible catering for events of all kinds.
                      </h2>
                    </div>
                  </div>
                  <div className="mt-8 space-y-4 text-sm leading-8 text-white/78">
                    <p>
                      From office lunches and birthdays to family gatherings and community events, the team can help shape service around the size and style of the occasion.
                    </p>
                    <p>
                      That includes more than standard Mexican catering. They have handled different cuisine requests in the past and can work with guests on broader menu directions when the event calls for it.
                    </p>
                    <p>
                      The best starting point is a quick inquiry with guest count, date, service style, and any menu ideas so the team can guide the next step.
                    </p>
                  </div>
                  <Link
                    href={`tel:${site.phoneRaw}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-gold)] transition hover:translate-x-1"
                  >
                    Call to discuss catering
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[color:var(--color-sand-line)] bg-[linear-gradient(135deg,rgba(17,17,17,0.98),rgba(198,40,40,0.9),rgba(217,119,6,0.78))] p-8 text-white shadow-[0_20px_60px_rgba(17,17,17,0.12)]">
                <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-gold)]">Quick Actions</p>
                    <h3 className="mt-3 font-serif-display text-3xl">
                      Ordering, social links, and fast event follow-up.
                    </h3>
                    <p className="mt-4 text-sm leading-8 text-white/78">
                      Use online ordering for pickup, or reach out directly for larger catering conversations, custom cuisine requests, and event planning.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 lg:justify-end">
                    {site.socialLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-gold)] hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href={site.orderUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-gold)] hover:text-white"
                    >
                      Order Online
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <ContactForm />
              <div className="rounded-[2rem] border border-[color:var(--color-sand-line)] bg-white p-3 shadow-[0_20px_60px_rgba(17,17,17,0.06)]">
                <GoogleMap />
              </div>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  )
}
