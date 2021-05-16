import React from "react";
import { fireEvent, getByTestId, render, screen, userEvent } from "@testing-library/react";
import { LoginModal } from "./LoginModal";

describe("LoginModal", () => {
  it("renders LoginModal component", () => {
    render(<LoginModal></LoginModal>);
    expect(screen.getByText(/Регистрация/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue("Отправить")).toBeInTheDocument();
    expect(screen.getByTestId("form-test")).toHaveClass("form");
    expect(screen.getByPlaceholderText("mail@mail.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Пароль*")).toBeInTheDocument();
  });

  it("events input focus", () => {
    render(<LoginModal></LoginModal>);
    let input = screen.getByTestId("form-input");
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();

  });


});