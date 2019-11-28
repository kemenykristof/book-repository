import React, { useContext } from "react";
import app from "../firebase/Firebase";
import { ThemeContext } from "../contexts/ThemeContext";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import ThemeToggle from "../components/ThemeButton";
import MenuBookOutlined from "@material-ui/icons/MenuBookOutlined";

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
          justifyContent: "space-between",
          alignContent: "center",
          textAlign: "center",
          padding: "15px"
        }}
      >
        <div>
          <span style={{ fontSize: "1.5em" }}>BOOK REPOSITORY</span>
          <MenuBookOutlined style={{ marginLeft: "20px" }}></MenuBookOutlined>
        </div>
        <div>
          <ThemeToggle />
          <PowerSettingsNewIcon
            style={{ cursor: "pointer", marginLeft: "20px" }}
            onClick={() => app.auth().signOut()}
          ></PowerSettingsNewIcon>
        </div>
      </div>
    </nav>
  );
};

export default Header;
