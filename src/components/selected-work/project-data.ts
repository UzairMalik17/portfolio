export type ProjectVisual = {
  src: string;
  alt: string;
};

export type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  capabilities: readonly string[];
  visual: ProjectVisual | null;
  href: string;
  linkLabel: string;
};

export const projects: readonly Project[] = [
  {
    number: "01",
    name: "StaysCo",
    category: "Professional contribution · Housing platform",
    description:
      "Contributed to the backend and frontend integration of a housing platform, focusing on property booking APIs, payment gateway integration, user account management, and authentication.",
    capabilities: [
      "Booking APIs",
      "Payments",
      "Authentication",
      "API Integration",
    ],
    visual: null,
    href: "https://www.staysco.com/en",
    linkLabel: "Visit StaysCo",
  },
  {
    number: "02",
    name: "TA Assessment API",
    category: "Backend / API engineering",
    description:
      "A NestJS backend for a recruitment assessment platform with role-based access control, transactional workflows, audit logging, validation, and documented REST APIs.",
    capabilities: ["RBAC", "Transactions", "Audit Logging", "Swagger"],
    visual: null,
    href: "https://github.com/UzairMalik17/ta-assessment-api",
    linkLabel: "View source",
  },
];
