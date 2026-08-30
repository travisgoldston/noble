import { PUBLISHED } from "../helpers";
import type { Article } from "../types";
import { loc, svc } from "./links";

export const hvacReviews: Article = {
  slug: "hvac-reviews-and-local-seo",
  title: "HVAC reviews and local SEO",
  h1: "HVAC reviews help Maps when they sound like a customer.",
  description:
    "How Google reviews affect HVAC local SEO: prominence, conversion, and what to ask for after a job. No fake review tactics. DFW examples.",
  categories: ["local-seo", "industry-guides", "gbp"],
  vertical: "hvac",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  answer:
    "HVAC reviews affect who shows up in the Map pack and who gets the call after. Count helps. Recent, specific text that mentions the job and the area helps more. Templates, bought reviews, and a three-year silence hurt. Ask after completed work. Reply like a person.",
  intro:
    "Star count is what owners watch. Review text is what the next homeowner reads in the pack. For HVAC, a note about a frozen coil in Lakewood or a furnace in south Fort Worth is worth more than twenty “great job!” lines. Here is how reviews actually fit local SEO — without a review-gating scheme.",
  sections: [
    {
      heading: "Prominence is partly proof you are real",
      body: [
        "Google’s local ranking includes prominence. Reviews are one visible piece. A listing with three reviews from 2021 looks quieter than a competitor with steady, ordinary reviews from this summer.",
      ],
    },
    {
      heading: "Ask after the job, not after a script",
      body: [
        "The technician just left. The AC is on. That is the window. Ask for a Google review. Mention it is fine to say what they hired you for and what part of town. Do not hand them a paragraph to copy.",
      ],
    },
    {
      heading: "Reply to the bad ones",
      body: [
        "A skipped one-star about a no-show looks worse than a calm reply. Do not fight in public. Do not offer a refund in the review thread as a ranking tactic. Be a company.",
      ],
    },
    {
      heading: "What not to do",
      body: [
        "Do not buy reviews. Do not review-gate (only happy customers sent to Google). Do not run a contest that requires a five-star. Those tactics are how listings get enforcement problems.",
      ],
    },
  ],
  example: {
    heading: "How NOBLE would restart HVAC reviews that stalled two summers ago",
    setup:
      "Forty reviews, last one from 2024. All say “great service.” Pack competitors have recent notes about AC repair in named neighborhoods.",
    steps: [
      "Ask the next ten completed jobs, in person or by a short text the owner actually sent.",
      "Reply to anything sitting unanswered.",
      "Do not blast a 400-person email with a review template.",
      "Check the listing for filtered reviews or a second profile splitting the proof.",
    ],
  },
  faqs: [
    {
      question: "How many Google reviews does an HVAC company need?",
      answer:
        "Enough to look like a real company in your market, with recent ones. There is no magic number we will invent. A competitor’s count is context, not a quota.",
    },
    {
      question: "Do HVAC reviews help SEO if they have no keywords?",
      answer:
        "Yes, they still help prominence and conversion. Specific text helps humans more. Do not instruct customers to stuff keywords.",
    },
  ],
  relatedSlugs: [
    "google-business-profile-for-hvac-companies",
    "how-to-rank-hvac-company-google-maps",
    "hvac-local-seo-checklist",
  ],
  serviceLinks: [svc.hvac, svc.gbp, svc.local],
  locationLinks: [loc.dallas, loc.fortWorth],
  social: {
    xPosts: [
      "HVAC reviews: “Fixed our AC in East Dallas” beats twenty “great job!!!” stars.",
      "A listing that went quiet in 2024 looks abandoned next to this summer’s competitors.",
      "Do not buy HVAC reviews. Ask after the job like a person.",
    ],
    xThread: [
      "Star count is visible. Review text is useful.",
      "Ask after the tech leaves, not after a marketing script.",
      "Reply to the bad ones.",
      "Never buy them.",
    ],
    linkedin:
      "HVAC local SEO is not a review-count contest. It is whether the next homeowner in the Map pack believes you did this job recently, nearby. Specific reviews, a human reply, and no gating schemes. That is the work.",
    facebook:
      "If your HVAC Google reviews all say “great service” and stopped two years ago, the next AC repair searcher has nothing local to read. Ask after the next job. Let them write it in their words.",
    tiktokScript:
      "Hook: Your HVAC stars are lying. Point 1: Recency matters. Point 2: Mention the job and the neighborhood. Point 3: Don’t buy reviews. Close: Ask after the next repair.",
    hooks: [
      "Great job!!! is not a local SEO review.",
      "Reviews that went quiet look like a closed shop.",
      "Ask after the coil is cold again.",
    ],
    newsletter:
      "Subject: HVAC reviews that actually help Maps. CTA: audit.",
    outreach:
      "I help HVAC companies treat reviews as Maps proof — recent, specific, asked after real jobs — not as a purchased star count.",
  },
};

export const hvacLandingPages: Article = {
  slug: "hvac-local-landing-pages",
  title: "HVAC local landing pages",
  h1: "HVAC landing pages only work if they are locally true.",
  description:
    "When HVAC companies should build city or service pages, and when those pages are doorway spam. Dallas and Fort Worth examples. No mass-produced suburbs.",
  categories: ["local-seo", "industry-guides", "dfw-local-search"],
  vertical: "hvac",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  answer:
    "An HVAC landing page is useful when it says something a homepage cannot: a neighborhood, a distance problem, a service you actually sell. It is harmful when it is the same paragraph with a city name swapped. Build fewer pages. Make them specific.",
  intro:
    "The usual agency move is a page for every DFW suburb. Google has seen that movie. HVAC companies need pages for the jobs that pay and the markets they actually run — not a generator. Here is the standard NOBLE uses.",
  sections: [
    {
      heading: "Service pages before city pages",
      body: [
        "AC repair, installation, and furnace pages usually matter more than a tenth suburb. If the homepage is the only URL, start there. City pages cannot save a site that never names the job.",
      ],
    },
    {
      heading: "Dallas vs Fort Worth is a real split",
      body: [
        "Dallas HVAC is neighborhood density. Fort Worth HVAC is distance across a wide city. Those two pages can both exist. Plano only exists if the copy is about Plano — competition, how people search, where the trucks sit — not Dallas with a find-and-replace.",
      ],
    },
    {
      heading: "What unique copy looks like",
      body: [
        "Landmarks people actually use. Driving reality. Who you lose jobs to. Example searches without fake volumes. A diagnosis example. If you cannot write that without inventing it, do not publish the URL.",
      ],
    },
    {
      heading: "Internal links",
      body: [
        "City pages should link to the HVAC service page, Local SEO, the matching location page, and a useful resource. Exact-match “HVAC SEO Dallas” in every sentence is stuffing. Natural anchors are enough.",
      ],
    },
  ],
  example: {
    heading: "How NOBLE would decide whether a Plano HVAC page deserves to exist",
    setup:
      "The shop is in Dallas. They take some Plano jobs in summer. An agency proposed ten Collin County URLs.",
    steps: [
      "Keep Dallas as the home market page.",
      "Add Plano only if they will staff those jobs and we can write Plano-specific search behavior.",
      "Refuse McKinney, Frisco, and Allen clones.",
      "Put energy into the AC repair page and the listing first.",
    ],
  },
  faqs: [
    {
      question: "How many HVAC city pages do I need?",
      answer:
        "As many as you can make locally true. For most companies that is one home market plus maybe one more. Not twelve.",
    },
    {
      question: "Will more pages mean more rankings?",
      answer:
        "Thin pages can dilute the site. Useful pages can help. Volume is not the strategy.",
    },
  ],
  relatedSlugs: [
    "hvac-seo-dallas",
    "hvac-seo-fort-worth",
    "hvac-service-area-seo",
  ],
  serviceLinks: [svc.hvac, svc.local, svc.gbp],
  locationLinks: [loc.dallas, loc.fortWorth, loc.plano],
  social: {
    xPosts: [
      "HVAC city pages that only swap “Dallas” for “Plano” are doorways. Don’t build them.",
      "Service pages for AC repair usually beat a tenth suburb URL.",
      "Dallas HVAC and Fort Worth HVAC are different problems. The copy should be too.",
    ],
    xThread: [
      "Landing pages are not a generator job.",
      "Name the work first.",
      "Add a city only when the story is different.",
      "Link them naturally. Don’t stuff the exact match.",
    ],
    linkedin:
      "HVAC local landing pages fail when they are templates. They work when they capture a real split: Dallas neighborhoods vs Fort Worth distance, repair vs install. If you cannot write that without inventing landmarks, skip the URL.",
    facebook:
      "If an agency offers you HVAC pages for every DFW suburb, ask whether the Plano page says anything the Dallas page does not. If the answer is the city name, that is not SEO. That is spam risk.",
    tiktokScript:
      "Hook: Stop making a webpage for every suburb. Point 1: Name AC repair first. Point 2: Dallas ≠ Fort Worth. Point 3: If you can’t write unique copy, don’t publish. Close: That’s how you avoid doorway pages.",
    hooks: [
      "Find-and-replace is not local SEO.",
      "Twelve suburb pages, one paragraph.",
      "Service pages before vanity cities.",
    ],
    newsletter:
      "Subject: When an HVAC city page is worth it. CTA: audit.",
    outreach:
      "I do not mass-produce HVAC suburb pages. I help companies build the few local URLs that match where the trucks actually run.",
  },
};

export const hvacSeoCost: Article = {
  slug: "how-much-does-hvac-seo-cost",
  title: "HVAC SEO pricing",
  h1: "What HVAC SEO actually costs — and what you are buying.",
  description:
    "HVAC SEO pricing at NOBLE: Maps $1,250, Local $1,850, Competitive $2,500 per month. What the work includes, what it does not, and when ads are a different job.",
  categories: ["industry-guides", "local-seo"],
  vertical: "hvac",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  answer:
    "NOBLE’s local SEO plans are Maps at $1,250/month, Local at $1,850/month, and Competitive at $2,500/month. HVAC companies buy a scope of listing, Maps, on-page, and technical work — not a cheaper “HVAC package” and not guaranteed rankings. If a single install does not cover the plan, the economics may not work.",
  intro:
    "Owners ask for a number. The honest number is the same as the rest of NOBLE’s local SEO product. HVAC does not get a discount for being a trade, and it does not get a fake “starter package” that skips Maps. Here is what the money buys and what it does not.",
  sections: [
    {
      heading: "The three plans",
      body: [
        "Maps is listing-heavy: Google Business Profile, service area, reviews, branded-search cleanup, on-page on pages that already exist. Local adds more site and content work. Competitive is for markets where the pack is expensive and the site needs more build. Details live on the pricing page. HVAC in Dallas often lands above listing-only work.",
      ],
    },
    {
      heading: "What you are not buying",
      body: [
        "Not Google Ads. Not social. Not a ranking guarantee. Not a fake office pin. Not a 90-day first-page clause for “AC repair Dallas.”",
      ],
    },
    {
      heading: "When the math works",
      body: [
        "If a booked install or a week of repair calls covers $1,250–$2,500, local SEO can be a rational line item. If every job is a $99 service call with no margin, ads or a different business model may be the real conversation.",
      ],
    },
    {
      heading: "Cheap HVAC SEO",
      body: [
        "A $300 vendor posting blogs and blasting citations is a different product. It often leaves the listing wrong. Price is not the same as scope.",
      ],
    },
  ],
  example: {
    heading: "How NOBLE would scope an HVAC company that only needs the listing fixed",
    setup:
      "Website is usable. Pack is the leak. Category is wrong. Reviews stalled.",
    steps: [
      "Maps plan is the usual fit if the site does not need a rebuild.",
      "If they also need AC repair and install pages plus competitive Dallas pack work, Local or Competitive is the honest scope.",
      "We say so in the audit. We do not start everyone on the cheapest tier to win the contract.",
    ],
  },
  faqs: [
    {
      question: "Is HVAC SEO cheaper than dental SEO?",
      answer:
        "The plan prices are the same. Competition and site gaps decide the tier, not the trade name.",
    },
    {
      question: "Do you require a year-long contract to “see SEO”?",
      answer:
        "Ask on the audit. We do not use fake scarcity or countdown timers. The work still takes time in competitive packs.",
    },
  ],
  relatedSlugs: [
    "seo-vs-google-ads-for-hvac-companies",
    "hvac-local-seo-checklist",
    "how-to-rank-hvac-company-google-maps",
  ],
  serviceLinks: [svc.pricing, svc.hvac, svc.local],
  locationLinks: [loc.dallas, loc.fortWorth],
  social: {
    xPosts: [
      "HVAC SEO at NOBLE is $1,250, $1,850, or $2,500 a month — the same local SEO product, not a cheaper trade coupon.",
      "If a single HVAC install does not cover the plan, the economics may not work. That is an honest filter.",
      "Cheap HVAC SEO that never touches the Google listing is a different product.",
    ],
    xThread: [
      "Owners want an HVAC SEO price.",
      "Maps $1,250. Local $1,850. Competitive $2,500.",
      "No ranking guarantee. No ads bundled in.",
      "Audit first so the tier matches the leak.",
    ],
    linkedin:
      "HVAC SEO pricing should be a scope conversation. Listing-only work is not the same as building repair pages in a competitive Dallas pack. NOBLE publishes the three local SEO numbers. We do not invent a fourth “HVAC starter” that skips the job.",
    facebook:
      "What does HVAC SEO cost? At NOBLE it is the same three local SEO plans on the pricing page. The audit decides which leak you actually have — Maps, the website, or both.",
    tiktokScript:
      "Hook: HVAC SEO is not $99 a month and a blog. Point 1: Three published prices. Point 2: You’re buying Maps and pages, not a guarantee. Point 3: If the jobs can’t pay for it, don’t buy it. Close: Free audit.",
    hooks: [
      "No HVAC coupon on SEO.",
      "Price without scope is a sales tactic.",
      "One install vs $1,250 is the math.",
    ],
    newsletter:
      "Subject: HVAC SEO pricing without the mystery package. CTA: pricing page + audit.",
    outreach:
      "I price HVAC work as local SEO — Maps, Local, or Competitive — not as a discounted trade package. If the listing is the leak, we say so.",
  },
};

export const seoVsAdsHvac: Article = {
  slug: "seo-vs-google-ads-for-hvac-companies",
  title: "SEO vs Google Ads for HVAC companies",
  h1: "HVAC SEO and Google Ads are different jobs.",
  description:
    "When HVAC companies need Google Ads, when local SEO is the better long-term lever, and why NOBLE does not sell PPC. July demand vs year-round findability.",
  categories: ["industry-guides", "local-seo"],
  vertical: "hvac",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  answer:
    "Google Ads can fill a hot week. They stop when you stop paying. Local SEO is being findable for AC repair and install without renting every click. Many HVAC companies need both in July. They are not the same product. NOBLE sells local SEO, not ads.",
  intro:
    "Summer makes the comparison loud. Ads look like they “work” because the phone rings while the card is charged. SEO looks slow because Maps was ignored for three years. Use both if the margin is there. Do not hire an SEO firm for a PPC campaign, and do not expect a listing cleanup to replace a July ad budget overnight.",
  sections: [
    {
      heading: "What ads are good at",
      body: [
        "Immediate demand capture. Testing offers. Covering a service area Google does not think you are close to — at a cost per call you have to watch.",
      ],
    },
    {
      heading: "What local SEO is good at",
      body: [
        "The searches that keep happening when the ad is off: branded name, AC repair plus neighborhood, maintenance, the pack. Compounding only if the listing and the pages are real.",
      ],
    },
    {
      heading: "July is not the whole year",
      body: [
        "Furnace search in January is a different auction and a different pack. A company that only buys ads in heat waves still needs a listing that works in February.",
      ],
    },
    {
      heading: "NOBLE’s boundary",
      body: [
        "We do not manage Google Ads. If ads are the only lever that makes sense this month, say that honestly and keep the SEO conversation for the leaks ads cannot fix: category, service area, conversion on the site.",
      ],
    },
  ],
  example: {
    heading: "How NOBLE would talk to an HVAC owner spending $8k/month on ads and still losing organic pack jobs",
    setup:
      "Ads run in July. Organic pack is three other companies. Listing category is Contractor. Website never says AC repair.",
    steps: [
      "Keep ads if the ROAS is real. That is not our job to run.",
      "Fix the listing and the repair page so some of those searches can be won without a bid.",
      "Do not promise ads spend will drop in 30 days.",
    ],
  },
  faqs: [
    {
      question: "Can SEO replace HVAC ads?",
      answer:
        "Sometimes for some queries, over time. Not as a contract clause. Competitive Dallas repair terms often keep some paid demand in peak season.",
    },
    {
      question: "Do you run ads if we hire you for SEO?",
      answer:
        "No. We will say if ads seem to be the only short-term lever. We will not bundle PPC.",
    },
  ],
  relatedSlugs: [
    "how-much-does-hvac-seo-cost",
    "how-to-rank-hvac-company-google-maps",
    "hvac-seo-dallas",
    "hvac-seo-fort-worth",
  ],
  serviceLinks: [svc.hvac, svc.pricing, svc.local],
  locationLinks: [loc.dallas, loc.fortWorth],
  social: {
    xPosts: [
      "HVAC ads fill July. They stop in August. Local SEO is still being findable for AC repair when the card is not being charged.",
      "NOBLE does not sell Google Ads. If ads are the only lever that makes sense this week, that is an honest sentence.",
      "Contractor category plus $8k in ads is how you rent the click you could have been eligible for.",
    ],
    xThread: [
      "SEO vs ads for HVAC is not a morality play.",
      "Ads: speed, cost per call, coverage you are not close to.",
      "SEO: listing, pages, pack, branded search.",
      "We do one of those jobs. Not both.",
    ],
    linkedin:
      "HVAC companies often treat SEO and Google Ads as competing quotes. They are different jobs. Ads rent demand. Local SEO makes the business eligible for the demand that already searches. NOBLE only sells the second. We will not pretend a listing cleanup replaces a peak-season media budget overnight.",
    facebook:
      "If your HVAC phone only rings while ads are on, check whether Google Maps even understands you do AC repair. Ads and SEO can both exist. They fix different leaks.",
    tiktokScript:
      "Hook: Your HVAC ads are not SEO. Point 1: Ads stop when you stop paying. Point 2: Maps still needs the right category. Point 3: We don’t run ads. Close: Audit the listing anyway.",
    hooks: [
      "July ads are not a Maps strategy.",
      "Renting the click vs being eligible for it.",
      "We don’t sell PPC. We say so.",
    ],
    newsletter:
      "Subject: HVAC SEO vs Google Ads without the turf war. CTA: audit.",
    outreach:
      "If an HVAC company is heavy on ads and invisible in the pack, I talk about the listing and the repair page — not about taking over the media budget.",
  },
};

export const hvacChecklist: Article = {
  slug: "hvac-local-seo-checklist",
  title: "HVAC local SEO checklist",
  h1: "An HVAC local SEO checklist you can actually finish.",
  description:
    "A practical HVAC local SEO checklist: Google Business Profile, Maps, service pages, reviews, technical basics, and DFW-specific checks. No fake metrics.",
  categories: ["local-seo", "industry-guides", "google-maps"],
  vertical: "hvac",
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  answer:
    "Finish the listing, the service area, one real repair page, reviews, and the phone experience before you buy content. Then check branded search and competitors in the pack. That is the HVAC local SEO checklist that usually changes calls.",
  intro:
    "Checklists fail when they are forty items of busywork. This one is the order NOBLE actually uses on an HVAC audit in Dallas–Fort Worth. Skip to the leak you already know. Do not start with a blog calendar.",
  sections: [
    {
      heading: "1. Branded search",
      body: [
        "Search the company name. Confirm one listing, correct hours, no duplicate from a buyout. If referrals land on the wrong profile, fix that before “AC repair Dallas.”",
      ],
    },
    {
      heading: "2. The money query from the customer’s location",
      body: [
        "AC repair plus the neighborhood you want. Note who is in the pack. You are not diagnosing from the shop parking lot.",
      ],
    },
    {
      heading: "3. Google Business Profile",
      body: [
        "HVAC category. Services. Photos. Hours. Honest service area. Working website link. Q&A that is not spam.",
      ],
    },
    {
      heading: "4. The website on a phone",
      body: [
        "Does any page say AC repair? Does the number call? Is it fast enough? Is anything noindex by accident?",
      ],
    },
    {
      heading: "5. Reviews",
      body: [
        "Recent? Specific? Unanswered? Split across two listings?",
      ],
    },
    {
      heading: "6. Only then: more pages",
      body: [
        "Install, furnace, a city page that is locally true. Not twelve suburbs.",
      ],
    },
  ],
  example: {
    heading: "How NOBLE would run this checklist on a Dallas HVAC site in an afternoon",
    setup:
      "Owner thinks they need more blog posts. Pack is empty for Lakewood AC repair. Category is Contractor.",
    steps: [
      "Branded search: one listing, old hours.",
      "Money query: three competitors, none of them this shop.",
      "GBP: category and services.",
      "Site: no repair page. That is the build. Not a blog.",
    ],
  },
  faqs: [
    {
      question: "Is this checklist enough to rank an HVAC company?",
      answer:
        "It is enough to find the leak. Ranking still depends on distance and competitors. No checklist guarantees the pack.",
    },
    {
      question: "Should I hire someone before I do this?",
      answer:
        "You can do the search tests yourself today. The audit is if you want a second set of eyes on Maps, the listing, and the site together.",
    },
  ],
  relatedSlugs: [
    "how-to-rank-hvac-company-google-maps",
    "google-business-profile-for-hvac-companies",
    "hvac-seo-dallas",
    "how-much-does-hvac-seo-cost",
  ],
  serviceLinks: [svc.hvac, svc.local, svc.gbp, svc.pricing],
  locationLinks: [loc.hvacDallas, loc.hvacFortWorth],
  social: {
    xPosts: [
      "HVAC local SEO checklist: branded search, money query from the neighborhood, listing, phone site, reviews. Blog last.",
      "If the category is still Contractor, the rest of the checklist is arguing with Maps.",
      "Do not start HVAC SEO with twelve suburb pages.",
    ],
    xThread: [
      "A useful HVAC SEO checklist is short.",
      "Search your name. Search AC repair from the area you want.",
      "Fix listing, site, reviews.",
      "Then decide if a city page is even true.",
    ],
    linkedin:
      "Most HVAC SEO retainers bury the owner in reporting. The useful checklist is still: branded search, the money query from the customer’s location, GBP completeness, a phone-capable repair page, reviews. Content mills skip step one.",
    facebook:
      "Before you hire HVAC SEO, search your company name, then search AC repair in the neighborhood you want. If those results look different, that is your checklist — not a blog calendar.",
    tiktokScript:
      "Hook: HVAC SEO checklist in one minute. Point 1: Search your name. Point 2: Search AC repair from a neighborhood. Point 3: Fix category and the website. Close: Free audit if you want it walked through.",
    hooks: [
      "Blog last.",
      "Shop parking lot is the wrong test.",
      "Contractor category fails the checklist immediately.",
    ],
    newsletter:
      "Subject: The HVAC local SEO checklist we actually use. CTA: audit.",
    outreach:
      "I walk HVAC owners through a short local SEO checklist — name search vs AC repair search — then talk about the listing and the site, not a content package.",
  },
};
