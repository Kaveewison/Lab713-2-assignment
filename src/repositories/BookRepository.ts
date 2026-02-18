import Book from "../models/book";

const books: Book[] = [
  {
    id: 1,
    title: "The Silent Spring",
    Author_name: "Rachel Carson",
    description: "A groundbreaking study on environmentalism.",
    groups: "Science",
  },
  {
    id: 2,
    title: "1984",
    Author_name: "George Orwell",
    description: "Dystopian novel about surveillance and totalitarianism.",
    groups: "Fiction",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    Author_name: "Harper Lee",
    description: "A novel on racial injustice in the Deep South.",
    groups: "Fiction",
  },
  {
    id: 4,
    title: "A Brief History of Time",
    Author_name: "Stephen Hawking",
    description: "An overview of cosmology for general readers.",
    groups: "Science",
  },
  {
    id: 5,
    title: "The Great Gatsby",
    Author_name: "F. Scott Fitzgerald",
    description: "A critique of the American Dream in the 1920s.",
    groups: "Fiction",
  },
  {
    id: 6,
    title: "The Hobbit",
    Author_name: "J.R.R. Tolkien",
    description: "A prelude to the Lord of the Rings, an adventure tale.",
    groups: "Fantasy",
  },
  {
    id: 7,
    title: "Sapiens: A Brief History of Humankind",
    Author_name: "Yuval Noah Harari",
    description: "A narrative of human history and cultural evolution.",
    groups: "History",
  },
  {
    id: 8,
    title: "Clean Code",
    Author_name: "Robert C. Martin",
    description: "Practical advice on writing maintainable software.",
    groups: "Programming",
  },
  {
    id: 9,
    title: "The Pragmatic Programmer",
    Author_name: "Andrew Hunt & David Thomas",
    description: "Tips and philosophies for software development.",
    groups: "Programming",
  },
  {
    id: 10,
    title: "Thinking, Fast and Slow",
    Author_name: "Daniel Kahneman",
    description: "Insights into human decision-making and biases.",
    groups: "Psychology",
  },
  {
    id: 11,
    title: "The Catcher in the Rye",
    Author_name: "J.D. Salinger",
    description: "A story about teenage alienation and identity.",
    groups: "Fiction",
  },
  {
    id: 12,
    title: "The Alchemist",
    Author_name: "Paulo Coelho",
    description: "A philosophical tale about following one's dreams.",
    groups: "Fiction",
  },
  {
    id: 13,
    title: "The Design of Everyday Things",
    Author_name: "Don Norman",
    description: "Foundational ideas on user-centered design.",
    groups: "Design",
  },
  {
    id: 14,
    title: "The Lean Startup",
    Author_name: "Eric Ries",
    description: "Startup methodologies for building validated products.",
    groups: "Business",
  },
  {
    id: 15,
    title: "Guns, Germs, and Steel",
    Author_name: "Jared Diamond",
    description: "An exploration of factors shaping world history.",
    groups: "History",
  },
  {
    id: 16,
    title: "The Road",
    Author_name: "Cormac McCarthy",
    description: "A post-apocalyptic journey of a father and son.",
    groups: "Fiction",
  },
  {
    id: 17,
    title: "The Art of War",
    Author_name: "Sun Tzu",
    description: "Ancient strategies on leadership and conflict.",
    groups: "Philosophy",
  },
  {
    id: 18,
    title: "Meditations",
    Author_name: "Marcus Aurelius",
    description:
      "Stoic reflections and personal guidance from a Roman emperor.",
    groups: "Philosophy",
  },
  {
    id: 19,
    title: "Introduction to Algorithms",
    Author_name: "Cormen, Leiserson, Rivest & Stein",
    description: "Comprehensive algorithms textbook for CS students.",
    groups: "Programming",
  },
  {
    id: 20,
    title: "The Catch-22",
    Author_name: "Joseph Heller",
    description: "A satirical novel set during World War II.",
    groups: "Fiction",
  },
  {
    id: 21,
    title: "Pride and Prejudice",
    Author_name: "Jane Austen",
    description: "A classic novel about manners and marriage.",
    groups: "Fiction",
  },
  {
    id: 22,
    title: "The Power of Habit",
    Author_name: "Charles Duhigg",
    description: "Examines how habits form and how to change them.",
    groups: "Self-Help",
  },
  {
    id: 23,
    title: "Deep Work",
    Author_name: "Cal Newport",
    description: "Strategies for focused, high-quality work.",
    groups: "Productivity",
  },
  {
    id: 24,
    title: "Norwegian Wood",
    Author_name: "Haruki Murakami",
    description: "A poignant coming-of-age novel set in Tokyo.",
    groups: "Fiction",
  },
];

export const filterBooksByTitle = async (title: string): Promise<Book[]> => {
  const regex = new RegExp(`^${title}`, "i");
  const filteredBooks = books.filter((book) => regex.test(book.title));
  return filteredBooks;
};

export const findBookById = async (id: number): Promise<Book | undefined> => {
  return books.find((book) => book.id === id);
};

export const addBook = async (newBook: any): Promise<Book> => {
  newBook.id = books.length + 1;
  books.push(newBook);
  return newBook;
};

export const updateBook = async (
  id: number,
  updatedBook: any
): Promise<Book | null> => {
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    books[bookIndex] = { id, ...updatedBook };
    return books[bookIndex];
  }
  return null;
};

export const getAllBooks = async (): Promise<Book[]> => {
  return books;
};