"use client";

import { useCallback, useMemo, useReducer } from "react";
import { Palier, GameState } from "@/lib/types";

const MAX_HEARTS = 3;

type Action =
  | { type: "START" }
  | { type: "ANSWER"; choiceIndex: 0 | 1 | 2 }
  | { type: "CONTINUE" }
  | { type: "RESTART" };

const initialState: GameState = {
  phase: "intro",
  currentIndex: 0,
  hearts: MAX_HEARTS,
  feedback: null,
};

function createReducer(paliers: Palier[]) {
  return function reducer(state: GameState, action: Action): GameState {
    switch (action.type) {
      case "START":
        return { ...initialState, phase: "question" };

      case "ANSWER": {
        if (state.phase !== "question") return state;
        const palier = paliers[state.currentIndex];
        if (!palier) return state;
        const correct = action.choiceIndex === palier.correctIndex;

        if (correct) {
          return {
            ...state,
            phase: "feedback",
            feedback: { kind: "success", text: palier.successFlavor, fatal: false },
          };
        }

        const nextHearts = state.hearts - 1;
        return {
          ...state,
          hearts: nextHearts,
          phase: "feedback",
          feedback: { kind: "bear", text: palier.bearFlavor, fatal: nextHearts <= 0 },
        };
      }

      case "CONTINUE": {
        if (state.phase !== "feedback" || !state.feedback) return state;

        if (state.feedback.fatal) {
          return { ...state, phase: "gameover", feedback: null };
        }

        const isLast = state.currentIndex >= paliers.length - 1;
        if (isLast) {
          return { ...state, phase: "victory", feedback: null };
        }

        return {
          ...state,
          phase: "question",
          currentIndex: state.currentIndex + 1,
          feedback: null,
        };
      }

      case "RESTART":
        return { ...initialState };

      default:
        return state;
    }
  };
}

export function useGameState(paliers: Palier[]) {
  const reducer = useMemo(() => createReducer(paliers), [paliers]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const start = useCallback(() => dispatch({ type: "START" }), []);
  const answer = useCallback((choiceIndex: 0 | 1 | 2) => dispatch({ type: "ANSWER", choiceIndex }), []);
  const continueGame = useCallback(() => dispatch({ type: "CONTINUE" }), []);
  const restart = useCallback(() => dispatch({ type: "RESTART" }), []);

  const currentPalier = paliers[state.currentIndex] ?? null;

  return {
    state,
    currentPalier,
    totalPaliers: paliers.length,
    maxHearts: MAX_HEARTS,
    start,
    answer,
    continueGame,
    restart,
  };
}
