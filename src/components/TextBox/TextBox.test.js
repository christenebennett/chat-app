import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextBox from "./TextBox";

test("renders the TextBox", () => {
  render(
    <TextBox
      message={{ message: "hello there", user: "Leslie" }}
      user="Leslie"
    />
  );
  expect(screen.getByText(/hello there/i)).toBeVisible();
});
