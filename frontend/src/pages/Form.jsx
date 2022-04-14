import Signup from "../components/signup";
import Signin from "../components/signin";
import { useContext } from "react";
import { context } from "../contexts/context.form";



const Form = () => {
  const { loginOrRegister, setLoginOrRegister } = useContext(context);
  return (
    <>
      {loginOrRegister ? (
        <Signin setLogin={setLoginOrRegister} />
      ) : (
        <Signup setLogin={setLoginOrRegister} />
      )}
    </>
  );
};

export default Form;
