import * as C from "./account.styled";
import { IoIosArrowBack, RiPencilFill } from "../../utils/icons";
import { useRef, useState } from "react";
import {useNavigate} from "react-router-dom";

const Account = () => {
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState("janejoe@gmail.com");
  const [emailIsEdit, setEmailIsEdit] = useState(false);
  const [nickname, setNickname] = useState("jane3w432");
  const [nicknameIsEdit , setNicknameIsEdit] = useState(false);
  const navigate = useNavigate();
  const showPassword = useRef();

  const handleShowPassword = () => {
    setPassword((prev) => !prev);

    password
      ? (showPassword.current.type = "text")
      : (showPassword.current.type = "password");
  };
  const handleEditEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleEditNickname = (event) => {
    setNickname(event.target.value)
  }

  const handleNicknameIsEdit = () => {
    setNicknameIsEdit(prev => !prev)
  }

  const handleEmailIsEdit = () => {
    setEmailIsEdit((prev) => !prev);
  };

  const handleRedirect = () => {
    navigate("/home")
  }

  return (
    <C.Wrapper>
      <C.Form onSubmit={(event) => event.preventDefault()} edit={emailIsEdit} nick={nicknameIsEdit}>
        <header className="form__header__account-setting">
          <span className="form__header__account__setting-title">
            <IoIosArrowBack className="form__header__account__setting-icon" onClick={handleRedirect}/>
            <h1 className="form__header__account__setting-title">my account</h1>
          </span>
          <span className="form__header__account__setting__profile-user">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst3.depositphotos.com%2F15648834%2F17930%2Fv%2F600%2Fdepositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg&f=1&nofb=1"
              alt="profile user"
              className="profile"
            />
            <RiPencilFill className="icon" />
            <strong className="profile-name">jane doe</strong>
          </span>
        </header>
        <fieldset className="form__body__account-setting">
          <span className="wrapper__inputs">
            <label htmlFor="displayname">display name</label>
            <input type="text" className="input__name" onChange={handleEditNickname} value={nickname}/>
        
            <button className="button__name-edit" onClick={handleNicknameIsEdit}>edit</button>
          </span>
          <span className="wrapper__inputs">
            <label htmlFor="email">email</label>
            <input
              type="email"
              className="input__email"
              value={email}
              onChange={handleEditEmail}
            />

            <button className="button__email-edit" onClick={handleEmailIsEdit}>
              edit
            </button>
          </span>
          <span className="wrapper__inputs">
            <label htmlFor="password">password</label>
            <input
              type="password"
              className="input__password"
              value="34324654654"
              ref={showPassword}
            />

            <button
              className="button__password-change"
              onClick={handleShowPassword}
            >
              change
            </button>
          </span>
        </fieldset>
      </C.Form>
    </C.Wrapper>
  );
};

export default Account;
