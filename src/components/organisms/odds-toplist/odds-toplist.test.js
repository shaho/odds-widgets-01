import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-styled-components";

import { dummyData } from "fixtures/1x2";
import OddsToplist from ".";

describe("OddsToplist Component", () => {
  const data = dummyData();

  test("Render OddsTopList", () => {
    const { container } = render(<OddsToplist mockData={data} />);
    expect(container).toBeTruthy();
  });

  test("box has correct initial max-height", () => {
    const { container } = render(<OddsToplist mockData={data} />);
    expect(container.querySelector("div.open")).toBeFalsy();
    expect(container.querySelector("div")).toHaveStyleRule(
      "max-height",
      "165px",
    );
  });

  test("box has correct max-height on button click", () => {
    const { container } = render(<OddsToplist mockData={data} />);
    const seeMoreButton = container.querySelector("button");

    fireEvent.click(seeMoreButton);
    expect(container.querySelector("div.open")).toBeTruthy();
  });
});

afterEach(() => {
  cleanup();
});
