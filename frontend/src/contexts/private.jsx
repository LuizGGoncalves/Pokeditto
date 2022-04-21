import { createContext, useEffect } from "react";
import { useState } from "react";

export const privates = createContext();

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSignin, setIsSignin] = useState(false);

  useEffect(() => {
    const checkUser = localStorage.getItem("user");

    if (checkUser) {
      setUser(JSON.parse(checkUser));
    }
    setLoading(false);
  }, []);

  return (
    <privates.Provider
      value={{ auth: !!user, user, setUser, loading, isSignin, setIsSignin }}
    >
      {children}
    </privates.Provider>
  );
};

export default PrivateRoute;
