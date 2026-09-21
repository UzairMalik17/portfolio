import Link from "next/link";

const navigationItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Open Source", href: "#open-source" },
  { label: "About", href: "#about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--background)]/95">
      <div className="container flex min-h-18 items-center justify-between gap-8">
        <Link
          className="shrink-0 text-[15px] font-semibold tracking-[-0.02em]"
          href="/"
        >
          Uzair Malik
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-7">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="text-[13px] font-medium text-[var(--foreground-secondary)] transition-colors duration-200 hover:text-[var(--foreground)]"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="shrink-0 text-[13px] font-medium text-[var(--foreground-secondary)] transition-colors duration-200 hover:text-[var(--foreground)]"
          href="https://github.com/UzairMalik17"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
