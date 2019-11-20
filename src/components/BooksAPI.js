import React, { useState } from "react";
import SearchBox from "./SearchBox";
import request from "superagent";

const BooksAPI = () => {
  const [books, setbooks] = useState([]);
  const [searchField, setSearchField] = useState("");

  const searchBook = e => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: searchField })
      .then(data => {
        console.log(data);
      });
  };

  const handleSearch = event => {
    console.log(event.target.value);
    setSearchField(event.target.value);
  };
  return (
    <div>
      <SearchBox
        searchBook={searchBook}
        handleSearch={handleSearch}
      ></SearchBox>
    </div>
  );
};

export default BooksAPI;
