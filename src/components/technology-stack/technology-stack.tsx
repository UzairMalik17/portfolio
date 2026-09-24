import { Container } from "@/components/layout/container";
import { technologyCategories } from "./technology-data";
import { TechnologyCategory } from "./technology-category";

export function TechnologyStack() {
  return (
    <section id="technology">
      <Container>
        <div className="border-b border-[var(--border)] pb-6">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
            Technology
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-[var(--foreground)] sm:text-4xl">
            The tools I use to build modern web applications.
          </h2>
        </div>

        <div className="grid gap-x-10 lg:grid-cols-2">
          {technologyCategories.map((category) => (
            <TechnologyCategory key={category.name} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
