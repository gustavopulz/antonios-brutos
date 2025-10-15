import Section from "../components/Section";

const items = [
  {
    q: "Como faço meu primeiro pedido?",
    a: "Fale no WhatsApp informando seu nome, cidade/estado e interesse. Enviamos o catálogo e orientamos no mix.",
  },
  {
    q: "Vocês enviam para todo o Brasil?",
    a: "Sim. Atendemos todo o país com opções de frete e prazos ágeis.",
  },
  {
    q: "As peças são hipoalergênicas?",
    a: "Sim, utilizamos matérias-primas com foco em conforto e durabilidade.",
  },
];

export default function FAQ() {
  return (
    <Section
      id="faq"
      title="Perguntas Frequentes"
      subtitle="Se tiver outra dúvida, chame no WhatsApp"
    >
      <div className="grid gap-4">
        {items.map(({ q, a }) => (
          <details
            key={q}
            className="group rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <summary className="cursor-pointer list-none text-base font-medium">
              {q}
              <span className="float-right opacity-50 group-open:rotate-45 transition">
                ＋
              </span>
            </summary>
            <p className="mt-2 text-white/70">{a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
