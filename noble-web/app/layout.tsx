import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { activeSocialLinks, founders, postalAddress, site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nobleseo.co"),
  title: {
    default: "Local SEO for Dallas–Fort Worth Businesses | NOBLE SEO",
    template: "%s | NOBLE SEO",
  },
  description:
    "Local SEO for Dallas–Fort Worth businesses. On-page and technical SEO that turns search into calls. Free written game plan — no sales call.",
  openGraph: {
    title: "Local SEO for Dallas–Fort Worth Businesses | NOBLE SEO",
    description:
      "Local SEO for Dallas–Fort Worth businesses. On-page and technical SEO that turns search into calls. Free written game plan — no sales call.",
    url: "https://nobleseo.co",
    siteName: "NOBLE SEO",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/noble-seo-og.png",
        width: 1200,
        height: 630,
        alt: "NOBLE SEO",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO for Dallas–Fort Worth Businesses | NOBLE SEO",
    description:
      "Local SEO for Dallas–Fort Worth businesses. On-page and technical SEO that turns search into calls. Free written game plan — no sales call.",
    images: ["/noble-seo-og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-n.ico", type: "image/x-icon", sizes: "48x48" },
      { url: "/favicon-n-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon-n.ico",
    apple: [
      { url: "/apple-touch-icon-v2.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nobleseo.co/#organization",
      name: "NOBLE",
      legalName: site.legalName,
      alternateName: "NOBLE SEO",
      url: site.url,
      email: site.email,
      telephone: site.phoneTel,
      image: "https://nobleseo.co/noble-seo-og.png",
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
      address: postalAddress,
    },
    ...founders.map((person) => ({
      "@type": "Person",
      "@id": `${site.url}/#${person.id}`,
      name: person.name,
      jobTitle: person.jobTitle,
      url: `${site.url}/about`,
      ...(person.id === "travis-goldston"
        ? { sameAs: ["https://github.com/travisgoldston"] }
        : {}),
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
      image: "https://nobleseo.co/noble-seo-og.png",
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
      address: postalAddress,
      parentOrganization: { "@id": "https://nobleseo.co/#organization" },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://nobleseo.co/#localbusiness",
      name: "NOBLE SEO",
      url: site.url,
      email: site.email,
      telephone: site.phoneTel,
      image: "https://nobleseo.co/noble-seo-og.png",
      description:
        "Local SEO for Dallas–Fort Worth businesses. On-page SEO, technical SEO, Google Business Profile, and Maps.",
      address: postalAddress,
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Dallas–Fort Worth",
      },
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
