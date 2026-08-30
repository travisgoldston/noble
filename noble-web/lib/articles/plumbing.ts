import { PUBLISHED } from "./helpers";
import type { Article } from "./types";
import { loc, svc } from "./hvac/links";

export const howPlumbersRankMaps: Article = {
  slug: "how-plumbers-rank-on-google-maps",
  title: "How plumbers rank on Google Maps",
  h1: "How plumbers actually rank on Google Maps",
  description:
    "What decides plumbing visibility in Google Maps: emergency intent, categories, service area, distance, reviews, and a phone-capable website. No fake pins. No ranking guarantees.",
  categories: ["google-maps", "industry-guides", "local-seo"],
  vertical: "plumbing",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  answer:
    "Plumbers rank in Google Maps when the listing looks like a plumber, the service area matches the trucks, and Google thinks you are close enough for an emergency. Hours, click-to-call, and reviews that mention water heaters or leaks help. A Contractor category and a metro slogan do not.",
  intro:
    "Plumbing Maps is panic-shaped. A burst line does not wait for a blog. The three-pack is the job. This is how Google chooses, and what to fix first in Dallas–Fort Worth.",
  sections: [
    {
      heading: "Emergency intent",
      body: [
        "Near me and emergency plumber searches go to the pack. If you take after-hours work, hours and the site should say so. If you do not, do not advertise 24/7.",
      ],
    },
    {
      heading: "Category and services",
      body: [
        "Plumber as primary. Water heater, drain, leak as services if you want those jobs. Mixing in HVAC you do not run confuses Maps.",
      ],
    },
    {
      heading: "Service area and distance",
      body: [
        "Dallas plumbing is neighborhood-shaped. Fort Worth is wide. Claiming every suburb does not make you closer. Do not fake a downtown pin. Set service-area mode if that is the business.",
      ],
    },
    {
      heading: "The phone tap",
      body: [
        "The site has to call. Buried click-to-call on a desktop layout loses the emergency to the next listing.",
      ],
    },
  ],
  example: {
    heading: "How NOBLE would diagnose a Dallas plumber missing Oak Cliff emergencies",
    setup:
      "Referrals keep the trucks busy. Emergency plumber Dallas pack does not include them. Category is Contractor. Website says Metroplex.",
    steps: [
      "Set Plumber category and water heater / leak services.",
      "Tighten Dallas service area.",
      "Publish a phone-capable emergency or water heater page.",
      "Ask for reviews that mention the job and the area.",
    ],
  },
  faqs: [
    {
      question: "Does Google Maps matter for plumbers?",
      answer:
        "Usually more than organic results. Emergency intent goes to the pack.",
    },
    {
      question: "How much does plumbing SEO cost?",
      answer:
        "Maps $1,250, Local $1,850, Competitive $2,500 per month. Same product as other verticals. No plumbing discount.",
    },
  ],
  relatedSlugs: [
    "how-to-rank-hvac-company-google-maps",
    "hvac-service-area-seo",
  ],
  serviceLinks: [svc.plumbing, svc.gbp, svc.mapsGuide, svc.pricing],
  locationLinks: [loc.dallas, loc.fortWorth, loc.plumbingDallas],
  social: {
    xPosts: [
      "Plumbers rank on Maps when the listing says plumber and the phone actually answers — not when the homepage says Metroplex.",
      "Emergency plumber search does not wait for a content calendar.",
      "A fake downtown pin is not a Dallas plumbing strategy.",
    ],
    xThread: [
      "Plumbing Maps is panic-shaped.",
      "Category, service area, hours, click-to-call.",
      "Distance is real.",
      "No pack guarantees.",
    ],
    linkedin:
      "Plumbing Google Maps visibility is emergency relevance plus distance. Owner-led shops lose when the category still says Contractor and the site cannot place a call. Local SEO is making the listing match the leak — literally.",
    facebook:
      "If your plumbing trucks are busy and Google still sends the next water heater emergency to someone else, check the category, the service area, and whether your website can call from a phone.",
    tiktokScript:
      "Hook: Burst pipe. Three names on Maps. You’re not one of them. Point 1: Category = plumber. Point 2: Honest service area. Point 3: Click-to-call. Close: That’s plumbing SEO.",
    hooks: [
      "Panic search. Three names.",
      "Contractor is the wrong plumber category.",
      "Metroplex is not a service area.",
    ],
    newsletter:
      "Subject: How plumbers actually rank on Google Maps. CTA: audit.",
    outreach:
      "I help plumbing companies show up in Google Maps for emergency and water heater searches in the cities they actually run.",
  },
};
