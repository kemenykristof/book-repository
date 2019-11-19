import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  /*  const starterData = [
    { title: "Clean Code", author: "Robert C. Martin", id: uuid() },
    {
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      id: uuid()
    },
    { title: "Mastery", author: "Robert Greene", id: uuid() }
  ]
  */

  const [books, setBooks] = useState(() => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
