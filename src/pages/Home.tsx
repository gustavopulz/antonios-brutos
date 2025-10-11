import { Link } from "react-router-dom";
import { Gem, Sparkles, TrendingUp } from "lucide-react";
import Section from "../components/Section";
import FeatureCard from "../components/FeatureCard";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";
import hero from "/hero.png";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/50 to-white">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Semijoias no bruto"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Semijoias no bruto para quem empreende com qualidade e margem.
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto md:mx-0">
            A <strong>Antonios Brutos</strong> fabrica e distribui peças no
            bruto diretamente de Limeira-SP. Peças modernas e vendáveis, para
            você personalizar o banho e o milésimo conforme sua estratégia.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-white font-semibold shadow-soft hover:bg-brand-700 transition"
            >
              Ver catálogos no WhatsApp
            </a>
            <Link
              to="/sobre"
              className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50 transition"
            >
              Conheça a marca
            </Link>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <Section light title="Por que investir no bruto?" subtitle="Controle de cor, milésimo e acabamento para otimizar sua margem.">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Gem size={24} />}
            title="Controle total do banho"
            description="Defina cor e milésimo conforme seu posicionamento e região."
          />
          <FeatureCard
            icon={<Sparkles size={24} />}
            title="Peças modernas e vendáveis"
            description="Curadoria focada em giro e coleção atual, direto da fábrica em Limeira-SP."
          />
          <FeatureCard
            icon={<TrendingUp size={24} />}
            title="Margem real"
            description="Reduza custo por peça e aumente sua lucratividade final."
          />
        </div>
        <p className="mt-4 text-sm text-gray-500 italic">
          *Conceitos comuns no segmento “alta fusão” e venda no bruto, conforme práticas do mercado.
        </p>
      </Section>

      {/* SOBRE / FABRICANTE */}
      <Section title="Fabricante em Limeira-SP" subtitle="Atendimento ágil e envios para todo o Brasil.">
       <div className="grid md:grid-cols-2 gap-10 items-start">
  {/* Texto à esquerda */}
  <div className="space-y-4 text-gray-700 leading-relaxed">
    <p>
      Estamos sediados em <strong>Limeira-SP</strong>, polo nacional de semijoias. 
      Atuamos como fabricante de peças no bruto, com produção e seleção de modelos 
      pensados para atacadistas, banhadores e marcas próprias.
    </p>
    <p>
      Nosso objetivo é simples: oferecer peças de qualidade, com leveza e ótimo 
      custo-benefício, para que você tenha ganho de escala mantendo a excelência 
      final no banho.
    </p>
    <div className="pt-4 flex flex-wrap gap-4 text-sm font-medium">
      <a
        href="https://www.instagram.com/antoniosbrutos/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 underline decoration-brand-400 decoration-2 hover:text-brand-700 transition"
      >
        Siga no Instagram
      </a>
      <a
        href="https://wa.me/5599999999999"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1 underline decoration-brand-400 decoration-2 hover:text-brand-700 transition"
      >
        Fale no WhatsApp
      </a>
    </div>
  </div>

  {/* Card à direita */}
  <div className="relative">
    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-brand-200 via-brand-400 to-brand-100 opacity-60 blur" />
    <div className="relative rounded-2xl bg-white p-8 shadow-lg border border-brand-100">
      <h3 className="font-semibold text-lg text-gray-900 flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-brand-500" />
        Catálogos e linhas
      </h3>
      <ul className="mt-4 space-y-2 text-gray-700 text-sm leading-relaxed">
        <li>• Brincos, colares, pingentes, anéis e pulseiras</li>
        <li>• Linhas lisas, cravejadas, zircônias e pedrarias</li>
        <li>• Modelos contemporâneos e clássicos</li>
      </ul>
      <a
        href="https://wa.me/5599999999999"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block w-full text-center rounded-lg bg-brand-600 text-white px-5 py-3 font-semibold hover:bg-brand-700 shadow-soft transition"
      >
        Solicitar catálogos
      </a>
    </div>
  </div>
</div>

      </Section>

      {/* DEPOIMENTOS */}
      <Section light title="O que dizem nossos clientes">
        <div className="grid md:grid-cols-3 gap-6">
          <Testimonial
            text="Peças com ótimo acabamento no bruto, banho ficou impecável. Giro excelente!"
            author="Carla M., banhadora"
          />
          <Testimonial
            text="Seleção atual e preço justo. Me ajudou a escalar a coleção."
            author="Lucas R., marca própria"
          />
          <Testimonial
            text="Entrega rápida e suporte atencioso. Recomendo!"
            author="Juliana S., atacadista"
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Perguntas frequentes">
        <FAQ
          items={[
            {
              q: "Como peço o catálogo?",
              a: "Clique em “Ver catálogos no WhatsApp” e informe seu CNPJ/CPF e cidade. Enviamos as linhas disponíveis e condições.",
            },
            {
              q: "Vocês enviam para todo o Brasil?",
              a: "Sim, despachamos a partir de Limeira-SP para todas as regiões.",
            },
            {
              q: "Posso escolher cores e milésimos?",
              a: "Sim, o diferencial do bruto é permitir personalização do banho conforme sua estratégia.",
            },
          ]}
        />
      </Section>

      {/* CTA FINAL */}
      <Section light title="Pronto para lucrar com o bruto?">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-white font-semibold shadow-soft hover:bg-brand-700 transition"
          >
            Solicitar catálogos
          </a>
          <Link
            to="/contato"
            className="underline hover:text-brand-700 font-medium"
          >
            Tirar dúvidas
          </Link>
        </div>
      </Section>
    </>
  );
}
