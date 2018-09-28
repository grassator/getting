import { getIn, getInWithDefault } from "./index";

describe("getting", () => {
  it("should support optional properties", () => {
    const obj: { 0?: { 1: { 2: string } } } = {
      0: {
        1: {
          2: "foo"
        }
      }
    };
    let result = getIn(obj, 0, 1, 2);
    expect(result).toBe("foo");
    // Type assert that from type perspective result can be "undefined"
    result = undefined;
  });
  it("should give type without 'undefined' for known properties", () => {
    const obj = {
      0: {
        1: {
          2: 42
        }
      }
    };
    const result: number = getIn(obj, 0, 1, 2);
    expect(result).toBe(42);
  });
  it("should return the same value if there is no path specified", () => {
    const obj = { foo: "bar" };
    const result = getIn(obj);
    expect(result).toBe(obj);
  });
  it("should support specifying default value", () => {
    const obj: { foo?: string } = {};
    const result = getInWithDefault(obj, "bar", "foo");
    expect(result).toEqual("bar");
  });
});
