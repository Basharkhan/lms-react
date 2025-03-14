import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const getBooks = async () => {
  const url = `${API_URL}/books`;
  const response = await axios.get(url);
  return response;
};

export const addBook = async (book) => {
  const url = `${API_URL}/books`;
  const response = await axios.post(url, book);
  return response;
};

export const updateBook = async (book) => {
  console.log(book);

  const url = `${API_URL}/books/${book.id}`;
  await axios.put(url, book);
};

export const deleteBook = async (id) => {
  const url = `${API_URL}/books/${id}`;
  const response = await axios.delete(url);
  return response;
};
