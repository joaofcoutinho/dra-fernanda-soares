import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { CTABanner, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sobre a Dra. Fernanda Soares | Dermatologista e Tricologista em Salvador",
  description:
    "Conheça a trajetória da Dra. Fernanda Soares — 20 anos de experiência em dermatologia e tricologia. Especialista em transplante capilar. CRM BA 44447.",
};

const timeline = [
  {
    period: "1999 — 2005",
    title: "Graduação em Medicina",
    place: "Universidade Gama Filho, Rio de Janeiro, RJ",
  },
  {
    period: "2007 — 2009",
    title: "Pós-Graduação em Dermatologia",
    place: "Hospital da Gamboa, Rio de Janeiro, RJ",
  },
  {
    period: "2009 — 2010",
    title: "Pós-Graduação em Medicina Estética",
    place: "Associação Internacional de Medicina Estética, RJ",
  },
  {
    period: "Atualização",
    title: "Advanced Clinical Reasoning in Medical Trichology",
    place: "Hair Medicine Institute / Instituto Medicina Capilar, São Paulo, SP",
  },
  {
    period: "Atualização",
    title: "Transplante Capilar, Barba e Sobrancelhas",
    place: "Instituto Capilar DH (Dra. Daniela Hueb), Bauru, SP",
  },
];

const titulos = [
  "Título de Especialista em Dermatologia pela Associação Médica Brasileira e Sociedade Brasileira de Dermatologia",
  "Membro Efetivo da Sociedade Brasileira de Dermatologia",
  `${site.crm} · ${site.rqe}`,
];

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quem Somos"
        title={
          <>
            Medicina de precisão para
            <br /> o que mais aparece:
            <br />
            <span className="italic text-gradient-light">seu cabelo e sua pele.</span>
          </>
        }
        subtitle="Mais de 20 anos dedicados ao diagnóstico correto, ao tratamento eficaz e ao acompanhamento que transforma resultados em histórias reais."
      />

      {/* Retrato + abertura */}
      <section className="section">
        <div className="container-site grid items-center gap-16 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-full w-full border border-gold/40" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden bg-cream shadow-soft">
              <Image
                src="/dra-fernanda-retrato.jpg"
                alt="Retrato da Dra. Fernanda Soares"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="A Trajetória" title="Uma escolha por profundidade" />
            <div className="mt-7 space-y-5 text-[1.02rem] font-light leading-relaxed text-ink-soft">
              <p>
                A {site.doctor} não chegou à tricologia por acaso. Após se formar
                em Medicina pela Universidade Gama Filho, no Rio de Janeiro, e se
                especializar em Dermatologia pelo Hospital da Gamboa, percebeu que
                a queda de cabelo era uma das queixas que mais impactava a
                qualidade de vida dos pacientes — e uma das menos tratadas com
                profundidade.
              </p>
              <p>
                Foi essa percepção que a levou a se especializar em Tricologia
                Médica e Transplante Capilar, tornando-se uma das poucas
                dermatologistas com formação específica e certificada nessa área
                no Brasil.
              </p>
              <p>
                Por 10 anos, de 2012 a 2022, manteve consultório próprio em
                Vitória (ES), onde consolidou protocolos clínicos para alopecia,
                calvície masculina e feminina, e transplante capilar. Em 2024,
                chegou a Salvador — e com ela, o mesmo padrão de excelência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-cream">
        <div className="container-site grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Formação e Credenciais"
            title={
              <>
                Uma linha do tempo
                <br /> de dedicação
              </>
            }
          />
          <div>
            <ol className="border-l border-ink/15">
              {timeline.map((item) => (
                <li key={item.title} className="relative pb-10 pl-10 last:pb-0">
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gold" />
                  <p className="text-[0.7rem] font-medium uppercase tracking-luxe text-gold">
                    {item.period}
                  </p>
                  <h3 className="display mt-2 text-2xl text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm font-light text-ink-soft">
                    {item.place}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-12 border border-ink/10 bg-ivory p-9">
              <h3 className="eyebrow">Títulos e Associações</h3>
              <ul className="mt-6 space-y-4">
                {titulos.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-4 text-[0.98rem] font-light text-ink-soft"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Por que particular */}
      <section className="section">
        <div className="container-site grid gap-16 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Posicionamento"
            title={
              <>
                Por que atendimento
                <br /> particular?
              </>
            }
          />
          <div className="space-y-6 text-[1.05rem] font-light leading-relaxed text-ink-soft">
            <p>
              A Dra. Fernanda optou pelo atendimento particular para garantir o
              que mais importa em Tricologia: tempo, atenção e personalização.
            </p>
            <p>
              Em uma consulta particular, não há pressa. É possível realizar
              anamnese completa, tricoscopia detalhada e montar um protocolo que
              realmente faça sentido para aquele paciente, com acompanhamento
              longitudinal até o resultado.
            </p>
            <p className="display text-2xl leading-snug text-ink">
              Resultado em saúde capilar não vem de consulta de 10 minutos. Vem de
              diagnóstico preciso e plano terapêutico bem construído.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Pronto para conhecer a especialista?"
        subtitle="Agendamento online com data e horário disponíveis em tempo real."
      />
    </>
  );
}
