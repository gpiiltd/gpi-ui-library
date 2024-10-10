import React from "react";
import { FooterProps } from "./types";

const Footer: React.FC<FooterProps> = ({
  logo,
  children,
  bg_color,
  className = "",
}) => {
  return (
    <footer
      className={`bg-${bg_color} text-white bottom-0  w-full_width ${className}`}
      style={{
        backgroundColor: bg_color,
      }}
    >
      <div className=" flex text-center gap-8 px-6 ">
        <div className="flex items-center">
          <img src={logo} alt=" Logo" />
        </div>
        {children}
      </div>
    </footer>
  );
};

export default Footer;
