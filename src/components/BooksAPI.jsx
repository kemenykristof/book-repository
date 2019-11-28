import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import axios from "axios";
import { bookAuthors } from "../util/BookAuthorHandler";

const BooksAPI = props => {
  const [searchedBooks, setBooks] = useState({ items: [] });
  const [searchTerm, setSearchTerm] = useState("");
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
    console.log(result.data);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

  const bookCardStyle = {
    width: "200px",
    border: "1px solid steelblue",
    margin: "0 auto",
    borderRadius: "5px",
    overflow: "hidden"
  };

  const renderBook = (book, index) => {
    return (
      <li key={index}>
        <div style={bookCardStyle}>
          <img
            style={{ width: "100%", height: "200px" }}
            alt={`${book.volumeInfo.title} book`}
            src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          />
          <div>
            <h3>{book.volumeInfo.title}</h3>
            <h4>{bookAuthors(book.volumeInfo.authors)}</h4>
            <p>{book.volumeInfo.publishedDate}</p>
          </div>
        </div>
        <div
          onClick={() =>
            props.addBook(book.volumeInfo.title, book.volumeInfo.authors)
          }
          style={{
            margin: "10px auto",
            background: theme.submitButton,
            border: "0",
            borderRadius: "10px",
            padding: "6px 20px",
            cursor: "pointer",
            maxWidth: 180
          }}
        >
          ADD BOOK
        </div>
        <hr />
      </li>
    );
  };

  return (
    <section>
      <span style={{ color: theme.font }}>Search for books</span>
      <form onSubmit={onSubmitHandler}>
        <input
          style={{
            padding: "8px",
            width: "90%",
            marginRight: "10px",
            marginBottom: "10px",
            marginTop: "10px"
          }}
          type="search"
          placeholder=""
          value={searchTerm}
          onChange={onInputChange}
        />

        <button
          style={{
            display: "inline",
            background: theme.navbarColor,
            color: theme.font,
            border: "none",
            padding: "10px 15px 10px 15px",
            position: "relative",
            cursor: "pointer"
          }}
          type="submit"
        >
          Search
        </button>
      </form>
      <ul style={{ listStyleType: "none", color: theme.font }}>
        {searchedBooks.items.map(renderBook)}
      </ul>
    </section>
  );
};

export default BooksAPI;
