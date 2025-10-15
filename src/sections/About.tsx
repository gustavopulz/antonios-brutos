import Section from "../components/Section";

export default function About() {
  return (
    <Section
      id="sobre"
      title="Sobre nós"
      subtitle="Compromisso com qualidade e parceria de longo prazo"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 mt-4 bg-brand/10 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-black/10 to-black/40" />
        <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-orange-500 to-orange-700 shadow-lg">
          <svg
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-brand"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3l2.09 6.26L21 9.27l-5 4.87L17.18 21 12 17.27 6.82 21 8 14.14l-5-4.87 6.91-1.01z"
            />
          </svg>
        </div>
        <div className="prose prose-invert max-w-none prose-p:leading-relaxed">
          <p className="text-brand font-semibold text-xl mb-2">
            Nossa missão é impulsionar o sucesso de revendedores e marcas
            próprias com semijoias de alta qualidade.
          </p>
          <p className="text-white/80">
            Somos fabricantes de semijoias no bruto em Limeira-SP. Atendemos
            revendedores e marcas próprias, com foco em qualidade, acabamento e
            alta fusão. Nosso atendimento é consultivo para ajudar você a montar
            um mix campeão.
          </p>
          <ul className="mt-4 text-white/70 list-disc pl-5">
            <li>Produção própria e controle de qualidade rigoroso</li>
            <li>Atendimento consultivo e personalizado</li>
            <li>Mix variado para diferentes públicos</li>
            <li>Parceria de longo prazo para o seu crescimento</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
