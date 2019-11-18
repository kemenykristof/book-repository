import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Clean Code", author: "Robert C. Martin", id: uuid() },
    {
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      id: uuid()
    },
    { title: "Mastery", author: "Robert Greene", id: uuid() }
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
