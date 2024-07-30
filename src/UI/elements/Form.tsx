import { ReactNode, forwardRef } from "react";

type FormProps = {
  children: ReactNode;
  [key: string]: unknown;
}

const Form = forwardRef<HTMLFormElement, FormProps>(function Form({ children, ...props }, ref = null) {
  return (
    <form ref={ref} className="form-group" {...props}>
      {children}
    </form>
  );
});
export default Form;
