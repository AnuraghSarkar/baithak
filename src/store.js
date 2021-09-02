import { useState, useEffect } from "react";
import React from 'react'
import create from "zustand";

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


export const roomStore = create((set) => ({
  
  roomName: "",
  displayName: "",
  password: "",
  subject: "",
  setroomName: (x) => set(() => ({ roomName: x })),
  setdisplayName: (x) => set(() => ({ displayName: x })),
  setPassword: (x) => set(() => ({ password: x })),
  setsubject: (x) => set(() => ({ subject: x })),
}));