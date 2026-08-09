import BearIllustration from "./art/BearIllustration";

export default function GameOverScreen({ text, onRestart }: { text: string; onRestart: () => void }) {
  return (
    <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center">
      <BearIllustration className="h-36 w-36 sm:h-48 sm:w-48 mb-6" />
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-danger-500 mb-4">Perdue dans la forêt…</h1>
      <p className="max-w-xl text-parchment-300 leading-relaxed mb-10 text-sm sm:text-base">{text}</p>
      <button type="button" onClick={onRestart} className="btn-primary">
        Retenter sa chance
      </button>
    </div>
  );
}
