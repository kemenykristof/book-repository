import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


const HeaderAuth = () => {
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
          <span style={{ fontSize: "1.5em" }}>WELCOME TO BOOK REPOSITORY</span>
        </div>
      </div>
    </nav>
  );
};

export default HeaderAuth;
