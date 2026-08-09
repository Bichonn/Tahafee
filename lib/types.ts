export type Category = "culture_generale" | "observation" | "enigme" | "calcul";

export interface Palier {
  index: number;
  category: Category;
  sceneTitle: string;
  sceneDescription: string;
  question: string;
  answers: [string, string, string];
  correctIndex: 0 | 1 | 2;
  successFlavor: string;
  bearFlavor: string;
}

export interface GameDesign {
  title: string;
  tagline: string;
  introText: string;
  victoryText: string;
  gameOverText: string;
}

export type GamePhase = "intro" | "question" | "feedback" | "gameover" | "victory";

export interface Feedback {
  kind: "success" | "bear";
  text: string;
  fatal: boolean;
}

export interface GameState {
  phase: GamePhase;
  currentIndex: number;
  hearts: number;
  feedback: Feedback | null;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  culture_generale: "Culture générale",
  observation: "Observation",
  enigme: "Énigme",
  calcul: "Calcul",
};
