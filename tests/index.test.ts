import { sum } from "../src/index";

describe("index", () => {
  describe("sum", () => {
    test.each([
      [1, 2, 3],
      [100, 20, 120],
      [10, 35, 45],
      [-1, 2, 1],
      [0, 10, 10],
    ])("calculate %i + %i", (a, b, expected) => {
      expect(sum(a, b)).toBe(expected);
    });
  });
});
