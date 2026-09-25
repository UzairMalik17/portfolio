import { ProjectItem } from "./project-item";
import { projects } from "./project-data";
import { Reveal } from "../motion/reveal";

export function SelectedWork() {
  return (
    <section id="work">
      <div className="container">
        <Reveal>
          <div className="flex items-end justify-between gap-8 border-b border-[var(--border)] pb-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                Selected Work
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[var(--foreground)] sm:text-4xl">
                Projects I&apos;ve built and contributed to.
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[var(--foreground-muted)] md:block">
              A selection of software projects spanning full-stack applications
              and backend systems.
            </p>
          </div>
        </Reveal>

        <div>
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={(index + 1) * 100}>
              <div
                className={
                  index === projects.length - 1
                    ? ""
                    : "border-b border-[var(--border)]"
                }
              >
                <ProjectItem project={project} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
