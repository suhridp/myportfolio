// =====================================================================
//  PROFILE — your details in one place. Home, About, Resume, Contact
//  and the footer all read from this file.
// =====================================================================

const profile = {
  name: "Suhrid Behari Paul",
  shortName: "Suhrid",
  title: "AI researcher and engineer",
  location: "Kolkata, India",
  cv: "/Suhrid_Behari_Paul_CV.pdf",
  currentRole: {
    title: "Junior Research Fellow",
    org: "IIT Guwahati",
    unit: "Dept. of Computer Science and Engineering",
    since: "July 2026",
    focus: "Predictive inter-RAT handover in 5G/6G networks and the security of data-driven prediction",
  },
  email: "suhridpaul6@gmail.com",
  phone: "+91 8013549912",
  links: {
    github: "https://github.com/suhridp",
    linkedin: "https://www.linkedin.com/in/suhridpaul/",
  },

  // Rotating lines under your name on the home page
  taglines: [
    "Junior Research Fellow, IIT Guwahati",
    "Agentic AI and LLM evaluation",
    "Security of 5G/6G networks",
  ],

  intro:
    "I'm a Junior Research Fellow at IIT Guwahati. I build evaluation-first LLM systems that check their own outputs, and I'm now studying how tool-using AI agents fail and which safeguards actually help.",

  summary:
    "AI researcher and engineer (B.Tech IT, CGPA 9.57/10) with research experience in agentic AI, LLM-based query optimization, and the robustness and security of data-driven systems in 5G/6G networks. I build evaluation-first LLM systems that verify their own outputs, and I'm now turning that toward empirical study of how tool-using AI agents fail and how safeguards help.",

  experience: [
    {
      role: "Junior Research Fellow",
      org: "Indian Institute of Technology Guwahati",
      unit: "Dept. of Computer Science and Engineering",
      period: "July 2026 – Present",
      current: true,
      points: [
        "Research predictive inter-RAT handover in 5G/6G networks and the security implications of data-driven prediction.",
        "Evaluate handover decisions on radio measurements using simulation-driven experiments.",
        "Investigate the robustness of prediction mechanisms and potential vulnerabilities in next-generation wireless networks.",
      ],
    },
    {
      role: "Research Intern, Query Planning with Agentic AI",
      org: "New Jersey Institute of Technology, USA",
      period: "June – July 2025",
      certificate:
        "https://drive.google.com/file/d/1B2nP5HL_mkGygZOAWgAsmIK52Bqos90R/view?usp=sharing",
      points: [
        "Developed a probabilistic query-optimization framework for personalized top-k retrieval using LLM-based approaches.",
        "Explored ranking strategies to reduce computational overhead in interactive query-planning systems.",
        "Presented the work internationally at the NJIT URI Research Symposium 2025.",
      ],
    },
    {
      role: "Research Intern, Early Detection of DoS Attacks in 5G",
      org: "Indian Institute of Technology Guwahati",
      period: "June – July 2024",
      certificate:
        "https://drive.google.com/file/d/1ZtIOiPTqgt-iIDwm2r7ifoian8irsaag/view?usp=drive_link",
      points: [
        "Explored data-driven approaches for detecting Denial-of-Service attacks in 5G networks.",
        "Performed network-security analysis to support attack-detection and network-resilience research.",
      ],
    },
  ],

  skills: [
    { group: "Languages", items: ["Python", "SQL", "Java", "C"] },
    {
      group: "AI & LLMs",
      items: [
        "Agentic workflows",
        "LLM evaluation",
        "Adversarial robustness (5G)",
        "Retrieval",
        "Probabilistic query optimization",
      ],
    },
    {
      group: "Data & databases",
      items: ["Pandas", "NumPy", "PostgreSQL", "MySQL", "MongoDB", "Power BI"],
    },
    { group: "Tools", items: ["Git", "GitHub", "Streamlit", "MATLAB"] },
  ],

  education: [
    {
      school: "Heritage Institute of Technology, Kolkata",
      degree: "B.Tech in Information Technology",
      period: "2022 – 2026",
      grade: "CGPA 9.57/10",
    },
  ],

  achievements: [
    "International presenter, NJIT URI Research Symposium 2025",
    "Hult Prize campus finalist (top 5), Second Stitch initiative",
    "Team lead, Smart India Hackathon 2024",
    "Team lead, Diversion Hackathon 2025",
  ],
};

export default profile;
