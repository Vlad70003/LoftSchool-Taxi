import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { RegModal } from "./RegModal";
import userEvent from "@testing-library/user-event";

describe("RegModal", () => {
  it("renders RegModal component", () => {
    render(<RegModal />);
    expect(screen.getByTestId("form")).toHaveClass("form");
    expect(screen.getByPlaceholderText("mail@mail.com")).toHaveClass("input");
    expect(screen.getByPlaceholderText("Имя*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Фамилия*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Пароль*")).toBeInTheDocument();
    expect(screen.getByText("Войти")).toBeInTheDocument();
  });

  it("event click by link Send", () => {
    render(<RegModal />);
    let input = screen.getByTestId("form-input");
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
})