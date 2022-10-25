import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  background: rgba(0, 0, 0, 0.99);
  width: 100%;
  height: 70vh;
  top: 0;
  left: 0;
  display: ${(props) => (props.edit ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 10px;
  flex-direction: column;

  .label__input-file {
    width: 120px;
    padding: 3px;
    background: #fd8c8c;
    color: #000;
    outline: none;
    border-radius: 6px;
    text-align: center;
    box-shadow: 0 4px 0 0 #ff7c9d;

    cursor: pointer;
    :hover {
      transition: 0.4s ease;
      opacity: 0.7;
    }
  }

  .profile {
    width: 100px;
    height: 100px;
    object-fit: cover;
    clip-path: circle(50% at 50% 50%);
  }

  .button__update-profile {
    width: 120px;
    padding: 3px;
    background: #414052;
    border-color: #414052;
    color: #fff;
    outline: none;
    border-radius: 6px;
    box-shadow: 0 4px 0 0 #414052;

    cursor: pointer;
    :hover {
      transition: 0.4s ease;
      opacity: 0.7;
    }
  }
`;
