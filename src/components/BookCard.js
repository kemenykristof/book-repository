import React from "react";

const BookCard = props => {
  return (
    <div className="card-container">
      <img src={props.image} alt="book thumbnail" />
      <div className="desc">
      
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.publishDate}</p>
      </div>
    </div>
  );
};

export default BookCard;
