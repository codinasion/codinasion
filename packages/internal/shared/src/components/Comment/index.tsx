import * as React from "react";

import Giscus from "@giscus/react";

import { useTheme } from "next-themes";

export default function Comment() {
  const { theme } = useTheme();

  return (
    <>
      <div className="my-10 mx-5">
        <Giscus
          id="giscus-comments"
          repo={`codinasion/comments`}
          repoId={`R_kgDOJ76xDQ`}
          category={`General`}
          categoryId={`DIC_kwDOJ76xDc4CX6UJ`}
          mapping={`url`}
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
