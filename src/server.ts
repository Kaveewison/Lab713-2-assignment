import express, { Request, Response } from "express";

import {
  getAllBook,
  getBookByGroups,
  getBookById,
  addBook,
  updateBook,
} from "./services/BookService";
import type Book from "./models/book";

const app = express();
const port = 3000;
app.use(express.json())

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/books", async (req: Request, res: Response) => {
  if (req.query.groups) {
    const groups = req.query.groups as string;
    const filteredBooks = getBookByGroups(groups);
    res.json(filteredBooks);
  } else {
    res.json(getAllBook());
     }
 });


app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = getBookById(id);
    if (book) {
    res.json(book);
    } else {
    res.status(404).send("Book not found");
    }
});  

app.post("/books", (req, res) => {
    const newBook: Book = req.body;
    addBook(newBook);
    res.json(newBook);
});

app.put("/books/:id", (req, res) => {
  const updatedBook: Partial<Book> = req.body;
  const id = Number(req.params.id);
  const updated = updateBook(id, updatedBook);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).send("Book not found");
  }
});





