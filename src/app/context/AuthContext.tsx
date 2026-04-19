import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  plan: string;
  role: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  signup: (data: SignupData) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  company?: string;
  plan?: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

const API_BASE = "http://localhost:5000/api";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // On mount, restore from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("nexaflow_token");
    const storedUser = localStorage.getItem("nexaflow_user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${API_BASE}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("nexaflow_token", data.token);
        localStorage.setItem("nexaflow_user", JSON.stringify(data.data));
        setToken(data.token);
        setUser(data.data);
        return { success: true, message: "Login successful" };
      }
      return { success: false, message: data.message || "Login failed" };
    } catch {
      return { success: false, message: "Network error. Is the server running?" };
    }
  };

  const signup = async (signupData: SignupData) => {
    try {
      const res = await fetch(`${API_BASE}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("nexaflow_token", data.token);
        localStorage.setItem("nexaflow_user", JSON.stringify(data.data));
        setToken(data.token);
        setUser(data.data);
        return { success: true, message: "Account created successfully" };
      }
      return { success: false, message: data.message || "Sign up failed" };
    } catch {
      return { success: false, message: "Network error. Is the server running?" };
    }
  };

  const logout = () => {
    localStorage.removeItem("nexaflow_token");
    localStorage.removeItem("nexaflow_user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
