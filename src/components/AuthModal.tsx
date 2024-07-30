import React, { useRef, useState } from "react";
import Form from "../UI/elements/Form";
import Input from "../UI/elements/Input";
import Modal from "../UI/elements/Modal";
import Button from "../UI/elements/Button";
import { useAuth } from "../util/hooks/useAuth";

interface AuthModalProps {
  action: string;
  setAction: React.Dispatch<React.SetStateAction<string>>;
}

const AuthModal: React.FC<AuthModalProps> = ({ action, setAction }) => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const modalRef = useRef<{ open: () => void; close: () => void }>(null);
  const formRef = useRef<HTMLFormElement>(null)
  if(action){
    modalRef.current?.open();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(credentials.username, credentials.password);
    setAction("")
    formRef.current?.reset()
    modalRef.current?.close();
  };

  return (
    <Modal ref={modalRef} title={action}>
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
    </Modal>
  );
};

export default AuthModal;