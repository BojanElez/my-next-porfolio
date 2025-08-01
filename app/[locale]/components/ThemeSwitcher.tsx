"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const changeTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(changeTheme);
  };

  return (
    <div>
      <input
        className="theme-switch"
        type="checkbox"
        role="switch"
        onChange={toggleTheme}
        id="flexSwitchCheckDefault"
        aria-label="Toggle dark and light theme"
      />
      <label
        className="inline-block pl-[0.15rem] hover:cursor-pointer"
        htmlFor="flexSwitchCheckDefault"
      >
        <span className="sr-only">
          Toggle dark and light theme
        </span>
      </label>
    </div>
  );
};