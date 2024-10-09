import React, { useState } from "react";
import Modal from "../component/Modal";
import Typography from "../component/Typography";
import { TypographyVariant } from "../component/types";
import closeIcon from "../component/Assets/closeIcon.svg";

const ViewModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-8">
      <Typography variant={TypographyVariant.TITLE} className="text-black">
        Modal
      </Typography>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-8"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        closeIcon={closeIcon}
        width="40%"
      >
        <h2 className="text-lg font-bold">My Modal</h2>
        <p>This is the content of the modal!</p>
        <p>This is the content of the modal!</p>
        <p>This is the content of the modal!</p>
        <p>This is the content of the modal!</p>
        <p>This is the content of the modal!</p>
        <p>This is the content of the modal!</p>
        <p>This is the content of the modal!</p>
        <p>This is the content of the modal!</p>
        <p>This is the content of the modal!</p>
      </Modal>
    </div>
  );
};

export default ViewModal;
