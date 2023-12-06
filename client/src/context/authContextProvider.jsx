import { useState } from "react";
import AuthContext from "./authContext.js";

const AuthContextProvider = ({ children }) => {
  const initialUser = JSON.parse(localStorage.getItem("user")) || null;
  const [user, setUser] = useState(initialUser);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
