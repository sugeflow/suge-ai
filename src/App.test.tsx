import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the Suge AI hero content", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /苏格AI/i })).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link")
        .some((link) => link.getAttribute("href") === "https://github.com/zhichucode"),
    ).toBe(true);
  });
});
