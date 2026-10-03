import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { activeSocialLinks, founders, site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nobleseo.co"),
  title: {
    default: "NOBLE SEO | SEO built on proof",
    template: "%s | NOBLE SEO",
  },
  description:
    "On-page and technical SEO for Dallas–Fort Worth local businesses. Google Business Profile and local search as supporting work — without bloated agency retainers.",
  openGraph: {
    title: "NOBLE SEO | SEO built on proof",
    description:
      "On-page and technical SEO for Dallas–Fort Worth local businesses. We help local companies turn search visibility into more qualified calls.",
    url: "https://nobleseo.co",
    siteName: "NOBLE SEO",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOBLE SEO | SEO built on proof",
    description:
      "On-page and technical SEO for Dallas–Fort Worth local businesses. SEO built on proof.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nobleseo.co/#organization",
      name: "NOBLE",
      legalName: "NOBLE SEO",
      alternateName: "NOBLE SEO",
      url: site.url,
      email: site.email,
      telephone: site.phoneTel,
      description:
        "SEO for Dallas–Fort Worth local businesses. On-page SEO, technical SEO, Google Business Profile, and local SEO — served remotely.",
      founder: founders.map((person) => ({
        "@id": `${site.url}/#${person.id}`,
      })),
      ...(activeSocialLinks.length
        ? { sameAs: activeSocialLinks.map((item) => item.href) }
        : {}),
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Dallas–Fort Worth",
      },
    },
    ...founders.map((person) => ({
      "@type": "Person",
      "@id": `${site.url}/#${person.id}`,
      name: person.name,
      jobTitle: person.jobTitle,
      url: `${site.url}/about`,
      worksFor: { "@id": `${site.url}/#organization` },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Dallas–Fort Worth",
      },
    })),
    {
      "@type": "WebSite",
      "@id": "https://nobleseo.co/#website",
      name: "NOBLE SEO",
      url: "https://nobleseo.co",
      publisher: { "@id": "https://nobleseo.co/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://nobleseo.co/#service",
      name: "NOBLE SEO",
      url: "https://nobleseo.co",
      email: site.email,
      telephone: site.phoneTel,
      image: "https://nobleseo.co/favicon-512.png",
      description:
        "On-page and technical SEO for Dallas–Fort Worth local businesses, with Google Business Profile and local SEO in support.",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Dallas–Fort Worth",
      },
      serviceType: [
        "On-page SEO",
        "Technical SEO",
        "Google Business Profile",
        "Local SEO",
      ],
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
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className={`${poppins.className} min-h-full bg-paper font-sans text-ink flex flex-col`}>
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
