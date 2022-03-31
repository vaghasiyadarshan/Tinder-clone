import React from "react";
import "./Chats.css";
import Chat from "./Chat"

const Chats = () => {
  return <div className="chats">
      <Chat
      name="Labrador"
      message="Wuff" 
      timestamp="6 mins ago" 
      profilePic=""
      />
      <Chat
      name="Shiba Inu"
      message="Bork" 
      timestamp="1 hr ago" 
      profilePic=""/>
      <Chat
      name="Corgi"
      message="Awooo" 
      timestamp="4 hrs ago" 
      profilePic=""/>
  </div>;
};

export default Chats;