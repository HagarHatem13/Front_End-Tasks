import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import ManageBook from "./ManageBook";
import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:5000",
});

const App = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = useCallback(async () => {
    try {
      const { data } = await api.get("/books");
      setBooks(data || []);
    } catch (err) {
      console.error("❌ Failed to fetch books:", err);
    }
  }, []);

  const handleDeleteBook = useCallback(
    async (bookId) => {
      try {
        await api.delete(`/books/${bookId}`);
        fetchBooks();
      } catch (err) {
        console.error(`❌ Error deleting book (${bookId}):`, err);
      }
    },
    [fetchBooks]
  );

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1 container my-4">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  books={books}
                  onEdit={setEditingBook}
                  onDelete={handleDeleteBook}
                />
              }
            />
            <Route
              path="/manage"
              element={
                <ManageBook
                  fetchBooks={fetchBooks}
                  editingBook={editingBook}
                  clearEditingBook={() => setEditingBook(null)}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

