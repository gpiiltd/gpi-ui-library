import React from "react";
import { FooterProps } from "../types";

const Footer: React.FC<FooterProps> = ({ logo, children, bg_color }) => {
  return (
    <footer
      className={`bg-${bg_color} text-white py-4 bottom-0 absolute w-full_width`}
      style={{
        backgroundColor: bg_color,
      }}
    >
      <div className=" px-4 flex items-center gap-20">
        <img src={logo} alt=" Logo" className="h-6" />

        <div>{children}</div>
      </div>
    </footer>
  );
};

export default Footer;
