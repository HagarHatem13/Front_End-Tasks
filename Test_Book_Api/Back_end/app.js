import express from "express";
import multer from "multer";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;
const UPLOAD_DIR = path.join(__dirname, "public/uploads");


mongoose
  .connect("mongodb://127.0.0.1:27017/bookstore")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  author: { type: String, required: true },
  description: String,
  image: String,
});

const Book = mongoose.model("Book", bookSchema);


app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(UPLOAD_DIR));


const storage = multer.diskStorage({
  destination: UPLOAD_DIR,
  filename: (_, file, cb) => {
    const uniqueName = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});
const upload = multer({ storage });


const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);


app.get(
  "/books",
  asyncHandler(async (_, res) => {
    const books = await Book.find();
    res.json(books);
  })
);

app.post(
  "/books",
  upload.single("image"),
  asyncHandler(async (req, res) => {
    const bookData = {
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : "",
    };
    const createdBook = new Book(bookData);
    await createdBook.save();
    res.status(201).json(createdBook);
  })
);

app.put(
  "/books/:id",
  upload.single("image"),
  asyncHandler(async (req, res) => {
    const updateData = {
      ...req.body,
      ...(req.file && { image: `/uploads/${req.file.filename}` }),
    };

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(updatedBook);
  })
);

app.delete(
  "/books/:id",
  asyncHandler(async (req, res) => {
    const result = await Book.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: "Book successfully deleted" });
  })
);

app.use((err, req, res, next) => {
  console.error("🚨 Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});


app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
