const { multiply } = require("./../calculator");

describe("Multiply", () => {
    test("should multiply two integers correctly", () => {
    const result = multiply(3, 2);
    expect(result).toBe(6);
    });

    test("should multiply two floating point numbers correctly", () => {
    const result = multiply(4.5, 2.1);
    expect(result).toBe(9.5);
    });
});
