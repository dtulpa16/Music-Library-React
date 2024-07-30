import { useRef, useState } from "react";
import "../styles/Navbar.css";
import Form from "../UI/elements/Form";
import Input from "../UI/elements/Input";
import Modal from "../UI/elements/Modal";
import { useAuth } from "../util/hooks/useAuth";
import Button from "../UI/elements/Button";

export default function Navbar() {
  const { user, logout, login } = useAuth();
  const [action, setAction] = useState<string>("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  // Custom Modal ref - handles opening and closing through a forwarded ref
  const modalRef = useRef<{ open: () => void; close: () => void }>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    await login(credentials.username, credentials.password);
    modalRef.current?.close();
  };

  return (
    <>
      <Modal ref={modalRef} title={action}>
        <Form onSubmit={handleSubmit}>
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
      <nav className="navbar">
        <div className="navbar-brand">MusicCity</div>
        <div className="navbar-actions">
          {user ? (
            <>
              <span>Welcome, {user.username}</span>
              <button onClick={logout} className="logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setAction("Login");
                  modalRef.current?.open();
                }}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setAction("Register");
                  modalRef.current?.open();
                }}
              >
                Register
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
