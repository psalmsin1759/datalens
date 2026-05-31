export function DataLensLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="dl-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="27" stroke="url(#dl-logo-grad)" strokeWidth="4.5" fill="none" />
      <path
        d="M48 17 A 27 27 0 0 1 56 35"
        stroke="#00E676"
        strokeWidth="4.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="11" fill="url(#dl-logo-grad)" />
      <circle cx="32" cy="32" r="4" fill="#0D0D0D" />
      <circle cx="32" cy="32" r="1.6" fill="#00E676" />
    </svg>
  );
}
