"use client";

import { Feedback } from "@/lib/types";
import FairyIllustration from "./art/FairyIllustration";
import BearIllustration from "./art/BearIllustration";

export default function FeedbackOverlay({
  feedback,
  onContinue,
}: {
  feedback: Feedback;
  onContinue: () => void;
}) {
  const isBear = feedback.kind === "bear";

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-night-950/70 backdrop-blur-sm px-4">
      <div
        className={[
          "glass-panel rounded-3xl p-6 sm:p-8 max-w-lg w-full text-center animate-fade-in-up",
          isBear ? "border-danger-500/40 animate-shake" : "border-fairy-400/40",
        ].join(" ")}
      >
        <div className={`mx-auto mb-4 h-24 w-24 sm:h-28 sm:w-28 ${isBear ? "animate-lunge-in" : "animate-float-y"}`}>
          {isBear ? <BearIllustration /> : <FairyIllustration />}
        </div>

        <p className={`font-display text-lg sm:text-xl font-semibold mb-2 ${isBear ? "text-danger-500" : "text-fairy-400"}`}>
          {isBear ? "L'ours surgit !" : "Bonne voie !"}
        </p>

        <p className="text-parchment-100 text-base leading-relaxed mb-4">{feedback.text}</p>

        {isBear && (
          <p className="text-danger-500/90 text-sm font-display mb-4">
            {feedback.fatal ? "Tahafée a perdu son dernier cœur…" : "Tahafée perd un cœur…"}
          </p>
        )}

        <button type="button" onClick={onContinue} className="btn-primary">
          Continuer
        </button>
      </div>
    </div>
  );
}
