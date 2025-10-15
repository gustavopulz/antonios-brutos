import { useMemo, useState } from "react";

// Replace this with your actual WhatsApp number or import from config
const WHATSAPP_NUMBER = "5519997404451";

export default function WhatsAppForm() {
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("SP");
  const [interesse, setInteresse] = useState("Brincos");
  const [mensagem, setMensagem] = useState(
    "Olá! Gostaria de falar sobre as semijoias no bruto."
  );

  const url = useMemo(() => {
    const texto = [
      `*Novo contato pelo site*`,
      `*Nome:* ${nome}`,
      `*Celular:* ${celular}`,
      `*Local:* ${cidade}-${estado}`,
      `*Interesse:* ${interesse}`,
      "",
      mensagem,
    ].join("\n");
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
  }, [nome, celular, cidade, estado, interesse, mensagem]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.open(url, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <div className="md:col-span-1">
        <label className="block text-sm text-white/70">Nome</label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div className="md:col-span-1">
        <label className="block text-sm text-white/70">Celular</label>
        <input
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
          required
          placeholder="(19) 99999-9999"
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div>
        <label className="block text-sm text-white/70">Cidade</label>
        <input
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          required
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div>
        <label className="block text-sm text-white/70">Estado</label>
        <input
          value={estado}
          onChange={(e) => setEstado(e.target.value.toUpperCase())}
          maxLength={2}
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div>
        <label className="block text-sm text-white/70">Interesse</label>
        <select
          value={interesse}
          onChange={(e) => setInteresse(e.target.value)}
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-brand"
        >
          <option>Brincos</option>
          <option>Colares</option>
          <option>Anéis</option>
          <option>Pulseiras</option>
          <option>Chokers</option>
          <option>Kit Mostruário</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm text-white/70">Mensagem</label>
        <textarea
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          rows={4}
          className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-brand"
        />
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="btn btn-primary w-full md:w-auto">
          Falar no WhatsApp
        </button>
      </div>
    </form>
  );
}
