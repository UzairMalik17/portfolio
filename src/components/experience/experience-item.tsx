import type { experiences } from "./experience-data";

type Experience = (typeof experiences)[number];

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article>
      <div className="grid gap-8 lg:grid-cols-[120px_minmax(0,1fr)]">
        <p className="text-sm font-medium text-[var(--foreground-muted)]">
          {experience.period}
        </p>

        <div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <h3 className="text-3xl font-semibold tracking-[-0.035em] text-[var(--foreground)] sm:text-4xl">
                {experience.company}
              </h3>

              <p className="mt-2 text-sm font-medium text-[var(--foreground-secondary)]">
                {experience.role}
              </p>
            </div>

            <p className="text-sm text-[var(--foreground-muted)]">
              {experience.location}
            </p>
          </div>

          <ul className="mt-8 flex max-w-3xl flex-col gap-4">
            {experience.contributions.map((contribution) => (
              <li
                key={contribution}
                className="relative pl-5 text-base leading-relaxed text-[var(--foreground-secondary)] before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--foreground-muted)]"
              >
                {contribution}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {experience.technologies.map((technology) => (
              <span
                key={technology}
                className="text-sm text-[var(--foreground-muted)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
