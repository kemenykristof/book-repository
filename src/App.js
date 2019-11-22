import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";
import ThemeContextProvider from "./contexts/ThemeContext";
import BooksAPI from "./components/BooksAPI";
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
