import Container from "../components/Container";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Section from "../components/Section";

export const metadata = { title: "About — GoLevantis" };

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Container>
          <Section title="About" description="Pragmatic engineering for speed and safety." />
          <p className="max-w-2xl text-slate-700">
            We’ve shipped and run platforms across fintech, gov, and startups—favoring boring, reliable tech.
          </p>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}