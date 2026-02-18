import express, { Request, Response } from "express";

import {
  addBook,
  filterBooksByTitle,
  findBookById,
  getAllBooks,
  updateBook,
} from "./services/BookService";
import Book from "./models/Book";

const app = express();
const port = 3000;
app.use(express.json())

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/books", async (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title;
    const filteredBooks = await filterBooksByTitle(String(title));
    res.json(filteredBooks);
  } else {
    const books = await getAllBooks();
    res.json(books);
  }
});

app.get("/books/:id", async (req: Request, res: Response) => {
  if (req.query.title) {
    const title = req.query.title;
    const filteredBooks = await filterBooksByTitle(String(title));
    res.json(filteredBooks);
  } else if (req.params.id) {
    const id = req.params.id;
    const filteredBooks = await findBookById(Number(id));
    res.json(filteredBooks);
  } else {
    const books = await getAllBooks();
    res.json(books);
  }
});

app.post("/books", async (req: Request, res: Response) => {
  const newBook: Book = req.body;
  await addBook(newBook);
  res.json(newBook);
});

app.put("/books/:id", async (req: Request, res: Response) => {
  const updatedBook = req.body;
  const id = Number(req.params.id);
  const updated = await updateBook(id, updatedBook);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).send("Book not found");
  }
});




