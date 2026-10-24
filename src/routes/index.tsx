import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
import ironformCover from "@/assets/ironform-cover.jpg";
import financasCover from "@/assets/financas-cover.jpg";
import cerneLogo from "@/assets/cerne-logo.png";
import { StorefrontBundles, StorefrontTestimonials, StorefrontChangelog } from "@/components/storefront-sections";


const TITLE = "Finanças e Produtividade — Cerne Lab";
const DESCRIPTION =
  "Soluções Digitais Essenciais: aplicativos web (PWA) rápidos, sem instalação por loja e com acesso vitalício. Finanças e Produtividade: finanças, rotina e metas em um só app. Pagamento único, acesso vitalício.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
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
  cover: string;
  alt: string;
  link: string;
  frame: "desktop" | "mobile";
  demoVideo?: string;
  demoGif?: string;
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
    cover: financasCover,
    alt: "Painel do Finanças e Produtividade em uma moldura digital",
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
    cover: ironformCover,
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
    text: "Pague uma única vez e use para sempre. Sem mensalidades, sem surpresas na fatura.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Whop",
    text: "Liberação e gestão de licença 100% automatizada, com entrega imediata após o pagamento.",
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
  { label: "O app", href: "#aplicativos" },
  { label: "Funcionalidades", href: "#o-que-o-app-faz" },
  { label: "Vídeo", href: "#video" },
  { label: "Comparativo", href: "#comparativo" },
  { label: "Garantia", href: "#garantia" },
  { label: "FAQ", href: "#faq" },
];

const MAIN_CHECKOUT = products[0].link;
// [SUBSTITUIR] — preencha com os arquivos/URLs reais; null exibe o aviso de placeholder.
const HERO_DASHBOARD_IMAGE: string | null = null;
const DEMO_VIDEO_EMBED_URL: string | null = null;

const features: { title: string; text: string; image: string | null }[] = [
  { title: "Dashboard", text: "Caixa atual, horas produtivas da semana e progresso da meta principal em uma única tela.", image: null },
  { title: "Finanças", text: "Registro de gastos, distribuição e ranking por categoria.", image: null },
  { title: "Rotina de Alta Performance", text: "Checklist diário de blocos de estudo e trabalho.", image: null },
  { title: "Metas de Setup", text: "[SUBSTITUIR: descrição curta das Metas de Setup]", image: null },
  { title: "Consultor IA", text: "Análise das suas finanças e rotina a partir dos seus registros.", image: null },
];

const strip = ["Pagamento único", "Acesso vitalício", "Celular e computador", "Garantia de 7 dias"];

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
    text: "O app fica instalado como um aplicativo nativo, sem ocupar espaço da memória e sem depender de lojas.",
  },
];

function Index() {
  const showAllProducts = () => {};
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Technical grid */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-tech-grid" />

      <Header onNavigate={showAllProducts} />

      <main className="relative">
        <Hero onNavigate={showAllProducts} />
        <HighlightsStrip />
        <Catalog items={[products[0]]} id="aplicativos" eyebrow="O aplicativo" title="Finanças e Produtividade" />
        <Features />
        <VideoSection />
        <StorefrontBundles />
        <PwaAdvantages />
        <HowItWorks />
        <Guarantee />
        <StorefrontTestimonials />
        <StorefrontChangelog />
        <Faq />
        <FinalCta />
        <Catalog items={products.slice(1)} id="outros-apps" eyebrow="Ecossistema Cerne Lab" title="Outros apps" />
      </main>

      <Footer />
    </div>
  );
}

function Header({ onNavigate }: { onNavigate: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-glass-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto grid min-h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2 px-5 py-2 sm:px-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-5">
        <a href="#top" className="flex min-w-0 items-center gap-2.5" onClick={() => setIsMenuOpen(false)}>
          <img
            src={cerneLogo}
            alt="Logotipo da Cerne Lab"
            className="h-9 w-auto shrink-0"
            width={209}
            height={256}
          />
          <span className="truncate text-base font-bold">
            Cerne<span className="text-neon"> Lab</span>
          </span>
        </a>
        <nav aria-label="Navegação principal" className="hidden min-w-0 items-center justify-center gap-0.5 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={onNavigate} className="rounded-md px-2.5 py-2 text-xs font-bold uppercase text-muted-foreground transition-colors hover:bg-secondary hover:text-neon xl:px-3">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
        <Button asChild variant="outline" size="icon" className="glass shrink-0 rounded-md" title="Suporte via Instagram">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar com a Cerne Lab pelo Instagram">
            <Instagram className="text-neon" />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="glass shrink-0 rounded-md border-gold/40 px-4 font-semibold text-gold transition-colors hover:border-gold hover:bg-gold/10 hover:text-gold"
        >
          <a href={MAIN_CHECKOUT} target="_blank" rel="noopener noreferrer">Garantir acesso</a>
        </Button>
        </div>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="glass shrink-0 rounded-md border-gold/40 px-3 text-xs font-semibold text-gold transition-colors hover:border-gold hover:bg-gold/10 hover:text-gold lg:hidden"
        >
          <a href={MAIN_CHECKOUT} target="_blank" rel="noopener noreferrer">Garantir acesso</a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="glass shrink-0 rounded-md lg:hidden"
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
              <a key={item.href} href={item.href} onClick={() => { onNavigate(); setIsMenuOpen(false); }} className="rounded-md px-3 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero({ onNavigate }: { onNavigate: () => void }) {
  return (
    <section id="ecossistema" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-16 pt-20 text-center sm:px-8 sm:pb-24 sm:pt-28">
      <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-neon" />
        Ecossistema PWA • Acesso Imediato
      </span>
      <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-6xl">
        Soluções Digitais Essenciais para{" "}
        <span className="text-neon text-glow">o seu Negócio</span>
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
        Tecnologia prática para organizar suas finanças, acelerar suas vendas e elevar sua performance.
      </p>
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
        {highlights.map((h) => (
          <li
            key={h}
            className="glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium"
          >
            <Check className="h-4 w-4 text-neon" strokeWidth={3} />
            {h}
          </li>
        ))}
      </ul>
      <Button asChild className="btn-neon mt-10 h-12 rounded-full px-7 text-sm font-semibold">
      <a
        href="#aplicativos"
        onClick={onNavigate}
      >
        Ver aplicativos
        <ArrowUpRight className="h-4 w-4" />
      </a>
      </Button>

      <PhoneMockup />
    </section>
  );
}

function Catalog({ items, id, eyebrow, title }: { items: Product[]; id: string; eyebrow: string; title: string }) {
  const visibleProducts = items;
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8">
      <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Pagamento único, acesso vitalício e liberação automática.
        </p>
      </div>

      <div className="mx-auto grid max-w-xl gap-6">
        {visibleProducts.map((p) => (
          <article
            key={p.name}
            id={p.name === "Ironform" ? "ironform" : "financas-produtividade"}
            className="glass glow-border group flex scroll-mt-24 flex-col overflow-hidden rounded-2xl"
          >
            <div className="relative border-b border-glass-border bg-secondary/20 p-0.5">
              <ProductMedia product={p} />
              <span className="absolute left-3 top-3 rounded-md border border-neon/40 bg-background/80 px-3 py-1 text-[10px] font-bold uppercase text-neon backdrop-blur-md">
                {p.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-bold">
                {p.name}{" "}
                <span className="text-base font-medium text-muted-foreground">({p.tagline})</span>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
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
              <Button asChild className="btn-neon h-12 w-full rounded-xl text-sm font-semibold">
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
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-neon/25 bg-background [contain:layout_paint]">
      {product.demoVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={product.cover}
          aria-label={`Demonstração do ${product.name}`}
          width={1024}
          height={640}
          className="absolute inset-0 h-full w-full object-contain"
        >
          <source src={product.demoVideo} type="video/mp4" />
        </video>
      ) : (
        <img
          src={product.demoGif ?? product.cover}
          alt={product.alt}
          width={1024}
          height={640}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-contain"
        />
      )}
    </div>
  );
}

function PwaAdvantages() {
  return (
    <section id="vantagens-pwa" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Por que PWA</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          O formato certo para o seu dia a dia
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Tecnologia web de alta performance: O PWA roda direto do navegador, ocupa 0MB da memória do seu celular e dispensa assinatura — enquanto muitos apps cobram mensalidade.
        </p>
      </div>
       <div className="grid gap-5 sm:grid-cols-3">
        {benefits.map(({ icon: Icon, title, text }) => (
           <div key={title} className="glass glow-border rounded-xl p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-neon/30 bg-neon/10 text-neon">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
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
    <section id="como-funciona" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-4 sm:px-8">
      <div className="border-y border-glass-border py-10 sm:py-12">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Como funciona</p>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Do pagamento à sua tela em 3 passos</h3>
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
                      <div className="rounded-md border border-glass-border bg-secondary/40 p-3">
                        <p className="font-bold text-foreground">iOS</p>
                        <p>Compartilhar &gt; Adicionar à Tela de Início</p>
                      </div>
                      <div className="rounded-md border border-glass-border bg-secondary/40 p-3">
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
    common: "150MB a 300MB ocupados",
    cerne: "Leveza Instantânea (0MB de armazenamento)",
  },
  {
    label: "Burocracia",
    common: "Downloads e atualizações manuais na App Store",
    cerne: "Instalação em 1 clique sem loja",
  },
];

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`grid place-items-center border border-dashed border-neon/40 bg-secondary/40 p-4 text-center text-xs font-semibold text-muted-foreground ${className}`}>
      {label}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="mx-auto mt-12 w-56 rounded-[2.25rem] border border-neon/30 bg-secondary p-2 shadow-neon sm:w-64">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.75rem] bg-background">
        <span aria-hidden="true" className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-secondary" />
        {HERO_DASHBOARD_IMAGE ? (
          <img src={HERO_DASHBOARD_IMAGE} alt="Dashboard do Finanças e Produtividade" className="h-full w-full object-cover" />
        ) : (
          <Placeholder label="[SUBSTITUIR: print do dashboard]" className="h-full w-full rounded-[1.75rem]" />
        )}
      </div>
    </div>
  );
}

function HighlightsStrip() {
  return (
    <div className="border-y border-glass-border bg-secondary/30">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-5 text-sm font-semibold sm:flex sm:justify-center sm:gap-8 sm:px-8">
        {strip.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check className="h-4 w-4 shrink-0 text-neon" strokeWidth={3} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Features() {
  return (
    <section id="o-que-o-app-faz" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Funcionalidades</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">O que o app faz</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article key={f.title} className="glass glow-border overflow-hidden rounded-2xl">
            {f.image ? (
              <img src={f.image} alt={`Tela ${f.title}`} loading="lazy" className="aspect-[16/10] w-full object-cover" />
            ) : (
              <Placeholder label={`[SUBSTITUIR: print ${f.title}]`} className="aspect-[16/10] w-full" />
            )}
            <div className="p-5">
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section id="video" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 text-center sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Demonstração</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Veja o app em 20 segundos</h2>
      <div className="mx-auto mt-8 aspect-[9/16] w-full max-w-xs overflow-hidden rounded-2xl border border-neon/25 bg-background">
        {DEMO_VIDEO_EMBED_URL ? (
          <iframe src={DEMO_VIDEO_EMBED_URL} title="Vídeo do Finanças e Produtividade" loading="lazy" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen className="h-full w-full" />
        ) : (
          <Placeholder label="[SUBSTITUIR: URL do vídeo]" className="h-full w-full rounded-2xl" />
        )}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8">
      <div className="glass glow-border rounded-2xl border-neon/20 p-8 sm:p-10">
        <h2 className="text-2xl font-bold sm:text-3xl">Comece hoje com o Finanças e Produtividade</h2>
        <p className="mt-3 text-sm text-muted-foreground">Pagamento único • acesso vitalício • garantia de 7 dias pela Whop.</p>
        <Button asChild className="btn-neon mt-6 h-12 rounded-full px-7 text-sm font-semibold">
          <a href={MAIN_CHECKOUT} target="_blank" rel="noopener noreferrer">
            Garantir acesso
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section id="garantia" className="mx-auto max-w-4xl scroll-mt-24 px-5 py-16 sm:px-8">
      <div className="glass glow-border relative overflow-hidden rounded-xl border-neon/20 p-8 sm:p-10">
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-neon/30 bg-neon/10 text-neon shadow-neon">
            <ShieldCheck className="h-8 w-8" />
          </span>
          <div className="min-w-0">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Garantia Incondicional de 7 Dias — Risco Zero
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Experimente os aplicativos com tranquilidade. Se dentro de 7 dias você entender que a ferramenta não atendeu às suas expectativas, solicitamos o reembolso integral direto pela Whop. Sem perguntas, sem burocracia e sem letras miúdas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <div id="comparativo" className="mx-auto mt-16 max-w-5xl scroll-mt-24">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Comparativo</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Por que escolher a Cerne Lab
        </h2>
      </div>

      <div className="glass glow-border rounded-xl border-neon/20 p-2 sm:p-4">
        <div className="overflow-hidden rounded-lg border border-glass-border">
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
              PWAs Cerne Lab
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

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-5 py-16 sm:px-8">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">FAQ</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Dúvidas Gerais</h2>
      </div>
      <Accordion type="single" collapsible className="glass rounded-xl px-6">
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
    <footer className="mt-12 border-t border-glass-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm text-muted-foreground sm:grid-cols-[1fr_auto] sm:px-8">
        <div>
          <div className="flex items-center gap-2.5 text-foreground">
            <img src={cerneLogo} alt="" className="h-9 w-auto" width={209} height={256} />
            <span className="font-bold">Cerne <span className="text-neon">Lab</span></span>
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
              ? "Condições aplicáveis às licenças dos aplicativos PWA da Cerne Lab."
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
