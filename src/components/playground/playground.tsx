import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { playgroundProjects } from "./playground-data";
import { PlaygroundItem } from "./playground-item";

export function Playground() {
  return (
    <section id="playground">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-8 border-b border-[var(--border)] pb-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                Playground
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[var(--foreground)] sm:text-4xl">
                Small experiments and technical explorations.
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[var(--foreground-muted)]">
              Projects that explore new technologies, interactions, and ideas
              outside my main work.
            </p>
          </div>
        </Reveal>

        <div>
          {playgroundProjects.map((project, index) => (
            <Reveal key={project.name} delay={(index + 1) * 100}>
              <div
                className={
                  index === playgroundProjects.length - 1
                    ? ""
                    : "border-b border-[var(--border)]"
                }
              >
                <PlaygroundItem
                  project={project}
                  number={String(index + 1).padStart(2, "0")}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
