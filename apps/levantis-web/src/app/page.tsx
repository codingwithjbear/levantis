import Container from "../app/components/Container";
import SiteHeader from "../app/components/SiteHeader";
import SiteFooter from "../app/components/SiteFooter";
import Section from "../app/components/Section";
import Link from "next/link";
import "../app/styles/globals.css";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b bg-slate-50 py-20">
          <Container>
            <h1 className="text-4xl font-bold tracking-tight">
              Modern managed services that keep your infra fast, safe, and sane.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-700">
              GoLevantis helps teams ship with confidence across Django/Next.js, CI/CD, and cloud ops.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/contact" className="rounded-md bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800">Talk to us</Link>
              <Link href="/services" className="rounded-md border px-5 py-2 text-sm hover:bg-white">See services</Link>
            </div>
          </Container>
        </section>

        <Container>
          <Section
            eyebrow="What we do"
            title="Value, not vanity"
            description="Engagements geared to outcomes: faster deploys, lower cloud bills, and fewer incidents."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ["DevOps & CI/CD", "Pipelines, IaC, observability. Cut cycle time and MTTR."],
              ["Web Platforms", "Django + Next.js foundations, auth, caching, and performance."],
              ["Cost & Reliability", "Right-size infra; budgets with SLOs and error budgets."],
              ["Security Basics", "Secrets, least privilege, patch cadence, basic threat modeling."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border p-6">
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}