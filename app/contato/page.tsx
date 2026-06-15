import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { IconCalendar, IconMail, IconWhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Agendar Consulta | Dra. Fernanda Soares — Dermatologista Salvador",
  description:
    "Agende sua consulta particular com a Dra. Fernanda Soares, tricologista e dermatologista em Salvador. Agendamento online disponível. CRM BA 44447.",
};

const faq = [
  {
    q: "A consulta é somente particular?",
    a: `Sim. O atendimento da Dra. Fernanda pelo site é exclusivamente particular, permitindo tempo adequado para diagnóstico completo, tricoscopia e montagem do protocolo individual. O valor da consulta é ${site.consultaValor}.`,
  },
  {
    q: "Posso agendar para qualquer dia?",
    a: "A Dra. Fernanda disponibiliza horários específicos para consultas particulares — geralmente sextas-feiras pela manhã. As vagas são atualizadas em tempo real no sistema de agendamento online.",
  },
  {
    q: "O que devo levar para a primeira consulta?",
    a: "Se tiver, leve exames recentes (hemograma, dosagem hormonal, ferritina), histórico de tratamentos capilares anteriores e qualquer medicamento em uso. Fotos do progresso da queda, se disponíveis, também ajudam no diagnóstico.",
  },
  {
    q: "É possível realizar o transplante na mesma consulta?",
    a: "Não. O transplante capilar exige consulta de avaliação prévia, planejamento da área receptora e preparação do paciente. A consulta de avaliação é o primeiro passo obrigatório.",
  },
  {
    q: "Qual a diferença entre a consulta particular e o atendimento convênio?",
    a: "No atendimento particular, a consulta tem duração e profundidade maiores, com avaliação tricoscópica completa e montagem de protocolo detalhado. O agendamento online é direto com a Dra. Fernanda.",
  },
];

const cards = [
  {
    icon: <IconWhatsApp />,
    title: "WhatsApp",
    text: "Prefere falar antes de agendar? Entre em contato direto.",
    label: "Falar pelo WhatsApp",
    href: site.whatsapp,
  },
  {
    icon: <IconCalendar />,
    title: "Agenda Online",
    text: "Escolha data e horário disponível direto na agenda da Dra. Fernanda.",
    label: "Agendar agora",
    href: "#agendar",
  },
  {
    icon: <IconMail />,
    title: "E-mail",
    text: "Para dúvidas ou solicitações que não sejam urgentes.",
    label: "Enviar mensagem",
    href: site.email,
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato & Agendamento"
        title={
          <>
            Agende sua consulta com a
            <br /> <span className="italic text-gradient-light">Dra. Fernanda Soares</span>
          </>
        }
        subtitle="Escolha a data e horário diretamente na agenda. Sem fila, sem espera."
      />

      {/* Widget Calendly */}
      <section id="agendar" className="section">
        <div className="container-site max-w-4xl">
          <div className="border border-dashed border-ink/25 bg-cream p-10 text-center sm:p-16">
            <p className="eyebrow is-center justify-center">Agenda Online</p>
            <h2 className="display mt-6 text-3xl text-ink sm:text-4xl">
              Widget de Agendamento
            </h2>
            <p className="mx-auto mt-5 max-w-lg font-light leading-relaxed text-ink-soft">
              Espaço reservado para o widget do Calendly — evento “Consulta
              Particular — Dra. Fernanda Soares”, duração 60 min, sextas-feiras
              pela manhã, sincronizado com o Google Calendar.
            </p>
            <a href={site.calendly} className="btn-primary mt-9">
              Escolher data e horário
            </a>
            {/* Substituir o bloco acima pelo embed real do Calendly:
            <div className="calendly-inline-widget"
                 data-url="https://calendly.com/SEU-LINK"
                 style={{ minWidth: 320, height: 700 }} /> */}
          </div>
        </div>
      </section>

      {/* Alternativas de contato */}
      <section className="section pt-0">
        <Reveal
          stagger
          className="container-site grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-3"
        >
          {cards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group flex flex-col bg-ivory p-10 text-center transition-colors duration-500 hover:bg-cream"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-navy/15 bg-navy/[0.04] text-navy transition-all duration-500 group-hover:border-navy group-hover:bg-navy group-hover:text-ivory">
                {c.icon}
              </span>
              <h3 className="display mt-5 text-2xl text-ink">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-ink-soft">
                {c.text}
              </p>
              <span className="mt-7 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-navy">
                {c.label} →
              </span>
            </a>
          ))}
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="section bg-cream pt-0">
        <div className="container-site max-w-3xl">
          <SectionHeading center eyebrow="Dúvidas Frequentes" title="Perguntas frequentes" />
          <div className="mt-14 border-t border-ink/10">
            {faq.map((item) => (
              <details key={item.q} className="group border-b border-ink/10 py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="display text-xl text-ink sm:text-2xl">
                    {item.q}
                  </span>
                  <span className="text-2xl font-light text-gold transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl font-light leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
