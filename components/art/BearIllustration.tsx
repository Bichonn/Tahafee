export default function BearIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 220 200" className="h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="bearGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#c1440e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#c1440e" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="110" cy="105" r="98" fill="url(#bearGlow)" />

        {/* ears */}
        <circle cx="68" cy="48" r="20" fill="#2a1810" />
        <circle cx="152" cy="48" r="20" fill="#2a1810" />
        <circle cx="68" cy="48" r="10" fill="#4a2a1c" />
        <circle cx="152" cy="48" r="10" fill="#4a2a1c" />

        {/* head */}
        <ellipse cx="110" cy="92" rx="62" ry="54" fill="#2a1810" />

        {/* snout */}
        <ellipse cx="110" cy="112" rx="30" ry="22" fill="#3d2417" />
        <ellipse cx="110" cy="106" rx="8" ry="6" fill="#0a0604" />

        {/* eyes - angry */}
        <path d="M80 82 L98 90" stroke="#f4ede4" strokeWidth="4" strokeLinecap="round" />
        <path d="M140 82 L122 90" stroke="#f4ede4" strokeWidth="4" strokeLinecap="round" />

        {/* teeth */}
        <path d="M96 124 L100 134 L104 124 Z" fill="#f4ede4" />
        <path d="M116 124 L120 134 L124 124 Z" fill="#f4ede4" />

        {/* claw marks */}
        <g stroke="#c1440e" strokeWidth="4" strokeLinecap="round" opacity="0.85">
          <path d="M20 150 L46 178" />
          <path d="M34 144 L60 172" />
          <path d="M48 138 L74 166" />
        </g>
      </svg>
    </div>
  );
}
