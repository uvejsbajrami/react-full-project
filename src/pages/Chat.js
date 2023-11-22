import React, { useState } from "react";
import Auth from "../components/Auth";
import Cookies from "universal-cookie";
import ChatReact from "../components/ChatReact";
import { AppWrapper } from "../components/AppWrapper";
import "../styles/Chat.css";

const cookies = new Cookies();

function Chat() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");

  if (!isAuth) {
    return (
      <div className="col-6 mt-5 rounded-4 chatDiv">
        <Auth />
      </div>
    );
  } else {
    return (
      <div style={{}} className="col-6 mt-5 rounded-4 chatDiv">
        {/* <ChatReact room={room} /> */}
        <AppWrapper
          isAuth={isAuth}
          setIsAuth={setIsAuth}
          setIsInChat={setIsInChat}
        >
          {!isInChat ? (
            <div className="room">
              <label> Type room name: </label>
              <input
                onChange={(e) => setRoom(e.target.value)}
                style={{ color: "black" }}
                required
              />
              <button
                onClick={() => {
                  setIsInChat(true);
                }}
                className="btn btn-outline-primary btn-sm"
              >
                Enter Chat
              </button>
            </div>
          ) : (
            <ChatReact room={room} />
          )}
        </AppWrapper>
      </div>
    );
  }
}

export default Chat;
