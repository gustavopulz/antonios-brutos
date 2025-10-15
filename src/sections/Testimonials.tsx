import Section from "../components/Section";
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Peças lindas e com acabamento impecável. Vendas fluindo muito mais rápido.",
    author: "@1",
  },
  {
    text: "Atendimento excelente e entrega rápida. Recomendo demais!",
    author: "@2",
  },
  {
    text: "Qualidade superior, meus clientes amam as peças!",
    author: "@3",
  },
  {
    text: "Ótimo custo-benefício e variedade no catálogo.",
    author: "@4",
  },
  {
    text: "A consultoria ajudou muito a montar meu mix de produtos.",
    author: "@5",
  },
  {
    text: "Fidelizei com a marca, sempre surpreende!",
    author: "@6",
  },
];

export default function Testimonials() {
  function useSlidesPerPage() {
    const [slides, setSlides] = useState(3);
    useEffect(() => {
      function update() {
        setSlides(window.innerWidth < 768 ? 1 : 3);
      }
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }, []);
    return slides;
  }

  const slidesPerPage = useSlidesPerPage();
  const totalPages = Math.ceil(testimonials.length / slidesPerPage);
  const [page, setPage] = useState(0);

  function getVisible() {
    const start = page * slidesPerPage;
    return testimonials.slice(start, start + slidesPerPage);
  }
  const visible = getVisible();

  const prev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const next = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <Section title="Depoimentos" subtitle="Quem compra recomenda">
      <div className="relative flex flex-col justify-center">
        <div
          className={`grid gap-6 ${
            slidesPerPage === 1 ? "" : "md:grid-cols-3"
          }`}
        >
          {visible.map((item) => (
            <div
              key={item.author}
              className="bg-white/10 backdrop-blur rounded-xl shadow-lg p-8 border border-white/10 flex flex-col h-full items-center text-center transition-all duration-300"
            >
              <div className="flex gap-1 mb-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-brand"
                    aria-hidden
                  >
                    <path d="M12 3l2.09 6.26L21 9.27l-5 4.87L17.18 21 12 17.27 6.82 21 8 14.14l-5-4.87 6.91-1.01z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/90 italic text-lg flex-1">
                “{item.text}”
              </p>
              <p className="mt-4 text-white/60 text-right font-medium w-full">
                {item.author}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/40 text-white/90 hover:bg-white/10 transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Ir para página ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === page
                    ? "w-8 bg-brand"
                    : "w-5 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Próximo"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/40 text-white/90 hover:bg-white/10 transition"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
}
