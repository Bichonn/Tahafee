const BACK_TREES = [
  { x: -20, w: 90, h: 130 },
  { x: 60, w: 70, h: 95 },
  { x: 140, w: 100, h: 150 },
  { x: 240, w: 80, h: 110 },
  { x: 330, w: 95, h: 140 },
  { x: 430, w: 70, h: 100 },
  { x: 510, w: 110, h: 160 },
  { x: 620, w: 85, h: 120 },
  { x: 710, w: 95, h: 135 },
  { x: 810, w: 75, h: 105 },
  { x: 890, w: 100, h: 150 },
  { x: 990, w: 80, h: 115 },
  { x: 1070, w: 95, h: 140 },
  { x: 1170, w: 75, h: 100 },
  { x: 1250, w: 105, h: 155 },
  { x: 1350, w: 90, h: 125 },
];

const FRONT_TREES = [
  { x: -30, w: 130, h: 190 },
  { x: 110, w: 100, h: 150 },
  { x: 230, w: 150, h: 220 },
  { x: 400, w: 110, h: 165 },
  { x: 540, w: 160, h: 235 },
  { x: 720, w: 120, h: 175 },
  { x: 870, w: 140, h: 205 },
  { x: 1040, w: 110, h: 160 },
  { x: 1180, w: 150, h: 220 },
  { x: 1350, w: 120, h: 175 },
];

function TreeRow({
  trees,
  fill,
  opacity,
}: {
  trees: { x: number; w: number; h: number }[];
  fill: string;
  opacity: number;
}) {
  return (
    <g fill={fill} opacity={opacity}>
      {trees.map((t, i) => (
        <polygon key={i} points={`${t.x},800 ${t.x + t.w / 2},${800 - t.h} ${t.x + t.w},800`} />
      ))}
    </g>
  );
}

export default function ForestBackdrop() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe3a3" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffe3a3" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="skyGlow" cx="50%" cy="0%" r="75%">
          <stop offset="0%" stopColor="#1f4d3b" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0a1613" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="1440" height="800" fill="url(#skyGlow)" />

      <circle cx="1180" cy="130" r="110" fill="url(#moonGlow)" />
      <circle cx="1180" cy="130" r="46" fill="#f4ede4" opacity="0.9" />

      <TreeRow trees={BACK_TREES} fill="#163a2e" opacity={0.55} />
      <TreeRow trees={FRONT_TREES} fill="#0f211c" opacity={0.9} />
    </svg>
  );
}
