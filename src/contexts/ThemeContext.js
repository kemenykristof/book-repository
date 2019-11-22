import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [lightTheme] = useState({
    bodyBackground: "linear-gradient(to right, #ffefba, #ffffff)",
    appBackground: "rgba(232, 197, 92, 0.34) none repeat scroll 0% 0%",
    navbarColor: "rgba(242, 107, 8, 0.56) none repeat scroll 0% 0%",
    opacity: "0.5",
    font: "black",
    inputColor: "rgba(242, 107, 8, 0.56) none repeat scroll 0% 0%",
    submitButton: "rgb(238, 235, 66) none repeat scroll 0% 0%",
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
