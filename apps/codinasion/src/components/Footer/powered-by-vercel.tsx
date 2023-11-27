"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "@/components/Link";
import Image from "next/image";
import VERCEL_DARK from "@/public/vercel-dark.svg";
import VERCEL_LIGHT from "@/public/vercel-light.svg";

export default function PoweredByVercel(): JSX.Element {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <></>;
  }

  return (
    <Link href="https://vercel.com/?utm_source=codinasion&utm_campaign=oss">
      Powered by
      {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
        <Image
          src={VERCEL_LIGHT}
          className="ml-2 inline-block"
          height={20}
          width={80}
          alt="Vercel Light Logo"
        />
      ) : (
        <Image
          src={VERCEL_DARK}
          className="ml-2 inline-block"
          height={20}
          width={80}
          alt="Vercel Dark Logo"
        />
      )}
    </Link>
  );
}
