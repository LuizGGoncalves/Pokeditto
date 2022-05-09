import * as C from "./Signin.styled";
import { useContext, useState, useRef } from "react";
import { context } from "../../contexts/context.form";

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

import { privates } from "../../contexts/private";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

const Signin = ({ setLogin }) => {
  const { setRegistrationForm } = useContext(context);
  const [changeEmail, setChangeEmail] = useState();
  const [changePassword, setChangePassword] = useState();
  const [isShowPassword, setShowPassword] = useState(false);
  const [borderFieldEmail, setBorderFieldEmail] = useState("#20539f");
  const [borderFieldPassword, setBorderFieldPassword] = useState("#20539f");

  const refPassword = useRef();

  const navigate = useNavigate();
  const { setUser } = useContext(privates);

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

  const handleValidFieldPassword = () => {
    if (!changePassword || !passwordIsValid.exec(changePassword)) {
      setBorderFieldPassword("#FF0000");
    } else {
      setBorderFieldPassword("#20539f");
    }
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
        navegate("/home");
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
        navegate("/home");
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleValidationFieldEmail();
    handleValidFieldPassword();

    if (!changeEmail || !changePassword) {
      return;
    } else if (
      !passwordIsValid.exec(changePassword) ||
      !emailIsValid.exec(changeEmail)
    ) {
      return;
    } else {
      try {
        const user = await api.post("/login", {
          email: changeEmail,
          password: changePassword,
        });

        const token = user.headers.authorization;

        await api
          .get("/jogador/online", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((online) => {
            localStorage.setItem(
              "user",
              JSON.stringify({
                nickname: online.data.name,
                email: changeEmail,
                token: token,
              })
            );
          })
          .catch((error) => {
            console.error(error);
          });

        setUser(user);
        setChangeEmail("");
        setChangePassword("");
        navigate("/home");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <C.Form onSubmit={handleSubmit} autoComplete="off">
      <IoCloseSharp
        className="IoCloseSharp"
        onClick={handleWithApplicationForm}
      />
      <strong className="form__title">
        <mark>register</mark>/ login
      </strong>
      <C.Fieldset>
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

        <C.Button>Login</C.Button>
        <p className="form__description-social-network">
          or via social network
        </p>

        <span className="form__wrapper_social-networks">
          <FcGoogle className="google" onClick={handleRedirectUserWithGoogle} />
          <GrFacebookOption
            className="facebook"
            onClick={handleRedirectUserWithFacebook}
          />
        </span>
        <p className="form__account-login">
          don't have an account?
          <a href="#" onClick={() => setLogin((prev) => !prev)}>
            register
          </a>
        </p>
      </C.Fieldset>
    </C.Form>
  );
};

export default Signin;
