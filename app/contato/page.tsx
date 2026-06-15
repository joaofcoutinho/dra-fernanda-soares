import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { IconCalendar, IconMail, IconWhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Agendar Consulta | Dra. Fernanda Soares | Dermatologista Salvador",
  description:
    "Agende sua consulta particular com a Dra. Fernanda Soares, tricologista e dermatologista em Salvador. Agendamento online disponível. CRM BA 44447.",
};

const faq = [
  {
    q: "Quais são as principais especialidades da Dra. Fernanda?",
    a: "A Dra. Fernanda é dermatologista e tricologista. Entre os serviços oferecidos estão: consulta de dermatologia e de tricologia, microagulhamento, aplicação de toxina botulínica, peeling químico, preenchimento facial e cutâneo, além de teleconsulta.",
  },
  {
    q: "Onde fica o consultório da Dra. Fernanda?",
    a: "O atendimento presencial acontece em três clínicas de referência em Salvador: Cliderme (Itaigara), Dermato+ (Pituba) e Santtare (Pituba). Você também pode optar pela teleconsulta. Consulte a página de Localização para endereços completos.",
  },
  {
    q: "Posso me consultar online, sem ir até o consultório?",
    a: 'Sim. A Dra. Fernanda oferece atendimento online. Basta selecionar "Teleconsulta" ao agendar e você verá as datas e horários disponíveis.',
  },
  {
    q: "Quais métodos de pagamento são aceitos?",
    a: "São aceitos Cartão de Crédito, Cartão de Débito, Transferência Bancária e PIX.",
  },
  {
    q: "Em quais idiomas a Dra. Fernanda atende?",
    a: "A Dra. Fernanda atende em Português, Inglês e Espanhol.",
  },
  {
    q: "Como marco uma consulta?",
    a: "Direto aqui pelo site. O calendário de agendamento é atualizado em tempo real: basta escolher o dia e o horário mais convenientes e confirmar. O agendamento é gratuito e você recebe um lembrete antes da consulta. Costumam haver horários na mesma semana ou na semana seguinte.",
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
        image="/hero-contato.jpg"
        eyebrow="Contato & Agendamento"
        title={
          <>
            Agende sua consulta com a{" "}
            <span className="text-gradient-light">
              Dra. Fernanda Soares
            </span>
          </>
        }
        subtitle="Escolha a data e horário diretamente na agenda. Sem fila, sem espera."
        aside={<CalendarWidget />}
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
              Espaço reservado para o widget do Calendly. Evento “Consulta
              Particular, Dra. Fernanda Soares”, duração 60 min, sextas-feiras
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
        <div className="container-site">
          <Reveal
            stagger
            className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-3"
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
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream">
        <div className="container-site max-w-3xl">
          <SectionHeading center eyebrow="Dúvidas Frequentes" title="Perguntas frequentes" />
          <div className="mt-14 space-y-4">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group border border-ink/10 bg-ivory transition-all duration-300 open:border-navy/30 open:shadow-soft hover:border-navy/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 sm:p-7">
                  <span className="display text-lg leading-snug text-ink sm:text-xl">
                    {item.q}
                  </span>
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-navy/30 text-lg font-light text-navy transition-all duration-300 group-open:rotate-45 group-open:border-navy group-open:bg-navy group-open:text-ivory">
                    +
                  </span>
                </summary>
                <p className="-mt-1 max-w-2xl px-6 pb-6 font-light leading-relaxed text-ink-soft sm:px-7 sm:pb-7">
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

function CalendarWidget() {
  return (
    <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-6 border border-ivory/15 bg-ivory/[0.05] px-8 py-12 text-center backdrop-blur-sm">
      <span className="flex h-24 w-24 items-center justify-center rounded-full border border-champagne/40 bg-champagne/10 text-champagne">
        <IconCalendar className="!h-10 !w-10" />
      </span>
      <div>
        <p className="display text-2xl text-ivory">Agendamento online</p>
        <p className="mt-2 text-[0.62rem] font-medium uppercase tracking-luxe text-champagne">
          Data e horário em tempo real
        </p>
      </div>
    </div>
  );
}
