import type { Metadata } from "next";
import { clinicas } from "@/lib/site";
import { CTABanner, PageHero, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { IconPhone } from "@/components/icons";

const telHref = (phone: string) => `tel:+55${phone.replace(/\D/g, "")}`;

export const metadata: Metadata = {
  title: "Onde Atende a Dra. Fernanda Soares | Dermatologista Salvador",
  description:
    "Dra. Fernanda Soares atende em 3 clínicas em Salvador: Cliderme, Dermato+ e Santtare. Consulta particular com agendamento online.",
};

const passos = [
  "Escolher a clínica de preferência",
  "Acessar o calendário online e escolher data e horário disponível",
  "Confirmar o agendamento e receber a confirmação por e-mail e WhatsApp",
];

export default function LocalizacaoPage() {
  return (
    <>
      <PageHero
        image="/hero-localizacao.jpg"
        eyebrow="Localização"
        title={
          <>
            Onde encontrar a Dra. Fernanda
            <br /> em <span className="italic text-gradient-light">Salvador</span>
          </>
        }
        subtitle="Atendimento particular disponível em três clínicas. Escolha a mais próxima de você."
      />

      <section className="section">
        <Reveal stagger className="container-site grid gap-10 lg:grid-cols-3">
          {clinicas.map((c) => (
            <article
              key={c.nome}
              className="flex flex-col border border-ink/10 bg-ivory transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                {c.mapsEmbed ? (
                  <iframe
                    src={c.mapsEmbed}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa ${c.nome}`}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[0.7rem] font-medium uppercase tracking-luxe text-ink-soft/50">
                    Mapa a inserir
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-9">
                <h2 className="display text-3xl text-ink">{c.nome}</h2>

                {/* Avaliação Google */}
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="inline-flex gap-0.5 text-champagne" aria-hidden>
                    ★★★★★
                  </span>
                  <span className="font-medium text-ink">{c.rating}</span>
                  <span className="text-xs text-ink-soft">
                    · {c.reviews} avaliações no Google
                  </span>
                </div>

                <dl className="mt-6 space-y-4 text-sm font-light text-ink-soft">
                  <Row label="Endereço" value={c.endereco} />
                  <Row label="Telefone" value={c.telefone} />
                  <Row label="Horários" value={c.horarios} />
                </dl>

                {/* Ligar */}
                <div className="mt-auto pt-7">
                  <a
                    href={telHref(c.telefone)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-navy-dark"
                  >
                    <IconPhone className="!h-4 !w-4" />
                    Ligar para a clínica
                  </a>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="section bg-cream pt-0">
        <div className="container-site grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="Atendimento Particular"
            title={
              <>
                Como funciona
                <br /> o agendamento
              </>
            }
            subtitle="Feito diretamente pelo site, sem necessidade de ligar para a clínica."
          />
          <div>
            <ol className="border-l border-ink/15">
              {passos.map((p, i) => (
                <li key={p} className="relative pb-9 pl-10 last:pb-0">
                  <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
                  <span className="display text-sm text-gold">
                    Passo {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 text-lg font-light text-ink/85">{p}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 display text-2xl leading-snug text-ink">
              Sem fila de espera. Sem intermediário.
              <span className="text-gradient"> Direto com a especialista.</span>
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Agende sua consulta agora"
        subtitle="Escolha data e horário diretamente na agenda."
        buttonLabel="Escolher data e horário"
      />
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4 border-b border-ink/5 pb-3">
      <dt className="w-24 flex-none text-[0.68rem] uppercase tracking-[0.14em] text-gold">
        {label}
      </dt>
      <dd className="text-ink-soft">{value}</dd>
    </div>
  );
}
