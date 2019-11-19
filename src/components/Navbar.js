import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeButton";

const Navbar = () => {
  const { books } = useContext(BookContext);
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <div className="navbar">
      <h1>DO IT BY THE BOOKS</h1>
      <h2>Your reading list</h2>
      <p>Currently you have {books.length} books to read.</p>
      <ThemeToggle></ThemeToggle>
    </div>
  );
};

export default Navbar;
