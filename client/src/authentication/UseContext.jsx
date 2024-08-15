import React, { createContext, useState } from "react";
export const AuthContext = createContext(null);
const UseContext = ({ children }) => {
  const [user, setUser] = useState("AKBOR");
  const authInfo = {
    user,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UseContext;
