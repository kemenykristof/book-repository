import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [lightTheme] = useState({
    bodyBackground: "#FFFFFF",
    appBackground: "rgba(200, 193, 171, 0.34) none repeat scroll 0% 0%",
    navbarColor: "#C0C0C0",
    bookBackground: "rgb(13, 148, 171)",
    opacity: "0.5",
    font: "#424242",
    inputColor: "#C0C0C0",
    submitButton: "rgb(13, 148, 171)",
    authorColor: "rgba(232, 197, 92, 0.34) none repeat scroll 0% 0%",
    headerColor: "rgb(13, 148, 171)"
  });

  const [darkTheme] = useState({
    bodyBackground: "#171f24",
    appBackground: "#38526313",
    bookBackground:"#38526313",
    navbarColor: "#4bb3f917",
    font: "#fff",
    inputColor: "#4bb3f917",
    submitButton: "#399cdf",
    authorColor: "rgb(13, 148, 171)",
    headerColor: "rgba(18, 55, 62, 0.5)"
  });
  const [isLightTheme, setisLightTheme] = useState(() => {
    const localData = localStorage.getItem("isLightTheme");
    return localData ? JSON.parse(localData) : false;
  });

  useEffect(() => {
    window.localStorage.setItem("isLighTheme", JSON.stringify(isLightTheme));
  }, [isLightTheme]);

  const toggleTheme = () => {
    setisLightTheme(!isLightTheme);
    window.localStorage.setItem("isLightTheme", !isLightTheme);
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
