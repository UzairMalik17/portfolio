import { siteConfig } from "@/config/site";
import { Container } from "../layout/container";

export function Hero() {
  return (
    <section>
      <Container>
        <div className="flex min-h-[calc(100vh-72px)] flex-col justify-center">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
            Software Engineer
          </p>

          <h1 className="mt-5 max-w-4xl wrap-break-word text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--foreground)] sm:text-6xl md:text-7xl lg:text-[88px]">
            I build reliable web applications and AI-enhanced software.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--foreground-secondary)]">
            Software engineer focused on modern web systems, thoughtful
            interfaces, and practical AI-powered applications.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a
              className="inline-flex py-2 text-sm font-medium text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-8 transition-colors duration-200 hover:decoration-[var(--foreground)]"
              href="#work"
            >
              View my work
            </a>

            <a
              className="inline-flex py-2 text-sm font-medium text-[var(--foreground-secondary)] transition-colors duration-200 hover:text-[var(--foreground)]"
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
