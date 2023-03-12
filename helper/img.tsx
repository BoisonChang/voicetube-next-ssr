import { MyLoaderProps } from "@/types/components";

export const myLoader = ({
  src,
  width,
  quality = 75,
}: MyLoaderProps): string => {
  return `${src}?w=${width}&q=${quality}`;
};
