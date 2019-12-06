import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const SearchBar = props => {
  const { isLightTheme, lightTheme, darkTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? lightTheme : darkTheme;

  return (
    <section>
      <span style={{ color: theme.font }}>Search for books</span>
      <form onSubmit={props.onSubmitHandler}>
        <input
          style={{
            padding: "8px",
            width: "47%",
            marginRight: "10px",
            marginBottom: "10px",
            marginTop: "10px",
            borderRadius: "10px",
            outline: "none"
          }}
          type="search"
          placeholder=""
          value={props.searchTerm}
          onChange={props.onInputChange}
        />

        <button
          style={{
            display: "inline",
            background: theme.navbarColor,
            color: theme.font,
            border: "none",
            padding: "10px 15px 10px 15px",
            position: "relative",
            cursor: "pointer",
            borderRadius: "5px"
          }}
          type="submit"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
