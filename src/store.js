import { useState, useEffect } from "react";
import React from 'react'

import firebase from "firebase";


export const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        setCurrentUser(user);
      });
    }, []);
    return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
}

