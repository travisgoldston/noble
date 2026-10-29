import { paths } from "@/lib/site";
import type { Industry } from "./types";

export const contractors: Industry = {
  slug: "contractor-seo",
  id: "contractor",
  group: "home-services",
  name: "General contractor",
  navLabel: "Contractor SEO",
  title: "SEO for Contractors in DFW",
  h1: "SEO for general contractors in Dallas–Fort Worth",
  lede: "Get found when a homeowner searches for a remodel, an addition, or a licensed general contractor — not only when a neighbor already knows your name.",
  description:
    "Local SEO for general contractors in Dallas–Fort Worth. Project-based search, Google Maps, neighborhood proof, and pages for the jobs you actually bid — kitchens, baths, additions — not a generic contractor listing.",
  problem:
    "Most DFW general contractors rank for the company name and disappear for “kitchen remodel Dallas” or “home addition East Dallas.” The trucks and the jobs are real. Search still treats the business like a vague contractor.",
  outcome:
    "NOBLE makes the company understandable in Google Search and Maps: the right category, an honest service area, pages for the projects that pay, and a site that can take the estimate request.",
  problems: [
    {
      title: "Project search is not emergency search",
      body: "A kitchen remodel is planned. Homeowners compare two or three companies, look at photos, and read reviews that mention the actual work. That is a different job than “plumber near me.” A homepage that says “quality construction DFW” does not win either.",
    },
    {
      title: "General contractor vs the trades",
      body: "Google’s categories split electrician, plumber, roofer, and general contractor. If the listing still says Contractor and the site never names kitchens, baths, or additions, Maps is solving a different query. SEO for contractors is not SEO for electricians with the word swapped.",
    },
    {
      title: "Neighborhood proof in a dense city",
      body: "Dallas and Fort Worth remodels live in Lakewood, Bishop Arts, the Near Southside, and older east Dallas streets — not a metro slogan. Photos and reviews that name the neighborhood help more than a stock “serving the Metroplex” paragraph.",
    },
    {
      title: "Permit, license, and trust",
      body: "A high-ticket hire looks for a licensed general contractor, not a lead mill. Local SEO cannot invent a license. It can stop the site from hiding it, and it can make branded search show the right company after a referral.",
    },
    {
      title: "One “services” page for every job",
      body: "Kitchens, baths, and additions are different searches with different photos and next steps. Stuffing them into a comma list is how none of them rank.",
    },
  ],
  approach: [
    {
      title: "Google Business Profile",
      body: "General contractor as the primary category when that is the business. Services for the project types you actually bid — not every trade in the warehouse.",
      href: paths.gbp,
    },
    {
      title: "Google Maps and Local Pack",
      body: "Pack visibility for remodel and contractor-near-me searches. Real job photos beat stock kitchens. We do not build a fake storefront pin.",
      href: "/google-maps",
    },
    {
      title: "Service pages",
      body: "Separate pages for kitchens, baths, and additions when those jobs pay the bills. Written like a person explaining the work, not a brochure.",
      href: paths.localSeo,
    },
    {
      title: "On-page SEO",
      body: "Titles and headings that match how a DFW homeowner searches the project, with internal links from the homepage so Google can tell the jobs apart.",
      href: paths.onPage,
    },
    {
      title: "Review strategy",
      body: "Ask after the punch list, not after a sales appointment. Neighborhood and project type in the review help the next homeowner.",
    },
    {
      title: "Technical SEO",
      body: "Heavy photo galleries still have to load on a phone. Estimate forms have to work. Pages cannot be noindex by accident.",
      href: paths.technical,
    },
  ],
  strategy: [
    {
      heading: "Pick the projects you want to rank for",
      body: "If kitchens are the business, the profile and the site should lead with kitchens. If you only take large additions, do not build a bathroom-refresh page to “capture traffic.” Irrelevant clicks waste a long sales cycle.",
    },
    {
      heading: "Look established before the bid",
      body: "Remodel search is skeptical. Before-and-after photos (with permission), a license note, and reviews that mention East Dallas or a Fort Worth neighborhood do more than a keyword in the H1.",
    },
    {
      heading: "Service area without claiming North Texas",
      body: "A Dallas GC who will drive to Plano should say so once, clearly. Listing every suburb on the homepage is how Google stops believing you are a Dallas contractor.",
    },
    {
      heading: "Do not copy trade-doorway pages",
      body: "This page exists because general contractor search is project-based and trust-heavy. It is not HVAC copy with “contractor” pasted in. Thin city URLs that only swap the name are a risk, not a strategy.",
    },
  ],
  searches: [
    "general contractor Dallas",
    "kitchen remodel Dallas",
    "home addition Fort Worth",
    "bathroom remodel near me",
    "licensed general contractor Plano",
    "home remodeler East Dallas",
  ],
  proof:
    "NOBLE has not published a general-contractor case study. Budgetocity is software SEO, not a remodeler. We will not borrow those numbers. Contractor work is diagnosed from the listing, Maps, and the site. Shared results will be labeled as contractor work when they exist.",
  outreachLine:
    "We specialize in helping general contractors get found in Google Search and Maps for the projects they actually bid in the cities they work — not a metro-wide construction slogan.",
  faqs: [
    {
      question: "Do you do SEO for contractors?",
      answer:
        "Yes. SEO for contractors in Dallas–Fort Worth is local SEO for licensed general contractors and remodelers: Maps, Google Business Profile, and pages for the projects you actually bid. It is not a swapped electrician page.",
    },
    {
      question: "Is contractor SEO the same as electrician or plumber SEO?",
      answer:
        "No. Emergency trades often live or die on the Map pack the same afternoon. General contractor search is planned, photo-heavy, and trust-heavy. The product is still local SEO. The pages and the proof are different.",
    },
    {
      question: "How much does SEO cost for a general contractor?",
      answer:
        "Foundation is $1,250/month, Growth is $1,850/month, and Competitive is $2,500/month. DFW remodel search is competitive. We do not run a cheaper “contractor package” that skips the work.",
    },
    {
      question: "Will you write a page for every DFW suburb?",
      answer:
        "No. Only cities where we can write something locally true. Thin doorway pages are a risk, not a strategy.",
    },
  ],
  relatedArticleSlugs: [],
};
