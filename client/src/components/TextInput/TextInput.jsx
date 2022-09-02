import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import {
  StyledSubmitButton,
  StyledTextInput,
  StyledForm,
  StyledTextInputBox,
} from "./TextInput.styles";

const TextInput = ({ setMessages, user, messages }) => {
  const [messageVal, setMessageVal] = useState("");

  const handleNewMessage = (e) => {
    e.preventDefault();
    if (messageVal.length === 0) {
      return;
    }
    const newMessageObj = {
      user,
      message: messageVal,
    };
    setMessages((messages) => [...messages, newMessageObj]);
    setMessageVal("");
  };

  const handleMessageChange = (e) => setMessageVal(e.target.value);

  return (
    <StyledTextInputBox data-testid="text-input">
      <StyledForm onSubmit={handleNewMessage}>
        <StyledTextInput
          placeholder="say something..."
          value={messageVal}
          onChange={handleMessageChange}
          multiline
          fullWidth
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleNewMessage(e);
            }
          }}
        />
        <StyledSubmitButton
          type="submit"
          disabled={messageVal.length === 0}
          aria-label="send message"
        >
          <SendIcon fontSize="small" />
        </StyledSubmitButton>
      </StyledForm>
    </StyledTextInputBox>
  );
};

export default TextInput;
