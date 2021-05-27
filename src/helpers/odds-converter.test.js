import { ToAmerican } from "./odds-converter";

describe("Odds Converter", () => {
  test("ToAmerican", () => {
    expect(ToAmerican(2)).toEqual("+100");
    expect(ToAmerican(1.2)).toEqual("-500");
    expect(ToAmerican(1.22)).toEqual("-455");
    expect(ToAmerican(1.25)).toEqual("-400");
    expect(ToAmerican(1.29)).toEqual("-345");
    expect(ToAmerican(1.33)).toEqual("-303");
    expect(ToAmerican(1.44)).toEqual("-227");
    expect(ToAmerican(9)).toEqual("+800");
    expect(ToAmerican(1.5)).toEqual("-200");
    expect(ToAmerican(1.01)).toEqual("-10000");
  });
});
