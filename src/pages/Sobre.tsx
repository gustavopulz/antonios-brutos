import Section from "../components/Section";

export default function Sobre() {
  return (
    <>
      <Section title="Sobre a Antonios Brutos" subtitle="Fabricante de semijoias no bruto — Limeira/SP.">
        <div className="prose prose-neutral max-w-none">
          <p>
            Nascemos com a missão de facilitar a vida de quem empreende com semijoias:
            selecionamos modelos com excelente giro, prontos para receber o banho
            na cor e milésimo que você definir. Isso garante controle de qualidade e margem.
          </p>
          <p>
            Atendemos atacadistas, banhadores e marcas que precisam de constância
            de fornecimento, variedade e suporte próximo.
          </p>
        </div>
      </Section>
    </>
  );
}
