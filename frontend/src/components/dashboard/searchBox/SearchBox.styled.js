import styled from "styled-components";

export const Wrapper = styled.section`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.45);
  width: 100%;
  height: 100vh;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 2ex;

  .search-result {
    width: 100%;
    max-width: 350px;
    border-radius: 8px;
    border: 1px solid #d8403c;
    height: 100%;
    max-height: 300px;
    background: transparent;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 3px 0 0 #d8403c;
  background: #fff;
  overflow: hidden;
  height: 80%;
  padding: 0 9px;
  margin-top: 30px;

  li {
    list-style: none;
  }

  .form__header {
    display: flex;
    flex-direction: column;
    padding: 1rem 10px;
    gap: 10px;

    .form__header-search {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;

      .form__header-icon-close {
        width: 20px;
        height: 20px;
        color: #d8403c;
        cursor: pointer;
      }
      .form__header__icon-search {
        width: 20px;
        height: 20px;
        color: #d8403c;
      }
      .form__header-input-search {
        flex: 1;
        border: none;
        outline: none;
        padding: 5px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      }

      .form__button-clear {
        ::first-letter {
          text-transform: capitalize;
        }
        outline: none;
        background: transparent;
        border: none;
        border-bottom: 1px solid black;
        font-weight: 600;
        font-size: 0.8rem;
        cursor: pointer;
        height: 100%;
        padding: 3px;
        letter-spacing: 1px;

        :hover {
          transition: 0.4s ease;
          opacity: 0.8;
        }
      }
    }
  }
  .form__header-options {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    position: relative;

    #poke {
      right: 120px;
      position: absolute;
      bottom: 0;
    }
    #all {
      position: absolute;
      bottom: 0;
    }
    .options {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 10px;
      padding: 4px;
      cursor: pointer;
      text-transform: capitalize;

      .pokeball {
        width: 20px;
        height: 20px;
        color: #d8403c;
      }

      .count {
        background: #2a2a2a;
        color: #f4f4f4;
        box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.34);
        border-radius: 8px;
        padding: 3px 8px;
        font-size: 0.8rem;
      }
    }
  }

  .form__show-results {
    padding: 1px 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-height: 300px;
    overflow-y: scroll;
    scrollbar-color: #d8403c #f3f3f3;
    scrollbar-width: thin;
    scroll-behavior: smooth;
    p {
      padding: 10px 10px;
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      margin-bottom: 5px;
    }
  }
`;
