import type { PropsWithChildren } from "react";

import { Container } from "./container";

type SectionProps = PropsWithChildren;

export function Section({ children }: SectionProps) {
  return (
    <section className="section">
      <Container>{children}</Container>
    </section>
  );
}
