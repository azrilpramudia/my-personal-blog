import { useEffect, useState } from "react";

export const useTheme = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const toggleTheme = () => setDark(!dark);

  return { dark, toggleTheme };
};
