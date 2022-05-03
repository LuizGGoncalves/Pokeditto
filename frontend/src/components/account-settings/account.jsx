import * as C from "./account.styled";
import { IoIosArrowBack, RiPencilFill } from "../../utils/icons";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "./ImageEdit";
import { context } from "../../contexts/context.form";
import { privates } from "../../contexts/private";

const Account = () => {
  const { image, setImage } = useContext(context);
  const { user } = useContext(privates);
  const [showPassword, setShowPassword] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [email, setEmail] = useState(user?.email);
  const [emailIsEdit, setEmailIsEdit] = useState(false);
  const [editImg, setEditImg] = useState(false);
  const [file, setFile] = useState([]);
  const [changePassword, setChangePassword] = useState("12344567890");

  const navigate = useNavigate();

  // handle email
  const handleEmailIsEdit = () => {
    setEmailIsEdit((prev) => !prev);
  };

  const handleEditEmail = (event) => {
    setEmail(event.target.value);

    if (email && emailIsEdit) {
      localStorage.setItem("email", JSON.stringify(email));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("email")) {
      const newEmail = JSON.parse(localStorage.getItem("email"));
      setEmail(newEmail);
    }
  }, [!emailIsEdit]);

  // handle password

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleEditPassword = () => {
    setEditPassword((prev) => !prev);

    if (changePassword && editPassword) {
      localStorage.setItem("password", JSON.stringify(changePassword));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("password")) {
      const newPassword = JSON.parse(localStorage.getItem("password"));
      setChangePassword(newPassword);
    }
  }, [!showPassword]);
  //

  const handleRedirect = () => {
    navigate("/home");
  };
  // handle   update image profile
  const handleFileImageProfile = (event) => {
    setFile(event.target.files);
  };

  const handleOpenPopup = () => setEditImg(true);

  const handleUpdateProfile = () => {
    if (file.length < 1) return;
    const img = URL.createObjectURL(file[0]);
    setImage(img);
    setEditImg(false);
  };

  return (
    <C.Wrapper>
      <C.Form
        onSubmit={(event) => event.preventDefault()}
        edit={emailIsEdit}
        IsEditEmail={emailIsEdit}
        editPassword={editPassword}
      >
        <header className="form__header__account-setting">
          <span className="form__header__account__setting-title">
            <IoIosArrowBack
              className="form__header__account__setting-icon"
              onClick={handleRedirect}
            />
            <h1 className="form__header__account__setting-title">my account</h1>
          </span>
          <span className="form__header__account__setting__profile-user">
            <img
              src={
                image.length > 0
                  ? image
                  : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst3.depositphotos.com%2F15648834%2F17930%2Fv%2F600%2Fdepositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg&f=1&nofb=1"
              }
              alt="profile user"
              className="profile"
            />

            <RiPencilFill className="icon" onClick={handleOpenPopup} />

            <Popup edit={editImg}>
              <img
                className="profile"
                src={
                  image.length > 0
                    ? image
                    : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst3.depositphotos.com%2F15648834%2F17930%2Fv%2F600%2Fdepositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg&f=1&nofb=1"
                }
              />
              <label htmlFor="popup" className="label__input-file">
                send picture
              </label>
              <input
                onChange={handleFileImageProfile}
                multiple
                accept="image/*"
                type="file"
                name="popup"
                id="popup"
                style={{ display: "none" }}
              ></input>
              <button
                onClick={handleUpdateProfile}
                className="button__update-profile"
              >
                update profile
              </button>
            </Popup>

            <strong className="profile-name">{user?.nickname}</strong>
          </span>
        </header>
        <fieldset className="form__body__account-setting">
          <span className="wrapper__inputs">
            <label htmlFor="displayname">display name</label>
            <input type="text" className="input__name" value={user?.nickname} />
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
              {emailIsEdit ? "save" : "edit"}
            </button>
          </span>
          <span className="wrapper__inputs">
            <label htmlFor="showPassword">showPassword</label>
            <input
              type={showPassword ? "text" : "password"}
              className="input__password"
              value={changePassword}
              onChange={(event) => setChangePassword(event.target.value)}
            />

            <button
              onClick={handleEditPassword}
              className="button__password-edit
            "
            >
              {editPassword ? "save" : "edit"}
            </button>

            <button
              className="button__password-change"
              onClick={handleShowPassword}
              disabled={editPassword ? true : false}
            >
              {showPassword ? "hide" : "view"}
            </button>
          </span>
        </fieldset>
      </C.Form>
    </C.Wrapper>
  );
};

export default Account;
