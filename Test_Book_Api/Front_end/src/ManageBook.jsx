import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookForm from "./BookForm";
import axios from "axios";

const API_URL = "http://localhost:5000/books";

const initialBookState = {
  title: "",
  price: "",
  author: "",
  description: "",
  image: null,
};

const ManageBook = ({ fetchBooks, editingBook, setEditingBook }) => {
  const navigate = useNavigate();
  const [book, setBook] = useState(initialBookState);

  useEffect(() => {
    setBook(
      editingBook
        ? { ...editingBook }
        : { ...initialBookState }
    );
  }, [editingBook]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(book).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      if (editingBook) {
        await axios.put(`${API_URL}/${book._id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(API_URL, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setBook({ ...initialBookState });
      setEditingBook(null);
      fetchBooks();
      navigate("/");
    } catch (error) {
      console.error(`Error ${editingBook ? "updating" : "adding"} book:`, error);
    }
  };

  return (
    <div>
      <h1 className="text-center mb-4">
        {editingBook ? "✏️ Edit Book" : "➕ Add New Book"}
      </h1>

      <div className="text-end mb-3">
        <Link to="/" className="btn btn-secondary">
          ⬅️ Back to Home
        </Link>
      </div>

      <BookForm
        book={book}
        setBook={setBook}
        handleSubmit={handleFormSubmit}
        editingBook={editingBook}
      />
    </div>
  );
};

export default ManageBook;
