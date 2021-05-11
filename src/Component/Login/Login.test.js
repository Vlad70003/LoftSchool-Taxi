import React from "react";
import { render, screen } from "@testing-library/react";
import { Login } from "./Login";

describe("Login", () => {
  it("renders Login component", () => {
    render(<Login />);

    expect(screen.getByTestId("section-login")).toHaveClass("section-login");
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
});