import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [lightTheme] = useState({
    bodyBackground: "linear-gradient(to right, #ffefba, #ffffff)",
    appBackground: "rgba(232, 197, 92, 0.34) none repeat scroll 0% 0%",
    navbarColor: "#C0C0C0",
    opacity: "0.5",
    font: "black",
    inputColor: "#C0C0C0",
    submitButton: "#4CAF50",
    authorColor: "rgba(232, 197, 92, 0.34) none repeat scroll 0% 0%"
  });

  const [darkTheme] = useState({
    bodyBackground: "#171f24",
    appBackground: "#38526313",
    navbarColor: "#4bb3f917",
    font: "#fff",
    inputColor: "#4bb3f917",
    submitButton: "#399cdf",
    authorColor: "#484c7f"
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