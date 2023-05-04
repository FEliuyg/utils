"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const src_1 = require("../src");
(0, vitest_1.describe)("isUndefined", () => {
    (0, vitest_1.test)("should return true", () => {
        (0, vitest_1.expect)((0, src_1.isUndefined)(undefined)).toBe(true);
    });
    (0, vitest_1.test)("should return false", () => {
        (0, vitest_1.expect)((0, src_1.isUndefined)(1)).toBe(false);
        (0, vitest_1.expect)((0, src_1.isUndefined)("1")).toBe(false);
        (0, vitest_1.expect)((0, src_1.isUndefined)([1, 2])).toBe(false);
        (0, vitest_1.expect)((0, src_1.isUndefined)({ a: 1 })).toBe(false);
    });
});
