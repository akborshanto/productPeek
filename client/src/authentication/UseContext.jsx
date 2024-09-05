import React, { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
 console.log(user)
const auth=getAuth(app)

const provider=new GoogleAuthProvider()
const createUser=(email,password)=>{

return createUserWithEmailAndPassword(auth,email,password)

}


const googleLogin=()=>{
  return signInWithPopup(auth,provider)
}
const login=(email,password)=>{
setLoading(true)
  return signInWithEmailAndPassword(auth,email,password)
}

{/* auth */}

useEffect(()=>{

const unScrribe=onAuthStateChanged(auth,(currentUser)=>{

  if(currentUser){
    setUser(currentUser)
    return ()=>{
      unScrribe()
    }
  }else{
    setUser(null)
  }

})


},[])

const logOut=()=>{
  return signOut(auth)
}
const authInfo={

  createUser,
  googleLogin,
  login,
  user,
  logOut
}

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
