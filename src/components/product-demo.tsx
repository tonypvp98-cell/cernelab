import { useState } from "react";
import { ArrowUpRight, Check, Dumbbell, FlaskConical, Plus, RotateCcw, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { demoBalance, type DemoTransaction } from "@/lib/storefront-content";

type DemoProduct = { name: string; frame: "desktop" | "mobile"; link: string };
const currency = (value: number) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

export function ProductDemo({ product }: { product: DemoProduct }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-12 w-full rounded-xl border-glass-border bg-glass hover:border-primary/50 hover:bg-primary/10">
          <FlaskConical /> Testar Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-2xl border-primary/25 bg-background p-5 sm:p-8">
        <DialogHeader className="pr-6 text-left">
          <p className="text-xs font-bold uppercase text-gold">Demonstração interativa</p>
          <DialogTitle className="font-display text-2xl leading-tight">{product.name}</DialogTitle>
          <DialogDescription>Simulação com dados fictícios. Nenhuma alteração afeta o aplicativo ou seus dados reais.</DialogDescription>
        </DialogHeader>
        {product.frame === "desktop" ? <FinanceDemo /> : <WorkoutDemo />}
        <div className="grid gap-3 border-t border-border pt-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <p className="min-w-0 text-xs text-muted-foreground">Acesso vitalício • pagamento único de R$ 25,00</p>
          <Button asChild className="h-11 rounded-lg"><a href={product.link} target="_blank" rel="noopener noreferrer">Garantir Acesso <ArrowUpRight /></a></Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const initialTransactions: DemoTransaction[] = [
  { id: 1, label: "Receita do mês", amount: 6200, kind: "income" },
  { id: 2, label: "Despesas fixas", amount: 1800, kind: "expense" },
  { id: 3, label: "Compras", amount: 450, kind: "expense" },
];

function FinanceDemo() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [goal, setGoal] = useState(40);
  const balance = demoBalance(transactions);
  const expenses = transactions.filter(row => row.kind === "expense").reduce((total, row) => total + row.amount, 0);
  return (
    <div className="min-w-0">
      <div className="grid grid-cols-2 gap-4 border-y border-border py-5">
        <div className="min-w-0"><p className="flex items-center gap-2 text-xs text-muted-foreground"><Wallet className="h-4 w-4" /> Saldo disponível</p><p className="mt-2 text-xl font-bold text-primary sm:text-3xl" aria-live="polite">{currency(balance)}</p></div>
        <div className="min-w-0"><p className="text-xs text-muted-foreground">Despesas do mês</p><p className="mt-2 text-xl font-bold sm:text-3xl">{currency(expenses)}</p></div>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3"><h3 className="text-sm font-semibold">Meta: reserva financeira</h3><span className="text-sm font-bold text-gold">{goal}%</span></div>
        <input aria-label="Progresso da meta" type="range" min={0} max={100} value={goal} onChange={e => setGoal(Number(e.target.value))} className="mt-3 w-full cursor-pointer accent-primary" />
      </div>
      <h3 className="mt-5 text-sm font-semibold">Movimentações</h3>
      <ul className="mt-2 max-h-44 overflow-y-auto divide-y divide-border">
        {transactions.map(row => <li key={row.id} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 py-3 text-sm"><span className="min-w-0 truncate">{row.label}</span><span className={row.kind === "income" ? "text-primary" : "text-muted-foreground"}>{row.kind === "income" ? "+" : "−"}{currency(row.amount)}</span></li>)}
      </ul>
      <form className="mt-4 grid gap-3 sm:grid-cols-[minmax(0,1fr)_8rem_auto]" onSubmit={event => {
        event.preventDefault();
        const value = Number(amount.replace(",", "."));
        if (!label.trim() || !Number.isFinite(value) || value <= 0) { setError("Informe uma descrição e um valor maior que zero."); return; }
        setTransactions(rows => [...rows, { id: Math.max(...rows.map(row => row.id)) + 1, label: label.trim(), amount: value, kind: "expense" }]);
        setLabel(""); setAmount(""); setError("");
      }}>
        <label className="grid gap-1 text-xs text-muted-foreground">Descrição<Input value={label} onChange={e => setLabel(e.target.value)} maxLength={50} placeholder="Ex.: Material de escritório" /></label>
        <label className="grid gap-1 text-xs text-muted-foreground">Valor (R$)<Input inputMode="decimal" value={amount} onChange={e => setAmount(e.target.value)} placeholder="150,00" /></label>
        <Button type="submit" className="self-end"><Plus /> Adicionar despesa</Button>
      </form>
      {error && <p role="alert" className="mt-2 text-sm text-destructive">{error}</p>}
      <Button variant="ghost" size="sm" className="mt-3 text-muted-foreground" onClick={() => { setTransactions(initialTransactions); setGoal(40); setLabel(""); setAmount(""); setError(""); }}><RotateCcw /> Reiniciar simulação</Button>
    </div>
  );
}

const exercises = ["Agachamento", "Supino reto", "Remada curvada"];
function WorkoutDemo() {
  const [sets, setSets] = useState([0, 0, 0]);
  const [weight, setWeight] = useState(40);
  const completed = sets.reduce((total, value) => total + value, 0);
  return (
    <div className="min-w-0">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-y border-border py-5">
        <div className="min-w-0"><p className="flex items-center gap-2 text-xs text-muted-foreground"><Dumbbell className="h-4 w-4" /> Treino de hoje</p><h3 className="mt-2 text-xl font-semibold">Força • Corpo inteiro</h3></div>
        <p aria-live="polite" className="self-center text-xl font-bold text-primary">{completed}/9</p>
      </div>
      <progress aria-label="Progresso do treino" max={9} value={completed} className="demo-progress mt-5 h-2 w-full overflow-hidden rounded-full" />
      <label className="mt-5 grid max-w-48 gap-2 text-sm text-muted-foreground">Carga de referência (kg)<Input type="number" min={0} max={300} step={2.5} value={weight} onChange={event => setWeight(Math.min(300, Math.max(0, Number(event.target.value))))} /></label>
      <ul className="mt-4 divide-y divide-border">
        {exercises.map((exercise, index) => <li key={exercise} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-4"><div className="min-w-0"><p className="text-sm font-semibold">{exercise}</p><p className="mt-1 text-xs text-muted-foreground">3 séries × 10 repetições • {weight} kg</p><p className="mt-1 text-xs text-primary">{sets[index]}/3 séries registradas</p></div><Button variant={sets[index] === 3 ? "secondary" : "outline"} disabled={sets[index] === 3} onClick={() => setSets(previous => previous.map((value, i) => i === index ? Math.min(3, value + 1) : value))}><Check /><span className="hidden sm:inline">{sets[index] === 3 ? "Concluído" : "Registrar série"}</span><span className="sm:hidden">{sets[index] === 3 ? "Feito" : "+ Série"}</span></Button></li>)}
      </ul>
      {completed === 9 && <p role="status" className="mt-3 text-sm font-semibold text-primary">Treino concluído. Bom trabalho!</p>}
      <Button variant="ghost" size="sm" className="mt-3 text-muted-foreground" onClick={() => { setSets([0, 0, 0]); setWeight(40); }}><RotateCcw /> Reiniciar simulação</Button>
    </div>
  );
}