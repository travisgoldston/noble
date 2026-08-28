import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@/components/Analytics";
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
    default: "Noble SEO | SEO built on proof",
    template: "%s | Noble SEO",
  },
  description:
    "Founder-led local SEO for Dallas–Fort Worth businesses. Google Business Profile, local rankings, and technical SEO — without bloated agency retainers.",
  openGraph: {
    title: "Noble SEO | SEO built on proof",
    description:
      "Founder-led local SEO for Dallas–Fort Worth businesses. We help local companies turn Google Search and Maps visibility into more qualified calls.",
    url: "https://nobleseo.co",
    siteName: "Noble SEO",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble SEO | SEO built on proof",
    description:
      "Founder-led local SEO for Dallas–Fort Worth businesses. SEO built on proof.",
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
      "@id": "https://nobleseo.co/#organization",
      name: "Noble",
      legalName: "Noble SEO",
      alternateName: "Noble SEO",
      url: "https://nobleseo.co",
      email: "hello@nobleseo.co",
      description:
        "Founder-led local SEO practice serving Dallas-Fort Worth businesses remotely.",
      sameAs: socialLinks.map((item) => item.href),
      areaServed: [
        { "@type": "AdministrativeArea", name: "Dallas-Fort Worth" },
        { "@type": "City", name: "Dallas" },
        { "@type": "City", name: "Fort Worth" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://nobleseo.co/#website",
      name: "Noble SEO",
      url: "https://nobleseo.co",
      publisher: { "@id": "https://nobleseo.co/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://nobleseo.co/#service",
      name: "Noble SEO",
      url: "https://nobleseo.co",
      email: "hello@nobleseo.co",
      image: "https://nobleseo.co/favicon.svg",
      description:
        "Founder-led local SEO for Dallas-Fort Worth businesses, including Google Business Profile, local search, and technical SEO.",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Dallas-Fort Worth" },
        { "@type": "City", name: "Dallas" },
        { "@type": "City", name: "Fort Worth" },
      ],
      serviceType: ["Local SEO", "Google Business Profile", "Technical SEO"],
      parentOrganization: { "@id": "https://nobleseo.co/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className={`${montserrat.className} min-h-full bg-paper font-sans text-ink flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
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
