import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);

  const data = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka",
  };

  const toggleAuth = () => {
    //if user is logged in
    if (isAuth) {
      setIsAuth(false);
      setToken(null);
      return;
    }
    //if user is not logged in
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(data => {
        setIsAuth(true);
        setToken(data.token);
      });
  };

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth, token }}>
      {children}
    </AuthContext.Provider>
  );
};
