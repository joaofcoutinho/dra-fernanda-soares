import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner, PageHero, SectionHeading, TreatmentCard } from "@/components/ui";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tratamentos Capilares em Salvador | Dra. Fernanda Soares — Tricologista",
  description:
    "Transplante capilar, MMP, mesoterapia e microenxerto autólogo em Salvador. Especialista em tricologia com diagnóstico individualizado. CRM BA 44447.",
};

const tratamentos = [
  {
    title: "MMP Capilar",
    description:
      "Microimplante de alta precisão que utiliza microimplantes do próprio paciente. Indicado para casos com densidade reduzida em áreas específicas e pode ser combinado com outros protocolos. Um dos procedimentos de maior domínio técnico da Dra. Fernanda.",
    indicado:
      "Alopecia focal, complementação de transplante anterior, reconstrução de regiões com baixa densidade.",
  },
  {
    title: "Mesoterapia Capilar",
    description:
      "Tratamento injetável que leva ao couro cabeludo uma combinação personalizada de ativos: vitaminas, minerais, fatores de crescimento e medicamentos específicos. Cada cocktail é montado com base na causa da queda identificada em consulta.",
    indicado:
      "Eflúvio telógeno (queda difusa), alopecia androgênica inicial/moderada, manutenção pós-transplante, queda pós-parto ou hormonal.",
  },
  {
    title: "Microenxerto Autólogo",
    description:
      "Técnica de transplante de menor escala, indicada para restauração de regiões específicas com perda capilar delimitada. Utiliza folículos do próprio paciente, garantindo compatibilidade total e resultado natural.",
    indicado:
      "Rarefação nas têmporas, linha frontal irregular, alopecia focal por tração, complementação estética de regiões específicas.",
  },
];

const suporte = [
  ["Laser de Baixa Intensidade (LLLT)", "Estimulação não invasiva do crescimento capilar."],
  ["Microagulhamento Capilar", "Indução de fatores de crescimento no couro cabeludo."],
  ["Terapia Tópica Personalizada", "Prescrição de compostos manipulados específicos."],
  ["Suplementação Nutricional", "Orientação para deficiências que comprometem o crescimento."],
];

const transplanteEtapas = [
  "Consulta de avaliação prévia (obrigatória) com tricoscopia e planejamento da área",
  "Procedimento ambulatorial realizado com anestesia local, sem internação",
  "Tempo de procedimento: 4 a 8 horas, dependendo do número de folículos",
  "Resultado visível progressivamente a partir do 3º mês",
  "Resultado final: 12 a 18 meses após o procedimento",
];

export default function TratamentosCapilaresPage() {
  return (
    <>
      <PageHero
        eyebrow="Tratamentos Capilares"
        title={
          <>
            Tratamentos Capilares
            <br /> em <span className="italic text-gradient-light">Salvador</span>
          </>
        }
        subtitle="Diagnóstico preciso. Protocolos individualizados. Resultados que você vê."
      />

      {/* Intro */}
      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="A Abordagem" title="Causa raiz, antes do protocolo" />
          <div className="space-y-5 text-[1.05rem] font-light leading-relaxed text-ink-soft lg:pt-4">
            <p>
              A perda de cabelo afeta mais de 42 milhões de brasileiros e, em
              grande parte dos casos, tem origem clínica tratável quando
              diagnosticada corretamente. A Dra. Fernanda Soares é especialista em
              Tricologia Médica, com formação certificada e mais de uma década de
              atendimento clínico exclusivo na área capilar.
            </p>
            <p>
              Cada tratamento começa com avaliação completa: anamnese, tricoscopia
              (exame visual do couro cabeludo com equipamento de alta definição) e
              diagnóstico diferencial. O protocolo é montado para aquele paciente
              específico — não existe fórmula genérica.
            </p>
          </div>
        </div>
      </section>

      {/* Transplante — destaque escuro */}
      <section className="surface-dark relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <div className="container-site relative section grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Procedimento Principal</p>
            <h2 className="display mt-6 text-4xl leading-tight text-ivory sm:text-5xl">
              Transplante Capilar
              <span className="mt-1 block italic text-gradient-light">
                natural e definitivo
              </span>
            </h2>
            <div className="mt-7 space-y-5 text-[1rem] font-light leading-relaxed text-ivory/70">
              <p>
                Utiliza a Técnica <strong className="font-medium text-ivory">FUE</strong>{" "}
                (Follicular Unit Extraction): extração individual dos folículos da
                área doadora para implantação nas áreas com falhas ou calvícies —
                resultados naturais e sem cicatriz linear.
              </p>
              <p>
                É atualmente a técnica mais utilizada, com recuperação mais rápida
                e maior conforto no pós-operatório.
              </p>
            </div>
            <p className="mt-7 border-t border-ivory/15 pt-6 text-sm font-light text-ivory/60">
              <span className="font-medium uppercase tracking-wider text-gold">
                Indicado para
              </span>
              <br />
              Calvície masculina (tipos 3-7 da escala Norwood), alopecia
              cicatricial, restauração de barba e sobrancelha.
            </p>
          </div>

          <div className="border border-ivory/15 bg-ivory/[0.03] p-9 sm:p-11">
            <h3 className="eyebrow">O que esperar</h3>
            <ol className="mt-8 space-y-7">
              {transplanteEtapas.map((e, i) => (
                <li key={e} className="flex items-start gap-5">
                  <span className="display flex-none text-2xl leading-none text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-[0.98rem] font-light text-ivory/75">
                    {e}
                  </span>
                </li>
              ))}
            </ol>
            <Link href="/contato" className="btn-gold mt-10 w-full">
              Quero avaliar meu caso
            </Link>
          </div>
        </div>
      </section>

      {/* Demais tratamentos */}
      <section className="section bg-cream">
        <div className="container-site">
          <SectionHeading
            center
            eyebrow="Mais Procedimentos"
            title="Protocolos para cada tipo de queda"
          />
          <Reveal
            stagger
            className="mt-16 grid gap-px border border-ink/10 bg-ink/10 lg:grid-cols-3"
          >
            {tratamentos.map((t, i) => (
              <TreatmentCard
                key={t.title}
                index={i}
                title={t.title}
                description={t.description}
                indicado={t.indicado}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Suporte */}
      <section className="section">
        <div className="container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Suporte e Manutenção"
            title="Protocolos complementares"
            subtitle="Conforme avaliação clínica, a Dra. Fernanda pode indicar:"
          />
          <Reveal
            stagger
            className="grid gap-px self-start border border-ink/10 bg-ink/10 sm:grid-cols-2"
          >
            {suporte.map(([titulo, desc]) => (
              <div
                key={titulo}
                className="group bg-ivory p-8 transition-colors duration-500 hover:bg-cream"
              >
                <h3 className="display text-xl text-ink">{titulo}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">
                  {desc}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Por onde começo */}
      <section className="section pt-0">
        <div className="container-site">
          <div className="surface-dark relative overflow-hidden">
            <div className="grain absolute inset-0" aria-hidden />
            <div className="relative px-8 py-16 text-center sm:px-16 sm:py-20">
              <p className="eyebrow is-center justify-center">Pergunta Frequente</p>
              <h2 className="display mx-auto mt-6 max-w-2xl text-4xl leading-tight text-ivory sm:text-5xl">
                Por onde começo?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl font-light leading-relaxed text-ivory/70">
                Pela consulta. Sem avaliação, não existe protocolo correto — e sem
                protocolo correto, qualquer tratamento é tentativa. A Dra. Fernanda
                investiga a causa raiz da sua queda antes de propor qualquer
                intervenção. É isso que diferencia um resultado consistente de um
                tratamento que não vai a lugar nenhum.
              </p>
              <Link href="/contato" className="btn-gold mt-10">
                Agendar minha consulta capilar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Diagnóstico preciso é o primeiro passo para o resultado." />
    </>
  );
}
