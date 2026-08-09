"use client";

import { useState } from "react";
import { Palier, CATEGORY_LABELS } from "@/lib/types";

export default function QuestionCard({
  palier,
  onAnswer,
}: {
  palier: Palier;
  onAnswer: (choiceIndex: 0 | 1 | 2) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  function handleClick(i: 0 | 1 | 2) {
    if (selected !== null) return;
    setSelected(i);
    setTimeout(() => onAnswer(i), 420);
  }

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 w-full max-w-2xl animate-fade-in-up">
      <span className="badge-category">{CATEGORY_LABELS[palier.category]}</span>
      <h2 className="font-display text-xl sm:text-2xl font-semibold text-parchment-100 mt-4 mb-6 leading-snug">
        {palier.question}
      </h2>
      <div className="flex flex-col gap-3">
        {palier.answers.map((answerText, i) => {
          const idx = i as 0 | 1 | 2;
          const isSelected = selected === idx;
          const isDimmed = selected !== null && !isSelected;
          return (
            <button
              key={i}
              type="button"
              disabled={selected !== null}
              onClick={() => handleClick(idx)}
              className={[
                "btn-answer",
                isSelected ? "border-fairy-400/70 bg-forest-800/80 ring-2 ring-fairy-400/50" : "",
                isDimmed ? "opacity-40" : "",
              ].join(" ")}
            >
              {answerText}
            </button>
          );
        })}
      </div>
    </div>
  );
}
