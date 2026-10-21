import type { CarouselItem } from "../../components/common/Carousel/Carousel";

import hero1 from "../../assets/images/hero/hero1.jpg";
import hero2 from "../../assets/images/hero/hero2.jpg";
import hero3 from "../../assets/images/hero/hero3.jpg";

export const homeCarouselData: CarouselItem[] = [
  {
    id: 1,
    title: "INDIA'S BUSINESS MARKETPLACE",
    subTitle: "Give Your Business a Second Chance",
    description:
      "Sell, buy or revive businesses with ReBusi. Find opportunities that deserve another chance.",
    image: hero1,
    buttonText: "Explore Marketplace",
    buttonLink: "/marketplace",
  },
  {
    id: 2,
    title: "BUY AN EXISTING BUSINESS",
    subTitle: "Don't Start From Zero",
    description:
      "Buy a business that already has customers, operations and potential.",
    image: hero2,
    buttonText: "Check Health Score",
    buttonLink: "/buy-business",
  },
  {
    id: 3,
    title: "BUSINESS HEALTH DIAGNOSTIC",
    subTitle: "Revive What You Built",
    description: "Understand your business health and discover its value.",
    image: hero3,
    buttonText: "Get Started",
    buttonLink: "/toolkit",
  },
];
export interface HomeStep {
  icon: string;
  title: string;
  desc: string;
}

export interface HomePillar {
  number: string;
  icon: string;
  title: string;
  desc: string;
  links: string[];
}

export interface HomeTestimonial {
  quote: string;
  name: string;
  role: string;
  initial: string;
}

export const sellerSteps: HomeStep[] = [
  {
    icon: "🩺",
    title: "Run the Health Diagnostic",
    desc: "Free, 10 minutes, no signup. Get an honest health score and an indicative valuation range.",
  },
  {
    icon: "📝",
    title: "List — full, partial, or stock sale",
    desc: "Your valuation carries over automatically. Listing goes live after a 4-hour verification.",
  },
  {
    icon: "🔐",
    title: "Only verified buyers see your data",
    desc: "Buyers complete KYC and sign an NDA via Aadhaar eSign before any financials are shared.",
  },
  {
    icon: "🤝",
    title: "Close in the Deal Room, recover your money",
    desc: "Due diligence, LOI, and closing — all tracked, with funds settled via escrow.",
  },
];

export const buyerSteps: HomeStep[] = [
  {
    icon: "🔎",
    title: "Browse verified listings",
    desc: "Filter by sector, location, price, and Health Score. See real financial summaries upfront.",
  },
  {
    icon: "🪪",
    title: "Verify & sign the NDA",
    desc: "Quick KYC and Aadhaar eSign unlocks full financials, licences, and the seller's identity.",
  },
  {
    icon: "🧮",
    title: "Due diligence, with help if you need it",
    desc: "Use the Deal Room's task checklist, or add a CA or deal advisor from our consultant network.",
  },
  {
    icon: "🔑",
    title: "Close and take over — with a head start",
    desc: "Finance the purchase through our lending partners if needed, and start with real customers, not zero.",
  },
];

export const pillars: HomePillar[] = [
  {
    number: "01",
    icon: "🏢",
    title: "Marketplace",
    desc: "Buy or sell a business, franchise, commercial space, or equipment — fully or in part, verified end to end.",
    links: ["Buy a business", "Sell your business", "Browse franchises"],
  },
  {
    number: "02",
    icon: "🩺",
    title: "Revive & Diagnose",
    desc: "A free 10-minute health check scores your business across 7 dimensions and tells you honestly what it's worth.",
    links: ["Run the Health Diagnostic", "Talk to a turnaround advisor"],
  },
  {
    number: "03",
    icon: "💳",
    title: "Finance",
    desc: "Acquisition loans, working capital, and equipment finance from 12+ NBFC and bank partners — decisions in 48 hours.",
    links: ["Check loan eligibility", "Calculate your EMI"],
  },
  {
    number: "04",
    icon: "📚",
    title: "Toolkit Library",
    desc: "24 ready-made templates — business plans, NDAs, marketing canvases, HR kits — so you don't start every document from zero.",
    links: ["Browse templates", "Get the Seller Readiness Kit"],
  },
];

export const testimonials: HomeTestimonial[] = [
  {
    quote:
      "I thought closing meant losing everything. ReBusi got me a buyer for my restaurant within three weeks — I walked away with enough to start again, properly this time.",
    name: "Rajesh Kulkarni",
    role: "Former restaurant owner, Nashik",
    initial: "R",
  },
  {
    quote:
      "The Health Diagnostic told me things about my own business I hadn't put into words. It also gave me the confidence to actually list it instead of just shutting the doors.",
    name: "Priya Deshmukh",
    role: "Boutique owner, Pune",
    initial: "P",
  },
  {
    quote:
      "I bought a struggling cloud kitchen instead of starting from scratch. Verified financials, real customer data — I skipped a year of guessing.",
    name: "Vikram Shah",
    role: "First-time buyer, Mumbai",
    initial: "V",
  },
];
