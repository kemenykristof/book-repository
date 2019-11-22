import React from "react";
import BookContextProvider from "./contexts/BookContext";

import ThemeContextProvider from "./contexts/ThemeContext";

import AppContainer from "./components/AppContainer";

function App() {
  return (
    <div className="root" style={{ background: "blue" }}>
      <BookContextProvider>
        <ThemeContextProvider>
          <AppContainer></AppContainer>
        </ThemeContextProvider>
      </BookContextProvider>
    </div>
  );
}

export default App;
