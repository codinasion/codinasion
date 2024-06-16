"use client";

import { useTheme } from "next-themes";
import Giscus from "@giscus/react";

export default function Comment() {
  const { theme } = useTheme();

  return (
    <>
      <div className="my-10">
        <Giscus
          id="giscus-comments"
          repo={`codinasion/.github`}
          repoId={`R_kgDOKx7Kyw`}
          category={`General`}
          categoryId={`DIC_kwDOKx7Ky84CcJY2`}
          mapping={`pathname`}
          strict={`1`}
          reactionsEnabled={`1`}
          emitMetadata={`0`}
          inputPosition={`bottom`}
          theme={theme}
          lang={`en`}
          loading={`lazy`}
        />
      </div>
    </>
  );
}
