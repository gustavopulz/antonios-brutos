import Section from "../components/Section";

export default function Hero() {
  return (
    <Section>
      <div className="container-page grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            SemiJoias no Bruto direto da fábrica{" "}
            <span className="text-brand">de Limeira-SP</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-prose">
            Qualidade, variedade e prazos rápidos para quem empreende com
            semijoias. Monte seu mostruário com peças que vendem.
          </p>
          <div className="mt-8 flex gap-3">
            <button
              onClick={() => {
                window.location.hash = "#catalogo";
              }}
              className="btn bg-brand text-black hover:bg-brand/90 py-3 px-6 font-medium rounded"
            >
              Ver catálogo
            </button>
            <button
              onClick={() => {
                window.location.hash = "#contato";
              }}
              className="btn bg-white/10 text-white hover:bg-white/20 py-3 px-6 font-medium rounded"
            >
              Tirar dúvidas
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/4] w-full rounded-3xl border border-white/10 bg-grid bg-grid-size-grid bg-white/5 shadow-glow overflow-hidden">
            <img
              src="/hero.png"
              alt="Semijoias no Bruto"
              className="object-cover w-full h-full rounded-3xl"
              draggable={false}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
        </div>
      </div>
    </Section>
  );
}
