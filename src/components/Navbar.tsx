import { useState } from "react";
import "../styles/Navbar.css";
import { useAuth } from "../util/hooks/useAuth";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [action, setAction] = useState<string>("");

  return (
    <>
      <AuthModal action={action} setAction={setAction}/>
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
                }}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setAction("Register");
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
