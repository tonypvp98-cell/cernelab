import { createFileRoute, Link } from '@tanstack/react-router';
import { useServerFn } from '@tanstack/react-start';
import { useState } from 'react';
import { Check, Mail, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { confirmWaitlist } from '@/lib/waitlist.functions';

export const Route = createFileRoute('/confirmar')({
  head: () => ({ meta: [{ title: 'Confirme seu interesse | Cerne Lab' }, { name: 'description', content: 'Confirme seu e-mail na lista de espera dos produtos Cerne Lab.' }, { property: 'og:title', content: 'Lista de espera — confirmação | Cerne Lab' }, { property: 'og:description', content: 'Confirme seu interesse nos produtos da Cerne Lab.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }, { name: 'robots', content: 'noindex' }] }),
  component: Confirmation,
});
function Confirmation() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const confirm = useServerFn(confirmWaitlist);
  async function submit() {
    const token = new URLSearchParams(window.location.search).get('token');
    if (!token || !/^[a-f0-9-]{72}$/.test(token)) { setState('error'); return; }
    setState('loading');
    try { const result = await confirm({ data: { token } }); setState(result.ok ? 'success' : 'error'); }
    catch { setState('error'); }
  }
  return <main className="page-container flex min-h-dvh flex-col items-center justify-center py-20 text-center"><span className="mb-6 text-primary">{state === 'success' ? <Check className="size-10" /> : <Mail className="size-10" />}</span><p className="eyebrow text-primary">Cerne Lab</p><h1 className="mt-4 text-3xl font-semibold">{state === 'success' ? 'E-mail confirmado.' : 'Confirme seu interesse.'}</h1><p role="status" className="mt-4 max-w-md text-muted-foreground">{state === 'success' ? 'Seu interesse nos produtos foi registrado com seu e-mail confirmado.' : state === 'error' ? 'Este link é inválido, já foi utilizado ou expirou. Você pode cadastrar seu interesse novamente.' : 'Confirme que este e-mail é seu para concluir sua inscrição na lista de espera.'}</p>{state !== 'success' && state !== 'error' && <Button onClick={submit} disabled={state === 'loading'} className="mt-7 h-12">{state === 'loading' ? <Loader2 className="animate-spin" /> : <Check />} Confirmar meu e-mail</Button>}<Button asChild variant="link" className="mt-6"><Link to="/">Voltar à Cerne Lab</Link></Button></main>;
}