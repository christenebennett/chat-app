import { styled, Paper } from "@mui/material";
import TextBox from "../TextBox/TextBox";
import TextInput from "../TextInput/TextInput";

export const StyledMessageBox = styled(Paper)`
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 500px;
  overflow: auto;
  max-width: 500px;
  background-color: #f7f7f7;
  @media screen and (min-width: 600px) {
    width: 100%;
  }
  .messages-container {
    margin-top: 20px;
    height: 100%;
    max-height: 300px;
    overflow: auto;
  }
  .MuiTypography-h2 {
    font-size: 20px;
  }
`;

export const StyledTextBox = styled(TextBox)`
  min-height: 50px;
`;

export const StyledMessageList = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: auto;
`;

export const StyledTextInput = styled(TextInput)``;
