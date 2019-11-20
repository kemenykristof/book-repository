import React, { useState } from "react";
import SearchBox from "./SearchBox";

const BooksAPI = () => {
  const [books, setbooks] = useState([]);
  const [searchField, setSearchField] = useState("");

  const handleSearch = event => {
    console.log(event.target.value);
    setSearchField(event.target.value);
  };
  return (
    <div>
      <SearchBox handleSearch={handleSearch}></SearchBox>
    </div>
  );
};

export default BooksAPI;
