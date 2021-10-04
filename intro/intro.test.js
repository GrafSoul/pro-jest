const { sum, nativeNull } = require("./intro");

describe("Sum function:", () => {
  it("Should return sum of two values", () => {
    expect(sum(1, 4)).toBe(5);
    expect(sum(1, 4)).toEqual(5);
  });

  it("Should return value correctly comparing to other", () => {
    expect(sum(1, 4)).toBeGreaterThan(4); // Больше чем
    expect(sum(1, 4)).toBeGreaterThanOrEqual(5); // Больше или равно
    expect(sum(1, 4)).toBeLessThan(6); // Меньше
    expect(sum(1, 4)).toBeLessThanOrEqual(5); // Меньше или равно
  });

  it("Should sum 2 float values correctly", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("Native Null function", () => {
  it("Should return false value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy(); // undifined, null, 0, ''
    expect(nativeNull()).toBeDefined(); // no undifined
    expect(nativeNull()).not.toBeTruthy(); // no undifined, null, 0, ''
    expect(nativeNull()).not.toBeUndefined(); // no undifined
  });
});
