"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  stagger = false,
}: {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // "idle" (SSR/pré-JS) e "shown" => visível. "hidden" => animando a entrada.
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setState("shown");
      return;
    }

    // Esconde e anima quando entrar na tela (o observer dispara na hora
    // se o elemento já estiver visível).
    setState("hidden");
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const base = stagger ? "reveal-stagger" : "reveal";
  const cls = state === "hidden" ? base : `${base} is-visible`;

  return (
    <div ref={ref} className={`${cls} ${className}`}>
      {children}
    </div>
  );
}
