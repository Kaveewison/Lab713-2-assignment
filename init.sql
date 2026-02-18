-- Drop table if exists
DROP TABLE IF EXISTS books;

-- Create books table
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author_name VARCHAR(255) NOT NULL,
  description TEXT,
  "group" VARCHAR(100)
);

-- Insert sample data
INSERT INTO books (title, author_name, description, "group") VALUES
('The Silent Spring', 'Rachel Carson', 'A groundbreaking study on environmentalism.', 'Science'),
('1984', 'George Orwell', 'Dystopian novel about surveillance and totalitarianism.', 'Fiction'),
('To Kill a Mockingbird', 'Harper Lee', 'A novel on racial injustice in the Deep South.', 'Fiction'),
('A Brief History of Time', 'Stephen Hawking', 'An overview of cosmology for general readers.', 'Science'),
('The Great Gatsby', 'F. Scott Fitzgerald', 'A critique of the American Dream in the 1920s.', 'Fiction'),
('The Hobbit', 'J.R.R. Tolkien', 'A prelude to the Lord of the Rings, an adventure tale.', 'Fantasy');
