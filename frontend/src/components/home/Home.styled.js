import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Play", sans-serif;
  height: 100vh;
  overflow-x: hidden;
  background-color: #edf2fa;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #628cb4;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.74);

  .header__title {
    font-size: 1.5rem;
    color: #edf2fa;
    text-shadow: 1px 3px 2px rgba(0, 0, 0, 0.84);
    display: flex;
    align-items: color-interpolation-filters;
    justify-content: space-between;

    ::first-letter {
      text-transform: uppercase;
    }

    .CgPokemon {
      width: 30px;
      height: 30px;
      color: #f34538;
    }
  }

  .header__wrapper-buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 200px;
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #edf2fa;

  .main__container__one {
    height: 100%;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 0 2rem;
    gap: 2rem;

    .main__container__one-title {
      word-break: break-all;
      width: 100%;
      max-width: 300px;
      color: #080d3d;
      text-transform: uppercase;
      font-size: 2rem;

      ::first-letter {
        text-transform: uppercase;
        color: #f34538;
      }
      font-size: 2.2rem;
    }
    .main__container__one-pharse {
      white-space: break-all;
      max-width: 500px;
      width: 100%;
      color: #080d3d;
      font-size: 0.9rem;
    }
  }
  .main__container__two {
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(to right, #edf2fa, skyblue, #3761ab);
  }

  @keyframes animationCardOne {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-20px);
    }
  }

  @keyframes animationCardTwo {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-24px);
    }
  }

  .main__container__two-card-one {
    animation: 0.8s linear 0.8s infinite alternate animationCardOne;
    background: linear-gradient(to right, #784538, #a14538, #f34538);
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.26);
    display: flex;
    align-items: end;
    justify-content: right;

    .main__wrapper-attributes {
      width: 50%;
      height: 100%;
      border-left: 2px solid rgba(300, 300, 300, 0.34);
      display: grid;
      place-items: center;
      border-radius: 0px 8px 8px 0px;

      p {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        font-size: 0.9rem;
        font-weight: 600;
        text-transform: capitalize;
        padding: 5px;
        color: #f3f3f3;
        gap: 3px;
        border-bottom: 2px solid rgba(300, 300, 300, 0.34);
        border-radius: 0px 8px 8px 0px;
        color: #fff;
        text-shadow: 1px 3px 2px #2a2a2a;
      }

      p .MdHeight,
      p .AiOutlineFire,
      p .GiWeight {
        width: 30px;
        height: 30px;
        color: #fff20c;
      }
    }
  }

  .main__container__two-card-two {
    animation: 1s linear 1s infinite alternate animationCardTwo;
    background: linear-gradient(to right, #f9f9f9, skyblue, #3761ab);
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.26);
    display: flex;
    align-items: end;
    justify-content: right;

    .main__wrapper-attributes {
      width: 50%;
      height: 100%;
      border-left: 2px solid rgba(300, 300, 300, 0.34);
      display: grid;
      place-items: center;
      border-radius: 0px 8px 8px 0px;

      p {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 1rem;
        font-weight: 600;
        text-transform: capitalize;
        color: #f3f3f3;
        border-bottom: 2px solid rgba(300, 300, 300, 0.34);
        color: #fff;
        text-shadow: 1px 3px 2px #2a2a2a;
        border-radius: 0px 8px 8px 0px;
      }

      p .MdHeight,
      p .BiWater,
      p .GiWeight {
        width: 30px;
        height: 30px;
        color: #00f2fc;
      }
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
  position: relative;
  background-color: transparent;
  .main__image-charizard {
    height: 320px;
    width: 200px;
    object-fit: cover;
    background-size: cover;
    position: absolute;
    top: -100px;
    left: -30px;
    bottom: 0;
    z-index: 1;
  }
  .main__image-blastoise {
    height: 210px;
    width: 230px;
    object-fit: cover;
    position: absolute;
    background-size: cover;
    top: -10px;
    left: -55px;
    z-index: 1;
  }
`;
