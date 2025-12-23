const add = require("./add");

describe("math", () => {
  it("should sum", () => {
    expect(add(2, 2)).toBe(4);
  });
});
