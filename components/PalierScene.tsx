"use client";

import { motion } from "framer-motion";
import { Palier } from "@/lib/types";

export default function PalierScene({ palier }: { palier: Palier }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="text-center max-w-xl mx-auto mb-6 sm:mb-8"
    >
      <h1 className="font-display text-2xl sm:text-3xl font-semibold text-parchment-100 mb-2">
        {palier.sceneTitle}
      </h1>
      <p className="text-parchment-300 text-sm sm:text-base leading-relaxed">{palier.sceneDescription}</p>
    </motion.div>
  );
}
