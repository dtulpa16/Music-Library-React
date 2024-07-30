import { useState } from 'react';
import { User } from '../types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    // setUser({ name: 'John Doe' });
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
}