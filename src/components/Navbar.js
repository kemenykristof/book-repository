import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Book repository</h1>
      <p>Currently you have read {books.length} </p>
    </div>
  );
};

export default Navbar;
