import { render, cleanup } from "@testing-library/react";

import Footer from ".";

describe("Footer Component", () => {
  test("renders", () => {
    const { container } = render(
      <Footer inactiveBets link="https://google.com" />,
    );
    expect(container).toBeTruthy();
    expect(container.querySelectorAll("a")).toHaveLength(1);
    expect(container.querySelector("a").getAttribute("href")).toEqual(
      "https://google.com",
    );
  });

  test("inactiveBets", () => {
    const { container } = render(<Footer inactiveBets={false} />);
    expect(container.querySelector("a")).toBeFalsy();
  });
});

afterEach(() => {
  cleanup();
});
