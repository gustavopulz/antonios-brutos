import { z } from "zod";

export const contatoSchema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  whatsapp: z.string().min(8, "Informe um WhatsApp válido"),
  cidade: z.string().min(2, "Informe a cidade/UF"),
  mensagem: z.string().optional(),
});

export type ContatoForm = z.infer<typeof contatoSchema>;
