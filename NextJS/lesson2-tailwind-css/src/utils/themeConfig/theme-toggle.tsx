"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}