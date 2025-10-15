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

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section
      id="faq"
      title="Perguntas Frequentes"
      subtitle="Se tiver outra dúvida, chame no WhatsApp"
    >
      <div className="grid gap-4">
        {items.map(({ q, a }, idx) => {
          const isOpen = open === idx;
          return (
            <div
              key={q}
              className={`rounded-xl border border-white/10 bg-white/5 p-5 cursor-pointer transition-all ${
                isOpen ? "ring-2 ring-brand/30" : ""
              }`}
              onClick={() => setOpen(isOpen ? null : idx)}
              tabIndex={0}
              role="button"
              aria-expanded={isOpen}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  setOpen(isOpen ? null : idx);
              }}
            >
              <div className="flex items-center justify-between text-base font-medium select-none">
                {q}
                <span
                  className={`ml-2 opacity-50 transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  ＋
                </span>
              </div>
              {isOpen && <p className="mt-2 text-white/70">{a}</p>}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
