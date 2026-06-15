"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-navy-deep to-ink-deep text-ivory transition-shadow duration-500 ${
        scrolled || open ? "shadow-[0_10px_40px_-18px_rgba(17,38,62,0.8)]" : ""
      }`}
    >
      {/* Filete dourado na base */}
      <span
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
        aria-hidden
      />

      <div className="container-site grid h-20 grid-cols-[1fr_auto] items-center sm:h-24 xl:grid-cols-[1fr_auto_1fr]">
        {/* Logo (esquerda) */}
        <Link href="/" className="justify-self-start">
          <Image
            src="/logo-white.png"
            alt="Dra. Fernanda Soares — Dermatologia e Tricologia"
            width={358}
            height={170}
            priority
            className="h-16 w-auto sm:h-[4.75rem]"
          />
        </Link>

        {/* Nav (centro) */}
        <nav className="hidden items-center gap-8 justify-self-center xl:flex">
          {navLinks
            .filter((l) => l.href !== "/contato")
            .map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[0.72rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                  active ? "text-ivory" : "text-ivory/70 hover:text-ivory"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Botão contato (direita) + toggle mobile */}
        <div className="flex items-center justify-self-end">
          <Link href="/contato" className="hidden btn-gold !px-7 !py-3 xl:inline-flex">
            Agendar Consulta
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center text-ivory xl:hidden"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 8h16M4 16h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-ivory/10 bg-ink-deep xl:hidden">
          <nav className="container-site flex flex-col py-6">
            {navLinks
              .filter((l) => l.href !== "/contato")
              .map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ivory/10 py-4 text-sm font-medium uppercase tracking-[0.16em] text-ivory/75 hover:text-ivory"
                >
                  {l.label}
                </Link>
              ))}
            <Link
              href="/contato"
              onClick={() => setOpen(false)}
              className="btn-gold mt-6"
            >
              Agendar Consulta
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
