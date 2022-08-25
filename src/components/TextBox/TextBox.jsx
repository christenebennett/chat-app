import React from "react";
import { Typography } from "@mui/material";
import { StyledTextBox, StyledMessageBox } from "./TextBox.styles";

const TextBox = ({ message, user }) => {
  return (
    <StyledTextBox className={user === message.user ? "sender" : "recipient"}>
      <StyledMessageBox elevation={3}>
        <Typography className="message">{message.message}</Typography>
      </StyledMessageBox>
      <Typography className="username">{message.user.charAt(0)}</Typography>
    </StyledTextBox>
  );
};

export default TextBox;
