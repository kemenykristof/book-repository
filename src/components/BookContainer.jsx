import React from "react";
import Navbar from "./Navbar";
import BookList from "./BookList";

import BookForm from "./BookForm";


const BookContainer = () => {
 
  return (
    <div
      style={{
        maxWidth: "1050px",
        margin: "auto",
        marginTop: "10px",
        height: "auto",
        textAlign: "center",
        overflow: "auto"
      }}
    >
      <Navbar></Navbar>
      <BookList></BookList>
      <BookForm></BookForm>
      
    </div>
  );
};

export default BookContainer;
