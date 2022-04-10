import * as C from "./Signup.styled";

import {
  FcGoogle,
  GrFacebookOption,
  IoCloseSharp,
  IoEyeSharp,
  BsEyeSlashFill,
} from "../../utils/icons";

import { emailIsValid, passwordIsValid } from "../../utils/regex";

import Monkey from "../../assets/Monkey.svg";
import { useContext } from "react";
import { context } from "../../contexts/context.form";
import { useState, useRef } from "react";

const Signup = () => {
  const { setRegistrationForm } = useContext(context);
  const [changeEmail, setChangeEmail] = useState();
  const [changePassword, setChangePassword] = useState();
  const [isShowPassword, setShowPassword] = useState(false);
  const [borderFieldEmail, setBorderFieldEmail] = useState("#20539f");
  const [borderFieldPassword, setBorderFieldPassword] = useState("#20539f");

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

  const handleValidFieldPassword = () => {
    if (!changePassword || !passwordIsValid.exec(changePassword)) {
      setBorderFieldPassword("#FF0000");
    } else {
      setBorderFieldPassword("#20539f");
    }
  };

  const handleSubmit = (event) => {
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
      return;
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
            <C.Input type="checkbox" />
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
            <FcGoogle className="google" />
            <GrFacebookOption className="facebook" />
          </span>
          <p className="form__account-login">
            have an account? <a href="#">login</a>
          </p>
        </C.Fieldset>
      </C.Form>
    </C.Wrapper>
  );
};

export default Signup;
