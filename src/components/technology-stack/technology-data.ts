export type TechnologyCategory = {
  name: string;
  technologies: readonly string[];
};

export const technologyCategories: readonly TechnologyCategory[] = [
  {
    name: "Languages",
    technologies: ["JavaScript", "TypeScript", "SQL"],
  },
  {
    name: "Frontend",
    technologies: ["React", "Next.js", "Tailwind CSS", "MUI"],
  },
  {
    name: "Backend",
    technologies: ["Node.js", "NestJS", "Express.js"],
  },
  {
    name: "Databases",
    technologies: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    name: "ORMs",
    technologies: ["TypeORM", "Prisma"],
  },
  {
    name: "Integrations",
    technologies: [
      "Stripe",
      "Zoho CRM",
      "Follow Up Boss",
      "Third-party AI APIs",
    ],
  },
  {
    name: "Tools",
    technologies: ["Git", "GitHub", "n8n"],
  },
];
