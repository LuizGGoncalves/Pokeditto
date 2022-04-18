import * as C from "./Card.styled";

const Card = ({ children, colorOne , colorTwo }) => {
  return (
    <C.Card colorOne={colorOne}
    colorTwo={colorTwo}
   
    >
      {children}
      {/*          <span className="main_container__card-header">
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
            </div> */}
    </C.Card>
  );
};

export default Card;
