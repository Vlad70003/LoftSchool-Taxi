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
    let { content } = render(<input  data-testid="input-test-focus" />)
    let input = screen.getByTestId("input-test-focus");
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();

  });
  ///Выдает Ошибку на type и paste
    // it("events input value", () => {
    //   let { content } = render(<input type="text"  data-testid="input-test-value" value="Hello"/>)
    //   let input = screen.getByTestId("input-test-value");
    //   let textValue = 'Hello World!';
    //   userEvent.paste(input, textValue);
    // });

});