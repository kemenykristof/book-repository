import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeButton";

const Navbar = () => {
  const { books } = useContext(BookContext);
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <nav className="navbar" style={{ background: theme.ui, color: theme.font }}>
      <h1>Your reading list</h1>
      <p>Currently you have {books.length} books to read.</p>
      <ThemeToggle></ThemeToggle>
    </nav>
  );
};

export default Navbar;
