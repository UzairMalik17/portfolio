import { Reveal } from "@/components/motion/reveal";
import { ExperienceItem } from "./experience-item";
import { experiences } from "./experience-data";

export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <div className="flex items-end justify-between gap-8 border-b border-[var(--border)] pb-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
                Experience
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[var(--foreground)] sm:text-4xl">
                Where I&apos;ve worked and contributed.
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[var(--foreground-muted)] md:block">
              Professional experience across web applications, backend systems,
              integrations, and internal tools.
            </p>
          </div>
        </Reveal>

        <div>
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={(index + 1) * 100}>
              <div
                className={
                  index === experiences.length - 1
                    ? ""
                    : "border-b border-[var(--border)]"
                }
              >
                <ExperienceItem experience={experience} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
