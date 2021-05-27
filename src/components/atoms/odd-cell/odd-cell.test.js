import { render, cleanup, waitFor } from "@testing-library/react";
import "jest-styled-components";

import OddCell from ".";

describe("OddCell Component", () => {
  test("renders", async () => {
    const { container } = render(
      <OddCell link="https://google.com" odds={2.35} odds_old={2.35} />,
    );
    expect(container).toBeTruthy();
    expect(container.querySelector(".value")).toBeTruthy();
    expect(container.querySelector("a").getAttribute("href")).toEqual(
      "https://google.com",
    );
    await waitFor(() => {
      expect(container.querySelector(".odds-fade-in")).toBeTruthy();
    });
    expect(container.querySelector("span.down")).toBeFalsy();
    expect(container.querySelector("span.up")).toBeFalsy();
  });

  test("odds", () => {
    const { getByText } = render(<OddCell odds={3.6} />);
    expect(getByText("3.6")).toBeTruthy();
  });

  test("isUp", () => {
    const { container, getByText } = render(
      <OddCell odds={3.6} odds_old={3.0} />,
    );
    expect(getByText("3.6")).toBeTruthy();
    expect(container.querySelector("span.up")).toBeTruthy();
  });

  test("isDown", () => {
    const { container, getByText } = render(
      <OddCell odds={1.05} odds_old={2.75} />,
    );
    expect(getByText("1.05")).toBeTruthy();
    expect(container.querySelector("span.down")).toBeTruthy();
  });

  test("isHighlighted", () => {
    const { container } = render(
      <OddCell odds={1.05} odds_old={2.75} isHighlighted />,
    );
    expect(container.querySelector("a")).toHaveStyleRule(
      "background",
      "#e2f0ff",
    );
  });

  test("isDisabled", () => {
    const { container } = render(
      <OddCell odds={1.05} odds_old={2.75} isDisabled />,
    );
    expect(container.querySelector("a")).toHaveStyleRule("color", "#b3bbc3");
  });
});

afterEach(() => {
  cleanup();
});
