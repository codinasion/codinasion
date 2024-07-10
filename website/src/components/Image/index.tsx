import type { ImageProps } from "next/image";
import NextImage from "next/image";

export default function ImageComponent({ ...rest }: ImageProps): JSX.Element {
  return <NextImage {...rest} />;
}
