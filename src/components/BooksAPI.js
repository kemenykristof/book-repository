import React, { useState, Component } from "react";
import SearchBox from "./SearchBox";
import request from "superagent";
import BookListAPI from "./BookListAPI";

class BooksAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ""
    };
  }

  searchBook = e => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then(data => {
        this.setState({ books: [...data.body.items] });
      });
  };

  handleSearch = event => {
    console.log(event.target.value);
    this.setState({ searchField: event.target.value });
  };
  render() {
    return (
      <div>
        <SearchBox
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        ></SearchBox>
        <BookListAPI books={this.state.books}></BookListAPI>
      </div>
    );
  }
}

export default BooksAPI;
