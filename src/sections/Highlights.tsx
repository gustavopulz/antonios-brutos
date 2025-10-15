import Section from "../components/Section";
import FeatureCard from "../components/FeatureCard";

export default function Highlights() {
  return (
    <Section
      title="Diferenciais"
      subtitle="Pensado para facilitar o seu negócio"
    >
      <div className="grid gap-6 md:grid-cols-3">
        <FeatureCard
          title="Fábrica Própria"
          desc="Produção própria com curadoria de tendências e acabamento premium."
        />
        <FeatureCard
          title="Prazos Ágeis"
          desc="Envio para todo o Brasil com logística otimizada."
        />
        <FeatureCard
          title="Variedade"
          desc="Brincos, colares, anéis, pulseiras, chokers e mais."
        />
      </div>
    </Section>
  );
}
