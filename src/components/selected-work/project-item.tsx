import Image from "next/image";

import type { Project } from "./project-data";

type ProjectItemProps = {
  project: Project;
};

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article>
      <div className="grid gap-8 lg:grid-cols-[120px_minmax(0,1fr)]">
        <p className="text-sm font-medium text-[var(--foreground-muted)]">
          {project.number}
        </p>

        <div>
          <p className="text-sm font-medium text-[var(--foreground-muted)]">
            {project.category}
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[var(--foreground)] sm:text-4xl">
            {project.name}
          </h3>

          {project.visual && (
            <div className="relative mt-8 aspect-video w-full max-w-xl overflow-hidden rounded-sm border border-[var(--border)]">
              <Image
                src={project.visual.src}
                alt={project.visual.alt}
                fill
                sizes="(max-width: 640px) 100vw, 576px"
                className="object-cover"
              />
            </div>
          )}

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--foreground-secondary)]">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="text-sm text-[var(--foreground-muted)]"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {project.capabilities.map((capability) => (
              <span
                key={capability}
                className="text-sm text-[var(--foreground-secondary)]"
              >
                {capability}
              </span>
            ))}
          </div>

          <a
            className="mt-8 inline-flex py-2 text-sm font-medium text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-8 transition-colors duration-200 hover:decoration-[var(--foreground)]"
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
      </div>
    </article>
  );
}
