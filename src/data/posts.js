// =====================================================================
//  BLOG POSTS — newest first. Each post gets its own page at /blog/<slug>.
//
//  body is a list of blocks:
//    "plain string"            → a paragraph
//    { h: "Heading" }          → a section heading
//    { list: ["a", "b"] }      → a bullet list
//    { code: "SELECT 1;" }     → a code block
//
//  The two posts below are starter drafts written from your resume.
//  Edit them in your own words or delete them before publishing.
// =====================================================================

const posts = [
  {
    slug: "query-rewrites-rarely-helped",
    title: "My NL-to-SQL agent's query rewrites rarely helped",
    date: "2026-10-20",
    summary:
      "I benchmarked LLM-proposed SQL rewrites with EXPLAIN ANALYZE. The PostgreSQL planner was already near-optimal on most queries.",
    tags: ["LLM agents", "PostgreSQL", "Evaluation"],
    body: [
      "I've been building a natural-language-to-SQL agent on PostgreSQL. Beyond turning questions into queries, I wanted to know whether the agent could make those queries faster by rewriting them.",
      { h: "Safety first" },
      "Before any optimisation, the agent needs to be unable to damage the database. It has two independent layers: a validator that parses each statement with SQLGlot and rejects anything that isn't a read, and a database role that only has read permissions.",
      "Against my set of destructive test statements, each layer on its own blocked 11 of 11. Having both means one can fail without the database being exposed.",
      { h: "Measuring rewrites" },
      "For each query I ran the original and the rewritten version under EXPLAIN ANALYZE and compared the actual execution times.",
      "The rewrite helped on 2 of 12 queries. On the rest, the planner had already found an equivalent or better plan, so the rewrite added latency and LLM cost without a benefit.",
      { h: "What I took from it" },
      {
        list: [
          "Measure before optimising: the planner is a strong baseline.",
          "Rewrites should be gated on evidence, such as a slow plan, rather than applied to every query.",
          "Safety layers are worth testing separately, not only together.",
        ],
      },
    ],
  },
  {
    slug: "measuring-agent-safeguards",
    title: "Measuring whether agent safeguards actually work",
    date: "2026-10-05",
    summary:
      "How I'm setting up a sandbox to score unsafe actions by tool-using agents under prompt injection, and comparing safeguards fairly.",
    tags: ["AI safety", "Agents", "Evaluation"],
    body: [
      "Tool-using agents can be steered into unsafe actions by instructions hidden in the content they read. Lots of safeguards are proposed for this, but it's hard to tell how much each one helps.",
      { h: "The setup" },
      "I built a sandboxed harness with simulated tools, so nothing real can be harmed. It has 5 tasks and 3 styles of prompt injection.",
      "Unsafe actions are scored deterministically from the tool-call logs rather than by another model, so the score doesn't depend on a judge's opinion.",
      { h: "What gets compared" },
      {
        list: [
          "A baseline agent with no extra protection",
          "Prompt hardening",
          "Input filtering",
          "Layered safeguards combining the above",
        ],
      },
      "For each, I report the unsafe-action rate with confidence intervals, alongside task completion and the false-blocking rate. A safeguard that blocks everything looks safe but isn't useful, so those last two numbers matter as much as the first.",
      { h: "Next" },
      "The harness is working; the next step is running it against real models.",
    ],
  },
];

export default posts;
