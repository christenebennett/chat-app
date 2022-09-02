import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { Box, Tab, Typography, useMediaQuery } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MessageContainer from "./components/MessageContainer/MessageContainer";
import { StyledChatApp, StyledDivider } from "./App.styles";

const socket = io.connect("http://localhost:3001");

function App() {
  const [messages, setMessages] = useState([
    { user: "Peralta", message: "what's up?" },
    { user: "Boyle", message: "not much. you?" },
  ]);

  const [value, setValue] = React.useState("1");
  const users = ["Peralta", "Boyle"];
  const desktopSize = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.group("useEffect socket");
      console.log("messages when socket changes", messages);
      console.log("socket changed!");
      console.log("data.message in socket useEffect", data);
      console.groupEnd();
      setMessages(data.message);
    });
  }, [socket]);

  const handleAddNewMessage = (user, msg) => {
    const newMessageObj = {
      user,
      message: msg,
    };
    setMessages((messages) => [...messages, newMessageObj]);
  };

  const sendMessage = () => {
    socket.emit("send_message", {
      message: messages,
    });
  };

  // handle changing tabs
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ref = React.createRef();
  const scrollToBottom = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    console.log("messages", messages);
  });
  return (
    <StyledChatApp>
      <Typography variant="h1">chat app</Typography>
      <StyledDivider />
      {!desktopSize && (
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              {users.map((user, index) => {
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
