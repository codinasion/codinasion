import { MdOutlineDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

import { useTheme } from "next-themes";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        className="mx-4 rounded-lg p-2 border-transparent focus:border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <span className="sr-only">Dark Mode Toggle</span>
        {theme === "light" ? <MdOutlineDarkMode /> : <BsFillSunFill />}
      </button>
    </>
  );
}
