import styled from "styled-components";

export const Wrapper = styled.section`
  position: absolute;
  z-index: 1;
  background: #fff;
  width: 100%;
  max-width: 660px;
  display:none;
  height: 60vh;
  padding:1rem 0;
  left: 29.5vw;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 2ex;
  top: 10.6rem;
  border-radius: 0 0 50px 50px;

  .search-result {
    width: 100%;
    max-width: 350px;
    border-radius: 8px;
    height: 100%;
    max-height: 300px;
    background: #e4e4e4;
    display:none;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  background: #e4e4e4;
  padding: 10px;
  .form__wrapper-input {
    display:flex;
    align-items: center;
    justify-content: space-between;

    .FiSearch{
        width:25px;
        height:25px;
    }
    .IoCloseSharp{
        width:25px;
        height:25px;
    }
  }

  .form__input-search {
    padding: 8px;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 8px;
    background: transparent;
  }
`;
