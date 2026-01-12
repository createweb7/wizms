"use client";

import Image from "next/image";
import { useState } from "react";

interface FeaturedImageProps {
  src: string;
  alt: string;
  title: string;
}

export default function FeaturedImage({ src, alt, title }: FeaturedImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return null;
  }

  return (
    <div className="mb-8 relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <Image
        src={src}
        alt={alt || title}
        fill
        className="object-cover"
        priority
        onError={() => setImageError(true)}
      />
    </div>
  );
}
