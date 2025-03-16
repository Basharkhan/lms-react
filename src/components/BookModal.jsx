import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Accessibility requirement

const BookModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      style="modal-overlay"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Enter Details
        </h2>

        <input
          type="text"
          placeholder="Enter something..."
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            onClick={onClose}
          >
            Close
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BookModal;
