import { describe, expect, it } from "vitest";
import { shouldPlayFluxoVideo } from "./fluxo-video";

describe("Fluxo Vendas playback policy", () => {
  it("autoplays without requiring viewport visibility", () => {
    expect(shouldPlayFluxoVideo(false, null)).toBe(true);
  });

  it("respects reduced motion until the user requests playback", () => {
    expect(shouldPlayFluxoVideo(true, null)).toBe(false);
    expect(shouldPlayFluxoVideo(true, true)).toBe(true);
  });

  it("preserves manual pause regardless of motion preference", () => {
    expect(shouldPlayFluxoVideo(false, false)).toBe(false);
    expect(shouldPlayFluxoVideo(true, false)).toBe(false);
  });
});