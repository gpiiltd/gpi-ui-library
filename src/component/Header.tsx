import React, { FC } from "react";
import wenaija_logo from "./Assets/wenaija_logo.svg";
import settingsIcon from "./Assets/settingsIcon.svg";
import notificationIcon from "./Assets/notificationIcon.svg";
import profileIcon from "./Assets/profileIcon.svg";
const Header: FC = () => {
  return (
    <header className="flex items-center justify-between p-2 bg-white shadow px-12">
      <img src={wenaija_logo} alt="Wenaija Logo" className="h-6" />
      <div className="flex ">
        <button className=" text-white rounded">
          <img src={settingsIcon} alt="settingsIcon" className="h-6" />
        </button>
        <button className="pr-2 text-white rounded">
          <img src={notificationIcon} alt="notificationIcon" className="h-6" />
        </button>
        <button className=" text-white rounded">
          <img src={profileIcon} alt="profileIcon" className="h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
