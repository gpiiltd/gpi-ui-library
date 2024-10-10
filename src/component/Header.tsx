import React, { FC } from "react";
import { HeaderProps } from "./types";
const Header: FC<HeaderProps> = ({ logo, children, bg_color }) => {
  return (
    <header
      className={`w-full_width flex justify-between items-center shadow px-12 p-2`}
      style={{
        backgroundColor: bg_color,
      }}
    >
      <div className="flex items-center">
        <img src={logo} alt=" Logo" className="h-6" />
      </div>
      {children}
    </header>
  );
};

export default Header;
