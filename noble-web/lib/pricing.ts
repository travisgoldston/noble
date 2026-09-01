export const pricing = {
  starting: 1250,
  startingLabel: "$1,250/month",
  rangeLabel: "$1,250–$2,500/month",
  summary:
    "Local SEO is $1,250, $1,850, or $2,500/month depending on how competitive the market is and how much of the site needs work. Every plan includes on-page SEO. The plans are scopes of the same product — not Bronze/Silver/Gold filler.",
};

export const pricingTiers = [
  {
    id: "maps",
    name: "Maps",
    price: 1250,
    priceLabel: "$1,250/month",
    featured: false,
    kicker: "When the listing is the leak",
    summary:
      "For DFW businesses that already get some branded searches but lose the job in Google Maps, the Local Pack, and on the pages a click actually lands on.",
    bestFor:
      "One primary location. The website is usable. The Google Business Profile is incomplete, inaccurate, or ignored — and the existing pages need on-page SEO, not a full rebuild.",
    includes: [
      "Google Business Profile: categories, services, photos, hours, and Q&A",
      "Service area that matches where you actually drive",
      "Review strategy that sounds like a customer, not a template",
      "Branded-search and duplicate-listing cleanup",
      "On-page SEO on existing pages: titles, headings, copy, and internal links so Search and Maps tell the same story",
      "Monthly listing monitoring and a plain-English update",
    ],
    notIncluded: [
      "A full service-page build",
      "Heavy technical rebuilds",
      "Multi-city content systems",
    ],
  },
  {
    id: "local",
    name: "Local",
    price: 1850,
    priceLabel: "$1,850/month",
    featured: true,
    kicker: "Most businesses",
    summary:
      "The core product. Get found in Search and Maps, then make the click worth taking — because traffic into a confusing site is wasted gas.",
    bestFor:
      "Owner-led trades and clinics across DFW where a booked job pays for the work, and both the listing and the site need attention.",
    includes: [
      "Everything in Maps, including on-page SEO",
      "New service pages for the jobs that actually pay the bills",
      "Technical basics: indexation, crawl issues, and the templates that get traffic",
      "Internal linking and a clear next step on the money pages",
      "Monthly diagnose → prioritize → fix → measure cycle",
    ],
    notIncluded: [
      "A content mill",
      "PPC, social, or branding retainers",
    ],
  },
  {
    id: "competitive",
    name: "Competitive",
    price: 2500,
    priceLabel: "$2,500/month",
    featured: false,
    kicker: "Crowded DFW categories",
    summary:
      "For markets where a complete listing is table stakes — HVAC, roofing, dental, and similar searches in Dallas, Plano, Frisco, and Fort Worth.",
    bestFor:
      "Multiple services, tougher competitors, or a site that needs a real content and authority engine on top of local SEO.",
    includes: [
      "Everything in Local, including on-page SEO",
      "A tighter page system for the services and cities you actually serve",
      "Local content that answers real questions, not blog volume",
      "Ethical local authority and link acquisition",
      "Heavier technical work when the engine is the bottleneck",
      "Closer measurement against calls, leads, and the searches that should produce them",
    ],
    notIncluded: [
      "Ranking guarantees",
      "Fake Fort Worth (or any) office pins",
      "Work we cannot measure or explain",
    ],
  },
] as const;

export const pricingPlan = [
  {
    n: "01",
    title: "See the problem",
    body: "A free local SEO game plan. Search, Maps, the site if you have one, and what to set up first if you don't. You get a plain-English read on what is costing calls — and whether NOBLE is a fit. You can walk away.",
  },
  {
    n: "02",
    title: "Pick the scope",
    body: "Maps, Local, or Competitive. The plan matches the market and the gaps, not a menu of busywork. If $1,250/month is not realistic, we say so.",
  },
  {
    n: "03",
    title: "Fix what is in the way",
    body: "Diagnose. Prioritize. Fix. Monitor. You work with the person doing the work. Proof lives in what changed, not in a dashboard full of activity.",
  },
];

export const pricingProblems = [
  {
    title: "The phone is quieter than the work deserves",
    body: "Nearby customers search. A competitor with a clearer listing, better photos, or a page that names the job gets the call. Distance is not the only thing Google weighs.",
  },
  {
    title: "You already paid for SEO and still cannot explain it",
    body: "The retainer produced reports. Rankings moved for words nobody hires for. Nobody could tell you why last month’s invoice connected to a booked job.",
  },
  {
    title: "A good business should not need a black box",
    body: "You should be able to see the number, the work, and the proof. Local SEO is not magic. It is making the business understandable where serious customers look.",
  },
];

export const pricingGuide = {
  empathy:
    "If the trucks are busy and Google still sends the next job to someone else, that is not a branding problem. It is a findability problem. Owners feel it as a quieter phone and a thicker stack of invoices they cannot defend.",
  authority:
    "NOBLE is a founder-led local SEO practice, not a full-service agency. Capacity stays small on purpose. The work is Google Search, Maps, on-page, and technical SEO for Dallas–Fort Worth businesses. We publish proof with numbers and caveats. We do not fabricate case studies, guarantee rankings, or claim a storefront we do not occupy.",
};

export const pricingSuccess = {
  title: "The right people can find you — and you can see why",
  body: "Qualified calls and form fills from Search and Maps. A listing that matches the business. Pages that name the work. A site that can convert the click. Reporting that sounds like a person explaining what changed.",
};

export const pricingFailure = {
  title: "Another year of paying for activity",
  body: "A closer, clearer competitor keeps the Local Pack. You keep a junior account team, a 40-page PDF, and the same leak. Cheap packages add spam risk on top of the silence.",
};

export const pricingComparisons = [
  {
    id: "noble",
    name: "NOBLE SEO",
    kicker: "Founder-led local SEO",
    highlight: true,
    points: [
      "You work with the person doing the work",
      "Local SEO is the product — not a bundled retainer",
      "Prices on the page: $1,250, $1,850, $2,500/month",
      "Proof published with numbers, caveats, and permission",
      "No ranking guarantees. Anyone selling those is selling something Google does not sell",
      "DFW-specific. Remote. No fake office pin",
      "Free game plan first. If it is not a fit, we say so",
      "Plans named for the work, not Bronze / Silver / Gold",
    ],
  },
  {
    id: "agency",
    name: "Typical SEO agency",
    kicker: "Sales, then a chain",
    highlight: false,
    points: [
      "A closer sells it. A junior team executes it",
      "SEO mixed with ads, social, and “content packages”",
      "Price appears after a pitch deck",
      "Dashboards full of impressions nobody hired from",
      "Page-one promises used as the close",
      "National process with a city name swapped in",
      "Twelve-month lock-in to protect their forecast",
      "Metal tiers padded with citations and filler",
    ],
  },
  {
    id: "gig",
    name: "Cheap SEO packages",
    kicker: "$99–$500 marketplaces",
    highlight: false,
    points: [
      "Whoever bid the job, often gone in 90 days",
      "Mass citations, footer city lists, “100 backlinks”",
      "The cheap number is the product",
      "Screenshots and mystery “reports”",
      "Page one in 30 days — until Google notices",
      "Every suburb in North Texas stuffed into one page",
      "No one to call when the listing gets a suggested edit",
      "Risk to the profile you already earned",
    ],
  },
];

export const pricingFaqs = [
  {
    question: "Why not a cheaper SEO package?",
    answer:
      "Most $99–$500 packages are citation blasts, generic city pages, or link schemes. They are cheap because the work is not specific to your business or your DFW market. If a single booked job is worth real money, a package that puts the listing at risk is not a savings. Maps starts at $1,250/month so the right owners can self-qualify.",
  },
  {
    question: "Why not a bigger SEO agency?",
    answer:
      "A larger agency can be the right fit if you want a full marketing department. You will usually pay for account layers, a stacked retainer, and a process built to scale their bench — not to diagnose your Maps listing on a Tuesday. NOBLE stays small so strategy, diagnosis, and the work stay with the founder. If you need PPC, social, and branding under one roof, we are not the right firm.",
  },
  {
    question: "Can you guarantee rankings or a number of leads?",
    answer:
      "No. Anyone who guarantees rankings is selling you something Google does not sell. We diagnose what is actually in the way, fix it, and measure. Proof lives in case studies with caveats, not in a contract clause.",
  },
  {
    question: "How long before this produces calls?",
    answer:
      "Listing and on-page fixes can show up quickly. Competitive Local Pack movement usually takes longer and depends on the category and the city. We set expectations against your market, not a generic 90-day promise. If the website cannot convert a click, rankings will not save the month — that is why every plan includes on-page SEO, and Local and Competitive add technical work when the engine is the leak.",
  },
  {
    question: "I already have an SEO company. Should I stay?",
    answer:
      "Only if you can explain last month’s invoice in a sentence tied to Search, Maps, or the site. If the relationship is a report you do not read and a junior team you have never met, get the free game plan anyway. You can keep them, fire them, or do nothing. The first look is information.",
  },
  {
    question: "Do I have to sign a 12-month contract?",
    answer:
      "The game plan is free and has no obligation. Paid work is scoped in writing around a plan, not hidden behind a discovery call. We do not use a year-long lock-in to make a thin package look like a relationship. If the fit is wrong, it is better to find that out in the game plan.",
  },
  {
    question: "What if it does not work?",
    answer:
      "Local SEO can fail when the market is too competitive for the budget, the business cannot take more work, or the site cannot convert. We would rather decline the engagement than sell a plan that cannot move the thing you care about. That is the point of the audit.",
  },
  {
    question: "Can I just do this myself?",
    answer:
      "You can. Google Business Profile is not a secret. Most owners do not have a weekly block to fix categories, service areas, service pages, crawl issues, and reviews — and then check whether Google changed the listing overnight. If you have that time and taste for the work, you may not need us. If you do not, paying for diagnosis beats paying for a random package.",
  },
  {
    question: "You’re remote. Don’t I need a local Fort Worth or Dallas agency?",
    answer:
      "You need someone who understands how DFW search actually behaves — neighborhoods, service areas, Maps distance, and honest categories. You do not need a fake pin. We serve businesses across Dallas–Fort Worth remotely and do not claim a physical office in any DFW city.",
  },
  {
    question: "Are there setup fees or surprise add-ons?",
    answer:
      "The monthly number is the plan. If the site needs a one-time technical rescue beyond the plan, we say so before that work starts. We do not upsell social, PPC, branding, or web design. Those can be useful. They are not what NOBLE sells.",
  },
  {
    question: "I also need a new website, ads, or social. Can you do that?",
    answer:
      "No. NOBLE is local SEO: Maps, Google Business Profile, on-page, and technical work that supports visibility. If the engine is broken we will say so. We will not take a branding or media retainer to keep the invoice interesting.",
  },
  {
    question: "Which plan should I pick?",
    answer:
      "If the listing is the obvious leak and the site is already usable, start with Maps — it still includes on-page SEO on the pages you have. Most owner-led service businesses belong on Local. Competitive is for crowded categories and businesses that need a real page and authority system, not only a complete profile. The game plan will recommend one — including “not yet” if the budget or the market is wrong.",
  },
  {
    question: "Didn’t you say you don’t sell packages?",
    answer:
      "We do not sell Bronze/Silver/Gold menus padded with 50 citations and a blog nobody reads. These three plans are different intensities of the same product: local SEO. The work is still scoped to your market. The prices are public so you can self-qualify.",
  },
  {
    question: "Is $1,250/month worth it for a plumber, HVAC company, or clinic?",
    answer:
      "If a new customer is worth real money, yes — when the work can actually change visibility. If $1,250/month is not realistic, we are probably not the right fit. Cheap SEO that does not produce a job is more expensive than no SEO.",
  },
  {
    question: "Will you bury me in reports?",
    answer:
      "No. You get a plain-English update on what changed, what we are watching, and what is next. Vanity dashboards are how agencies hide a lack of diagnosis.",
  },
  {
    question: "I got burned by SEO before. Why would this be different?",
    answer:
      "Because the first deliverable is an honest read, not a close. We publish proof we can stand behind, refuse ranking guarantees, and stay on local SEO instead of a pile of unrelated services. If we cannot see a path, we will tell you. That is a worse sales motion and a better way to keep the brand promise: SEO built on proof.",
  },
];
