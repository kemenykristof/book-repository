import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LightSwitch } from "@material-ui/icons/WbIncandescentOutlined";

const ThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <LightSwitch onClick={toggleTheme}>Toggle Theme</LightSwitch>;
};

export default ThemeToggle;
