import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app)

const AuthContext=createContext(null)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <div>
    {children}
  </div>;
};

export default AuthProvider;
