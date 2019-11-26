import React, { useContext, useState, useEffect } from "react";
import BookDetails from "./BookDetails";
import { ThemeContext } from "../contexts/ThemeContext";
import firebase from "../firebase/Firebase";

const BookList = () => {
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;
  const [books, setbooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("books").get();
      setbooks(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return books.length ? (
    <div className="book-list" style={{ margin: "20px" }}>
      <ul style={{ padding: "0", listStyleType: "none" }}>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div
      style={{ margin: "20px", textAlign: "center", color: theme.font }}
      className="empty"
    >
      <h2>No books to read</h2>
    </div>
  );
};

export default BookList;
