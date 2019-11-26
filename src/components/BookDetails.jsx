import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import firebase from "../firebase/Firebase";

const BookDetails = ({ book }) => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  const deleteBook = () => {
    const db = firebase.firestore();
    db.collection("books")
      .doc(book.id)
      .delete();
  };

  return (
    <li
      style={{
        background: theme.appBackground,
        borderRadius: "10px",
        padding: "10px",
        cursor: "pointer",
        margin: "10px 0",
        textAlign: "left"
      }}
      onClick={deleteBook}
    >
      <div
        style={{ fontWeight: "bold", color: theme.font, fontSize: "1.4em" }}
        className="title"
      >
        {book.title}
      </div>
      <div
        style={{ fontSize: "1em", color: theme.authorColor }}
        className="author"
      >
        {book.authors}
      </div>
    </li>
  );
};

export default BookDetails;
