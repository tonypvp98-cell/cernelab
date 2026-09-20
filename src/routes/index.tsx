import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ironformCover from "@/assets/ironform-cover.jpg";
import financasCover from "@/assets/financas-cover.jpg";
import cerneLogo from "@/assets/cerne-logo.png";
import cerneBanner from "@/assets/cerne-lab-banner.png.asset.json";

const TITLE = "Cerne Lab — Hub de Aplicativos PWA";
const DESCRIPTION =
  "Soluções Digitais Essenciais: aplicativos web (PWA) rápidos, sem instalação por loja e com acesso vitalício. Finanças & Metas e Ironform — pague uma vez, use para sempre.";

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
    name: "Finanças & Metas",
    tagline: "Controle financeiro inteligente",
    category: "Gestão Financeira",
    description:
      "Organize gastos, defina metas e veja seu dinheiro trabalhar com painéis claros e alertas automáticos.",
    originalPrice: "R$ 31,25",
    price: "R$ 25,00",
    cover: financasCover,
    alt: "Painel do Finanças & Metas em uma moldura digital",
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
    q: "Onde insiro minha chave de licença?",
    a: "Ao abrir o aplicativo pela primeira vez, será exibida uma tela de ativação. Cole sua chave de licença nesse campo e o acesso é liberado na hora.",
  },
];

const highlights = ["Acesso Imediato", "Sem Mensalidades", "Funciona em Qualquer Dispositivo"];

const pwaSteps = [
  {
    icon: Link2,
    title: "Acesse o Link",
    text: "Clique no link enviado imediatamente após a compra na Whop.",
  },
  {
    icon: Share2,
    title: "Adicione à Tela Inicial",
    text: 'No Safari ou Chrome, toque em “Compartilhar” e selecione “Adicionar à Tela Inicial”.',
  },
  {
    icon: Smartphone,
    title: "Acesso Vitalício",
    text: "O app fica instalado como um aplicativo nativo, sem ocupar espaço da memória e sem depender de lojas.",
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient glow + grid */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] bg-tech-grid" />
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-neon/15 blur-[140px]" />

      <Header />

      <main className="relative">
        <Hero />
        <Catalog />
        <Benefits />
        <Comparison />
        <HowItWorks />
        <Guarantee />
        <Faq />
      </main>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-glass-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex min-w-0 items-center gap-2.5">
          <img
            src={cerneLogo}
            alt="Logotipo da Cerne Lab"
            className="h-9 w-auto shrink-0"
            width={209}
            height={256}
          />
          <span className="truncate text-base font-bold tracking-tight">
            Cerne<span className="text-neon"> Lab</span>
          </span>
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar com a Cerne Lab pelo Instagram"
          className="glass glow-border inline-flex h-9 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-medium"
        >
          <Instagram className="h-4 w-4 text-neon" />
          <span className="hidden sm:inline">Suporte via Instagram</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 pt-20 text-center sm:px-8 sm:pb-24 sm:pt-28">
      <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-neon shadow-neon" />
        Ecossistema de apps PWA
      </span>
      <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
        Soluções Digitais Essenciais para{" "}
        <span className="text-neon text-glow">Elevar sua Performance</span>
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
        Aplicativos web (PWA) rápidos, sem necessidade de instalação por loja e com acesso
        vitalício.
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
      <a
        href="#catalogo"
        className="btn-neon mt-10 inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold"
      >
        Ver aplicativos
        <ArrowUpRight className="h-4 w-4" />
      </a>

      <div className="glass glow-border mx-auto mt-16 max-w-5xl overflow-hidden rounded-3xl">
        <img
          src={cerneBanner.url}
          alt="Banner da Cerne Lab — Soluções Digitais Essenciais"
          width={1999}
          height={998}
          loading="lazy"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}

function Catalog() {
  return (
    <section id="catalogo" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:px-8">
      <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Catálogo</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Nossos aplicativos</h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Pagamento único, acesso vitalício e liberação automática.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {products.map((p) => (
          <article
            key={p.name}
            className="glass glow-border group flex flex-col overflow-hidden rounded-3xl"
          >
            <div className="relative border-b border-glass-border bg-secondary/40 p-3 sm:p-4">
              <ProductMedia product={p} />
              <span className="absolute left-4 top-4 rounded-full border border-neon/40 bg-background/70 px-3 py-1 text-xs font-semibold text-neon backdrop-blur-md">
                {p.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-bold tracking-tight">
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
                <span className="rounded-full border border-neon/30 bg-neon/10 px-3 py-1.5 text-xs font-bold text-neon">
                  20% OFF — Acesso Vitalício
                </span>
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold"
              >
                Garantir Acesso
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductMedia({ product }: { product: Product }) {
  const mediaSource = product.demoGif ?? product.cover;

  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0 bg-tech-grid" />
      <div
        className={
          product.frame === "desktop"
            ? "relative z-10 aspect-[16/10] w-full overflow-hidden rounded-xl border border-glass-border bg-background p-1.5 shadow-2xl transition-transform duration-700 group-hover:scale-[1.025]"
            : "relative z-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-glass-border bg-background p-1.5 shadow-2xl transition-transform duration-700 group-hover:scale-[1.025]"
        }
      >
        {product.frame === "desktop" && (
          <span className="absolute left-1/2 top-1 z-20 h-1 w-10 -translate-x-1/2 rounded-full bg-muted" />
        )}
        <img
          src={mediaSource}
          alt={product.alt}
          width={1024}
          height={640}
          loading="lazy"
          onError={(event) => {
            if (event.currentTarget.src !== product.cover) event.currentTarget.src = product.cover;
          }}
          className="h-full w-full rounded-lg object-contain"
        />
        {product.demoVideo && (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={product.cover}
            aria-label={`Demonstração do ${product.name}`}
            onLoadedData={(event) => event.currentTarget.classList.remove("opacity-0")}
            className="absolute inset-1.5 z-10 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] rounded-lg object-contain opacity-0 transition-opacity duration-500"
          >
            <source src={product.demoVideo} />
          </video>
        )}
        {product.frame === "desktop" && (
          <span className="absolute -bottom-2 left-1/2 h-2 w-[108%] -translate-x-1/2 rounded-b-xl border-x border-b border-glass-border bg-muted" />
        )}
      </div>
    </div>
  );
}

function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Por que PWA</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          O formato certo para o seu dia a dia
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        {benefits.map(({ icon: Icon, title, text }) => (
          <div key={title} className="glass glow-border rounded-3xl p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-neon/30 bg-neon/10 text-neon">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-4 sm:px-8">
      <div className="border-y border-glass-border py-10 sm:py-12">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Como funciona</p>
          <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Do pagamento à sua tela em 3 passos</h3>
        </div>
        <ol className="grid gap-8 sm:grid-cols-3 sm:gap-0">
          {pwaSteps.map(({ icon: Icon, title, text }, index) => (
            <li
              key={title}
              className="relative flex gap-4 sm:block sm:border-l sm:border-glass-border sm:px-6 first:sm:border-l-0 first:sm:pl-0 last:sm:pr-0"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-neon/30 bg-neon/10 text-neon">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 sm:mt-5">
                <p className="text-xs font-bold uppercase text-neon">Passo {index + 1}</p>
                <h4 className="mt-1 text-lg font-semibold">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
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
    common: "Mensalidade Recorrente",
    cerne: "Pagamento Único",
  },
  {
    label: "Peso no Aparelho",
    common: "Espaço na Memória",
    cerne: "Leveza Instantânea",
  },
  {
    label: "Experiência",
    common: "Anúncios / Bugs",
    cerne: "Experiência Clean",
  },
];

function Guarantee() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <div className="glass glow-border relative overflow-hidden rounded-3xl p-8 sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-neon/10 blur-[90px]"
        />
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-neon/30 bg-neon/10 text-neon shadow-neon">
            <ShieldCheck className="h-8 w-8" />
          </span>
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Experimente sem compromisso. Se dentro de 7 dias você entender que o aplicativo não é
              para você, solicitamos o reembolso integral direto pela Hotmart/Whop.{" "}
              <span className="font-semibold text-neon">Risco zero para você.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">Comparativo</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Por que escolher a Cerne Lab
        </h2>
      </div>

      <div className="glass glow-border overflow-hidden rounded-3xl">
        {/* Header */}
        <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-glass-border bg-secondary/40">
          <div className="p-4 sm:p-5" />
          <div className="flex items-center gap-2 p-4 sm:p-5">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-destructive/15">
              <X className="h-4 w-4 text-destructive" strokeWidth={3} />
            </span>
            <span className="text-xs font-semibold leading-tight sm:text-sm">
              Apps Comuns de Assinatura
            </span>
          </div>
          <div className="flex items-center gap-2 border-l border-glass-border bg-neon/5 p-4 sm:p-5">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-neon/15">
              <Check className="h-4 w-4 text-neon" strokeWidth={3} />
            </span>
            <span className="text-xs font-semibold leading-tight text-neon sm:text-sm">
              PWAs Cerne Lab
            </span>
          </div>
        </div>

        {/* Rows */}
        {comparisonRows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-[1fr_1fr_1fr] ${
              i < comparisonRows.length - 1 ? "border-b border-glass-border" : ""
            }`}
          >
            <div className="flex items-center p-4 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:p-5 sm:text-sm">
              {row.label}
            </div>
            <div className="flex items-center gap-2.5 p-4 sm:p-5">
              <X className="h-4 w-4 shrink-0 text-destructive" strokeWidth={3} />
              <span className="text-xs leading-snug text-muted-foreground sm:text-sm">
                {row.common}
              </span>
            </div>
            <div className="flex items-center gap-2.5 border-l border-glass-border bg-neon/5 p-4 sm:p-5">
              <Check className="h-4 w-4 shrink-0 text-neon" strokeWidth={3} />
              <span className="text-xs font-semibold leading-snug sm:text-sm">{row.cerne}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neon">FAQ</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Dúvidas Gerais</h2>
      </div>
      <Accordion type="single" collapsible className="glass rounded-3xl px-6">
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
            <a href="#" className="transition-colors hover:text-neon">Termos de Uso</a>
            <a href="#" className="transition-colors hover:text-neon">Política de Privacidade</a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
