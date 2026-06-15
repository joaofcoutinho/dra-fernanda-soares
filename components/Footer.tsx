import Image from "next/image";
import Link from "next/link";
import { clinicas, navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-navy/10 bg-gradient-to-br from-ivory via-cream to-ivory text-ink">
      {/* Fita de divisão no topo (igual à do header) */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
        aria-hidden
      />
      {/* Brilhos suaves (iguais à seção de Depoimentos) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_12%_25%,_rgba(30,58,95,0.10),_transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_90%_85%,_rgba(222,197,143,0.14),_transparent_60%)]"
        aria-hidden
      />
      <div className="container-site relative">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 text-center sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12 lg:py-20 lg:text-left">
          {/* Marca */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Image
              src="/logo-navy.png"
              alt="Dra. Fernanda Soares, Dermatologia e Tricologia"
              width={358}
              height={170}
              className="mx-auto h-24 w-auto sm:h-28 lg:mx-0"
            />
            <p className="mx-auto mt-6 max-w-xs text-sm font-light leading-relaxed text-ink-soft lg:mx-0">
              Medicina de precisão para a saúde da pele e do cabelo. Atendimento
              particular exclusivo em {site.city}.
            </p>
          </div>

          <FooterCol title="Navegação">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Atendimento" className="hidden lg:block">
            {clinicas.map((c) => (
              <li key={c.nome}>{c.nome}</li>
            ))}
          </FooterCol>

          <FooterCol title="Contato">
            <li>
              <a href={site.whatsapp} className="transition-colors hover:text-gold">
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-gold"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.doctoralia}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-gold"
              >
                Doctoralia
              </a>
            </li>
            <li>
              <Link href="/contato" className="transition-colors hover:text-gold">
                Agendar consulta
              </Link>
            </li>
          </FooterCol>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-navy/10 py-7 text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.doctor}
          </p>
          <p>Atendimento particular · {site.city}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-[0.68rem] font-medium uppercase tracking-luxe text-gold">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm font-light text-ink-soft">{children}</ul>
    </div>
  );
}
