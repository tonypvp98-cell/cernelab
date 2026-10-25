import { describe, expect, test } from "vitest";
import { landingFeatures, landingMedia, visibleFeatures } from "./landing-content";

describe("Verified landing content", () => {
  test("publishes at most four defined capabilities", () => {
    expect(visibleFeatures(landingFeatures)).toHaveLength(4);
    expect(visibleFeatures(landingFeatures).some(item => item.title === "Metas de Setup")).toBe(false);
  });
  test("rejects pending and undefined feature descriptions", () => {
    expect(visibleFeatures([{ approved: false, text: "Pending" }, { approved: true, text: " " }])).toEqual([]);
  });
  test("leaves real media unset until supplied", () => {
    expect(landingMedia).toEqual({ hero: null, dashboard: null, video: null });
  });
});