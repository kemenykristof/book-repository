import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [lightTheme] = useState({
    bodyBackground: "#f5cd6d",
    appBackground: "#f7e590",
    navbarColor: "#4bb3f917",
    font: "black",
    inputColor: "#4bb3f917",
    submitButton: "#399cdf"
  });

  const [darkTheme] = useState({
    font: "white",
    bodyBackground: "#171f24",
    appBackground: "#38526313",
    navbarColor: "#4bb3f917",
    font: "#fff",
    inputColor: "#4bb3f917",
    submitButton: "#399cdf"
  });
  const [isLightTheme, setisLightTheme] = useState(false);

  const toggleTheme = () => {
    setisLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ lightTheme, darkTheme, isLightTheme, toggleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
