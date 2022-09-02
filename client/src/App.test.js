import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { useRef } from "react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  test("renders the App", () => {
    render(<App />);
    expect(screen.getByText("chat app")).toBeVisible();
  });
});
