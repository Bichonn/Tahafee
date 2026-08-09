export default function FairyIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-float-y ${className}`}>
      <svg viewBox="0 0 200 220" className="h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="fairyGlow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#7cf5d0" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#7cf5d0" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="110" r="95" fill="url(#fairyGlow)" />

        {/* wings */}
        <ellipse cx="62" cy="95" rx="34" ry="52" fill="#a8ffe9" opacity="0.35" stroke="#7cf5d0" strokeWidth="1.5" transform="rotate(-18 62 95)" />
        <ellipse cx="138" cy="95" rx="34" ry="52" fill="#a8ffe9" opacity="0.35" stroke="#7cf5d0" strokeWidth="1.5" transform="rotate(18 138 95)" />

        {/* body / dress */}
        <path d="M100 95 C124 95 132 140 118 175 C110 190 90 190 82 175 C68 140 76 95 100 95 Z" fill="#4fd9b3" />

        {/* head */}
        <circle cx="100" cy="72" r="26" fill="#f4ede4" />

        {/* hair */}
        <path d="M76 66 C74 44 90 30 100 30 C110 30 126 44 124 66 C118 54 108 48 100 48 C92 48 82 54 76 66 Z" fill="#ffd166" />

        {/* face */}
        <circle cx="91" cy="74" r="2.6" fill="#0a1613" />
        <circle cx="109" cy="74" r="2.6" fill="#0a1613" />
        <path d="M94 84 Q100 89 106 84" stroke="#0a1613" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* arms */}
        <path d="M84 108 C70 112 62 122 58 134" stroke="#f4ede4" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M116 108 C130 112 138 122 142 134" stroke="#f4ede4" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* wand sparkles */}
        <g fill="#ffe3a3">
          <circle cx="150" cy="128" r="3" />
          <circle cx="160" cy="118" r="2" />
          <circle cx="158" cy="140" r="1.6" />
        </g>

        {/* legs */}
        <path d="M92 178 L88 205" stroke="#f4ede4" strokeWidth="6" strokeLinecap="round" />
        <path d="M108 178 L112 205" stroke="#f4ede4" strokeWidth="6" strokeLinecap="round" />
      </svg>
    </div>
  );
}
