import React from "react";
import { render, screen, userEvent } from "@testing-library/react";
import { Map } from "./Map";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));


describe("Map", () => {
  it("renders Map component", () => {
    render(<Map></Map>);
    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByText("Карта")).toHaveClass("nav-link");
    expect(screen.getByText("Профиль")).toHaveClass("nav-link");
    expect(screen.getByText("Выйти")).toHaveClass("nav-link");
  });

})