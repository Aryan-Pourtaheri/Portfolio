"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);


  useEffect(() => {
    const theme = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const root = typeof window !== "undefined" ? document.body : undefined;

    if (theme === "dark") {
      setIsDark(true);
      root?.classList.add("dark");
    } else {
      setIsDark(false);
      root?.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      const root = typeof window !== "undefined" ? document.body : undefined;

      if (newTheme) {
        root?.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root?.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
