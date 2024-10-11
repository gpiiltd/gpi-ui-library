import React, { FC } from "react";
import { HeaderProps } from "../types";

const Header: FC<HeaderProps> = ({ logo, children }) => {
  return (
    <header className="flex justify-between items-center shadow px-12 p-2">
      <div className="flex items-center">
        <img src={logo} alt=" Logo" className="h-6" />
      </div>
      {children}
    </header>
  );
};

export default Header;
