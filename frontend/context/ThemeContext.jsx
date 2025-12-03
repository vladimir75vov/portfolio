"use client";

import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({ 
  theme: "dark", 
  setTheme: () => {} 
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved && (saved === "light" || saved === "dark")) {
        setTheme(saved);
      }
    } catch (e) {
      console.error("Failed to load theme:", e);
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    
    try {
      localStorage.setItem("theme", theme);
      
      // Обновление класса документа для CSS переменных
      if (theme === "light") {
        document.documentElement.classList.add("light-theme");
        document.documentElement.classList.remove("dark-theme");
      } else {
        document.documentElement.classList.add("dark-theme");
        document.documentElement.classList.remove("light-theme");
      }
    } catch (e) {
      console.error("Failed to save theme:", e);
    }
  }, [theme, isHydrated]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
