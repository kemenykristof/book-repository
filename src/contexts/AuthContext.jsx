import React, { useEffect, useState } from "react";
import app from "../firebase/Firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const dbRef = app.firestore();
  const [currentUser, setCurrentUser] = useState(() => {
    const localData = localStorage.getItem("currentUser");
    return localData ? JSON.parse(localData) : null;
  });

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("currentUser", JSON.stringify(currentUser));
    console.log(currentUser, "currentUser");
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        currentUser, dbRef
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
