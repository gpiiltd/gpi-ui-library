/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, width }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-lg shadow-lg p-6 "
        style={{
          width: width,
        }}
      >
        {children}
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
