import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [lightTheme] = useState({
    font: "#555",
    ui: "#f7e590",
    bg: "#f5cd6d"
  });
  const [darkTheme] = useState({
    font: "white",
    ui: "#202040",
    bg: "#202060"
  });
  const [newDarkTheme] = useState({
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
  console.log(lightTheme, darkTheme, isLightTheme);

  return (
    <ThemeContext.Provider
      value={{ lightTheme, darkTheme, isLightTheme, toggleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
