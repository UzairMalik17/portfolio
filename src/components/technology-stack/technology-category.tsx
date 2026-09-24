import type { TechnologyCategory as TechnologyCategoryData } from "./technology-data";

type TechnologyCategoryProps = {
  category: TechnologyCategoryData;
};

export function TechnologyCategory({ category }: TechnologyCategoryProps) {
  return (
    <div className="border-b border-[var(--border)] py-8">
      <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground-muted)]">
        {category.name}
      </h3>

      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {category.technologies.map((technology) => (
          <li
            key={technology}
            className="text-base text-[var(--foreground-secondary)]"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}
