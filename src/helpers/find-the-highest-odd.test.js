import { dummyData } from "fixtures/1x2";
import { setHighlightIn1x2 } from "./find-the-highest-odd";

describe("Find the highest odds", () => {
  test("1x2", () => {
    const array = dummyData();
    const result = setHighlightIn1x2(array);
    expect(result[2].offers[0].isHighlighted).toEqual(false);
    expect(result[1].offers[0].isHighlighted).toEqual(true);
    expect(result[2].offers[1].isHighlighted).toEqual(true);
    expect(result[1].offers[1].isHighlighted).toEqual(false);
    expect(result[2].offers[2].isHighlighted).toEqual(false);
    expect(result[0].offers[2].isHighlighted).toEqual(true);
  });
});
