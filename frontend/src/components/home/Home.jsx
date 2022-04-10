import * as C from "./Home.styled";
import Button from "../button";
import mewtwo from "../../assets/charizard.svg";
import blastoise from "../../assets/Blastoise.svg";

import {
  BiWater,
  AiOutlineFire,
  GiWeight,
  MdHeight,
  CgPokemon,
} from "../../utils/icons";
import { context } from "../../contexts/context.form";

import { useContext } from "react";

const Homepage = () => {
  const { setRegistrationForm } = useContext(context);

  const handleWithApplicationForm = () => {
    setRegistrationForm((prev) => !prev);
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
          <Button className="header__button-connect">login</Button>
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
          <C.Card className="main__container__two-card-one">
            <img src={mewtwo} className="main__image-charizard" />
            <div className="main__wrapper-attributes">
              <p className="name__attributes">charizard</p>
              <p className="height__attributes">
                <span className="height">height</span>
                1.7 m
                <MdHeight className="MdHeight" />
              </p>
              <p className="type__attributes">
                <span className="type">type</span>
                fire | flying
                <AiOutlineFire className="AiOutlineFire" />
              </p>
              <p className="weight__attributes">
                <span className="weight">weight</span>
                90.5 kg
                <GiWeight className="GiWeight" />
              </p>
            </div>
          </C.Card>
          <C.Card className="main__container__two-card-two">
            <img src={blastoise} className="main__image-blastoise" />
            <div className="main__wrapper-attributes">
              <p className="name__attributes">blastoise</p>
              <p className="height__attributes">
                <span className="height">height</span>
                1.6 m
                <MdHeight className="MdHeight" />
              </p>
              <p className="type__attributes">
                <span className="type">type</span>
                Water
                <BiWater className="BiWater" />
              </p>
              <p className="weight__attributes">
                <span className="weight">weight</span>
                85.5 kg
                <GiWeight className="GiWeight" />
              </p>
            </div>
          </C.Card>
        </section>
      </C.Main>
    </C.Wrapper>
  );
};

export default Homepage;
