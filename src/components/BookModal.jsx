import React from "react";
import { MdCancel } from "react-icons/md";

const BookModal = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) {
    return null;
  }

  const [formData, setFormData] = React.useState({
    title: "",
    author: "",
    isbn: "",
    published_date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-1/2 rounded-lg">
        <div className="flex justify-between items-center px-8 py-4 border-b">
          <h3 className="text-md font-bold text-gray-900">Add Book</h3>
          <MdCancel
            size={20}
            className="text-red-500 cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="p-8">
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Scarface"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="author"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="isbn"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Isbn
            </label>
            <input
              type="text"
              id="isbn"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="225114587"
              value={formData.isbn}
              onChange={(e) =>
                setFormData({ ...formData, isbn: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="published_date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Published Date
            </label>
            <input
              type="date"
              id="published_date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.published_date}
              onChange={(e) =>
                setFormData({ ...formData, published_date: e.target.value })
              }
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-10 py-2 rounded cursor-pointer hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
