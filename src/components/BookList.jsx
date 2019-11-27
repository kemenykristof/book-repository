import React, { useContext} from "react";
import BookDetails from "./BookDetails";
import { ThemeContext } from "../contexts/ThemeContext";

import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  const {databaseBooks} = useContext(BookContext)


  return databaseBooks.length ? (
    <div className="book-list" style={{ margin: "20px" }}>
      <ul style={{ padding: "0", listStyleType: "none" }}>
        {databaseBooks.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div
      style={{ margin: "20px", textAlign: "center", color: theme.font }}
      className="empty"
    >
      <h2>No books to read</h2>
    </div>
  );
};

export default BookList;
