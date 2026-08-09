"use client";

import { useGameState } from "@/hooks/useGameState";
import { design, paliers } from "@/lib/content";
import ForestBackdrop from "./art/ForestBackdrop";
import Fireflies from "./art/Fireflies";
import IntroScreen from "./IntroScreen";
import HeartsDisplay from "./HeartsDisplay";
import ForestPath from "./ForestPath";
import PalierScene from "./PalierScene";
import QuestionCard from "./QuestionCard";
import FeedbackOverlay from "./FeedbackOverlay";
import GameOverScreen from "./GameOverScreen";
import VictoryScreen from "./VictoryScreen";

export default function Game() {
  const { state, currentPalier, totalPaliers, maxHearts, start, answer, continueGame, restart } =
    useGameState(paliers);

  return (
    <>
      <ForestBackdrop />
      <Fireflies />

      {state.phase === "intro" && <IntroScreen design={design} onStart={start} />}

      {(state.phase === "question" || state.phase === "feedback") && currentPalier && (
        <div className="relative z-10 flex min-h-dvh flex-col items-center px-4 py-8 sm:py-12">
          <div className="flex w-full max-w-2xl items-center justify-start mb-2">
            <HeartsDisplay hearts={state.hearts} maxHearts={maxHearts} />
          </div>

          <ForestPath current={state.currentIndex} total={totalPaliers} />

          <PalierScene key={currentPalier.index} palier={currentPalier} />

          <div className="w-full flex justify-center">
            <QuestionCard key={currentPalier.index} palier={currentPalier} onAnswer={answer} />
          </div>
        </div>
      )}

      {state.phase === "feedback" && state.feedback && (
        <FeedbackOverlay feedback={state.feedback} onContinue={continueGame} />
      )}

      {state.phase === "gameover" && <GameOverScreen text={design.gameOverText} onRestart={restart} />}
      {state.phase === "victory" && <VictoryScreen text={design.victoryText} onRestart={restart} />}
    </>
  );
}
