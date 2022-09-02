import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { useRef } from "react";
import matchMediaPolyfill from "mq-polyfill";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  beforeAll(() => {
    matchMediaPolyfill(window);
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
    window.HTMLElement.prototype.scrollIntoView = function () {};
  });

  test("renders the App", () => {
    // Arrange
    render(<App />);
    // Assert
    expect(screen.getByText("chat app")).toBeVisible();
  });

  test("it switches between tabs", () => {
    // Arrange
    window.resizeTo(375, 667);
    render(<App />);
    // Act
    userEvent.click(screen.getByTestId("Boyle-tab"));
    // Assert
    expect(screen.getByText(/To: Peralta/i)).toBeVisible();
  });

  test("a new message is visible after submission", () => {
    // Arrange
    render(<App />);
    const inputEl = screen.getByPlaceholderText("say something...");
    // Act
    userEvent.type(inputEl, "hello world");
    userEvent.click(screen.getByRole("button"));
    // Assert
    expect(inputEl).toHaveValue("");
    expect(screen.getByTestId("messages-container")).toHaveTextContent(
      /hello world/i
    );
  });
});
