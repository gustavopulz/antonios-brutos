export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80">
      <div className="px-4 md:px-12 lg:px-40 py-8 flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0 text-white/70 text-sm text-center md:text-left">
        <span>
          © {new Date().getFullYear()} Antonio’s Brutos. Todos os direitos
          reservados.
        </span>
        <a
          href="https://www.instagram.com/antoniosbrutos"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Antonio's Brutos"
          className="hover:scale-110 transition"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="32"
              height="32"
              rx="16"
              fill="#fff"
              fillOpacity="0.08"
            />
            <rect
              x="7"
              y="7"
              width="18"
              height="18"
              rx="6"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle cx="16" cy="16" r="4.5" stroke="#fff" strokeWidth="2" />
            <circle cx="21.2" cy="10.8" r="1.2" fill="#fff" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
