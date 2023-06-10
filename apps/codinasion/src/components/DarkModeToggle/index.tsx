"use client";

import { MdOutlineDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="rounded-lg p-2 text-xl border-2 border-transparent focus:border-transparent bg-lime-400 dark:bg-lime-800 hover:border-lime-300 dark:hover:border-lime-700 shadow-lg shadow-neutral-500/20"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <span className="sr-only">Dark Mode Toggle</span>
        {theme === "light" ? <MdOutlineDarkMode /> : <BsFillSunFill />}
      </button>
    </>
  );
}
