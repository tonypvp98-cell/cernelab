// Supply only verified screenshots and the actual video; no demo assets are published.
export const landingMedia: { hero: string | null; dashboard: string | null; video: string | null } = {
  hero: null,
  dashboard: null,
  video: null,
};

export const landingFeatures = [
  { title: "Dashboard", text: "Caixa atual, horas produtivas da semana e progresso da meta principal em uma única tela.", approved: true, image: null },
  { title: "Finanças", text: "Registro de gastos, distribuição e ranking por categoria.", approved: true, image: null },
  { title: "Rotina de Alta Performance", text: "Checklist diário de blocos de estudo e trabalho.", approved: true, image: null },
  { title: "Consultor IA", text: "Análise das suas finanças e rotina a partir dos seus registros.", approved: true, image: null },
  { title: "Metas de Setup", text: "", approved: false, image: null },
];

export function visibleFeatures<T extends { approved: boolean; text: string }>(items: readonly T[]): T[] {
  return items.filter(item => item.approved && item.text.trim().length > 0).slice(0, 4);
}