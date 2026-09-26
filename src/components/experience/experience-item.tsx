import type { experiences } from "./experience-data";

type Experience = (typeof experiences)[number];

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="grid gap-8 py-10 lg:grid-cols-[120px_minmax(0,1fr)]">
      <div className="text-xs font-medium tracking-[0.12em] text-[var(--accent)]">
        {experience.period}
      </div>

      <div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[var(--foreground)]">
              {experience.company}
            </h3>

            <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
              {experience.role}
            </p>
          </div>

          <p className="text-sm text-[var(--foreground-muted)]">
            {experience.location}
          </p>
        </div>

        <ul className="mt-7 max-w-3xl space-y-4">
          {experience.contributions.map((contribution) => (
            <li
              key={contribution}
              className="relative pl-5 text-base leading-relaxed text-[var(--foreground-secondary)] before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--foreground-muted)]"
            >
              {contribution}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
