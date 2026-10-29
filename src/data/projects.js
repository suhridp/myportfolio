// =====================================================================
//  PROJECTS — edit this file to add or update projects.
//  Each entry renders automatically on the Projects page.
//
//  Fields:
//    id          unique short string
//    title       project name
//    category    "Research" | "Hackathon" | "Product"  (used by the filters)
//    org         where / for whom it was built
//    period      when (free text, e.g. "Summer 2025")
//    role        what you did on it
//    summary     1–2 sentence overview
//    highlights  bullet points shown when the card is expanded
//    stack       technologies (shown as tags)
//    image       imported image (see imports below) or null
//    links       { github, demo, certificate, paper } — any can be omitted
//    featured    true = shown large at the top
// =====================================================================

import thriftshop from "../Assets/Projects/thriftshop.jpg";
import editor from "../Assets/Projects/codeEditor.png";
import queryagentic from "../Assets/Projects/queryagentic.jpg";
import dosattack from "../Assets/Projects/dosattack.png";
import blog from "../Assets/Projects/blog.png";

const projects = [
  {
    id: "agentic-query-planner",
    title: "Agentic AI Query Planner",
    category: "Research",
    org: "New Jersey Institute of Technology, USA",
    period: "Research internship",
    role: "Research intern",
    summary:
      "A framework for efficient personalized top-k set queries using LLMs, with probabilistic models guiding user-defined query plans.",
    highlights: [
      "Designed an agentic planner that decides when an LLM call is worth its cost",
      "Reduced computational cost of top-k set queries over large candidate sets",
      "Modelled user preferences probabilistically to support custom planning",
    ],
    stack: ["Python", "LLMs", "Agentic AI", "Probabilistic models"],
    image: queryagentic,
    links: {
      certificate:
        "https://drive.google.com/file/d/1B2nP5HL_mkGygZOAWgAsmIK52Bqos90R/view?usp=drive_link",
    },
    featured: true,
  },
  {
    id: "dos-detection",
    title: "DoS Attack Detection",
    category: "Research",
    org: "IIT Guwahati",
    period: "Research internship",
    role: "Research intern · co-author",
    summary:
      "Designed and tested security protocols to detect and mitigate Denial-of-Service attacks, and co-authored a paper on modern cybersecurity frameworks.",
    highlights: [
      "Built and evaluated detection protocols against simulated DoS traffic",
      "Studied mitigation strategies for network-level attacks",
      "Co-authored a research paper on cybersecurity frameworks",
    ],
    stack: ["Network Security", "Python", "Traffic analysis"],
    image: dosattack,
    links: {
      certificate:
        "https://drive.google.com/file/d/1ZtIOiPTqgt-iIDwm2r7ifoian8irsaag/view?usp=drive_link",
    },
    featured: true,
  },
  {
    id: "2nd-stitch",
    title: "2nd Stitch",
    category: "Product",
    org: "Hult Prize On Campus 2024 — Finalist",
    period: "2024",
    role: "Product & UI/UX",
    summary:
      "A thrifted-fashion platform pitched to promote a circular fashion economy, covering the digital storefront and its environmental impact.",
    highlights: [
      "Reached the finals of Hult Prize On Campus 2024",
      "Designed the digital thrift store experience end to end",
      "Built the pitch around measurable environmental impact",
    ],
    stack: ["Figma", "UI/UX", "Pitching"],
    image: thriftshop,
    links: { github: "https://github.com/suhridp" },
  },
  {
    id: "guardianeye",
    title: "GuardianEye",
    category: "Hackathon",
    org: "Smart India Hackathon 2024",
    period: "2024",
    role: "Mobile developer",
    summary:
      "A Flutter app for women's safety with real-time alerts, emergency contacts and live geolocation tracking.",
    highlights: [
      "One-tap SOS that notifies saved emergency contacts",
      "Live location sharing during an alert",
      "Built and demoed within the hackathon window",
    ],
    stack: ["Flutter", "Dart", "Geolocation"],
    image: editor,
    links: { github: "https://github.com/suhridp" },
  },
  {
    id: "edumate",
    title: "EduMate",
    category: "Hackathon",
    org: "Diversion 2024",
    period: "2024",
    role: "Full-stack developer",
    summary:
      "A web app that streamlines workflows inside institutes, focused on student–faculty collaboration and resource management.",
    highlights: [
      "Shared spaces for students and faculty to exchange material",
      "Resource tracking to cut down on manual coordination",
    ],
    stack: ["React", "Node.js"],
    image: editor,
    links: { github: "https://github.com/suhridp" },
  },
  {
    id: "artisan",
    title: "Artisan",
    category: "Hackathon",
    org: "Smart India Hackathon 2023",
    period: "2023",
    role: "Frontend developer",
    summary:
      "A React storefront that lets Kashmiri artisans showcase and sell handcrafted products to a wider audience.",
    highlights: [
      "Product listings designed around the craft and its maker",
      "Improved reach and visibility for small artisans",
    ],
    stack: ["React", "CSS"],
    image: editor,
    links: { github: "https://github.com/suhridp" },
  },
  {
    id: "portfolio-blogs",
    title: "Portfolio & Blogs",
    category: "Product",
    org: "Personal",
    period: "Ongoing",
    role: "Design & development",
    summary:
      "This site and my blog: a markdown-driven blog system with responsive dark mode and fast loading.",
    highlights: [
      "Markdown-based blog posts with dynamic routing",
      "Light and dark themes, responsive down to mobile",
    ],
    stack: ["React", "Next.js", "Tailwind CSS"],
    image: blog,
    links: {
      github: "https://github.com/suhridp/myportfolio",
      demo: "https://suhridblogs.vercel.app/",
    },
  },
];

export default projects;
