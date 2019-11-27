import React from "react";
import Navbar from "./Navbar";
import BookList from "./BookList";
import BooksAPI from "./BooksAPI";
import BookForm from "./BookForm";
import Home from "../registration/Home";
import firebase from "../firebase/Firebase";
import { bookAuthors } from "../util/BookAuthorHandler";

const BookContainer = () => {
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
        maxWidth: "700px",
        margin: "30px auto",
        height: "auto",
        textAlign: "center",
        overflow: "auto"
      }}
    >
      <Home></Home>
      <Navbar></Navbar>
      <BookList></BookList>
      <BookForm></BookForm>
      <BooksAPI addBook={addBook}></BooksAPI>
    </div>
  );
};

export default BookContainer;
