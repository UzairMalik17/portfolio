import type { PlaygroundProject } from "./playground-data";

type PlaygroundItemProps = {
  project: PlaygroundProject;
  number: string;
};

export function PlaygroundItem({ project, number }: PlaygroundItemProps) {
  return (
    <article className="grid gap-8 py-10 lg:grid-cols-[120px_minmax(0,1fr)]">
      <p className="text-sm font-medium text-[var(--accent)]">{number}</p>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-3xl">
            {project.name}
          </h3>

          <p className="text-sm text-[var(--foreground-muted)]">
            {project.status}
          </p>
        </div>

        <p className="mt-2 text-sm font-medium text-[var(--foreground-secondary)]">
          {project.category}
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--foreground-secondary)]">
          {project.description}
        </p>

        <ul className="mt-6 flex list-none flex-wrap gap-x-5 gap-y-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="text-sm text-[var(--foreground-muted)]"
            >
              {technology}
            </li>
          ))}
        </ul>

        <a
          className="mt-6 inline-flex py-2 text-sm font-medium text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-8 transition-colors duration-200 hover:decoration-[var(--accent-strong)]"
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
