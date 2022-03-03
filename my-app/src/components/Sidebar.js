import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="" alt="" />
        <Avatar className="sidebar-avatar" />
        <h2>Brijesh Pujara</h2>
        <h4>pujara.brijesh1@gmail.com</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">13</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNumber">152</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
