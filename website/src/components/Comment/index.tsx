import Giscus from "@giscus/react";

function Comment() {
  return (
    <>
      <Giscus
        id="comments"
        repo={`codinasion/comments`}
        repoId={`R_kgDOHb-6Gg`}
        category={`General`}
        categoryId={`DIC_kwDOHb-6Gs4CPbX4`}
        mapping={`url`}
        strict={`0`}
        term="Welcome to Codinasion :)"
        reactionsEnabled={`1`}
        emitMetadata={`0`}
        inputPosition={`bottom`}
        theme={`light`}
        lang={`en`}
        loading={`lazy`}
      />
    </>
  );
}

export default Comment;
