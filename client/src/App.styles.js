import { styled, Divider } from "@mui/material";

export const StyledChatApp = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .desktop-flex {
    display: flex;
    justify-content: center;
  }
  .MuiTypography-h1 {
    font-size: 50px;
  }
`;

export const StyledDivider = styled(Divider)`
  margin: 10px 0 20px;
`;
