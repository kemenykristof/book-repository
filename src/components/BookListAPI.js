import React from "react";
import BookCard from "./BookCard";

const BookListAPI = props => {
  return (
    <div className="list">
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            publishDate={book.volumeInfo.publishedDate}
          />
        );
      })}
    </div>
  );
};

export default BookListAPI;
