import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      root.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  const buttonClass = `fixed top-4 right-4 z-50 px-4 py-2 rounded-lg border text-sm font-medium transition-colors duration-300
    ${
      isDark
        ? "bg-dark-black-200 text-white border-white hover:bg-dark-black-100"
        : "bg-white text-black border-black hover:bg-secondary"
    }`;

  return (
    <button onClick={toggleTheme} className={buttonClass}>
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
