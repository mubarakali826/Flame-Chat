import React, { useContext } from "react";
import { FaVideo } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { TiUserAdd } from "react-icons/ti";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/chatContext";

function Chat() {
  const {data}=useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
        <FaVideo className="icon"/>
        <TiUserAdd className="icon"/>
        <IoIosMore className="icon"/>
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  );
}

export default Chat;
