export type Division = {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  detail: string;
  href: string;
  audience: string;
  tone: "professional" | "reflective" | "children";
};

export const divisions: Division[] = [
  {
    number: "01",
    title: "Public Health & Health Diplomacy",
    shortTitle: "Health & diplomacy",
    description:
      "Frontline practice, tuberculosis services, health systems, research, policy, and global health governance.",
    detail:
      "A professional and research space for verified field insights, health policy analysis, diplomacy, and collaboration.",
    href: "/public-health-diplomacy",
    audience: "Health professionals · Researchers · Policy communities",
    tone: "professional",
  },
  {
    number: "02",
    title: "Digital Innovation & Software",
    shortTitle: "Digital systems",
    description:
      "Digital health ideas, software projects, workflow design, and practical technology for real-world systems.",
    detail:
      "Project case studies will be published only after their scope, status, technical details, and privacy implications are reviewed.",
    href: "/digital-innovation",
    audience: "Developers · Health systems · Collaborators",
    tone: "professional",
  },
  {
    number: "03",
    title: "Islamic Reflections",
    shortTitle: "Reflections",
    description:
      "Adult-oriented reflections on Quranic contemplation, spirituality, ethics, knowledge, and purposeful living.",
    detail:
      "Reflections will distinguish personal commentary from sourced religious material and avoid presenting unverified narrations as authentic.",
    href: "/reflections",
    audience: "Adults · Learners · Reflective readers",
    tone: "reflective",
  },
  {
    number: "04",
    title: "Islamic Children's Learning Studio",
    shortTitle: "Children's learning",
    description:
      "A separate, child-safe educational space for stories, duas, character, Arabic basics, and curiosity about creation.",
    detail:
      "Children's media will use age-aware storytelling, source checks, parent-facing information, and privacy-first design.",
    href: "/kids-learning",
    audience: "Children · Parents · Educators",
    tone: "children",
  },
];
