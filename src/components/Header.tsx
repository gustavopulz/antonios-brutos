export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-wide">
          <span className="text-brand">Antonio’s</span> Brutos
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#catalogo" className="hover:text-white">
            Catálogo
          </a>
          <a href="#sobre" className="hover:text-white">
            Sobre
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
          <a href="#contato" className="btn btn-primary">
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
