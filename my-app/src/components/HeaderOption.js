import React from "react";
import "./HeaderOption.css";
import {Avatar} from "@mui/material"

function HeaderOption({ avatar, Icon, title, onClick }) { // Props defined 
  return (
    
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption-icon" />}
      {avatar && <Avatar className = "headerOption-icon" src={avatar} />}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
