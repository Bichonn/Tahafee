import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#080f0d",
          900: "#0a1613",
          800: "#0f211c",
        },
        forest: {
          900: "#122a20",
          800: "#163a2e",
          700: "#1f4d3b",
          600: "#2c6b52",
          500: "#3c8a6a",
        },
        fairy: {
          300: "#a8ffe9",
          400: "#7cf5d0",
          500: "#4fd9b3",
        },
        firefly: {
          300: "#ffe3a3",
          400: "#ffd166",
          500: "#f0b429",
        },
        danger: {
          500: "#c1440e",
          600: "#a8380c",
          700: "#8b2e2e",
        },
        parchment: {
          100: "#f4ede4",
          300: "#d8cfc0",
          500: "#b7ab98",
        },
      },
      fontFamily: {
        display: ["var(--font-fredoka)", "sans-serif"],
        body: ["var(--font-nunito)", "sans-serif"],
      },
      keyframes: {
        "float-y": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        "heart-pop": {
          "0%": { transform: "scale(1)" },
          "30%": { transform: "scale(1.4)" },
          "60%": { transform: "scale(0.85)" },
          "100%": { transform: "scale(1)" },
        },
        "heart-break": {
          "0%": { transform: "scale(1) rotate(0deg)", opacity: "1" },
          "40%": { transform: "scale(1.3) rotate(-8deg)", opacity: "1" },
          "100%": { transform: "scale(0.6) rotate(12deg)", opacity: "0" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-6px) rotate(-1deg)" },
          "40%": { transform: "translateX(6px) rotate(1deg)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
        "lunge-in": {
          "0%": { transform: "scale(0.6) translateY(40px)", opacity: "0" },
          "60%": { transform: "scale(1.05) translateY(-6px)", opacity: "1" },
          "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
        },
        "fade-in-up": {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 18px 2px rgba(124,245,208,0.25)" },
          "50%": { boxShadow: "0 0 28px 6px rgba(124,245,208,0.45)" },
        },
      },
      animation: {
        "float-y": "float-y 5s ease-in-out infinite",
        twinkle: "twinkle 3.2s ease-in-out infinite",
        "heart-pop": "heart-pop 0.5s ease-out",
        "heart-break": "heart-break 0.6s ease-in forwards",
        shake: "shake 0.5s ease-in-out",
        "lunge-in": "lunge-in 0.55s cubic-bezier(.2,.9,.3,1.3)",
        "fade-in-up": "fade-in-up 0.5s ease-out both",
        "glow-pulse": "glow-pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
