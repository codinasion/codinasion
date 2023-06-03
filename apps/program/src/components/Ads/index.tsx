"use client";

import { useEffect, useRef } from "react";

export default function Ads(): JSX.Element {
  const banner = useRef<HTMLDivElement>();

  const atOptions = {
    key: "6d8a0930608d550b5668ffac05c21b02",
    format: "iframe",
    height: 250,
    width: 300,
    params: {},
  };
  useEffect(() => {
    if (banner.current && !banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//www.profitabledisplaynetwork.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      banner.current.append(conf);
      banner.current.append(script);
    }
  }, [banner]);

  return (
    <div
      className="flex flex-col justify-center items-center"
      // @ts-ignore
      ref={banner}
    ></div>
  );
}
