import React, { useState, Component } from "react";
import SearchBox from "./SearchBox";
import request from "superagent";
import BookListAPI from "./BookListAPI";
import axios from "axios";

const BooksAPI = () => {
  const [books, setBooks] = useState({ items: [] });
  const [searchTerm, setSearchTerm] = useState("");
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

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <label>
          <span>Search for books</span>
          <input
            type="search"
            placeholder="microservice, restful design, etc.,"
            value={searchTerm}
            onChange={onInputChange}
          />

          <button type="submit">Search</button>
        </label>
      </form>
      <ul>
        {books.items.map((book, index) => {
          return (
            <li key={index}>
              <div>
                <img
                  alt={`${book.volumeInfo.title} book`}
                  src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                />
                <div>
                  <h3>{book.volumeInfo.title}</h3>
                  <p>{book.volumeInfo.publishedDate}</p>
                </div>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BooksAPI;
