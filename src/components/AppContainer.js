import React, { useContext } from "react";
import BookContainer from "./BookContainer";
import { ThemeContext } from "../contexts/ThemeContext";

const AppContainer = () => {
  const { isLightTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        textAlign: "center",
        background: theme.bodyBackground,
        overflow: "auto"
      }}
    >
      <BookContainer />
    </div>
  );
};

export default AppContainer;
