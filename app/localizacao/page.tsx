import type { Metadata } from "next";
import { clinicas } from "@/lib/site";
import { CTABanner, PageHero, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Onde Atende a Dra. Fernanda Soares | Dermatologista Salvador",
  description:
    "Dra. Fernanda Soares atende em 3 clínicas em Salvador: Cliderme, Dermatomais e Santtare. Consulta particular com agendamento online.",
};

const passos = [
  "Escolher a clínica de preferência",
  "Acessar o calendário online e escolher data e horário disponível",
  "Confirmar o agendamento — você receberá confirmação por e-mail e WhatsApp",
];

export default function LocalizacaoPage() {
  return (
    <>
      <PageHero
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
          {clinicas.map((c, i) => (
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
                <span className="display text-2xl text-gold/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display mt-2 text-3xl text-ink">{c.nome}</h2>
                <dl className="mt-7 space-y-4 text-sm font-light text-ink-soft">
                  <Row label="Endereço" value={c.endereco} />
                  <Row label="Telefone" value={c.telefone} />
                  <Row label="WhatsApp" value={c.whatsapp} />
                  <Row label="Horários" value={c.horarios} />
                </dl>
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
