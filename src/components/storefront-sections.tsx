import { ArrowUpRight, Package, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { bundles, testimonials, releaseNotes, publishedBundles, publishedTestimonials, publishedReleaseNotes } from "@/lib/storefront-content";

export function StorefrontBundles() {
  const items = publishedBundles(bundles);
  if (!items.length) return null;
  return <section id="combos" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8">
    <p className="text-xs font-semibold uppercase text-gold">Mais possibilidades</p><h2 className="mt-2 text-3xl font-bold">Combos Exclusivos</h2>
    <div className="mt-8 grid gap-6 sm:grid-cols-2">{items.map(bundle => <article key={bundle.id} className="glass glow-border rounded-2xl p-6"><Package className="h-6 w-6 text-gold" /><h3 className="mt-4 text-xl font-bold">{bundle.title}</h3><p className="mt-3 text-sm text-muted-foreground">{bundle.description}</p><ul className="mt-4 grid gap-2 text-sm">{bundle.apps.map(app => <li key={app}>{app}</li>)}</ul><p className="mt-6 text-sm text-muted-foreground line-through">{bundle.originalPrice}</p><p className="text-2xl font-bold text-gold">{bundle.price}</p><p className="mt-1 text-xs text-muted-foreground">Pagamento único • acesso vitalício</p><Button asChild className="mt-5 h-12 w-full"><a href={bundle.checkoutUrl} target="_blank" rel="noopener noreferrer">Garantir combo <ArrowUpRight /></a></Button></article>)}</div>
  </section>;
}

export function StorefrontTestimonials() {
  const items = publishedTestimonials(testimonials);
  if (!items.length) return null;
  return <section id="depoimentos" className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><p className="text-xs font-semibold uppercase text-gold">Na rotina de quem empreende</p><h2 className="mt-2 text-3xl font-bold">Quem usa, conta</h2><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map(item => <figure key={item.id} className="glass rounded-2xl p-6"><Quote className="h-6 w-6 text-primary" /><blockquote className="mt-4 text-sm leading-relaxed">“{item.quote}”</blockquote><figcaption className="mt-6 border-t border-border pt-4"><p className="text-sm font-semibold">{item.name}</p><p className="mt-1 text-xs text-muted-foreground">{item.role}</p></figcaption></figure>)}</div></section>;
}

export function StorefrontChangelog() {
  const items = publishedReleaseNotes(releaseNotes);
  if (!items.length) return null;
  return <section id="atualizacoes" className="mx-auto max-w-3xl px-5 py-10 sm:px-8"><h2 className="text-xl font-bold">Notas de Atualização</h2><Accordion type="single" collapsible className="mt-4 border-y border-border">{items.map(item => <AccordionItem key={item.id} value={item.id}><AccordionTrigger className="text-left"><span className="grid gap-1"><span>{item.app} • {item.version}</span><time dateTime={item.date} className="text-xs font-normal text-muted-foreground">{item.date}</time></span></AccordionTrigger><AccordionContent><ul className="grid gap-2 text-muted-foreground">{item.changes.map(change => <li key={change}>• {change}</li>)}</ul></AccordionContent></AccordionItem>)}</Accordion></section>;
}