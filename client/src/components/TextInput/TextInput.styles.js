import { Button, styled, TextField, Box } from "@mui/material";

export const StyledTextInputBox = styled(Box)`
  margin-top: 10px;
`;

export const StyledTextInput = styled(TextField)`
  input {
    padding: 10px;
  }
  .MuiInputBase-root {
    border-radius: 15px;
  }
`;

export const StyledSubmitButton = styled(Button)`
  &.MuiButtonBase-root {
    height: 40px;
    width: 40px;
    min-height: unset;
    min-width: unset;
    border-radius: 20px;
    background: #58508d;
    color: #ffffff;
    margin-left: 10px;
    transition: all 500ms ease;
    &:disabled {
      opacity: 0.5;
    }
  }
`;

export const StyledForm = styled("form")`
  display: flex;
  align-items: center;
`;
