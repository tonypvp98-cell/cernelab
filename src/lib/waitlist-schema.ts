import { z } from 'zod';

export const productInterestSchema = z.enum(['fluxo-vendas', 'financas-metas']);
export const waitlistSchema = z.object({
  email: z.string().trim().toLowerCase().max(254).email('Informe um e-mail válido.'),
  interests: z.array(productInterestSchema).min(1, 'Escolha ao menos um produto.').max(2).transform(items => [...new Set(items)]),
  consent: z.literal(true, { errorMap: () => ({ message: 'É necessário autorizar o cadastro.' }) }),
  website: z.string().max(0, 'Não foi possível validar o cadastro.').default(''),
  utmSource: z.string().max(200).optional(),
  utmMedium: z.string().max(200).optional(),
  utmCampaign: z.string().max(200).optional(),
});
export type WaitlistInput = z.input<typeof waitlistSchema>;
export function mergeInterests(existing: string[], incoming: string[]) { return [...new Set([...existing, ...incoming])]; }
export function trackEcosystemEvent(name: string, interests: string[] = []) {
  // Optional analytics listener receives no email, consent record or other personal data.
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('cerne:analytics', { detail: { event: name, product_interests: interests } }));
}