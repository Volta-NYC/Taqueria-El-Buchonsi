"use client"

import { FormEvent, useState } from "react"

import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[color:var(--color-sand-line)] bg-white p-8 shadow-[0_20px_60px_rgba(17,17,17,0.06)]"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-[color:var(--color-ink)]">
          <span>Name</span>
          <input
            required
            name="name"
            className="w-full rounded-2xl border border-[color:var(--color-sand-line)] bg-[color:var(--color-surface)] px-4 py-3 outline-none transition focus:border-[color:var(--color-red)]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[color:var(--color-ink)]">
          <span>Phone</span>
          <input
            required
            name="phone"
            className="w-full rounded-2xl border border-[color:var(--color-sand-line)] bg-[color:var(--color-surface)] px-4 py-3 outline-none transition focus:border-[color:var(--color-red)]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[color:var(--color-ink)] sm:col-span-2">
          <span>Email</span>
          <input
            required
            type="email"
            name="email"
            className="w-full rounded-2xl border border-[color:var(--color-sand-line)] bg-[color:var(--color-surface)] px-4 py-3 outline-none transition focus:border-[color:var(--color-red)]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-[color:var(--color-ink)] sm:col-span-2">
          <span>Message</span>
          <textarea
            required
            name="message"
            rows={5}
            className="w-full rounded-2xl border border-[color:var(--color-sand-line)] bg-[color:var(--color-surface)] px-4 py-3 outline-none transition focus:border-[color:var(--color-red)]"
          />
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[color:var(--color-muted)]">
          Reach out for private dining, large party questions, or catering inquiries.
        </p>
        <Button type="submit">Send Inquiry</Button>
      </div>
      {sent ? (
        <p className="mt-4 rounded-2xl bg-[rgba(22,101,52,0.1)] px-4 py-3 text-sm text-[color:var(--color-green)]">
          Thanks for reaching out. For the fastest response, please also call the restaurant directly.
        </p>
      ) : null}
    </form>
  )
}
