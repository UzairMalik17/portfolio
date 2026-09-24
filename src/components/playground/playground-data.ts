export type PlaygroundProject = {
  name: string;
  category: string;
  description: string;
  technologies: readonly string[];
  status: "In progress" | "Completed";
  href: string;
  linkLabel: string;
};

export const playgroundProjects: readonly PlaygroundProject[] = [
  {
    name: "DevFlow AI",
    category: "AI developer tooling",
    description:
      "A repository-aware AI developer assistant for exploring and understanding existing codebases.",
    technologies: ["Next.js", "TypeScript", "AI"],
    status: "In progress",
    href: "https://github.com/UzairMalik17/devflow-ai",
    linkLabel: "View source",
  },
  {
    name: "Car Cleaning Playable",
    category: "Interactive playable · Phaser 3",
    description:
      "An interactive car-cleaning playable advertisement built as part of a Phaser 3 assessment.",
    technologies: ["Phaser 3", "JavaScript", "HTML"],
    status: "Completed",
    href: "https://github.com/UzairMalik17/car-cleaning-playable",
    linkLabel: "View source",
  },
];
