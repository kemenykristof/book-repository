import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase/Firebase";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [databaseBooks, setDatabaseBooks] = useState([]);

  useEffect(() => {
    listenForUpdates();
  }, []);

  const listenForUpdates = () => {
    const db = firebase.firestore();
    db.collection("books").onSnapshot(
      snapshot => {
        const allBooks = [];
        snapshot.forEach(doc => allBooks.push({ ...doc.data(), id: doc.id }));
        console.log(allBooks, "allbooks");
        setDatabaseBooks(allBooks);
      },
      error => console.error(error)
    );
  };
  

  return (
    <BookContext.Provider value={{ databaseBooks }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
