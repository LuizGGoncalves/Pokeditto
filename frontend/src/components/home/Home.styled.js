import styled from "styled-components";
import back from "../../assets/background.png";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #1c1a54;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.74);

  .header__title {
    font-size: 1.5rem;
    color: #edf2fa;
    text-shadow: 1px 3px 2px rgba(0, 0, 0, 0.84);
    display: flex;
    align-items: center;
    justify-content: space-between;

    ::first-letter {
      text-transform: uppercase;
    }

    .CgPokemon {
      width: 30px;
      height: 30px;
      color: #f34538;
    }

    @media (max-width: 600px) {
      width: 100%;
      align-items: center;
    }
  }

  .header__wrapper-buttons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 200px;

    @media (max-width: 600px) {
      display: none;
    }
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
    @media (max-width: 600px) {
      display: flex;
      align-items: center;
      justify-content: center;

      .main__container__one-title {
        width: 100%;
        text-align: center;
      }

      .main__container__one-pharse {
        width: 100%;
        text-align: center;
      }
    }
  }
  .main__container__two {
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    background-size: 70vh;
    background-image: url(${back});
    background-repeat: repeat;
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

  .main__container__card-one {
    animation: 0.8s linear 0.8s infinite alternate animationCardOne;
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.26);

    @media (max-width: 948px) {
      display: none;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 1rem;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
  position: relative;
  background: linear-gradient(to bottom, #f3b330, #e3c398);
  display: flex;
  flex-direction: column;

  .AiTwotoneFire {
    color: orangered;
  }

  .main_container__card-header {
    width: 100%;
    background: #e5e7e6;
    border-radius: 10px 10px 0px 0px;
    display: flex;
    justify-content: space-between;
    padding: 10px 2rem 2.8rem 2rem;
    align-items: start;
    position: relative;
    gap: 10px;

    .main__container__card-evolution {
      white-space: nowrap;
      margin-left: 1rem;
      text-transform: capitalize;
    }

    img {
      width: 30px;
      height: 30px;
      object-fit: cover;
      position: absolute;
      left: 5px;
    }
    .main__container__card-hp {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2px;
      padding: 2px;
      color: #2a2a2a;

      .hp {
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }

  .main__wrapper-attributes-character {
    width: 100%;
    background: linear-gradient(to bottom, #f3b330, #e3c398, #e5e7e6);
    padding: 2rem 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    position: relative;

    ::after {
      content: "";
      width: 290px;
      height: 1px;
      right: 12px;
      background: #e3c398;
      bottom: 0px;
      position: absolute;
    }

    .main__wrapper__name-characters {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: start;
      text-align: left;
      margin-bottom: 1.5rem;

      .main__character-number {
        color: #2a2a2a;
      }

      .main__character-name {
        font-size: 1.5rem;
        text-transform: capitalize;
      }
    }

    .main__character-description {
      width: 100%;
    }

    .main__character-description {
      text-align: center;
      font-size: 0.8rem;
      padding: 0 1rem;
      white-space: nowrap;
      font-weight: 600;

      mark {
        background: transparent;
        color: red;
      }
    }
    .main__character-description-power {
      width: 100%;
      text-align: center;
      font-size: 0.8rem;
      padding: 0 1rem;
      font-weight: 600;

      mark {
        background: transparent;
        color: orangered;
      }
    }
  }

  .main__character-attached {
    width: 100%;
    background: #e5e7e6;
    position: relative;

    ::after {
      content: "";
      width: 290px;
      height: 1px;
      right: 12px;
      background: #e3c398;
      bottom: 0px;
      position: absolute;
    }
  }

  .main__character-attributes {
    width: 100%;
    background: #e5e7e6;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    padding: 1rem 10px;
    align-items: center;
    justify-content: center;
    gap: 10px;

    div {
      display: flex;
      flex-direction: column;
      padding: 3px;
      align-items: center;
      justify-content: center;
      gap: 8px;

      p {
        font-size: 0.9rem;
      }
    }
    .main__character-attributes-weakness {
      .IoIosWater {
        color: skyblue;
      }
    }
    .main__character-attributes-resistence {
      .FaHandRock {
        color: brown;
      }
    }
    .main__character-attributes-retreat-cost {
      span {
        display: flex;
        gap: 3px;
        .GiFlowerStar {
          color: #2a2a2a;
        }
      }
    }
  }

  .main__image-charizard {
    position: absolute;
    object-fit: cover;
    width: 130px;
    height: 130px;
    right: 40px;
    top: 50px;
    z-index: 10;
  }
  .main__character-attached {
    display: flex;
    padding: 1rem 10px;
    align-items: center;
    justify-content: space-around;
    font-weight: 600;
    font-size: 1.1rem;
    width: 100%;

    span {
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;
      font-weight: normal;

      strong {
        text-transform: capitalize;
        font-size: 1rem;
      }
    }
  }
`;
