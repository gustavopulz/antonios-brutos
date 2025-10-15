import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

const catalogData = [
  {
    title: "Brincos",
    images: ["/catalogo/teste.jpg", "/catalogo/teste.jpg"],
    instagram: "https://www.instagram.com/antoniosbrutos",
  },
  {
    title: "Colares",
    images: ["/catalogo/teste.jpg", "/catalogo/teste.jpg"],
    instagram: "https://www.instagram.com/antoniosbrutos",
  },
  {
    title: "Anéis",
    images: ["/catalogo/teste.jpg", "/catalogo/teste.jpg"],
    instagram: "https://www.instagram.com/antoniosbrutos",
  },
  {
    title: "Pulseiras",
    images: ["/catalogo/teste.jpg", "/catalogo/teste.jpg"],
    instagram: "https://www.instagram.com/antoniosbrutos",
  },
  {
    title: "Chokers",
    images: ["/catalogo/teste.jpg", "/catalogo/teste.jpg"],
    instagram: "https://www.instagram.com/antoniosbrutos",
  },
  {
    title: "Kits Mostruário",
    images: ["/catalogo/teste.jpg", "/catalogo/teste.jpg"],
    instagram: "https://www.instagram.com/antoniosbrutos",
  },
];

export default function CatalogSlider() {
  const [index, setIndex] = useState(0);
  const total = catalogData.length;
  const section = catalogData[index];

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(total - 1, i + 1));

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* header */}
      <header className="mb-6 flex items-center justify-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-brand text-center">
          {section.title}
        </h3>
      </header>
      {/* slide content */}
      <div className="relative">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-3">
          {section.images.map((src, i) => (
            <div key={i} className="flex items-center justify-center">
              <button
                type="button"
                className="relative aspect-[4/5] w-full max-w-md max-h-80 sm:max-h-96 overflow-hidden rounded-lg border border-white/10 bg-white/5 group focus:outline-none"
                style={{ maxHeight: "24rem" }}
                onClick={() => {
                  setLightboxIndex(i);
                  setLightboxOpen(true);
                }}
                aria-label={`Expandir imagem ${section.title} ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`${section.title} foto ${i + 1}`}
                  className="h-full w-full object-cover group-hover:scale-[1.02] transition"
                  loading="lazy"
                  style={{ maxHeight: "24rem" }}
                />
              </button>
            </div>
          ))}
          {/* Lightbox */}
          {lightboxOpen && (
            <ImageLightbox
              srcList={section.images}
              index={lightboxIndex}
              onClose={() => setLightboxOpen(false)}
              onIndexChange={setLightboxIndex}
              caption={(i) => `${section.title} — Foto ${i + 1}`}
            />
          )}
          <div className="flex items-center justify-center">
            <a
              href={section.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full max-w-md h-full"
              aria-label={`Ver mais produtos de ${section.title}`}
            >
              <div
                className="relative aspect-[4/5] w-full max-h-80 sm:max-h-96 flex flex-col items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/[0.06] transition"
                style={{ maxHeight: "24rem" }}
              >
                <div className="flex flex-col items-center gap-2 text-white">
                  <div className="h-12 w-12 grid place-items-center rounded-full bg-white/10 border border-white/20 group-hover:bg-brand group-hover:border-transparent transition">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </div>
                  <span className="text-sm tracking-wide uppercase text-white/80 group-hover:text-white">
                    Ver mais
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* arrows */}
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          aria-label="Slide anterior"
          className="absolute -left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/50 text-white/90 backdrop-blur hover:bg-white/10 disabled:opacity-40"
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
            aria-hidden
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          disabled={index === total - 1}
          aria-label="Próximo slide"
          className="absolute -right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/50 text-white/90 backdrop-blur hover:bg-white/10 disabled:opacity-40"
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
            aria-hidden
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      {/* dots */}
      <div className="mt-6 flex items-center gap-2 justify-center">
        {catalogData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-brand" : "w-5 bg-white/25 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
