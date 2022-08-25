import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  StyledMessageBox,
  StyledTextBox,
  StyledMessageList,
  StyledTextInput,
} from "./MessageContainer.styles";

const MessageContainer = React.forwardRef((props, ref) => {
  const { user, sender, messages, setMessages, scrollToBottom } = props;

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <StyledMessageBox elevation={3}>
      <Typography variant="h2">To: {sender}</Typography>
      <div className="messages-container">
        <StyledMessageList className="messages">
          {messages.map((message, index) => (
            <StyledTextBox
              className="message"
              message={message}
              sender={sender}
              key={message + index}
              user={user}
            />
          ))}
          <div ref={ref} />
        </StyledMessageList>
      </div>
      <StyledTextInput setMessages={setMessages} user={user} multiline />
    </StyledMessageBox>
  );
});

export default MessageContainer;
