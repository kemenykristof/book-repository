import React from "react";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import AppContainer from "./components/AppContainer";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./registration/Login";
import SignUp from "./registration/SignUp";
import PrivateRoute from "./registration/PrivateRoute";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <BookContextProvider>
          <ThemeContextProvider>
            <BrowserRouter>
              <PrivateRoute exact path="/" component={AppContainer} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </BrowserRouter>
          </ThemeContextProvider>
        </BookContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
