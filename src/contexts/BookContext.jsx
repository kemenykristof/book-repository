import React, { createContext, useState, useEffect } from "react";
import uuid from "uuid/v1";
import firebase from "../firebase/Firebase";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [databaseBooks, setBooks] = useState(() => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  const addBook = (title, author) => {
    setBooks([...databaseBooks, { title, author, id: uuid() }]);
  };
  const removeBook = id => {
    setBooks(databaseBooks.filter(book => book.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("books").get();
      setBooks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.localStorage.setItem("books", JSON.stringify(databaseBooks));
  }, [databaseBooks]);

  return (
    <BookContext.Provider value={{ databaseBooks, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
