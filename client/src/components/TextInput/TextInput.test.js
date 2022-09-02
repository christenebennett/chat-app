import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TextInput from "./TextInput";

describe("Text Input", () => {
  test("renders the TextInput", () => {
    render(<TextInput />);
    expect(screen.getByRole("button")).toBeVisible();
  });

  test("updates messages on send", () => {
    // Arrange
    const mockSetMessages = jest.fn();
    render(<TextInput setMessages={mockSetMessages} user="Leslie" />);
    // Act
    const inputEl = screen.getByPlaceholderText("say something...");
    userEvent.type(inputEl, "oh hi mark");
    // Assert
    expect(inputEl).toHaveValue("oh hi mark");
  });
});
