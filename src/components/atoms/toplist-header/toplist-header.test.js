import { render, cleanup } from "@testing-library/react";

import ToplistHeader from ".";

describe("ToplistHeader Component", () => {
  test("Renders", () => {
    const { container } = render(<ToplistHeader />);
    expect(container).toBeTruthy();
  });

  test("No row child", () => {
    const { container } = render(<ToplistHeader oddType="3x2" />);
    expect(container.querySelector("div").querySelector("div")).toEqual(null);
  });
});

afterEach(() => {
  cleanup();
});
