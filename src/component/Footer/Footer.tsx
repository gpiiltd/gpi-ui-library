import React from "react";
import { FooterProps } from "../types";

const Footer: React.FC<FooterProps> = ({ children, bg_color }) => {
  return (
    <footer
      className={`bg-${bg_color} text-white py-4 bottom-0 absolute w-full_width`}
      style={{
        backgroundColor: bg_color,
      }}
    >
      <div className="container mx-auto px-4 text-center">{children}</div>
    </footer>
  );
};

export default Footer;
