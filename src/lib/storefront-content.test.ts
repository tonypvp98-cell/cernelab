import { describe, expect, test } from "bun:test";
import { catalogCategories, filterProducts, publishedBundles, publishedTestimonials, publishedReleaseNotes, bundles, testimonials, releaseNotes, demoBalance } from "./storefront-content";

describe("Storefront publication and filters", () => {
  test("offers exactly the four requested categories", () => {
    expect(catalogCategories).toEqual(["Todos", "Gestão & Vendas", "Finanças", "Produtividade"]);
  });
  test("Todos includes both existing apps and Finanças excludes the workout app", () => {
    const apps = [{ name: "Finanças & Metas", filters: ["Finanças" as const] }, { name: "Ironform", filters: [] }];
    expect(filterProducts(apps, "Todos").map(p => p.name)).toEqual(["Finanças & Metas", "Ironform"]);
    expect(filterProducts(apps, "Finanças").map(p => p.name)).toEqual(["Finanças & Metas"]);
    expect(filterProducts(apps, "Gestão & Vendas")).toEqual([]);
    expect(filterProducts(apps, "Produtividade")).toEqual([]);
  });
  test("no unconfirmed strategic content is published", () => {
    expect(publishedBundles(bundles)).toEqual([]);
    expect(publishedTestimonials(testimonials)).toEqual([]);
    expect(publishedReleaseNotes(releaseNotes)).toEqual([]);
  });
  test("draft bundle stays hidden and confirmed bundle requires a Whop checkout", () => {
    const offer = { id: "test", title: "Test offer", description: "", apps: ["A", "B"], originalPrice: "R$ 50", price: "R$ 40", checkoutUrl: "https://whop.com/cernelab/test/", approved: false };
    expect(publishedBundles([offer])).toEqual([]);
    expect(publishedBundles([{ ...offer, approved: true }])).toHaveLength(1);
    expect(publishedBundles([{ ...offer, approved: true, checkoutUrl: "javascript:alert(1)" }])).toEqual([]);
  });
  test("testimonials require authorization", () => {
    const quote = { id: "test", name: "Test person", role: "", quote: "Test quote", authorized: false };
    expect(publishedTestimonials([quote])).toEqual([]);
    expect(publishedTestimonials([{ ...quote, authorized: true }])).toHaveLength(1);
  });
  test("release notes require approval", () => {
    const release = { id: "test", app: "Test", version: "1.0", date: "2026-10-12", changes: ["Test change"], approved: false };
    expect(publishedReleaseNotes([release])).toEqual([]);
    expect(publishedReleaseNotes([{ ...release, approved: true }])).toHaveLength(1);
  });
  test("adding a simulated expense reduces the simulated balance", () => {
    expect(demoBalance([{ id: 1, label: "income", amount: 3200, kind: "income" }, { id: 2, label: "expense", amount: 150, kind: "expense" }])).toBe(3050);
  });
});