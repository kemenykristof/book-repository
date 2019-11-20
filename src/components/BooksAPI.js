import React from "react";
import SearchBox from "./SearchBox";

const BooksAPI = () => {
  const [books, setbooks] = useState([]);
  const [searchField, setSearchField] = useState("");

  handleSearch = event => {
    setSearchField(event.target.value);
  };
  return (
    <div>
      <SearchBox></SearchBox>
    </div>
  );
};

export default BooksAPI;
