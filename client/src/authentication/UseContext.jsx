import React, { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
 
const auth=getAuth(app)

const provider=new GoogleAuthProvider()
const createUser=(email,password)=>{

return createUserWithEmailAndPassword(auth,email,password)

}


const googleLogin=()=>{
  return signInWithPopup(auth,provider)
}

const authInfo={

  createUser,
  googleLogin
}

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
