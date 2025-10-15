import Section from "../components/Section";
import WhatsAppForm from "../components/WhatsAppForm";

export default function CTA() {
  return (
    <Section
      id="contato"
      title="Fale com a fábrica"
      subtitle="Preencha e clique para abrir o WhatsApp"
    >
      <div className="card">
        <WhatsAppForm />
      </div>
    </Section>
  );
}
