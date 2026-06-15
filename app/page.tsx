import Image from "next/image";
import Link from "next/link";
import { clinicas, site } from "@/lib/site";
import { SectionBand, SectionHeading } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { IconCalendar, IconPin } from "@/components/icons";

const dores = [
  "Queda de cabelo que não para, mesmo com tratamentos caseiros",
  "Calvície avançando e impactando sua autoestima",
  "Já consultou médicos sem encontrar diagnóstico preciso",
  "Quer fazer transplante capilar mas tem dúvidas sobre o resultado",
];

const tratamentos = [
  {
    title: "Transplante Capilar",
    image: "/card-transplante.jpg",
    description:
      "Redistribui os folículos do próprio paciente para áreas com falhas ou calvície, com resultado natural e duradouro.",
  },
  {
    title: "MMP Capilar",
    image: "/card-mmp.jpg",
    description:
      "Microagulhas promovem a infusão de ativos e medicamentos diretamente no couro cabeludo, estimulando os folículos.",
  },
  {
    title: "Mesoterapia Capilar",
    image: "/card-mesoterapia.jpg",
    description:
      "Aplicação de ativos e medicamentos diretamente no couro cabeludo por meio de microinjeções personalizadas.",
  },
  {
    title: "Microlyzer",
    image: "/card-microlyzer.jpg",
    description:
      "Terapia regenerativa com microenxertos autólogos: células-tronco do próprio paciente reinjetadas nas áreas com queda.",
  },
];

const diferenciais = [
  {
    title: "Diagnóstico Preciso",
    text: "Avaliação tricoscópica e protocolo individualizado para cada paciente.",
    image: "/diferencial-diagnostico.jpg",
  },
  {
    title: "Especialista Certificada",
    text: "Título pela Associação Médica Brasileira e Sociedade Brasileira de Dermatologia.",
    image: "/diferencial-certificacao.jpg",
  },
  {
    title: "Atendimento Humanizado",
    text: "Consulta com tempo adequado para ouvir, examinar e explicar.",
    image: "/diferencial-humanizado.jpg",
  },
  {
    title: "Presente em Salvador",
    text: "Atendimento particular em três clínicas referência na cidade.",
    image: "/diferencial-salvador.jpg",
  },
];

// ⚠️ Exemplos ilustrativos — SUBSTITUIR pelas avaliações reais do Google
// assim que o Google Meu Negócio for ativado.
const depoimentos = [
  {
    quote:
      "Após meses procurando um especialista de confiança em Salvador, encontrei a Dra. Fernanda. O diagnóstico foi preciso, o tratamento funcionou e o atendimento foi impecável do início ao fim.",
    name: "M. Oliveira",
    treatment: "Tratamento para Alopecia",
  },
  {
    quote:
      "Fiz o transplante capilar com a Dra. Fernanda e o resultado superou minhas expectativas. Cuidado e profissionalismo em cada etapa, do planejamento ao pós-operatório.",
    name: "R. Santos",
    treatment: "Transplante Capilar",
  },
  {
    quote:
      "Finalmente uma dermatologista que explica tudo com calma e indica só o necessário. Saí da consulta segura e com um plano claro para a minha pele.",
    name: "C. Almeida",
    treatment: "Consulta Dermatológica",
  },
  {
    quote:
      "Sofria com queda de cabelo há anos e nenhum tratamento resolvia. A Dra. Fernanda investigou a causa de verdade e em poucos meses a diferença já era visível.",
    name: "P. Carvalho",
    treatment: "Mesoterapia Capilar",
  },
  {
    quote:
      "Atenciosa, técnica e honesta. Não empurra procedimento, indica o que realmente faz sentido. Resultado natural e um acompanhamento que faz toda a diferença.",
    name: "J. Ribeiro",
    treatment: "Bioestimulador de Colágeno",
  },
  {
    quote:
      "Profissional excepcional. Me senti acolhida desde a primeira consulta e o resultado do meu tratamento capilar foi exatamente o que eu esperava. Recomendo de olhos fechados.",
    name: "A. Menezes",
    treatment: "MMP Capilar",
  },
  {
    quote:
      "Consultório impecável e um atendimento que respeita o tempo do paciente. A Dra. Fernanda é referência em Salvador, e agora entendo o porquê.",
    name: "L. Ferreira",
    treatment: "Toxina Botulínica",
  },
];

const credenciais = [
  `${site.crm} · ${site.rqe}`,
  "Título de Especialista pela SBD",
  "+20 anos de experiência",
  "Membro Efetivo da Sociedade Brasileira de Dermatologia",
  "Tricologia Médica & Transplante Capilar FUE",
  "Atendimento particular em Salvador",
];

export default function HomePage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden bg-cream">
        {/* Fundo texturizado */}
        <Image
          src="/fundo-cta.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlays para leitura do texto */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/75 to-ivory/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ivory/55 via-transparent to-ivory/30"
          aria-hidden
        />
        {/* Reforço no lado direito, atrás do retrato */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-ivory/45 to-transparent"
          aria-hidden
        />
        <div className="container-site relative grid items-end gap-6 pt-28 sm:pt-32 lg:gap-16 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="animate-rise pb-2 text-center lg:pb-28 lg:text-left">
            <p className="eyebrow is-center lg:[&::after]:hidden lg:justify-start">
              Dermatologia &amp; Tricologia · {site.city}
            </p>
            <h1 className="display mt-7 text-[2.6rem] leading-[1.04] text-ink sm:text-6xl lg:text-[4.6rem]">
              Especialista em{" "}
              <span className="text-gradient">Saúde Capilar</span> em Salvador
            </h1>
            <p className="mx-auto mt-8 max-w-md text-lg font-light leading-relaxed text-ink-soft lg:mx-0">
              Dermatologista e Tricologista, especialista em Transplante Capilar.
              Atendimento particular exclusivo em Salvador, nas clínicas
              Cliderme, Dermato+ e Santtare.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:items-start lg:justify-start">
              <Link href="/contato" className="btn-primary group !gap-0">
                Agendar Minha Consulta
                <span className="ml-0 w-0 overflow-hidden text-base leading-none opacity-0 transition-all duration-300 group-hover:ml-2.5 group-hover:w-4 group-hover:opacity-100">
                  →
                </span>
              </Link>
              <Link href="#tratamentos" className="btn-outline group !gap-0">
                Conheça os tratamentos
                <span className="ml-0 w-0 overflow-hidden text-base leading-none opacity-0 transition-all duration-300 group-hover:ml-2.5 group-hover:w-4 group-hover:opacity-100">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Retrato recortado flutuando + selo */}
          <div className="relative mx-auto w-full max-w-[460px] animate-rise [animation-delay:140ms]">
            {/* Halo suave atrás dela */}
            <div
              className="pointer-events-none absolute inset-x-8 top-6 bottom-0 bg-[radial-gradient(ellipse_at_center,_rgba(222,197,143,0.20),_transparent_70%)] blur-2xl"
              aria-hidden
            />
            <Image
              src="/dra-fernanda-hero.png"
              alt="Dra. Fernanda Soares, dermatologista e tricologista em Salvador"
              width={800}
              height={1200}
              priority
              sizes="(max-width: 1024px) 100vw, 460px"
              className="relative h-auto w-full object-contain drop-shadow-[0_28px_38px_rgba(19,36,59,0.30)]"
            />
            {/* Selo flutuante */}
            <div className="absolute bottom-8 -left-2 flex items-center gap-3 rounded-2xl bg-ivory/95 px-5 py-4 shadow-badge backdrop-blur sm:left-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M8.5 12.5L7 22l5-3 5 3-1.5-9.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold tracking-wide text-ink">
                  Membro Efetivo
                </span>
                <span className="block text-[0.58rem] uppercase tracking-[0.14em] text-ink-soft">
                  Sociedade Brasileira de Dermatologia
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Faixa carrossel de credenciais ───────── */}
      <section className="group overflow-hidden border-y border-ink/10 bg-cream py-4">
        <div className="flex w-max animate-marquee items-center whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...credenciais, ...credenciais].map((c, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink-soft">
                {c}
              </span>
              <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" aria-hidden />
            </span>
          ))}
        </div>
      </section>

      {/* ───────── Dor / Engajamento (escuro) ───────── */}
      <section className="surface-dark relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <div className="container-site relative section grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            light
            eyebrow="Você se identifica?"
            title={
              <>
                Seu cabelo está caindo
                <br /> e você não sabe por
                <br /> onde começar?
              </>
            }
            subtitle="Você não precisa conviver com isso. Existe tratamento eficaz, feito por quem realmente entende do assunto."
          />
          <Reveal stagger className="divide-y divide-ivory/10 border-y border-ivory/10">
            {dores.map((d, i) => (
              <div key={d} className="flex items-start gap-6 py-6">
                <span className="display text-gradient-light text-2xl leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-lg font-light text-ivory/80">{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ───────── Tratamentos ───────── */}
      <section id="tratamentos" className="section bg-cream">
        <div className="container-site">
          <SectionHeading
            center
            eyebrow="Tratamentos"
            title="Cuidado especializado em saúde capilar"
          />
          <Reveal stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tratamentos.map((t) => (
              <article
                key={t.title}
                className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden sm:min-h-[400px]"
              >
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/65 to-navy-deep/15"
                  aria-hidden
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-ivory/10" aria-hidden />
                <div className="relative p-7">
                  <h3 className="display text-2xl text-ivory">{t.title}</h3>
                  <div className="mt-3 h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-16" />
                  <p className="mt-3 text-sm font-light leading-relaxed text-ivory/80">
                    {t.description}
                  </p>
                </div>
              </article>
            ))}
          </Reveal>
          <div className="mt-14 text-center">
            <Link href="/tratamentos-capilares" className="link-luxe">
              Ver todos os tratamentos capilares →
            </Link>
          </div>
        </div>
      </section>

      <SectionBand />

      {/* ───────── Credibilidade ───────── */}
      <section className="section bg-cream">
        <div className="container-site grid items-center gap-16 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-gold/40" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden bg-cream shadow-soft">
              <Image
                src="/dra-fernanda-clinica.jpg"
                alt="Dra. Fernanda Soares realizando procedimento capilar em ambiente clínico"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="origin-bottom scale-[1.35] object-cover object-bottom"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="A Especialista"
              title={
                <>
                  Mais de 20 anos dedicados
                  <br /> à saúde da pele e do cabelo
                </>
              }
            />
            <div className="mt-7 space-y-5 text-center text-[1.02rem] font-light leading-relaxed text-ink-soft lg:text-left">
              <p>
                A {site.doctor} é Médica Dermatologista e Tricologista com Título
                de Especialista pela Sociedade Brasileira de Dermatologia. Formada
                pela Universidade Gama Filho (RJ), com especialização no Hospital
                da Gamboa e cursos de atualização em Tricologia e Transplante
                Capilar nos maiores institutos do Brasil.
              </p>
              <p>
                Depois de 10 anos à frente de seu próprio consultório em
                Vitória-ES, chegou a Salvador em 2024 para oferecer o mesmo nível
                de excelência clínica, agora em três das melhores clínicas da
                cidade.
              </p>
            </div>
            <div className="mt-9 flex justify-center lg:justify-start">
              <Link href="/quem-somos" className="link-luxe">
                Conheça a trajetória →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Diferenciais (escuro) ───────── */}
      <section className="surface-dark relative overflow-hidden">
        <div className="grain absolute inset-0" aria-hidden />
        <div className="container-site relative section">
          <SectionHeading
            center
            light
            eyebrow="Diferenciais"
            title={
              <>
                Por que escolher a{" "}
                <span className="whitespace-nowrap">Dra. Fernanda</span>
              </>
            }
            subtitle="Precisão no diagnóstico, formação certificada e um cuidado que respeita o seu tempo, em cada consulta."
          />
          <Reveal stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map((d) => (
              <article
                key={d.title}
                className="group relative flex min-h-[320px] flex-col justify-end overflow-hidden sm:min-h-[420px]"
              >
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay para legibilidade */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/20"
                  aria-hidden
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-ivory/10" aria-hidden />
                {/* Conteúdo */}
                <div className="relative p-8">
                  <div className="h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-16" />
                  <h3 className="display mt-5 text-2xl leading-snug text-ivory">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-ivory/75">
                    {d.text}
                  </p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ───────── Depoimentos ───────── */}
      <section className="section relative overflow-hidden bg-gradient-to-br from-ivory via-cream to-ivory">
        {/* Brilhos suaves para profundidade */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_12%_25%,_rgba(30,58,95,0.10),_transparent_60%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_90%_85%,_rgba(222,197,143,0.14),_transparent_60%)]"
          aria-hidden
        />
        <div className="container-site relative">
          <SectionHeading
            center
            eyebrow="Depoimentos"
            title="O que dizem nossas pacientes"
          />

          {/* Selo Google */}
          <div className="mt-7 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-ivory px-5 py-2.5 shadow-soft">
              <GoogleG />
              <Stars />
              <span className="text-[0.78rem] font-light text-ink-soft">
                Avaliações verificadas no Google
              </span>
            </div>
          </div>

          {/* Carrossel de depoimentos (rolagem automática) */}
          <div className="marquee-mask relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="marquee-track gap-6">
              {[...depoimentos, ...depoimentos].map((d, i) => (
                <div
                  key={`${d.name}-${d.treatment}-${i}`}
                  className="w-[300px] flex-none sm:w-[360px]"
                  aria-hidden={i >= depoimentos.length}
                >
                  <Testimonial {...d} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Localização + CTA ───────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-deep to-ink-deep py-16 text-ivory sm:py-20">
        {/* Brilho mauve sutil */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_82%_8%,_rgba(44,82,130,0.28),_transparent_60%)]"
          aria-hidden
        />
        {/* Faixa dourada na junção (topo) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center" aria-hidden>
          <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
        <div className="container-site relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Endereços */}
          <div className="text-center lg:text-left">
            <p className="eyebrow is-center !text-champagne lg:[&::after]:hidden lg:justify-start">
              Onde Atende
            </p>
            <h2 className="display mt-4 text-3xl leading-tight text-ivory sm:text-4xl">
              Três endereços em Salvador
            </h2>
            <p className="mt-3 max-w-md text-[0.95rem] font-light leading-relaxed text-ivory/65">
              Atendimento particular nas clínicas mais bem estruturadas da cidade.
            </p>

            <Reveal stagger className="mt-8 border-t border-ivory/15">
              {clinicas.map((c) => {
                return (
                  <Link
                    key={c.nome}
                    href="/localizacao"
                    className="group flex items-center gap-4 border-b border-ivory/10 py-5 transition-colors hover:bg-ivory/5"
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-ivory/50 bg-ivory/[0.06] text-ivory transition-colors duration-500 group-hover:bg-ivory group-hover:text-navy">
                      <IconPin className="!h-[18px] !w-[18px]" />
                    </span>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2.5">
                        <h3 className="display text-xl text-ivory">{c.nome}</h3>
                        <span className="inline-flex items-center gap-1 text-[0.72rem] text-champagne">
                          <span aria-hidden>★</span>
                          {c.rating}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[0.7rem] font-medium uppercase tracking-luxe text-ivory/55">
                        {c.cidade}
                      </p>
                    </div>
                    <span className="translate-x-0 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                );
              })}
            </Reveal>

            <Link
              href="/localizacao"
              className="mt-8 inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-champagne transition-colors hover:text-ivory"
            >
              Ver endereços, horários e como chegar →
            </Link>
          </div>

          {/* CTA card (estilo caixa com borda sobre o navy) */}
          <div className="relative border border-ivory/15 bg-ivory/[0.03] px-8 py-12 text-center sm:px-12 sm:py-14">
            <p className="eyebrow is-center justify-center !text-ivory [&::after]:!bg-champagne [&::before]:!bg-champagne">
              Agende Agora
            </p>
            <h3 className="display mx-auto mt-4 max-w-sm text-[1.8rem] leading-[1.12] text-ivory sm:text-[2.1rem]">
              Consulta particular direto com a Dra. Fernanda
            </h3>
            <p className="mx-auto mt-4 max-w-sm text-[0.95rem] font-light leading-relaxed text-ivory/70">
              Escolha data e horário na agenda online. Sem fila, sem espera.
            </p>
            <Link href="/contato" className="btn-gold mt-7">
              <IconCalendar />
              Agendar Consulta Particular
            </Link>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.62rem] uppercase tracking-[0.16em] text-ivory/60">
              <span>Agendamento online</span>
              <span className="h-1 w-1 rounded-full bg-champagne" aria-hidden />
              <span>Confirmação por WhatsApp</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Testimonial({
  quote,
  name,
  treatment,
}: {
  quote: string;
  name: string;
  treatment: string;
}) {
  return (
    <figure className="group flex h-full flex-col border border-ink/10 bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-soft">
      <div className="flex items-center justify-between">
        <Stars />
        <GoogleG />
      </div>
      <blockquote className="mt-5 flex-1 text-[1rem] font-light italic leading-relaxed text-ink/80">
        “{quote}”
      </blockquote>
      <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/10 pt-5">
        <span className="display flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold/15 text-lg text-gold">
          {name.charAt(0)}
        </span>
        <span>
          <span className="display block text-lg leading-tight text-ink">
            {name}
          </span>
          <span className="text-[0.7rem] font-medium uppercase tracking-luxe text-gold">
            {treatment}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function Stars() {
  return (
    <span className="inline-flex gap-0.5" aria-label="5 estrelas">
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="100%" stopColor="#dec58f" />
          </linearGradient>
        </defs>
      </svg>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="url(#starGrad)" aria-hidden>
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 21.4l1.4-6.8L2.2 9.9l6.9-.8L12 2z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.9 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.3 17.7 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.7 6.9l7.3 5.7C43.6 37.4 46.1 31.5 46.1 24.5z" />
      <path fill="#FBBC05" d="M10.5 28.3c-.5-1.4-.7-2.9-.7-4.3s.3-2.9.7-4.3l-7.9-6.1C.9 16.7 0 20.2 0 24s.9 7.3 2.6 10.4l7.9-6.1z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.3-5.7c-2 1.4-4.7 2.3-8.6 2.3-6.3 0-11.6-3.8-13.5-9.3l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
    </svg>
  );
}
