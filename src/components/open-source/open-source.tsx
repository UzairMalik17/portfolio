import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { openSourceContributions } from "./open-source-data";
import { OpenSourceItem } from "./open-source-item";

export function OpenSource() {
  return (
    <section id="open-source">
      <Container>
        <Reveal>
          <div className="flex items-end justify-between gap-8 border-b border-[var(--border)] pb-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                Open Source
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[var(--foreground)] sm:text-4xl">
                Contributing beyond my own repositories.
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[var(--foreground-muted)] md:block">
              Contributions to existing codebases through features, fixes, and
              improvements.
            </p>
          </div>
        </Reveal>

        <div>
          {openSourceContributions.map((contribution, index) => (
            <Reveal key={contribution.repository} delay={(index + 1) * 100}>
              <div
                className={
                  index === openSourceContributions.length - 1
                    ? ""
                    : "border-b border-[var(--border)]"
                }
              >
                <OpenSourceItem
                  contribution={contribution}
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
