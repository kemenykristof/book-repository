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
