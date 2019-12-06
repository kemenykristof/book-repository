import React, { useContext } from "react";
import BookContainer from "./BookContainer";
import { ThemeContext } from "../contexts/ThemeContext";
import Header from "../registration/Header";
import firebase from "../firebase/Firebase";
import BooksAPI from "./BooksAPI";
import { bookAuthors } from "../util/BookAuthorHandler";

const AppContainer = () => {
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  const addBook = (title, authors) => {
    const db = firebase.firestore();
    let formattedAuthors = bookAuthors(authors);
    db.collection("books").add({
      title: title,
      authors: formattedAuthors
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        textAlign: "center",
        background: theme.bodyBackground,
        overflow: "auto"
      }}
    >
      <Header></Header>
      <BookContainer />
      <BooksAPI addBook={addBook}></BooksAPI>
    </div>
  );
};

export default AppContainer;
