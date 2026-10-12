export const catalogCategories = ["Todos", "Gestão & Vendas", "Finanças", "Produtividade"] as const;
export type CatalogCategory = (typeof catalogCategories)[number];

export function filterProducts<T extends { filters: readonly CatalogCategory[] }>(products: readonly T[], category: CatalogCategory): T[] {
  return products.filter((product) => category === "Todos" || product.filters.includes(category));
}

export type Bundle = {
  id: string;
  title: string;
  description: string;
  apps: string[];
  originalPrice: string;
  price: string;
  checkoutUrl: string;
  approved: boolean;
};
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  authorized: boolean;
};
export type ReleaseNote = {
  id: string;
  app: string;
  version: string;
  date: string;
  changes: string[];
  approved: boolean;
};

// Deliberately empty: populate only with confirmed offers, authorized quotes
// and actual releases. Draft content never renders on the public storefront.
export const bundles: Bundle[] = [];
export const testimonials: Testimonial[] = [];
export const releaseNotes: ReleaseNote[] = [];

export function publishedBundles(items: readonly Bundle[]): Bundle[] {
  return items.filter((item) => item.approved && item.apps.length >= 2 && item.title.trim() && item.price.trim() && /^https:\/\/whop\.com\/.+/.test(item.checkoutUrl));
}
export function publishedTestimonials(items: readonly Testimonial[]): Testimonial[] {
  return items.filter((item) => item.authorized && item.name.trim() && item.quote.trim());
}
export function publishedReleaseNotes(items: readonly ReleaseNote[]): ReleaseNote[] {
  return items.filter((item) => item.approved && item.changes.length > 0 && item.date.trim() && item.version.trim());
}

export type DemoTransaction = { id: number; label: string; amount: number; kind: "income" | "expense" };
export function demoBalance(transactions: readonly DemoTransaction[]): number {
  return transactions.reduce((total, row) => total + (row.kind === "income" ? row.amount : -row.amount), 0);
}