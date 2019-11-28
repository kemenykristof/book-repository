import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  /*   const getBooksCount = () => {
    const db = firebase.firestore();
    db.collection("books")
      .get()
      .then(snap => {
        return snap.size;
      });
  };
 */
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
      <h2 style={{ margin: "10px 0" }}> LET'S DO IT BY THE BOOKS!</h2>
      <p style={{fontSize:'1.5em'}}>You can add books manually or add them with the search function</p>
      <h3>Your reading list:</h3>
      {/* <p>Currently you have books to read.</p> */}
    </div>
  );
};

export default Navbar;
