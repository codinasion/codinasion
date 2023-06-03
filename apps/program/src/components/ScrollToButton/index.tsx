"use client";

import React from "react";

import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

export default function ScrollToButton() {
  React.useEffect(() => {
    window.onscroll = function () {
      const scrollTopButton = document.getElementById("scroll-top-btn")!;
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        scrollTopButton.style.display = "block";
      } else {
        scrollTopButton.style.display = "none";
      }
    };
  }, []);

  React.useEffect(() => {
    const scrollBottomButton = document.getElementById("scroll-bottom-btn")!;
    if (document.body.scrollHeight > window.innerHeight) {
      scrollBottomButton.style.display = "block";
    } else {
      scrollBottomButton.style.display = "none";
    }
  }, []);

  return (
    <>
      <button
        id="scroll-top-btn"
        onClick={scrollToTop}
        className="hidden fixed bottom-[75px] right-[25px] rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out border-transparent"
      >
        <BsFillArrowUpCircleFill size="40" />
      </button>

      <button
        id="scroll-bottom-btn"
        onClick={scrollToBottom}
        className="hidden fixed bottom-[25px] right-[25px] rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none active:shadow-lg transition duration-150 ease-in-out border-transparent"
      >
        <BsFillArrowDownCircleFill size="40" />
      </button>
    </>
  );
}
