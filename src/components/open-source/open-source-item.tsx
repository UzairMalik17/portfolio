import type { OpenSourceContribution } from "./open-source-data";

type OpenSourceItemProps = {
  contribution: OpenSourceContribution;
  number: string;
};
export function OpenSourceItem({ contribution, number }: OpenSourceItemProps) {
  return (
    <article className="grid gap-8 py-10 lg:grid-cols-[120px_minmax(0,1fr)]">
      <p className="text-sm font-medium text-[var(--foreground-muted)]">
        {number}
      </p>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-3xl">
            {contribution.repository}
          </h3>

          <p className="text-sm text-[var(--foreground-muted)]">
            {contribution.mergedPrs} merged{" "}
            {contribution.mergedPrs === 1 ? "PR" : "PRs"}
          </p>
        </div>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--foreground-secondary)]">
          {contribution.description}
        </p>

        <a
          className="mt-6 inline-flex py-2 text-sm font-medium text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-8 transition-colors duration-200 hover:decoration-[var(--foreground)]"
          href={contribution.href}
          target="_blank"
          rel="noreferrer"
        >
          View repository
          <span className="ml-1.5" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}
