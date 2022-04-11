import { createContext, useState, useEffect } from "react";

export const context = createContext();

const contextForm = ({ children }) => {
  const [isEnterForm, setEnterForm] = useState(false);
  const [isRegistrationForm, setRegistrationForm] = useState(false);

  useEffect(() => {
    console.log(isRegistrationForm);
  }, [isRegistrationForm]);

  return (
    <context.Provider
      value={{
        isEnterForm,
        setEnterForm,
        isRegistrationForm,
        setRegistrationForm,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default contextForm;
