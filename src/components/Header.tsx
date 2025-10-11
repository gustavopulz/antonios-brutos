import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium ${
          isActive ? "text-brand-700" : "text-gray-700 hover:text-gray-900"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Antonios Brutos" className="h-8 w-auto" />
          <span className="font-semibold tracking-wide">Antonios Brutos</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">Início</NavItem>
          <NavItem to="/sobre">Sobre</NavItem>
          <NavItem to="/contato">Contato</NavItem>
        </nav>
        <a
          href="https://wa.me/5599999999999"
          className="inline-flex items-center rounded-lg bg-brand-500 px-4 py-2 text-white text-sm font-semibold shadow-soft hover:bg-brand-600 transition"
        >
          Catálogos no WhatsApp
        </a>
      </div>
    </header>
  );
}
