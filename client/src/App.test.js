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
    render(<App />);
    expect(screen.getByText("chat app")).toBeVisible();
  });

  test("it switches between tabs", () => {
    window.resizeTo(375, 667);
    render(<App />);
    userEvent.click(screen.getByTestId("Boyle-tab"));
    expect(screen.getByText(/To: Peralta/i)).toBeVisible();
  });
});
