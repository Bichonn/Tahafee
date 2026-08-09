# Tahafée : Le Sentier des Lucioles

Un petit jeu de paliers en français, 100 % frontend (Next.js / React / TypeScript / Tailwind).

Une petite fée, Tahafée, a fui son village après l'attaque d'un ours féroce. Elle doit retrouver
les siens en traversant 12 paliers de la forêt magique. À chaque palier, une question (culture
générale, observation, énigme ou calcul) propose 3 réponses : une seule mène sereinement au
palier suivant, les deux autres mènent face à l'ours — Tahafée s'échappe de justesse mais perd
un cœur. Elle a 3 cœurs (3 vies) ; au troisième cœur perdu, la partie est perdue.

## Lancer le projet en local

Prérequis : [Node.js](https://nodejs.org) 18.18+ (idéalement 20+).

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm start
```

## Déployer sur Vercel

Le projet est un projet Next.js standard, sans backend ni base de données : Vercel le détecte
automatiquement, aucune configuration n'est nécessaire.

1. Pousser ce dossier sur un dépôt Git (GitHub/GitLab/Bitbucket), ou utiliser directement la CLI :
   ```bash
   npm install -g vercel
   vercel
   ```
2. Ou bien, depuis [vercel.com](https://vercel.com/new), importer le dépôt Git : Vercel détecte
   le framework Next.js, la commande de build (`next build`) et le dossier de sortie
   automatiquement.
3. Chaque push déclenchera un nouveau déploiement (si le projet est relié à un dépôt Git).

## Structure du projet

```
app/                 App Router Next.js (layout, page, styles globaux)
components/          Composants d'écran (Intro, Question, Feedback, GameOver, Victoire, ...)
components/art/      Illustrations SVG originales (fée, ours, forêt, lucioles)
hooks/useGameState.ts  Machine à états du jeu (cœurs, palier courant, phase)
lib/content.ts       Contenu éditorial : trame narrative + 12 paliers (questions/réponses)
lib/types.ts         Types TypeScript partagés
```

## Modifier ou ajouter du contenu

Tout le contenu du jeu (histoire, titre, paliers, questions/réponses) se trouve dans
[`lib/content.ts`](lib/content.ts). Chaque palier suit cette forme :

```ts
{
  index: 0,
  category: "culture_generale", // "culture_generale" | "observation" | "enigme" | "calcul"
  sceneTitle: "Nom du lieu",
  sceneDescription: "Texte d'ambiance affiché au-dessus de la question.",
  question: "La question posée.",
  answers: ["Réponse A", "Réponse B", "Réponse C"], // exactement 3
  correctIndex: 0, // 0, 1 ou 2 : position de la bonne réponse
  successFlavor: "Texte affiché si bonne réponse.",
  bearFlavor: "Texte affiché si mauvaise réponse (rencontre avec l'ours, perte d'un cœur).",
}
```

Pour changer la longueur de la partie, il suffit d'ajouter ou retirer des entrées dans le
tableau `paliers` (les `index` doivent rester continus à partir de 0) — le nombre total de
paliers et la barre de progression s'adaptent automatiquement.

## Stack technique

- [Next.js](https://nextjs.org) 15 (App Router) + [React](https://react.dev) 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) pour le thème (forêt nocturne, lucioles, palette
  personnalisée dans `tailwind.config.ts`)
- [lucide-react](https://lucide.dev) pour l'icône de cœur
- Illustrations SVG originales faites main (aucune image externe, aucune dépendance réseau)
- Aucun backend, aucune base de données : tout l'état du jeu vit côté client (`useReducer`)
