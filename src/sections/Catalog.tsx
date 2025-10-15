import Section from "../components/Section";
import ProductCard from "../components/ProductCard";

export default function Catalog() {
  return (
    <Section
      id="catalogo"
      title="Catálogo"
      subtitle="Algumas categorias para você iniciar"
    >
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <ProductCard title="Brincos" tag="tendências" />
        <ProductCard title="Colares" />
        <ProductCard title="Anéis" />
        <ProductCard title="Pulseiras" />
        <ProductCard title="Chokers" />
        <ProductCard title="Kits Mostruário" />
      </div>
      <div className="mt-8">
        <a href="#contato" className="btn btn-primary">
          Quero fazer meu pedido
        </a>
      </div>
    </Section>
  );
}
