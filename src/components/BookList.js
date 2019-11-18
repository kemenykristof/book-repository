import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { books } = useContext(BookContext);
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  return books.length ? (
    <div
      className="book-list"
      style={{ color: theme.font, background: theme.bg }}
    >
      <ul style={{ background: theme.ui }}>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read</div>
  );
};

export default BookList;
