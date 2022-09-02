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

  test("expect input to be empty after message submission", () => {
    // Arrange
    const mockSetMessages = jest.fn();
    render(<TextInput setMessages={mockSetMessages} user="Leslie" />);
    // Act
    const inputEl = screen.getByPlaceholderText("say something...");
    userEvent.type(inputEl, "oh hi mark");
    userEvent.click(screen.getByRole("button"));
    // Assert
    expect(inputEl).toHaveValue("");
  });

  test("nothing will happen when empty message is sent by pressing enter", () => {
    // Arrange
    const mockSetMessages = jest.fn();
    render(<TextInput setMessages={mockSetMessages} user="Leslie" />);
    // Act
    const inputEl = screen.getByPlaceholderText("say something...");
    userEvent.type(inputEl, "{enter}");
    // Assert
    expect(mockSetMessages).not.toHaveBeenCalled();
  });
});
