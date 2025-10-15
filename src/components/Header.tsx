import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="px-4 md:px-12 lg:px-40 flex h-16 items-center justify-between max-w-full">
        <a href="#" className="text-lg font-semibold tracking-wide select-none">
          <span className="text-brand">Antonio’s</span> Brutos
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm h-16 items-center">
          <a href="#catalogo" className="hover:text-white">
            Catálogo
          </a>
          <a href="#sobre" className="hover:text-white">
            Sobre
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
          <a
            href="#contato"
            className="btn border border-brand/60 bg-transparent text-brand hover:bg-brand/10 py-2 px-4 font-medium rounded shadow-lg transition"
          >
            Fazer Pedido
          </a>
        </nav>
        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="w-7 h-7 text-brand"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>
      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-black/95 px-4 pb-6 pt-2 flex flex-col gap-3 border-b border-white/10 animate-fade-in-down">
          <a
            href="#catalogo"
            className="hover:text-white py-2"
            onClick={() => setOpen(false)}
          >
            Catálogo
          </a>
          <a
            href="#sobre"
            className="hover:text-white py-2"
            onClick={() => setOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#faq"
            className="hover:text-white py-2"
            onClick={() => setOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#contato"
            className="btn border border-brand/60 bg-transparent text-brand hover:bg-brand/10 py-2 px-4 font-medium rounded shadow-lg transition mt-2"
            onClick={() => setOpen(false)}
          >
            Fazer Pedido
          </a>
        </nav>
      )}
    </header>
  );
}
