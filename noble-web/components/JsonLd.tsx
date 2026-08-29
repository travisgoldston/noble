export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://nobleseo.co${item.href}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://nobleseo.co${url}`,
    provider: {
      "@type": "Organization",
      name: "NOBLE SEO",
      url: "https://nobleseo.co",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Dallas-Fort Worth" },
      { "@type": "City", name: "Dallas" },
      { "@type": "City", name: "Fort Worth" },
    ],
    serviceType: name,
  };
}

export function offerCatalogSchema(
  offers: { name: string; description: string; price: number }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "NOBLE SEO local SEO plans",
    url: "https://nobleseo.co/pricing",
    itemListElement: offers.map((offer, index) => ({
      "@type": "Offer",
      position: index + 1,
      name: offer.name,
      description: offer.description,
      url: "https://nobleseo.co/pricing",
      price: String(offer.price),
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: offer.price,
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
    })),
  };
}
