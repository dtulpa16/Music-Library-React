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
    if (user && user.id) {
      localStorage.setItem("userId", user.id);
    } else {
      localStorage.removeItem("userId");
    }
  }, [user]);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post("https://localhost:7010/api/Users", {
        username,
        password,
      });
      setUser(response.data);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
