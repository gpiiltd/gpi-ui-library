import React, { useState } from "react";
import Modal from "./component/Modal";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        width="600px"
      >
        <h2 className="text-lg font-bold">My Modal</h2>
        <p>This is the content of the modal!</p>
        <p>This is the content of the modal!</p>
        <p>This is the content of the modal!</p>
        <p>This is the content of the modal!</p>
        <p>This is the content of the modal!</p>
      </Modal>
    </div>
  );
};

export default App;
