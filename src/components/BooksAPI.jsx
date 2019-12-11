import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import axios from "axios";
import { bookAuthors } from "../util/BookAuthorHandler";
import SearchBar from "../components/SearchBar";
import Loader from "./Loader";

const BooksAPI = props => {
  const [searchedBooks, setBooks] = useState({ items: [] });
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      setBooks(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error, "Error fetching books");
      setError(true);
    }
    setLoading(false);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

  const bookCardStyle = {
    width: "350px",
    minHeight: "450px",
    border: "1px solid steelblue",
    borderRadius: "5px",
    overflow: "hidden",
    padding: "5px",
    color: theme.font
  };

  const renderBookCards = (book, index) => {
    return (
      <div>
        <div style={bookCardStyle}>
          <img
            style={{ width: "100%", minHeight: "300px", maxHeight: "300px" }}
            alt={`${book.volumeInfo.title} book`}
            src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=0&source=gbs_api`}
          />
          <div>
            <span style={{ fontWeight: "bold" }}>{book.volumeInfo.title}</span>
            <p>{bookAuthors(book.volumeInfo.authors)}</p>
            <p>{book.volumeInfo.publishedDate}</p>
          </div>
        </div>
        <div
          onClick={() =>
            props.addBook(book.volumeInfo.title, book.volumeInfo.authors)
          }
          style={{
            background: theme.submitButton,
            border: "0",
            borderRadius: "10px",
            padding: "6px 20px",
            cursor: "pointer",
            minWidth: 250,
            maxWidth: 250,
            margin: "auto",
            marginTop: "10px",
            marginBottom: "10px"
          }}
        >
          ADD BOOK
        </div>
      </div>
    );
  };

  return (
    <section>
      <SearchBar
        searchTerm={searchTerm}
        onInputChange={onInputChange}
        onSubmitHandler={onSubmitHandler}
      ></SearchBar>
      {loading && <Loader></Loader>}
      <div
        style={{
          justifyItems: "center",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "1fr",
          marginTop: "25px"
        }}
      >
        {searchedBooks.items.map(renderBookCards)}
      </div>
    </section>
  );
};

export default BooksAPI;
