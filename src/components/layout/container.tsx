import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren;

export function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}
