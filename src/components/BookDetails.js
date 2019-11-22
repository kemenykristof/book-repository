import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return (
    <li
      style={{
        background: theme.appBackground,
        borderRadius: "4px",
        padding: "10px",
        cursor: "pointer",
        margin: "10px 0"
      }}
      onClick={() => removeBook(book.id)}
    >
      <div
        stlye={{ fontWeight: "bold", color: theme.font, fontSize: "1.6em" }}
        className="title"
      >
        {book.title}
      </div>
      <div
        style={{ fontSize: "1em", color: theme.inputColor }}
        className="author"
      >
        {book.author}
      </div>
    </li>
  );
};

export default BookDetails;
