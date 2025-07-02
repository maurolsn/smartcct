import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "../utils/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token }); // Simples, pode ser expandido depois
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post("/auth/login", {
        username: email,
        password,
      });
      const token = res.data.access_token;
      localStorage.setItem("token", token);
      setUser({ token });
      router.push("/dashboard");
    } catch (error) {
      throw new Error("Email ou senha inválidos");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
