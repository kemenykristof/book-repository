import React from "react";
import Navbar from "./Navbar";
import BookList from "./BookList";
import BooksAPI from "./BooksAPI";
import BookForm from "./BookForm";
import Home from "../registration/Home";

const BookContainer = () => {
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
      <BooksAPI></BooksAPI>
    </div>
  );
};

export default BookContainer;
