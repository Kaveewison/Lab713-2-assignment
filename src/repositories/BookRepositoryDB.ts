import pg from 'pg';
import type Book from "../models/Book";
const { Pool  } = pg;


const pool = new Pool({
   user: 'postgres',
   password: 'postgres',
   host: 'localhost',
   port: 5432,
   database: 'bookstore'
});

export const filterBooksByTitle = async (title: string): Promise<Book[]> => {
  const result = await pool.query("SELECT * FROM books WHERE title ILIKE $1", [
    `${title}%`,
  ]);
  return result.rows as Book[];
};

export const findBookById = async (id: number): Promise<Book | undefined> => {
  const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
  const books = result.rows as Book[];
  return books.length > 0 ? books[0] : undefined;
};

export const addBook = async (newBook: any): Promise<Book> => {

  const { title, author_name, description, group } = newBook;
  const result = await pool.query(
    'INSERT INTO books (title, author_name, description, "group") VALUES ($1, $2, $3, $4) RETURNING id',
    [title, author_name, description, group]
  );
  newBook.id = result.rows[0].id;
  return newBook;
};

export const updateBook = async (
  id: number,
  updatedBook: any
): Promise<Book | null> => {
  const { title, author_name, description, group } = updatedBook;
  const result = await pool.query(
    'UPDATE books SET title = $1, author_name = $2, description = $3, "group" = $4 WHERE id = $5 RETURNING *',
    [title, author_name, description, group, id]
  );
  const books = result.rows as Book[];
  return books.length > 0 ? books[0] : null;
};

export const getAllBooks = async (): Promise<Book[]> => {
  const result = await pool.query("SELECT * FROM books");
  return result.rows as Book[];
};
