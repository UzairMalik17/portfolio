import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";
import { Reveal } from "@/components/motion/reveal";

export function Contact() {
  return (
    <section id="contact">
      <Container>
        <Reveal>
          <div className="border-b border-[var(--border)] pb-6">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[var(--foreground)] sm:text-4xl">
              Let&apos;s build something useful.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid gap-10 lg:grid-cols-[120px_minmax(0,1fr)]">
            <div />

            <div className="max-w-2xl">
              <p className="max-w-xl text-base leading-relaxed text-[var(--foreground-secondary)]">
                I&apos;m open to software engineering opportunities and projects
                involving modern web systems and practical AI-enhanced software.
              </p>

              <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
                <a
                  className="inline-flex py-2 text-sm font-medium text-[var(--foreground)] underline decoration-[var(--accent)] underline-offset-8 transition-colors duration-200 hover:decoration-[var(--accent-strong)]"
                  href={`mailto:${siteConfig.email}`}
                >
                  Email me
                  <span className="ml-1.5" aria-hidden="true">
                    ↗
                  </span>
                </a>

                <a
                  className="inline-flex py-2 text-sm text-[var(--foreground-secondary)] underline decoration-[var(--foreground-muted)] underline-offset-8 transition-colors duration-200 hover:text-[var(--foreground)] hover:decoration-[var(--foreground)]"
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <span className="ml-1.5" aria-hidden="true">
                    ↗
                  </span>
                </a>

                <a
                  className="inline-flex py-2 text-sm text-[var(--foreground-secondary)] underline decoration-[var(--foreground-muted)] underline-offset-8 transition-colors duration-200 hover:text-[var(--foreground)] hover:decoration-[var(--foreground)]"
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                  <span className="ml-1.5" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
