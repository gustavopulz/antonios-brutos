import Section from "../components/Section";

export default function About() {
  return (
    <Section
      id="sobre"
      title="Sobre nós"
      subtitle="Compromisso com qualidade e parceria de longo prazo"
    >
      <div className="prose prose-invert max-w-none prose-p:leading-relaxed">
        <p>
          Somos fabricantes de semijoias no bruto em Limeira-SP. Atendemos
          revendedores e marcas próprias, com foco em qualidade, acabamento e
          alta fusão. Nosso atendimento é consultivo para ajudar você a montar
          um mix campeão.
        </p>
      </div>
    </Section>
  );
}
