import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import firebase from "../firebase/Firebase";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

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
      key={book.id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: theme.appBackground,
        borderRadius: "10px",
        padding: "10px",
        margin: "10px 0",
        textAlign: "left"
      }}
    >
      <div>
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
      </div>
      <div>
        <DeleteOutlineIcon
          onClick={() => deleteBook(book.id)}
          style={{ fontSize: "1.8rem", color: theme.font, cursor: "pointer" }}
        ></DeleteOutlineIcon>
      </div>
    </li>
  );
};

export default BookDetails;
