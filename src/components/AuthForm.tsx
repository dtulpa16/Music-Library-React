import React, { useRef, useState } from "react";
import Form from "../UI/elements/Form";
import { useAuth } from "../util/hooks/useAuth";
import Button from "../UI/elements/Button";
import Input from "../UI/elements/Input";
interface AuthFormProps {
    action: string;
  setAction: React.Dispatch<React.SetStateAction<string>>;
  modalRef:React.RefObject<{
    open: () => void;
    close: () => void;
}>
}

export default function AuthForm({setAction, action, modalRef}:AuthFormProps) {
  const { login } = useAuth();
  
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(credentials.username, credentials.password);
    setAction("");
    formRef.current?.reset();
    modalRef.current?.close();
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input
        label="Username"
        type="text"
        name="username"
        onChange={handleChange}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        onChange={handleChange}
      />
      <Button type="submit">{action}</Button>
    </Form>
  );
}
