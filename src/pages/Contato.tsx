import Section from "../components/Section";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/Input";
import Button from "../components/Button";
import { contatoSchema } from "../lib/form";
import type { ContatoForm } from "../lib/form";

export default function Contato() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<ContatoForm>({ resolver: zodResolver(contatoSchema) });

  function onSubmit(data: ContatoForm) {
    const msg = encodeURIComponent(
      `Olá! Gostaria dos catálogos.\n\nNome: ${data.nome}\nWhatsApp: ${data.whatsapp}\nCidade: ${data.cidade}\nMensagem: ${data.mensagem ?? "-"}`
    );
    window.open(`https://wa.me/5599999999999?text=${msg}`, "_blank");
  }

  return (
    <Section title="Fale com a gente" subtitle="Solicite catálogos e condições pelo WhatsApp.">
      <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-4 max-w-2xl">
        <Input label="Nome" {...register("nome")} error={errors.nome?.message} />
        <Input label="WhatsApp" {...register("whatsapp")} error={errors.whatsapp?.message} />
        <Input label="Cidade/UF" {...register("cidade")} error={errors.cidade?.message} />
        <Input label="Mensagem (opcional)" {...register("mensagem")} />
        <div className="md:col-span-2">
          <Button type="submit" disabled={isSubmitting}>Abrir WhatsApp com os dados</Button>
        </div>
      </form>
    </Section>
  );
}
