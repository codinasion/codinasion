import * as React from "react";

import Image, { StaticImageData } from "next/image";

type Props = {
  unoptimized?: boolean;
  src: string | StaticImageData;
  alt?: string;
  width?: string | number;
  height?: string | number;
  sizes?: string;
  className?: string;
  blurDataURL?: string;
  placeholder?: "blur" | "empty";
};

export default function CustomImageComponent({
  unoptimized = false,
  src,
  alt = "codinasion",
  width = "48",
  height = "48",
  sizes,
  className,
  blurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMq66uBwAEqAHl/evvtQAAAABJRU5ErkJggg==",
  placeholder = "blur",
}: Props) {
  return (
    <>
      <Image
        unoptimized={unoptimized}
        src={src}
        alt={alt}
        width={Number(width)}
        height={Number(height)}
        sizes={sizes ? sizes : ""}
        className={className ? className : ""}
        blurDataURL={blurDataURL}
        placeholder={placeholder}
      />
    </>
  );
}
