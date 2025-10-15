import { useMemo, useState } from "react";
// Função para formatar telefone brasileiro corretamente
function formatPhone(value: string) {
  let v = value.replace(/\D/g, "");
  if (v.length > 11) v = v.slice(0, 11);
  if (v.length > 2) {
    v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
  } else if (v.length > 0) {
    v = `(${v}`;
  }
  if (v.length > 10) {
    v = v.slice(0, 10) + "-" + v.slice(10);
  }
  return v;
}

// Estilo global para select aberto (focus) modo dark
const selectDarkStyle = `
  select:focus {
    background-color: #18181b !important;
    color: #fff !important;
  }
  select:focus option {
    background-color: #18181b !important;
    color: #fff !important;
  }
`;

// Replace this with your actual WhatsApp number or import from config
const WHATSAPP_NUMBER = "5519997404451";

export default function WhatsAppForm() {
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [interesse, setInteresse] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  const estados = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];
  const interesses = [
    "Brincos",
    "Colares",
    "Anéis",
    "Pulseiras",
    "Chokers",
    "Kit Mostruário",
  ];

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

  function validate() {
    const newErrors: { [k: string]: string } = {};
    if (!nome) newErrors.nome = "Por favor, preencha o nome.";
    if (!celular) newErrors.celular = "Por favor, preencha o celular.";
    if (!cidade) newErrors.cidade = "Por favor, preencha a cidade.";
    if (!estado) newErrors.estado = "Por favor, selecione o estado.";
    if (!interesse) newErrors.interesse = "Por favor, selecione o interesse.";
    if (!mensagem) newErrors.mensagem = "Por favor, escreva uma mensagem.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({
      nome: true,
      celular: true,
      cidade: true,
      estado: true,
      interesse: true,
      mensagem: true,
    });
    if (!validate()) return;
    window.open(url, "_blank");
  }

  return (
    <>
      <style>{selectDarkStyle}</style>
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 border border-white/5 rounded-2xl p-6"
      >
        {/* Nome sozinho */}
        <div>
          <label className="block text-sm text-white/70">Nome</label>
          <input
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
              setTouched((t) => ({ ...t, nome: true }));
            }}
            onBlur={() => setTouched((t) => ({ ...t, nome: true }))}
            placeholder="Digite seu nome"
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-brand placeholder:text-gray-400 text-white"
          />
          {touched.nome && errors.nome && (
            <span className="text-xs text-red-400 mt-1 block">
              {errors.nome}
            </span>
          )}
        </div>
        {/* Celular e Interesse lado a lado */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white/70">Celular</label>
            <input
              value={celular}
              onChange={(e) => {
                const formatted = formatPhone(e.target.value);
                setCelular(formatted);
                setTouched((t) => ({ ...t, celular: true }));
              }}
              onBlur={() => setTouched((t) => ({ ...t, celular: true }))}
              placeholder="(19) 99999-9999"
              inputMode="tel"
              maxLength={16}
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-brand placeholder:text-gray-400 text-white"
            />
            {touched.celular && errors.celular && (
              <span className="text-xs text-red-400 mt-1 block">
                {errors.celular}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm text-white/70">Interesse</label>
            <select
              value={interesse}
              onChange={(e) => {
                setInteresse(e.target.value);
                setTouched((t) => ({ ...t, interesse: true }));
              }}
              onBlur={() => setTouched((t) => ({ ...t, interesse: true }))}
              className={`mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-brand ${
                !interesse ? "text-gray-400" : "text-white"
              }`}
            >
              <option value="" disabled className="text-gray-400">
                Selecione uma opção
              </option>
              {interesses.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {touched.interesse && errors.interesse && (
              <span className="text-xs text-red-400 mt-1 block">
                {errors.interesse}
              </span>
            )}
          </div>
        </div>
        {/* Cidade e Estado lado a lado */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-white/70">Cidade</label>
            <input
              value={cidade}
              onChange={(e) => {
                setCidade(e.target.value);
                setTouched((t) => ({ ...t, cidade: true }));
              }}
              onBlur={() => setTouched((t) => ({ ...t, cidade: true }))}
              placeholder="Digite sua cidade"
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-brand placeholder:text-gray-400 text-white"
            />
            {touched.cidade && errors.cidade && (
              <span className="text-xs text-red-400 mt-1 block">
                {errors.cidade}
              </span>
            )}
          </div>
          <div>
            <label className="block text-sm text-white/70">Estado</label>
            <select
              value={estado}
              onChange={(e) => {
                setEstado(e.target.value);
                setTouched((t) => ({ ...t, estado: true }));
              }}
              onBlur={() => setTouched((t) => ({ ...t, estado: true }))}
              className={`mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-brand ${
                !estado ? "text-gray-400" : "text-white"
              }`}
            >
              <option value="" disabled className="text-gray-400">
                Selecione uma opção
              </option>
              {estados.map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
            {touched.estado && errors.estado && (
              <span className="text-xs text-red-400 mt-1 block">
                {errors.estado}
              </span>
            )}
          </div>
        </div>
        {/* Mensagem */}
        <div>
          <label className="block text-sm text-white/70">Mensagem</label>
          <textarea
            value={mensagem}
            onChange={(e) => {
              setMensagem(e.target.value);
              setTouched((t) => ({ ...t, mensagem: true }));
            }}
            onBlur={() => setTouched((t) => ({ ...t, mensagem: true }))}
            rows={4}
            placeholder="Digite sua mensagem"
            className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-brand placeholder:text-gray-400 text-white"
          />
          {touched.mensagem && errors.mensagem && (
            <span className="text-xs text-red-400 mt-1 block">
              {errors.mensagem}
            </span>
          )}
        </div>
        {/* Botão */}
        <div>
          <button
            type="submit"
            className="btn bg-brand text-black hover:bg-brand/90 py-3 px-8 font-medium rounded shadow-lg transition w-full md:w-auto flex items-center justify-center gap-2"
          >
            Enviar por Whatsapp
          </button>
        </div>
      </form>
    </>
  );
}
