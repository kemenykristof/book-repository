import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";
import ThemeContextProvider from "./contexts/ThemeContext";
import GoogleAPI from "./components/GoogleAPI";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <ThemeContextProvider>
          <Navbar></Navbar>
          <BookList></BookList>
          <NewBookForm></NewBookForm>
          <GoogleAPI></GoogleAPI>
        </ThemeContextProvider>
      </BookContextProvider>
    </div>
  );
}

export default App;
