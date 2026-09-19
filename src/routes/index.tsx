import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Download,
  Infinity as InfinityIcon,
  ShieldCheck,
  ArrowUpRight,
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
    ],
  }),
  component: Index,
});

const products = [
  {
    name: "Finanças & Metas",
    tagline: "Controle financeiro inteligente",
    category: "Gestão Financeira",
    description:
      "Organize gastos, defina metas e veja seu dinheiro trabalhar com painéis claros e alertas automáticos.",
    price: "R$ 25,00",
    cover: financasCover,
    alt: "Tela real do aplicativo Finanças & Metas com dashboard, caixa atual e progresso da meta principal",
    link: "https://whop.com/cernelab/financas-metas-acesso-vitalicio/",
  },
  {
    name: "Ironform",
    tagline: "Gym & AI Coach",
    category: "Fitness & Treino",
    description:
      "Treinos personalizados por IA, acompanhamento de cargas e evolução em tempo real — seu personal no bolso.",
    price: "R$ 25,00",
    cover: ironformCover,
    alt: "Telas reais do aplicativo Ironform com plano semanal e sessão de treino ativa",
    link: "https://whop.com/cernelab/ironform-gym-ai-coach/",
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
          href="#catalogo"
          className="glass glow-border inline-flex h-9 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-medium"
        >
          <span className="hidden sm:inline">Ver aplicativos</span>
          <span className="sm:hidden">Apps</span>
          <ArrowUpRight className="h-4 w-4 text-neon" />
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
            <div className="relative aspect-[16/10] overflow-hidden border-b border-glass-border">
              <img
                src={p.cover}
                alt={p.alt}
                width={1024}
                height={640}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
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

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-3xl font-extrabold tracking-tight">{p.price}</p>
                  <p className="text-xs font-medium text-muted-foreground">Acesso Vitalício</p>
                </div>
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
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Cerne Lab. Todos os direitos reservados.</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="transition-colors hover:text-neon">
            Termos de Uso
          </a>
          <a href="#" className="transition-colors hover:text-neon">
            Política de Privacidade
          </a>
        </nav>
      </div>
    </footer>
  );
}
