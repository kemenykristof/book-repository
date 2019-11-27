import React, { useContext } from "react";
import app from "../firebase/Firebase";
import { ThemeContext } from "../contexts/ThemeContext";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ThemeToggle from "../components/ThemeButton";

const Home = () => {
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <div style={{ color: theme.font }}>
      <h1>Home</h1>
      <PowerSettingsNewIcon
        onClick={() => app.auth().signOut()}
      ></PowerSettingsNewIcon>
      <ThemeToggle />
    </div>
  );
};

export default Home;
