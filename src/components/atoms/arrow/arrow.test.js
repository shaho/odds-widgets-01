import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";

import Arrow from ".";

describe("Arrow Component", () => {
  test("renders", () => {
    const { container } = render(<Arrow />);
    expect(container.querySelectorAll("span")).toHaveLength(1);
  });

  test("Black color arrow", () => {
    const { container } = render(<Arrow color="black" />);
    expect(container.querySelector("span")).toHaveStyleRule(
      "border-bottom",
      "6px solid #021d38",
    );
  });

  test("Down Arrow direction", () => {
    const { container } = render(<Arrow direction="down" />);
    expect(container.querySelector("span")).toHaveStyleRule(
      "transform",
      "rotate(180deg)",
    );
  });
});

afterEach(() => {
  cleanup();
});
