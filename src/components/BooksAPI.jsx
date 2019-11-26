import React, { useState, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import axios from "axios";
import firebase from "../firebase/Firebase";

const BooksAPI = () => {
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

  const addBook = book => {
    const db = firebase.firestore();
    db.collection("books").add({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors
    });
  };

  const renderBook = (book, index) => {
    return (
      <li key={index}>
        <div>
          <img
            alt={`${book.volumeInfo.title} book`}
            src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
          />
          <div>
            <h3>{book.volumeInfo.title}</h3>
            <h4>{book.volumeInfo.authors}</h4>
            <p>{book.volumeInfo.publishedDate}</p>
          </div>
        </div>
        <div
          onClick={() => addBook(book)}
          style={{
            margin: "10px auto",
            background: theme.submitButton,
            border: "0",
            borderRadius: "10px",
            padding: "6px 20px",
            display: "block",
            cursor: "pointer"
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
      <form onSubmit={onSubmitHandler}>
        <label>
          <span style={{ color: theme.font }}>Search for books</span>
          <input
            type="search"
            placeholder=""
            value={searchTerm}
            onChange={onInputChange}
          />

          <button type="submit">Search</button>
        </label>
      </form>
      <ul style={{ listStyleType: "none", color: theme.font }}>
        {searchedBooks.items.map(renderBook)}
      </ul>
    </section>
  );
};

export default BooksAPI;
