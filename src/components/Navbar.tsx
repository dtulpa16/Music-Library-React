import "../styles/Navbar.css"
import { useAuth } from '../util/hooks/useAuth';

export default function Navbar() {
  const { user, login, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-brand">MusicCity</div>

      <div className="navbar-actions">
        {user ? (
          <>
            <span>Welcome, {user.username}</span>
            <button onClick={logout} className="logout">Logout</button>
          </>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
    </nav>
  );
}