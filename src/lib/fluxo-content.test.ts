import { describe, expect, test } from "vitest";
import { fluxoContact } from "./fluxo-content";

describe("Fluxo Vendas commercial boundaries", () => {
  test("uses Instagram Direct rather than a checkout", () => {
    expect(fluxoContact.direct).toBe("https://ig.me/m/cerne_lab");
  });
  test("provides the official Instagram profile fallback", () => {
    expect(fluxoContact.profile).toBe("https://www.instagram.com/cerne_lab/");
  });
});