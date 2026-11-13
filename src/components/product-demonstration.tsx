import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ecosystem } from '@/lib/ecosystem-content';
import { FluxoVideo } from '@/components/fluxo-video';

export function ProductDemonstration({ product }: { product: (typeof ecosystem)[number] }) {
  return <section id={`demo-${product.id}`} className={`product-section product-${product.id}`}>
    <div className="page-container"><div className="section-heading"><div><p className="eyebrow text-primary">Por dentro do produto</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{product.name}</h2></div><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{product.description}</p></div>
      <Tabs defaultValue={product.tabs[0]?.name} className="mt-7">
        <div className="overflow-x-auto pb-2"><TabsList aria-label={`Recursos do ${product.name}`} className="h-auto min-w-max justify-start gap-1 rounded-none border-b border-border bg-transparent p-0 pb-3">{product.tabs.map(tab => <TabsTrigger key={tab.name} value={tab.name} className="rounded-md px-4 py-2.5 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none">{tab.name}</TabsTrigger>)}</TabsList></div>
        {product.tabs.map(tab => <TabsContent key={tab.name} value={tab.name} className="mt-4"><div className="mb-5 flex min-h-12 flex-wrap items-center justify-between gap-2"><p className="text-sm text-muted-foreground">{tab.description}</p><span className="text-xs text-muted-foreground">{product.id === 'financas-metas' ? 'Interface real · dados de exemplo' : 'Visão geral real do produto'}</span></div><figure className={`demo-preview ${product.id === 'financas-metas' ? 'finance-preview' : ''}`}><img src={tab.image} alt={`${tab.name}: ${product.alt}`} width={product.id === 'fluxo-vendas' ? 1920 : 966} height={product.id === 'fluxo-vendas' ? 1080 : 626} loading="lazy" decoding="async" className="h-full w-full object-contain" /></figure></TabsContent>)}
      </Tabs>
      {product.id === 'fluxo-vendas' && <div className="mt-8 border-t border-border pt-6"><div className="flex items-center justify-between gap-3"><p className="text-sm font-semibold">Fluxo Vendas em movimento</p><span className="text-xs text-muted-foreground">Gravação real</span></div><FluxoVideo /></div>}
    </div>
  </section>;
}