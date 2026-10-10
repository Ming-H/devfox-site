"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* 无 localStorage 环境静默降级 */
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="切换明暗模式"
      className="flex h-8 w-8 items-center justify-center rounded-md border text-[13px] transition-colors"
      style={{ borderColor: "var(--line)", color: "var(--ink-sub)" }}
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
