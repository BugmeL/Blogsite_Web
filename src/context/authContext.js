import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [User, SetUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
  )

  const login = async (inputs) => {
   const res = await axios.post("http://localhost:8800/api/auth/login", inputs);
   
   console.log(res.data)
    SetUser(res.data);
  }
  const logout = async (inputs) => {
    await axios.post("/auth/logout");
    SetUser(null);
  
  };

  useEffect(() => {

    localStorage.setItem("user", JSON.stringify(User));
  }, 
  );

  return (
    <AuthContext.Provider value={{User ,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};