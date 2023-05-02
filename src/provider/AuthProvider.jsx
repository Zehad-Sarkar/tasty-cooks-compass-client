import React, { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create user handler
  const createUser = ( email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login handler
  const userSignIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

// google sign in provider
  const googleProvider = new GoogleAuthProvider()
  const googleSignIn = () => {
    return signInWithPopup(auth,googleProvider)
  }

  // github sign in provider
  const githubProvider= new GithubAuthProvider()

  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider)
  }

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
    return ()=> {
      return unsubscribe()
    }
  },[])

  // logout event handler
  const userLogout = () => {
    return signOut(auth)
  }

  const authInfo = {
    user,
    createUser,
    userSignIn,
    googleSignIn,
    githubSignIn,
    userLogout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
