import React from "react";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import AppContainer from "./components/AppContainer";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./registration/Home";
import Login from "./registration/Login";
import SignUp from "./registration/SignUp";

function App() {
  return (
    <div className="root" style={{ background: "blue" }}>
      <BookContextProvider>
        <ThemeContextProvider>
          <AppContainer></AppContainer>
        </ThemeContextProvider>
      </BookContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <div>
            <Route exact path="/home" component={Home} />
            <Route exact path="login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
