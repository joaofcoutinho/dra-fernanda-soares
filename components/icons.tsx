// Ícones de linha (26x26, stroke). Herdam currentColor.

type P = { className?: string };

const base = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Transplante Capilar — fios capilares crescendo */
export function IconFollicle({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M4.5 19.5c2.5 1.2 12.5 1.2 15 0" />
      <path d="M8.6 18.8c-1.3-4.7-.7-8.6 1.9-12" />
      <path d="M12 18.8c-.5-5.6 0-9.7 1-13" />
      <path d="M15.4 18.8c1.3-4.7.7-8.6-1.9-12" />
    </svg>
  );
}

/** MMP Capilar — micropunção matricial (matriz de pontos) */
export function IconMicroneedle({ className }: P) {
  const dots = [8, 12, 16];
  return (
    <svg {...base} className={className}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" />
      {dots.flatMap((y) =>
        dots.map((x) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="0.95"
            fill="currentColor"
            stroke="none"
          />
        )),
      )}
    </svg>
  );
}

/** Mesoterapia Capilar — seringa / microinjeção */
export function IconSyringe({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L14 4" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </svg>
  );
}

/** Agendar — calendário */
export function IconCalendar({ className }: P) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v4M16 3v4" />
      <path d="M8 14h2M14 14h2M8 17.5h2" />
    </svg>
  );
}

/** WhatsApp — balão de conversa */
export function IconWhatsApp({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3.5 20.5l1.4-5.1A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M8.8 8.4c-.2 0-.5.1-.7.4-.2.3-.7.8-.7 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 3.9 3.4 1.9.8 2.3.6 2.7.6.4 0 1.3-.5 1.5-1.1.2-.6.2-1 .1-1.1-.1-.1-.3-.2-.6-.3" />
    </svg>
  );
}

/** E-mail — envelope */
export function IconMail({ className }: P) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 5.5L20.5 7" />
    </svg>
  );
}

/** Localização — pin de mapa */
export function IconPin({ className }: P) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/** Microlyzer — regeneração celular (microenxertos) */
export function IconRegen({ className }: P) {
  return (
    <svg {...base} className={className}>
      <circle cx="9" cy="9.5" r="3.4" />
      <circle cx="15" cy="9.5" r="3.4" />
      <circle cx="12" cy="15" r="3.4" />
    </svg>
  );
}
