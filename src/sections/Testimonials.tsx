import Section from "../components/Section";

export default function Testimonials() {
  return (
    <Section title="Depoimentos" subtitle="Quem compra recomenda">
      <div className="grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card p-6 text-sm">
            <p className="text-white/80">
              “Peças lindas e com acabamento impecável. Vendas fluindo muito
              mais rápido.”
            </p>
            <p className="mt-4 text-white/50">— Cliente #{i}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
