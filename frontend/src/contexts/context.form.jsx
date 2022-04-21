import { createContext, useState, useEffect } from "react";

export const context = createContext();

const contextForm = ({ children }) => {
  const [isEnterForm, setEnterForm] = useState(false);
  const [isRegistrationForm, setRegistrationForm] = useState(false);
  const [loginOrRegister, setLoginOrRegister] = useState(false);


  return (
    <context.Provider
      value={{
        isEnterForm,
        setEnterForm,
        isRegistrationForm,
        setRegistrationForm,
        loginOrRegister,
        setLoginOrRegister,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default contextForm;
