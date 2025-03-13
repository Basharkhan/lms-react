import React, { useState, useEffect } from "react";
import BookModal from "../components/BookModal";
import {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} from "../services/bookService";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();

      setBooks(response.data.data);
    };
    fetchBooks();
  }, []);

  const handleAddBook = () => {
    setSelectedBook(null);
    setIsModalOpen(true);
  };

  const handleEditBook = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleDeleteBook = async (id) => {
    await deleteBook(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleSaveBook = async (book) => {
    if (book.id) {
      await updateBook(book);
      setBooks(books.map((b) => (b.id === book.id ? book : b)));
    } else {
      const response = await addBook(book);
      setBooks([...books, response.data.data]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 p-4 shadow-md border-t-2 border-t-blue-500">
      <h1 className="text-2xl font-bold mb-6">Book List</h1>
      <button
        onClick={handleAddBook}
        className="bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 mb-4"
      >
        + Add New Book
      </button>

      <div className="overflow-x-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Author
                </th>
                <th scope="col" className="px-6 py-3">
                  Isbn
                </th>
                <th scope="col" className="px-6 py-3">
                  Published Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {books.length > 0 ? (
                books.map((book) => (
                  <tr
                    key={book.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                  >
                    <td className="px-6 py-4">{book.title}</td>
                    <td className="px-6 py-4">{book.author}</td>
                    <td className="px-6 py-4">{book.isbn}</td>
                    <td className="px-6 py-4">{book.published_date}</td>
                    <td className="flex gap-x-2 px-6 py-4">
                      <button
                        onClick={() => handleEditBook(book)}
                        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteBook(book.id)}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800">
                  <td className="px-6 py-4">No recored found!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <BookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveBook}
        book={selectedBook}
      />
    </div>
  );
};

export default Books;
