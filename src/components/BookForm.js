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
          borderRadius: "4px",
          background: "#4bb3f917",
          color: "#fff",
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
          borderRadius: "4px",
          background: "#4bb3f917",
          color: "#fff",
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
          background: "#399cdf",
          border: "0",
          borderRadius: "4px",
          padding: "6px 20px",
          display: "block"
        }}
        type="submit"
        value="add book"
      />
    </form>
  );
};

export default BookForm;
