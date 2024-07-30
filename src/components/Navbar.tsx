import { useRef, useState } from "react";
import "../styles/Navbar.css";
import Form from "../UI/elements/Form";
import Input from "../UI/elements/Input";
import Modal from "../UI/elements/Modal";
import { useAuth } from "../util/hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [action, setAction] = useState<string>("");
  // Custom Modal ref - handles opening and closing through a forwarded ref
  const modalRef = useRef<{ open: () => void; close: () => void }>(null);
  return (
    <>
      <Modal ref={modalRef} title={action}>
        <Form>
          <Input label="username" type="text" name="username" />
          <Input label="password" type="password" name="password" />
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
