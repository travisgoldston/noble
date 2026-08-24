import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { socialLinks } from "@/lib/content";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nobleseo.co"),
  title: {
    default: "Noble | SEO",
    template: "%s | Noble",
  },
  description:
    "Dallas-Fort Worth SEO and growth for businesses that want to be found. SEO, local search, Google Business Profile, and AI search visibility, without agency overhead.",
  openGraph: {
    title: "Noble | SEO",
    description:
      "Dallas-Fort Worth SEO and growth for businesses that want to be found. Practical SEO for small businesses with real ambition and realistic budgets.",
    url: "https://nobleseo.co",
    siteName: "Noble",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Noble",
      alternateName: "Noble SEO",
      url: "https://nobleseo.co",
      email: "travis@nobleseo.co",
      founder: { "@type": "Person", name: "Travis Goldston" },
      description:
        "Specialist search growth practice for local SEO, Google Business Profile, technical SEO, and AI search visibility.",
      sameAs: socialLinks.map((item) => item.href),
    },
    {
      "@type": "WebSite",
      name: "Noble",
      url: "https://nobleseo.co",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className={`${montserrat.className} min-h-full bg-paper font-sans text-ink flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
