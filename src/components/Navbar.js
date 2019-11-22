import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeButton";

const Navbar = () => {
  const { books } = useContext(BookContext);
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  const style = {
    padding: "10px 20px",
    textAlign: "center",
    background: "#4bb3f917",
    borderRadius: "4px",
    color: "black"
  };

  return (
    <div className="navbar" style={style}>
      <h1 style={{ margin: "10px 0" }}>DO IT BY THE BOOKS</h1>
      <h2>Your reading list</h2>
      <p>Currently you have {books.length} books to read.</p>
      <ThemeToggle/>
    </div>
  );
};

export default Navbar;
