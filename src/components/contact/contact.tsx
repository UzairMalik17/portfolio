import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contact">
      <Container>
        <div className="border-b border-[var(--border)] pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[var(--foreground)] sm:text-4xl">
            Let&apos;s build something useful.
          </h2>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[120px_minmax(0,1fr)]">
          <div />

          <div className="max-w-2xl">
            <p className="max-w-xl text-base leading-relaxed text-[var(--foreground-secondary)]">
              I&apos;m open to software engineering opportunities, interesting
              projects, and conversations about building practical software.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-4">
              <a
                className="inline-flex py-2 text-sm font-medium text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-8 transition-colors duration-200 hover:decoration-[var(--foreground)]"
                href={`mailto:${siteConfig.email}`}
              >
                Email
                <span className="ml-1.5" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a
                className="inline-flex py-2 text-sm font-medium text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-8 transition-colors duration-200 hover:decoration-[var(--foreground)]"
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
                className="inline-flex py-2 text-sm font-medium text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-8 transition-colors duration-200 hover:decoration-[var(--foreground)]"
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
      </Container>
    </section>
  );
}
