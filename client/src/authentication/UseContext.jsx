import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { app } from "./../firebase/firebase.config";
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);
  const auth = getAuth(app);
  const createUser = (email, password) => {
    console.log(email,password)
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const dummy="lorem askfjaslkfjsalkfjasldk"

  const updateProfiles = (name, img) => {
    setLoading(true);
    return updateProfile(
      auth.currentUser,
      // displayName: name, photoURL:image
      setUser({ ...user, displayName: name, photoURL: img })
      // Profile updated!
      // ...
    ).catch((error) => {
      // An error occurred
      // ...
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      /* user */
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        //console.log(currentUser);
        return () => {
          unsubscribe();
        };
      } else {
        setUser(null);
      }
    });
  }, []);
  const authInfo = {
    user,
    createUser,
    updateProfiles,
    dummy
  };


  const googleLogin=()=>{
    return signInWithPopup()
  }
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
