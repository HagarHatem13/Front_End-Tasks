import React, { useState, useEffect } from "react";

const BookForm = ({ book, setBook, handleSubmit, editingBook }) => {
  const [previewSrc, setPreviewSrc] = useState("");

  useEffect(() => {
 
    if (book?.image && typeof book.image === "string") {
      setPreviewSrc(book.image);
    }
  }, [book]);

  const updateField = (field, value) => {
    setBook((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    updateField(id, value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewSrc(URL.createObjectURL(file));
      updateField("image", file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow bg-light">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          id="title"
          type="text"
          value={book.title || ""}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <input
          id="price"
          type="number"
          value={book.price || ""}
          onChange={handleInputChange}
          className="form-control"
          min="0"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="author" className="form-label">Author</label>
        <input
          id="author"
          type="text"
          value={book.author || ""}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          value={book.description || ""}
          onChange={handleInputChange}
          className="form-control"
          rows={4}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="image" className="form-label">Book Cover</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="form-control"
        />
        {previewSrc && (
          <img
            src={previewSrc}
            alt="Book Preview"
            className="mt-2 border rounded"
            style={{ width: "100px", height: "auto" }}
          />
        )}
      </div>

      <button type="submit" className="btn btn-success">
        {editingBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
};

export default BookForm;
