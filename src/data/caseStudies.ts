import type { AccordionMedia } from "../components/AccordionStack";
import dashboardMain from "../assets/figma/dashboard-main.jpg";
import dashboardSide1 from "../assets/figma/dashboard-side-1.jpg";
import dashboardSide2 from "../assets/figma/dashboard-side-2.jpg";
import lazexScreenshot from "../assets/figma/lazex-screenshot.png";

export type CaseStudyMeta =
  | { label: string; heading: string; body: string; list?: never }
  | { label: string; list: string[]; heading?: never; body?: never };

export type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  navLabel: string;
  images: AccordionMedia[];
  meta: CaseStudyMeta[];
  tags?: string[];
};

const lazexChallenges = [
  "Re-positioning of service for sign up conversion rate",
  "Enhancing Onboarding for User session duration",
  "Engagement optimisation for 구매 전환율? 거래로 이어지도록?",
];

export const caseStudies: CaseStudy[] = [
  {
    id: "investment-dashboard",
    eyebrow: "Finance • Web Platform • 2025",
    title: "Investment Dashboard",
    description:
      "Real-time portfolio tracking and analytics platform for institutional investors. Designed to handle complex financial data with intuitive visualizations and real-time updates.",
    navLabel: "Finance — Investment Dashboard",
    images: [
      {
        src: dashboardMain,
        alt: "Investment dashboard main view",
        badge: "Live Demo",
      },
      { src: dashboardSide1, alt: "Investment dashboard detail" },
      { src: dashboardSide2, alt: "Investment dashboard detail" },
    ],
    meta: [
      {
        label: "Role & Timeline",
        heading: "Lead Product Designer",
        body: "6 months • Designer, 3 Engineers, PM",
      },
      {
        label: "Key Challenges",
        list: [
          "Simplifying complex financial data visualization",
          "Real-time data synchronization across devices",
        ],
      },
      {
        label: "Outcomes",
        list: [
          "45% reduction in time-to-insight",
          "92% user satisfaction score",
        ],
      },
    ],
    tags: ["UI Design", "Data Viz", "Research", "Prototyping"],
  },
  {
    id: "lazex-web",
    eyebrow: "Fintech • Web Platform • 2024",
    title: "Cryptocurrency Trading Web App Platform",
    description:
      "Lazex was the brand new platform service. User needed to feel more worthy to try.",
    navLabel: "Fintech — Cryptocurrency Trading Web App",
    images: [
      { src: lazexScreenshot, alt: "Lazex trading platform screenshot" },
      {},
      {},
    ],
    meta: [
      {
        label: "Role & Timeline",
        heading: "Custom connect",
        body: "May 2023 - July 2024",
      },
      { label: "Key Challenges", list: lazexChallenges },
    ],
  },
  {
    id: "lazex-mobile",
    eyebrow: "Fintech • Mobile App • 2024",
    title: "Some mobile app projects",
    navLabel: "Fintech — Some Mobile App Projects",
    images: [{}, {}, {}],
    meta: [
      {
        label: "Role & Timeline",
        heading: "Custom connect",
        body: "May 2023 - July 2024",
      },
      { label: "Key Challenges", list: lazexChallenges },
    ],
  },
];
