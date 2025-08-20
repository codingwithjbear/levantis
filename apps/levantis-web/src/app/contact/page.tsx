import Container from "../components/Container";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import LeadForm from "../components/LeadForm";
import Section from "../components/Section";

export const metadata = { title: "Contact — GoLevantis" };

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Container>
          <Section title="Contact" description="Tell us about your project. We usually reply within one business day." />
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <LeadForm />
            </div>
            <aside className="space-y-2 text-sm text-slate-600">
              <p>Email: hello@golevantis (set up later)</p>
              <p>Jordan / Remote</p>
            </aside>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}