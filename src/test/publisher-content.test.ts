import { describe, expect, it } from "vitest";
import { achievements } from "@/lib/publisher-content";

describe("Turnkey Publishers achievements", () => {
  it("shows the series, book, dealer, and customer totals from the brief", () => {
    expect(achievements.map(({ value }) => value)).toEqual([20, 140, 30, 500]);
  });
});