// =====================================================================
//  PROJECTS — edit this file to add or update projects.
//  Each entry renders automatically on the Projects page.
//
//  Fields:
//    id          unique short string
//    title       project name
//    category    "Research" | "Independent" | "Hackathon" | "Product"  (used by the filters)
//    org         where / for whom it was built
//    period      when (free text, e.g. "Summer 2025")
//    status      optional badge, e.g. "In development"
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

const projects = [
  {
    id: "inter-rat-handover",
    title: "Predictive Inter-RAT Handover in 5G/6G",
    category: "Research",
    org: "IIT Guwahati, Dept. of CSE",
    period: "July 2026 – Present",
    status: "Current role",
    role: "Junior Research Fellow",
    summary:
      "Studying data-driven handover prediction between radio access technologies, and how that prediction can be attacked.",
    highlights: [
      "Evaluating handover decisions on radio measurements with simulation-driven experiments",
      "Investigating the robustness of prediction mechanisms and vulnerabilities in next-generation networks",
    ],
    stack: ["5G/6G", "Simulation", "Adversarial robustness", "MATLAB"],
    image: null,
    links: {},
    featured: true,
  },
  {
    id: "agent-failure-modes",
    title: "Failure Modes and Safeguards in Tool-Using AI Agents",
    category: "Independent",
    org: "Independent research project",
    period: "2026",
    status: "In development",
    role: "Sole researcher",
    summary:
      "A sandboxed harness that measures how often tool-using agents take unsafe actions under prompt injection, and how much each safeguard reduces that.",
    highlights: [
      "Simulated tools across 5 tasks and 3 injection styles, with unsafe actions scored deterministically from tool-call logs",
      "Compares a baseline agent against prompt hardening, input filtering and layered safeguards",
      "Reports unsafe-action rate with confidence intervals alongside task completion and false-blocking rate",
      "Next step: evaluation on real models",
    ],
    stack: ["Python", "LLM APIs", "Agent evaluation"],
    image: null,
    links: { github: "https://github.com/suhridp/agent-safety-eval" },
    featured: true,
  },
  {
    id: "research-analyst-agent",
    title: "Agentic Research Analyst with Evidence Verification",
    category: "Independent",
    org: "Independent project",
    period: "2026",
    status: "In development",
    role: "Design & implementation",
    summary:
      "A multi-stage agent that checks every claim against the passage it cites, drops unsupported claims, and abstains when the evidence isn't there.",
    highlights: [
      "Pipeline of planner, retrieval, extractor, verifier, synthesizer and critic stages",
      "RAG baseline for comparison",
      "Evaluation harness with tests: Recall@k, unsupported-claim rate, abstention accuracy, latency and cost",
    ],
    stack: ["Python", "Anthropic API", "BM25", "RAG"],
    image: null,
    links: { github: "https://github.com/suhridp/agentic-research-analyst" },
    featured: true,
  },
  {
    id: "nl-to-sql",
    title: "Natural-Language-to-SQL Agent with Query Optimization",
    category: "Independent",
    org: "Independent project",
    period: "2026",
    status: "In development",
    role: "Design & implementation",
    summary:
      "A PostgreSQL agent with SQL validation, read-only execution, error repair and clarifying questions, plus a benchmark of whether query rewrites actually help.",
    highlights: [
      "The validator and the read-only role each blocked 11 of 11 destructive test statements",
      "Benchmarked rewrites with EXPLAIN ANALYZE: the planner was already near-optimal on most queries, and rewriting helped on 2 of 12",
    ],
    stack: ["Python", "PostgreSQL", "SQLGlot"],
    image: null,
    links: { github: "https://github.com/suhridp/nl2sql-agent-postgres" },
    featured: true,
  },
  {
    id: "agentic-query-planner",
    title: "Query Planning with Agentic AI",
    category: "Research",
    org: "New Jersey Institute of Technology, USA",
    period: "June – July 2025",
    role: "Research intern",
    summary:
      "A probabilistic query-optimization framework for personalized top-k retrieval using LLM-based approaches.",
    highlights: [
      "Explored ranking strategies that cut computational overhead in interactive query planning",
      "Presented internationally at the NJIT URI Research Symposium 2025",
    ],
    stack: ["Python", "LLMs", "Probabilistic models", "Top-k retrieval"],
    image: queryagentic,
    links: {
      certificate:
        "https://drive.google.com/file/d/1B2nP5HL_mkGygZOAWgAsmIK52Bqos90R/view?usp=sharing",
    },
  },
  {
    id: "dos-detection",
    title: "Early Detection of DoS Attacks in 5G",
    category: "Research",
    org: "IIT Guwahati",
    period: "June – July 2024",
    role: "Research intern",
    summary:
      "Data-driven approaches for detecting Denial-of-Service attacks in 5G networks.",
    highlights: [
      "Network-security analysis supporting attack-detection and resilience research",
    ],
    stack: ["Python", "Network security", "5G"],
    image: dosattack,
    links: {
      certificate:
        "https://drive.google.com/file/d/1ZtIOiPTqgt-iIDwm2r7ifoian8irsaag/view?usp=drive_link",
    },
  },
  {
    id: "2nd-stitch",
    title: "Second Stitch",
    category: "Product",
    org: "Hult Prize On Campus — Top 5 finalist",
    period: "2024",
    role: "Product & UI/UX",
    summary:
      "A thrifted-fashion platform pitched to promote a circular fashion economy, covering the digital storefront and its environmental impact.",
    highlights: [
      "Campus finalist (top 5) at the Hult Prize",
      "Designed the digital thrift store experience end to end",
    ],
    stack: ["Figma", "UI/UX", "Pitching"],
    image: thriftshop,
    links: {},
  },
  {
    id: "guardianeye",
    title: "GuardianEye",
    category: "Hackathon",
    org: "Smart India Hackathon 2024",
    period: "2024",
    role: "Team lead",
    summary:
      "A Flutter app for women's safety with real-time alerts, emergency contacts and live geolocation tracking.",
    highlights: [
      "One-tap SOS that notifies saved emergency contacts",
      "Live location sharing during an alert",
    ],
    stack: ["Flutter", "Dart", "Geolocation"],
    image: editor,
    links: { github: "https://github.com/suhridp" },
  },
  {
    id: "edumate",
    title: "EduMate",
    category: "Hackathon",
    org: "Diversion Hackathon 2025",
    period: "2025",
    role: "Team lead",
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
    highlights: ["Product listings designed around the craft and its maker"],
    stack: ["React", "CSS"],
    image: editor,
    links: { github: "https://github.com/suhridp" },
  },
];

export default projects;
