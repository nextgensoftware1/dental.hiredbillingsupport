"use client";

import { useState } from "react";

export default function ResponsiveImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-lavender-light via-white to-lavender ${className}`}
      role={failed ? "img" : undefined}
      aria-label={failed ? alt : undefined}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
          <span className="font-display text-sm font-semibold text-oxford/55">HBS Dental</span>
        </div>
      )}
    </div>
  );
}
