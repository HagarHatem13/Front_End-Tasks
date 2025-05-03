import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ books = [], setEditingBook, deleteBook }) => {
  const navigate = useNavigate();

  const handleAddBook = () => {
    setEditingBook(null);
    navigate("/manage");
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
    navigate("/manage");
  };

  const truncateText = (text = "", maxLength = 100) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">📚 Book List</h1>

      <div className="text-end mb-4">
        <button className="btn btn-success" onClick={handleAddBook}>
          ➕ Add New Book
        </button>
      </div>

      {books.length === 0 ? (
        <p className="text-center fs-5">No books available. Add a new book!</p>
      ) : (
        <div className="row">
          {books.map((book) => (
            <div key={book._id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm h-100">
                {book.image && (
                  <img
                    src={`http://localhost:5000${book.image}`}
                    alt={book.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text mb-1"><strong>Author:</strong> {book.author}</p>
                  <p className="card-text mb-1"><strong>Price:</strong> ${book.price}</p>
                  <p className="card-text small text-muted">
                    <strong>Description:</strong>{" "}
                    {truncateText(book.description || "No description available")}
                  </p>
                  <div className="mt-auto d-flex gap-2">
                    <button
                      className="btn btn-sm btn-outline-success w-100"
                      onClick={() => handleEditBook(book)}
                      aria-label={`Edit ${book.title}`}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger w-100"
                      onClick={() => deleteBook(book._id)}
                      aria-label={`Delete ${book.title}`}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

