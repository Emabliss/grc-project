"use client";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("codeNumber");
    return value || "";
  }
};

export const AuthContextProvider = ({ children }) => {
  const [codeNumber, setCodeNumber] = useState(() => getFromLocalStorage());

  return (
    <AuthContext.Provider value={{ codeNumber, setCodeNumber }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("Auth context must be used within app provider");
  }
  return context;
};
