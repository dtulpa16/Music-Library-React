import { useState } from "react";
import "../styles/Navbar.css";
import { useAuth } from "../util/hooks/useAuth";
import AuthModal from "./AuthModal";
import Button from "../UI/elements/Button";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [action, setAction] = useState<string>("");
  const [showToggle, setShowToggle] = useState<boolean>(false);

  return (
    <>
      <AuthModal action={action} setAction={setAction} onToggle={showToggle} />
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
              <Button
                type="button"
                onClick={() => {
                  setShowToggle(!showToggle);
                  setAction("Login");
                }}
              >
                Login
              </Button>
              <Button
                type="button"
                onClick={() => {
                  setShowToggle(!showToggle);
                  setAction("Register");
                }}
              >
                Register
              </Button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
