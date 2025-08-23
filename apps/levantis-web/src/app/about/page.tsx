export default function AboutPage() {
  return (
    <div className="relative isolate bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      {/* decorative blur top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      />

      <section className="px-6 pt-32 pb-24 sm:pt-48 sm:pb-36 lg:pt-56 lg:pb-48">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            About Levantis
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            We design, build, and operate reliable systems so your team can ship with confidence—
            across managed services, AI integration, DevOps, and growth.
          </p>
        </div>

        {/* Who we are */}
        <div className="mx-auto mt-16 max-w-3xl space-y-8">
          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold text-white">Our mission</h2>
            <p className="mt-3 text-sm text-gray-400">
              Help ambitious teams scale smarter by pairing pragmatic engineering with measurable business outcomes.
              We focus on reliability, speed, and cost clarity.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold text-white">How we work</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-400">
              <li><span className="text-white">Assess → Plan → Ship:</span> short discovery, clear roadmap, incremental delivery.</li>
              <li><span className="text-white">Operate & improve:</span> SLOs, observability, and feedback loops baked in.</li>
              <li><span className="text-white">Knowledge transfer:</span> docs, playbooks, and enablement as we go.</li>
            </ul>
          </div>
        </div>

        {/* Core technical pillars you wanted to keep */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Managed DevOps</h3>
            <p className="mt-2 text-sm text-gray-400">Containerization, Kubernetes, Terraform, CI/CD.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Cloud Architecture</h3>
            <p className="mt-2 text-sm text-gray-400">From Lightsail to EKS: secure, scalable foundations.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Platform Reliability</h3>
            <p className="mt-2 text-sm text-gray-400">SLOs, observability, alerting, incident response.</p>
          </div>
        </div>

        {/* Broader capabilities */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Managed Services</h3>
            <p className="mt-2 text-sm text-gray-400">End-to-end operations: IT support, cloud, and automation.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">AI Integration</h3>
            <p className="mt-2 text-sm text-gray-400">Practical AI in workflows, data pipelines, and apps.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">DevOps Excellence</h3>
            <p className="mt-2 text-sm text-gray-400">Modern pipelines, infra as code, faster safer releases.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Digital Marketing</h3>
            <p className="mt-2 text-sm text-gray-400">SEO, paid, and lifecycle to turn systems into growth.</p>
          </div>
        </div>

        {/* Principles */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Pragmatic</h3>
            <p className="mt-2 text-sm text-gray-400">Right sized solutions that fit your stage and team.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Reliable</h3>
            <p className="mt-2 text-sm text-gray-400">SLOs and incident habits from day one.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <h3 className="text-base font-semibold text-white">Transparent</h3>
            <p className="mt-2 text-sm text-gray-400">Clear scopes, simple pricing, shared dashboards.</p>
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