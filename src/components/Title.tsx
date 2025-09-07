import type { ReactNode } from "react";

type TitleProps = { children: ReactNode };

function Title({ children }: TitleProps) {
  return (
    <h2 className="text-8xl font-semibold text-white capitalize">{children}</h2>
  );
}

export default Title;
