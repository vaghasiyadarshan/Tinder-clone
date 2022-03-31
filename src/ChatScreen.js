import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import "./ChatScreen.css";
import { Preview } from "@mui/icons-material";

const ChatScreen = () => {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    {
      name: "Labrador",
      image:""
        
      message: "Hey",
    },
    {
      name: "Labrador",
      image:
        "",
      message: "Bork bork bork",
    },
    {
      message: "yo",
    },
  ]);

  const handleSend = (e) =>{
    e.PreventDefault();

    setMessages([...messages, { message: input }]);
    setInput(" ");

  };

  // const handleSend = (e) => {
  //   e.preventDefault();
  //   setMessages([...messages, { message: input }]);
  //   setInput("");
  // };
  return (
    <div className="chatScreen">
      <p className="chatscreen_time"> YOU MATCHED WITH ELLEN ON 10/20/2020</p>
      {messages.map((message) => (
        message.name ? (
          <div className="chatscreen_massage">
            <Avatar className="chatscreen_image"
              src={message.image} />
            <p className="chatscreen_text" >{message.message}</p>
          </div>
        ):
        (
          <div className="chatscreen_massage">
          {/* <Avatar className="chatscreen_image"
            src={message.image} /> */}
          <p className="chatscreen_textuser" >{message.message}</p>
        </div>


        )
          
        )

      )}

      <div >
        <form className="chatscreen_input">
              <input
              value={input}
              onChange={(e)=> setInput(e.target.value)} 
              className="chatscreen_inputfiled"
              type="text" placeholder="Type a massage..."/>
              <button onClick={handleSend} type="submit" className="chatscreen_btn">SEND</button>

        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
