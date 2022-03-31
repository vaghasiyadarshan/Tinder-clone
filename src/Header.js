import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum'; 
import { IconButton } from '@mui/material/';
import {Link,useHistory} from 'react-router-dom';
import "./header.css"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

const Header = ({backButton }) => {
  const history = useHistory();

  return <div className="header">
 
 {backButton ? ( 
   <IconButton onClick={()=>history.replace(backButton)}> 
     <ArrowBackIosIcon fontSize='large' className="headericon"/>

   </IconButton>
 ): (
<IconButton>

<PersonIcon className='headericon' fontSize='large'/>
</IconButton>

 )
 }
 
    <Link to='/'>
     <img 
     className='tinderlogo'
     src='hg'/>
    
    
    </Link> 
     <Link to='/chat'>
     <IconButton> 
      <ForumIcon className='headericon' fontSize='large'/>
     </IconButton>
     </Link>
     
  </div>;
};

export default Header;

