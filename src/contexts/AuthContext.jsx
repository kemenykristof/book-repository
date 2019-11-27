import React, { useEffect, useState } from "react";
import app from "../firebase/Firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const localData = localStorage.getItem("currentUser");
    return localData ? JSON.parse(localData) : null;
  });

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
