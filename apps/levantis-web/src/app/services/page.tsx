// app/services/page.tsx

import Link from 'next/link'

export default function ServicesPage() {
  return (
    <div className="relative isolate bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      {/* decorative blur top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      />

      <section className="px-6 pt-32 pb-24 sm:pt-48 sm:pb-36 lg:pt-56 lg:pb-48">
        {/* Hero */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Services
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            End‑to‑end help across Managed Services, AI integration, DevOps, and growth marketing—
            with reliability and speed baked in.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              Talk to an architect
            </Link>
            <Link href="/about" className="text-sm font-semibold text-white hover:text-emerald-300">
              About Levantis <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Core technical pillars (keep these) */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Managed DevOps</h3>
            <p className="mt-2 text-sm text-gray-400">Containerization, Kubernetes, Terraform, CI/CD.</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-400">
              <li>Dockerization & images hardening</li>
              <li>Kubernetes/EKS setup & add‑ons</li>
              <li>Infrastructure as Code (Terraform)</li>
              <li>CI/CD pipelines (GitHub Actions, GitLab)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Cloud Architecture</h3>
            <p className="mt-2 text-sm text-gray-400">From Lightsail to EKS: secure, scalable foundations.</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-400">
              <li>VPC, subnetting, security groups</li>
              <li>HA design, autoscaling, cost controls</li>
              <li>Backups, DR, multi‑AZ patterns</li>
              <li>Secrets, IAM, least‑privilege access</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Platform Reliability</h3>
            <p className="mt-2 text-sm text-gray-400">SLOs, observability, alerting, incident response.</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-400">
              <li>SLOs & error budgets</li>
              <li>Metrics, logs, traces (Prometheus/Grafana)</li>
              <li>On‑call & runbooks</li>
              <li>Load & chaos testing</li>
            </ul>
          </div>
        </div>

        {/* Broader capabilities */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Managed Services</h3>
            <p className="mt-2 text-sm text-gray-400">Ongoing operations and support.</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-400">
              <li>Monitoring & patching</li>
              <li>Cost & performance reviews</li>
              <li>Security posture checks</li>
              <li>Monthly ops reports</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">AI Integration</h3>
            <p className="mt-2 text-sm text-gray-400">Practical AI inside workflows.</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-400">
              <li>Retrieval‑augmented apps</li>
              <li>Agents & automations</li>
              <li>Data pipelines & evals</li>
              <li>Safety, privacy, governance</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">DevOps Enablement</h3>
            <p className="mt-2 text-sm text-gray-400">Upskill and accelerate teams.</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-400">
              <li>Architecture reviews</li>
              <li>Playbooks & templates</li>
              <li>Hands‑on training</li>
              <li>Tooling rationalization</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Digital Marketing</h3>
            <p className="mt-2 text-sm text-gray-400">Turn systems into growth.</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-400">
              <li>SEO & technical audits</li>
              <li>Paid acquisition (SEM/Social)</li>
              <li>Landing pages & analytics</li>
              <li>Lifecycle & CRM automations</li>
            </ul>
          </div>
        </div>

        {/* CTA banner */}
        <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
          <h2 className="text-xl font-semibold text-white">Not sure where to start?</h2>
          <p className="mt-2 text-sm text-gray-300">
            Book a short discovery call—tell us your goals and constraints, and we’ll propose a right‑sized plan.
          </p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              Talk to an architect
            </Link>
          </div>
        </div>

        {/* decorative blur bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        />
      </section>
    </div>
  )
}