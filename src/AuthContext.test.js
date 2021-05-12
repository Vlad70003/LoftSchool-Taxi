import React from "react";
import { render, screen, userEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { AuthProvider, AuthContext } from "./AuthContext";

describe("AuthContext", () => {
  describe("#login", () => {
    it("sets isLogedIn is false", () => {
      let isLoggedIn;
      let logIn;
      let logOut;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              logIn = value.logIn;
              logOut = value.logOut;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );
      expect(isLoggedIn).toBe(false);
      act(() => {
        logIn("test@test.com", "test");
      });
      expect(isLoggedIn).toBe(true);
      act(() => {
        logOut();
      });
      expect(isLoggedIn).toBe(false);
    });
  });
});