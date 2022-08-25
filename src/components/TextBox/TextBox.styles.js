import { Box, Paper, styled } from "@mui/material";

export const StyledTextBox = styled(Box)`
  display: flex;
  margin-bottom: 20px;
  animation: fadeIn 5s;

  .username {
    font-size: 12px;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }
  .message {
    font-size: 14px;
    padding: 5px 10px;
    margin: 5px;
    overflow-wrap: anywhere;
  }
  &.sender {
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    .username {
      background-color: #003f5c;
      color: #ffffff;
    }
    .message {
      text-align: right;
    }
  }
  &.recipient {
    align-items: center;
    justify-content: flex-end;
    flex-direction: row-reverse;
    .username {
      background-color: #a22725;
      color: #ffffff;
    }
    .message {
      text-align: left;
    }
  }
`;

export const StyledMessageBox = styled(Paper)`
  border-radius: 15px;
  max-width: 200px;
`;
