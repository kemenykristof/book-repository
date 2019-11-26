import React, { useContext } from "react";
import app from "../firebase/Firebase";
import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <div style={{ color: theme.font }}>
      <h1>Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Home;
