import { GameDesign } from "@/lib/types";
import FairyIllustration from "./art/FairyIllustration";

export default function IntroScreen({ design, onStart }: { design: GameDesign; onStart: () => void }) {
  return (
    <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 py-16 text-center">
      <FairyIllustration className="h-36 w-36 sm:h-48 sm:w-48 mb-6" />
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-parchment-100 mb-2">{design.title}</h1>
      <p className="text-firefly-300 font-display text-lg sm:text-xl mb-8">{design.tagline}</p>
      <p className="max-w-xl text-parchment-300 leading-relaxed mb-10 text-sm sm:text-base">{design.introText}</p>
      <button type="button" onClick={onStart} className="btn-primary">
        Commencer l&apos;aventure
      </button>
      <p className="mt-6 text-xs text-parchment-500">3 cœurs. Un chemin. Un ours qui rôde.</p>
    </div>
  );
}
