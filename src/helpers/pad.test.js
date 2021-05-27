import { pad } from "./pad";

describe("Pad Helper", () => {
  test("Singular number", () => {
    expect(pad(3)).toEqual("03");
  });

  test("Multiple numbers", () => {
    expect(pad(13)).toEqual(13);
  });
});
