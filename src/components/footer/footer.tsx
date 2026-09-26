import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="pt-12">
      <div className="border-t border-[var(--border)]">
        <Container>
          <div className="flex items-center justify-between py-6">
            <p className="text-xs text-[var(--foreground-muted)]">
              &copy; {new Date().getFullYear()} Uzair Malik
            </p>

            <a
              className="inline-flex py-2 text-xs text-[var(--foreground-muted)] transition-colors duration-200 hover:text-[var(--foreground)]"
              href="#top"
            >
              Back to top
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
