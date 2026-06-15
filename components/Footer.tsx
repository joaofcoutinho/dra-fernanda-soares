import Image from "next/image";
import Link from "next/link";
import { clinicas, navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-navy/10 bg-gradient-to-br from-ivory via-cream to-ivory text-ink">
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
        <div className="grid gap-12 py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Image
              src="/logo-navy.png"
              alt="Dra. Fernanda Soares — Dermatologia e Tricologia"
              width={358}
              height={170}
              className="h-24 w-auto sm:h-28"
            />
            <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-ink-soft">
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

          <FooterCol title="Atendimento">
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
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[0.68rem] font-medium uppercase tracking-luxe text-gold">
        {title}
      </h3>
      <ul className="mt-5 space-y-3 text-sm font-light text-ink-soft">{children}</ul>
    </div>
  );
}
