// UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ isLoggedIn: false, name: "" });

  const login = (name) => setUser({ isLoggedIn: true, name });
  const logout = () => setUser({ isLoggedIn: false, name: "" });

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
