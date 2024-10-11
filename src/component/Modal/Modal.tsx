/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useEffect } from "react";
import { ModalProps } from "../types";

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  closeIcon,
  width,
}) => {
  if (!isOpen) return null;

  // Close modal on outside click
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Close modal on Escape key press
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 relative"
        style={{
          width: width,
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2  text-gray-600 hover:text-gray-900"
        >
          {closeIcon && <img src={closeIcon} alt="Close" className="h-6 w-6" />}
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
