"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

import { navigationLinks, site } from "@/data/site"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-white/10 transition-all duration-300",
          isScrolled
            ? "bg-[rgba(17,17,17,0.88)] backdrop-blur-xl"
            : "bg-[rgba(17,17,17,0.55)] backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/15 bg-white/5">
              <Image
                src="/favicon:logo.png"
                alt={`${site.name} logo`}
                fill
                className="object-cover"
                sizes="44px"
              />
            </div>
            <div>
              <p className="font-serif-display text-lg leading-none text-white">
                {site.name}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-white/60">
                Staten Island
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/80 lg:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href={site.orderUrl} target="_blank" rel="noreferrer">
              <Button variant="gold">Order Online</Button>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex rounded-full border border-white/10 bg-white/5 p-3 text-white lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[rgba(17,17,17,0.94)] px-6 py-24 transition duration-300 lg:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav className="mx-auto flex max-w-sm flex-col gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-white/10 pb-4 font-serif-display text-3xl text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={site.orderUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <Button variant="gold" size="lg" className="mt-4 w-full">
              Order Online
            </Button>
          </Link>
        </nav>
      </div>
    </>
  )
}
