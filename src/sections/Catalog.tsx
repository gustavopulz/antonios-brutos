import Section from "../components/Section";
import CatalogSlider from "../components/CatalogSlider";

export default function Catalog() {
  return (
    <Section id="catalogo" title={undefined} className="bg-brand/10">
      <header className="mb-2 flex flex-col items-center">
        <h2 className="section-title text-white font-bold text-2xl text-center">
          Catálogo
        </h2>
      </header>
      <p className="text-white/70 mb-6 max-w-2xl mx-auto text-center">
        Confira algumas das principais categorias do nosso catálogo. Clique em
        "Quero fazer meu pedido" para receber o portfólio completo e condições
        especiais.
      </p>
      <CatalogSlider />
      <div className="mt-10 flex justify-center">
        <a
          href="#contato"
          className="btn bg-brand text-black hover:bg-brand/90 py-3 px-8 font-medium rounded shadow-lg transition"
        >
          Quero fazer meu pedido
        </a>
      </div>
    </Section>
  );
}
