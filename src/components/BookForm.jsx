import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import firebase from "../firebase/Firebase";
import { AuthContext } from "../contexts/AuthContext";

const BookForm = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  const { currentUser } = useContext(AuthContext);

  const handleNewBookSubmit = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .add({
        books: [newTitle, newAuthor, false]
      });
    setNewTitle("");
    setNewAuthor("");
  };

  return (
    <form style={{ padding: "20px" }} onSubmit={handleNewBookSubmit}>
      <input
        style={{
          width: "100%",
          padding: "10px",
          boxSizing: "border-box",
          margin: "5px 0",
          borderRadius: "10px",
          background: theme.inputColor,
          color: theme.font,
          border: "0",
          outline: "none"
        }}
        type="text"
        placeholder="book title"
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
        required
      />
      <input
        style={{
          width: "100%",
          padding: "10px",
          boxSizing: "border-box",
          margin: "5px 0",
          borderRadius: "10px",
          background: theme.inputColor,
          color: theme.font,
          border: "0",
          outline: "none"
        }}
        type="text"
        placeholder="book author"
        value={newAuthor}
        onChange={e => setNewAuthor(e.target.value)}
        required
      />
      <input
        style={{
          margin: "10px auto",
          background: theme.submitButton,
          border: "0",
          borderRadius: "10px",
          padding: "6px 20px",
          display: "block",
          cursor: "pointer",
          outline: "none"
        }}
        type="submit"
        value="ADD BOOK"
      />
    </form>
  );
};

export default BookForm;
