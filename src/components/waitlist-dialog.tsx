import { useState, type FormEvent } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { ArrowRight, Check, Loader2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { productNames, type ProductId } from '@/lib/ecosystem-content';
import { waitlistSchema, trackEcosystemEvent } from '@/lib/waitlist-schema';
import { registerWaitlist } from '@/lib/waitlist.functions';

export function WaitlistDialog({ product, onClose, onPrivacy }: { product: ProductId | 'all' | null; onClose: () => void; onPrivacy: () => void }) {
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<ProductId[]>(product && product !== 'all' ? [product] : []);
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState<string | null>(null);
  const register = useServerFn(registerWaitlist);

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (loading) return;
    setError('');
    const params = new URLSearchParams(window.location.search);
    const parsed = waitlistSchema.safeParse({ email, interests, consent, website, utmSource: params.get('utm_source')?.slice(0, 200), utmMedium: params.get('utm_medium')?.slice(0, 200), utmCampaign: params.get('utm_campaign')?.slice(0, 200) });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? 'Confira os campos.'); return; }
    setLoading(true);
    trackEcosystemEvent('waitlist_form_submit', interests);
    try {
      const result = await register({ data: parsed.data });
      if (!result.ok) { setError('Não foi possível concluir agora. Tente novamente.'); return; }
      trackEcosystemEvent('waitlist_registration_success', interests);
      setSuccess(result.emailStatus === 'sent' || result.emailStatus === 'pending' ? 'Seu interesse foi registrado. Confira seu e-mail para confirmar o cadastro.' : result.emailStatus === 'confirmed' ? 'Seu e-mail já está confirmado. Os produtos selecionados foram registrados.' : 'Seu interesse foi registrado. A confirmação por e-mail ainda não está disponível; nenhum e-mail foi enviado.');
    } catch { setError('Não foi possível concluir agora. Confira sua conexão e tente novamente.'); }
    finally { setLoading(false); }
  }

  return <Dialog open={product !== null} onOpenChange={open => { if (!open && !loading) onClose(); }}>
    <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] overflow-y-auto rounded-lg border-border bg-card p-6 sm:p-8">
      <DialogHeader className="pr-5"><p className="eyebrow text-primary">Cerne Lab · Lista de espera</p><DialogTitle className="mt-2 text-2xl">Acompanhe o que vem a seguir.</DialogTitle><DialogDescription className="pt-2 leading-relaxed">{product && product !== 'all' ? `Receba novidades de disponibilidade do ${productNames[product]}.` : 'Escolha os produtos que você quer acompanhar.'}</DialogDescription></DialogHeader>
      {success ? <div role="status" className="py-4"><span className="mb-5 grid size-12 place-items-center rounded-full bg-primary/10 text-primary"><Check /></span><h3 className="text-xl font-semibold">Você está na lista.</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{success}</p><Button onClick={onClose} className="mt-6 w-full">Concluir <Check /></Button></div> : <form onSubmit={submit} noValidate className="mt-2 grid gap-5">
        <div><label htmlFor="waitlist-email" className="text-sm font-semibold">Seu e-mail</label><Input id="waitlist-email" type="email" autoComplete="email" maxLength={254} required value={email} onChange={event => setEmail(event.target.value)} placeholder="voce@exemplo.com" className="mt-2 h-12 bg-background" /></div>
        {product === 'all' ? <fieldset><legend className="mb-3 text-sm font-semibold">Quero acompanhar</legend><div className="grid gap-3">{(Object.keys(productNames) as ProductId[]).map(id => <label key={id} className="flex cursor-pointer items-center gap-3 rounded-md border border-border p-3 text-sm"><Checkbox checked={interests.includes(id)} onCheckedChange={checked => { const next = checked === true ? [...interests, id] : interests.filter(item => item !== id); setInterests(next); trackEcosystemEvent('product_interest_select', next); }} />{productNames[id]}</label>)}</div></fieldset> : <input type="hidden" name="product_interest" value={product ?? ''} />}
        <div className="hidden" aria-hidden="true"><label htmlFor="waitlist-website">Website</label><input id="waitlist-website" tabIndex={-1} autoComplete="off" value={website} onChange={event => setWebsite(event.target.value)} /></div>
        <div className="flex items-start gap-3"><Checkbox id="waitlist-consent" checked={consent} onCheckedChange={value => setConsent(value === true)} className="mt-1" /><div className="text-xs leading-relaxed text-muted-foreground"><label htmlFor="waitlist-consent" className="cursor-pointer">Autorizo a Cerne Lab a armazenar meu e-mail e os produtos escolhidos para enviar novidades de disponibilidade.</label>{' '}<Button type="button" variant="link" onClick={onPrivacy} className="h-auto p-0 text-xs">Política de Privacidade</Button></div></div>
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        <Button type="submit" disabled={loading} className="h-12 w-full">{loading ? <><Loader2 className="animate-spin" /> Cadastrando…</> : <>Entrar na lista de espera <ArrowRight /></>}</Button>
        <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground"><Mail className="size-3" /> Sem pagamento. Apenas o seu interesse.</p>
      </form>}
    </DialogContent>
  </Dialog>;
}