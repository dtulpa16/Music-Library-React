import { ReactNode } from "react";

type FormProps = {
  children: ReactNode;
  [key: string]: unknown;
};

export default function Form({ children, ...props }: FormProps) {
  return <form className="form-group" {...props}>{children}</form>;
}
