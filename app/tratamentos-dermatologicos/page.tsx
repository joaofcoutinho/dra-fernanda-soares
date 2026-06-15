import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner, PageHero, SectionHeading, TreatmentCard } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Dermatologia Estética em Salvador | Dra. Fernanda Soares",
  description:
    "Botox, preenchimento, peeling, bioestimulador e laser CO2 em Salvador. Dermatologista com Título de Especialista. Consulta particular. CRM BA 44447.",
};

const procedimentos = [
  {
    title: "Toxina Botulínica",
    description:
      "Aplicada em pontos estratégicos para relaxamento muscular localizado, suavizando linhas de expressão sem perda de mobilidade facial. Técnica conservadora, com mapeamento individualizado: expressão preservada, aparência mais descansada e natural.",
    indicado:
      "Linhas de expressão (glabela, testa, pés-de-galinha), bruxismo, hiperidrose axilar, elevação de sobrancelha.",
  },
  {
    title: "Preenchimento Facial",
    description:
      "Ácido hialurônico restaura volume perdido e redefine contornos faciais de forma progressiva e reversível. Produto, viscosidade e técnica escolhidos com base na anatomia de cada paciente. O objetivo é naturalidade, nunca exagero.",
    indicado:
      "Sulcos nasogenianos, bigode chinês, projeção de queixo, hidratação profunda (skinboosters), lábios, maçãs do rosto.",
  },
  {
    title: "Bioestimulador de Colágeno",
    description:
      "Sculptra, Radiesse, Ellansé e outros estimulam a produção natural de colágeno, com melhora progressiva da firmeza cutânea ao longo de meses. Ao contrário dos preenchedores imediatos, o resultado é construído gradualmente.",
    indicado:
      "Flacidez facial e corporal, perda de volume generalizada, envelhecimento cutâneo, melhora de textura e firmeza.",
  },
  {
    title: "Peeling Químico",
    description:
      "Promove descamação controlada da pele, estimulando renovação celular e produção de colágeno. A profundidade — superficial, médio ou profundo — é definida conforme o objetivo e o tipo de pele de cada paciente.",
    indicado:
      "Manchas (melasma, hiperpigmentações), acne e cicatrizes, envelhecimento cutâneo, textura irregular, oleosidade.",
  },
  {
    title: "Laser CO2 Fracionado",
    description:
      "Um dos procedimentos mais eficazes para remodelação da pele. Cria microcanais controlados que estimulam regeneração cutânea profunda, com melhora de textura, firmeza, cicatrizes e manchas. Realizado em clínica com protocolo de anestesia e pós-cuidado.",
    indicado:
      "Cicatrizes de acne, estrias, rugas profundas, flacidez, manchas resistentes, melhora geral da pele.",
  },
];

export default function TratamentosDermatologicosPage() {
  return (
    <>
      <PageHero
        image="/hero-dermatologicos.jpg"
        eyebrow="Dermatologia Estética"
        title={
          <>
            Procedimentos com resultado
            <br /> natural e <span className="italic text-gradient-light">embasamento médico</span>
          </>
        }
      />

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="A Filosofia" title="Potencializar, nunca artificializar" />
          <div className="space-y-5 text-[1.05rem] font-light leading-relaxed text-ink-soft lg:pt-4">
            <p>
              A Dra. Fernanda Soares é Dermatologista com Título de Especialista,
              o que significa formação clínica completa em pele, cabelos e
              mucosas. Além do foco em tricologia, realiza procedimentos
              dermatológicos estéticos com a mesma rigorosidade técnica:
              diagnóstico prévio, indicação fundamentada e resultado compatível
              com a anatomia natural de cada paciente.
            </p>
            <p className="display text-2xl leading-snug text-ink">
              Nenhum procedimento é realizado sem avaliação. O objetivo nunca é
              uma aparência artificial — é potencializar o que cada pessoa já tem.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-site">
          <SectionHeading
            center
            eyebrow="Procedimentos"
            title="O que a Dra. Fernanda realiza"
          />
          <Reveal
            stagger
            className="mt-16 grid gap-px border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3"
          >
            {procedimentos.map((p, i) => (
              <TreatmentCard
                key={p.title}
                index={i}
                title={p.title}
                description={p.description}
                indicado={p.indicado}
              />
            ))}
            {/* Célula final — mini-CTA preenche a grade */}
            <div className="flex flex-col items-center justify-center gap-5 bg-navy p-9 text-center">
              <span className="display text-2xl leading-snug text-ivory">
                Cada pele pede um protocolo próprio
              </span>
              <p className="text-sm font-light leading-relaxed text-ivory/70">
                Nenhum procedimento sem avaliação clínica. Vamos definir o seu
                plano juntos.
              </p>
              <Link href="/contato" className="btn-on-dark mt-1">
                Agendar avaliação
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid gap-16 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Como Funciona"
            title={
              <>
                A consulta
                <br /> dermatológica
              </>
            }
          />
          <div className="space-y-6 text-[1.05rem] font-light leading-relaxed text-ink-soft">
            <p>
              Toda consulta começa com avaliação clínica completa: anamnese, exame
              dermatoscópico quando necessário e definição do diagnóstico. Só então
              é apresentado o plano de tratamento, com opções, expectativas reais
              de resultado e custo.
            </p>
            <p className="display text-2xl leading-snug text-ink">
              Não existe indicação de procedimento sem justificativa clínica. Cada
              intervenção proposta tem um porquê e um resultado esperado.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Agende sua consulta dermatológica particular"
        subtitle="Escolha data e horário diretamente na agenda."
      />
    </>
  );
}
