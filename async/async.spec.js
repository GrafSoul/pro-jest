const Ajax = require("./async");

describe("Ajax: echo", () => {
  it("should return value async", async () => {
    const result = await Ajax.echo("some data");
    expect(result).toBe("some data");
  });

  it("should return value with Promise", () => {
    return Ajax.echo("some data").then((data) => {
      expect(data).toBe("some data");
    });
  });

  it("should catch error with Promise", () => {
    return Ajax.echo().catch((error) => {
      expect(error).toBeInstanceOf(Error);
    });
  });

  it("should catch error with async", async () => {
    try {
      await Ajax.echo();
    } catch (error) {
      expect(error.message).toBe("error");
    }
  });
});
