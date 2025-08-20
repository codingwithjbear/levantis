import Container from "../components/Container";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Section from "../components/Section";

export const metadata = { title: "Services — GoLevantis" };

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Container>
          <Section title="Services" description="Fixed-scope packages and flexible retainers." />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">Foundations Sprint (2–3 wks)</h3>
              <p className="mt-2 text-slate-600">CI/CD, IaC baseline, logging/metrics, perf budget.</p>
            </div>
            <div className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">Web Platform Hardening</h3>
              <p className="mt-2 text-slate-600">Auth, caching, error handling, SLOs, runbooks.</p>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}