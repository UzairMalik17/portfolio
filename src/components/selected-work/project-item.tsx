import type { Project } from "./project-data";

type ProjectItemProps = {
  project: Project;
};

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="grid gap-8 py-10 lg:grid-cols-[120px_minmax(0,1fr)]">
      <div className="text-xs font-medium tracking-[0.12em] text-[var(--foreground-muted)]">
        {project.number}
      </div>

      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-3xl">
            {project.name}
          </h3>

          <p className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--foreground-muted)]">
            {project.category}
          </p>
        </div>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--foreground-secondary)]">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {project.capabilities.map((capability) => (
            <li
              key={capability}
              className="text-sm text-[var(--foreground-secondary)]"
            >
              {capability}
            </li>
          ))}
        </ul>

        <a
          className="mt-7 inline-flex text-sm font-medium text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-8 transition-colors duration-200 hover:decoration-[var(--foreground)]"
          href={project.href}
          target="_blank"
          rel="noreferrer"
        >
          {project.linkLabel}
          <span className="ml-1.5" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}
