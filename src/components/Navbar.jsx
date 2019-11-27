import React, { useContext } from "react";
import firebase from "../firebase/Firebase";
import { ThemeContext } from "../contexts/ThemeContext";


const Navbar = () => {
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  const getBooksCount = () => {
    const db = firebase.firestore();
    db.collection("books")
      .get()
      .then(snap => {
        return snap.size;
      });
  };

  return (
    <div
      className="navbar"
      style={{
        padding: "10px 20px",
        textAlign: "center",
        background: theme.navbarColor,
        borderRadius: "10px",
        color: theme.font
      }}
    >
      <h1 style={{ margin: "10px 0" }}>DO IT BY THE BOOKS</h1>
      <h2>Your reading list</h2>
      <p>Currently you have {() => getBooksCount()} books to read.</p>
      
    </div>
  );
};

export default Navbar;
