import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
  light,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={
        center
          ? "mx-auto max-w-2xl text-center"
          : "mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
      }
    >
      {eyebrow && (
        <p
          className={`eyebrow ${center ? "is-center" : "is-center lg:[&::after]:hidden lg:justify-start"} ${
            light
              ? "!text-ivory [&::after]:!bg-champagne [&::before]:!bg-champagne"
              : ""
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`display mt-6 text-[2.4rem] leading-[1.06] sm:text-5xl ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-lg font-light leading-relaxed ${
            light ? "text-ivory/70" : "text-ink-soft"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-5 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/45 sm:w-28" />
      <span
        className="block h-2.5 w-2.5 rotate-45 bg-gradient-to-br from-gold to-champagne"
        aria-hidden
      />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/45 sm:w-28" />
    </div>
  );
}

const bandStats = [
  { value: "20+", label: "Anos de experiência" },
  { value: "3", label: "Clínicas de referência em Salvador" },
  { value: "4,8★", label: "Avaliação média no Google" },
];

export function SectionBand() {
  return (
    <div className="bg-navy py-12 sm:py-14">
      <div className="container-site">
        <dl className="grid grid-cols-3 gap-2 divide-x divide-ivory/10 text-center sm:gap-6">
          {bandStats.map((s) => (
            <div key={s.label} className="px-2 sm:px-4">
              <dt className="display bg-gradient-to-br from-champagne-light via-champagne to-champagne-deep bg-clip-text text-3xl leading-none text-transparent sm:text-5xl">
                {s.value}
              </dt>
              <dd className="mx-auto mt-2.5 max-w-[12rem] text-[0.6rem] font-medium uppercase leading-relaxed tracking-[0.12em] text-ivory/70 sm:mt-3 sm:text-[0.72rem] sm:tracking-luxe">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  aside?: ReactNode;
}) {
  return (
    <section className="surface-dark relative overflow-hidden">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink-deep/95 via-ink-deep/85 to-ink-deep/55"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink-deep/80 to-transparent"
            aria-hidden
          />
        </>
      )}
      <div
        className={`container-site relative pb-20 pt-44 sm:pb-24 sm:pt-52 ${
          aside
            ? "lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-14"
            : ""
        }`}
      >
        <div className="text-center lg:text-left">
          <p className="eyebrow animate-rise justify-center lg:justify-start">
            {eyebrow}
          </p>
          <h1 className="display mx-auto mt-7 max-w-4xl text-[2.8rem] leading-[1.02] text-ivory animate-rise sm:text-6xl lg:mx-0">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-7 max-w-xl text-lg font-light leading-relaxed text-ivory/70 animate-rise lg:mx-0">
              {subtitle}
            </p>
          )}
        </div>
        {aside && (
          <div className="mt-12 hidden animate-rise [animation-delay:140ms] lg:mt-0 lg:block">
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}

export function Panel({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative border shadow-soft ${
        dark
          ? "border-gold/40 bg-gradient-to-b from-navy-deep to-ink-deep"
          : "border-navy/15 bg-gradient-to-br from-ivory via-white to-cream"
      } ${className}`}
    >
      <span className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-champagne" aria-hidden />
      <span className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-champagne" aria-hidden />
      <span className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-champagne" aria-hidden />
      <span className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-champagne" aria-hidden />
      {children}
    </div>
  );
}

export function CTABanner({
  title,
  buttonLabel = "Agendar Consulta Particular",
  subtitle,
  eyebrow = "Atendimento Particular",
}: {
  title: string;
  buttonLabel?: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <section className="surface-dark relative overflow-hidden">
      {/* Faixa dourada na divisão (topo) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center" aria-hidden>
        <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-champagne to-transparent" />
      </div>

      <div className="container-site relative py-16 sm:py-20">
        <div className="relative mx-auto max-w-3xl border border-ivory/15 bg-ivory/[0.03] px-8 py-12 text-center sm:px-16 sm:py-14">
          <p className="eyebrow is-center justify-center">{eyebrow}</p>
          <h2 className="display mx-auto mt-6 max-w-2xl text-[2.2rem] leading-[1.1] text-ivory sm:text-[3rem]">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-xl font-light leading-relaxed text-ivory/70">
              {subtitle}
            </p>
          )}
          <Link href="/contato" className="btn-gold mt-9">
            {buttonLabel}
          </Link>

          {/* Selos de confiança */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.66rem] uppercase tracking-[0.16em] text-ivory/60">
            <span>Agendamento online</span>
            <span className="h-1 w-1 rounded-full bg-champagne" aria-hidden />
            <span>Confirmação por WhatsApp</span>
            <span className="h-1 w-1 rounded-full bg-champagne" aria-hidden />
            <span>Sem fila de espera</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TreatmentCard({
  title,
  description,
  indicado,
  index,
  icon,
  children,
}: {
  title: string;
  description: string;
  indicado?: string;
  index?: number;
  icon?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="group relative flex h-full flex-col border border-ink/10 bg-ivory p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-soft">
      {icon ? (
        <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/[0.07] text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ivory">
          {icon}
        </span>
      ) : (
        typeof index === "number" && (
          <span className="display text-gradient mb-5 text-3xl">
            {String(index + 1).padStart(2, "0")}
          </span>
        )
      )}
      <h3 className="display text-2xl leading-snug text-ink">{title}</h3>
      <div className="mt-4 h-px w-10 bg-gold/50 transition-all duration-500 group-hover:w-16" />
      <p className="mt-5 text-[0.95rem] font-light leading-relaxed text-ink-soft">
        {description}
      </p>
      {indicado && (
        <p className="mt-6 border-t border-ink/10 pt-5 text-[0.85rem] font-light leading-relaxed text-ink-soft">
          <span className="font-medium uppercase tracking-wider text-gold">
            Indicado para
          </span>
          <br />
          {indicado}
        </p>
      )}
      {children}
    </div>
  );
}
