"use client";

import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

export default function HeartsDisplay({ hearts, maxHearts }: { hearts: number; maxHearts: number }) {
  const prevRef = useRef(hearts);
  const [breakingIndex, setBreakingIndex] = useState<number | null>(null);

  useEffect(() => {
    if (hearts < prevRef.current) {
      setBreakingIndex(hearts);
      const t = setTimeout(() => setBreakingIndex(null), 650);
      prevRef.current = hearts;
      return () => clearTimeout(t);
    }
    prevRef.current = hearts;
  }, [hearts]);

  return (
    <div className="flex items-center gap-1.5 sm:gap-2" role="status" aria-label={`${hearts} vies restantes sur ${maxHearts}`}>
      {Array.from({ length: maxHearts }).map((_, i) => {
        const filled = i < hearts;
        const isBreaking = i === breakingIndex;
        return (
          <Heart
            key={i}
            size={26}
            strokeWidth={2}
            className={[
              filled ? "text-danger-500 fill-danger-500" : "text-parchment-500/25",
              isBreaking ? "animate-heart-break" : "",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}
