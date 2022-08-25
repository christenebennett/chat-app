import React, { useState } from "react";
import { Box, Tab, Typography, useMediaQuery } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MessageContainer from "./components/MessageContainer/MessageContainer";
import { StyledChatApp } from "./App.styles";

function App() {
  const [messages, setMessages] = useState([
    { user: "Peralta", message: "wazzup" },
    { user: "Boyle", message: "nothin. wuwu?" },
  ]);
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const desktopSize = useMediaQuery("(min-width:600px)");
  const ref = React.createRef();
  const scrollToBottom = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const users = ["Peralta", "Boyle"];
  return (
    <StyledChatApp>
      <Typography variant="h1">chat app</Typography>
      {!desktopSize && (
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              {users.map((user, index) => {
                console.log("index + 1", index + 1);
                return (
                  <Tab
                    label={user}
                    value={(index + 1).toString()}
                    key={user + index}
                  />
                );
              })}
            </TabList>
          </Box>
          <TabPanel value="1">
            <MessageContainer
              sender="Boyle"
              user="Peralta"
              messages={messages}
              setMessages={setMessages}
              ref={ref}
              scrollToBottom={scrollToBottom}
            />
          </TabPanel>
          <TabPanel value="2">
            <MessageContainer
              sender="Peralta"
              user="Boyle"
              messages={messages}
              setMessages={setMessages}
              ref={ref}
              scrollToBottom={scrollToBottom}
            />
          </TabPanel>
        </TabContext>
      )}
      {desktopSize && (
        <div className="desktop-flex">
          <MessageContainer
            sender="Boyle"
            user="Peralta"
            messages={messages}
            setMessages={setMessages}
            ref={ref}
            scrollToBottom={scrollToBottom}
          />
          <MessageContainer
            sender="Peralta"
            user="Boyle"
            messages={messages}
            setMessages={setMessages}
            ref={ref}
            scrollToBottom={scrollToBottom}
          />
        </div>
      )}
    </StyledChatApp>
  );
}

export default App;
