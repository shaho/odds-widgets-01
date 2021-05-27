import { render, cleanup } from "@testing-library/react";

import ProviderRow from ".";

describe("ProviderRow Component", () => {
  test("Renders", () => {
    const { container } = render(<ProviderRow />);
    expect(container).toBeTruthy();
    expect(container.querySelectorAll("img")).toHaveLength(1);
  });
});

afterEach(() => {
  cleanup();
});
