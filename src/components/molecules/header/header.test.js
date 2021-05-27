import { render, cleanup } from "@testing-library/react";

import Header from ".";

describe("Header Component", () => {
  test("Render", () => {
    const { container } = render(
      <Header title="Fc Barcelona vs Real Madrid" date="2021-05-04T08:14:52" />,
    );
    expect(container).toBeTruthy();
    expect(container.querySelectorAll("h2")).toHaveLength(1);
  });

  test("Render different date", () => {
    const { container } = render(
      <Header title="Fc Barcelona vs Real Madrid" date="2021-15-14T08:14:52" />,
    );
    expect(container).toBeTruthy();
    expect(container.querySelectorAll("h2")).toHaveLength(1);
  });

  test("Render texts", () => {
    const { container } = render(
      <Header title="Fc Barcelona vs Real Madrid" date="2021-15-14T08:14:52" />,
    );
    expect(container.querySelector("h2").textContent).toEqual(
      "Fc Barcelona vs Real Madrid",
    );
  });
});

afterEach(() => {
  cleanup();
});
