'use client'

import { useState } from 'react'

type FormErrors = Partial<{
  name: string[]
  email: string[]
  message: string[]
  source_url: string[]
  non_field_errors: string[]
}>

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setErrors({})
    const form = e.currentTarget
    const formData = new FormData(form)

    // Honeypot: if filled, silently "succeed"
    if ((formData.get('website') as string)?.trim()) {
      setLoading(false)
      setSuccess(true)
      form.reset()
      return
    }

    // Validate email format
    const email = (formData.get('email') as string)?.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '')) {
      setErrors({ email: ['Enter a valid email address.'] });
      setLoading(false);
      return;
    }

    const payload = {
      name: (formData.get('name') as string)?.trim(),
      email,
      message: (formData.get('message') as string)?.trim(),
      source_url: typeof window !== 'undefined' ? window.location.href : null,
    };

    try {
      const res = await fetch('/api/v1/leads/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setSuccess(true)
        form.reset()
      } else if (res.status === 400) {
        const data = await res.json().catch(() => ({}))
        setErrors(data ?? {})
      } else {
        setErrors({ non_field_errors: ['Something went wrong. Please try again.'] })
      }
    } catch {
      setErrors({ non_field_errors: ['Network error. Please try again.'] })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative isolate bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      {/* decorative blur top */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" />

      <section className="px-6 pt-32 pb-24 sm:pt-48 sm:pb-36 lg:pt-56 lg:pb-48">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Let’s build something reliable together
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Tell us about your goals—Managed Services, AI integration, DevOps, marketing, or anything in between.
            </p>
          </div>

          {success ? (
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
              <h2 className="text-xl font-semibold text-white">Thanks got your message ✅</h2>
              <p className="mt-2 text-sm text-gray-300">
                We’ll reach out shortly. If it’s urgent, include more context and re‑submit.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mx-auto mt-12 max-w-2xl space-y-6">
              {/* non-field errors */}
              {errors.non_field_errors?.length ? (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
                  {errors.non_field_errors.join(' ')}
                </div>
              ) : null}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="mt-2 w-full rounded-md border border-white/10 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 shadow-inner outline-none ring-0 focus:border-emerald-500"
                    placeholder="Your name"
                  />
                  {errors.name?.length ? (
                    <p className="mt-2 text-xs text-red-300">{errors.name.join(' ')}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-2 w-full rounded-md border border-white/10 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 shadow-inner outline-none focus:border-emerald-500"
                    placeholder="you@company.com"
                  />
                  {errors.email?.length ? (
                    <p className="mt-2 text-xs text-red-300">{errors.email.join(' ')}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-md border border-white/10 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 shadow-inner outline-none focus:border-emerald-500"
                  placeholder="Share goals, timelines, current stack, budget range…"
                />
                {errors.message?.length ? (
                  <p className="mt-2 text-xs text-red-300">{errors.message.join(' ')}</p>
                ) : null}
              </div>

              {/* Honeypot field (hidden) */}
              <div className="hidden">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" autoComplete="off" />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Send message'}
                </button>

                <p className="text-xs text-gray-400">
                  By submitting, you agree to our processing of your info.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* decorative blur bottom */}
        <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" />
      </section>
    </div>
  )
}