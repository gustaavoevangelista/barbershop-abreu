type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconRazor({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M10 14 L34 38" />
      <path d="M34 38 L46 50 L50 46 L38 34" />
      <path d="M10 14 C 8 10, 12 6, 16 8 L 34 26 L 26 34 L 8 16 C 6 14, 8 12, 10 14 Z" />
      <path d="M46 50 L54 58" />
      <path d="M50 46 L58 54" />
    </svg>
  );
}

export function IconScissorsComb({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="6" />
      <circle cx="16" cy="42" r="6" />
      <path d="M21 20 L52 50" />
      <path d="M21 38 L52 8" />
      <path d="M30 29 L36 29" />
    </svg>
  );
}

export function IconVinyl({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="24" />
      <circle cx="32" cy="32" r="18" opacity="0.5" />
      <circle cx="32" cy="32" r="12" opacity="0.5" />
      <circle cx="32" cy="32" r="5" />
      <circle cx="32" cy="32" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function IconTowelSteam({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="14" y="34" width="36" height="16" rx="4" />
      <path d="M14 42 H50" opacity="0.5" />
      <path d="M24 28 C 20 24, 24 20, 22 16" />
      <path d="M32 28 C 28 24, 32 18, 30 12" />
      <path d="M40 28 C 36 24, 40 20, 38 16" />
    </svg>
  );
}

export function IconChair({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M18 10 H40 V30 H18 Z" />
      <path d="M18 30 L14 46" />
      <path d="M40 30 L44 46" />
      <path d="M14 46 H44" />
      <path d="M26 46 L24 56" />
      <path d="M36 46 L38 56" />
      <path d="M22 56 H30" />
      <path d="M34 56 H42" />
      <path d="M40 14 H50 V22 H40" opacity="0.6" />
    </svg>
  );
}

export function IconDrop({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M32 10 C 40 24, 48 32, 48 42 A16 16 0 0 1 16 42 C16 32, 24 24, 32 10 Z" />
    </svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.5 L14.7 9.2 L22 9.9 L16.5 14.7 L18.2 21.9 L12 18 L5.8 21.9 L7.5 14.7 L2 9.9 L9.3 9.2 Z" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M32 8 C 20 8, 12 17, 12 28 C12 42, 32 56, 32 56 C32 56, 52 42, 52 28 C52 17, 44 8, 32 8 Z" />
      <circle cx="32" cy="27" r="7" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="22" />
      <path d="M32 20 V32 L42 38" />
    </svg>
  );
}

export function IconWhatsapp({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.2.6 4.28 1.65 6.06L4 29l8.14-1.6a12 12 0 0 0 3.88.65h.01c6.62 0 12.02-5.4 12.02-12.03C28.05 8.4 22.65 3 16.02 3Zm0 21.94h-.01a10 10 0 0 1-5.1-1.4l-.37-.22-4.83.95.96-4.7-.24-.38a9.9 9.9 0 0 1-1.53-5.27C4.9 8.93 9.94 4.9 16.02 4.9c2.85 0 5.53 1.11 7.55 3.13a10.6 10.6 0 0 1 3.12 7.55c0 6.08-5.04 11.36-10.67 11.36Zm5.87-8.5c-.32-.16-1.9-.94-2.2-1.05-.29-.1-.5-.16-.72.16-.21.32-.83 1.05-1.01 1.26-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.74-1-2.38-.26-.63-.53-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="10" y="10" width="44" height="44" rx="12" />
      <circle cx="32" cy="32" r="11" />
      <circle cx="45" cy="19" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}
