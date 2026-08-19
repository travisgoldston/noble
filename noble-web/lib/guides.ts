export type Guide = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  example: { heading: string; setup: string; steps: string[] };
};

export const guides: Guide[] = [
  {
    slug: "google-search",
    title: "Google Search, in plain English",
    eyebrow: "How people find you",
    description:
      "Google Search is still where most customers compare businesses. Here is what that means if you own a local company.",
    intro:
      "When someone types a problem into Google, they are not browsing. They are trying to choose. The results page is the first impression of your business, even if they never click.",
    sections: [
      {
        heading: "What it is",
        body: [
          "Google Search is the list of websites, maps, and extra boxes that appear after a query. For a plumber, that might be “emergency plumber Fort Worth.” For a dentist, “family dentist McKinney.”",
          "Those results are not a lottery. Google is trying to match the search to a business it understands: what you do, where you do it, and whether other people trust you.",
        ],
      },
      {
        heading: "Why a business owner should care",
        body: [
          "If you do not show up, the customer still hires someone. They hire the business that was easier to find.",
          "Search is also where people check you after a referral. A friend says your name. The next step is often Google. What they see there can confirm the referral or kill it.",
        ],
      },
      {
        heading: "What good looks like",
        body: [
          "Your main services are named the way customers say them, not only the way the trade says them. Fort Worth and McKinney are examples. “AC repair” beats a vague “solutions” page.",
          "The homepage, service pages, and Google Business Profile tell the same story: same name, same work, same area. A person can tell in ten seconds whether you are the right fit.",
        ],
      },
      {
        heading: "What usually goes wrong",
        body: [
          "The website talks like an insider. Pages do not name the services people actually search. The Google Business Profile says one thing and the site says another.",
          "None of that requires a huge content machine. It does require the site and the profile to tell the same, simple story.",
        ],
      },
      {
        heading: "What you can check this week",
        body: [
          "Search your top three services plus your city, then search your business name. Write down what appears: your site, a competitor, a map listing, or nothing useful.",
          "If the first screen would confuse a stranger, that is the work. Fix the pages and the profile before you buy more traffic.",
        ],
      },
    ],
    example: {
      heading: "How NOBLE would fix a Google Search problem",
      setup:
        "A Fort Worth roofer’s site ranks for the company name and nothing else. People searching “roof leak Fort Worth” land on national lead sites and a competitor with a simple service page.",
      steps: [
        "Name the work on the page the way customers say it. Roof leak, roof replacement, storm damage. Not “exterior solutions.”",
        "Give each important service its own page, then link those pages from the homepage and the Google Business Profile.",
        "Match titles and headings to the search without stuffing every DFW city into one sentence.",
        "Measure the queries in Search Console. Keep the pages that earn impressions. Fix the ones that get ignored.",
      ],
    },
  },
  {
    slug: "local-pack",
    title: "The Local Pack, in plain English",
    eyebrow: "How people find you",
    description:
      "The Local Pack is the map and three businesses Google shows for nearby searches. Here is how it works for owners.",
    intro:
      "For many “near me” searches, Google does not start with ten blue links. It shows a map and a short list. That list is the Local Pack. If you are not in it, a lot of customers never scroll further.",
    sections: [
      {
        heading: "What it is",
        body: [
          "The Local Pack is the map module with a handful of businesses. Each listing usually shows name, rating, hours, and a path to call or get directions.",
          "Google weighs three practical things: how well you match the search, how close you are, and how established you look (reviews, mentions, a complete profile).",
        ],
      },
      {
        heading: "Why a business owner should care",
        body: [
          "This is often the last stop before a phone call. People tap Call from the pack without visiting a website.",
          "You cannot fake distance. You can make the business easier to recognize: the right categories, the right services, and a profile that matches the work you want.",
        ],
      },
      {
        heading: "What good looks like",
        body: [
          "The primary category matches the jobs you actually want. Secondary categories are honest, not a grab bag. Service areas are real cities you serve, not half of Texas.",
          "Photos look current. Hours are correct. The website linked from the pack lands on a page that confirms the same business, not a generic homepage from 2019.",
        ],
      },
      {
        heading: "What usually goes wrong",
        body: [
          "The primary category is vague. Service areas are blank or wildly broad. Photos are missing. The website and the pack tell two different stories.",
          "Fixing those basics is Local Pack work. It is not a ranking guarantee. It is making Google less confused about who you are.",
        ],
      },
      {
        heading: "What you can check this week",
        body: [
          "On your phone, search the service you sell plus “near me” from the area you actually work. Note who sits in the three pack spots.",
          "Open your own Google Business Profile and compare category, services, photos, and the website link to what a customer would expect. Gaps there are the first repairs.",
        ],
      },
    ],
    example: {
      heading: "How NOBLE would fix a Local Pack problem",
      setup:
        "A McKinney plumber used to sit in the pack for “water heater repair near me.” New companies near Adriatica and Trinity Falls filled in. The old profile still has one category and a service area that lists half of North Texas.",
      steps: [
        "Reset the primary category to the work they want, then add services Google can actually use.",
        "Shrink the service area to cities they drive, including McKinney, instead of a blob that makes Google less sure they belong there.",
        "Update photos and the website link so the pack result and the site tell the same story.",
        "Ask recent McKinney customers for reviews that mention the job and the town, then reply like a person.",
      ],
    },
  },
  {
    slug: "branded-search",
    title: "Branded search, in plain English",
    eyebrow: "How people find you",
    description:
      "Branded search is what appears when someone Googles your business name. That screen can help a sale or quietly undo it.",
    intro:
      "A customer hears your name from a neighbor, a truck wrap, or a review. Then they search the name. What Google shows next is branded search. It is a trust check.",
    sections: [
      {
        heading: "What it is",
        body: [
          "Branded search is every result around your exact name: your site, your Maps listing, review sites, social profiles, and sometimes news or complaints.",
          "You do not control every result. You do control whether your own pages and profile are complete, current, and easy to recognize.",
        ],
      },
      {
        heading: "Why a business owner should care",
        body: [
          "Referrals still go through Google. If the pack shows the wrong hours, an old address, or a thin profile, a warm lead cools off.",
          "A clean branded search says “this is a real business.” A messy one makes people keep looking.",
        ],
      },
      {
        heading: "What good looks like",
        body: [
          "Your website is the obvious first result. The Maps listing matches the name people actually use. Hours, phone, and address (or service area) are correct.",
          "Reviews have replies. Duplicate listings are cleaned up. If you changed names, the old name still points to the current business instead of a dead end.",
        ],
      },
      {
        heading: "What usually goes wrong",
        body: [
          "Duplicate listings. An old name still floating around. No clear homepage that matches the name people use. Review responses that never happen.",
          "The work is unglamorous: claim the right listing, align the name, and make the official site the obvious result.",
        ],
      },
      {
        heading: "What you can check this week",
        body: [
          "Google your exact business name and the nickname customers use. Screenshot the first screen. Ask a friend who does not work with you what they would do next.",
          "If they cannot tell how to call, where you work, or whether you are open, branded search is costing you jobs you already paid to earn.",
        ],
      },
    ],
    example: {
      heading: "How NOBLE would fix a branded search problem",
      setup:
        "A Plano dentist gets referrals from Legacy West offices. People Google the name and find an old suite number, Saturday hours that are no longer true, and a second listing from a previous partner.",
      steps: [
        "Claim or close the duplicate listing so one official profile remains.",
        "Correct hours, phone, and the website on the real listing. Branded search is a trust check, not a ranking contest.",
        "Make the homepage match the name people actually use, including any shorter name patients say out loud.",
        "Reply to visible reviews. Silence on a branded search screen looks like an abandoned office.",
      ],
    },
  },
  {
    slug: "google-maps",
    title: "Google Maps, in plain English",
    eyebrow: "How people find you",
    description:
      "Google Maps is where local intent often turns into a call. The listing has to be ready before the customer thinks twice.",
    intro:
      "Plenty of jobs start on a map. Someone is already in the car, already late, already comparing two pins. Google Maps is not a side channel. For local service businesses, it is often the storefront.",
    sections: [
      {
        heading: "What it is",
        body: [
          "Google Maps is the map product and the business profiles inside it. Your Google Business Profile is what customers see: photos, categories, reviews, hours, and the call button.",
          "A service area business still needs a profile that tells the truth about where you work. Hiding that only makes Google guess.",
        ],
      },
      {
        heading: "Why a business owner should care",
        body: [
          "Maps traffic is high intent. People are closer to hiring than someone reading a long article.",
          "If the pin is wrong, the category is wrong, or the photos look abandoned, they tap the next business.",
        ],
      },
      {
        heading: "What good looks like",
        body: [
          "The pin (or service area) matches reality. Categories and services match the jobs you want. Photos show real work, trucks, or the office, not stock images.",
          "Someone on your team watches Q&A, suggested edits, and review replies. The listing is treated like a storefront, not a one time setup.",
        ],
      },
      {
        heading: "What usually goes wrong",
        body: [
          "The profile was set up once and never touched. Categories drifted. Services were never added. Questions sit unanswered.",
          "Ongoing monitoring is part of Maps work. Google lets customers suggest edits. Someone should be watching.",
        ],
      },
      {
        heading: "What you can check this week",
        body: [
          "Open your listing in Google Maps as if you were a stranger. Tap Call, Directions, Website, and a few photos. Note anything outdated or empty.",
          "Compare that listing to your website. If they disagree on hours, cities, or services, fix the mismatch first. Maps will not guess in your favor.",
        ],
      },
    ],
    example: {
      heading: "How NOBLE would fix a Google Maps problem",
      setup:
        "An Irving company in Las Colinas has the pin in the wrong building. Travelers leaving the Toyota Music Factory search Maps, tap the listing, and get directions to a vacant suite.",
      steps: [
        "Move the pin and fix the suite number. Then search the business on a phone as a stranger would.",
        "Fill categories, services, and photos so the Maps card is useful before anyone hits the website.",
        "Match name, phone, and hours to the site. Airport and Music Factory traffic will not debug your listing for you.",
        "Watch suggested edits. Corridor listings get random customer changes. Catch them early.",
      ],
    },
  },
  {
    slug: "ai-powered-search",
    title: "AI powered search, in plain English",
    eyebrow: "How people find you",
    description:
      "AI powered search pulls answers from sources it can crawl and trust. Clear facts help. Hype does not.",
    intro:
      "Some customers now ask an AI tool who to hire. Those systems do not invent a trustworthy business out of thin air. They lean on pages, profiles, and mentions they can read.",
    sections: [
      {
        heading: "What it is",
        body: [
          "AI powered search is any result where software writes or assembles an answer instead of only listing links. It still depends on sources: your website, your Maps listing, reviews, and other public facts.",
          "NOBLE does not promise that an AI tool will name you. Nobody honest can. The useful work is making the business easy to understand so those systems have something solid to use.",
        ],
      },
      {
        heading: "Why a business owner should care",
        body: [
          "If two plumbers look the same online, an answer tool has no reason to prefer you. If one has clear services, a real location story, and consistent facts, that business is easier to cite.",
          "This is the same hygiene that helps classic Google Search. You are not running a separate “AI campaign.” You are making the record of the business less confusing.",
        ],
      },
      {
        heading: "What good looks like",
        body: [
          "Your site answers basic questions in plain language: what you do, who you serve, where you work, and what happens after someone calls.",
          "Name, address, phone, and services match across the site and Google. Reviews mention real jobs. There is enough unique detail that a machine (or a person) can tell you apart from the next listing.",
        ],
      },
      {
        heading: "What usually goes wrong",
        body: [
          "Thin pages that say nothing specific. Name, address, and phone that do not match. No reviews. No plain description of the work.",
          "Fix the basics first. Fancy AI messaging on top of a messy listing does not help.",
        ],
      },
      {
        heading: "What you can check this week",
        body: [
          "Ask a tool you already use a question a customer would ask, such as “best HVAC company in Plano for a same day repair,” then see whether your public information could even support an answer.",
          "If your site could not give a clear answer to a human, it will not give a clear answer to software. Start with those pages.",
        ],
      },
    ],
    example: {
      heading: "How NOBLE would fix an AI powered search problem",
      setup:
        "Two Arlington HVAC companies look the same online. Stock copy. “Serving DFW.” Someone asks a chat tool who to call for a same day repair near Globe Life Field. Neither business is specific enough to cite.",
      steps: [
        "Write plain pages that answer what you do, where you work, and what happens after the call.",
        "Make name, phone, and services match across the site and Google. Inconsistent facts make software skip you.",
        "Keep reviews that mention real jobs in Arlington, not only star counts.",
        "Skip the separate “AI campaign.” The same clarity that helps Google Search is what answer tools can read.",
      ],
    },
  },
  {
    slug: "reviews-and-entities",
    title: "Reviews and entities, in plain English",
    eyebrow: "How people find you",
    description:
      "Reviews and entities are how Google and customers decide you are a real business that does what you say.",
    intro:
      "An entity is just the idea of your business as a specific thing: a name, a place, a set of services. Reviews are first hand proof. Together they help people and search systems trust you.",
    sections: [
      {
        heading: "What it is",
        body: [
          "Entities are facts that should stay stable: business name, address or service area, phone, hours, and the work you do. When those facts match across the site and Google, you are easier to recognize.",
          "Reviews are public notes from customers. They help other humans, and they give search systems more language about what you actually do.",
        ],
      },
      {
        heading: "Why a business owner should care",
        body: [
          "A five star average with no detail is weaker than honest reviews that mention real jobs. “They replaced our AC in Fort Worth on a Saturday” is useful. “Great!” is not.",
          "You should never fake reviews. You can ask happy customers to share what happened, and you can reply like a person.",
        ],
      },
      {
        heading: "What good looks like",
        body: [
          "One spelling of the name. One phone number that actually rings. Cities and services that match how you really work. Reviews that mention the work, not only the vibe.",
          "You reply to reviews, including the hard ones, without scripts. Over time that public record is how both people and search systems get less confused.",
        ],
      },
      {
        heading: "What usually goes wrong",
        body: [
          "The name is spelled three ways. The phone on the site is not the phone on Maps. Reviews go unanswered. Old NAP information still sits on a directory from 2018.",
          "Cleanup is slow and worth it. Consistency is the whole game.",
        ],
      },
      {
        heading: "What you can check this week",
        body: [
          "Write your name, phone, address or service area, and top services on a notepad. Compare that list to your website, Google Business Profile, and one other listing.",
          "Anything that does not match is a fix. Then ask two recent happy customers for a specific review: what you did, where, and how it went.",
        ],
      },
    ],
    example: {
      heading: "How NOBLE would fix a reviews and entities problem",
      setup:
        "A Denton shop on the Square has three spellings of the name, a Facebook page that is current, and a Google listing that still uses the previous owner’s phone. Reviews say “Great!” and never mention downtown Denton.",
      steps: [
        "Pick one name, one phone, and one address or service area. Copy that list onto the site and the Google Business Profile.",
        "Close or correct leftover listings so Google is not holding two versions of the same shop.",
        "Ask regulars for reviews that mention the Square or the actual work. Reply without a script.",
        "Leave old directory pages for last. First make the official sources agree. That is the entity. Reviews are the proof.",
      ],
    },
  },
];
