import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";

export function About() {
  return (
    <section id="about">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-8 border-b border-[var(--border)] pb-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                About
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[var(--foreground)] sm:text-4xl">
                How I approach software development.
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[var(--foreground-muted)] md:block">
              Building practical software with a focus on clarity,
              maintainability, and useful technology.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid gap-8 lg:grid-cols-[120px_minmax(0,1fr)]">
            <div />

            <div className="max-w-2xl">
              <div className="flex flex-col gap-6 text-base leading-relaxed text-[var(--foreground-secondary)]">
                <p>
                  I&apos;m a software engineer focused on modern web
                  applications, backend systems, and API development. I enjoy
                  working across the stack, from designing application
                  interfaces to building the services and integrations behind
                  them.
                </p>

                <p>
                  I care about understanding the problem before reaching for a
                  solution, keeping systems straightforward to work with, and
                  writing software that can evolve as its requirements change.
                </p>

                <p>
                  More recently, I&apos;ve been exploring AI-enhanced software
                  and how AI can be integrated into practical applications
                  rather than treated as a feature on its own.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
