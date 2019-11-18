import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [lightTheme, setlightTheme] = useState({
    font: "#555",
    ui: "#ddd",
    bg: "#eee"
  });
  const [darkTheme, setdarkTheme] = useState({
    font: "#ddd",
    ui: "#333",
    bg: "#555"
  });
  const [isLightTheme, setisLightTheme] = useState(true);

  const toggleTheme = () => {
    setisLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ lightTheme, darkTheme, isLightTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
