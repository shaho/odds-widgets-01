import { render, cleanup } from "@testing-library/react";

import OddsSelect from ".";

describe("OddsSelect Component", () => {
  test("Renders", () => {
    const { container } = render(<OddsSelect />);
    expect(container).toBeTruthy();
  });
});

afterEach(() => {
  cleanup();
});
