import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #181820;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;
export const Form = styled.form`
  width: 100%;
  gap: 1rem;
  max-width: 400px;
  height: 100%;
  max-width: 500px;
  border: 1px solid #fd8c8c;
  display: flex;
  flex-direction: column;
  padding: 1rem 10px;
  border-radius: 7px;
  box-shadow: 0 5px 0 0 rgba(0, 0, 0, 54);
  align-items: center;
  justify-content: space-between;
  background: #050505;

  .form__header__account-setting {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    width: 100%;
    color: #fefefe;

    .form__header__account__setting-icon {
      width: 30px;
      height: 30px;
      background: #2a2a2a;
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.34);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fefefe;
      padding: 5px;
      cursor: pointer;
    }

    .form__header__account__setting-title {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 1rem;
      color: #fefefe;
    }
  }

  .form__header__account__setting__profile-user {
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    gap: 1.4rem;
    .profile {
      width: 100px;
      height: 100px;
      object-fit: cover;
      clip-path: circle(50% at 50% 50%);
    }
    .icon {
      position: absolute;
      top: 20px;
      left: 78px;
      width: 25px;
      height: 25px;
      background: #f4f4f4;
      border: 1px solid #050505;
      border-radius: 50%;
      padding: 3px;
      color: #050505;
    }
    .profile-name {
      text-transform: capitalize;
      font-weight: 600;
      font-size: 1.3rem;
    }
  }

  .form__body__account-setting {
    border: none;
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #21212b;
    padding: 0 10px;
    border-radius: 7px;
    align-items: start;
    gap: 2rem;
    justify-content: center;
    width: 100%;
    .wrapper__inputs {
      display: flex;
      width: 100%;
      position: relative;
      padding: 13px 0;
      justify-content: space-between;

      .button__name-edit {
        width: 50px;
        padding: 3px;
        background: #414052;
        border-color: #414052;
        color: #fff;
        outline: none;
        border-radius: 6px;

        cursor: pointer;
        :hover {
          transition: 0.4s ease;
          opacity: 0.7;
        }
      }
      .button__email-edit {
        width: 50px;
        padding: 3px;
        background: #414052;
        border-color: #414052;
        color: #fff;
        outline: none;
        border-radius: 6px;

        cursor: pointer;
        :hover {
          transition: 0.4s ease;
          opacity: 0.7;
        }
      }
      .button__password-change {
        width: 100%;
        max-width: 70px;
        padding: 3px;
        background: #414052;
        border-color: #414052;
        color: #fff;
        text-align: center;
        outline: none;
        border-radius: 6px;
        cursor: pointer;
        :hover {
          transition: 0.4s ease;
          opacity: 0.7;
        }
      }

      .input__name {
        width: 80%;
        padding: 4px;
        pointer-events: ${(props) => (props.nick ? "visible" : "none")};
        background: transparent;
        border: ${(props) => (props.IsEditNick ? "1px solid #fd8c8c" : "none")};
        outline: none;
        color: #fefefe;
      }

      .input__email {
        width: 80%;
        padding: 4px;
        pointer-events: ${(props) => (props.edit ? "visible" : "none")};
        background: transparent;
        border: ${(props) =>
          props.IsEditEmail ? "1px solid #fd8c8c" : "none"};
        outline: none;
        color: #fefefe;
      }

      .email {
        color: #fefefe;
        display: none;
      }

      .input__password {
        width: 80%;
        padding: 4px;
        pointer-events: none;
        background: transparent;
        color: #fff;
        border: none;
        outline: none;
      }

      label {
        position: absolute;
        font-size: 0.8rem;
        top: -5px;
        color: #fd8c8c;
      }
    }
  }
`;
