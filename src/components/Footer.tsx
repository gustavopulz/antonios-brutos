export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p>
            © {new Date().getFullYear()} Antonios Brutos — Semijoias no bruto.
            Todos os direitos reservados.
          </p>
          <p className="space-x-3">
            <a className="underline hover:text-gray-900" href="https://www.instagram.com/antoniosbrutos/" target="_blank" rel="noreferrer">Instagram</a>
            <a className="underline hover:text-gray-900" href="/politicas">Políticas</a>
          </p>
        </div>
        <p className="mt-2 text-xs">
          Fabricante de semijoias no bruto — Limeira/SP. Envio para todo o Brasil.
        </p>
      </div>
    </footer>
  );
}
