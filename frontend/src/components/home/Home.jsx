import * as C from "./Home.styled";
import Button from "../button";
import charizard from "../../assets/Charizard.svg";
import charmeleon from "../../assets/Charmeleon.svg";

import {
  AiTwotoneFire,
  CgPokemon,
  IoIosWater,
  FaHandRock,
  GiFlowerStar,
} from "../../utils/icons";
import { context } from "../../contexts/context.form";

import { useContext } from "react";

const Homepage = () => {
  const { setRegistrationForm, setLoginOrRegister } = useContext(context);

  const handleWithApplicationForm = () => {
    setRegistrationForm((prev) => !prev);
  };

  const handleRedirectLogin = () => {
    setLoginOrRegister(true);
    setRegistrationForm(true);
  };

  return (
    <C.Wrapper>
      <C.Header>
        <strong className="header__title">
          poke ditto
          <CgPokemon className="CgPokemon" />
        </strong>
        <span className="header__wrapper-buttons">
          <Button
            className="header__button-connect"
            onclick={handleWithApplicationForm}
          >
            create account
          </Button>
          <Button
            className="header__button-connect"
            onclick={handleRedirectLogin}
          >
            login
          </Button>
        </span>
      </C.Header>
      <C.Main>
        <section className="main__container__one">
          <h1 className="main__container__one-title">welcome, let's play?</h1>
          <p className="main__container__one-pharse">
            if you don't have an account, create your account below
          </p>
          <Button
            className="main__container__one-button-start"
            onclick={handleWithApplicationForm}
          >
            create account
          </Button>
        </section>
        <section className="main__container__two">
          <C.Card className="main__container__card-one">
            <span className="main_container__card-header">
              <img src={charmeleon} alt="" />
              <p className="main__container__card-evolution">
                evolves from charmeleon
              </p>
              <span className="main__container__card-hp">
                hp
                <p className="hp">120</p>
                <AiTwotoneFire className="AiTwotoneFire" />
              </span>
            </span>

            <img src={charizard} className="main__image-charizard" />

            <div className="main__wrapper-attributes-character">
              <span className="main__wrapper__name-characters">
                <p className="main__character-number">#006</p>
                <strong className="main__character-name">charizard</strong>
              </span>
              <p className="main__character-description">
                flame pokémon lenght:5" 7" , weight: 200 ibs.
              </p>
              <p className="main__character-description-power">
                pokémon power: <mark> energy burn</mark>
              </p>
            </div>

            <div className="main__character-attached">
              <AiTwotoneFire className="AiTwotoneFire" />
              <span>
                <strong>fire spin</strong>
                <p>discard 2 energy cards attached to</p>
                <p>charizard in order to use this attack</p>
              </span>
              100
            </div>
            <div className="main__character-attributes">
              <div className="main__character-attributes-weakness">
                <p>weakness</p>
                <IoIosWater className="IoIosWater" />
              </div>
              <div className="main__character-attributes-resistence">
                <p>resistence</p>
                <FaHandRock className="FaHandRock" />
              </div>
              <div className="main__character-attributes-retreat-cost">
                <p>retreat cost</p>
                <span>
                  <GiFlowerStar className="GiFlowerStar" />
                  <GiFlowerStar className="GiFlowerStar" />
                  <GiFlowerStar className="GiFlowerStar" />
                </span>
              </div>
            </div>
          </C.Card>
        </section>
      </C.Main>
    </C.Wrapper>
  );
};

export default Homepage;
