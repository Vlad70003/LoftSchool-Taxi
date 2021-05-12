import React from "react";
import { render, screen, userEvent } from "@testing-library/react";
import { Map } from "./Map";

describe("Map", () => {
  it("renders Map component", () => {
    render(<Map />);
    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByText("Карта")).toHaveClass("nav-link");
    expect(screen.getByText("Профиль")).toHaveClass("nav-link");
    expect(screen.getByText("Выйти")).toHaveClass("nav-link");
  });

  it("event click by Map navigation", () => {
    render(<Map />);
    let mapButton = screen.getByText("Карта");
    userEvent.click(mapButton);
    expect(mapButton).toHaveBeenCalledTimes(1);
  });

  it("event click by Profile navigation", () => {
    render(<Map />);
    let profileButton = screen.getByText("Профиль");
    userEvent.click(profileButton);
    expect(profileButton).toHaveBeenCalledTimes(1);
  });

  it("event click by Exit navigation", () => {
    render(<Map />);
    let exitButton = screen.getByText("Выйти");
    userEvent.click(exitButton);
    expect(exitButton).toHaveBeenCalledTimes(1);
  });
})