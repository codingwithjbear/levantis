import Container from "./Container";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 py-8 text-sm text-slate-600">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <p>© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME ?? "Levantis"}</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}