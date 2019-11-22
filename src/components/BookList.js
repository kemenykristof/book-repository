import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { books } = useContext(BookContext);
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return books.length ? (
    <div className="book-list" style={{ margin: "20px" }}>
      <ul style={{ padding: "0", listStyleType: "none" }}>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div style={{ margin: "20px", textAlign: "center" }} className="empty">
      No books to read
    </div>
  );
};

export default BookList;
