import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="text-2xl text-white capitalize bg-[#d62828]
       mt-2.5 lg:mt-5 py-2.5 px-5 rounded-lg"
    >
      {children}
    </button>
  );
}

export default Button;
