import fluxo from '@/assets/fluxo-vendas-hero.webp.asset.json';
import finance from '@/assets/financas-main-compact.webp.asset.json';
import financeAction from '@/assets/financas-action-compact.webp.asset.json';

export type ProductId = 'fluxo-vendas' | 'financas-metas';
export type ProductStatus = 'development' | 'testing' | 'available';
export const statusLabels: Record<ProductStatus, string> = { development: 'Em desenvolvimento', testing: 'Em testes', available: 'Disponível' };
export const productNames: Record<ProductId, string> = { 'fluxo-vendas': 'Fluxo Vendas', 'financas-metas': 'Finanças & Metas' };
// Editorial status is deliberately conservative. Update only after a verified product milestone.
export const ecosystem = [
  { id: 'fluxo-vendas' as const, name: 'Fluxo Vendas', category: 'Gestão comercial', status: 'development' as ProductStatus, description: 'Uma visão clara do seu negócio. Das vendas à organização da operação.', image: fluxo.url, alt: 'Interface real do Fluxo Vendas com vendas, faturamento, margem de lucro e estoque', features: ['Vendas e faturamento', 'Lucro e margem', 'Estoque', 'Projetos e calendário'], tabs: [
    { name: 'Vendas', description: 'Registre vendas e consulte as informações da sua operação.', image: fluxo.url },
    { name: 'Faturamento', description: 'Acompanhe o faturamento do negócio em um painel organizado.', image: fluxo.url },
    { name: 'Lucro e margem', description: 'Consulte o lucro e a margem das operações.', image: fluxo.url },
    { name: 'Estoque', description: 'Acompanhe as informações de estoque junto às vendas.', image: fluxo.url },
    { name: 'Projetos', description: 'Organize projetos e tarefas da operação.', image: fluxo.url },
    { name: 'Calendário', description: 'Consulte o calendário da sua operação.', image: fluxo.url },
  ] },
  { id: 'financas-metas' as const, name: 'Finanças & Metas', category: 'Finanças pessoais', status: 'development' as ProductStatus, description: 'Finanças, rotina e objetivos pessoais. Mais contexto para suas decisões do dia a dia.', image: finance.url, alt: 'Telas reais de finanças e dashboard do Finanças & Metas, com dados de exemplo', features: ['Dashboard pessoal', 'Gastos por categoria', 'Rotina de alta performance', 'Consultor IA'], tabs: [
    { name: 'Dashboard', description: 'Caixa atual, horas produtivas da semana e progresso da meta principal.', image: finance.url },
    { name: 'Finanças', description: 'Registro de gastos, distribuição e ranking por categoria.', image: financeAction.url },
    { name: 'Rotina', description: 'Checklist diário de blocos de estudo e trabalho.', image: financeAction.url },
    { name: 'Consultor IA', description: 'Análise das finanças e da rotina a partir dos seus registros.', image: financeAction.url },
  ] },
];
export const ecosystemFaq = [
  { q: 'O que é a Cerne Lab?', a: 'Um ecossistema de ferramentas digitais para necessidades diferentes: gestão comercial com o Fluxo Vendas e finanças pessoais com o Finanças & Metas.' },
  { q: 'Como funciona a lista de espera?', a: 'Você escolhe um ou os dois produtos e cadastra seu e-mail com consentimento. Seu interesse fica registrado para receber novidades de disponibilidade. O cadastro não é uma compra e não garante acesso antecipado.' },
  { q: 'Posso acompanhar os dois produtos?', a: 'Sim. Na lista de espera geral, selecione Fluxo Vendas e Finanças & Metas. Um mesmo e-mail mantém um único cadastro, com os interesses reunidos.' },
  { q: 'Quando os produtos serão lançados?', a: 'Ainda não há uma data de lançamento publicada. Acompanhe o estágio de desenvolvimento nesta página e as novidades no Instagram da Cerne Lab.' },
  { q: 'As telas apresentadas são reais?', a: 'Sim. São imagens e uma gravação dos produtos existentes. Os valores nas telas de Finanças & Metas são dados de exemplo. As abas apresentam recursos e imagens gerais reais, não uma sessão interativa do aplicativo.' },
  { q: 'Preciso pagar para entrar na lista?', a: 'Não. O cadastro na lista de espera é gratuito e não exige dados de pagamento. As futuras condições comerciais serão comunicadas separadamente.' },
];