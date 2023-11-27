"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
}: {
  error: Error;
  reset: () => void;
}): JSX.Element {
  useEffect(() => {
    // TODO: Log error
  }, [error]);

  return <>500</>;
}
