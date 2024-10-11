import React, { FC } from "react";
import { LoaderProps } from "../types";

const Loader: FC<LoaderProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50"
      onClick={handleOutsideClick}
    >
      {/* Centering the loader */}
      <div className="loader">
        {" "}
        {/* Loader container */}
        <div className="loader-circle"></div>
      </div>
    </div>
  );
};

export default Loader;
