import React, { useContext } from "react";
import app from "../firebase/Firebase";
import { ThemeContext } from "../contexts/ThemeContext";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ThemeToggle from "../components/ThemeButton";

const Header = () => {
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <nav>
      <div
        style={{
          display: "flex",
          color: "white",
          backgroundColor: theme.headerColor,
          justifyContent: "space-around",
          alignContent: "center",
          textAlign: "center",
          padding: "15px"
        }}
      >
        <div>
          <span style={{ fontSize: "1.5em" }}>BOOK REPOSITORY</span>
        </div>
        <div>
          <PowerSettingsNewIcon
            style={{ cursor: "pointer", marginRight: "20px" }}
            onClick={() => app.auth().signOut()}
          ></PowerSettingsNewIcon>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
