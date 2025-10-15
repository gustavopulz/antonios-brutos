export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80">
      <div className="container-page py-10 text-sm text-white/70">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Antonio’s Brutos. Todos os direitos
            reservados.
          </p>
          <p>
            Siga:{" "}
            <a
              className="underline hover:text-white"
              href="https://www.instagram.com/antoniosbrutos"
              target="_blank"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
