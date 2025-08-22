import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="relative isolate bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      {/* Background blur top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      />

      {/* Hero */}
      <section className="px-6 pt-32 pb-24 sm:pt-48 sm:pb-36 lg:pt-56 lg:pb-48">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Managed Services, AI, DevOps & Growth Powered by Levantis
          </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            We help ambitious teams scale smarter: from AI integration and cloud platforms to
            DevOps pipelines and digital marketing. Levantis is your partner for building reliable,
            automated, and growth-driven systems.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
            >
              Talk to an architect
            </Link>
            <Link
              href="/services"
              className="text-sm font-semibold text-white hover:text-emerald-300"
            >
              Our services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Background blur bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        />
      </section>

      {/* Core value props */}
      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Managed DevOps</h3>
            <p className="mt-2 text-sm text-gray-400">
              Containerization, Kubernetes, Terraform, CI/CD.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Cloud Architecture</h3>
            <p className="mt-2 text-sm text-gray-400">
              From Lightsail to EKS: secure, scalable foundations.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Platform Reliability</h3>
            <p className="mt-2 text-sm text-gray-400">
              SLOs, observability, alerting, incident response.
            </p>
          </div>
        </div>
      </section>

      {/* Broader capabilities (optional strip below) */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Managed Services</h3>
            <p className="mt-2 text-sm text-gray-400">
              End-to-end operations: IT support, cloud, and automation.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">AI Integration</h3>
            <p className="mt-2 text-sm text-gray-400">
              Custom AI solutions and workflow automation built into your stack.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">DevOps Excellence</h3>
            <p className="mt-2 text-sm text-gray-400">
              Faster, safer deployments through modern DevOps practices.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Digital Marketing</h3>
            <p className="mt-2 text-sm text-gray-400">
              SEO, paid ads, and growth campaigns to scale your reach.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}