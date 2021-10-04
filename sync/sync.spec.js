const Lodash = require("./sync");

let _ = new Lodash();

describe("Lodash: compact", () => {
  let array = [];

  beforeEach(() => {
    array = [false, 42, 0, "", true, null, "hello"];
  });

  afterEach(() => {
    _ = new Lodash();
  });

  it("Should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  it("Should working array be editable", () => {
    array.push(...["one", "two"]);
    expect(array).toContain("one");
    expect(array).toContain("two");
  });

  it("Should remove falsy values from array", () => {
    const result = [42, true, "hello"];
    expect(_.compact(array)).toEqual(result);
  });

  it("Should NOT contain falsy values", () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain("");
    expect(_.compact(array)).not.toContain(null);
  });
});

describe("Lodash: groupBy", () => {
  it("Should be defined", () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  it("Should group array items by Math.floor", () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      3: [3.1],
      4: [4.2],
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  it("Should group array items by length", () => {
    const array = ["one", "two", "three"];
    const result = {
      5: ["three"],
      3: ["one", "two"],
    };
    expect(_.groupBy(array, "length")).toEqual(result);
  });

  it("Should NOT return array", () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});
