import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 1rem;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.35);
  position: absolute;
  top: 0;
  z-index: 10;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.theme.colorOneWrappingCard}, ${props.theme.colorTwoWrappingCard})`};
  display: flex;
  flex-direction: column;
/* 

  .main_container__card-header {
    width: 100%;
    ${(props) => `background: ${props.theme.colorHeaderCard}`};
    border-radius: 10px 10px 0px 0px;
    display: flex;
    justify-content: space-between;
    padding: 10px 2rem 2.8rem 2rem;
    align-items: start;
    position: relative;
    gap: 10px;

    .main__container__card-evolution {
      color: ${(props) => props.theme.attributesColor};
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
      color: ${(props) => props.theme.hp};

      .hp {
        font-weight: bold;
        font-size: 1rem;
      }
    }
  } */

  .main__wrapper-attributes-character {
    width: 100%;
    background: ${(props) =>
      `linear-gradient(to bottom, ${props.theme.colorOneWrappingCard}, ${props.theme.colorTwoWrappingCard})`};
    padding: 2rem 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content:space-between;
    position: relative;
    flex:1;

    overflow: hidden;

    ::after {
      content: "";
      width: 200px;
      height: 1px;
      right: 30px;
      ${(props) => `background: ${props.theme.finalColorCardBorder}`};
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
        color: ${(props) => props.theme.attributesColor};
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
      padding: 0 0.1rem;
      white-space: wrap;
      font-weight: 600;

      mark {
        background: transparent;
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
        color: ${(props) => props.theme.attributesColor};
      }
    }
  }

  .main__character-attached {
    width: 100%;
    ${(props) => `background: ${props.theme.colorHeaderCard}`};
    position: relative;
    color: ${(props) => props.theme.attached};

    span {
      strong,
      p {
        color: ${(props) => props.theme.attributesColor};
      }
    }

    ::after {
      content: "";
      width: 200px;
      height: 2px;
      right: 30px;
      bottom: 0;
      position: absolute;
      background: ${(props) => props.theme.finalColorCardBorder};
    }
  }

  .main__character-attributes {
    width: 100%;
    background: ${(props) => props.theme.halfCardColor};
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
      color: ${(props) => props.theme.attributesColor};
      /* .IoIosWater {
        color: skyblue;
      } */
    }
    .main__character-attributes-resistence {
      color: ${(props) => props.theme.attributesColor};
      /* .FaHandRock {
        color: brown;
      } */
    }
    .main__character-attributes-retreat-cost {
      color: ${(props) => props.theme.attributesColor};
      span {
        display: flex;
        gap: 3px;
        /* .GiFlowerStar {
          color: #2a2a2a;
        } */
      }
    }
  }

  .main__image-pokemon {
    position: absolute;
    object-fit: cover;
    width: 100px;
    height: 100px;
    right: -5px;
    top: 1px;
    z-index: 20;
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

  /* @keyframes animationCardOne {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-20px);
    }
  }



  .main__container__card-one {
    animation: 0.8s linear 0.8s infinite alternate animationCardOne;
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.26);

    @media (max-width: 948px) {
      display: none;
    }
  } */
`;
