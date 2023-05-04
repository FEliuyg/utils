import { test, expect, it, describe } from "vitest";
import { isUndefined } from "../src";

describe("isUndefined", () => {
  test("should return true", () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  test("should return false", () => {
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined("1")).toBe(false);
    expect(isUndefined([1, 2])).toBe(false);
    expect(isUndefined({ a: 1 })).toBe(false);
  });
});
