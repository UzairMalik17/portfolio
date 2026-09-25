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
    technologies: ["Node.js", "NestJS", "Express.js", "TypeORM", "Prisma"],
  },
  {
    name: "Databases",
    technologies: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    name: "Integrations",
    technologies: ["Stripe", "Zoho CRM", "Follow Up Boss"],
  },
  {
    name: "Tools",
    technologies: ["Git", "GitHub", "n8n"],
  },
];
