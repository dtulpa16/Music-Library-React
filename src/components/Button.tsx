import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type: "submit" | "reset" | "button";
  [key: string]: unknown;
};

export default function Button({ children, type, ...props }: ButtonProps) {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
}
