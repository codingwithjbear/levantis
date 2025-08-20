import "../app/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Levantis — Managed Services & Advisory",
  description: "Keep your infra fast, safe, and sane.",
  openGraph: {
    title: "GoLevantis",
    description: "Managed Services & Advisory",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "GoLevantis" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}