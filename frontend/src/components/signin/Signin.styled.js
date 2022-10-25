import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  max-width: 330px;
  margin: 0 auto;
  margin-top: 70px;
  gap: 10px;
  padding: 1rem 1.1rem;
  background-color: #07030b;
  position: relative;
  color: #fff;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.74);

  .form__title {
    font-size: 1.2rem;
    ::first-letter {
      text-transform: uppercase;
    }

    mark {
      background: transparent;
      color: rgba(300, 300, 300, 0.5);
    }
  }

  .IoCloseSharp {
    width: 25px;
    height: 25px;
    position: absolute;
    z-index: 1;
    right: 2px;
    top: 2px;
    cursor: pointer;

    :hover {
      transition: 0.4s ease;
      opacity: 0.8;
    }
  }
`;
export const Fieldset = styled.fieldset`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 1rem 0;
  border: none;
  width: 100%;
  gap: 14px;

  .form__wrapper__input-email {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.6rem 0;
    position: relative;

    .email {
      padding: 10px;
      background: transparent;
      outline: none;
      border: 1px solid #20539f;
      border-radius: 3px;
      color: #fff;
    }

    .form__label__input-email {
      font-size: 0.9rem;
      margin-bottom: 3px;
    }
  }

  .form__wrapper__input-password {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0.6rem 0;
    position: relative;

    .form__wrapper__input-show-password {
      width: 100%;
      border: 1px solid #20539f;
      border-radius: 3px;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      position: relative;

      .IoEyeSharp {
        width: 20px;
        height: 20px;
        top: 8px;
        right: 6px;
        position: absolute;
        color: skyblue;
        z-index: 1;
        cursor: pointer;
      }
      .BsEyeSlashFill {
        width: 20px;
        height: 20px;
        top: 8px;
        z-index: 1;
        right: 6px;
        position: absolute;
        color: skyblue;
        cursor: pointer;
      }
    }

    .password {
      padding: 10px;
      background: transparent;
      outline: none;
      color: #fff;
      border: none;
      width: 100%;
    }
    .form__label__input-password {
      font-size: 0.9rem;
      margin-bottom: 3px;
    }
  }

  .form__wrapper__input-checkbox {
    display: flex;
    padding: 1rem 0;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;

    input[type="checkbox"] {
      cursor: pointer;
    }

    .form_description-privacy-policy {
      font-size: 0.8rem;
      width: 100%;

      ::first-letter {
        text-transform: uppercase;
      }

      a {
        text-decoration: none;
        color: #20539f;
        width: 100%;
        text-align: center;
        color: skyblue;
      }

      a:first-child {
        margin-right: 3px;
      }
      a:last-child {
        margin-right: 3px;
      }
    }
  }

  .form__description-social-network {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    font-size: 0.8rem;
    color: #c2c2c2;
  }

  .form__wrapper_social-networks {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    padding: 1rem 0;

    .google,
    .facebook {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }

    .facebook {
      background: #20539f;
      border-radius: 50%;
      padding: 3px;
      color: #fff;
    }
  }

  .form__account-login {
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 0.9rem;

    a {
      text-decoration: none;
      color: skyblue;
    }
  }
`;
export const Input = styled.input``;
export const Button = styled.button`
  background-color: #20539f;
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  outline: none;
  border: none;
  color: #f2f2f2;
  font-weight: 600;
  font-size: 1rem;

  :hover {
    transition: 0.4s ease;
    opacity: 0.8;
  }
`;
