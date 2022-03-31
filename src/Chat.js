import React from 'react';
import Avatar from '@mui/material/Avatar';
import './Chat.css'
import {Link } from "react-router-dom"
const Chat = (name,message,profilePic,timestamp) => {
  return (
  
  <Link to={`/chat/${name}`}> 
  <div className="chat">
      
        <Avatar className="chat__image" src="" />
            <div className="chat__details">
                <h2>darshan</h2><p>
                  bast
                </p>
            </div>
        <p>last seen 30 minutns ago   </p>
  </div>
  </Link>
     
  );
        
};

export default Chat;
 