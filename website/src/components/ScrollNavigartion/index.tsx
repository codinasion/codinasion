"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { ScrollToTop, ScrollToBottom } from "@/utils";

export default function ScrollNavigartion() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      // eslint-disable-next-line no-undef
      if (window.scrollY > 50) setShow(true);
      else setShow(false);
    };

    // eslint-disable-next-line no-undef
    window.addEventListener("scroll", handleWindowScroll);
    // eslint-disable-next-line no-undef
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 hidden flex-col gap-3 ${
        show ? "md:flex" : "md:hidden"
      }`}
    >
      <button
        aria-label="Scroll To Bottom"
        onClick={ScrollToBottom}
        className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
        <FaArrowDown className="h-5 w-5" strokeWidth={5} />
      </button>
      <button
        aria-label="Scroll To Top"
        onClick={ScrollToTop}
        className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
      >
        <FaArrowUp className="h-5 w-5" strokeWidth={5} />
      </button>
    </div>
  );
}
