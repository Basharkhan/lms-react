import React, { useState, useEffect } from "react";

const BookForm = ({ onSave, selectedBook, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    published_date: "",
  });

  useEffect(() => {
    if (selectedBook) {
      setFormData(selectedBook);
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({ title: "", author: "", isbn: "", published_date: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">
        {selectedBook ? "Edit" : "Add"} Book
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
          placeholder="ISBN"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="published_date"
          value={formData.published_date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {selectedBook ? "Update" : "Add"} Book
          </button>
          {selectedBook && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BookForm;
