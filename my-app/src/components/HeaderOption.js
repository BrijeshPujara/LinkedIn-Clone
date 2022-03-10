import React from "react";
import "./HeaderOption.css";
import {Avatar} from "@mui/material"
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";

function HeaderOption({  avatar, Icon, title, onClick }) { // Props defined 
  const user = useSelector(selectUser);
  return (
    
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption-icon" />}
      
      {avatar && <Avatar className="headerOption-icon">{user?.displayName[0]}</Avatar>}
      
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
