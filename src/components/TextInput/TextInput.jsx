import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import {
  StyledSubmitButton,
  StyledTextInput,
  StyledForm,
  StyledTextInputBox,
} from "./TextInput.styles";

const TextInput = ({ setMessages, user }) => {
  const [messageVal, setMessageVal] = useState("");
  const handleNewMessage = (e) => {
    if (messageVal.length === 0) {
      return;
    }
    e.preventDefault();
    const newMessageObj = {
      user: user,
      message: messageVal,
    };
    setMessages((messages) => [...messages, newMessageObj]);
    setMessageVal("");
  };
  // controlled text field
  const handleMessageChange = (e) => setMessageVal(e.target.value);
  return (
    <StyledTextInputBox className="text-input">
      <StyledForm onSubmit={handleNewMessage}>
        <StyledTextInput
          placeholder="type your message"
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
        <StyledSubmitButton type="submit" disabled={messageVal.length === 0}>
          <SendIcon fontSize="small" />
        </StyledSubmitButton>
      </StyledForm>
    </StyledTextInputBox>
  );
};

export default TextInput;
