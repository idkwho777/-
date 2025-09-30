"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "alt"> & {
  src?: string | null;
  alt?: string;
  ratio?: number; // e.g., 4/3
};

export default function ImageWithFallback({
  src,
  alt = "صورة المنتج",
  ratio = 4 / 3,
  ...rest
}: Props) {
  const [errored, setErrored] = useState(false);
  const showFallback = !src || errored;

  return (
    <div 
      className="relative w-full overflow-hidden rounded-2xl bg-neutral-100"
      style={{ aspectRatio: `${ratio}` }}
    >
      {showFallback ? (
        <div className="absolute inset-0 grid place-items-center text-neutral-500 text-sm">
          صورة غير متوفّرة
        </div>
      ) : (
        <Image
          src={src!}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          onError={() => setErrored(true)}
          priority={false}
          {...rest}
        />
      )}
    </div>
  );
}

