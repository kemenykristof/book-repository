import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  const handleSubmit = e => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <form style={{ padding: "20px" }} onSubmit={handleSubmit}>
      <input
        style={{
          width: "100%",
          padding: "10px",
          boxSizing: "border-box",
          margin: "5px 0",
          borderRadius: "10px",
          background: theme.inputColor,
          color: theme.font,
          border: "0"
        }}
        type="text"
        placeholder="book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        style={{
          width: "100%",
          padding: "10px",
          boxSizing: "border-box",
          margin: "5px 0",
          borderRadius: "10px",
          background: theme.inputColor,
          color: theme.font,
          border: "0"
        }}
        type="text"
        placeholder="book author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input
        style={{
          margin: "10px auto",
          background: theme.submitButton,
          border: "0",
          borderRadius: "10px",
          padding: "6px 20px",
          display: "block"
        }}
        type="submit"
        value="ADD BOOK"
      />
    </form>
  );
};

export default BookForm;
