import * as C from "./Signup.styled";
import { useContext, useState, useRef } from "react";
import { context } from "../../contexts/context.form";

import { useNavigate } from "react-router-dom";

import { handleSigninWithFacebook } from "../../firebase/firebaseFacebook.auth";
import { handleSigninWithGoogle } from "../../firebase/firebaseGoogle.auth";

import {
  FcGoogle,
  GrFacebookOption,
  IoCloseSharp,
  IoEyeSharp,
  BsEyeSlashFill,
} from "../../utils/icons";

import { emailIsValid, passwordIsValid } from "../../utils/regex";

import Monkey from "../../assets/Monkey.svg";
import { privates } from "../../contexts/private";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.auth";
import { api } from "../../api/api";

const Signup = ({ setLogin }) => {
  const { setRegistrationForm } = useContext(context);
  const [changeEmail, setChangeEmail] = useState();
  const [changePassword, setChangePassword] = useState();
  const [isShowPassword, setShowPassword] = useState(false);
  const [borderFieldEmail, setBorderFieldEmail] = useState("#20539f");
  const [borderFieldPassword, setBorderFieldPassword] = useState("#20539f");
  const [valueCheckbox, setValueCheckbox] = useState(false);
  const [changeName, setChangeName] = useState("");
  const [borderFieldName, setBorderFieldName] = useState("#20539f");
  const navigate = useNavigate();
  const { setUser } = useContext(privates);

  const refPassword = useRef();

  const handleWithApplicationForm = () => {
    setRegistrationForm((prev) => !prev);
  };

  const handleShowPassword = () => {
    refPassword.current.type = "text";
    setShowPassword((prev) => !prev);
  };

  const handleHidePassword = () => {
    refPassword.current.type = "password";
    setShowPassword((prev) => !prev);
  };

  const handleValidationFieldEmail = () => {
    if (!changeEmail || !emailIsValid.exec(changeEmail)) {
      setBorderFieldEmail("#FF0000");
    } else {
      setBorderFieldEmail("#20539f");
    }
  };

  const handleValidationFieldName = () => {
    if (!changeName) {
      setBorderFieldName("#FF0000");
    } else {
      setBorderFieldName("#20539f");
    }
  };

  const handleValidFieldPassword = () => {
    if (!changePassword || !passwordIsValid.exec(changePassword)) {
      setBorderFieldPassword("#FF0000");
    } else {
      setBorderFieldPassword("#20539f");
    }
  };

  const handleSetValueCheckbox = () => {
    setValueCheckbox(!valueCheckbox);
  };

  const handleRedirectUserWithGoogle = () => {
    handleSigninWithGoogle();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const name = user.displayName;
        const email = user.email;
        localStorage.setItem(
          "user",
          JSON.stringify({ nickname: name, id: uid, email: email })
        );
        setUser({ nickname: name, id: uid, email: email });
        navigate("/home");
      }
    });
  };

  const handleRedirectUserWithFacebook = () => {
    handleSigninWithFacebook();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const name = user.displayName;
        const email = user.email;
        localStorage.setItem(
          "user",
          JSON.stringify({ nickname: name, id: uid, email: email })
        );
        setUser({ nickname: name, id: uid, email: email });
        navigate("/home");
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleValidationFieldEmail();
    handleValidFieldPassword();
    handleValidationFieldName();

    if (!changeEmail || !changePassword || !valueCheckbox || !changeName) {
      return;
    }
    if (
      !passwordIsValid.exec(changePassword) ||
      !emailIsValid.exec(changeEmail)
    ) {
      return;
    }

    try {
      const user = await api.post("/jogador", {
        name: changeName,
        email: changeEmail,
        password: changePassword,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          nickname: changeName,
          email: changeEmail,
        })
      );

      setUser(user);
      setChangeEmail("");
      setChangePassword("");
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <C.Wrapper>
      <img src={Monkey} className="form__background-image" />
      <C.Form onSubmit={handleSubmit} autoComplete="off">
        <IoCloseSharp
          className="IoCloseSharp"
          onClick={handleWithApplicationForm}
        />
        <strong className="form__title">
          register/
          <mark>login</mark>
        </strong>
        <C.Fieldset>
          <span className="form__wrapper__input-name">
            <label htmlFor="" className="form__label__input-name">
              name
            </label>
            <C.Input
              className="name"
              value={changeName}
              onChange={(event) => setChangeName(event.target.value)}
              type="text"
              placeholder="nickname"
              style={{
                borderColor: `${borderFieldName}`,
              }}
            />
          </span>
          <span className="form__wrapper__input-email">
            <label htmlFor="email" className="form__label__input-email">
              email
            </label>
            <C.Input
              className="email"
              value={changeEmail}
              onChange={(event) => setChangeEmail(event.target.value)}
              type="email"
              placeholder="Enter your Email"
              style={{
                borderColor: `${borderFieldEmail}`,
              }}
            />
          </span>
          <span className="form__wrapper__input-password">
            <label htmlFor="password" className="form__label__input-password">
              password
            </label>
            <div
              className="form__wrapper__input-show-password"
              style={{ borderColor: `${borderFieldPassword}` }}
            >
              <IoEyeSharp
                className="IoEyeSharp"
                showPassword={isShowPassword}
                onClick={handleHidePassword}
                style={
                  isShowPassword ? { display: "block" } : { display: "none" }
                }
              />
              <BsEyeSlashFill
                className="BsEyeSlashFill"
                showPassword={isShowPassword}
                onClick={handleShowPassword}
                style={
                  isShowPassword ? { display: "none" } : { display: "block" }
                }
              />
              <C.Input
                className="password"
                value={changePassword}
                onChange={(event) => setChangePassword(event.target.value)}
                ref={refPassword}
                type="password"
                placeholder="password"
                maxLength="20"
              />
            </div>
          </span>
          <span className="form__wrapper__input-checkbox">
            <C.Input
              type="checkbox"
              onChange={handleSetValueCheckbox}
              checked={valueCheckbox}
            />
            <p className="form_description-privacy-policy">
              i am 18 years old and i have read and accept{" "}
              <a href="#">terms and conditions</a>
              and <a href="#">privacy policy</a>
            </p>
          </span>
          <C.Button>Registration</C.Button>
          <p className="form__description-social-network">
            or via social network
          </p>

          <span className="form__wrapper_social-networks">
            <FcGoogle
              className="google"
              onClick={handleRedirectUserWithGoogle}
            />
            <GrFacebookOption
              className="facebook"
              onClick={handleRedirectUserWithFacebook}
            />
          </span>
          <p className="form__account-login">
            have an account?{" "}
            <a href="#" onClick={() => setLogin((prev) => !prev)}>
              login
            </a>
          </p>
        </C.Fieldset>
      </C.Form>
    </C.Wrapper>
  );
};

export default Signup;
