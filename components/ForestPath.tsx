"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import FairyIllustration from "./art/FairyIllustration";

const SPRITE_SIZE = 40;

export default function ForestPath({ current, total }: { current: number; total: number }) {
  const controls = useAnimationControls();
  const didMount = useRef(false);

  const pct = (i: number) => (total <= 1 ? 0 : (i / (total - 1)) * 100);
  const currentPct = pct(current);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      controls.set({ left: `${currentPct}%`, y: 0, rotate: 0 });
      return;
    }
    controls.start({
      left: `${currentPct}%`,
      y: [0, -18, 0],
      rotate: [0, 6, -2, 0],
      transition: {
        left: { type: "spring", stiffness: 65, damping: 15 },
        y: { duration: 0.6, ease: "easeInOut" },
        rotate: { duration: 0.6, ease: "easeInOut" },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-10 sm:mb-12 h-16" aria-hidden="true">
      <p className="absolute -top-1 right-0 text-xs sm:text-sm text-parchment-300 font-display">
        Palier {current + 1}/{total}
      </p>

      {/* trail line */}
      <div className="absolute left-0 right-0 top-9 h-1.5 rounded-full bg-forest-800/80 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-fairy-500 via-fairy-400 to-firefly-400"
          animate={{ width: `${currentPct}%` }}
          transition={{ type: "spring", stiffness: 70, damping: 16 }}
        />
      </div>

      {/* waypoints, one per palier */}
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={[
            "absolute top-9 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-colors duration-300",
            i <= current ? "bg-firefly-400 border-firefly-300" : "bg-forest-900 border-parchment-500/30",
          ].join(" ")}
          style={{ left: `${pct(i)}%` }}
        />
      ))}

      {/* Tahafée, hopping from waypoint to waypoint as the game progresses */}
      <motion.div
        className="absolute top-9 drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
        style={{
          width: SPRITE_SIZE,
          height: SPRITE_SIZE,
          marginLeft: -SPRITE_SIZE / 2,
          marginTop: -SPRITE_SIZE - 6,
        }}
        animate={controls}
      >
        <FairyIllustration className="h-full w-full" />
      </motion.div>
    </div>
  );
}
