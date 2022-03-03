import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
      {/* Seperate header into two sections, left/right */}
      <div className="header-left">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1646318335~hmac=6c5453fabdd1f5e3c3bdf26300a24d2d"
          alt="linkedin_logo"
        />

        <div className="header-search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/* Seperate header into two sections, left/right */}

      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title = 'Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title = 'My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title = 'Jobs'/>
        <HeaderOption Icon={ChatIcon} title = 'Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar='https://media-exp1.licdn.com/dms/image/D4D03AQF12B6oXJiGbw/profile-displayphoto-shrink_800_800/0/1641398510387?e=1651708800&v=beta&t=SpNFi6RQhjJTotMhPf6eNhVcNqT4NnurYW6V15fPoH4' alt ='me'/>
      </div>
    </div>
  );
}

export default Header;
