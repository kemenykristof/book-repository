import React from "react";
import BookContainer from "./BookContainer";

const AppContainer = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        textAlign: "center",
        background: "#171f24",
        overflow: "auto"
      }}
    >
      <BookContainer />
    </div>
  );
};

export default AppContainer;
