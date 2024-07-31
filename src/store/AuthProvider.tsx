import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { User } from "../util/types";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username");
    if (userId && username) {
      try {
        setUser({ id: userId, username });
      } catch (error) {
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
      }
    }
  }, []);
  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post("https://localhost:7010/api/Users", {
        username,
        password,
      });
      setUser(response.data);
      localStorage.setItem("userId", response.data.id);
      localStorage.setItem("username", response.data.username);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("userId")
    localStorage.removeItem("username")
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
