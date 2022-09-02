import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MessageContainer from "./MessageContainer";

describe("Message Container", () => {
  test("renders the Message Container", () => {
    const mockScrollToBottom = jest.fn();
    render(
      <MessageContainer
        user="Leslie"
        messages={[
          { message: "hello there", user: "Leslie" },
          { message: "what's up?", user: "April" },
        ]}
        scrollToBottom={mockScrollToBottom}
      />
    );
    expect(screen.getByText(/to:/i)).toBeVisible();
  });
});
