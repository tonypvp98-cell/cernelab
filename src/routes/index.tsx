import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  Check,
  X,
  Download,
  Infinity as InfinityIcon,
  ShieldCheck,
  ArrowUpRight,
  Instagram,
  Link2,
  Share2,
  Smartphone,
  Mail,
  Menu,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ironformCover from "@/assets/ironform-cover.webp.asset.json";
import fluxoHero from "@/assets/fluxo-vendas-hero.webp.asset.json";
import { FluxoVideo } from "@/components/fluxo-video";
import { fluxoContact, otherProductsScope } from "@/lib/fluxo-content";
import { LandingMedia } from "@/components/landing-media";
import financasMain from "@/assets/cernelab_financas_peca1_principal_1600x1000.webp.asset.json";
import financasMainMobile from "@/assets/cernelab_financas_peca1_principal_mobile_1200x900.webp.asset.json";
import financasFeatures from "@/assets/cernelab_financas_peca2_funcionalidades_1920x1080.webp.asset.json";
import { landingFeatures, visibleFeatures } from "@/lib/landing-content";
import cerneLogo from "@/assets/cerne-logo.png";
import { StorefrontBundles, StorefrontTestimonials, StorefrontChangelog } from "@/components/storefront-sections";


const TITLE = "Fluxo Vendas — Dashboard de Vendas | Cerne Lab";
const DESCRIPTION =
  "Fluxo Vendas: acompanhe vendas, faturamento, lucro e estoque do seu comércio em uma interface organizada. Conheça também o Finanças e Produtividade da Cerne Lab.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: fluxoHero.url },
      { name: "twitter:image", content: fluxoHero.url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const INSTAGRAM_URL =
  "https://www.instagram.com/cerne_lab?stkn=Ym9nZW02cWJvc2hl&utm_source=qr";

type Product = {
  name: string;
  tagline: string;
  category: string;
  description: string;
  originalPrice: string;
  price: string;
  cover: string | null;
  alt: string;
  link: string;
  frame: "desktop" | "mobile";
  demoVideo?: string;
  demoGif?: string;
  coverMobile?: string;
  sampleData?: boolean;
};

const products: Product[] = [
  {
    name: "Finanças e Produtividade",
    tagline: "Controle financeiro inteligente",
    category: "Gestão Financeira",
    description:
      "Registre seus gastos, acompanhe sua rotina de alta performance e evolua nas suas metas em um só painel.",
    originalPrice: "R$ 31,25",
    price: "R$ 25,00",
    cover: financasMain.url,
    coverMobile: financasMainMobile.url,
    sampleData: true,
    alt: "Telas do aplicativo Finanças e Produtividade no celular: painel de Finanças com gastos do mês e Dashboard com caixa atual, horas produtivas e progresso da meta principal.",
    link: "https://whop.com/cernelab/financas-metas-acesso-vitalicio/",
    frame: "desktop",
  },
  {
    name: "Ironform",
    tagline: "Gym & AI Coach",
    category: "Fitness & Treino",
    description:
      "Treinos personalizados por IA, acompanhamento de cargas e evolução em tempo real — seu personal no bolso.",
    originalPrice: "R$ 31,25",
    price: "R$ 25,00",
    cover: ironformCover.url,
    alt: "Telas do Ironform em molduras digitais",
    link: "https://whop.com/cernelab/ironform-gym-ai-coach/",
    frame: "mobile",
  },
];

const benefits = [
  {
    icon: Download,
    title: "Sem Download de Loja",
    text: "Adicione à tela inicial direto pelo navegador. Sem App Store, sem Play Store, sem espera.",
  },
  {
    icon: InfinityIcon,
    title: "Acesso Vitalício",
    text: "Pagamento único, sem mensalidades. Consulte as condições de acesso da oferta na Whop.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Whop",
    text: "Compra e acesso gerenciados pela Whop. Consulte os detalhes no checkout.",
  },
];

const faqs = [
  {
    q: "Como recebo meu acesso após o pagamento?",
    a: "Assim que o pagamento é confirmado, você recebe automaticamente por e-mail o link do aplicativo e sua chave de licença. Todo o processo é instantâneo e gerenciado pela Whop.",
  },
  {
    q: "Posso instalar em mais de um dispositivo?",
    a: "Sim. Sua licença é pessoal e pode ser ativada nos seus dispositivos — celular, tablet e computador. Basta abrir o link no navegador e adicionar à tela inicial.",
  },
  {
    q: "Onde insiro minha chave de acesso?",
    a: "Ao abrir o aplicativo pela primeira vez, será exibida uma tela de ativação. Cole sua chave de licença nesse campo e o acesso é liberado na hora.",
  },
];

const highlights = ["Acesso via Link", "Sem Download de Loja", "Funciona em Qualquer Dispositivo"];

const navigation = [
  { label: "Fluxo Vendas", href: "#fluxo-vendas" },
  { label: "Outros produtos", href: "#aplicativos" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Garantia", href: "#garantia" },
  { label: "FAQ", href: "#faq" },
];

const pwaSteps = [
  {
    icon: Link2,
    title: "Acesse o Link",
    text: "Clique no link enviado imediatamente após a compra na Whop.",
  },
  {
    icon: Share2,
    title: "Adicione à Tela Inicial",
    text: "",
  },
  {
    icon: Smartphone,
    title: "Acesso Vitalício",
    text: "Abra o app pelo navegador ou pelo atalho na tela inicial, sem depender de uma loja de aplicativos.",
  },
];

function Index() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-clip bg-background text-foreground">

      <Header />

      <main className="relative">
        <Band><Hero /></Band>
        <Band light><FluxoVendas /></Band>
        <Band><FluxoFaq /></Band>
        <Band light><FinalCta /></Band>
        <Band>
          <Catalog items={products} id="aplicativos" eyebrow="Também da Cerne Lab" title={<>Outros <em>produtos</em></>} />
          <div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="border-l-2 border-gold/40 pl-3 text-sm leading-relaxed text-muted-foreground">{otherProductsScope}</p></div>
        </Band>
        <Band light><Features /></Band>
        <Band><VideoSection /></Band>
        <StorefrontBundles />
        <Band light><PwaAdvantages /></Band>
        <Band><HowItWorks /></Band>
        <Band light><Guarantee /></Band>
        <StorefrontTestimonials />
        <StorefrontChangelog />
        <Band><Faq /></Band>
      </main>

      <Footer />
    </div>
  );
}

function Band({ light = false, children }: { light?: boolean; children: ReactNode }) {
  return <div className={`${light ? "band-light" : "band-dark"} py-10 sm:py-16 lg:py-20`}><div className="reveal">{children}</div></div>;
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-glass-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid min-h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 px-5 py-2 sm:px-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-5">
        <a href="#top" className="flex min-w-0 items-center gap-2.5" onClick={() => setIsMenuOpen(false)}>
          <img
            src={cerneLogo}
            alt="Logotipo da Cerne Lab"
            className="h-9 w-auto shrink-0 brightness-0 invert"
            width={209}
            height={256}
          />
          <span className="truncate text-base font-bold">
            Cerne Lab
          </span>
        </a>
        <nav aria-label="Navegação principal" className="hidden min-w-0 items-center justify-center gap-0.5 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-md px-2.5 py-2 text-xs font-bold uppercase text-muted-foreground transition-colors hover:bg-secondary hover:text-neon xl:px-3">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
        <Button
          asChild
          size="sm"
          className="h-10 shrink-0 px-5 font-semibold"
        >
          <a
            href={fluxoContact.direct}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex flex-col leading-tight">
              <span>Quero conhecer o Fluxo Vendas</span>
              
            </span>
          </a>
        </Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="glass shrink-0 rounded-full lg:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {isMenuOpen && (
        <nav id="menu-mobile" aria-label="Navegação móvel" className="border-t border-glass-border bg-background px-5 py-3 lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => { setIsMenuOpen(false); }} className="rounded-md px-3 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {item.label}
              </a>
            ))}
            <a
              href={fluxoContact.direct}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { setIsMenuOpen(false); }}
              className="btn-neon mt-2 px-4 py-3 text-center text-sm font-semibold"
            >
              Quero conhecer o Fluxo Vendas
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

const fluxoPillars = [
  { title: "Vendas", text: "Registre as vendas e consulte as informações no painel." },
  { title: "Faturamento", text: "Acompanhe o faturamento do negócio em um só lugar." },
  { title: "Margem de lucro", text: "Visualize a margem de lucro das operações." },
  { title: "Estoque", text: "Acompanhe as informações de estoque junto às vendas." },
];

function FluxoCta() {
  return <div className="mt-5">
    <Button asChild className="h-auto min-h-12 max-w-full whitespace-normal btn-neon px-6 py-3 text-sm font-semibold">
      <a href={fluxoContact.direct} target="_blank" rel="noopener noreferrer">Quero conhecer o Fluxo Vendas <ArrowUpRight className="h-4 w-4 shrink-0" /></a>
    </Button>
    <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{fluxoContact.guidance}</p>
  </div>;
}

function Hero() {
  return (
    <section id="fluxo-vendas" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-5 pt-5 sm:px-8 sm:pb-8 sm:pt-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-lg font-bold text-fluxo">Fluxo Vendas <span className="ml-2 text-xs font-medium text-muted-foreground">por Cerne Lab</span></p>
        <h1 className="mt-3 text-[28px] font-extrabold leading-tight sm:text-[40px]">
          Tenha suas vendas e os números do seu negócio <em>em um só lugar.</em>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground">
          Registre vendas e acompanhe faturamento, margem de lucro e estoque em um painel simples e organizado.
        </p>
        <FluxoCta />
      </div>
      <div className="mx-auto mt-8 max-w-5xl overflow-hidden rounded-[20px] border border-glass-border bg-surface">
        <img src={fluxoHero.url} alt="Telas reais do Fluxo Vendas: registro de vendas, faturamento, margem de lucro e controle de estoque" width={1920} height={1080} loading="eager" fetchPriority="high" decoding="async" className="aspect-video w-full object-contain" />
      </div>
    </section>
  );
}

function FluxoVendas() {
  return (
    <section id="demonstracao-fluxo" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-6 sm:px-8 sm:py-8">
      <div className="border-y border-glass-border py-5">
        <p className="text-xs font-semibold uppercase text-fluxo">Sua operação, organizada</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Menos informações <em>espalhadas</em></h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">Quando vendas, faturamento e estoque ficam separados, acompanhar o negócio exige consultar várias informações. O Fluxo Vendas reúne esses números em um painel para facilitar essa consulta.</p>
      </div>
      <h2 className="mt-6 text-2xl font-bold sm:text-3xl">O que você pode <em>acompanhar</em></h2>
      <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {fluxoPillars.map((p) => (
          <li key={p.title} className="flex gap-3 border-t border-glass-border pt-4">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-fluxo" />
            <div><h3 className="text-base font-bold">{p.title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p></div>
          </li>
        ))}
      </ul>
      <div className="mt-7">
        <p className="text-xs font-semibold uppercase text-fluxo">Demonstração real</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Veja o Fluxo Vendas em <em>ação</em></h2>
        <FluxoVideo />
      </div>
      <div className="mt-6 border-b border-glass-border pb-5">
        <h2 className="text-2xl font-bold sm:text-3xl">Mais <em>clareza</em> na rotina</h2>
        <ul className="mt-4 grid gap-3 text-sm font-medium leading-relaxed sm:grid-cols-3">
          {["Consulte os números da operação no mesmo painel.", "Acompanhe vendas e estoque sem perder o contexto.", "Visualize faturamento e margem de lucro de forma organizada."].map((text) => <li key={text} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-fluxo" />{text}</li>)}
        </ul>
      </div>
    </section>
  );
}

function Catalog({ items, id, eyebrow, title }: { items: Product[]; id: string; eyebrow: string; title: ReactNode }) {
  const visibleProducts = items;
  return (
    <section id={id} className="mx-auto max-w-7xl scroll-mt-24 px-5 py-8 sm:px-8 sm:py-12">
      <div className="mb-5 grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Pagamento único, acesso vitalício e liberação automática.
        </p>
      </div>

      <div className="grid gap-5">
        {visibleProducts.map((p) => (
          <article
            key={p.name}
            id={p.name === "Ironform" ? "ironform" : "financas-produtividade"}
            className="glass flex scroll-mt-24 flex-col overflow-hidden rounded-2xl md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
          >
            <div className="relative flex min-w-0 items-center border-b border-glass-border bg-secondary/20 md:border-b-0 md:border-r">
              <ProductMedia product={p} />
            </div>

            <div className="flex min-w-0 flex-1 flex-col p-5 lg:p-7">
              <p className="mb-2 text-xs font-semibold text-neon">{p.category}</p>
              <h3 className="text-2xl font-bold leading-tight">{p.name}</h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{p.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground line-through">De {p.originalPrice}</p>
                  <p className="mt-0.5 text-3xl font-extrabold text-neon">Por {p.price}</p>
                </div>
                <span className="rounded-md border border-neon/30 bg-neon/10 px-3 py-1.5 text-xs font-bold text-neon">
                  20% OFF — Acesso Vitalício
                </span>
              </div>

              <div className="mt-5 grid gap-3">
              <Button asChild className="btn-neon h-12 w-full text-sm font-semibold">
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Garantir Acesso
                <ArrowUpRight className="h-4 w-4" />
              </a>
              </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductMedia({ product }: { product: Product }) {
  if (!product.cover && !product.demoVideo) {
    return <LandingMedia src={null} alt={`Dashboard do ${product.name}`} />;
  }
  return (
    <figure className="w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-glass-border bg-background [contain:layout_paint] sm:aspect-[16/10]">
        {product.demoVideo ? (
          <video autoPlay loop muted playsInline preload="auto" poster={product.cover ?? undefined} aria-label={`Demonstração do ${product.name}`} width={1024} height={640} className="absolute inset-0 h-full w-full object-contain">
            <source src={product.demoVideo} type="video/mp4" />
          </video>
        ) : product.cover ? (
          <picture>
            {product.coverMobile && <source media="(max-width: 640px)" srcSet={product.coverMobile} width={1200} height={900} />}
            <img src={product.demoGif ?? product.cover} alt={product.alt} width={1600} height={1000} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
          </picture>
        ) : null}
      </div>
      {product.sampleData && <figcaption className="mt-1.5 text-center text-[11px] text-muted-foreground">Dados de exemplo</figcaption>}
    </figure>
  );
}

function PwaAdvantages() {
  return (
    <section id="vantagens-pwa" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-8 sm:px-8 sm:py-12">
      <div className="mb-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Por que PWA</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          O formato certo para o seu <em>dia a dia</em>
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          O PWA roda pelo navegador e pode ser adicionado à tela inicial, sem download de loja. O uso de armazenamento depende dos dados salvos pelo aplicativo.
        </p>
      </div>
       <div className="grid gap-5 sm:grid-cols-3">
        {benefits.map(({ icon: Icon, title, text }) => (
           <div key={title} className="glass rounded-2xl p-5">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-neon/30 bg-neon/10 text-neon">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
      <Comparison />
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-8 sm:px-8 sm:py-12">
      <div className="border-y border-glass-border py-6">
        <div className="mb-5 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Como funciona</p>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Finanças e Ironform: da compra à sua <em>tela</em></h3>
        </div>
        <ol className="grid gap-4 sm:grid-cols-3">
          {pwaSteps.map(({ icon: Icon, title, text }, index) => (
            <li
              key={title}
               className="glass relative flex gap-4 rounded-xl p-5 sm:block"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-neon/30 bg-neon/10 text-neon">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 sm:mt-5">
                <p className="text-xs font-bold uppercase text-neon">Passo {index + 1}</p>
                <h4 className="mt-1 text-lg font-semibold">{title}</h4>
                 {index === 1 ? (
                    <div className="mt-3 grid gap-2 text-sm leading-relaxed text-muted-foreground">
                      <div className="border-l border-neon/25 pl-3">
                        <p className="font-bold text-foreground">iOS</p>
                        <p>Compartilhar &gt; Adicionar à Tela de Início</p>
                      </div>
                      <div className="border-l border-neon/25 pl-3">
                        <p className="font-bold text-foreground">Android</p>
                        <p>Menu do navegador &gt; Instalar Aplicativo</p>
                      </div>
                   </div>
                 ) : (
                   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                 )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const comparisonRows = [
  {
    label: "Custo",
    common: "Muitos apps cobram mensalidade",
    cerne: "Pagamento Único (R$ 25,00 Vitalício)",
  },
  {
    label: "Peso no Aparelho",
    common: "Instalação pela loja de aplicativos",
    cerne: "Acesso pelo navegador; armazenamento conforme o uso",
  },
  {
    label: "Burocracia",
    common: "Downloads e atualizações manuais na App Store",
    cerne: "Atalho na tela inicial, sem loja",
  },
];

function Features() {
  const items = visibleFeatures(landingFeatures);
  return (
    <section id="o-que-o-app-faz" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-8 sm:px-8 sm:py-12">
      <p className="text-xs font-semibold uppercase text-neon">Funcionalidades</p>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">O que o Finanças e Produtividade <em>faz</em></h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((f, index) => <article key={f.title} className="glass rounded-2xl p-5">
          <span aria-hidden="true" className="text-xs font-semibold text-neon">0{index + 1}</span>
          <h3 className="mt-3 text-base font-semibold">{f.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
          {f.image && <LandingMedia src={f.image} alt={`Tela ${f.title}`} className="mt-4" />}
        </article>)}
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section id="video" className="mx-auto grid max-w-7xl scroll-mt-24 items-center gap-5 px-5 py-8 sm:px-8 sm:py-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase text-neon">Demonstração</p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Finanças e Produtividade em <em>ação</em></h2>
      </div>
      <figure className="w-full">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-glass-border bg-background [contain:layout_paint]">
          <img src={financasFeatures.url} alt="Três telas do aplicativo Finanças e Produtividade: Rotina de Alta Performance, Consultor IA com projeção da meta principal e gráfico de distribuição de gastos por categoria." width={1920} height={1080} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
        </div>
        <figcaption className="mt-1.5 text-center text-[11px] text-muted-foreground">Dados de exemplo</figcaption>
      </figure>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 text-center sm:px-8 sm:py-12">
      <div className="border-y border-glass-border py-7">
        <h2 className="text-2xl font-bold sm:text-3xl"><em>Conheça</em> o Fluxo Vendas</h2>
        <FluxoCta />
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section id="garantia" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-8 sm:px-8 sm:py-12">
      <div className="glass relative overflow-hidden rounded-2xl border-neon/20 p-5 sm:p-7">
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-neon/30 bg-neon/10 text-neon shadow-neon">
            <ShieldCheck className="h-8 w-8" />
          </span>
          <div className="min-w-0">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Garantia de <em>7 dias</em> pela Whop
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Para Finanças e Produtividade e Ironform, você pode solicitar reembolso em até 7 dias pela Whop, conforme as condições da oferta e o procedimento da plataforma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <div id="comparativo" className="mx-auto mt-8 w-full scroll-mt-24">
      <div className="mb-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Comparativo</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Por que escolher a <em>Cerne Lab</em>
        </h2>
      </div>

      <div className="glass overflow-hidden rounded-2xl border-neon/20">
        <div className="overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-glass-border bg-secondary/40 sm:grid-cols-[0.75fr_1.125fr_1.125fr]">
          <div className="hidden p-4 sm:block sm:p-5" />
          <div className="flex items-center gap-2 p-4 sm:p-5">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-destructive/15">
              <X className="h-4 w-4 text-destructive" strokeWidth={3} />
            </span>
            <span className="text-xs font-semibold leading-tight sm:text-sm">
              Apps Tradicionais de Assinatura
            </span>
          </div>
          <div className="flex items-center gap-2 border-l border-neon/20 bg-neon/10 p-4 sm:p-5">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-success/15">
              <Check className="h-4 w-4 text-neon" strokeWidth={3} />
            </span>
            <span className="text-xs font-bold leading-tight text-neon sm:text-sm">
              Finanças e Ironform
            </span>
          </div>
        </div>

        {/* Rows */}
        {comparisonRows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-2 sm:grid-cols-[0.75fr_1.125fr_1.125fr] ${
              i < comparisonRows.length - 1 ? "border-b border-glass-border" : ""
            }`}
          >
            <div className="col-span-2 flex items-center border-b border-glass-border bg-secondary/20 px-4 py-2.5 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:col-span-1 sm:border-b-0 sm:bg-transparent sm:p-5 sm:text-sm">
              {row.label}
            </div>
            <div className="flex items-center gap-2.5 p-4 sm:p-5">
              <X className="h-4 w-4 shrink-0 text-destructive" strokeWidth={3} />
              <span className="text-xs leading-snug text-muted-foreground sm:text-sm">
                {row.common}
              </span>
            </div>
            <div className="flex items-center gap-2.5 border-l border-neon/20 bg-neon/10 p-4 sm:p-5">
              <Check className="h-4 w-4 shrink-0 text-neon" strokeWidth={3} />
              <span className={`text-xs font-bold leading-snug sm:text-sm ${row.label === "Custo" ? "text-neon" : ""}`}>{row.cerne}</span>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

function FluxoFaq() {
  const items = [
    { q: "O que é o Fluxo Vendas?", a: "É uma ferramenta para registrar vendas e acompanhar faturamento, margem de lucro e estoque em um painel simples e organizado." },
    { q: "Como posso conhecer o produto?", a: "Clique em “Quero conhecer o Fluxo Vendas” para conversar com a Cerne Lab pelo Instagram e solicitar uma demonstração." },
    { q: "Como consultar preços e condições de acesso?", a: "A oferta comercial do Fluxo Vendas está em definição. Converse com a Cerne Lab pelo Instagram para conhecer as condições disponíveis. As ofertas de Finanças e Produtividade e Ironform são separadas." },
  ];
  return <section id="faq" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-6 sm:px-8 sm:py-8">
    <p className="text-xs font-semibold uppercase text-fluxo">Perguntas frequentes</p>
    <h2 className="mt-2 text-2xl font-bold sm:text-3xl"><em>Dúvidas</em> sobre o Fluxo Vendas</h2>
    <Accordion type="single" collapsible className="mt-5 border-y border-glass-border">
      {items.map((item, index) => <AccordionItem key={item.q} value={`fluxo-${index}`} className="border-glass-border last:border-b-0">
        <AccordionTrigger className="py-4 text-left text-base font-semibold hover:no-underline [&>svg]:text-fluxo">{item.q}</AccordionTrigger>
        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
      </AccordionItem>)}
    </Accordion>
    <a href={fluxoContact.profile} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-fluxo underline underline-offset-4">Prefere abrir o perfil no Instagram? <ArrowUpRight className="h-4 w-4" /></a>
  </section>;
}

function Faq() {
  return (
    <section id="faq-outros" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-8 sm:px-8 sm:py-12">
      <div className="mb-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">FAQ</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl"><em>Dúvidas</em> sobre Finanças e Ironform</h2>
      </div>
      <Accordion type="single" collapsible className="mx-auto max-w-4xl border-y border-glass-border">
        {faqs.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`item-${i}`}
            className="border-glass-border last:border-b-0"
          >
            <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline [&>svg]:text-neon">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-glass-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 text-sm text-muted-foreground sm:grid-cols-[1fr_auto] sm:px-8">
        <div>
          <div className="flex items-center gap-2.5 text-foreground">
            <img src={cerneLogo} alt="" className="h-9 w-auto brightness-0 invert" width={209} height={256} />
            <span className="font-bold">Cerne Lab</span>
          </div>
          <a href="mailto:contato@cernelab.com" className="mt-4 inline-flex items-center gap-2 transition-colors hover:text-neon">
            <Mail className="h-4 w-4" />
            contato@cernelab.com
          </a>
          <p className="mt-3">© 2026 Cerne Lab. Todos os direitos reservados.</p>
        </div>
        <nav className="flex flex-col items-start gap-3 sm:items-end">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glow-border inline-flex h-10 items-center gap-2 rounded-full px-4 font-medium text-foreground"
          >
            <Instagram className="h-4 w-4 text-neon" />
            Suporte via Instagram
          </a>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <LegalDialog type="terms" />
            <LegalDialog type="privacy" />
          </div>
        </nav>
      </div>
    </footer>
  );
}

function LegalDialog({ type }: { type: "terms" | "privacy" }) {
  const isTerms = type === "terms";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="h-auto p-0 text-sm font-normal text-muted-foreground transition-colors hover:text-neon"
        >
          {isTerms ? "Termos de Uso" : "Política de Privacidade"}
        </Button>
      </DialogTrigger>
      <DialogContent className="glass max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-xl border-neon/20 p-6 shadow-neon sm:p-8">
        <DialogHeader className="pr-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neon">Cerne Lab</p>
          <DialogTitle className="text-2xl font-bold sm:text-3xl">
            {isTerms ? "Termos de Uso" : "Política de Privacidade"}
          </DialogTitle>
          <DialogDescription className="leading-relaxed">
            {isTerms
              ? "Condições aplicáveis às licenças de Finanças e Produtividade e Ironform; não à oferta do Fluxo Vendas."
              : "Como os aplicativos da Cerne Lab tratam e protegem suas informações."}
          </DialogDescription>
        </DialogHeader>

        {isTerms ? <TermsContent /> : <PrivacyContent />}
      </DialogContent>
    </Dialog>
  );
}

function TermsContent() {
  return (
    <div className="grid gap-5 text-sm leading-relaxed text-muted-foreground">
      <section>
        <h3 className="font-semibold text-foreground">1. Licença de uso individual</h3>
        <p className="mt-1">A compra concede ao titular uma licença pessoal, individual, intransferível e não exclusiva para utilizar o aplicativo PWA adquirido.</p>
      </section>
      <section>
        <h3 className="font-semibold text-foreground">2. Acesso vitalício</h3>
        <p className="mt-1">O pagamento é único e não possui mensalidades. O acesso vitalício refere-se ao direito de uso da versão adquirida enquanto o serviço permanecer disponível e observadas estas condições.</p>
      </section>
      <section>
        <h3 className="font-semibold text-foreground">3. Uso permitido</h3>
        <p className="mt-1">A licença permite o uso do PWA nos dispositivos pessoais do titular. É proibido revender, sublicenciar, compartilhar credenciais, copiar, modificar ou distribuir o aplicativo e seus conteúdos.</p>
      </section>
      <section>
        <h3 className="font-semibold text-foreground">4. Ativação e suporte</h3>
        <p className="mt-1">O acesso é liberado após a confirmação do pagamento pela plataforma de venda. Dúvidas de acesso e suporte podem ser encaminhadas pelos canais oficiais da Cerne Lab.</p>
      </section>
      <section>
        <h3 className="font-semibold text-foreground">5. Garantia</h3>
        <p className="mt-1">O comprador pode solicitar reembolso integral no prazo de 7 dias, conforme as condições informadas na oferta e o procedimento da plataforma de pagamento.</p>
      </section>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="grid gap-5 text-sm leading-relaxed text-muted-foreground">
      <section>
        <h3 className="font-semibold text-foreground">1. Armazenamento local</h3>
        <p className="mt-1">Os dados inseridos nos aplicativos são armazenados localmente no dispositivo do usuário. A Cerne Lab não recebe, visualiza ou mantém uma cópia desses dados.</p>
      </section>
      <section>
        <h3 className="font-semibold text-foreground">2. Compartilhamento de dados</h3>
        <p className="mt-1">As informações armazenadas nos aplicativos não são vendidas, cedidas ou compartilhadas pela Cerne Lab com terceiros.</p>
      </section>
      <section>
        <h3 className="font-semibold text-foreground">3. Compra e licença</h3>
        <p className="mt-1">A plataforma de pagamento processa os dados necessários à compra e à liberação da licença conforme sua própria política de privacidade. A Cerne Lab utiliza apenas as informações necessárias para validar o acesso e prestar suporte.</p>
      </section>
      <section>
        <h3 className="font-semibold text-foreground">4. Controle do usuário</h3>
        <p className="mt-1">Como os dados do aplicativo permanecem no aparelho, limpar os dados do navegador ou remover o aplicativo pode apagá-los. O usuário é responsável por manter cópias de segurança quando o aplicativo oferecer essa opção.</p>
      </section>
      <section>
        <h3 className="font-semibold text-foreground">5. Contato</h3>
        <p className="mt-1">Solicitações relacionadas à privacidade podem ser enviadas para contato@cernelab.com.</p>
      </section>
    </div>
  );
}
