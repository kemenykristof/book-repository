import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import LightSwitch from "@material-ui/icons/WbIncandescentOutlined";

const ThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <LightSwitch style={{ cursor: "pointer" }} onClick={toggleTheme}>
      Toggle Theme
    </LightSwitch>
  );
};

export default ThemeButton;
